// Diff the latest stock snapshot against the previous one and append real
// RESTOCK / SOLD_OUT / PRICE_DROP events to src/data/events.json. Then rotate
// latest -> prev. Runs after scripts/track.mjs in the GitHub Action.
import { readFile, writeFile, rename } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const SNAP = join(root, 'pipeline', 'stock-snapshots');
const EVENTS = join(root, 'src', 'data', 'events.json');
const latestPath = join(SNAP, 'latest.json');
const prevPath = join(SNAP, 'prev.json');

if (!existsSync(latestPath)) { console.log('no latest snapshot; nothing to diff'); process.exit(0); }
const latest = JSON.parse(await readFile(latestPath, 'utf8')).items || [];
const prev = existsSync(prevPath) ? (JSON.parse(await readFile(prevPath, 'utf8')).items || []) : [];
const prevById = Object.fromEntries(prev.map((i) => [i.id, i]));

// enrich titles from product DB
const prod = {};
for (const bay of ['racing', 'flight', 'space', 'marine', 'golf']) {
  const f = join(root, 'src', 'data', 'products', `${bay}.json`);
  if (existsSync(f)) for (const p of JSON.parse(await readFile(f, 'utf8'))) prod[p.id] = p;
}

const today = new Date().toISOString().slice(0, 10);
const newEvents = [];
const label = (id) => { const p = prod[id]; return p ? `${p.brand} ${p.model}` : id; };
for (const it of latest) {
  const was = prevById[it.id]; if (!was) continue;
  const p = prod[it.id] || {};
  const base = { date: today, bay: it.bay, productId: it.id, brand: p.brand, model: p.model };
  if (was.inStock === false && it.inStock === true)
    newEvents.push({ id: `auto-${it.id}-${today}-restock`, type: 'RESTOCK', title: `${label(it.id)} is back in stock`, note: it.price ? `Now ~$${it.price}.` : 'Back in stock.', ...base });
  else if (was.inStock === true && it.inStock === false)
    newEvents.push({ id: `auto-${it.id}-${today}-soldout`, type: 'SOLD_OUT', title: `${label(it.id)} sold out`, note: 'Out of stock at the tracked vendor.', ...base });
  if (was.price && it.price && it.price < was.price) {
    const pct = Math.round(((was.price - it.price) / was.price) * 100);
    newEvents.push({ id: `auto-${it.id}-${today}-drop`, type: 'PRICE_DROP', title: `${label(it.id)} price drop (-${pct}%)`, note: `Down from ~$${was.price} to ~$${it.price}.`, ...base });
  }
}

if (newEvents.length) {
  const events = JSON.parse(await readFile(EVENTS, 'utf8'));
  const seen = new Set(events.map((e) => e.id));
  const fresh = newEvents.filter((e) => !seen.has(e.id));
  const merged = [...fresh, ...events].slice(0, 80);
  await writeFile(EVENTS, JSON.stringify(merged, null, 2));
  console.log(`Appended ${fresh.length} real stock events.`);
} else {
  console.log('No stock changes this run.');
}
await rename(latestPath, prevPath).catch(() => {});
