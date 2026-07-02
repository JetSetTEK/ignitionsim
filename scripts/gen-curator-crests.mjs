#!/usr/bin/env node
// Generates a signature "bench card" crest SVG per curator into public/images/crew/crest-<slug>.svg.
// Pulls name/handle/tagline/catchphrase from crew.json; layout data below. Run: node scripts/gen-curator-crests.mjs
import fs from 'node:fs';
import path from 'node:path';

const crew = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'src/data/crew.json'), 'utf8'));
const OUT = path.join(process.cwd(), 'public/images/crew');
const W = 1280, H = 468;
const SANS = "'Helvetica Neue',Arial,sans-serif";
const MONO = "'SFMono-Regular',Consolas,'Liberation Mono',Menlo,monospace";
const C = { ink: '#0b1118', panel: '#16222e', line: '#2b3e51', txt: '#eef5fb', mut: '#93a7b8' };
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const t = (x, y, s, o = {}) => {
  const { size = 22, fill = C.txt, weight = 400, anchor = 'start', font = SANS, ls = 0, italic = '' } = o;
  return `<text x="${x}" y="${y}" font-family="${font}" font-size="${size}" font-weight="${weight}" fill="${fill}" text-anchor="${anchor}" letter-spacing="${ls}"${italic ? ' font-style="italic"' : ''}>${esc(s)}</text>`;
};
const rect = (x, y, w, h, o = {}) => {
  const { r = 12, fill = C.panel, stroke = 'none', sw = 1, op = 1 } = o;
  return `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}" ry="${r}" fill="${fill}" stroke="${stroke}" stroke-width="${sw}" opacity="${op}"/>`;
};

// bay glyphs, drawn in a 120x120 box centered at (cx,cy), accent stroke
function glyph(kind, cx, cy, a) {
  const s = (p, extra = '') => `<path d="${p}" fill="none" stroke="${a}" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round" ${extra}/>`;
  if (kind === 'wheel') // racing steering wheel
    return `<circle cx="${cx}" cy="${cy}" r="46" fill="none" stroke="${a}" stroke-width="5"/>` +
      `<circle cx="${cx}" cy="${cy}" r="12" fill="${a}"/>` +
      s(`M${cx} ${cy - 12} V${cy - 44}`) + s(`M${cx - 10} ${cy + 6} L${cx - 38} ${cy + 30}`) + s(`M${cx + 10} ${cy + 6} L${cx + 38} ${cy + 30}`);
  if (kind === 'flag') // golf flag on a green
    return s(`M${cx - 26} ${cy + 44} V${cy - 46}`) + `<path d="M${cx - 26} ${cy - 46} L${cx + 34} ${cy - 32} L${cx - 26} ${cy - 16} Z" fill="${a}" stroke="none"/>` +
      s(`M${cx - 48} ${cy + 44} q48 -22 96 0`);
  if (kind === 'stick') // joystick + reticle (flight/space)
    return `<circle cx="${cx}" cy="${cy - 30}" r="15" fill="${a}"/>` + s(`M${cx} ${cy - 16} V${cy + 30}`) +
      s(`M${cx - 34} ${cy + 40} q34 -18 68 0`) + `<circle cx="${cx}" cy="${cy - 30}" r="40" fill="none" stroke="${a}" stroke-width="3" opacity="0.5"/>` +
      s(`M${cx - 52} ${cy - 30} h20 M${cx + 32} ${cy - 30} h20`, 'opacity="0.5"');
  if (kind === 'helm') { // ship's helm
    let sp = `<circle cx="${cx}" cy="${cy}" r="34" fill="none" stroke="${a}" stroke-width="5"/><circle cx="${cx}" cy="${cy}" r="9" fill="${a}"/>`;
    for (let i = 0; i < 6; i++) { const ang = (i * 60) * Math.PI / 180; const x1 = cx + 34 * Math.cos(ang), y1 = cy + 34 * Math.sin(ang), x2 = cx + 50 * Math.cos(ang), y2 = cy + 50 * Math.sin(ang); sp += s(`M${x1.toFixed(1)} ${y1.toFixed(1)} L${x2.toFixed(1)} ${y2.toFixed(1)}`); }
    return sp;
  }
  // waveform + node (diy)
  return s(`M${cx - 50} ${cy} q12 -40 24 0 q12 40 24 0 q12 -40 24 0`) + `<circle cx="${cx - 50}" cy="${cy}" r="6" fill="${a}"/><circle cx="${cx + 22}" cy="${cy}" r="6" fill="${a}"/>` +
    s(`M${cx - 40} ${cy + 34} h80`, 'opacity="0.5"');
}

const meta = {
  'duke-alvarez': { a: '#FF7A1A', glyph: 'wheel', initials: 'DA', bayLabel: 'RACING', since: 'SIM RACING SINCE 2013', chips: ['Direct drive', 'Load-cell brakes', 'Rig rigidity', 'FFB tuning'] },
  'nina-brooks': { a: '#34D399', glyph: 'flag', initials: 'NB', bayLabel: 'GOLF', since: 'HOME GOLF SIMS SINCE 2016', chips: ['Room fit', 'Launch monitors', 'Projectors', 'Impact screens'] },
  'val-chen': { a: '#38BDF8', glyph: 'stick', initials: 'VC', bayLabel: 'FLIGHT · SPACE', since: 'FLIGHT SIM SINCE 2012', chips: ['HOSAS / HOTAS', 'USB topology', 'Cockpit mounts', 'Bindings'] },
  'gus-calder': { a: '#2DD4BF', glyph: 'helm', initials: 'GC', bayLabel: 'MARINE', since: 'MARINE SIM SINCE 2013', chips: ['DIY helms', 'Bodnar boards', 'Throttle quads', 'Config files'] },
  'mac-donovan': { a: '#A3E635', glyph: 'wave', initials: 'MD', bayLabel: 'DIY · MOTION', since: 'DIY BENCH SINCE 2011', chips: ['DIY motion', 'Bass shakers', 'Button boxes', 'Clean power'] },
};

