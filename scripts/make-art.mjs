// Procedural, on-brand hero/slider/article art for IgnitionSim.
// Renders cinematic SVG compositions (Blade-Runner grid + per-bay accent glows
// + ember spark + a large line-art motif per discipline) to JPG via sharp.
// Deterministic (seeded), zero external dependency. Reliable replacement for
// API image gen. Generates: per-bay hero+slide-1..3, hub slides, + one hero
// per article (scanned from the content collection).
import sharp from 'sharp';
import { readdir, mkdir, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const IMG = join(root, 'public', 'images');
const ART = join(root, 'src', 'content', 'articles');

const EMBER = '#FF5E1A';
const PAL = {
  racing: { a: '#F59E0B', b: '#EF4444', bg1: '#1A1206', bg2: '#0B0A08' },
  flight: { a: '#38BDF8', b: '#0EA5E9', bg1: '#0C1B33', bg2: '#08101F' },
  space:  { a: '#D946EF', b: '#22D3EE', bg1: '#16071F', bg2: '#0A0612' },
  marine: { a: '#2DD4BF', b: '#0D9488', bg1: '#04231F', bg2: '#07140F' },
  golf:   { a: '#EAB308', b: '#CA8A04', bg1: '#0B2417', bg2: '#08160E' },
  hub:    { a: '#22D3EE', b: '#D946EF', bg1: '#0E1320', bg2: '#0A0E17' },
};

// deterministic PRNG from a string
function rng(str) {
  let h = 2166136261 >>> 0;
  for (let i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 16777619) >>> 0; }
  return () => { h = Math.imul(h ^ (h >>> 15), 2246822507) >>> 0; h = Math.imul(h ^ (h >>> 13), 3266489909) >>> 0; return ((h ^ (h >>> 16)) >>> 0) / 4294967296; };
}

// ---- line-art motifs (centered at 0,0; scaled by s); stroke set by caller ----
function motif(bay, s) {
  const c = (r) => `<circle cx="0" cy="0" r="${r * s}" fill="none"/>`;
  if (bay === 'racing' || bay === 'marine') {
    // wheel / helm: rim + hub + spokes (helm has handles past rim)
    const spokes = bay === 'marine' ? 8 : 3;
    const handle = bay === 'marine' ? 1.18 : 1.0;
    let g = c(1) + c(0.16);
    for (let i = 0; i < spokes; i++) {
      const a = (Math.PI * 2 * i) / spokes - (bay === 'racing' ? Math.PI / 2 : 0);
      const x1 = Math.cos(a) * 0.16 * s, y1 = Math.sin(a) * 0.16 * s;
      const x2 = Math.cos(a) * handle * s, y2 = Math.sin(a) * handle * s;
      g += `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}"/>`;
      if (bay === 'marine') g += `<circle cx="${Math.cos(a) * 1.16 * s}" cy="${Math.sin(a) * 1.16 * s}" r="${0.06 * s}" fill="none"/>`;
    }
    if (bay === 'racing') g += `<rect x="${-0.12 * s}" y="${-1.02 * s}" width="${0.24 * s}" height="${0.12 * s}" rx="${0.03 * s}" fill="none"/>`;
    return g;
  }
  if (bay === 'flight') {
    // heading rose + plane triangle
    let g = c(1) + c(0.78);
    for (let i = 0; i < 12; i++) {
      const a = (Math.PI * 2 * i) / 12, r0 = i % 3 === 0 ? 0.82 : 0.9;
      g += `<line x1="${Math.cos(a) * r0 * s}" y1="${Math.sin(a) * r0 * s}" x2="${Math.cos(a) * s}" y2="${Math.sin(a) * s}"/>`;
    }
    g += `<path d="M0 ${-0.5 * s} L${0.34 * s} ${0.42 * s} L0 ${0.22 * s} L${-0.34 * s} ${0.42 * s} Z" fill="none"/>`;
    return g;
  }
  if (bay === 'space') {
    // reticle + joystick hint + stars handled separately
    let g = c(1) + c(0.5);
    g += `<line x1="${-1.2 * s}" y1="0" x2="${-0.4 * s}" y2="0"/><line x1="${0.4 * s}" y1="0" x2="${1.2 * s}" y2="0"/>`;
    g += `<line x1="0" y1="${-1.2 * s}" x2="0" y2="${-0.4 * s}"/><line x1="0" y1="${0.4 * s}" x2="0" y2="${1.2 * s}"/>`;
    g += `<circle cx="0" cy="0" r="${0.08 * s}" fill="none"/>`;
    return g;
  }
  // golf: flag + target rings
  let g = c(1) + c(0.62) + c(0.26);
  g += `<line x1="0" y1="${0.9 * s}" x2="0" y2="${-1.1 * s}"/>`;
  g += `<path d="M0 ${-1.1 * s} L${0.5 * s} ${-0.92 * s} L0 ${-0.74 * s} Z" fill="none"/>`;
  return g;
}

