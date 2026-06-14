// Ingest REAL, commercially-licensed PHOTOGRAPHY from Unsplash and/or Pexels into
// the bay hero + slider slots (atmospheric/lifestyle shots: cockpits, wheels,
// golf bays, etc.). Both licenses permit commercial use; both require crediting
// the photographer — this script records credits to src/data/photo-credits.json
// (rendered at /credits). It does NOT scrape; it uses the official APIs.
//
// Provide a key via env (never committed):
//   UNSPLASH_ACCESS_KEY=...   (https://unsplash.com/developers — free)
//   PEXELS_API_KEY=...        (https://www.pexels.com/api/ — free)
// Then: node scripts/fetch-photography.mjs   →   then npm run build
import { writeFile, mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const IMG = join(root, 'public', 'images');
const UNSPLASH = process.env.UNSPLASH_ACCESS_KEY;
const PEXELS = process.env.PEXELS_API_KEY;
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const QUERIES = {
  racing: ['sim racing cockpit', 'racing wheel gaming', 'racing simulator setup', 'esports racing'],
  flight: ['flight simulator cockpit', 'home flight simulator', 'airplane cockpit controls', 'aviation cockpit'],
  space: ['spaceship cockpit', 'flight stick gaming', 'sci-fi gaming setup', 'starfield night sky'],
  marine: ['ship bridge controls', 'boat helm wheel', 'sailing yacht', 'ship cockpit'],
  golf: ['golf simulator indoor', 'indoor golf', 'golf practice net', 'golf course dusk'],
  hub: ['dark gaming setup', 'simulator cockpit night', 'gaming battlestation'],
};
const SLOTS = ['hero', 'slide-1', 'slide-2', 'slide-3']; // bay slots; hub uses slide-1..3

if (!UNSPLASH && !PEXELS) {
  console.log(`No image key set. Provide one (free) and re-run:
  UNSPLASH_ACCESS_KEY=...  (https://unsplash.com/developers)
  PEXELS_API_KEY=...       (https://www.pexels.com/api/)
Example:  UNSPLASH_ACCESS_KEY=xxxx node scripts/fetch-photography.mjs`);
  process.exit(0);
}

async function dl(url, outAbs) {
  const res = await fetch(url, { headers: { 'User-Agent': 'IgnitionSim/1.0' } });
  if (!res.ok) throw new Error('HTTP ' + res.status);
  const buf = Buffer.from(await res.arrayBuffer());
  await mkdir(dirname(outAbs), { recursive: true });
  await writeFile(outAbs, buf);
  return buf.length;
}

async function unsplash(query) {
  const r = await fetch(`https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&orientation=landscape&per_page=4&content_filter=high`,
    { headers: { Authorization: 'Client-ID ' + UNSPLASH } });
  if (!r.ok) throw new Error('unsplash HTTP ' + r.status);
  const j = await r.json();
  return (j.results || []).map((p) => ({
    raw: p.urls.raw + '&w=1600&h=720&fit=crop&q=80', dl: p.links.download_location,
    credit: { source: 'Unsplash', photographer: p.user.name, url: p.links.html },
  }));
}
async function pexels(query) {
  const r = await fetch(`https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&orientation=landscape&per_page=4`,
    { headers: { Authorization: PEXELS } });
  if (!r.ok) throw new Error('pexels HTTP ' + r.status);
  const j = await r.json();
  return (j.photos || []).map((p) => ({
    raw: p.src.large2x || p.src.large, dl: null,
    credit: { source: 'Pexels', photographer: p.photographer, url: p.url },
  }));
}

const credits = [];
let count = 0;
for (const [bay, queries] of Object.entries(QUERIES)) {
  const slots = bay === 'hub' ? SLOTS.slice(1) : SLOTS;
  for (let i = 0; i < slots.length; i++) {
    const q = queries[i % queries.length];
    try {
      let hits = [];
      if (UNSPLASH) hits = await unsplash(q);
      if (!hits.length && PEXELS) hits = await pexels(q);
      const pick = hits[0];
      if (!pick) { console.log(`· no result for "${q}"`); continue; }
      const rel = `${bay}/${slots[i]}.jpg`;
      const kb = await dl(pick.raw, join(IMG, rel));
      // Unsplash API guideline: trigger a download event
      if (pick.dl && UNSPLASH) fetch(pick.dl, { headers: { Authorization: 'Client-ID ' + UNSPLASH } }).catch(() => {});
      credits.push({ file: `/images/${rel}`, ...pick.credit, query: q });
      count++;
      console.log(`★ ${rel}  (${(kb / 1024).toFixed(0)}KB) — ${pick.credit.source} / ${pick.credit.photographer}`);
      await sleep(500);
    } catch (e) { console.log(`✗ "${q}": ${e.message}`); }
  }
}
await writeFile(join(root, 'src', 'data', 'photo-credits.json'), JSON.stringify(credits, null, 2));
console.log(`Done. ${count} real photos placed. Credits → src/data/photo-credits.json (rendered at /credits). Run "npm run build".`);