let n = 0;
for (const person of crew) {
  const m = meta[person.slug];
  if (!m) continue;
  const a = m.a;
  let s = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" font-family="${SANS}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0b1118"/><stop offset="1" stop-color="#0f1a25"/></linearGradient>
    <radialGradient id="gl" cx="0.12" cy="0.1" r="0.7"><stop offset="0" stop-color="${a}" stop-opacity="0.2"/><stop offset="1" stop-color="${a}" stop-opacity="0"/></radialGradient>
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M40 0H0V40" fill="none" stroke="#25384a" stroke-width="1" opacity="0.28"/></pattern>
  </defs>
  <rect width="${W}" height="${H}" rx="26" fill="url(#bg)"/>
  <rect width="${W}" height="${H}" rx="26" fill="url(#grid)"/>
  <rect width="${W}" height="${H}" rx="26" fill="url(#gl)"/>
  <rect x="2" y="2" width="${W - 4}" height="${H - 4}" rx="24" fill="none" stroke="${a}" stroke-width="2" opacity="0.5"/>
  <rect x="0" y="0" width="10" height="${H}" rx="5" fill="${a}"/>`;
  // left badge
  const bx = 118, by = 172;
  s += `<circle cx="${bx}" cy="${by}" r="82" fill="#0b1118" stroke="${a}" stroke-width="3"/>`;
  s += glyph(m.glyph, bx, by - 4, a);
  s += t(bx, by + 118, m.initials, { size: 40, weight: 800, fill: a, anchor: 'middle', ls: 3 });
  s += t(bx, by + 150, 'BENCH CREW', { size: 13, weight: 700, fill: C.mut, anchor: 'middle', font: MONO, ls: 3 });
  // center
  const cx0 = 260;
  s += t(cx0, 96, person.handle.toUpperCase(), { size: 17, weight: 700, fill: a, font: MONO, ls: 4 });
  s += t(cx0, 168, person.name, { size: 62, weight: 800, fill: C.txt, ls: -1 });
  s += `<rect x="${cx0}" y="188" width="128" height="5" rx="2.5" fill="${a}"/>`;
  s += t(cx0, 232, person.tagline, { size: 24, weight: 700, fill: a });
  // catchphrase block
  s += rect(cx0, 262, 640, 92, { fill: '#0e1822', stroke: C.line, sw: 1, r: 14 });
  s += `<text x="${cx0 + 22}" y="298" font-family="${SANS}" font-size="40" font-weight="800" fill="${a}" opacity="0.5">&#8220;</text>`;
  // catchphrase wrapped (<=52 chars/line)
  const words = person.catchphrase.split(/\s+/); const lines = []; let cur = '';
  for (const w of words) { if (!cur) { cur = w; continue; } if ((cur + ' ' + w).length <= 52) cur += ' ' + w; else { lines.push(cur); cur = w; } }
  if (cur) lines.push(cur);
  lines.slice(0, 2).forEach((ln, i) => { s += t(cx0 + 54, 300 + i * 30, ln, { size: 21, weight: 600, fill: C.txt, italic: true }); });
  // right expertise chips
  const rx = 936; let cy = 78;
  s += t(rx, cy, 'EXPERTISE', { size: 14, weight: 800, fill: C.mut, font: MONO, ls: 3 }); cy += 26;
  m.chips.forEach((chip) => {
    const cw = 300; s += rect(rx, cy, cw, 46, { fill: '#12202c', stroke: a, sw: 1.2, r: 10, op: 1 });
    s += `<circle cx="${rx + 22}" cy="${cy + 23}" r="4" fill="${a}"/>`;
    s += t(rx + 40, cy + 30, chip, { size: 19, weight: 700, fill: C.txt });
    cy += 56;
  });
  // bottom bar
  s += `<line x1="30" y1="${H - 52}" x2="${W - 30}" y2="${H - 52}" stroke="${C.line}" stroke-width="1" opacity="0.6"/>`;
  s += t(cx0, H - 24, m.since, { size: 14, weight: 700, fill: C.mut, font: MONO, ls: 2 });
  s += t(30 + 88, H - 24, 'IGNITIONSIM.COM', { size: 13, weight: 700, fill: C.mut, font: MONO, ls: 2, anchor: 'middle' });
  const bl = m.bayLabel; const pw = bl.length * 10 + 40; const px = W - 30 - pw;
  s += rect(px, H - 42, pw, 30, { fill: a, op: 0.16, r: 15 });
  s += t(px + pw / 2, H - 22, bl, { size: 13, weight: 800, fill: a, font: MONO, ls: 2, anchor: 'middle' });
  s += `</svg>`;
  fs.writeFileSync(path.join(OUT, `crest-${person.slug}.svg`), s);
  n++;
}
console.log(`Generated ${n} curator crests into public/images/crew/`);
