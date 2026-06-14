// Atmospheric photography for bay heroes/sliders + hub, from Unsplash and/or Pexels.
// Both used COMPLIANTLY: hotlink (store CDN urls, use directly as <img src>; never re-host),
// attribute the photographer + source (Unsplash also gets a download_location ping + utm).
// Output: src/data/photography.json (public urls + credits incl. `source`; no API key).
// Run:  UNSPLASH_ACCESS_KEY=xxx PEXELS_API_KEY=yyy node scripts/fetch-photography.mjs [zones]
//       (either/both keys; merges into existing; optional comma-zone filter)
import { writeFile, readFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const OUT = join(root, 'src', 'data', 'photography.json');
const UNSPLASH = process.env.UNSPLASH_ACCESS_KEY;
const PEXELS = process.env.PEXELS_API_KEY;
const UTM = '?utm_source=ignitionsim&utm_medium=referral';
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
if (!UNSPLASH && !PEXELS) { console.log('Set UNSPLASH_ACCESS_KEY and/or PEXELS_API_KEY.'); process.exit(0); }

const ZONES = {
  racing: { queries: ['sim racing cockpit setup', 'racing wheel gaming', 'racing simulator'], target: 6 },
  flight: { queries: ['flight simulator cockpit', 'airplane cockpit', 'aviation cockpit instruments'], target: 6 },
  space: { queries: ['spaceship cockpit dark', 'sci-fi cockpit', 'starfield night sky'], target: 6 },
  marine: { queries: ['ship helm wheel', 'boat steering wheel', 'sailing yacht'], target: 6 },
  golf: { queries: ['indoor golf simulator', 'golf simulator screen', 'golf course'], target: 6 },
  hub: { queries: ['gaming setup dark', 'simulator cockpit', 'gaming room neon'], target: 4 },
};
const only = (process.argv[2] || '').split(',').filter(Boolean);
const zones = only.length ? only : Object.keys(ZONES);

async function unsplash(q) {
  const r = await fetch(`https://api.unsplash.com/search/photos?query=${encodeURIComponent(q)}&orientation=landscape&per_page=6&content_filter=high`,
    { headers: { Authorization: 'Client-ID ' + UNSPLASH, 'Accept-Version': 'v1' } });
  if (!r.ok) throw new Error('unsplash ' + r.status);
  return (await r.json()).results.map((p) => ({
    key: 'u' + p.id, src: p.urls.raw + '&w=1600&h=760&fit=crop&q=80&auto=format', alt: p.alt_description || '',
    by: p.user.name, byUrl: (p.user.links?.html || 'https://unsplash.com') + UTM, photoUrl: (p.links?.html || '') + UTM,
    source: 'Unsplash', dl: p.links.download_location,
  }));
}
async function pexels(q) {
  const r = await fetch(`https://api.pexels.com/v1/search?query=${encodeURIComponent(q)}&orientation=landscape&per_page=8`,
    { headers: { Authorization: PEXELS } });
  if (!r.ok) throw new Error('pexels ' + r.status);
  return (await r.json()).photos.map((p) => ({
    key: 'p' + p.id, src: p.src.original + '?auto=compress&cs=tinysrgb&w=1600&h=760&fit=crop', alt: p.alt || '',
    by: p.photographer, byUrl: p.photographer_url, photoUrl: p.url, source: 'Pexels',
  }));
}

const out = existsSync(OUT) ? JSON.parse(await readFile(OUT, 'utf8')) : {};
// backfill source on any pre-existing entries
for (const z in out) out[z] = (out[z] || []).map((s) => ({ source: 'Unsplash', key: 'x' + (s.photoUrl || s.src).slice(-12), ...s }));

for (const zone of zones) {
  const cfg = ZONES[zone]; if (!cfg) continue;
  const slides = out[zone] ? [...out[zone]] : [];
  const seen = new Set(slides.map((s) => s.key));
  try {
    for (const q of cfg.queries) {
      if (slides.length >= cfg.target) break;
      const got = [];
      if (UNSPLASH) { try { got.push(...await unsplash(q)); } catch (e) { console.log('  u:', e.message); } }
      if (PEXELS) { try { got.push(...await pexels(q)); } catch (e) { console.log('  p:', e.message); } }
      for (const s of got) {
        if (slides.length >= cfg.target) break;
        if (seen.has(s.key)) continue;
        seen.add(s.key);
        if (s.dl && UNSPLASH) { fetch(s.dl, { headers: { Authorization: 'Client-ID ' + UNSPLASH } }).catch(() => {}); }
        const { key, dl, ...keep } = s;
        slides.push({ ...keep, key });
        await sleep(200);
      }
      await sleep(350);
    }
    out[zone] = slides;
    console.log(`★ ${zone}: ${slides.length} (${slides.map((s) => s.source[0]).join('')})`);
  } catch (e) { console.log(`✗ ${zone}: ${e.message}`); }
}
await writeFile(OUT, JSON.stringify(out, null, 2));
console.log('Wrote src/data/photography.json. Run "npm run build".');
