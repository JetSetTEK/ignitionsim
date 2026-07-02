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

async function localBackgrounds(bay) {
  const dir = path.join(publicDir, 'images/source-backgrounds', bay);
  try {
    const files = await fs.readdir(dir);
    return files
      .filter((file) => /\.(webp|jpg|jpeg|png)$/i.test(file))
      .filter((file) => bay !== 'space' || !file.includes('space-cockpit-dashboard'))
      .sort()
      .map((file) => `/images/source-backgrounds/${bay}/${file}`);
  } catch {
    return [];
  }
}

function rotated(values, offset) {
  if (!values.length) return values;
  const start = offset % values.length;
  return [...values.slice(start), ...values.slice(0, start)];
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

function hashSlug(value = '') {
  let hash = 0;
  for (let i = 0; i < value.length; i += 1) {
    hash = ((hash << 5) - hash + value.charCodeAt(i)) | 0;
  }
  return Math.abs(hash);
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
  const keepLightBackground = false;
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

function overlaySvg({ article, art, accent, crew, productCount }) {
  const label = escapeXml(
    art?.label && art.label !== 'Product proof'
      ? art.label
      : 'Product bench'
  );
  const type = escapeXml((article.type || 'buyer guide').replace(/-/g, ' '));
  const crewNote = wrapText(crew.note, 29, 2).map((line, index) =>
    `<text x="322" y="${694 + index * 28}" class="small" font-size="20" opacity="0.88">${escapeXml(line)}</text>`
  ).join('');
  return Buffer.from(`
    <svg width="1600" height="900" viewBox="0 0 1600 900" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="scrim" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stop-color="#101820" stop-opacity="0.74"/>
          <stop offset="0.42" stop-color="#101820" stop-opacity="0.36"/>
          <stop offset="1" stop-color="#101820" stop-opacity="0.04"/>
        </linearGradient>
        <radialGradient id="glow" cx="70%" cy="22%" r="68%">
          <stop offset="0" stop-color="${accent}" stop-opacity="0.62"/>
          <stop offset="1" stop-color="${accent}" stop-opacity="0"/>
        </radialGradient>
        <radialGradient id="bench" cx="66%" cy="64%" r="46%">
          <stop offset="0" stop-color="#ffffff" stop-opacity="0.56"/>
          <stop offset=".52" stop-color="${accent}" stop-opacity="0.24"/>
          <stop offset="1" stop-color="#101820" stop-opacity="0"/>
        </radialGradient>
        <style>
          .mono { font-family: "JetBrains Mono", "Courier New", monospace; font-weight: 800; letter-spacing: 3px; text-transform: uppercase; }
          .label { font-family: "Saira", "Arial Black", Arial, sans-serif; font-weight: 950; font-size: 44px; line-height: 1; fill: #ffffff; text-transform: uppercase; filter: drop-shadow(0 4px 18px rgba(0,0,0,.38)); }
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
      <ellipse cx="1086" cy="722" rx="472" ry="76" fill="#000000" opacity=".26"/>
      <ellipse cx="1200" cy="690" rx="250" ry="52" fill="${accent}" opacity=".20"/>
      <rect x="76" y="72" width="354" height="48" rx="12" fill="${accent}" stroke="#101820" stroke-width="3"/>
      <text x="96" y="103" class="mono" font-size="16" fill="#101820">${type}</text>
      <rect x="76" y="138" width="448" height="92" rx="20" fill="rgba(16,24,32,.55)" stroke="rgba(255,255,255,.22)"/>
      <text x="104" y="176" class="mono" font-size="14" fill="${accent}">verified product bench</text>
      <text x="104" y="214" class="label">${label}</text>
      <rect x="78" y="622" width="610" height="112" rx="22" fill="rgba(16,24,32,.58)" stroke="rgba(255,255,255,.20)"/>
      <text x="322" y="662" class="caption" font-size="24">${escapeXml(crew.name)}:</text>
      ${crewNote}
    </svg>
  `);
}

async function main() {
  const artBySlug = await parseExistingArticleArt();
  const files = await markdownFiles(articleDir);
  const staged = await stagedSlugs();
  const manifest = {};
  const bayCounts = {};
  await fs.mkdir(outDir, { recursive: true });

  for (const file of files) {
    const bay = path.relative(articleDir, file).split(path.sep)[0];
    const slug = path.basename(file, '.md');
    const bayIndex = bayCounts[bay] || 0;
    bayCounts[bay] = bayIndex + 1;
    const source = await fs.readFile(file, 'utf8');
    const data = frontmatter(source);
    if ((data.goldStatus !== 'certified' && !staged.has(slug)) || data.draft === 'true' || data.goldStatus === 'archived') continue;

    const art = artBySlug.get(slug);
    const inlineImages = imageRefs(source).filter((ref) => ref.startsWith('/images/'));
    const inlineGearImages = inlineImages.filter((ref) => ref.startsWith('/images/gear/'));
    const artImage = art?.image;
    const heroImage = data.heroImage;
    const candidates = [
      artImage?.startsWith('/images/gear/') ? artImage : null,
      heroImage?.startsWith('/images/gear/') ? heroImage : null,
      ...inlineGearImages,
      artImage,
      heroImage,
      ...inlineImages,
      worlds[bay],
    ].filter(Boolean);
    const productRels = [];
    for (const candidate of candidates) {
      if (!productRels.includes(candidate) && await existsPublic(candidate)) productRels.push(candidate);
    }
    const gearRels = productRels.filter((rel) => rel.startsWith('/images/gear/'));
    const displayRels = (gearRels.length ? gearRels : productRels).slice(0, 2);
    const productRel = displayRels[0] || worlds[bay];
    const slideNumber = (hashSlug(slug) % 3) + 1;
    const stockBackgrounds = rotated(
      [...await localBackgrounds(bay), worlds[bay]].filter(Boolean),
      bayIndex
    );
    const backgroundCandidates = [
      ...stockBackgrounds,
      ...(bay === 'space'
        ? []
        : [
            `/images/${bay}/${slug}.jpg`,
            `/images/${bay}/${slug}.webp`,
            `/images/${bay}/slide-${slideNumber}.jpg`,
            `/images/${bay}/hero.jpg`,
          ]),
      worlds[bay] || worlds.racing,
    ];
    let backgroundRel = worlds[bay] || worlds.racing;
    for (const candidate of backgroundCandidates) {
      if (await existsPublic(candidate)) {
        backgroundRel = candidate;
        break;
      }
    }
    const productAbs = path.join(publicDir, productRel.replace(/^\//, ''));
    const worldAbs = path.join(publicDir, backgroundRel.replace(/^\//, ''));
    const crew = crewByBay[bay] || crewByBay.racing;
    const crewAbs = path.join(publicDir, crew.image.replace(/^\//, ''));
    const accent = accents[bay] || accents.racing;
    const outRel = `/images/generated/article-covers/${slug}.webp`;
    const outAbs = path.join(publicDir, outRel.replace(/^\//, ''));

    try {
      const background = await sharp(worldAbs)
        .resize(1600, 900, { fit: 'cover' })
        .modulate({ saturation: 1.16, brightness: 1.03 })
        .blur(0.8)
        .toBuffer();
      const productLayers = [];
      for (const [index, rel] of displayRels.entries()) {
        const abs = path.join(publicDir, rel.replace(/^\//, ''));
        const cutout = await productCutout(abs, rel);
        const resized = await sharp(cutout)
          .resize(index === 0 ? 860 : 420, index === 0 ? 600 : 300, { fit: 'inside', withoutEnlargement: false })
          .png()
          .toBuffer();
        const meta = await sharp(resized).metadata();
        const positions = [
          {
            left: 712 + Math.round((770 - (meta.width || 760)) / 2),
            top: 214 + Math.round((506 - (meta.height || 520)) / 2),
          },
          {
            left: 1124 + Math.round((330 - (meta.width || 360)) / 2),
            top: 86 + Math.round((236 - (meta.height || 260)) / 2),
          },
          {
            left: 1186 + Math.round((334 - (meta.width || 360)) / 2),
            top: 560 + Math.round((244 - (meta.height || 260)) / 2),
          },
        ];
        productLayers.push({ input: resized, ...positions[index] });
      }
      const curator = await roundedImage(crewAbs, 220, 270, 30);
      const article = {
        title: data.title || slug.replace(/-/g, ' '),
        type: data.type || 'buyer-guide',
      };

      await sharp(background)
        .composite([
          { input: overlaySvg({ article, art, accent, crew, productCount: displayRels.length || 1 }), left: 0, top: 0 },
          ...productLayers,
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
