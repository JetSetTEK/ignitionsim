import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const root = process.cwd();
const publicDir = path.join(root, 'public');
const generatedScene = process.argv[2];

if (!generatedScene) {
  console.error('Usage: node scripts/make-r50-room-build-bible-assets.mjs /path/to/generated-scene.png');
  process.exit(1);
}

const esc = (value = '') => String(value).replace(/[&<>"']/g, (ch) => ({
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&apos;',
}[ch]));

const wrap = (text, max = 34) => {
  const words = String(text).split(/\s+/);
  const lines = [];
  let line = '';
  for (const word of words) {
    const next = line ? `${line} ${word}` : word;
    if (next.length > max && line) {
      lines.push(line);
      line = word;
    } else {
      line = next;
    }
  }
  if (line) lines.push(line);
  return lines;
};

const textBlock = (text, x, y, size, color, max = 34, weight = 800, gap = 8) =>
  wrap(text, max).map((line, i) =>
    `<text x="${x}" y="${y + i * (size + gap)}" font-family="Inter, Arial, sans-serif" font-size="${size}" font-weight="${weight}" fill="${color}">${esc(line)}</text>`
  ).join('');

async function ensureDirs() {
  await fs.mkdir(path.join(publicDir, 'images/dream'), { recursive: true });
  await fs.mkdir(path.join(publicDir, 'images/golf'), { recursive: true });
  await fs.mkdir(path.join(publicDir, 'images/article-proofs/golf'), { recursive: true });
  await fs.mkdir(path.join(publicDir, 'images/infographics/golf'), { recursive: true });
}

