import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const root = process.cwd();
const slug = 'top-simulator-creators-rigs-2026';
const scene = path.join(
  root,
  'public/images/curator-scenes/influencer-rigs-2026/mac-creator-studio-power-audit.webp',
);
const manifestPath = path.join(root, 'src/data/generated-article-covers.json');

const escapeXml = (value) => String(value)
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')
  .replaceAll("'", '&apos;');

function wrap(text, max = 28) {
  const words = text.split(/\s+/);
  const lines = [];
  let current = '';
  for (const word of words) {
    const next = current ? `${current} ${word}` : word;
    if (next.length > max && current) {
      lines.push(current);
      current = word;
    } else {
      current = next;
    }
  }
  if (current) lines.push(current);
  return lines;
}

function textBlock(lines, x, y, fontSize, lineHeight, attrs = '') {
  return `<text x="${x}" y="${y}" ${attrs}>${lines
    .map((line, index) => `<tspan x="${x}" dy="${index ? lineHeight : 0}">${escapeXml(line)}</tspan>`)
    .join('')}</text>`;
}

async function makeCover({ width, height, out, vertical = false }) {
  const title = wrap('10 simulator creators whose rigs are worth studying', vertical ? 18 : 24);
  const titleSize = vertical ? 66 : 60;
  const titleLine = vertical ? 72 : 66;
  const titleY = vertical ? 720 : 286;
  const titleX = vertical ? 72 : 68;
  const footerY = height - (vertical ? 96 : 48);

  const overlay = `
    <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="shade" x1="0" y1="0" x2="${vertical ? 0 : 1}" y2="${vertical ? 1 : 0}">
          <stop offset="0" stop-color="#07131b" stop-opacity=".96"/>
          <stop offset=".56" stop-color="#07131b" stop-opacity="${vertical ? '.52' : '.72'}"/>
          <stop offset="1" stop-color="#07131b" stop-opacity="${vertical ? '.18' : '.05'}"/>
        </linearGradient>
      </defs>
      <rect width="${width}" height="${height}" fill="url(#shade)"/>
      <rect x="${vertical ? 58 : 48}" y="${vertical ? 68 : 46}" width="${vertical ? 470 : 458}" height="50" rx="4" fill="#ff5e1a"/>
      <text x="${vertical ? 82 : 70}" y="${vertical ? 102 : 80}" fill="#101820" font-family="Arial, Helvetica, sans-serif" font-size="20" font-weight="900" letter-spacing="3">CREATOR RIG FIELD GUIDE · 2026</text>
      ${textBlock(
        title.map((line) => line.toUpperCase()),
        titleX,
        titleY,
        titleSize,
        titleLine,
        `fill="#ffffff" font-family="Arial, Helvetica, sans-serif" font-size="${titleSize}" font-weight="900"`,
      )}
      <line x1="${titleX}" y1="${footerY - 50}" x2="${vertical ? width - 72 : 600}" y2="${footerY - 50}" stroke="#24c7c9" stroke-width="6"/>
      <text x="${titleX}" y="${footerY}" fill="#ffffff" font-family="Arial, Helvetica, sans-serif" font-size="${vertical ? 25 : 22}" font-weight="800" letter-spacing="3">MAC DONOVAN · IGNITIONSIM</text>
    </svg>`;

  await sharp(scene)
    .resize(width, height, { fit: 'cover', position: vertical ? 'centre' : 'attention' })
    .composite([{ input: Buffer.from(overlay) }])
    .webp({ quality: 91, effort: 5 })
    .toFile(out);
}

