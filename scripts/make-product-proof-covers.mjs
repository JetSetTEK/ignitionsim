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

const crewProfiles = {
	  duke: {
	    name: 'Duke Alvarez',
	    image: '/images/crew/duke-alvarez.webp',
	    scenes: [
	      '/images/curator-scenes/duke-racing-cockpit-pedal-tuning-2.webp',
	      '/images/curator-scenes/duke-racing-pedal-setup.webp',
	      '/images/dream/duke-racing-rig-tip.webp',
	      '/images/dream/duke-iracing-rig-review.webp',
    ],
    note: 'Torque first. Flex never gets a hall pass.',
  },
	  nina: {
	    name: 'Nina Brooks',
	    image: '/images/crew/nina-brooks.webp',
	    scenes: [
	      '/images/curator-scenes/nina-golf-bay-room-check-2.webp',
	      '/images/curator-scenes/nina-golf-bay-presenting.webp',
	      '/images/dream/nina-premium-launch-monitor-lab.webp',
	      '/images/dream/nina-budget-launch-monitor-room.webp',
      '/images/dream/nina-golf-bay-tip.webp',
    ],
    note: 'Measure the room before you fall in love.',
  },
	  val: {
	    name: 'Val Chen',
	    image: '/images/crew/val-chen.webp',
	    scenes: [
	      '/images/curator-scenes/val-space-hosas-routing-2.webp',
	      '/images/curator-scenes/val-space-hosas-cable-check.webp',
	      '/images/dream/val-flight-space-tip.webp',
	    ],
    note: 'Clean routing beats cockpit clutter.',
  },
	  valSpace: {
	    name: 'Val Chen',
	    image: '/images/crew/val-chen.webp',
	    scenes: [
	      '/images/curator-scenes/val-space-hosas-routing-2.webp',
	      '/images/curator-scenes/val-space-hosas-cable-check.webp',
	      '/images/dream/val-flight-space-tip.webp',
	    ],
    note: 'Bind for stress, not for the screenshot.',
  },
	  mac: {
	    name: 'Mac Donovan',
	    image: '/images/crew/mac-donovan.webp',
	    scenes: [
	      '/images/curator-scenes/mac-gpu-flight-pc-workbench.webp',
	      '/images/curator-scenes/mac-vr-sim-checklist.webp',
	      '/images/curator-scenes/mac-diy-button-board-test.webp',
	    ],
    note: 'Test the cable before blaming the sim.',
  },
  gus: {
    name: 'Gus Calder',
    image: '/images/crew/gus-calder.webp',
    scenes: [
      '/images/curator-scenes/gus-marine-throttle-helm.webp',
    ],
    note: 'Label everything. Save every profile.',
  },
};

const crewByBay = {
  racing: crewProfiles.duke,
  golf: crewProfiles.nina,
  flight: crewProfiles.mac,
  space: crewProfiles.valSpace,
  marine: crewProfiles.gus,
};

const crewByAuthor = Object.fromEntries(
  Object.values(crewProfiles).map((crew) => [crew.name.toLowerCase(), crew])
);