function compose({ w, h, bay, seed }) {
  const p = PAL[bay] || PAL.hub;
  const r = rng(seed);
  const cx = w * (0.62 + r() * 0.22), cy = h * (0.52 + (r() - 0.5) * 0.3);
  const ms = Math.min(w, h) * (0.42 + r() * 0.14);
  const rot = Math.floor(r() * 40 - 20);
  const g1x = `${(r() * 30 + 70).toFixed(0)}%`, g1y = `${(r() * 20 - 10).toFixed(0)}%`;
  const g2x = `${(r() * 25).toFixed(0)}%`, g2y = `${(r() * 25 + 80).toFixed(0)}%`;
  // seeded telemetry arcs
  let arcs = '';
  for (let i = 0; i < 3; i++) {
    const ar = ms * (1.25 + i * 0.35 + r() * 0.2), a0 = r() * 360, a1 = a0 + 60 + r() * 120;
    const x0 = cx + Math.cos(a0 * Math.PI / 180) * ar, y0 = cy + Math.sin(a0 * Math.PI / 180) * ar;
    const x1 = cx + Math.cos(a1 * Math.PI / 180) * ar, y1 = cy + Math.sin(a1 * Math.PI / 180) * ar;
    arcs += `<path d="M${x0.toFixed(1)} ${y0.toFixed(1)} A ${ar.toFixed(1)} ${ar.toFixed(1)} 0 0 1 ${x1.toFixed(1)} ${y1.toFixed(1)}" fill="none" stroke="${p.a}" stroke-width="1.5" opacity="0.22"/>`;
  }
  // space starfield
  let stars = '';
  if (bay === 'space' || bay === 'hub') {
    for (let i = 0; i < 60; i++) stars += `<circle cx="${(r() * w).toFixed(0)}" cy="${(r() * h).toFixed(0)}" r="${(r() * 1.4 + 0.3).toFixed(1)}" fill="#fff" opacity="${(r() * 0.5 + 0.1).toFixed(2)}"/>`;
  }
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${p.bg1}"/><stop offset="1" stop-color="${p.bg2}"/></linearGradient>
    <radialGradient id="ga" cx="${g1x}" cy="${g1y}" r="62%"><stop offset="0" stop-color="${p.a}" stop-opacity="0.42"/><stop offset="100%" stop-color="${p.a}" stop-opacity="0"/></radialGradient>
    <radialGradient id="gb" cx="${g2x}" cy="${g2y}" r="55%"><stop offset="0" stop-color="${p.b}" stop-opacity="0.34"/><stop offset="100%" stop-color="${p.b}" stop-opacity="0"/></radialGradient>
    <radialGradient id="ge" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="${EMBER}" stop-opacity="0.5"/><stop offset="100%" stop-color="${EMBER}" stop-opacity="0"/></radialGradient>
    <radialGradient id="vig" cx="50%" cy="48%" r="75%"><stop offset="55%" stop-color="#000" stop-opacity="0"/><stop offset="100%" stop-color="#000" stop-opacity="0.55"/></radialGradient>
    <pattern id="grid" width="46" height="46" patternUnits="userSpaceOnUse"><path d="M46 0H0V46" fill="none" stroke="${p.a}" stroke-width="1" opacity="0.10"/></pattern>
    <filter id="glow" x="-40%" y="-40%" width="180%" height="180%"><feGaussianBlur stdDeviation="9"/></filter>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#bg)"/>
  <rect width="${w}" height="${h}" fill="url(#grid)"/>
  ${stars}
  <rect width="${w}" height="${h}" fill="url(#ga)"/>
  <rect width="${w}" height="${h}" fill="url(#gb)"/>
  ${arcs}
  <g transform="translate(${cx.toFixed(0)} ${cy.toFixed(0)}) rotate(${rot})">
    <g stroke="${p.a}" stroke-width="${Math.max(2, ms * 0.012).toFixed(1)}" fill="none" opacity="0.30" filter="url(#glow)">${motif(bay, ms)}</g>
    <g stroke="${p.a}" stroke-width="${Math.max(1.5, ms * 0.008).toFixed(1)}" fill="none" opacity="0.55">${motif(bay, ms)}</g>
  </g>
  <circle cx="${(w * 0.5).toFixed(0)}" cy="${(h * 0.5).toFixed(0)}" r="${(Math.min(w, h) * 0.5).toFixed(0)}" fill="url(#ge)" opacity="0.5"/>
  <rect width="${w}" height="${h}" fill="url(#vig)"/>
  <!-- ember hex spark mark -->
  <g transform="translate(${(w - 54).toFixed(0)} 46) scale(0.9)" opacity="0.9">
    <polygon points="18,0 9,-15.6 -9,-15.6 -18,0 -9,15.6 9,15.6" fill="none" stroke="${p.a}" stroke-width="2"/>
    <path d="M0,-12 L4,-4 12,0 4,4 0,12 -4,4 -12,0 -4,-4 Z" fill="${EMBER}"/>
  </g>
</svg>`;
  return Buffer.from(svg);
}

async function render(out, opts) {
  const abs = join(IMG, out);
  await mkdir(dirname(abs), { recursive: true });
  await sharp(compose(opts)).jpeg({ quality: 82, mozjpeg: true }).toFile(abs);
  console.log('★', out, `${opts.w}x${opts.h}`);
}

const bays = ['racing', 'flight', 'space', 'marine', 'golf'];
let count = 0;
// per-bay hero + slides
for (const bay of bays) {
  await render(`${bay}/hero.jpg`, { w: 1600, h: 720, bay, seed: `${bay}-hero` }); count++;
  for (let i = 1; i <= 3; i++) { await render(`${bay}/slide-${i}.jpg`, { w: 1600, h: 720, bay, seed: `${bay}-slide-${i}` }); count++; }
}
// hub slides (alternate motifs for variety)
const hubMotifs = ['racing', 'space', 'flight'];
for (let i = 1; i <= 3; i++) { await render(`hub/slide-${i}.jpg`, { w: 1600, h: 720, bay: hubMotifs[i - 1], seed: `hub-${i}` }); count++; }
// article heroes (scan content)
for (const bay of bays) {
  const dir = join(ART, bay);
  if (!existsSync(dir)) continue;
  const files = (await readdir(dir)).filter((f) => f.endsWith('.md'));
  for (const f of files) {
    const slug = f.replace(/\.md$/, '');
    await render(`${bay}/${slug}.jpg`, { w: 1280, h: 720, bay, seed: `${bay}-${slug}` }); count++;
  }
}
console.log(`Done. ${count} images rendered.`);
