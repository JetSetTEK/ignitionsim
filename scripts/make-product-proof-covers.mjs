import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const root = process.cwd();
const publicDir = path.join(root, 'public');
const articleDir = path.join(root, 'src/content/articles');
const outDir = path.join(publicDir, 'images/generated/article-covers');
const manifestFile = path.join(root, 'src/data/generated-article-covers.json');

const worlds = {
  racing: '/images/worlds/racing-world.webp',
  golf: '/images/worlds/golf-world.webp',
  flight: '/images/worlds/flight-world.webp',
  space: '/images/worlds/space-world.webp',
  marine: '/images/worlds/marine-world.webp',
};

const accents = {
  racing: '#ff5e1a',
  golf: '#eab308',
  flight: '#38bdf8',
  space: '#d946ef',
  marine: '#2dd4bf',
};

const crewByBay = {
  racing: {
    name: 'Duke Alvarez',
    image: '/images/crew/duke-alvarez.webp',
    note: 'Torque first. Flex never gets a hall pass.',
  },
  golf: {
    name: 'Nina Brooks',
    image: '/images/crew/nina-brooks.webp',
    note: 'Measure the room before you fall in love.',
  },
  flight: {
    name: 'Val Chen',
    image: '/images/crew/val-chen.webp',
    note: 'Clean routing beats cockpit clutter.',
  },
  space: {
    name: 'Val Chen',
    image: '/images/crew/val-chen.webp',
    note: 'Bind for stress, not for the screenshot.',
  },
  marine: {
    name: 'Gus Calder',
    image: '/images/crew/gus-calder.webp',
    note: 'Label everything. Save every profile.',
  },
};