const slugProductHints = {
  'premium-overhead-golf-launch-monitors-2026': [
    '/images/gear/golf/uneekor-eye-xo2.jpg',
  ],
  'foresight-gcquad-vs-gc3-vs-falcon-2026': [
    '/images/gear/golf/foresight-gcquad.jpg',
    '/images/gear/golf/foresight-gc3.jpg',
  ],
  'luxury-golf-simulator-room-build-25000-2026': [
    '/images/gear/golf/sig10-enclosure.jpg',
    '/images/gear/golf/garmin-approach-r50.jpg',
  ],
  'simucube-activepedal-pro-vs-moza-mbooster-2026': [
    '/images/gear/racing/simucube-activepedal-pro.jpg',
    '/images/gear/racing/moza-mbooster-active-pedal.png',
  ],
  'flagship-direct-drive-wheelbase-buyer-map-2026': [
    '/images/gear/racing/simagic-evo-ultra.jpg',
    '/images/gear/racing/asetek-invicta.jpg',
  ],
  'best-gpu-for-sim-racing-flight-2026': [
    '/images/gear/flight/nvidia-rtx-5080.jpg',
    '/images/gear/flight/nvidia-rtx-5090.jpg',
  ],
  'best-vr-headset-for-sim-2026': [
    '/images/gear/flight/pimax-crystal-super.jpg',
    '/images/gear/flight/bigscreen-beyond-2.jpg',
    '/images/gear/flight/meta-quest-3s.jpg',
  ],
  'best-bass-shakers-tactile-sim-2026': [
    '/images/gear/racing/buttkicker-gamer-pro.jpg',
    '/images/gear/racing/dayton-bst-1.jpg',
  ],
  'best-sim-racing-cockpits-and-seats-2026': [
    '/images/gear/racing/sim-lab-p1x.jpg',
    '/images/gear/racing/trak-racer-trx.jpg',
  ],
  'best-sim-racing-monitors-triple-vs-ultrawide-2026': [
    '/images/gear/racing/samsung-odyssey-neo-g9-57.jpg',
    '/images/gear/racing/samsung-odyssey-oled-g9-49.jpg',
  ],
  'best-sim-racing-motion-platforms-2026': [
    '/images/gear/racing/nlr-motion-v3.jpg',
    '/images/gear/racing/dof-reality-h3.jpg',
  ],
  'sim-rig-accessories-audio-lighting-2026': [
    '/images/gear/racing/steelseries-arctis-nova-7.jpg',
    '/images/gear/racing/govee-rgbic-bars.jpg',
  ],
};

const slugSceneHints = {
  'premium-overhead-golf-launch-monitors-2026': '/images/curator-scenes/nina-golf-bay-room-check-2.webp',
  'foresight-gcquad-vs-gc3-vs-falcon-2026': '/images/dream/nina-premium-launch-monitor-lab.webp',
  'luxury-golf-simulator-room-build-25000-2026': '/images/curator-scenes/nina-golf-bay-presenting.webp',
  'simucube-activepedal-pro-vs-moza-mbooster-2026': '/images/curator-scenes/duke-racing-pedal-setup.webp',
  'flagship-direct-drive-wheelbase-buyer-map-2026': '/images/dream/duke-racing-rig-tip.webp',
  'best-gpu-for-sim-racing-flight-2026': '/images/curator-scenes/mac-gpu-flight-pc-workbench.webp',
  'best-vr-headset-for-sim-2026': '/images/curator-scenes/mac-vr-sim-checklist.webp',
  'best-bass-shakers-tactile-sim-2026': '/images/curator-scenes/duke-racing-cockpit-pedal-tuning-2.webp',
  'best-sim-racing-cockpits-and-seats-2026': '/images/curator-scenes/duke-racing-cockpit-pedal-tuning-2.webp',
  'best-sim-racing-monitors-triple-vs-ultrawide-2026': '/images/curator-scenes/duke-racing-cockpit-pedal-tuning-2.webp',
  'best-sim-racing-motion-platforms-2026': '/images/curator-scenes/duke-racing-cockpit-pedal-tuning-2.webp',
  'sim-rig-accessories-audio-lighting-2026': '/images/curator-scenes/duke-racing-cockpit-pedal-tuning-2.webp',
};

const slugLabelHints = {
  'garmin-r50-room-build-bible-2026': 'R50 room bible',
  'premium-overhead-golf-launch-monitors-2026': 'Overhead monitor war',
  'foresight-gcquad-vs-gc3-vs-falcon-2026': 'Foresight buy map',
  'luxury-golf-simulator-room-build-25000-2026': '$25K room stack',
  'simucube-activepedal-pro-vs-moza-mbooster-2026': 'Active pedal war',
  'flagship-direct-drive-wheelbase-buyer-map-2026': 'Flagship DD map',
  'best-sim-racing-cockpits-and-seats-2026': 'Rigidity ladder',
  'best-sim-racing-monitors-triple-vs-ultrawide-2026': 'FOV wall test',
  'thrustmaster-sol-r2-vs-sol-r4-hosas-hotas-2026': 'SOL-R desk flight',
  'professional-ship-simulator-2026-hardware-setup': 'Ship bridge bench',
  'vkb-vs-virpil-vs-winwing-space-sticks-2026': 'Boutique HOSAS war',
};

