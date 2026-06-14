// Live stock/price tracker — reads pipeline/track-config.json, fetches each
// product's page, and extracts price + availability from Product JSON-LD
// (offers) or og:price meta. Respects robots.txt, polite delays, public data only.
// Writes pipeline/stock-snapshots/latest.json. Designed for the GitHub Action cron.
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const CFG = join(root, 'pipeline', 'track-config.json');
const SNAP = join(root, 'pipeline', 'stock-snapshots');
const UA = 'IgnitionSimBot/1.0 (+https://ignitionsim.com; stock tracker)';
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const robotsCache = {};

async function allowed(url) {
  try {
    const u = new URL(url);
    if (!(u.origin in robotsCache)) {
      const r = await fetch(u.origin + '/robots.txt', { headers: { 'User-Agent': UA } }).catch(() => null);
      robotsCache[u.origin] = r && r.ok ? await r.text() : '';
    }
    const txt = robotsCache[u.origin];
    // naive: honor a global "User-agent: *" Disallow that matches our path
    const lines = txt.split(/\r?\n/); let star = false; const dis = [];
    for (const l of lines) {
      const m = l.split('#')[0].trim();
      if (/^user-agent:/i.test(m)) star = /\*/.test(m.split(':')[1] || '');
      else if (star && /^disallow:/i.test(m)) { const p = m.split(':')[1].trim(); if (p) dis.push(p); }
    }
    return !dis.some((p) => u.pathname.startsWith(p));
  } catch { return true; }
}

function extract(html) {
  // Product JSON-LD
  const blocks = [...html.matchAll(/<script[^>]+application\/ld\+json[^>]*>([\s\S]*?)<\/script>/gi)];
  for (const b of blocks) {
    try {
      const data = JSON.parse(b[1].trim());
      const arr = Array.isArray(data) ? data : (data['@graph'] || [data]);
      for (const node of arr) {
        if (node && /product/i.test(node['@type'] || '')) {
          const offer = Array.isArray(node.offers) ? node.offers[0] : node.offers;
          if (offer) {
            const price = parseFloat(String(offer.price || offer.lowPrice || '').replace(/[^0-9.]/g, ''));
            const avail = String(offer.availability || '').toLowerCase();
            return { price: isFinite(price) ? price : null, inStock: avail ? !/outofstock|soldout|discontinued/.test(avail) : null };
          }
        }
      }
    } catch { /* skip */ }
  }
  // meta fallback
  const pm = html.match(/property=["']product:price:amount["'][^>]*content=["']([\d.]+)/i) || html.match(/property=["']og:price:amount["'][^>]*content=["']([\d.]+)/i);
  return { price: pm ? parseFloat(pm[1]) : null, inStock: null };
}

const cfg = JSON.parse(await readFile(CFG, 'utf8'));
const products = cfg.products || [];
const items = [];
for (const p of products) {
  if (!p.url) continue;
  if (!(await allowed(p.url))) { console.log('robots-disallowed, skip', p.id); continue; }
  try {
    const res = await fetch(p.url, { headers: { 'User-Agent': UA } });
    if (!res.ok) { console.log('HTTP', res.status, p.id); continue; }
    const { price, inStock } = extract(await res.text());
    items.push({ id: p.id, bay: p.bay, price, inStock, ts: cfg._stampISO || null });
    console.log(`· ${p.id}: $${price ?? '?'} ${inStock === null ? '' : inStock ? 'in-stock' : 'sold-out'}`);
  } catch (e) { console.log('err', p.id, e.message); }
  await sleep(2500);
}
await mkdir(SNAP, { recursive: true });
await writeFile(join(SNAP, 'latest.json'), JSON.stringify({ items }, null, 2));
console.log(`Tracked ${items.length}/${products.length} products → stock-snapshots/latest.json`);
