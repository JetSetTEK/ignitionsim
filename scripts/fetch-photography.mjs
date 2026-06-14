// Unsplash-compliant atmospheric photography for bay heroes/sliders + hub.
// COMPLIANT: hotlink (store CDN urls, use directly as <img src>; never re-host),
// trigger each photo's download_location once, attribute photographer + Unsplash (+utm).
// Output: src/data/photography.json (public urls + credits; no secret).
// Run all:   UNSPLASH_ACCESS_KEY=xxxx node scripts/fetch-photography.mjs
// Run some:  UNSPLASH_ACCESS_KEY=xxxx node scripts/fetch-photography.mjs flight,marine   (merges)
import { writeFile, readFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const OUT = join(root, 'src', 'data', 'photography.json');
const KEY = process.env.UNSPLASH_ACCESS_KEY;
const UTM = '?utm_source=ignitionsim&utm_medium=referral';
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
if (!KEY) { console.log('Set UNSPLASH_ACCESS_KEY and re-run.'); process.exit(0); }

const ZONES = {
  racing: { queries: ['sim racing cockpit setup', 'racing wheel gaming', 'racing simulator'], n: 4 },
  flight: { queries: ['flight simulator cockpit', 'airplane cockpit', 'aviation cockpit instruments', 'airliner cockpit night'], n: 4 },
  space: { queries: ['spaceship cockpit dark', 'sci-fi cockpit', 'futuristic cockpit', 'starfield night sky'], n: 4 },
  marine: { queries: ['ship helm wheel', 'boat steering wheel', 'sailing yacht', 'ship bridge ocean'], n: 4 },
  golf: { queries: ['indoor golf simulator', 'golf simulator screen', 'golf course'], n: 4 },
  hub: { queries: ['gaming setup dark', 'simulator cockpit', 'gaming room neon'], n: 3 },
};

const only = (process.argv[2] || '').split(',').filter(Boolean);
const zones = only.length ? only : Object.keys(ZONES);

async function search(q, perPage) {
  const r = await fetch(`https://api.unsplash.com/search/photos?query=${encodeURIComponent(q)}&orientation=landscape&per_page=${perPage}&content_filter=high`,
    { headers: { Authorization: 'Client-ID ' + KEY, 'Accept-Version': 'v1' } });
  if (!r.ok) throw new Error('search HTTP ' + r.status);
  return (await r.json()).results || [];
}
const trigger = (loc) => fetch(loc, { headers: { Authorization: 'Client-ID ' + KEY } }).catch(() => {});

const out = existsSync(OUT) ? JSON.parse(await readFile(OUT, 'utf8')) : {};
for (const zone of zones) {
  const cfg = ZONES[zone]; if (!cfg) continue;
  const slides = []; const seen = new Set();
  try {
    for (const q of cfg.queries) {
      if (slides.length >= cfg.n) break;
      const results = await search(q, 6);
      for (const p of results) {
        if (slides.length >= cfg.n) break;
        if (!p.urls?.raw || seen.has(p.id)) continue;
        seen.add(p.id);
        await trigger(p.links.download_location);
        slides.push({
          src: p.urls.raw + '&w=1600&h=760&fit=crop&q=80&auto=format',
          alt: p.alt_description || `${zone} sim hardware`,
          by: p.user.name, byUrl: (p.user.links?.html || 'https://unsplash.com') + UTM,
          photoUrl: (p.links?.html || 'https://unsplash.com') + UTM,
        });
        await sleep(250);
      }
      await sleep(400);
    }
    if (slides.length) out[zone] = slides;
    console.log(`★ ${zone}: ${slides.length} (${slides.map((s) => s.by).join(', ')})`);
  } catch (e) { console.log(`✗ ${zone}: ${e.message}`); }
}
await writeFile(OUT, JSON.stringify(out, null, 2));
console.log('Wrote src/data/photography.json. Run "npm run build".');
