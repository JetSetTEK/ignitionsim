import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const articlesRoot = path.join(root, 'src/content/articles');
const homepagePath = path.join(root, 'src/pages/index.astro');
const coversPath = path.join(root, 'src/data/generated-article-covers.json');

const forbiddenText = [
  /PHOTO SLOT READY/i,
  /cimg-fallback/i,
  /gear-spec-art/i,
  /bench-spec/i,
  /mystery boxes/i,
  /AI can sell the room/i,
  /Lorem ipsum/i,
  /\bTODO\b/i,
  /\bplaceholder\b/i,
];

const bannedSurfaceLabels = new Set([
  'Product proof',
  'Control map',
  'Display wall',
  'Cockpit fit',
]);

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

function extractIdList(source, constName) {
  const match = source.match(new RegExp(`const\\s+${constName}\\s*=\\s*\\[([\\s\\S]*?)\\];`));
  if (!match) return [];
  return [...match[1].matchAll(/['"]([^'"]+)['"]/g)].map((item) => item[1]);
}

function localImageExists(image) {
  return typeof image === 'string' && image.startsWith('/images/')
    && fs.existsSync(path.join(root, 'public', image));
}

const failures = [];
const articles = new Map();

for (const file of walk(articlesRoot)) {
  const source = fs.readFileSync(file, 'utf8');
  const data = frontmatter(source);
  const rel = path.relative(articlesRoot, file).replace(/\.md$/, '');
  articles.set(rel, { file, source, data });

  if (data.goldStatus === 'certified' && data.draft !== 'true') {
    for (const pattern of forbiddenText) {
      if (pattern.test(source)) {
        failures.push(`${path.relative(root, file)}: forbidden public/template marker matched ${pattern}`);
      }
    }
  }
}

const homepage = fs.readFileSync(homepagePath, 'utf8');
const covers = JSON.parse(fs.readFileSync(coversPath, 'utf8'));
const surfaceIds = [
  ...extractIdList(homepage, 'cornerstoneIds'),
  ...extractIdList(homepage, 'streamLeadIds'),
];
const uniqueSurfaceIds = [...new Set(surfaceIds)];
const imageOwners = new Map();

for (const id of uniqueSurfaceIds) {
  const entry = articles.get(id);
  const slug = id.split('/').pop();
  const cover = covers[slug];

  if (!entry) {
    failures.push(`Homepage public surface references missing article: ${id}`);
    continue;
  }
  if (entry.data.goldStatus !== 'certified' || entry.data.draft === 'true') {
    failures.push(`Homepage public surface references non-certified article: ${id}`);
  }
  if (!cover) {
    failures.push(`Homepage public surface lacks generated card art: ${id}`);
    continue;
  }
  if (!localImageExists(cover.image)) {
    failures.push(`Homepage public surface card art missing file for ${id}: ${cover.image}`);
  }
  if (bannedSurfaceLabels.has(cover.label)) {
    failures.push(`Homepage public surface label is too generic for ${id}: "${cover.label}"`);
  }
  if (!cover.alt || forbiddenText.some((pattern) => pattern.test(cover.alt))) {
    failures.push(`Homepage public surface alt text is missing or generic for ${id}`);
  }
  if (cover.image) {
    const owners = imageOwners.get(cover.image) || [];
    owners.push(id);
    imageOwners.set(cover.image, owners);
  }
}

for (const [image, owners] of imageOwners) {
  if (owners.length > 1) {
    failures.push(`Homepage public surface repeats the same card image (${image}) for: ${owners.join(', ')}`);
  }
}

if (failures.length) {
  console.error('IgnitionSim public surface quality audit failed:');
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log(`IgnitionSim public surface quality audit passed for ${uniqueSurfaceIds.length} homepage/stream article surfaces.`);
