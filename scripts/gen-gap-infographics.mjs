#!/usr/bin/env node
// Generates the 16 gap-category buyer-guide infographics as a consistent
// IgnitionSim "command-center" SVG family. Data distilled from the agent-written
// specs in docs/claude-run-3/infographics/*.json. Run: node scripts/gen-gap-infographics.mjs
import fs from 'node:fs';
import path from 'node:path';

const OUT = path.join(process.cwd(), 'public/images/infographics');
const W = 1600, H = 1000;
const SANS = "'Helvetica Neue',Arial,sans-serif";
const MONO = "'SFMono-Regular',Consolas,'Liberation Mono',Menlo,monospace";
const C = {
  ink: '#0b1118', ink2: '#0f1822', panel: '#16222e', panel2: '#1c2b3a', line: '#2b3e51',
  txt: '#eef5fb', mut: '#8fa4b6', good: '#34d399', warn: '#fb923c', bad: '#f87171',
};
const BAY = { racing: '#f59e0b', flight: '#38bdf8', space: '#a855f7', golf: '#eab308', marine: '#2dd4bf' };

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
function wrap(text, cpl) {
  const words = String(text).split(/\s+/); const lines = []; let cur = '';
  for (const w of words) {
    if (!cur) { cur = w; continue; }
    if ((cur + ' ' + w).length <= cpl) cur += ' ' + w; else { lines.push(cur); cur = w; }
  }
  if (cur) lines.push(cur);
  return lines;
}
const cpl = (w, size) => Math.max(4, Math.floor(w / (size * 0.53)));
const wrapAt = (text, w, size) => wrap(text, cpl(w, size));
function txt(x, y, s, o = {}) {
  const { size = 22, fill = C.txt, weight = 400, anchor = 'start', font = SANS, ls = 0 } = o;
  return `<text x="${x}" y="${y}" font-family="${font}" font-size="${size}" font-weight="${weight}" fill="${fill}" text-anchor="${anchor}" letter-spacing="${ls}">${esc(s)}</text>`;
}
function para(x, y, text, o = {}) {
  const { w = 300, size = 20, lh = 1.32, ...rest } = o;
  return wrapAt(text, w, size).map((ln, i) => txt(x, y + i * size * lh, ln, { size, ...rest })).join('');
}
const paraH = (text, w, size, lh = 1.32) => wrapAt(text, w, size).length * size * lh;
function rect(x, y, w, h, o = {}) {
  const { r = 14, fill = C.panel, stroke = 'none', sw = 1, op = 1 } = o;
  return `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}" ry="${r}" fill="${fill}" stroke="${stroke}" stroke-width="${sw}" opacity="${op}"/>`;
}

function defs(a) {
  return `<defs>
    <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0b1118"/><stop offset="1" stop-color="#0f1a25"/></linearGradient>
    <radialGradient id="glow" cx="0.85" cy="0.08" r="0.75"><stop offset="0" stop-color="${a}" stop-opacity="0.16"/><stop offset="1" stop-color="${a}" stop-opacity="0"/></radialGradient>
    <pattern id="grid" width="44" height="44" patternUnits="userSpaceOnUse"><path d="M44 0H0V44" fill="none" stroke="#25384a" stroke-width="1" opacity="0.3"/></pattern>
  </defs>`;
}
function head(title, kicker, a) {
  return `<rect x="72" y="60" width="14" height="14" fill="${a}"/>
   ${txt(100, 73, kicker.toUpperCase(), { size: 18, fill: a, weight: 700, font: MONO, ls: 4 })}
   ${txt(72, 128, title, { size: 44, fill: C.txt, weight: 800, ls: -0.5 })}
   <rect x="72" y="146" width="150" height="5" rx="2.5" fill="${a}"/>`;
}
function foot(bay, a) {
  const bl = bay.toUpperCase(); const pw = bl.length * 11 + 44; const px = 1528 - pw;
  return `<line x1="72" y1="914" x2="1528" y2="914" stroke="${C.line}" stroke-width="1" opacity="0.6"/>
   ${txt(72, 960, 'IGNITIONSIM.COM', { size: 16, fill: C.mut, weight: 700, font: MONO, ls: 3 })}
   <rect x="${px}" y="938" width="${pw}" height="34" rx="17" fill="${a}" opacity="0.16"/>
   ${txt(px + pw / 2, 960, bl, { size: 15, fill: a, weight: 700, font: MONO, ls: 2, anchor: 'middle' })}`;
}
function svg(a, title, kicker, bay, inner) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" font-family="${SANS}">
  ${defs(a)}
  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <rect width="${W}" height="${H}" fill="url(#grid)"/>
  <rect width="${W}" height="${H}" fill="url(#glow)"/>
  ${head(title, kicker, a)}
  ${inner}
  ${foot(bay, a)}
