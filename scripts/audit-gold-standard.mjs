import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const minCertifiedVisuals = 8;
const v2CertificationDate = '2026-07-15';
const verified = new Set(JSON.parse(fs.readFileSync(path.join(root, 'src/data/verified-product-images.json'), 'utf8')));
const crewNames = new Set(JSON.parse(fs.readFileSync(path.join(root, 'src/data/crew.json'), 'utf8')).map((person) => person.name));

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

function sourceUrls(source) {
  return [...source.matchAll(/(?:href=["']|]\()((?:https?:\/\/)[^"')\s]+)/g)].map((match) => match[1]);
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

  const isV2 = String(data.goldCertifiedDate || '') >= v2CertificationDate;
  if (isV2) {
    const uniqueImages = new Set(imgs);
    const sources = new Set(sourceUrls(source));
    const faqCount = (source.match(/^\s*-\s+q:\s+/gm) || []).length;
    const diagramImages = imgs.filter((ref) => /infographic|diagram|map|ladder|geometry|wiring|timeline|flow|decision/i.test(ref));
    const realProofImages = imgs.filter((ref) => /article-proofs|gear|official|installed|installation|setup|use|manual|screenshot/i.test(ref));
    if (!crewNames.has(data.author)) failures.push(`${rel}: v2 author must match a complete IgnitionSim curator`);
    for (const field of ['sourceReviewDate', 'revenueTier', 'contentCluster']) {
      if (!data[field]) failures.push(`${rel}: v2 certification requires ${field}`);
    }
    if (uniqueImages.size < 10) failures.push(`${rel}: v2 requires at least 10 unique inline visuals`);
    if (realProofImages.length < 6) failures.push(`${rel}: v2 requires at least 6 real product/use/install/manual/screenshot visuals`);
    if (data.revenueTier === 'A' && diagramImages.length < 2) failures.push(`${rel}: v2 Tier A requires at least 2 practical diagrams`);
    if (sources.size < 8) failures.push(`${rel}: v2 requires at least 8 distinct source URLs`);
    if (faqCount < 4) failures.push(`${rel}: v2 requires at least 4 FAQ questions`);
    if (/amazon\.com\/(?:s\?|s\/|gp\/search)|amazon\.com[^\s"')]*[?&](?:k|keywords)=/i.test(source)) failures.push(`${rel}: v2 contains an Amazon search-result URL`);
  }
}

if (!certified.length) failures.push('No certified articles found.');

if (failures.length) {
  console.error('IgnitionSim Gold Standard audit failed:');
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log(`IgnitionSim Gold Standard audit passed for ${certified.length} certified articles.`);