async function productCutout(rel) {
  const abs = path.join(publicDir, rel.replace(/^\//, ''));
  const raw = await sharp(abs).rotate().trim({ background: '#ffffff', threshold: 18 }).resize(520, 380, { fit: 'inside' }).png().toBuffer();
  const img = sharp(raw).ensureAlpha();
  const { data, info } = await img.raw().toBuffer({ resolveWithObject: true });
  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    const min = Math.min(r, g, b);
    const max = Math.max(r, g, b);
    if (min > 236 && max - min < 18) data[i + 3] = 0;
  }
  return sharp(data, { raw: info }).png().toBuffer();
}

async function writePng(file, svg) {
  const out = path.join(publicDir, 'images/infographics/golf', file);
  await sharp(Buffer.from(svg)).png().toFile(out);
  console.log(`+ /images/infographics/golf/${file}`);
}

function badgeSvg(width = 1600, height = 900) {
  return Buffer.from(`
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="shade" x1="0" x2="1">
          <stop offset="0" stop-color="#062316" stop-opacity=".72"/>
          <stop offset="46%" stop-color="#062316" stop-opacity=".24"/>
          <stop offset="100%" stop-color="#062316" stop-opacity=".02"/>
        </linearGradient>
      </defs>
      <rect width="${width}" height="${height}" fill="url(#shade)"/>
      <rect x="1056" y="54" width="410" height="46" rx="12" fill="#18b96f" stroke="#062316" stroke-width="3"/>
      <text x="1078" y="84" font-family="JetBrains Mono, Courier New, monospace" font-size="14" font-weight="900" letter-spacing="3" fill="#062316">AI SCENE + REAL R50 PROOF</text>
      <rect x="60" y="650" width="610" height="146" rx="24" fill="rgba(6,35,22,.72)" stroke="rgba(255,255,255,.32)" stroke-width="2"/>
      <text x="92" y="698" font-family="Inter, Arial, sans-serif" font-size="25" font-weight="900" fill="#ffffff">Nina's room-first R50 test</text>
      <text x="92" y="738" font-family="Inter, Arial, sans-serif" font-size="20" font-weight="800" fill="#d8fff0">Measure swing clearance, then buy the box.</text>
      <text x="92" y="772" font-family="Inter, Arial, sans-serif" font-size="17" font-weight="700" fill="#b9d7cc">Real Garmin R50 product photo composited into editorial bay.</text>
    </svg>
  `);
}

async function makeSceneAndComposite() {
  const sceneOut = path.join(publicDir, 'images/dream/nina-r50-room-build-bible.webp');
  const base = await sharp(generatedScene)
    .resize(1600, 900, { fit: 'cover' })
    .modulate({ saturation: 1.06, brightness: 1.02 })
    .webp({ quality: 90 })
    .toBuffer();
  await sharp(base).toFile(sceneOut);
  console.log('+ /images/dream/nina-r50-room-build-bible.webp');

  const product = await sharp(await productCutout('/images/gear/golf/garmin-approach-r50.jpg'))
    .resize(410, 220, { fit: 'inside', withoutEnlargement: true })
    .png()
    .toBuffer();
  const compositeOut = path.join(publicDir, 'images/article-proofs/golf/garmin-r50-room-build-bible-composite.webp');
  const coverOut = path.join(publicDir, 'images/golf/garmin-r50-room-build-bible.jpg');
  const productCard = await sharp({
    create: { width: 570, height: 350, channels: 4, background: '#ffffff00' },
  })
    .composite([
      { input: Buffer.from(`<svg width="570" height="350" xmlns="http://www.w3.org/2000/svg"><ellipse cx="286" cy="286" rx="210" ry="42" fill="#062316" opacity=".34"/><rect x="58" y="36" width="454" height="244" rx="32" fill="#ffffff" opacity=".80" stroke="#18b96f" stroke-width="4"/></svg>`), left: 0, top: 0 },
      { input: product, left: 84, top: 88 },
    ])
    .png()
    .toBuffer();

  await sharp(base)
    .composite([
      { input: badgeSvg(), left: 0, top: 0 },
      { input: productCard, left: 955, top: 468 },
    ])
    .webp({ quality: 88 })
    .toFile(compositeOut);
  console.log('+ /images/article-proofs/golf/garmin-r50-room-build-bible-composite.webp');

  const titleOverlay = Buffer.from(`
    <svg width="1600" height="900" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="hero" x1="0" x2="1">
          <stop offset="0" stop-color="#061a12" stop-opacity=".88"/>
          <stop offset="55%" stop-color="#061a12" stop-opacity=".36"/>
          <stop offset="100%" stop-color="#061a12" stop-opacity=".06"/>
        </linearGradient>
      </defs>
      <rect width="1600" height="900" fill="url(#hero)"/>
      <rect x="72" y="72" width="320" height="48" rx="12" fill="#18b96f" stroke="#061a12" stroke-width="3"/>
      <text x="96" y="103" font-family="JetBrains Mono, Courier New, monospace" font-size="16" font-weight="900" letter-spacing="4" fill="#061a12">GARMIN R50 BUILD BIBLE</text>
      <text x="72" y="230" font-family="Saira, Arial Black, Arial, sans-serif" font-size="78" font-weight="950" fill="#ffffff">No-PC Golf</text>
      <text x="72" y="314" font-family="Saira, Arial Black, Arial, sans-serif" font-size="78" font-weight="950" fill="#ffffff">Simulator Room</text>
      <text x="72" y="398" font-family="Saira, Arial Black, Arial, sans-serif" font-size="78" font-weight="950" fill="#ffffff">Build Plan</text>
      <rect x="78" y="456" width="760" height="84" rx="22" fill="#ffffff" opacity=".94"/>
      <text x="112" y="508" font-family="Inter, Arial, sans-serif" font-size="27" font-weight="900" fill="#061a12">Buy the R50 for fewer boxes, not fewer measurements.</text>
      <text x="94" y="704" font-family="Inter, Arial, sans-serif" font-size="24" font-weight="900" fill="#d8fff0">Curator: Nina Brooks · Real product proof + room geometry</text>
    </svg>
  `);
  await sharp(base)
    .composite([
      { input: titleOverlay, left: 0, top: 0 },
      { input: productCard, left: 960, top: 470 },
    ])
    .jpeg({ quality: 90, mozjpeg: true })
    .toFile(coverOut);
  console.log('+ /images/golf/garmin-r50-room-build-bible.jpg');
}

async function makeWorkflowMap() {
  await writePng('garmin-r50-room-build-bible-no-pc-workflow.png', `
    <svg width="1600" height="1000" xmlns="http://www.w3.org/2000/svg">
      <rect width="1600" height="1000" fill="#ecfff5"/>
      <rect x="72" y="70" width="1456" height="860" rx="34" fill="#ffffff" stroke="#18b96f" stroke-width="4"/>
      <text x="112" y="138" font-family="JetBrains Mono, Courier New, monospace" font-size="28" font-weight="900" letter-spacing="5" fill="#18b96f">NO-PC WORKFLOW</text>
      ${textBlock('What the R50 removes from the room', 112, 226, 62, '#062316', 34, 950)}
      ${[
        ['R50', 'Launch monitor + touchscreen + simulator brain'],
        ['HDMI', 'One cable to projector or TV for Home Tee Hero'],
        ['ROOM', 'Mat, screen, enclosure, side safety, lighting'],
        ['OPTIONAL PC', 'Only if GSPro, E6, or Awesome Golf becomes the main path'],
      ].map((item, i) => {
        const x = 130 + i * 360;
        return `
          <rect x="${x}" y="380" width="280" height="330" rx="30" fill="${i === 0 ? '#062316' : '#f8fafc'}" stroke="#18b96f" stroke-width="4"/>
          <circle cx="${x + 56}" cy="442" r="28" fill="#18b96f"/>
          <text x="${x + 46}" y="452" font-family="Inter, Arial, sans-serif" font-size="25" font-weight="950" fill="#062316">${i + 1}</text>
          ${textBlock(item[0], x + 34, 520, 32, i === 0 ? '#ffffff' : '#062316', 13, 950)}
          ${textBlock(item[1], x + 34, 605, 22, i === 0 ? '#d8fff0' : '#475569', 24, 750)}
        `;
      }).join('')}
      <rect x="112" y="800" width="1376" height="76" rx="22" fill="#062316"/>
      <text x="148" y="849" font-family="Inter, Arial, sans-serif" font-size="26" font-weight="900" fill="#ffffff">Nina rule: no-PC means fewer devices. It does not mean no mat, no screen math, no projector throw, or no safety plan.</text>
    </svg>
  `);
}

async function makeRoomFitMap() {
  await writePng('garmin-r50-room-build-bible-room-fit-map.png', `
    <svg width="1600" height="1000" xmlns="http://www.w3.org/2000/svg">
      <rect width="1600" height="1000" fill="#f0fdf4"/>
      <text x="86" y="112" font-family="JetBrains Mono, Courier New, monospace" font-size="28" font-weight="900" letter-spacing="5" fill="#18b96f">ROOM FIT MAP</text>
      ${textBlock('The R50 is easy. The bay still gets veto power.', 86, 196, 60, '#062316', 38, 950)}
      <rect x="130" y="322" width="1340" height="500" rx="28" fill="#ffffff" stroke="#062316" stroke-width="6"/>
      <rect x="190" y="382" width="250" height="380" rx="24" fill="#bbf7d0" stroke="#18b96f" stroke-width="4"/>
      <text x="242" y="580" font-family="Inter, Arial, sans-serif" font-size="34" font-weight="950" fill="#062316">SCREEN</text>
      <rect x="642" y="476" width="256" height="180" rx="22" fill="#e8fff4" stroke="#18b96f" stroke-width="4"/>
      <text x="706" y="560" font-family="Inter, Arial, sans-serif" font-size="34" font-weight="950" fill="#062316">MAT</text>
      <rect x="970" y="506" width="160" height="110" rx="22" fill="#062316"/>
      <text x="999" y="568" font-family="Inter, Arial, sans-serif" font-size="25" font-weight="950" fill="#ffffff">R50</text>
      <line x1="440" y1="572" x2="642" y2="572" stroke="#062316" stroke-width="7" stroke-dasharray="16 16"/>
      <text x="472" y="540" font-family="Inter, Arial, sans-serif" font-size="24" font-weight="900" fill="#062316">tee-to-screen</text>
      <line x1="898" y1="560" x2="970" y2="560" stroke="#18b96f" stroke-width="7" stroke-dasharray="12 12"/>
      <text x="930" y="487" font-family="Inter, Arial, sans-serif" font-size="22" font-weight="900" fill="#062316">side-of-tee</text>
      <rect x="1220" y="382" width="180" height="380" rx="24" fill="#f8fafc" stroke="#94a3b8" stroke-width="4"/>
      <text x="1248" y="550" font-family="Inter, Arial, sans-serif" font-size="25" font-weight="950" fill="#475569">SAFE</text>
      <text x="1242" y="588" font-family="Inter, Arial, sans-serif" font-size="25" font-weight="950" fill="#475569">WALKWAY</text>
      <rect x="86" y="866" width="1428" height="76" rx="22" fill="#062316"/>
      <text x="126" y="914" font-family="Inter, Arial, sans-serif" font-size="22" font-weight="900" fill="#ffffff">Tape the screen, mat, R50 zone, and projector path before the cart opens. The tape measure is cheaper than a return label.</text>
    </svg>
  `);
}

async function makeCartLadder() {
  const items = [
    ['Portable net', '$5K-$6.5K', 'R50 + net + good mat + TV/HDMI'],
    ['Clean garage', '$8K-$12K', 'R50 + enclosure + screen + 1080p/4K projector'],
    ['Dream bay', '$14K-$20K+', 'R50 + premium enclosure + 4K laser + turf + lighting'],
  ];
  await writePng('garmin-r50-room-build-bible-total-cart-ladder.png', `
    <svg width="1600" height="1000" xmlns="http://www.w3.org/2000/svg">
      <rect width="1600" height="1000" fill="#ecfff5"/>
      <text x="86" y="112" font-family="JetBrains Mono, Courier New, monospace" font-size="28" font-weight="900" letter-spacing="5" fill="#18b96f">TOTAL CART LADDER</text>
      ${textBlock('The R50 is not the whole simulator', 86, 196, 64, '#062316', 36, 950)}
      ${items.map((item, i) => {
        const x = 110 + i * 494;
        return `
          <rect x="${x}" y="${330 + i * 34}" width="430" height="360" rx="34" fill="#ffffff" stroke="#18b96f" stroke-width="4"/>
          <text x="${x + 34}" y="${420 + i * 34}" font-family="Inter, Arial, sans-serif" font-size="36" font-weight="950" fill="#062316">${esc(item[0])}</text>
          <text x="${x + 34}" y="${484 + i * 34}" font-family="Inter, Arial, sans-serif" font-size="33" font-weight="950" fill="#18b96f">${esc(item[1])}</text>
          ${textBlock(item[2], x + 34, 558 + i * 34, 24, '#475569', 28, 800)}
        `;
      }).join('')}
      <rect x="86" y="850" width="1428" height="78" rx="22" fill="#062316"/>
      <text x="126" y="900" font-family="Inter, Arial, sans-serif" font-size="25" font-weight="900" fill="#ffffff">Do not spend $4,999 on the brain and then practice on punishment turf under a shadowed projector.</text>
    </svg>
  `);
}

async function makeTaxCard() {
  await writePng('garmin-r50-room-build-bible-sticker-software-tax.png', `
    <svg width="1600" height="1000" xmlns="http://www.w3.org/2000/svg">
      <rect width="1600" height="1000" fill="#fff7ed"/>
      <text x="86" y="112" font-family="JetBrains Mono, Courier New, monospace" font-size="28" font-weight="900" letter-spacing="5" fill="#ea580c">SETUP TAX CHECK</text>
      ${textBlock('The annoying stuff is where bad purchases hide', 86, 196, 61, '#111827', 38, 950)}
      ${[
        ['Club stickers', 'Required for club metrics. Great data, but not invisible.'],
        ['Home Tee Hero', 'Course play needs Garmin Golf membership.'],
        ['Third-party sims', 'GSPro, E6, Awesome Golf need their own software path and often a PC.'],
        ['Righty/lefty groups', 'Side-of-tee floor units may need movement for mixed players.'],
      ].map((item, i) => {
        const x = 98 + (i % 2) * 720;
        const y = 340 + Math.floor(i / 2) * 245;
        return `
          <rect x="${x}" y="${y}" width="650" height="188" rx="26" fill="#ffffff" stroke="${i % 2 ? '#f59e0b' : '#18b96f'}" stroke-width="4"/>
          <rect x="${x}" y="${y}" width="18" height="188" rx="9" fill="${i % 2 ? '#f59e0b' : '#18b96f'}"/>
          ${textBlock(item[0], x + 52, y + 66, 32, '#111827', 22, 950)}
          ${textBlock(item[1], x + 52, y + 126, 23, '#475569', 46, 800)}
        `;
      }).join('')}
      <rect x="86" y="868" width="1428" height="68" rx="22" fill="#111827"/>
      <text x="126" y="912" font-family="Inter, Arial, sans-serif" font-size="25" font-weight="900" fill="#ffffff">Nina rule: if a fee, sticker, cable, or handedness swap will annoy you, price the annoyance before you buy.</text>
    </svg>
  `);
}

await ensureDirs();
await makeSceneAndComposite();
await makeWorkflowMap();
await makeRoomFitMap();
await makeCartLadder();
await makeTaxCard();
