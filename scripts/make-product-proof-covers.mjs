import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const root = process.cwd();
const publicDir = path.join(root, 'public');
const articleDir = path.join(root, 'src/content/articles');
const outDir = path.join(publicDir, 'images/generated/article-covers');
const manifestFile = path.join(root, 'src/data/generated-article-covers.json');
const claudeRunDirs = [
  path.join(root, 'docs/claude-run/article-checklists'),
  path.join(root, 'docs/claude-run-2/article-checklists'),
];

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

function imageRefs(source) {
  return [
    ...source.matchAll(/!\[[^\]]*]\(([^)]+)\)/g),
    ...source.matchAll(/<img\s+[^>]*src=["']([^"']+)["']/g),
  ].map((match) => match[1]).filter(Boolean);
}

async function existsPublic(rel) {
  if (!rel || !rel.startsWith('/images/')) return false;
  try {
    await fs.stat(path.join(publicDir, rel.replace(/^\//, '')));
    return true;
  } catch {
    return false;
  }
}

async function stagedSlugs() {
  const out = new Set();
  for (const dir of claudeRunDirs) {
    try {
      const files = await fs.readdir(dir);
      for (const file of files) {
        if (!file.endsWith('.json')) continue;
        const raw = await fs.readFile(path.join(dir, file), 'utf8');
        const data = JSON.parse(raw);
        if (data.slug) out.add(data.slug);
      }
    } catch {
      // Optional staging directories are allowed to be absent.
    }
  }
  return out;
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

async function productCutout(abs, rel = '') {
  const base = sharp(abs, { animated: false, limitInputPixels: 80_000_000 }).rotate();
  const keepLightBackground = /skytrak-plus|skytrak-og|full-swing-kit|honeycomb-alpha-yoke|logitech-g-pro-flight-yoke/i.test(rel);
  try {
    const trimmed = await base
      .trim({ background: '#ffffff', threshold: 16 })
      .resize(760, 540, { fit: 'inside', withoutEnlargement: true })
      .png()
      .toBuffer();
    if (keepLightBackground) return trimmed;

    const img = sharp(trimmed).ensureAlpha();
    const { data, info } = await img.raw().toBuffer({ resolveWithObject: true });
    for (let i = 0; i < data.length; i += 4) {
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      const max = Math.max(r, g, b);
      const min = Math.min(r, g, b);
      const isNearlyWhite = min > 244 && (max - min) < 12;
      const isSoftWhite = min > 235 && (max - min) < 16;
      if (isNearlyWhite || isSoftWhite) data[i + 3] = 0;
    }
    return sharp(data, { raw: info }).png().toBuffer();
  } catch {
    return base
      .resize(760, 540, { fit: 'inside', withoutEnlargement: true })
      .png()
      .toBuffer();
  }
}

function overlaySvg({ article, art, accent, crew }) {
  const label = escapeXml(
    art?.label && art.label !== 'Product proof'
      ? art.label
      : 'Main gear'
  );
  const titleLines = wrapText(label, 18, 2);
  const title = titleLines.map((line, index) =>
    `<text x="78" y="${190 + index * 74}" class="title">${escapeXml(line)}</text>`
  ).join('');
  const type = escapeXml((article.type || 'buyer guide').replace(/-/g, ' '));
  return Buffer.from(`
    <svg width="1600" height="900" viewBox="0 0 1600 900" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="scrim" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stop-color="#101820" stop-opacity="0.90"/>
          <stop offset="0.44" stop-color="#101820" stop-opacity="0.54"/>
          <stop offset="1" stop-color="#101820" stop-opacity="0.14"/>
        </linearGradient>
        <radialGradient id="glow" cx="78%" cy="18%" r="64%">
          <stop offset="0" stop-color="${accent}" stop-opacity="0.52"/>
          <stop offset="1" stop-color="${accent}" stop-opacity="0"/>
        </radialGradient>
        <radialGradient id="bench" cx="66%" cy="64%" r="46%">
          <stop offset="0" stop-color="#ffffff" stop-opacity="0.42"/>
          <stop offset=".52" stop-color="${accent}" stop-opacity="0.18"/>
          <stop offset="1" stop-color="#101820" stop-opacity="0"/>
        </radialGradient>
        <style>
          .mono { font-family: "JetBrains Mono", "Courier New", monospace; font-weight: 800; letter-spacing: 3px; text-transform: uppercase; }
          .title { font-family: "Saira", "Arial Black", Arial, sans-serif; font-weight: 900; font-size: 68px; line-height: 1; fill: #ffffff; text-transform: uppercase; filter: drop-shadow(0 4px 18px rgba(0,0,0,.45)); }
          .small { font-family: Inter, Arial, sans-serif; font-weight: 700; fill: rgba(255,255,255,0.82); }
          .caption { font-family: Inter, Arial, sans-serif; font-weight: 850; fill: #ffffff; }
        </style>
      </defs>
      <rect width="1600" height="900" fill="url(#scrim)"/>
      <rect width="1600" height="900" fill="url(#glow)"/>
      <rect width="1600" height="900" fill="url(#bench)"/>
      <g opacity="0.22">
        ${Array.from({ length: 36 }, (_, i) => `<line x1="${i * 48}" y1="0" x2="${i * 48}" y2="900" stroke="#fff" stroke-width="1"/>`).join('')}
        ${Array.from({ length: 21 }, (_, i) => `<line x1="0" y1="${i * 48}" x2="1600" y2="${i * 48}" stroke="#fff" stroke-width="1"/>`).join('')}
      </g>
      <ellipse cx="1110" cy="724" rx="400" ry="72" fill="#000000" opacity=".30"/>
      <rect x="74" y="72" width="252" height="46" rx="10" fill="${accent}" stroke="#101820" stroke-width="3"/>
      <text x="94" y="103" class="mono" font-size="17" fill="#101820">${type}</text>
      ${title}
      <rect x="78" y="612" width="575" height="96" rx="18" fill="rgba(16,24,32,.58)" stroke="rgba(255,255,255,.18)"/>
      <text x="322" y="650" class="caption" font-size="24">${escapeXml(crew.name)}:</text>
      <text x="322" y="684" class="small" font-size="21" opacity="0.86">${escapeXml(crew.note)}</text>
      <rect x="1050" y="798" width="484" height="42" rx="10" fill="rgba(255,255,255,0.86)" stroke="rgba(255,255,255,0.42)"/>
      <text x="1068" y="825" class="mono" font-size="13" fill="#101820">AI scene + verified product photo</text>
    </svg>
  `);
}

async function main() {
  const artBySlug = await parseExistingArticleArt();
  const files = await markdownFiles(articleDir);
  const staged = await stagedSlugs();
  const manifest = {};
  await fs.mkdir(outDir, { recursive: true });

  for (const file of files) {
    const bay = path.relative(articleDir, file).split(path.sep)[0];
    const slug = path.basename(file, '.md');
    const source = await fs.readFile(file, 'utf8');
    const data = frontmatter(source);
    if ((data.goldStatus !== 'certified' && !staged.has(slug)) || data.draft === 'true' || data.goldStatus === 'archived') continue;

    const art = artBySlug.get(slug);
    const inlineImages = imageRefs(source).filter((ref) => ref.startsWith('/images/'));
    const inlineGearImages = inlineImages.filter((ref) => ref.startsWith('/images/gear/'));
    const artImage = art?.image;
    const heroImage = data.heroImage;
    const candidates = [
      ...inlineGearImages,
      artImage?.startsWith('/images/gear/') ? artImage : null,
      heroImage?.startsWith('/images/gear/') ? heroImage : null,
      artImage,
      heroImage,
      ...inlineImages,
      worlds[bay],
    ].filter(Boolean);
    let productRel = candidates[0];
    for (const candidate of candidates) {
      if (await existsPublic(candidate)) {
        productRel = candidate;
        break;
      }
    }
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
      const product = await productCutout(productAbs, productRel);
      const productMeta = await sharp(product).metadata();
      const productLeft = 848 + Math.round((690 - (productMeta.width || 700)) / 2);
      const productTop = 226 + Math.round((480 - (productMeta.height || 500)) / 2);
      const curator = await roundedImage(crewAbs, 220, 270, 30);
      const article = {
        title: data.title || slug.replace(/-/g, ' '),
        type: data.type || 'buyer-guide',
      };

      await sharp(background)
        .composite([
          { input: overlaySvg({ article, art, accent, crew }), left: 0, top: 0 },
          { input: product, left: Math.max(790, productLeft), top: Math.max(154, productTop) },
          { input: curator, left: 78, top: 610 },
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
