// Ingest REAL, LICENSED product photos into the gear database.
//
// This script does NOT scrape. It downloads image URLs you are licensed to use
// — e.g. from an affiliate network product feed (Impact / AvantLink / CJ),
// Amazon's Product Advertising API, a manufacturer media kit you have rights to,
// or Creative-Commons/permissioned sources. You supply the URLs; it fetches,
// stores, and wires them into each product's images[] so the galleries, the
// lightbox and the rotators populate everywhere automatically.
//
// Input: pipeline/product-images.json  →  { "<product-id>": ["<licensed-url>", ...], ... }
// Output: public/images/gear/<bay>/<id>-1.jpg, -2.jpg … + products/<bay>.json images[] updated.
//
// Usage: node scripts/fetch-product-photos.mjs
import { readFile, writeFile, mkdir, stat } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const MAP = join(root, 'pipeline', 'product-images.json');
const PROD = join(root, 'src', 'data', 'products');
const IMG = join(root, 'public', 'images', 'gear');
const BAYS = ['racing', 'flight', 'space', 'marine', 'golf'];
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

if (!existsSync(MAP)) {
  console.log(`No ${MAP} found.

Create pipeline/product-images.json mapping product ids to LICENSED image URLs, e.g.:
{
  "moza-r12": ["https://<licensed-feed>/moza-r12-front.jpg", "https://<licensed-feed>/moza-r12-detail.jpg"],
  "skytrak-plus": ["https://<licensed-feed>/skytrak-plus.jpg"]
}
Sources must be ones you're licensed to display (affiliate product feed, Amazon PA-API,
manufacturer media kit with rights, or CC/permissioned). Then re-run this script.`);
  process.exit(0);
}

// id -> bay
const idBay = {};
const products = {};
for (const bay of BAYS) {
  const f = join(PROD, `${bay}.json`);
  if (!existsSync(f)) continue;
  products[bay] = JSON.parse(await readFile(f, 'utf8'));
  for (const p of products[bay]) idBay[p.id] = bay;
}

async function download(url, outAbs) {
  for (let a = 1; a <= 3; a++) {
    try {
      const ctrl = new AbortController();
      const t = setTimeout(() => ctrl.abort(), 60000);
      const res = await fetch(url, { signal: ctrl.signal, headers: { 'User-Agent': 'IgnitionSim/1.0 (+https://ignitionsim.com)' } });
      clearTimeout(t);
      if (!res.ok) throw new Error('HTTP ' + res.status);
      const buf = Buffer.from(await res.arrayBuffer());
      if (buf.length < 2000) throw new Error('tiny');
      await mkdir(dirname(outAbs), { recursive: true });
      await writeFile(outAbs, buf);
      return true;
    } catch (e) { console.log(`  retry ${a}/3 ${url}: ${e.message}`); await sleep(1500 * a); }
  }
  return false;
}

const map = JSON.parse(await readFile(MAP, 'utf8'));
let count = 0;
for (const [id, urls] of Object.entries(map)) {
  const bay = idBay[id];
  if (!bay) { console.log(`✗ unknown product id: ${id}`); continue; }
  const local = [];
  for (let i = 0; i < urls.length; i++) {
    const rel = `${bay}/${id}-${i + 1}.jpg`;
    if (await download(urls[i], join(IMG, rel))) { local.push(`/images/gear/${rel}`); count++; console.log(`★ ${rel}`); }
    await sleep(400);
  }
  if (local.length) {
    const p = products[bay].find((x) => x.id === id);
    if (p) { p.images = local; p.image = local[0]; }
  }
}
// persist updated products json (images[] + primary image)
for (const bay of BAYS) {
  if (products[bay]) await writeFile(join(PROD, `${bay}.json`), JSON.stringify(products[bay], null, 2));
}
console.log(`Done. ${count} licensed photos ingested. Re-run "npm run build" to publish.`);
