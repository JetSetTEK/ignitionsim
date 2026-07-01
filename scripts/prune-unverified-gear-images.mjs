import fs from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();
const dist = path.join(root, 'dist');
const verifiedImages = new Set(JSON.parse(await fs.readFile(path.join(root, 'src/data/verified-product-images.json'), 'utf8')));

async function walk(dir) {
  try {
    const entries = await fs.readdir(dir, { withFileTypes: true });
    const files = [];
    for (const entry of entries) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) files.push(...await walk(full));
      else files.push(full);
    }
    return files;
  } catch {
    return [];
  }
}

const productFiles = (await walk(path.join(root, 'src/data/products'))).filter((file) => file.endsWith('.json'));
const products = [];
for (const file of productFiles) {
  products.push(...JSON.parse(await fs.readFile(file, 'utf8')));
}
const imageFor = (p) => Array.isArray(p.images) && p.images.length ? p.images[0] : p.image;
const verifiedProductKeys = new Set(products
  .filter((p) => verifiedImages.has(imageFor(p)))
  .map((p) => `${p.bay}/${p.id}`));

let removed = 0;
for (const file of await walk(path.join(dist, 'images/gear'))) {
  const rel = `/${path.relative(dist, file).replaceAll(path.sep, '/')}`;
  if (!verifiedImages.has(rel)) {
    await fs.rm(file, { force: true });
    removed += 1;
  }
}

for (const file of await walk(path.join(dist, 'og/gear'))) {
  const rel = path.relative(path.join(dist, 'og/gear'), file).replaceAll(path.sep, '/');
  const key = rel.replace(/\.png$/i, '');
  if (!verifiedProductKeys.has(key)) {
    await fs.rm(file, { force: true });
    removed += 1;
  }
}

console.log(`Pruned ${removed} unverified gear image assets from dist.`);
