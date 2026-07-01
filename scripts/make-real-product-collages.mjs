import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const root = process.cwd();
const publicDir = path.join(root, 'public');
const productsDir = path.join(root, 'src/data/products');
const articlesDir = path.join(root, 'src/content/articles');

const bayMeta = {
  racing: { name: 'Racing', accent: '#f97316', soft: '#fff4e8', line: '#fed7aa' },
  flight: { name: 'Flight', accent: '#0284c7', soft: '#eff9ff', line: '#bae6fd' },
  space: { name: 'Space', accent: '#7c3aed', soft: '#f5f3ff', line: '#ddd6fe' },
  marine: { name: 'Marine', accent: '#0f766e', soft: '#ecfdf5', line: '#99f6e4' },
  golf: { name: 'Golf', accent: '#b45309', soft: '#fff7ed', line: '#fde68a' },
};

const articleThemes = [
  { test: /direct-drive|wheelbase|r5|moza|fanatec|simagic|console/i, types: ['base'] },
  { test: /pedal|brake/i, types: ['pedals'] },
  { test: /monitor|ultrawide|display|vr|triple/i, types: ['monitor', 'vr'] },
  { test: /cockpit|rigidity|desk|mount|stand/i, types: ['cockpit', 'mount'] },
  { test: /bass|motion|shaker/i, types: ['haptics', 'motion'] },
  { test: /handbrake|shifter/i, types: ['handbrake', 'shifter'] },
  { test: /yoke|home-cockpit|honeycomb/i, types: ['yoke', 'throttle', 'panel'] },
  { test: /rudder/i, types: ['rudder'] },
  { test: /head-tracking|trackir|tobii|vr/i, types: ['head-tracking', 'vr'] },
  { test: /hotas|hosas|stick|star-citizen|elite|dcs/i, types: ['stick', 'throttle', 'mount'] },
  { test: /launch-monitor|skytrak|garmin|bushnell|foresight|radar|photometric/i, types: ['launch-monitor'] },
  { test: /screen|enclosure|projector|mat|room|ceiling/i, types: ['enclosure', 'screen', 'projector', 'mat'] },
  { test: /helm|marine|bridge|throttle|button-box|mapping/i, types: ['helm', 'throttle', 'button-box', 'diy-board'] },
];

const readJson = (file) => JSON.parse(fs.readFileSync(file, 'utf8'));
const escapeXml = (value = '') => String(value)
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;');

const productFiles = fs.readdirSync(productsDir)
  .filter((file) => file.endsWith('.json'))
  .map((file) => path.join(productsDir, file));