</svg>`;
}

/* ---- renderers ---- */
function pipeline(d, a) {
  let s = ''; const n = d.stages.length; const gap = 26; const cw = (1456 - (n - 1) * gap) / n; const y = 200, h = 250;
  d.stages.forEach((st, i) => {
    const x = 72 + i * (cw + gap);
    s += rect(x, y, cw, h, { fill: C.panel, stroke: C.line, sw: 1 });
    s += `<circle cx="${x + 34}" cy="${y + 38}" r="20" fill="${a}"/>` + txt(x + 34, y + 45, String(i + 1), { size: 22, weight: 800, fill: '#0b1118', anchor: 'middle' });
    s += txt(x + 64, y + 45, st.label, { size: 20, weight: 800, fill: C.txt });
    s += para(x + 22, y + 92, st.detail, { w: cw - 44, size: 16, lh: 1.34, fill: C.mut });
    if (i < n - 1) { const ax = x + cw + gap / 2; s += `<path d="M${ax - 9} ${y + h / 2 - 14} L${ax + 9} ${y + h / 2} L${ax - 9} ${y + h / 2 + 14}" fill="none" stroke="${a}" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>`; }
  });
  const oy = 484, oh = 156, ow = (1456 - 26) / 2;
  d.outputs.forEach((o, i) => {
    const x = 72 + i * (ow + 26);
    s += rect(x, oy, ow, oh, { fill: C.panel2, stroke: a, sw: 1.5 });
    s += txt(x + 24, oy + 42, o.title, { size: 19, weight: 800, fill: a, font: MONO, ls: 1 });
    s += para(x + 24, oy + 80, o.detail, { w: ow - 48, size: 17, lh: 1.35, fill: C.txt });
  });
  const ny = 676; s += rect(72, ny, 1456, 74, { fill: '#101b12', stroke: C.good, sw: 1 });
  s += txt(96, ny + 32, 'MOUNT', { size: 14, weight: 800, fill: C.good, font: MONO, ls: 2 });
  s += para(190, ny + 30, d.mountNote, { w: 1300, size: 18, lh: 1.28, fill: C.txt });
  return s;
}
function compareTable(d, a) {
  let s = ''; const X = 72, WT = 1456; const lc = 250; const gap = 14; const vc = (WT - lc - gap * 2) / 2;
  const ax = X + lc + gap, bx = ax + vc + gap; const hy = 192, hh = 82;
  const hdr = (x, col) => rect(x, hy, vc, hh, { fill: C.panel2, stroke: a, sw: 1.5 }) +
    txt(x + vc / 2, hy + 34, col.title, { size: 22, weight: 800, fill: C.txt, anchor: 'middle' }) +
    txt(x + vc / 2, hy + 62, col.sub, { size: 15, weight: 600, fill: a, anchor: 'middle', font: MONO, ls: 1 });
  s += hdr(ax, d.colA) + hdr(bx, d.colB);
  let y = hy + hh + 14;
  d.rows.forEach((r, i) => {
    const rh = Math.max(58, Math.max(paraH(r.a, vc - 40, 17), paraH(r.b, vc - 40, 17)) + 26);
    const bg = i % 2 ? C.ink2 : C.panel;
    s += rect(X, y, lc, rh, { fill: bg });
    s += txt(X + 18, y + rh / 2 + 6, r.dim, { size: 18, weight: 800, fill: C.txt });
    const cell = (x, val, win) => rect(x, y, vc, rh, { fill: bg, stroke: win ? a : 'none', sw: win ? 2 : 0 }) +
      para(x + 20, y + 28, val, { w: vc - 46, size: 17, lh: 1.3, fill: win ? C.txt : C.mut }) +
      (win ? txt(x + vc - 14, y + 30, '✓', { size: 19, weight: 800, fill: a, anchor: 'end' }) : '');
    s += cell(ax, r.a, r.win === 'a') + cell(bx, r.b, r.win === 'b');
    y += rh + 8;
  });
  if (d.note) {
    const nh = Math.max(56, paraH(d.note, WT - 170, 17) + 26);
    s += rect(X, y + 2, WT, nh, { fill: '#101b12', stroke: C.good, sw: 1 });
    s += txt(X + 22, y + 34, 'RULE', { size: 14, weight: 800, fill: C.good, font: MONO, ls: 2 });
    s += para(X + 120, y + 30, d.note, { w: WT - 160, size: 17, lh: 1.28, fill: C.txt });
  }
  return s;
}
function ladder(d, a) {
  let s = ''; const N = d.rungs.length; const top = 200, bot = 852, gap = 16;
  const rh = (bot - top - (N - 1) * gap) / N; const x0 = 150, xR = 1528, maxIndent = 170;
  const midY = (top + bot) / 2;
  s += `<line x1="104" y1="${bot}" x2="104" y2="${top + 4}" stroke="${a}" stroke-width="3"/><path d="M104 ${top - 8} l-9 16 h18 z" fill="${a}"/>`;
  s += `<text x="94" y="${midY}" font-family="${MONO}" font-size="15" font-weight="700" fill="${a}" letter-spacing="3" text-anchor="middle" transform="rotate(-90 94 ${midY})">${esc(d.axis)}</text>`;
  d.rungs.forEach((r, i) => {
    const y = bot - (i + 1) * rh - i * gap; const indent = Math.round(i * maxIndent / (N - 1 || 1));
    const x = x0 + indent; const w = xR - x;
    s += rect(x, y, w, rh, { fill: C.panel, stroke: a, sw: 1 });
    s += `<rect x="${x}" y="${y}" width="10" height="${rh}" fill="${a}" opacity="${(0.5 + 0.12 * i).toFixed(2)}"/>`;
    s += txt(x + 30, y + 40, r.title, { size: 21, weight: 800, fill: C.txt });
    s += para(x + 30, y + 70, r.detail, { w: w - 320, size: 16, lh: 1.28, fill: C.mut });
    s += rect(xR - 254, y + rh / 2 - 30, 240, 60, { r: 12, fill: '#0b1118', stroke: a, sw: 1.5 });
    s += txt(xR - 134, y + rh / 2 - 2, r.metric, { size: 23, weight: 800, fill: a, anchor: 'middle' });
    if (r.metricSub) s += txt(xR - 134, y + rh / 2 + 22, r.metricSub, { size: 13, weight: 600, fill: C.mut, anchor: 'middle', font: MONO });
  });
  if (d.note) {
    s += rect(150, 860, 1378, 46, { fill: '#1a1206', stroke: a, sw: 1 });
    s += `<text x="174" y="888" font-size="18" fill="${a}" font-family="${SANS}">⚑</text>`;
    s += para(204, 884, d.note, { w: 1300, size: 16, lh: 1.2, fill: C.txt });
  }
  return s;
}
function tierCols(d, a) {
  let s = ''; const N = d.cols.length; const gap = 24; const X = 72, WT = 1456;
  const cw = (WT - (N - 1) * gap) / N; const y = 200, h = 616;
  d.cols.forEach((c, i) => {
    const x = X + i * (cw + gap); const hl = c.highlight;
    s += rect(x, y, cw, h, { fill: hl ? C.panel2 : C.panel, stroke: hl ? a : C.line, sw: hl ? 2.5 : 1 });
    s += `<path d="M${x} ${y + 16} q0 -16 16 -16 h${cw - 32} q16 0 16 16 v54 h-${cw} z" fill="${hl ? a : '#0b1118'}"/>`;
    s += txt(x + cw / 2, y + 46, c.tier, { size: 18, weight: 800, fill: hl ? '#0b1118' : a, anchor: 'middle', font: MONO, ls: 2 });
    s += txt(x + cw / 2, y + 108, c.name, { size: 21, weight: 800, fill: C.txt, anchor: 'middle' });
    let ry = y + 150;
    c.rows.forEach((rw) => {
      s += `<circle cx="${x + 24}" cy="${ry + 7}" r="3.5" fill="${a}"/>`;
      const lines = wrapAt(rw, cw - 58, 17);
      s += para(x + 40, ry + 12, rw, { w: cw - 58, size: 17, lh: 1.28, fill: C.txt });
      ry += lines.length * 17 * 1.28 + 16;
    });
  });
  if (d.banner) {
    const by = y + h + 20; const bh = Math.max(56, paraH(d.banner, WT - 70, 18) + 24);
    s += rect(X, by, WT, bh, { fill: '#0b1118', stroke: a, sw: 1.5 });
    s += `<rect x="${X}" y="${by}" width="8" height="${bh}" fill="${a}"/>`;
    s += para(X + 30, by + 34, d.banner, { w: WT - 70, size: 18, lh: 1.28, fill: C.txt });
  }
  return s;
}
function mapRows(d, a) {
  let s = ''; const X = 72, WT = 1456; let y = 195;
  if (d.banner) {
    const bh = Math.max(52, paraH(d.banner, WT - 70, 18) + 20);
    s += rect(X, y, WT, bh, { fill: C.panel2, stroke: a, sw: 1.5 });
    s += `<rect x="${X}" y="${y}" width="8" height="${bh}" fill="${a}"/>`;
    s += para(X + 30, y + 32, d.banner, { w: WT - 70, size: 18, lh: 1.26, weight: 700, fill: C.txt });
    y += bh + 18;
  }
  const N = d.rows.length; const rh = Math.min(90, (852 - y - (N - 1) * 14) / N);
  const leftW = 770, gpuW = 430, arrowW = 1456 - leftW - gpuW;
  d.rows.forEach((r) => {
    s += rect(X, y, leftW, rh, { fill: C.panel, stroke: C.line, sw: 1 });
    s += txt(X + 24, y + rh / 2 - 4, r.left, { size: 20, weight: 800, fill: C.txt });
    s += txt(X + 24, y + rh / 2 + 22, r.leftSub, { size: 15, weight: 500, fill: C.mut, font: MONO });
    const ax0 = X + leftW;
    s += `<path d="M${ax0 + 14} ${y + rh / 2} H${ax0 + arrowW - 20}" stroke="${a}" stroke-width="3"/><path d="M${ax0 + arrowW - 12} ${y + rh / 2} l-16 -10 v20 z" fill="${a}"/>`;
    const gx = X + leftW + arrowW; const lvl = r.level || 1;
    s += rect(gx, y, gpuW, rh, { fill: C.panel2, stroke: a, sw: 1.5 });
    s += `<rect x="${gx}" y="${y}" width="${gpuW}" height="${rh}" rx="14" fill="${a}" opacity="${(0.05 + 0.05 * lvl).toFixed(2)}"/>`;
    s += txt(gx + 22, y + rh / 2 + 8, r.right, { size: 23, weight: 800, fill: a });
    if (r.rightSub) s += txt(gx + gpuW - 20, y + rh / 2 + 7, r.rightSub, { size: 14, weight: 600, fill: C.mut, anchor: 'end', font: MONO });
    y += rh + 14;
  });
  if (d.footnote) {
    const nh = Math.max(50, paraH(d.footnote, WT - 150, 16) + 24);
    s += rect(X, y + 2, WT, nh, { fill: '#101820', stroke: C.line, sw: 1 });
    s += txt(X + 22, y + 32, 'NOTE', { size: 13, weight: 800, fill: a, font: MONO, ls: 2 });
    s += para(X + 110, y + 28, d.footnote, { w: WT - 150, size: 16, lh: 1.26, fill: C.mut });
  }
  return s;
}
function barChart(d, a) {
  let s = ''; const X = 72, WT = 1456; const top = 205; const labelW = 470;
  const chartX = X + labelW; const chartW = WT - labelW - 40; const max = Math.max(...d.bars.map((b) => b.value));
  const N = d.bars.length; const bh = Math.min(94, (838 - top - (N - 1) * 22) / N); let y = top;
  d.bars.forEach((b) => {
    s += txt(X, y + bh / 2 - 4, b.label, { size: 18, weight: 800, fill: C.txt });
    if (b.sub) s += txt(X, y + bh / 2 + 20, b.sub, { size: 14, weight: 500, fill: C.mut, font: MONO });
    const w = Math.max(150, chartW * (b.value / max));
    s += rect(chartX, y, chartW, bh, { fill: '#0b1118', r: 10 });
    s += rect(chartX, y, w, bh, { fill: a, op: b.dim ? 0.4 : 0.92, r: 10 });
    s += txt(chartX + 18, y + bh / 2 + 7, b.valueLabel, { size: 21, weight: 800, fill: '#0b1118' });
    s += txt(chartX + w + 14, y + bh / 2 + 7, b.gpu, { size: 16, weight: 800, fill: C.txt });
    y += bh + 22;
  });
  if (d.note) {
    const nh = Math.max(52, paraH(d.note, WT - 100, 16.5) + 24);
    s += rect(X, y + 4, WT, nh, { fill: '#101820', stroke: a, sw: 1 });
    s += `<text x="${X + 22}" y="${y + 36}" font-size="16" fill="${a}" font-family="${SANS}">▲</text>`;
    s += para(X + 56, y + 32, d.note, { w: WT - 100, size: 16.5, lh: 1.26, fill: C.txt });
  }
  return s;
}
function decision2(d, a) {
  let s = ''; const X = 72, WT = 1456; let y = 195;
  const th = Math.max(72, paraH(d.topBand, WT - 70, 18) + 34);
  s += rect(X, y, WT, th, { fill: C.panel2, stroke: a, sw: 1.5 });
  s += `<rect x="${X}" y="${y}" width="8" height="${th}" fill="${a}"/>`;
  s += txt(X + 30, y + 30, 'WHY MSFS 2024 IS THE BENCHMARK', { size: 14, weight: 800, fill: a, font: MONO, ls: 2 });
  s += para(X + 30, y + 58, d.topBand, { w: WT - 70, size: 18, lh: 1.3, fill: C.txt });
  y += th + 20;
  const gap = 24, cw = (WT - gap) / 2, colH = 402;
  [d.colA, d.colB].forEach((c, i) => {
    const x = X + i * (cw + gap);
    s += rect(x, y, cw, colH, { fill: C.panel, stroke: i ? a : C.line, sw: i ? 2 : 1 });
    s += `<path d="M${x} ${y + 14} q0 -14 14 -14 h${cw - 28} q14 0 14 14 v50 h-${cw} z" fill="${i ? a : '#0b1118'}"/>`;
    s += txt(x + 24, y + 42, c.title, { size: 22, weight: 800, fill: i ? '#0b1118' : C.txt });
    let ry = y + 96;
    c.specs.forEach((sp) => {
      s += `<circle cx="${x + 26}" cy="${ry + 6}" r="3.5" fill="${a}"/>`;
      const ls = wrapAt(sp, cw - 60, 17.5);
      s += para(x + 42, ry + 11, sp, { w: cw - 60, size: 17.5, lh: 1.3, fill: C.txt });
      ry += ls.length * 17.5 * 1.3 + 14;
    });
    const py = y + colH - 96;
    s += rect(x + 16, py, cw - 32, 80, { fill: '#0b1118', stroke: a, sw: 1 });
    s += txt(x + 30, py + 26, 'PICK IT IF', { size: 13, weight: 800, fill: a, font: MONO, ls: 2 });
    s += para(x + 30, py + 48, c.pick, { w: cw - 60, size: 15, lh: 1.24, fill: C.mut });
  });
  y += colH + 16;
  s += rect(X, y, WT, 54, { fill: '#101b12', stroke: C.good, sw: 1.5 });
  s += txt(X + 24, y + 34, 'VERDICT', { size: 14, weight: 800, fill: C.good, font: MONO, ls: 2 });
  s += para(X + 150, y + 33, d.verdict, { w: WT - 190, size: 18, weight: 700, lh: 1.2, fill: C.txt });
  if (d.footnote) { y += 64; s += para(X + 6, y + 22, d.footnote, { w: WT - 12, size: 15, lh: 1.24, fill: C.mut }); }
  return s;
}
function stack(d, a) {
  let s = ''; const X = 72, WT = 1456; const N = d.layers.length; const top = 200, bot = 842, gap = 14;
  const lh = (bot - top - (N - 1) * gap) / N;
  d.layers.forEach((L, i) => {
    const y = bot - (i + 1) * lh - i * gap; const inset = Math.round(i * 74); const x = X + inset; const w = WT - 2 * inset;
    const rc = L.rate === 'HIGHEST' ? C.good : L.rate === 'HIGH' ? '#8bc34a' : L.rate === 'LOW' ? C.bad : a;
    s += rect(x, y, w, lh, { fill: C.panel, stroke: a, sw: 1 });
    s += `<rect x="${x}" y="${y}" width="10" height="${lh}" fill="${a}"/>`;
    s += txt(x + 30, y + 40, L.title, { size: 22, weight: 800, fill: C.txt });
    s += para(x + 30, y + 70, L.detail, { w: w - 360, size: 16, lh: 1.26, fill: C.mut });
    s += txt(x + 30, y + lh - 16, L.cost, { size: 16, weight: 700, fill: a, font: MONO });
    s += rect(x + w - 316, y + lh / 2 - 30, 300, 60, { r: 12, fill: '#0b1118', stroke: rc, sw: 1.5 });
    s += txt(x + w - 166, y + lh / 2 - 6, 'IMMERSION / $', { size: 12, weight: 700, fill: C.mut, anchor: 'middle', font: MONO, ls: 1 });
    s += txt(x + w - 166, y + lh / 2 + 18, L.rate, { size: 19, weight: 800, fill: rc, anchor: 'middle' });
  });
  if (d.rule) {
    s += rect(X, 852, WT, 52, { fill: '#1a1206', stroke: a, sw: 1 });
    s += `<text x="${X + 22}" y="884" font-size="18" fill="${a}" font-family="${SANS}">★</text>`;
    s += para(X + 50, 880, d.rule, { w: WT - 90, size: 16, lh: 1.2, fill: C.txt });
  }
  return s;
}
function checkGrid(d, a) {
  let s = ''; const X = 72, WT = 1456; const cols = 3; const gx = 24, gy = 22;
  const cw = (WT - (cols - 1) * gx) / cols; const chh = 288; const top = 200;
  d.tiles.forEach((t, i) => {
    const cx = i % cols, cy = (i / cols) | 0; const x = X + cx * (cw + gx); const y = top + cy * (chh + gy);
    s += rect(x, y, cw, chh, { fill: C.panel, stroke: C.line, sw: 1 });
    s += rect(x + 22, y + 24, 30, 30, { r: 7, fill: 'none', stroke: a, sw: 2.5 });
    s += `<path d="M${x + 29} ${y + 39} l6 7 l12 -15" fill="none" stroke="${a}" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>`;
    s += txt(x + 66, y + 46, t.cat, { size: 20, weight: 800, fill: C.txt });
    s += txt(x + 22, y + 86, t.product, { size: 15, weight: 700, fill: a, font: MONO });
    s += para(x + 22, y + 118, t.why, { w: cw - 44, size: 16, lh: 1.3, fill: C.mut });
    const bc = /FIRST/.test(t.badge) ? C.good : /LAST/.test(t.badge) ? a : C.mut;
    s += rect(x + 22, y + chh - 58, cw - 44, 40, { r: 9, fill: '#0b1118', stroke: bc, sw: 1.5 });
    s += txt(x + cw / 2, y + chh - 32, t.badge.toUpperCase(), { size: 15, weight: 800, fill: bc, anchor: 'middle', font: MONO, ls: 1.5 });
  });
  const ny = top + 2 * chh + gy + 16;
  if (d.note) {
    s += rect(X, ny, WT, 50, { fill: '#101b12', stroke: C.good, sw: 1 });
    s += `<text x="${X + 22}" y="${ny + 33}" font-size="18" fill="${C.good}" font-family="${SANS}">✓</text>`;
    s += para(X + 50, ny + 30, d.note, { w: WT - 90, size: 16.5, lh: 1.2, fill: C.txt });
  }
  return s;
}
function busVsPowered(d, a) {
  let s = ''; const X = 72, WT = 1456; const dy = 200;
  s += rect(X, dy, WT, 64, { fill: C.panel2, stroke: a, sw: 1.5 });
  s += txt(X + 24, dy + 27, 'A MODERN DIRECT-DRIVE RIG =', { size: 14, weight: 800, fill: a, font: MONO, ls: 1 });
  s += txt(X + 24, dy + 50, d.devices, { size: 17, weight: 600, fill: C.txt });
  const py = dy + 90; const gap = 26, cw = (WT - gap) / 2, ph = 458;
  [{ p: d.bad, ok: false }, { p: d.good, ok: true }].forEach((pp, i) => {
    const x = X + i * (cw + gap); const col = pp.ok ? C.good : C.bad;
    s += rect(x, py, cw, ph, { fill: C.panel, stroke: col, sw: 2 });
    s += `<rect x="${x}" y="${py}" width="${cw}" height="58" rx="14" fill="${col}" opacity="0.16"/>`;
    s += txt(x + 24, py + 37, pp.p.title, { size: 22, weight: 800, fill: col });
    s += para(x + 24, py + 92, pp.p.detail, { w: cw - 48, size: 17.5, lh: 1.34, fill: C.txt });
    const sy = py + ph - 150;
    s += rect(x + 20, sy, cw - 40, 130, { r: 12, fill: '#0b1118', stroke: col, sw: 1.5 });
    s += `<circle cx="${x + 48}" cy="${sy + 34}" r="16" fill="${col}"/>` + txt(x + 48, sy + 41, pp.ok ? '✓' : '✕', { size: 19, weight: 800, fill: '#0b1118', anchor: 'middle' });
    s += txt(x + 76, sy + 40, pp.ok ? 'STABLE' : 'DROPOUT RISK', { size: 16, weight: 800, fill: col, font: MONO, ls: 1 });
    s += para(x + 24, sy + 72, pp.p.status, { w: cw - 48, size: 16, lh: 1.3, fill: C.mut });
  });
  const ry = py + ph + 16;
  s += rect(X, ry, WT, 54, { fill: '#1a1206', stroke: a, sw: 1.5 });
  s += `<text x="${X + 22}" y="${ry + 34}" font-size="18" fill="${a}" font-family="${SANS}">⚑</text>`;
  s += para(X + 52, ry + 30, d.rule, { w: WT - 90, size: 16.5, lh: 1.2, fill: C.txt });
  return s;
}
function fov(d, a) {
  let s = '';
  const draw = (cx, hy, half, panels, title, sub, cov) => {
    const R = 340; const pt = (deg) => { const r = (-90 + deg) * Math.PI / 180; return [cx + R * Math.cos(r), hy + R * Math.sin(r)]; };
    const [lx, ly] = pt(-half), [rx, ry] = pt(half);
    let o = `<path d="M${cx} ${hy} L${lx.toFixed(1)} ${ly.toFixed(1)} A ${R} ${R} 0 ${half > 90 ? 1 : 0} 1 ${rx.toFixed(1)} ${ry.toFixed(1)} Z" fill="${a}" opacity="0.10" stroke="${a}" stroke-opacity="0.35"/>`;
    panels.forEach(([d1, d2]) => { const [x1, y1] = pt(d1), [x2, y2] = pt(d2); o += `<line x1="${x1.toFixed(1)}" y1="${y1.toFixed(1)}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}" stroke="${a}" stroke-width="10" stroke-linecap="round"/>`; });
    o += `<circle cx="${cx}" cy="${hy}" r="15" fill="${C.txt}"/><path d="M${cx - 9} ${hy - 3} a9 9 0 0 1 18 0" fill="none" stroke="${C.txt}" stroke-width="3"/>`;
    o += txt(cx, hy + 50, 'DRIVER', { size: 13, weight: 700, fill: C.mut, anchor: 'middle', font: MONO, ls: 2 });
    o += txt(cx, hy - R - 40, title, { size: 20, weight: 800, fill: C.txt, anchor: 'middle' });
    o += txt(cx, hy - R - 15, sub, { size: 15, weight: 600, fill: a, anchor: 'middle', font: MONO });
    o += txt(cx, hy + 92, cov, { size: 22, weight: 800, fill: a, anchor: 'middle' });
    return o;
  };
  const hy = 720;
  s += draw(430, hy, 32, [[-32, 32]], 'SINGLE ULTRAWIDE', '49" / 57" · 32:9', '~55–65° FOV');
  s += draw(1150, hy, 95, [[-95, -45], [-25, 25], [45, 95]], 'TRIPLE 27" ANGLED', '~55–60° toe-in', '~180–195° FOV');
  s += `<line x1="800" y1="240" x2="800" y2="796" stroke="${C.line}" stroke-width="1" stroke-dasharray="6 8" opacity="0.5"/>`;
  const cy = 832; s += rect(72, cy, 1456, 74, { fill: C.panel, stroke: C.line, sw: 1 });
  s += para(96, cy + 28, d.callout, { w: 1408, size: 16.5, lh: 1.28, fill: C.txt });
  return s;
}

const R = { pipeline, compareTable, ladder, tierCols, mapRows, barChart, decision2, stack, checkGrid, busVsPowered, fov };

const DIAGRAMS = [
  // 1 — bass shakers signal chain
  { file: 'best-bass-shakers-tactile-sim-2026-1.svg', bay: 'racing', type: 'pipeline',
    title: 'The Tactile Signal Chain', kicker: 'bass shakers · how feel is made',
    stages: [
      { label: '1 · Sim Telemetry', detail: 'iRacing · ACC · LMU output a live stream: wheel slip, ABS pulse, RPM, suspension load, surface type.' },
      { label: '2 · SimHub ShakeIt', detail: 'Maps each channel to a discrete low-frequency effect, routed to a dedicated 2nd audio output — never mixed with game audio.' },
      { label: '3 · Tactile Amp', detail: 'A dedicated Class-D amp (Fosi HT4S, 30W×4 + 60W×1) drives the units. A hi-fi amp or the PC jack cannot do this job.' },
      { label: '4 · Transducer(s)', detail: 'Dayton BST-1 50W under the seat · ButtKicker Gamer Plus/Pro convert the amplified signal into physical movement.' },
    ],
    outputs: [
      { title: 'SEAT TRANSDUCER FEELS', detail: 'Road texture · kerb strikes · impacts · engine RPM rumble · gear-shift kick.' },
      { title: 'PEDAL-DECK TRANSDUCER FEELS', detail: 'Wheelspin · ABS pulse · brake lockup — felt directly through your feet.' },
    ],
    mountNote: 'Isolate every bolt with dense rubber or Sorbothane so the rig informs you — instead of just rattling.' },
  // 2 — DIY vs pad
  { file: 'best-bass-shakers-tactile-sim-2026-2.svg', bay: 'racing', type: 'compareTable',
    title: 'Two Routes Into Tactile', kicker: 'component build vs plug-and-play',
    colA: { title: 'DIY: transducer + amp', sub: '~$200–260 · full control' },
    colB: { title: 'All-in-one pad (NLR HF8)', sub: '~$179–199 · plug & play' },
    rows: [
      { dim: 'Cost', a: 'Dayton BST-1 ~$55 ea + Fosi HT4S ~$145 + SimHub (free)', b: 'One purchase, ~$179–199, no amp to source' },
      { dim: 'Effort', a: 'HIGH — wire the amp, match impedance, set a 2nd audio out, tune ShakeIt', b: 'LOW — USB in, sits on the seat, no wiring or impedance math', win: 'b' },
      { dim: 'Effect', a: 'Strongest, most separable slam; scales to 4+ units + pedal deck', b: '8 motors give position (F/R/L/R) but less raw low-end slam', win: 'a' },
      { dim: 'Noise', a: 'Bolted transducers transmit into the room and floor', b: 'Quiet enough for apartments', win: 'b' },
      { dim: 'Best for', a: 'The tinkerer chasing maximum feel-per-dollar', b: 'Apartment racers who want tactile working in 10 minutes' },
    ],
    note: 'Both routes run on SimHub telemetry. The ButtKicker Gamer Plus/Pro (~$280 / ~$380) is the bundled middle path — transducer + matched 90W/150W amp in one box.' },
  // 3 — rigidity ladder
  { file: 'best-sim-racing-cockpits-and-seats-2026-1.svg', bay: 'racing', type: 'ladder',
    title: 'The Rigidity Ladder', kicker: 'cockpits · torque each tier holds',
    axis: 'RIGIDITY  /  MAX WHEELBASE TORQUE  →',
    rungs: [
      { title: 'Desk clamp', detail: 'On a heavy solid desk. Flexes above 8Nm and hates a hard load-cell brake. ~$40–60.', metric: '5–8 Nm', metricSub: '~$40–60' },
      { title: 'Foldable cockpit — NLR GTLite', detail: 'Rigid reclined seating position that folds flat for apartments. Entry + mid direct drive.', metric: '8–10 Nm', metricSub: '~$229' },
      { title: 'Steel cockpit — NLR GT Track', detail: 'Complete one-box package with a reclined race seat. Stiff enough for the torque most drivers ever run.', metric: '12–15 Nm', metricSub: '~$899' },
      { title: '80/20 aluminium — Trak Racer TR160 / Sim-Lab P1-X', detail: 'No flex under any consumer base. Carries triples, motion and tactile; never stops being upgradeable.', metric: '15 Nm+', metricSub: '$879–1,299' },
    ],
    note: "A stronger base doesn't fix a weaker rig — it exposes it. Buy the frame to your rung first." },
  // 4 — bucket vs fabric
  { file: 'best-sim-racing-cockpits-and-seats-2026-2.svg', bay: 'racing', type: 'compareTable',
    title: 'GT Bucket vs Fabric Seat', kicker: 'pick the seat by what you value',
    colA: { title: 'GT bucket (fibreglass)', sub: 'authenticity · tactile' },
    colB: { title: 'Fabric / padded seat', sub: 'comfort · budget' },
    rows: [
      { dim: 'Support', a: 'High — side bolsters lock the body in place', b: 'Moderate — padded, with more give', win: 'a' },
      { dim: 'Comfort (2h+)', a: 'Firmer, less forgiving over long stints', b: 'High — cushioned, better for endurance', win: 'b' },
      { dim: 'Tactile transfer', a: 'High — the rigid shell transmits weight transfer & vibration', b: 'Lower — padding absorbs feel', win: 'a' },
      { dim: 'Price', a: 'Higher — shell + side-mount brackets required', b: 'Lower — NLR Elite ES1 ~$449, or built into GTLite / GT Track', win: 'b' },
    ],
    note: "A bucket needs side-mount brackets + a rigid frame with seat rails — it won't mount on a folding stand. Buy fabric for comfort+budget; a bucket for tactile+race-car feel." },
  // 5 — VR tiers
  { file: 'best-vr-headset-for-sim-2026-1.svg', bay: 'flight', type: 'tierCols',
    title: 'VR Headset Tiers for Sim (2026)', kicker: 'value · all-rounder · clarity · comfort',
    cols: [
      { tier: 'VALUE', name: 'Meta Quest 3S', rows: ['Fresnel lenses, smaller sweet spot', '~514g', '$349.99', 'Standalone + PCVR', 'Needs RTX 5070-class'] },
      { tier: 'ALL-ROUNDER', name: 'Meta Quest 3', rows: ['2064×2208/eye · pancake', 'wider FOV · ~515g', '$599.99', 'Standalone + PCVR', 'Needs RTX 5070-class'] },
      { tier: 'CLARITY', name: 'Pimax Crystal Super', rows: ['3840×3840/eye (~50 PPD)', 'tethered, heavier', '~$1,783', 'PCVR · inside-out tracking', 'Needs RTX 5090'], highlight: true },
      { tier: 'COMFORT', name: 'Bigscreen Beyond 2', rows: ['2560×2560 micro-OLED, true blacks', '107g — lightest PCVR made', '$1,019 ($1,219 for 2e)', 'PCVR · needs SteamVR base stations', 'Needs RTX 5080'] },
    ],
    banner: 'The headset is only half the purchase — every tier assumes a GPU that can feed it. Standalone = Quest only; everything else is tethered PCVR. Beyond 2 also needs base stations + controllers (extra cost).' },
  // 6 — VR gpu map
  { file: 'best-vr-headset-for-sim-2026-2.svg', bay: 'flight', type: 'mapRows',
    title: 'The GPU Each Headset Needs', kicker: 'per-eye resolution → RTX tier',
    banner: 'VR renders TWO high-res images every frame — budget roughly HALF your flat-monitor framerate.',
    rows: [
      { left: 'Meta Quest 3S', leftSub: 'Fresnel · over Link', right: 'RTX 5070', level: 1 },
      { left: 'Meta Quest 3', leftSub: '2064×2208/eye · Link', right: 'RTX 5070', level: 1 },
      { left: 'Pimax Crystal Light', leftSub: '2880×2880/eye · DisplayPort', right: 'RTX 5080', level: 2 },
      { left: 'Bigscreen Beyond 2', leftSub: '2560×2560 micro-OLED', right: 'RTX 5080', level: 2 },
      { left: 'Pimax Crystal Super', leftSub: '3840×3840/eye · ~50 PPD', right: 'RTX 5090', level: 3 },
    ],
    footnote: 'DLSS 4 + foveated rendering in MSFS 2024 help, but do not erase the VR tax. RTX 5090 ≈ 32GB GDDR7 — the card that clears high-res VR + dense scenery at once.' },
  // 7 — FOV
  { file: 'best-sim-racing-monitors-triple-vs-ultrawide-2026-1.svg', bay: 'racing', type: 'fov',
    title: 'Triple vs Ultrawide FOV', kicker: 'how much of the corner you see',
    callout: 'The ultrawide shows a WIDER single image; the triple shows you the SIDE of the track — mirrors, apex, the car alongside — that an ultrawide crops off. Triples need in-sim triple-projection / bezel correction so the angled side views render at the correct perspective.' },
  // 8 — pixel bar chart
  { file: 'best-sim-racing-monitors-triple-vs-ultrawide-2026-2.svg', bay: 'racing', type: 'barChart',
    title: 'Resolution vs GPU Load', kicker: 'the pixels each display pushes',
    bars: [
      { label: 'Single 1440p', sub: '2560×1440', value: 3.7, valueLabel: '3.7M px', gpu: 'baseline', dim: true },
      { label: '49" ultrawide DQHD', sub: '5120×1440', value: 7.4, valueLabel: '7.4M px', gpu: 'RTX 5070' },
      { label: 'Triple 1440p', sub: '3× 2560×1440', value: 11.1, valueLabel: '11.1M px', gpu: 'RTX 5080' },
      { label: '57" Neo G9 Dual-4K', sub: '7680×2160', value: 16.6, valueLabel: '16.6M px', gpu: 'RTX 5080/5090' },
      { label: 'Triple 4K', sub: '3× 3840×2160', value: 24.9, valueLabel: '24.9M px', gpu: '5090 only' },
    ],
    note: 'Triples also pay a multi-view rendering tax (3 camera passes) beyond raw pixel count. The display decides the GPU — the RTX 5080 is the community-cited triple-1440p / high-res sweet spot.' },
  // 9 — GPU by resolution
  { file: 'best-gpu-for-sim-racing-flight-2026-1.svg', bay: 'flight', type: 'mapRows',
    title: 'GPU Tier by Resolution', kicker: 'flat panels · MSFS 2024 worst-case',
    banner: 'MSFS 2024 is the worst-case workload — size the GPU to the hardest sim you actually run.',
    rows: [
      { left: '1440p single monitor', leftSub: '1440p Ultra · the value floor', right: 'RTX 5070', rightSub: '12GB', level: 1 },
      { left: 'Ultrawide 3440 / 5120×1440', leftSub: '34–49" extra pixels', right: 'RTX 5080', rightSub: '16GB', level: 2 },
      { left: 'Triple 1440p (~11M px)', leftSub: '~180° FOV', right: 'RTX 5080', rightSub: 'sweet spot', level: 2 },
      { left: '4K single + heavy scenery', leftSub: 'photogrammetry cities', right: 'RTX 5090', rightSub: '32GB', level: 3 },
    ],
    footnote: 'Racing sims (iRacing, ACC) are lighter — a 5080 covers 4K there. VRAM matters most at 4K + max textures + VR: 16GB is the 5080 ceiling, 32GB the 5090.' },
  // 10 — GPU by VR
  { file: 'best-gpu-for-sim-racing-flight-2026-2.svg', bay: 'flight', type: 'mapRows',
    title: 'GPU Tier by VR Headset', kicker: 'PCVR · ~half your flat-panel fps',
    banner: 'VR renders two high-res images per frame → plan on roughly HALF the fps of a flat monitor.',
    rows: [
      { left: 'Meta Quest 3S', leftSub: '1832×1920/eye · Fresnel', right: 'RTX 5070', rightSub: 'try-VR entry', level: 1 },
      { left: 'Meta Quest 3', leftSub: '2064×2208/eye · pancake', right: 'RTX 5070 Ti / 5080', level: 2 },
      { left: 'Bigscreen Beyond 2', leftSub: '2560×2560 · 107g', right: 'RTX 5080', rightSub: 'comfort pick', level: 2 },
      { left: 'Pimax Crystal Super', leftSub: '3840×3840/eye · ~50 PPD', right: 'RTX 5090', rightSub: 'required', level: 3 },
    ],
    footnote: 'The headset is only half the bill — budget the GPU with it. A 5090 stays smooth where the clarity benchmark would stutter a lesser card in MSFS 2024 / a full iRacing grid.' },
  // 11 — 5080 vs 5090
  { file: 'best-gpu-for-sim-racing-flight-2026-3.svg', bay: 'flight', type: 'decision2',
    title: 'RTX 5080 vs 5090 for Sim', kicker: 'sweet spot vs zero-compromise',
    topBand: 'MSFS 2024 is CPU AND GPU brutal — it streams real-world scenery, photogrammetry cities, dense autogen and weather. A fast CPU (X3D) feeds frames; the GPU renders them.',
    colA: { title: 'RTX 5080 — the sweet spot', specs: ['16GB GDDR7 · 10,752 CUDA cores', '256-bit bus · ~$999 MSRP (street ~$1,249+)', 'Holds 1440p, ultrawide and triple-1440p', 'Clears 4K with DLSS frame-generation'],
      pick: '1440p · ultrawide · triples · 4K-with-frame-gen · Quest 3 / Beyond 2 VR · you value your money' },
    colB: { title: 'RTX 5090 — zero compromise', specs: ['32GB GDDR7 · 21,760 CUDA cores', '512-bit bus · ~$1,999 MSRP (street ~$2,699+)', 'The only card that clears native 4K Ultra', 'Handles high-res VR (Crystal Super) without compromise'],
      pick: 'native 4K Ultra · Pimax Crystal Super · triples + VR · headroom & stock permitting' },
    verdict: 'Clears 60fps 4K Ultra in MSFS 2024 = 5090 (native) or 5080 (with DLSS frame-gen).',
    footnote: 'Frame generation (DLSS 4) is the lever that lets a 5080 punch into 4K — it adds a little latency; fine for flight, weigh it for competitive racing.' },
  // 12 — DOF
  { file: 'best-sim-racing-motion-platforms-2026-1.svg', bay: 'racing', type: 'tierCols',
    title: '2DOF vs 3DOF vs 6DOF', kicker: 'which axis makes the rear step out',
    cols: [
      { tier: '2DOF', name: 'Pitch + Roll', rows: ['Pitch = braking dive & squat', 'Roll = cornering lean', 'Convincing for clean grip racing', 'Cannot rotate — no rear-step cue', 'NLR Motion V3 · ~$2,999'] },
      { tier: '3DOF ★ SWEET SPOT', name: '+ Yaw (traction loss)', rows: ['Platform rotates on a front pivot', 'The rig turns as the back end lets go', 'The single most-craved racing cue', 'Regret-proof for sim racing', 'DOF Reality H3 · ~$2,999 base'], highlight: true },
      { tier: '6DOF', name: '+ Heave · Surge · Sway', rows: ['Full commercial-simulator envelope', 'Vertical + fore/aft + lateral slide', 'Aspirational, not a home budget', 'Professional platforms', '$10,000+'] },
    ],
    banner: '2DOF (NLR V3) and 3DOF (DOF Reality H3) sit at roughly the SAME base price (~$2,999). When the extra axis is free — buy the axis.' },
  // 13 — motion vs tactile
  { file: 'best-sim-racing-motion-platforms-2026-2.svg', bay: 'racing', type: 'compareTable',
    title: 'Motion vs Tactile', kicker: 'what each actually gives you',
    colA: { title: 'Tactile (bass shakers)', sub: 'cheap · information · do first' },
    colB: { title: 'Motion (moving chassis)', sub: 'expensive · immersion · luxury' },
    rows: [
      { dim: 'Cost', a: '~$200–400 · installs in an afternoon', b: '~$2,999+ (6DOF $10k+) · hours to install + a rigid rig', win: 'a' },
      { dim: 'What it gives', a: 'INFORMATION — wheelspin, ABS, lockup, kerbs, rumble, shift kick', b: 'IMMERSION — the chassis tilts/rotates to sell g-force' },
      { dim: 'Lap time', a: 'Yes, indirectly — slip/lockup cues improve car control', b: 'No — independent testing shows zero measurable gain', win: 'a' },
      { dim: 'Best for', a: 'EVERYONE, and it comes first', b: "Those who've maxed tactile and want the chassis to move" },
    ],
    note: "The order that matters: rigid rig → tactile (must-do) → motion (luxury). Half the people who 'need motion' actually have an under-tuned tactile setup." },
  // 14 — immersion stack
  { file: 'best-sim-racing-motion-platforms-2026-3.svg', bay: 'racing', type: 'stack',
    title: 'The Immersion Stack', kicker: 'buy bottom-to-top for value',
    layers: [
      { title: 'Rigid seat / cockpit', detail: 'The stiff base every cue pushes against. A flexy rig turns cues to mush and makes motion unsafe.', cost: '$200–$1,000+', rate: 'PREREQ' },
      { title: 'Tactile (bass shakers)', detail: 'Wheelspin, lockup, kerb, engine rumble — the cues that actually help you drive.', cost: '~$200–400', rate: 'HIGHEST' },
      { title: 'Motion (2DOF / 3DOF)', detail: "The big cheque and the luxury layer. Buy the axis that matters — 3DOF traction-loss over 2DOF.", cost: '~$2,999+', rate: 'LOW' },
      { title: 'Wind sim', detail: 'Speed-reactive fans via SimHub. Air builds as speed climbs — pick a quiet fan for apartments.', cost: '~$120–250', rate: 'HIGH' },
    ],
    rule: 'Buy bottom-to-top. Skipping tactile to buy motion is buying the roof before the walls. Neither motion nor wind makes you faster — they buy immersion.' },
  // 15 — accessories checklist
  { file: 'sim-rig-accessories-audio-lighting-2026-1.svg', bay: 'racing', type: 'checkGrid',
    title: 'Complete-Your-Build Checklist', kicker: 'the finishing touches everyone forgets',
    tiles: [
      { cat: 'Powered USB hub', product: 'Sabrent 10-Port · ~$36', why: 'Fixes random mid-race USB dropouts when a rig runs 4–8 devices.', badge: 'Buy first' },
      { cat: 'Ambient / bias light', product: 'Govee RGBIC bars · ~$60–80', why: 'Cuts eye strain in a dark room and makes the rig look finished.', badge: 'Buy early' },
      { cat: 'Wireless headset', product: 'SteelSeries Arctis Nova 7 · ~$179', why: 'No cable snag on the shifter, hear cars alongside, midnight-friendly.', badge: 'Comfort' },
      { cat: 'Cable management', product: 'sleeving / mount box · ~$25–60', why: 'Tames the nest of power bricks under the seat.', badge: 'Same afternoon' },
      { cat: 'Comfort / QoL', product: 'lap keyboard, cup + tablet mount · ~$15–40', why: 'Menu nav without balancing a keyboard; livable long stints.', badge: 'Nice to have' },
      { cat: 'The one big touch', product: 'ButtKicker Gamer PRO · ~$350', why: 'Feel wheelspin, lockups, kerbs and shift kicks through the seat.', badge: 'Buy last' },
    ],
    note: 'The four cheap finishing touches (hub + lighting + headset + cable mgmt) land under ~$300 — less than one decent set of pedals.' },
  // 16 — powered vs bus hub
  { file: 'sim-rig-accessories-audio-lighting-2026-2.svg', bay: 'racing', type: 'busVsPowered',
    title: 'Powered vs Bus-Powered USB Hub', kicker: 'the cheapest cure in sim racing',
    devices: 'direct-drive base · pedals · wheel · shifter · handbrake · button box · tactile interface  (5–8 USB devices)',
    bad: { title: 'Bus-powered hub — no wall adapter', detail: 'It only re-splits the trickle of current the PC’s single USB port provides, shared across every downstream device.', status: 'Random, un-reproducible mid-race disconnects (wheel or pedals drop out) that get wrongly blamed on drivers.' },
    good: { title: 'Powered hub — its own wall adapter', detail: 'Sabrent 10-Port: 60W, 12V/5A adapter delivers a full, stable ~5V feed to every port at once.', status: 'High-draw always-on devices stay connected; per-port power switches; one cable back to the PC.' },
    rule: '4+ USB peripherals on a rig = you need a POWERED hub, not a bus-powered one. Cost of the fix: ~$36 — the cheapest cure for the most infuriating problem in sim racing.' },
];

if (!fs.existsSync(OUT)) fs.mkdirSync(OUT, { recursive: true });
let n = 0;
for (const d of DIAGRAMS) {
  const a = BAY[d.bay];
  const inner = R[d.type](d, a);
  fs.writeFileSync(path.join(OUT, d.file), svg(a, d.title, d.kicker, d.bay, inner));
  n++;
}
console.log(`Generated ${n} infographics into ${path.relative(process.cwd(), OUT)}`);
