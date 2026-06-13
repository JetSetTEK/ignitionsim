// Build the hero + slider image manifest from the research briefs.
// Each bay: hero.jpg + slide-1..3.jpg (prompts 0..3). Plus 3 hub slides.
import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const bays = ['racing', 'flight', 'space', 'marine', 'golf'];

const manifest = [];
let seed = 100;
for (const bay of bays) {
  const r = JSON.parse(await readFile(join(root, 'pipeline', 'research', `${bay}.json`), 'utf8'));
  const prompts = r.image_prompts || [];
  const names = ['hero', 'slide-1', 'slide-2', 'slide-3'];
  names.forEach((n, i) => {
    const prompt = prompts[i] || prompts[0];
    if (prompt) manifest.push({ prompt, out: `${bay}/${n}.jpg`, w: 1600, h: 720, seed: seed++ });
  });
}

// Hub cross-discipline panoramas
const hub = [
  'Cinematic ultra-wide hero of a darkened high-end sim battlestation at night with a curved monitor showing a glowing race track, lit by Blade Runner neon cyan and magenta with a warm ember-orange accent, volumetric haze, deep night #0A0E17 mood, photoreal, no text',
  'Cinematic ultra-wide of a futuristic cockpit silhouette facing a glowing starfield and neon city horizon, magenta and cyan rim light with an ember-orange spark glow, engineering grid faintly overlaid, deep night, no text',
  'Cinematic ultra-wide of an immaculate home simulation studio at blue hour — racing rig, flight yoke and golf screen suggested in shadow — unified by neon cyan, magenta and ember accents, atmospheric, premium, no text',
];
hub.forEach((prompt, i) => manifest.push({ prompt, out: `hub/slide-${i + 1}.jpg`, w: 1600, h: 720, seed: seed++ }));

await writeFile(join(root, 'pipeline', 'image-manifest.json'), JSON.stringify(manifest, null, 2));
console.log(`wrote manifest with ${manifest.length} images`);