function escapeXml(value = '') {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function frontmatter(text) {
  const match = text.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return {};
  const data = {};
  for (const line of match[1].split('\n')) {
    const item = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
    if (!item) continue;
    data[item[1]] = item[2].trim().replace(/^['"]|['"]$/g, '');
  }
  return data;
}

async function markdownFiles(dir) {
  const out = [];
  for (const name of await fs.readdir(dir)) {
    const abs = path.join(dir, name);
    const stat = await fs.stat(abs);
    if (stat.isDirectory()) out.push(...await markdownFiles(abs));
    else if (name.endsWith('.md')) out.push(abs);
  }
  return out;
}

function wrapText(text, maxChars, maxLines) {
  const words = String(text).replace(/\s+/g, ' ').trim().split(' ');
  const lines = [];
  let current = '';
  for (const word of words) {
    const next = current ? `${current} ${word}` : word;
    if (next.length > maxChars && current) {
      lines.push(current);
      current = word;
    } else {
      current = next;
    }
    if (lines.length === maxLines) break;
  }
  if (lines.length < maxLines && current) lines.push(current);
  if (lines.length > maxLines) lines.length = maxLines;
  if (words.join(' ').length > lines.join(' ').length && lines.length) {
    lines[lines.length - 1] = `${lines[lines.length - 1].replace(/[.,:;!?-]+$/, '')}...`;
  }
  return lines;
}

function parseExistingArticleArt() {
  const file = path.join(root, 'src/lib/articleArt.ts');
  return fs.readFile(file, 'utf8').then((text) => {
    const map = new Map();
    const re = /'([^']+)':\s*{\s*image:\s*'([^']+)',\s*alt:\s*'([^']+)',\s*label:\s*'([^']+)'/g;
    for (const match of text.matchAll(re)) {
      map.set(match[1], { image: match[2], alt: match[3], label: match[4] });
    }
    return map;
  });
}

async function roundedImage(abs, width, height, radius = 34) {
  const mask = Buffer.from(`<svg width="${width}" height="${height}"><rect width="${width}" height="${height}" rx="${radius}" ry="${radius}" fill="#fff"/></svg>`);
  return sharp(abs)
    .rotate()
    .resize(width, height, { fit: 'cover', position: 'top' })
    .composite([{ input: mask, blend: 'dest-in' }])
    .webp({ quality: 92 })
    .toBuffer();
}

async function productCutout(abs) {
  const base = sharp(abs, { animated: false, limitInputPixels: 80_000_000 }).rotate();
  try {
    return await base
      .trim({ background: '#ffffff', threshold: 16 })
      .resize(560, 380, { fit: 'inside', withoutEnlargement: true })
      .png()
      .toBuffer();
  } catch {
    return base
      .resize(560, 380, { fit: 'inside', withoutEnlargement: true })
      .png()
      .toBuffer();
  }
}

function overlaySvg({ article, art, accent, crew }) {
  const titleLines = wrapText(article.title, 18, 5);
  const title = titleLines.map((line, index) =>
    `<text x="82" y="${202 + index * 66}" class="title">${escapeXml(line)}</text>`
  ).join('');
  const label = escapeXml(art?.label || 'Product proof');
  const type = escapeXml((article.type || 'buyer guide').replace(/-/g, ' '));
  return Buffer.from(`
    <svg width="1600" height="900" viewBox="0 0 1600 900" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="scrim" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stop-color="#101820" stop-opacity="0.94"/>
          <stop offset="0.52" stop-color="#101820" stop-opacity="0.60"/>
          <stop offset="1" stop-color="#101820" stop-opacity="0.22"/>
        </linearGradient>
        <radialGradient id="glow" cx="78%" cy="18%" r="64%">
          <stop offset="0" stop-color="${accent}" stop-opacity="0.44"/>
          <stop offset="1" stop-color="${accent}" stop-opacity="0"/>
        </radialGradient>
        <style>
          .mono { font-family: "JetBrains Mono", "Courier New", monospace; font-weight: 800; letter-spacing: 3px; text-transform: uppercase; }
          .title { font-family: "Saira", "Arial Black", Arial, sans-serif; font-weight: 800; font-size: 58px; line-height: 1; fill: #ffffff; text-transform: uppercase; }
          .small { font-family: Inter, Arial, sans-serif; font-weight: 700; fill: rgba(255,255,255,0.82); }
          .caption-dark { font-family: Inter, Arial, sans-serif; font-weight: 800; fill: #334155; }
        </style>
      </defs>
      <rect width="1600" height="900" fill="url(#scrim)"/>
      <rect width="1600" height="900" fill="url(#glow)"/>
      <g opacity="0.22">
        ${Array.from({ length: 36 }, (_, i) => `<line x1="${i * 48}" y1="0" x2="${i * 48}" y2="900" stroke="#fff" stroke-width="1"/>`).join('')}
        ${Array.from({ length: 21 }, (_, i) => `<line x1="0" y1="${i * 48}" x2="1600" y2="${i * 48}" stroke="#fff" stroke-width="1"/>`).join('')}
      </g>
      <rect x="74" y="82" width="235" height="43" rx="9" fill="${accent}" stroke="#101820" stroke-width="3"/>
      <text x="94" y="111" class="mono" font-size="18" fill="#101820">${type}</text>
      ${title}
      <text x="82" y="614" class="small" font-size="27">${escapeXml(crew.name)} bench note</text>
      <text x="82" y="654" class="small" font-size="24" opacity="0.78">${escapeXml(crew.note)}</text>
      <rect x="850" y="122" width="668" height="640" rx="34" fill="rgba(255,255,255,0.94)" stroke="rgba(255,255,255,0.76)" stroke-width="4"/>
      <rect x="882" y="154" width="604" height="514" rx="24" fill="#ffffff" stroke="rgba(16,24,32,0.10)" stroke-width="2"/>
      <text x="898" y="708" class="mono" font-size="17" fill="#101820">real product proof</text>
      <text x="898" y="739" class="caption-dark" font-size="22">${label}</text>
      <rect x="1042" y="798" width="474" height="42" rx="10" fill="rgba(255,255,255,0.9)" stroke="rgba(255,255,255,0.42)"/>
      <text x="1060" y="825" class="mono" font-size="13" fill="#101820">AI scene + real product composite</text>
    </svg>
  `);
}

async function main() {
  const artBySlug = await parseExistingArticleArt();
  const files = await markdownFiles(articleDir);
  const manifest = {};
  await fs.mkdir(outDir, { recursive: true });

  for (const file of files) {
    const bay = path.relative(articleDir, file).split(path.sep)[0];
    const slug = path.basename(file, '.md');
    const data = frontmatter(await fs.readFile(file, 'utf8'));
    if (data.goldStatus !== 'certified' || data.draft === 'true') continue;

    const art = artBySlug.get(slug);
    const productRel = art?.image || `/images/gear/${bay}/${slug}.jpg`;
    const productAbs = path.join(publicDir, productRel.replace(/^\//, ''));
    const worldAbs = path.join(publicDir, (worlds[bay] || worlds.racing).replace(/^\//, ''));
    const crew = crewByBay[bay] || crewByBay.racing;
    const crewAbs = path.join(publicDir, crew.image.replace(/^\//, ''));
    const accent = accents[bay] || accents.racing;
    const outRel = `/images/generated/article-covers/${slug}.webp`;
    const outAbs = path.join(publicDir, outRel.replace(/^\//, ''));

    try {
      const background = await sharp(worldAbs)
        .resize(1600, 900, { fit: 'cover' })
        .modulate({ saturation: 1.08, brightness: 0.92 })
        .blur(1.4)
        .toBuffer();
      const product = await productCutout(productAbs);
      const productMeta = await sharp(product).metadata();
      const productLeft = 882 + Math.round((604 - (productMeta.width || 560)) / 2);
      const productTop = 174 + Math.round((454 - (productMeta.height || 420)) / 2);
      const curator = await roundedImage(crewAbs, 186, 238, 28);
      const article = {
        title: data.title || slug.replace(/-/g, ' '),
        type: data.type || 'buyer-guide',
      };

      await sharp(background)
        .composite([
          { input: overlaySvg({ article, art, accent, crew }), left: 0, top: 0 },
          { input: product, left: Math.max(892, productLeft), top: Math.max(184, productTop) },
          { input: curator, left: 82, top: 682 },
        ])
        .webp({ quality: 88 })
        .toFile(outAbs);

      manifest[slug] = {
        image: outRel,
        alt: `${data.title || slug} cover with ${art?.alt || 'real product proof'} and ${crew.name}`,
        label: art?.label || 'Product proof',
        wide: true,
      };
      console.log(`+ ${slug}`);
    } catch (error) {
      console.log(`! ${slug}: ${error.message}`);
    }
  }

  await fs.writeFile(manifestFile, `${JSON.stringify(manifest, null, 2)}\n`);
  console.log(`Generated product-proof covers: ${Object.keys(manifest).length}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