const products = productFiles.flatMap((file) => readJson(file))
  .filter((p) => p?.bay && p?.image)
  .filter((p) => fs.existsSync(path.join(publicDir, p.image.replace(/^\//, ''))));

const byBay = Object.groupBy(products, (p) => p.bay);

const scoreProduct = (p) => (Number(p.rating?.overall || 0) * 100) + Number(p.price || 0) / 1000;
const topForBay = (bay, count = 8) => [...(byBay[bay] || [])]
  .sort((a, b) => scoreProduct(b) - scoreProduct(a))
  .slice(0, count);

function wrapText(text, maxChars = 42, maxLines = 3) {
  const words = String(text || '').replace(/\s+/g, ' ').trim().split(' ');
  const lines = [];
  let line = '';
  for (const word of words) {
    const next = line ? `${line} ${word}` : word;
    if (next.length > maxChars && line) {
      lines.push(line);
      line = word;
    } else {
      line = next;
    }
    if (lines.length === maxLines - 1) break;
  }
  if (line && lines.length < maxLines) lines.push(line);
  return lines;
}

async function productTile(product, width, height) {
  const price = typeof product.price === 'number' ? `$${product.price.toLocaleString('en-US')}` : 'price varies';
  const label = escapeXml(`${product.brand} ${product.model}`);
  const type = escapeXml(String(product.type || '').replace(/-/g, ' ').toUpperCase());
  const specLine = escapeXml(Object.entries(product.specs || {}).slice(0, 2).map(([k, v]) => `${k}: ${v}`).join(' / '));
  const productImage = Array.isArray(product.images) && product.images.length ? product.images[0] : product.image;
  const localImagePath = productImage && String(productImage).startsWith('/')
    ? path.join(publicDir, String(productImage).replace(/^\//, ''))
    : null;
  const hasLicensedImage = localImagePath && fs.existsSync(localImagePath);
  const image = hasLicensedImage
    ? await sharp(localImagePath)
      .resize(width - 34, height - 86, { fit: 'contain', background: '#ffffff' })
      .flatten({ background: '#ffffff' })
      .toBuffer()
    : null;
  const bgSvg = Buffer.from(`
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="${width}" height="${height}" rx="24" fill="#fff"/>
      <rect x="0.5" y="0.5" width="${width - 1}" height="${height - 1}" rx="24" fill="none" stroke="#d7dee8"/>
      <rect x="18" y="${height - 65}" width="${width - 36}" height="1" fill="#e5eaf0"/>
    </svg>
  `);
  const labelSvg = Buffer.from(`
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <text x="18" y="${height - 42}" font-family="Inter, Arial, sans-serif" font-size="20" font-weight="800" fill="#17202b">${label}</text>
      <text x="18" y="${height - 18}" font-family="Inter, Arial, sans-serif" font-size="13" font-weight="700" fill="#64748b">${type} / ${price}</text>
    </svg>
  `);
  const specSvg = Buffer.from(`
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect x="18" y="18" width="${width - 36}" height="${height - 100}" rx="18" fill="#f8fafc" stroke="#e2e8f0"/>
      <text x="34" y="58" font-family="JetBrains Mono, Menlo, monospace" font-size="14" font-weight="800" fill="#f97316">PHOTO SLOT READY</text>
      <text x="34" y="105" font-family="Saira, Arial Black, Arial, sans-serif" font-size="34" font-weight="900" fill="#17202b">${escapeXml(product.brand)}</text>
      ${wrapText(product.model, 24, 2).map((line, i) => `<text x="34" y="${142 + i * 34}" font-family="Inter, Arial, sans-serif" font-size="28" font-weight="800" fill="#17202b">${escapeXml(line)}</text>`).join('')}
      <text x="34" y="${height - 96}" font-family="Inter, Arial, sans-serif" font-size="13" font-weight="700" fill="#64748b">${specLine}</text>
    </svg>
  `);

  return sharp({
    create: {
      width,
      height,
      channels: 4,
      background: { r: 255, g: 255, b: 255, alpha: 0 },
    },
  })
    .composite([
      { input: bgSvg, left: 0, top: 0 },
      ...(image ? [{ input: image, left: 17, top: 18 }] : [{ input: specSvg, left: 0, top: 0 }]),
      { input: labelSvg, left: 0, top: 0 },
    ])
    .png()
    .toBuffer();
}

async function makeHero({ out, bay = 'racing', title, kicker = 'REAL PRODUCT BENCH', products: picks }) {
  const meta = bayMeta[bay] || bayMeta.racing;
  const width = 1600;
  const height = 900;
  const bgSvg = Buffer.from(`
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
          <path d="M48 0H0v48" fill="none" stroke="#dbe3ec" stroke-width="1"/>
        </pattern>
        <radialGradient id="glow" cx="16%" cy="10%" r="88%">
          <stop offset="0%" stop-color="${meta.soft}"/>
          <stop offset="58%" stop-color="#f8fafc"/>
          <stop offset="100%" stop-color="#e8eef5"/>
        </radialGradient>
      </defs>
      <rect width="${width}" height="${height}" fill="url(#glow)"/>
      <rect width="${width}" height="${height}" fill="url(#grid)" opacity=".52"/>
      <rect x="64" y="58" width="1472" height="784" rx="38" fill="#ffffff" opacity=".82" stroke="${meta.line}" stroke-width="2"/>
      <rect x="96" y="92" width="116" height="8" rx="4" fill="${meta.accent}"/>
      <text x="96" y="142" font-family="JetBrains Mono, Menlo, monospace" font-size="24" font-weight="800" fill="${meta.accent}">${escapeXml(kicker)}</text>
      <text x="96" y="790" font-family="JetBrains Mono, Menlo, monospace" font-size="22" font-weight="800" fill="#475569">IGNITIONSIM / ${escapeXml(meta.name.toUpperCase())} / BUY FAST, BUILD SMART</text>
      <text x="1240" y="790" font-family="JetBrains Mono, Menlo, monospace" font-size="18" font-weight="800" fill="#64748b">PHOTO-READY SPEC BENCH</text>
    </svg>
  `);

  const canvas = sharp(bgSvg);
  const tileW = 330;
  const tileH = 255;
  const positions = [
    [86, 186], [438, 160], [790, 186], [1142, 160],
    [180, 472], [532, 500], [884, 472], [1236, 500],
  ];
  const tiles = await Promise.all(picks.slice(0, 8).map((p) => productTile(p, tileW, tileH)));
  const titleLines = wrapText(title, 46, 3);
  const titleSvg = Buffer.from(`
    <svg width="930" height="220" xmlns="http://www.w3.org/2000/svg">
      ${titleLines.map((line, i) => `<text x="0" y="${62 + i * 64}" font-family="Saira, Arial Black, Arial, sans-serif" font-size="58" font-weight="900" fill="#111827">${escapeXml(line)}</text>`).join('')}
    </svg>
  `);

  const composites = [
    { input: bgSvg, left: 0, top: 0 },
    { input: titleSvg, left: 96, top: 612 },
    ...tiles.map((input, i) => ({
      input,
      left: positions[i][0],
      top: positions[i][1],
    })),
  ];

  const output = path.join(publicDir, out.replace(/^\//, ''));
  fs.mkdirSync(path.dirname(output), { recursive: true });
  const image = sharp({
    create: { width, height, channels: 3, background: '#f8fafc' },
  }).composite(composites);
  if (output.endsWith('.webp')) {
    await image.webp({ quality: 86 }).toFile(output);
  } else {
    await image.jpeg({ quality: 88, mozjpeg: true }).toFile(output);
  }
}

function articleRecords() {
  const records = [];
  for (const bay of Object.keys(bayMeta)) {
    const dir = path.join(articlesDir, bay);
    if (!fs.existsSync(dir)) continue;
    for (const file of fs.readdirSync(dir).filter((f) => f.endsWith('.md'))) {
      const raw = fs.readFileSync(path.join(dir, file), 'utf8');
      const title = raw.match(/^title:\s*["']?(.+?)["']?\s*$/m)?.[1] || file.replace(/\.md$/, '').replace(/-/g, ' ');
      const heroImage = raw.match(/^heroImage:\s*["']?(.+?)["']?\s*$/m)?.[1];
      if (heroImage) records.push({ bay, title, slug: file.replace(/\.md$/, ''), heroImage });
    }
  }
  return records;
}

function productsForArticle(bay, slug, title) {
  const all = byBay[bay] || [];
  const theme = articleThemes.find((t) => t.test.test(`${slug} ${title}`));
  const preferred = theme
    ? all.filter((p) => theme.types.includes(String(p.type || '').toLowerCase()))
    : [];
  const picks = [...preferred, ...topForBay(bay, 12)]
    .filter((p, i, arr) => arr.findIndex((x) => x.id === p.id) === i)
    .slice(0, 8);
  return picks.length >= 4 ? picks : topForBay(bay, 8);
}

async function main() {
  await makeHero({
    out: '/images/brand/ignitionsim-garage-lab-hero.webp',
    bay: 'racing',
    title: 'Buy the parts. Build the rig. Start playing.',
    kicker: 'IGNITIONSIM SPEC BENCH',
    products: [
      ...topForBay('racing', 3),
      ...topForBay('flight', 2),
      ...topForBay('space', 1),
      ...topForBay('golf', 2),
    ],
  });
  await makeHero({
    out: '/images/hub/product-bench.jpg',
    bay: 'racing',
    title: 'Components, compatibility notes, and fewer dead-end carts.',
    kicker: 'PHOTO-READY PRODUCT BENCH',
    products: [
      ...topForBay('racing', 2),
      ...topForBay('flight', 2),
      ...topForBay('space', 2),
      ...topForBay('golf', 2),
    ],
  });

  for (const bay of Object.keys(bayMeta)) {
    const top = topForBay(bay, 10);
    await makeHero({ out: `/images/${bay}/hero.jpg`, bay, title: `${bayMeta[bay].name} sim hardware, laid out before you buy.`, products: top });
    for (let i = 1; i <= 3; i += 1) {
      await makeHero({
        out: `/images/${bay}/slide-${i}.jpg`,
        bay,
        title: i === 1 ? `${bayMeta[bay].name} buyer map` : i === 2 ? 'Parts that fit together' : 'Warnings before checkout',
        kicker: `${bayMeta[bay].name.toUpperCase()} BENCH ${i}`,
        products: top.slice(i - 1).concat(top).slice(0, 8),
      });
    }
  }

  for (const article of articleRecords()) {
    await makeHero({
      out: article.heroImage,
      bay: article.bay,
      title: article.title,
      kicker: 'GUIDE BENCH / PHOTO-READY SPECS',
      products: productsForArticle(article.bay, article.slug, article.title),
    });
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
