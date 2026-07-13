import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const read = (file) => fs.readFileSync(path.join(root, file), 'utf8');
const json = (file) => JSON.parse(read(file));
const failures = [];
const exists = (publicPath) => publicPath?.startsWith('/images/') && fs.existsSync(path.join(root, 'public', publicPath));

const home = read('src/pages/index.astro');
const stream = read('src/pages/build-stream/index.astro');
const hub = read('src/pages/[bay]/index.astro');
const curator = read('src/pages/curator/[id].astro');
const surfaces = json('src/data/editorial-surfaces.json');
const report = json('reports/ignitionsim-worldclass-quality.json');
const contextualProofTypes = new Set(['installed', 'use', 'official-lifestyle']);

const homepageLeaders = report.articles.filter((row) => row.status === 'certified' && row.score >= 85);
if (homepageLeaders.length < 3) failures.push(`Only ${homepageLeaders.length} certified guides clear the 85-point homepage gate.`);

for (const marker of ['promotedIds', 'clearsHomepageGate', 'takeDiverse(editorialLeaders, 3', 'takeDiverse(discoveryPool, 5']) {
  if (!home.includes(marker)) failures.push(`Homepage is missing its no-duplicate editorial gate: ${marker}`);
}
for (const forbidden of ['Certified maps', 'Lust objects', 'feature-guide-grid', 'latestBriefing']) {
  if (home.includes(forbidden)) failures.push(`Homepage reintroduced archive/catalog pattern: ${forbidden}`);
}
if (!stream.includes('clearsDiscoveryGate')) failures.push('Sim Stream is not using the stronger discovery gate.');
if (!hub.includes('clearsDiscoveryGate')) failures.push('World hubs are not using the stronger discovery gate.');
if (!curator.includes('clearsDiscoveryGate')) failures.push('Curator shelves are not using the stronger discovery gate.');

const seen = new Set();
for (const build of surfaces.realBuilds || []) {
  if (!exists(build.image)) failures.push(`Real-build image is missing: ${build.image}`);
  if (!build.credit || !build.creditUrl) failures.push(`Real-build credit is incomplete: ${build.title}`);
}
for (const product of surfaces.objectsOfDesire || []) {
  if (!exists(product.image)) failures.push(`Installed/use product image is missing: ${product.image}`);
  if (product.image.includes('/images/gear/')) failures.push(`Objects of Desire uses a catalog cutout instead of contextual proof: ${product.image}`);
  if (!contextualProofTypes.has(product.proofType)) failures.push(`Objects of Desire lacks a contextual proof type: ${product.title}`);
  if (!product.source || !product.sourceUrl) failures.push(`Objects of Desire lacks official source attribution: ${product.title}`);
}
for (const [curatorId, scenes] of Object.entries(surfaces.curatorActions || {})) {
  if (scenes.length < 2) failures.push(`${curatorId} needs at least two task-based scenes.`);
  for (const scene of scenes) {
    if (!exists(scene.image)) failures.push(`Curator action scene is missing: ${scene.image}`);
    if (!scene.task || !scene.alt) failures.push(`Curator action scene lacks task/alt context: ${scene.image}`);
    if (seen.has(scene.image)) failures.push(`Curator action scene is repeated: ${scene.image}`);
    seen.add(scene.image);
  }
}

if (failures.length) {
  console.error('IgnitionSim editorial surface audit failed:');
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

console.log(`IgnitionSim editorial surface audit passed: ${homepageLeaders.length} A/A+ guides, ${surfaces.realBuilds.length} real builds, ${surfaces.objectsOfDesire.length} contextual products, ${seen.size} distinct curator action scenes.`);