function inferredLabel(data, slug) {
  if (slugLabelHints[slug]) return slugLabelHints[slug];
  const haystack = `${slug} ${data.title || ''} ${data.primaryKeyword || ''}`.toLowerCase();
  if (haystack.includes('gpu') || haystack.includes('rtx')) return 'GPU reality';
  if (haystack.includes('vr headset')) return 'VR cockpit fit';
  if (haystack.includes('bass shaker') || haystack.includes('tactile')) return 'Tactile punch';
  if (haystack.includes('cockpit') || haystack.includes('seat')) return 'Cockpit fit';
  if (haystack.includes('motion platform') || haystack.includes('motion')) return 'Motion tax';
  if (haystack.includes('accessories') || haystack.includes('audio') || haystack.includes('lighting')) return 'Rig finishers';
  if (haystack.includes('launch monitor')) return 'Launch monitor lab';
  if (haystack.includes('monitor') || haystack.includes('ultrawide')) return 'Display wall';
  if (haystack.includes('projector')) return 'Projector geometry';
  if (haystack.includes('hosas') || haystack.includes('hotas') || haystack.includes('stick')) return 'Control map';
  return 'Product proof';
}

function productRelevanceScore(data, slug, rel) {
  const haystack = `${slug} ${data.title || ''} ${data.primaryKeyword || ''}`.toLowerCase();
  const image = String(rel || '').toLowerCase();
  let score = 0;

  const promote = (needles, amount = 12) => {
    if (needles.some((needle) => haystack.includes(needle)) && needles.some((needle) => image.includes(needle))) score += amount;
  };
  const demoteWhen = (topics, badNeedles, amount = 30) => {
    if (topics.some((topic) => haystack.includes(topic)) && badNeedles.some((needle) => image.includes(needle))) score -= amount;
  };

  promote(['gpu', 'rtx', '5080', '5090', 'nvidia'], 24);
  promote(['vr', 'headset', 'quest', 'pimax', 'bigscreen'], 20);
  promote(['bass', 'shaker', 'tactile', 'buttkicker', 'dayton'], 18);
  promote(['cockpit', 'seat', 'rig', 'p1x', 'trak-racer'], 18);
  promote(['monitor', 'ultrawide', 'odyssey', 'g9'], 18);
  promote(['motion', 'actuator', 'dof', 'nlr-motion'], 18);
  promote(['audio', 'lighting', 'accessories', 'govee', 'steelseries', 'usb'], 14);
  promote(['launch', 'monitor', 'garmin', 'skytrak', 'foresight', 'bushnell', 'uneekor', 'square'], 16);
  promote(['projector', 'benq', 'optoma'], 16);
  promote(['hosas', 'hotas', 'stick', 'joystick', 'vkb', 'virpil', 'winwing'], 14);
  promote(['yoke', 'throttle', 'rudder', 'honeycomb', 'turtle', 'moza-ay'], 14);

  demoteWhen(['gpu', 'rtx', 'graphics'], ['yoke', 'throttle', 'rudder', 'joystick', 'wheel', 'pedal', 'honeycomb'], 50);
  demoteWhen(['vr headset', 'headset'], ['yoke', 'throttle', 'rudder', 'pedal', 'wheelbase'], 42);
  demoteWhen(['cockpit', 'seat'], ['headset', 'projector', 'launch-monitor'], 18);
  demoteWhen(['monitor', 'ultrawide'], ['pedal', 'wheelbase', 'shifter', 'throttle'], 22);
  if (image.includes('trak-racer-tr80')) score -= 80;

  return score;
}

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

