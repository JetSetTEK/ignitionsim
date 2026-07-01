import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const minCertifiedVisuals = 8;
const verified = new Set(JSON.parse(fs.readFileSync(path.join(root, 'src/data/verified-product-images.json'), 'utf8')));

const productFiles = fs.readdirSync(path.join(root, 'src/data/products')).filter((file) => file.endsWith('.json'));
const productsByGearPath = new Map();
for (const file of productFiles) {
  const products = JSON.parse(fs.readFileSync(path.join(root, 'src/data/products', file), 'utf8'));
  for (const product of products) productsByGearPath.set(`/${product.bay}/gear/${product.id}`, product);
}

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) return walk(full);
    return entry.name.endsWith('.md') ? [full] : [];
  });
}

function frontmatter(source) {
  const match = source.match(/^---\n([\s\S]*?)\n---/);
  const out = {};
  if (!match) return out;
  for (const line of match[1].split('\n')) {
    const item = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
    if (!item) continue;
    out[item[1]] = item[2].trim().replace(/^['"]|['"]$/g, '');
  }
  return out;
}

function imageRefs(source) {
  return [
    ...source.matchAll(/!\[[^\]]*]\(([^)]+)\)/g),
    ...source.matchAll(/<img\s+[^>]*src=["']([^"']+)["']/g),
  ].map((match) => match[1]);
}

function gearLinks(source) {
  return [
    ...source.matchAll(/href=["'](\/[a-z]+\/gear\/[a-z0-9-]+)["']/g),
    ...source.matchAll(/]\((\/[a-z]+\/gear\/[a-z0-9-]+)\)/g),
  ].map((match) => match[1]);
}

const failures = [];
const certified = [];
for (const file of walk(path.join(root, 'src/content/articles')).sort()) {
  const source = fs.readFileSync(file, 'utf8');
  const data = frontmatter(source);
  if (data.goldStatus !== 'certified' || data.draft === 'true') continue;

  const rel = path.relative(root, file);
  certified.push(rel);
  const imgs = imageRefs(source);
  const productImgs = imgs.filter((ref) => ref.startsWith('/images/gear/'));
  const missing = imgs
    .filter((ref) => ref.startsWith('/images/'))
    .filter((ref) => !fs.existsSync(path.join(root, 'public', ref)));
  const unverifiedImages = [...new Set(productImgs.filter((ref) => !verified.has(ref)))];
  const badGearLinks = [...new Set(gearLinks(source).filter((link) => {
    const product = productsByGearPath.get(link);
    return !product || !verified.has(product.image);
  }))];

  if (imgs.length < minCertifiedVisuals) {
    failures.push(`${rel}: only ${imgs.length} inline visuals; certified minimum is ${minCertifiedVisuals}`);
  }
  if (missing.length) failures.push(`${rel}: missing image files: ${missing.join(', ')}`);
  if (unverifiedImages.length) failures.push(`${rel}: unverified gear images: ${unverifiedImages.join(', ')}`);
  if (badGearLinks.length) failures.push(`${rel}: internal gear links without verified product pages: ${badGearLinks.join(', ')}`);
  if (/PHOTO SLOT READY|photo slot ready|cimg-fallback|gear-spec-art|bench-spec|grail-spec/i.test(source)) {
    failures.push(`${rel}: placeholder marker found`);
  }
}

if (!certified.length) failures.push('No certified articles found.');

if (failures.length) {
  console.error('IgnitionSim Gold Standard audit failed:');
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log(`IgnitionSim Gold Standard audit passed for ${certified.length} certified articles.`);
