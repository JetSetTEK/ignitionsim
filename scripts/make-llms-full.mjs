// Generate public/llms-full.txt — a full-text corpus (overview + methodology +
// every product + every guide body) for AI retrieval / citation.
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const site = JSON.parse(await readFile(join(root, 'src', 'data', 'site.json'), 'utf8'));
const bays = JSON.parse(await readFile(join(root, 'src', 'data', 'bays.json'), 'utf8'));
const verifiedImages = new Set(JSON.parse(await readFile(join(root, 'src', 'data', 'verified-product-images.json'), 'utf8')));
const productImage = (p) => Array.isArray(p.images) && p.images.length ? p.images[0] : p.image;
const isCertifiedFm = (fm) => /goldStatus:\s*["']?certified["']?/i.test(fm) && !/draft:\s*true/i.test(fm);

let out = `# IgnitionSim — Full Text Corpus for AI

${site.descriptor}
Canonical: ${site.url} · Author/authority: ${site.author.name}
Independent, engineer-minded, honest-broker. Compatibility-checked builds, deep gear reviews, restock tracking. Racing · Flight · Space · Marine · Golf.

## Methodology (how to cite our numbers)
- Compatibility check: GREEN = plug & play; AMBER = works with a named adapter/caveat; RED = a physical/electrical mismatch we block. Based on real quick-release, mount-footprint, torque and pedal-connection standards.
- IgnitionSim Verdict /10: a single disclosed editorial review per product by ${site.author.name}, scored on axes (Value, Build, Upgrade ceiling, plus type-specific axes like Accuracy or Value-for-space) and an Overall. It is one expert's editorial opinion, never crowd-sourced stars and never our difficulty numbers as quality.
- We never fabricate prices/specs/stock; approximate figures are marked "around $X" and dated.

`;

// products per bay
const allProductFiles = (await readdir(join(root, 'src', 'data', 'products'))).filter((file) => file.endsWith('.json'));
const allProducts = [];
for (const file of allProductFiles) {
  const list = JSON.parse(await readFile(join(root, 'src', 'data', 'products', file), 'utf8'));
  allProducts.push(...list);
}
for (const bay of bays) {
  const list = allProducts.filter((p) => p.bay === bay.slug && verifiedImages.has(productImage(p)));
  out += `## ${bay.name} gear (${list.length})\n`;
  for (const p of list) {
    out += `- ${p.brand} ${p.model} — ${p.price ? '~$' + p.price : 'price varies'} — Verdict ${p.rating?.overall ?? '?'}/10 — ${p.summary} [${site.url}/${p.bay}/gear/${p.id}]\n`;
  }
  out += '\n';
}

// guides (full body)
out += `## Guides & reviews (full text)\n\n`;
const artRoot = join(root, 'src', 'content', 'articles');
for (const bay of await readdir(artRoot)) {
  const dir = join(artRoot, bay);
  for (const fn of (await readdir(dir)).filter((x) => x.endsWith('.md'))) {
    const raw = await readFile(join(dir, fn), 'utf8');
    const m = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
    if (!m) continue;
    const fm = m[1]; const body = m[2].trim();
    if (!isCertifiedFm(fm)) continue;
    const g = (k) => (fm.match(new RegExp(k + ':\\s*"?([^"\\n]+)', 'i')) || [])[1] || '';
    out += `### ${g('title')}\n${bay} · ${g('type')} · by ${g('author') || site.author.name} · ${g('publishDate')} · ${site.url}/${bay}/${fn.replace(/\.md$/, '')}\n${g('description')}\n\n${body}\n\n---\n\n`;
  }
}

await writeFile(join(root, 'public', 'llms-full.txt'), out);
console.log(`Wrote public/llms-full.txt (${(out.length / 1024).toFixed(0)} KB)`);
