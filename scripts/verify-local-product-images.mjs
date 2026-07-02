import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const root = process.cwd();
const productsDir = path.join(root, 'src/data/products');
const publicDir = path.join(root, 'public');
const outFile = path.join(root, 'src/data/verified-product-images.json');
const reportFile = path.join(root, 'docs/reports/product-image-verification.json');

const imagePath = (product) =>
  Array.isArray(product.images) && product.images.length ? product.images[0] : product.image;

async function productRecords() {
  const files = (await fs.readdir(productsDir)).filter((file) => file.endsWith('.json'));
  const records = [];
  for (const file of files) {
    const data = JSON.parse(await fs.readFile(path.join(productsDir, file), 'utf8'));
    records.push(...data.map((product) => ({ ...product, sourceFile: file })));
  }
  return records;
}

async function validImage(rel) {
  if (!rel) return { ok: false, reason: 'missing path' };
  const abs = path.join(publicDir, rel.replace(/^\//, ''));
  try {
    const stat = await fs.stat(abs);
    const meta = await sharp(abs).metadata();
    const width = meta.width || 0;
    const height = meta.height || 0;
    const aspect = width && height ? Math.max(width / height, height / width) : 99;
    if (width === 1280 && height === 800 && stat.size < 55_000) {
      return { ok: false, reason: 'procedural placeholder art', width, height, size: stat.size };
    }
    if (stat.size < 8_000) return { ok: false, reason: `tiny file (${stat.size} bytes)`, width, height };
    if (width < 280 || height < 220) return { ok: false, reason: `small dimensions (${width}x${height})`, width, height };
    if (aspect > 5) return { ok: false, reason: `extreme aspect (${width}x${height})`, width, height };
    return { ok: true, width, height, size: stat.size };
  } catch (error) {
    return { ok: false, reason: error.message };
  }
}

async function main() {
  const products = await productRecords();
  const verified = new Set();
  const report = [];

  for (const product of products) {
    const rel = imagePath(product);
    const result = await validImage(rel);
    report.push({
      id: product.id,
      bay: product.bay,
      brand: product.brand,
      model: product.model,
      image: rel,
      ...result,
    });
    if (result.ok) verified.add(rel);
  }

  await fs.writeFile(outFile, `${JSON.stringify([...verified].sort(), null, 2)}\n`);
  await fs.mkdir(path.dirname(reportFile), { recursive: true });
  await fs.writeFile(reportFile, `${JSON.stringify(report, null, 2)}\n`);

  const ok = report.filter((item) => item.ok).length;
  const missing = report.filter((item) => !item.ok).length;
  console.log(`Verified local product images: ${verified.size} (${ok} valid records, ${missing} still need sourcing)`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