function infographic({ title, subtitle, cards, accent, footer }) {
  const cardWidth = 510;
  const cardHeight = 230;
  const positions = [[72, 315], [618, 315], [72, 579], [618, 579]];
  const blocks = cards.map((card, index) => {
    const [x, y] = positions[index];
    const lines = wrap(card.body, 44);
    return `
      <g>
        <rect x="${x}" y="${y}" width="${cardWidth}" height="${cardHeight}" rx="14" fill="#ffffff" stroke="#101820" stroke-width="3"/>
        <rect x="${x}" y="${y}" width="12" height="${cardHeight}" rx="6" fill="${index % 2 ? '#24c7c9' : accent}"/>
        <text x="${x + 36}" y="${y + 52}" fill="${accent}" font-family="Arial, Helvetica, sans-serif" font-size="20" font-weight="900" letter-spacing="3">${escapeXml(card.label.toUpperCase())}</text>
        ${textBlock(lines, x + 36, y + 102, 25, 34, 'fill="#273746" font-family="Arial, Helvetica, sans-serif" font-size="25" font-weight="650"')}
      </g>`;
  }).join('');

  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="900" viewBox="0 0 1200 900" role="img" aria-labelledby="title desc">
    <title id="title">${escapeXml(title)}</title>
    <desc id="desc">${escapeXml(subtitle)}</desc>
    <rect width="1200" height="900" fill="#edf4f8"/>
    <path d="M0 0h1200v18H0z" fill="#101820"/>
    <path d="M0 18h720v8H0z" fill="${accent}"/>
    <text x="72" y="90" fill="${accent}" font-family="Arial, Helvetica, sans-serif" font-size="20" font-weight="900" letter-spacing="4">IGNITIONSIM FIELD SYSTEM</text>
    <text x="72" y="154" fill="#101820" font-family="Arial, Helvetica, sans-serif" font-size="48" font-weight="900">${escapeXml(title)}</text>
    ${textBlock(wrap(subtitle, 76), 72, 205, 25, 34, 'fill="#435363" font-family="Arial, Helvetica, sans-serif" font-size="25" font-weight="600"')}
    ${blocks}
    <text x="72" y="854" fill="#435363" font-family="Arial, Helvetica, sans-serif" font-size="19" font-weight="800" letter-spacing="2">${escapeXml(footer.toUpperCase())}</text>
  </svg>`.replace(/[ \t]+$/gm, '');
}

await fs.mkdir(path.join(root, 'public/images/generated/article-covers'), { recursive: true });
await fs.mkdir(path.join(root, 'public/images/generated/social'), { recursive: true });
await fs.mkdir(path.join(root, 'public/images/generated/vertical'), { recursive: true });
await fs.mkdir(path.join(root, 'public/images/infographics/cross-sim'), { recursive: true });

await Promise.all([
  makeCover({
    width: 1200,
    height: 675,
    out: path.join(root, `public/images/generated/article-covers/${slug}.webp`),
  }),
  makeCover({
    width: 1200,
    height: 630,
    out: path.join(root, `public/images/generated/social/${slug}.webp`),
  }),
  makeCover({
    width: 1080,
    height: 1350,
    vertical: true,
    out: path.join(root, `public/images/generated/vertical/${slug}.webp`),
  }),
]);

const copyMap = infographic({
  title: 'Copy the system, not the shopping cart',
  subtitle: 'The four pieces of a creator rig that transfer to an ordinary room better than its most expensive component.',
  accent: '#ff5e1a',
  footer: 'Fit first · signal second · hardware third',
  cards: [
    { label: 'Load path', body: 'Follow force from hands and feet through mounts, frame, seat, and floor. Flex anywhere changes the control.' },
    { label: 'Sight line', body: 'Copy eye height, display distance, field of view, and head movement before copying screen count or size.' },
    { label: 'Service path', body: 'Power, USB, cooling, labels, backups, and access decide whether the rig survives its next update.' },
    { label: 'Room fit', body: 'Noise, swing clearance, chair travel, ventilation, and family traffic are part of the simulator.' },
  ],
});

const trustFilter = infographic({
  title: 'The four-part creator trust filter',
  subtitle: 'Influence is not evidence. Use this before a beautiful rig tour turns into a four-figure impulse purchase.',
  accent: '#7b2cbf',
  footer: 'Watch several creators · verify exact models · buy for your room',
  cards: [
    { label: 'Disclosure', body: 'Is the product supplied, sponsored, affiliated, borrowed, or personally purchased? Context changes weight.' },
    { label: 'Measurement', body: 'Look for dimensions, settings, latency, force, temperature, failures, or repeatable comparisons.' },
    { label: 'Transfer', body: 'Ask whether the lesson survives a different body, room, platform, game, budget, or noise limit.' },
    { label: 'Community', body: 'Cross-check recurring owner problems on forums and Reddit before treating one clean sample as universal.' },
  ],
});

await Promise.all([
  fs.writeFile(path.join(root, 'public/images/infographics/cross-sim/creator-rig-copy-map-2026.svg'), copyMap),
  fs.writeFile(path.join(root, 'public/images/infographics/cross-sim/creator-rig-trust-filter-2026.svg'), trustFilter),
]);

const manifest = JSON.parse(await fs.readFile(manifestPath, 'utf8'));
manifest[slug] = {
  image: `/images/generated/article-covers/${slug}.webp`,
  alt: 'Mac Donovan auditing a simulator creator studio with the rig, displays, service panel, and cable system visible at useful scale',
  label: 'Creator rigs decoded',
  wide: true,
};
const ordered = Object.fromEntries(Object.entries(manifest).sort(([a], [b]) => a.localeCompare(b)));
await fs.writeFile(manifestPath, `${JSON.stringify(ordered, null, 2)}\n`);

console.log(`Built cover, social, vertical, and two infographics for ${slug}.`);