async function blendedCuratorScene(abs, variant = 0) {
  const width = 720;
  const height = 520;
  const positions = ['left', 'center', 'top', 'entropy'];
  const scene = await sharp(abs, { animated: false, limitInputPixels: 80_000_000 })
    .rotate()
    .resize(width, height, { fit: 'cover', position: positions[variant % positions.length] })
    .modulate({ saturation: 1.1, brightness: 0.94 })
    .blur(0.3)
    .png()
    .toBuffer();
  const mask = Buffer.from(`
    <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="fade" cx="31%" cy="42%" r="78%">
          <stop offset="0" stop-color="#fff" stop-opacity=".98"/>
          <stop offset=".52" stop-color="#fff" stop-opacity=".82"/>
          <stop offset=".78" stop-color="#fff" stop-opacity=".42"/>
          <stop offset="1" stop-color="#fff" stop-opacity="0"/>
        </radialGradient>
        <linearGradient id="side" x1="0" x2="1">
          <stop offset="0" stop-color="#fff" stop-opacity=".98"/>
          <stop offset=".72" stop-color="#fff" stop-opacity=".72"/>
          <stop offset="1" stop-color="#fff" stop-opacity="0"/>
        </linearGradient>
      </defs>
      <rect width="${width}" height="${height}" fill="url(#side)"/>
      <rect width="${width}" height="${height}" fill="url(#fade)" opacity=".72"/>
    </svg>
  `);
  return sharp(scene)
    .composite([{ input: mask, blend: 'dest-in' }])
    .webp({ quality: 90 })
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
  const crewNote = wrapText(crew.note, 38, 2).map((line, index) =>
    `<text x="104" y="${694 + index * 28}" class="small" font-size="20" opacity="0.88">${escapeXml(line)}</text>`
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
      <g opacity="0.15">
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
      <rect x="76" y="616" width="560" height="126" rx="24" fill="rgba(16,24,32,.54)" stroke="rgba(255,255,255,.18)"/>
      <text x="104" y="653" class="mono" font-size="13" fill="${accent}">curator signal</text>
      <text x="104" y="679" class="caption" font-size="23">${escapeXml(crew.name)}:</text>
      ${crewNote}
    </svg>
  `);
}

function crewForArticle(data, bay) {
  const author = String(data.author || '').toLowerCase();
  return crewByAuthor[author] || crewByBay[bay] || crewByBay.racing;
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
	    const hintedImages = slugProductHints[slug] || [];
	    const candidates = [
	      ...hintedImages,
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
	    const hintedRels = hintedImages.filter((rel) => productRels.includes(rel));
	    const gearRels = productRels
	      .filter((rel) => rel.startsWith('/images/gear/'))
	      .sort((a, b) => productRelevanceScore(data, slug, b) - productRelevanceScore(data, slug, a));
	    const displayRels = (hintedRels.length ? hintedRels : (gearRels.length ? gearRels : productRels)).slice(0, 2);
	    const productRel = displayRels[0] || worlds[bay];
	    const coverArt = art || {
	      label: inferredLabel(data, slug),
	      alt: data.heroAlt || data.title || 'real product proof',
	    };
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
    const crew = crewForArticle(data, bay);
	    const sceneRels = [...(crew.scenes || []), crew.image].filter(Boolean);
	    const sceneRel = slugSceneHints[slug] || rotated(sceneRels, bayIndex + hashSlug(slug))[0] || crew.image;
    const sceneAbs = path.join(publicDir, sceneRel.replace(/^\//, ''));
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
      const curatorScene = await blendedCuratorScene(sceneAbs, bayIndex);
      const article = {
        title: data.title || slug.replace(/-/g, ' '),
        type: data.type || 'buyer-guide',
      };

      await sharp(background)
        .composite([
          { input: curatorScene, left: 0, top: 332 },
	          { input: overlaySvg({ article, art: coverArt, accent, crew, productCount: displayRels.length || 1 }), left: 0, top: 0 },
          ...productLayers,
        ])
        .webp({ quality: 88 })
        .toFile(outAbs);

      manifest[slug] = {
	        image: outRel,
	        alt: `${data.title || slug} cover with ${coverArt.alt || 'real product proof'} and ${crew.name}`,
	        label: coverArt.label || 'Product proof',
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
