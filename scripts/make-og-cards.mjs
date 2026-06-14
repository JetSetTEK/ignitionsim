// Generate per-article + per-gear Open Graph share cards (1200x630) at build.
// Branded: night bg + engineering grid + bay-accent glow + ember hex + title.
import sharp from 'sharp';
import { readdir, readFile, mkdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const OG = join(root, 'public', 'og');
const EMBER = '#FF5E1A';
const PAL = {
  racing: '#F59E0B', flight: '#38BDF8', space: '#D946EF', marine: '#2DD4BF', golf: '#EAB308', hub: '#22D3EE',
};
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function wrap(text, max, maxLines) {
  const words = String(text).split(/\s+/); const lines = []; let cur = '';
  for (const w of words) {
    if ((cur + ' ' + w).trim().length > max) { if (cur) lines.push(cur); cur = w; } else cur = (cur + ' ' + w).trim();
    if (lines.length === maxLines) break;
  }
  if (cur && lines.length < maxLines) lines.push(cur);
  if (lines.length === maxLines && words.join(' ').length > lines.join(' ').length) lines[maxLines - 1] += '…';
  return lines;
}

function card({ bay, eyebrow, title, badge }) {
  const a = PAL[bay] || PAL.hub;
  const lines = wrap(title, 24, 3);
  const startY = 300 - (lines.length - 1) * 38;
  const titleSvg = lines.map((l, i) => `<text x="80" y="${startY + i * 76}" font-family="Arial, sans-serif" font-weight="800" font-size="64" fill="#E6EDF6">${esc(l)}</text>`).join('');
  return Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#0E1320"/><stop offset="1" stop-color="#0A0E17"/></linearGradient>
    <radialGradient id="ga" cx="88%" cy="2%" r="55%"><stop offset="0" stop-color="${a}" stop-opacity="0.38"/><stop offset="100%" stop-color="${a}" stop-opacity="0"/></radialGradient>
    <radialGradient id="ge" cx="4%" cy="100%" r="55%"><stop offset="0" stop-color="${EMBER}" stop-opacity="0.30"/><stop offset="100%" stop-color="${EMBER}" stop-opacity="0"/></radialGradient>
    <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse"><path d="M48 0H0V48" fill="none" stroke="${a}" stroke-width="1" opacity="0.08"/></pattern>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect width="1200" height="630" fill="url(#grid)"/>
  <rect width="1200" height="630" fill="url(#ga)"/>
  <rect width="1200" height="630" fill="url(#ge)"/>
  <g transform="translate(104,96)">
    <polygon points="34,0 17,-29.4 -17,-29.4 -34,0 -17,29.4 17,29.4" fill="none" stroke="${a}" stroke-width="3"/>
    <path d="M0,-23 L7,-7 23,0 7,7 0,23 -7,7 -23,0 -7,-7 Z" fill="${EMBER}"/>
  </g>
  <text x="150" y="104" font-family="Arial, sans-serif" font-weight="800" font-size="34" letter-spacing="2" fill="#E6EDF6">IGNITION<tspan fill="#8B97AA" font-weight="400">SIM</tspan></text>
  <text x="80" y="200" font-family="monospace" font-size="22" letter-spacing="5" fill="${a}">${esc(eyebrow)}</text>
  ${titleSvg}
  <text x="80" y="560" font-family="monospace" font-size="22" letter-spacing="3" fill="#5A6678">ignitionsim.com</text>
  ${badge ? `<g transform="translate(1040,520)"><circle r="68" fill="none" stroke="${a}" stroke-width="3"/><text text-anchor="middle" y="-2" font-family="Arial, sans-serif" font-weight="800" font-size="46" fill="${a}">${esc(badge)}</text><text text-anchor="middle" y="34" font-family="monospace" font-size="16" letter-spacing="2" fill="#8B97AA">VERDICT</text></g>` : ''}
</svg>`);
}

async function render(rel, opts) {
  const abs = join(OG, rel);
  await mkdir(dirname(abs), { recursive: true });
  await sharp(card(opts)).png().toFile(abs);
}

let n = 0;
// articles
const artRoot = join(root, 'src', 'content', 'articles');
for (const bay of await readdir(artRoot)) {
  const dir = join(artRoot, bay);
  for (const f of (await readdir(dir)).filter((x) => x.endsWith('.md'))) {
    const head = (await readFile(join(dir, f), 'utf8')).slice(0, 1200);
    const title = (head.match(/title:\s*"([^"]+)"/) || [])[1] || f.replace(/\.md$/, '');
    const type = ((head.match(/type:\s*"([^"]+)"/) || [])[1] || 'guide').replace(/-/g, ' ');
    await render(`${bay}/${f.replace(/\.md$/, '')}.png`, { bay, eyebrow: `// ${bay.toUpperCase()} · ${type}`, title });
    n++;
  }
}
// gear
const prodRoot = join(root, 'src', 'data', 'products');
if (existsSync(prodRoot)) {
  for (const f of (await readdir(prodRoot)).filter((x) => x.endsWith('.json'))) {
    const bay = f.replace(/\.json$/, '');
    for (const p of JSON.parse(await readFile(join(prodRoot, f), 'utf8'))) {
      await render(`gear/${bay}/${p.id}.png`, { bay, eyebrow: `// ${bay.toUpperCase()} · ${esc(p.brand)}`, title: p.model, badge: p.rating?.overall ? String(p.rating.overall) : '' });
      n++;
    }
  }
}
console.log(`Generated ${n} OG cards → public/og/`);
