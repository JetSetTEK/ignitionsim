// Apply Amazon ASINs + product images to the gear database — the SiteStripe path
// (works the day you're approved; no PA-API / sales gate needed).
//
// You grab each product's ASIN + image URL from Amazon's SiteStripe toolbar
// (the "Image" / "Text+Image" link gives an m.media-amazon.com URL you're licensed
// to display as an Associate). Put them in pipeline/amazon-products.json:
//   { "moza-r12": { "asin": "B0XXXXXXX", "image": "https://m.media-amazon.com/images/I/....jpg" } }
// Then: node scripts/apply-amazon.mjs   (sets amazonAsin → direct /dp links, and the
// real Amazon photo becomes the gear hero + gallery image; both hotlinked, compliant).
import { readFile, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const MAP = join(root, 'pipeline', 'amazon-products.json');
const PROD = join(root, 'src', 'data', 'products');
const BAYS = ['racing', 'flight', 'space', 'marine', 'golf'];

if (!existsSync(MAP)) {
  console.log(`No ${MAP}. Copy pipeline/amazon-products.template.json → amazon-products.json and fill ASIN + image (from SiteStripe) for the products you want, then re-run.`);
  process.exit(0);
}
const map = JSON.parse(await readFile(MAP, 'utf8'));
let applied = 0;
for (const bay of BAYS) {
  const f = join(PROD, `${bay}.json`);
  if (!existsSync(f)) continue;
  const list = JSON.parse(await readFile(f, 'utf8'));
  let changed = false;
  for (const p of list) {
    const m = map[p.id];
    if (!m || (m.asin === '' && (!m.image || m.image === ''))) continue;
    if (m.asin) { p.amazonAsin = m.asin; changed = true; }
    if (m.image) {
      const imgs = Array.isArray(p.images) ? p.images.filter((x) => x !== m.image) : [];
      p.images = [m.image, ...imgs];      // real Amazon photo first
      p.image = m.image;                   // gear hero + card use it
      changed = true;
    }
    applied++;
    console.log(`★ ${p.id}: ${m.asin ? 'asin ' + m.asin : ''}${m.image ? ' +image' : ''}`);
  }
  if (changed) await writeFile(f, JSON.stringify(list, null, 2));
}
console.log(`Applied Amazon data to ${applied} products. Run "npm run build".`);
