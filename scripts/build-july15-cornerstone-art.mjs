import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const root = process.cwd();
const publicDir = path.join(root, 'public');
const manifestPath = path.join(root, 'src/data/generated-article-covers.json');

const articles = [
  {
    slug: 'moza-ay210-vs-brunner-cls-e-vs-flitesim-cls-60-ffb-yokes-2026',
    bay: 'flight',
    title: 'Force-Feedback Yokes: MOZA vs Brunner vs FliteSim',
    kicker: 'TRIM FEEL, MOUNTING, SOFTWARE, REGRET',
    author: 'VAL CHEN',
    base: '/images/article-proofs/flight/moza-ay210-vs-brunner-cls-e-vs-flitesim-cls-60-ffb-yokes-2026/moza-ay210-installed.jpg',
    accent: '#20b8d8',
    label: 'FFB yoke buyer map',
    alt: 'MOZA AY210 force-feedback yoke installed in a bright simulator cockpit for the MOZA, Brunner and FliteSim comparison',
    diagrams: [
      {
        name: 'ffb-yoke-decision-map-2026.svg',
        eyebrow: 'THE THREE-WAY VERDICT',
        title: 'Buy the force-feedback system, not the torque number.',
        columns: [
          ['MOZA AY210', 'Best enthusiast value', '9 Nm roll / 210 N pitch', 'Native telemetry path', 'Check handle + mount cost'],
          ['BRUNNER CLS-E MK II', 'Premium control loading', 'Mature training ecosystem', 'Deep software integration', 'Highest cost and setup tax'],
          ['FLITESIM CLS-60/120', 'Modular training path', '165 mm pitch travel', 'Remote + replay sync', 'Lead time and direct USB'],
        ],
        footer: 'Do not buy any of them until the desk or cockpit can take the load and you accept profile work.',
      },
      {
        name: 'ffb-yoke-commissioning-sequence-2026.svg',
        eyebrow: 'THE FIRST EVENING',
        title: 'One aircraft. One neutral profile. Then add feel.',
        columns: [
          ['1 · MOUNT', 'Bolt or clamp the base', 'Check pitch clearance', 'Route power + data', 'Keep the stop switch reachable'],
          ['2 · PROVE', 'Direct USB first', 'Calibrate plain axes', 'Fly a default C172', 'Confirm trim unloads force'],
          ['3 · TUNE', 'Add one effect', 'Save a known-good profile', 'Export before updates', 'Test autopilot behavior'],
        ],
        footer: 'If the yoke feels wrong, return to the boring baseline before changing five settings at once.',
      },
    ],
  },
  {
    slug: 'vkb-stecs-vs-virpil-vmax-vs-winctrl-orion2-throttle-2026',
    bay: 'flight',
    title: 'STECS vs VMAX Prime vs Orion2',
    kicker: 'THE PREMIUM THROTTLE DECISION',
    author: 'VAL CHEN',
    base: '/images/article-proofs/flight/vkb-stecs-vs-virpil-vmax-vs-winctrl-orion2-throttle-2026/winctrl-orion2-installed.jpg',
    accent: '#ff7657',
    label: 'Premium throttle verdict',
    alt: 'WINCTRL Orion2 throttle official product media for the VKB STECS, Virpil VMAX Prime and Orion2 comparison',
    diagrams: [
      {
        name: 'premium-throttle-fit-map-2026.svg',
        eyebrow: 'FIT BEFORE BRAND',
        title: 'The best throttle is the one your hand can reach for three hours.',
        columns: [
          ['VKB STECS MK II', 'Mixed-sim versatility', 'Modular detents + inputs', 'Strong value and support', 'Large system, software depth'],
          ['VIRPIL VMAX PRIME', 'Premium mounted cockpit', 'Compact, metal, refined', '49 inputs / 7 axes', 'Backorder + premium price'],
          ['WINCTRL ORION2', 'Aircraft-specific DCS feel', 'Metal hardware value', 'F-15EX control density', 'Support and QA caveat'],
        ],
        footer: 'Print the footprint, sit in your real chair, and test wrist and ministick reach before checkout.',
      },
      {
        name: 'throttle-detent-setup-sequence-2026.svg',
        eyebrow: 'DETENTS WITHOUT THE LOST WEEKEND',
        title: 'Geometry first. Calibration second. Bindings last.',
        columns: [
          ['PHYSICAL', 'Choose idle / cutoff / AB', 'Fit plates and tension', 'Mount at elbow height', 'Check full travel'],
          ['SOFTWARE', 'Calibrate raw axes', 'Mark detent percentages', 'Add curves only if needed', 'Save per-aircraft profiles'],
          ['FLIGHT TEST', 'Cold-start check', 'Taxi and idle test', 'MIL / afterburner check', 'Export a recovery file'],
        ],
        footer: 'A detent that is one percent wrong becomes a ritual annoyance every flight.',
      },
    ],
  },
  {
    slug: 'star-citizen-mining-salvage-control-deck-2026',
    bay: 'space',
    title: 'Build a Star Citizen Mining + Salvage Control Deck',
    kicker: 'STREAM DECK, REAL AXIS, PATCH-SAFE BINDINGS',
    author: 'VAL CHEN',
    base: '/images/article-proofs/space/star-citizen-mining-salvage-control-deck-2026/stream-deck-plus-use.jpg',
    accent: '#44d3a8',
    label: 'Career control deck',
    alt: 'Elgato Stream Deck Plus in real desk use for a Star Citizen mining and salvage control deck',
    diagrams: [
      {
        name: 'star-citizen-career-control-map-2026.svg',
        eyebrow: 'ONE DECK, THREE MODES',
        title: 'Keep precision on an axis and mode changes where you can see them.',
        columns: [
          ['FLIGHT', 'Scan / ping', 'Gear + VTOL', 'Target + power', 'Master-mode page'],
          ['MINING', 'Laser power on real axis', 'Fracture / extraction', 'Module selection', 'Charge warning visible'],
          ['SALVAGE', 'Mode + beam control', 'Gimbal / heads', 'Cargo + tractor', 'Recovery page'],
        ],
        footer: 'A button deck is excellent memory. It is not a substitute for the analog control your laser power needs.',
      },
      {
        name: 'star-citizen-binding-recovery-flow-2026.svg',
        eyebrow: 'PATCH-DAY INSURANCE',
        title: 'Build a control map you can recover, not merely admire.',
        columns: [
          ['MAP', 'Bind survival controls', 'Add one career page', 'Photograph physical labels', 'Name device order'],
          ['EXPORT', 'Export XML profile', 'Copy actionmaps folder', 'Date + patch the backup', 'Save plugin profiles'],
          ['RESTORE', 'Check device IDs', 'Import known-good map', 'Test analog ranges', 'Fix only changed actions'],
        ],
        footer: 'Never rebuild 80 bindings from memory after an update. Back up the working night.',
      },
    ],
  },
  {
    slug: 'marine-sim-twin-engine-throttle-controls-2026',
    bay: 'marine',
    title: 'Twin-Engine Marine Sim Controls That Actually Work',
    kicker: 'BRAVO vs TCA vs DIY BODNAR',
    author: 'GUS CALDER',
    base: '/images/article-proofs/marine/marine-sim-twin-engine-throttle-controls-2026/tca-quadrant-use.png',
    accent: '#29b6a8',
    label: 'Marine control engineering',
    alt: 'Real Bridge Command simulator control room for a twin-engine marine control comparison',
    diagrams: [
      {
        name: 'marine-twin-engine-axis-map-2026.svg',
        eyebrow: 'THE HONEST INPUT MAP',
        title: 'Two engines need two stable axes and a believable neutral.',
        columns: [
          ['TCA QUADRANT', 'Cheap proof of concept', 'Paired detented levers', 'Compact desk footprint', 'Map neutral carefully'],
          ['HONEYCOMB BRAVO', 'Six flexible lever axes', 'Switches + trim included', 'Bulky aviation styling', 'Good shared bridge desk'],
          ['BU0836X DIY', 'Real marine geometry', 'Up to 8 analog axes', 'Your levers, detents, labels', 'Wiring + enclosure tax'],
        ],
        footer: 'Prove the simulator preserves separate ahead and astern behavior before fabricating the beautiful console.',
      },
      {
        name: 'marine-throttle-build-sequence-2026.svg',
        eyebrow: 'FROM CHEAP TEST TO REAL BRIDGE',
        title: 'Earn the custom lever one reliable axis at a time.',
        columns: [
          ['TEST', 'Map a spare quadrant', 'Confirm port / starboard', 'Test ahead + astern', 'Save the profile'],
          ['PROTOTYPE', 'Set lever throw', 'Mark neutral deadzone', 'Label every function', 'Run a docking session'],
          ['BUILD', 'Hall sensor or pot', 'Strain relief + service loop', 'Enclosure + hard stops', 'Document calibration'],
        ],
        footer: 'The expensive part is not the interface board. It is building a mechanism you still trust after fifty dockings.',
      },
    ],
  },
  {
    slug: 'g1000-hardware-flightsimbuilder-vs-realsimgear-vs-moza-mgx1000-2026',
    bay: 'flight',
    title: 'G1000 Hardware: FlightSimBuilder vs RealSimGear vs MOZA',
    kicker: 'TRAINER FIT, SOFTWARE, PORTS, EARLY-ADOPTER RISK',
    author: 'VAL CHEN',
    base: '/images/article-proofs/flight/g1000-hardware-flightsimbuilder-vs-realsimgear-vs-moza-mgx1000-2026/rsg-g1000-use.jpg',
    accent: '#a8d653',
    label: 'Glass cockpit buyer map',
    alt: 'FlightSimBuilder G1000 hardware installed for a comparison with RealSimGear and MOZA MGX1000',
    diagrams: [
      {
        name: 'g1000-hardware-decision-map-2026.svg',
        eyebrow: 'BUY THE AIRCRAFT MATCH',
        title: 'A perfect G1000 is wrong if your airplane uses a different cockpit.',
        columns: [
          ['FLIGHTSIMBUILDER', 'Flexible current value', 'Touch option + Hub software', 'Good mixed trainer path', 'Verify exact aircraft profile'],
          ['REALSIMGEAR', 'Mature turnkey premium', 'PFD + MFD + audio suite', 'Strong procedure trainer', 'Large footprint and price'],
          ['MOZA MGX1000', 'Promising $449 newcomer', '10.4-inch DisplayLink panel', 'Excellent paper value', 'Wait for owner proof'],
        ],
        footer: 'G1000, NXi, G3000 and Perspective are not interchangeable merely because the screens are glass.',
      },
      {
        name: 'g1000-usb-display-architecture-2026.svg',
        eyebrow: 'THE CABLE REALITY',
        title: 'Two displays are a small network of power, USB, software and pop-outs.',
        columns: [
          ['COMPUTER', 'Windows PC', 'Simulator + aircraft', 'Vendor connector software', 'Known-good GPU driver'],
          ['DISPLAY PATH', 'HDMI / DisplayPort or USB', 'PFD + MFD pop-outs', 'Powered hub if approved', 'Keep ports documented'],
          ['CONTROL PATH', 'Knobs + buttons over USB', 'Aircraft profile mapping', 'Audio panel if required', 'Backup the configuration'],
        ],
        footer: 'Count ports, adapters, screen pop-outs and desk width before the first avionics box ships.',
      },
    ],
  },
];

function esc(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&apos;' }[char]));
}

function wrap(text, max = 28) {
  const words = String(text).split(/\s+/);
  const lines = [];
  let line = '';
  for (const word of words) {
    if (`${line} ${word}`.trim().length > max && line) {
      lines.push(line);
      line = word;
    } else line = `${line} ${word}`.trim();
  }
  if (line) lines.push(line);
  return lines;
}

function textBlock(text, x, y, size, width, weight = 500, fill = '#eaf2f5', lineHeight = 1.16) {
  return wrap(text, width).map((line, index) => `<text x="${x}" y="${y + index * size * lineHeight}" font-family="Arial, Helvetica, sans-serif" font-size="${size}" font-weight="${weight}" fill="${fill}">${esc(line)}</text>`).join('');
}

function diagramSvg(article, diagram) {
  const width = 1400;
  const height = 820;
  const colW = 390;
  const gap = 30;
  const startX = 75;
  const cards = diagram.columns.map((column, index) => {
    const x = startX + index * (colW + gap);
    const [heading, ...items] = column;
    return `<g>
      <rect x="${x}" y="300" width="${colW}" height="350" rx="18" fill="#ffffff" fill-opacity="0.96" stroke="${article.accent}" stroke-width="4"/>
      <rect x="${x}" y="300" width="${colW}" height="74" rx="18" fill="${article.accent}"/>
      ${textBlock(heading, x + 26, 348, 26, 24, 800, '#0b1720')}
      ${items.map((item, itemIndex) => `<circle cx="${x + 32}" cy="${411 + itemIndex * 55}" r="6" fill="${article.accent}"/>${textBlock(item, x + 52, 420 + itemIndex * 55, 24, 28, 650, '#1d2a34')}`).join('')}
    </g>`;
  }).join('');
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
    <defs><linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#07131b"/><stop offset="1" stop-color="#18313c"/></linearGradient><pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse"><path d="M48 0H0V48" fill="none" stroke="#fff" stroke-opacity=".055"/></pattern></defs>
    <rect width="1400" height="820" fill="url(#bg)"/><rect width="1400" height="820" fill="url(#grid)"/>
    <rect x="75" y="54" width="12" height="205" fill="${article.accent}"/>
    ${textBlock(diagram.eyebrow, 115, 94, 20, 54, 800, article.accent)}
    ${textBlock(diagram.title, 115, 154, 48, 47, 800, '#f5f7f6', 1.04)}
    ${cards}
    <rect x="75" y="690" width="1230" height="74" rx="12" fill="#ffffff" fill-opacity="0.1" stroke="#ffffff" stroke-opacity="0.18"/>
    ${textBlock(diagram.footer, 108, 735, 24, 86, 650, '#dbe7ea')}
    <text x="1285" y="790" text-anchor="end" font-family="Arial, Helvetica, sans-serif" font-size="16" font-weight="800" fill="${article.accent}">IGNITIONSIM · FIELD MAP</text>
  </svg>`;
}

function coverOverlay(article, width, height, vertical = false) {
  const titleSize = vertical ? 66 : 54;
  const titleWidth = vertical ? 25 : 34;
  const titleX = vertical ? 68 : 72;
  const titleY = vertical ? 785 : 408;
  const boxY = vertical ? 650 : 285;
  const boxH = vertical ? 660 : 330;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">
    <defs><linearGradient id="shade" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#06121a" stop-opacity=".08"/><stop offset=".54" stop-color="#06121a" stop-opacity=".34"/><stop offset="1" stop-color="#06121a" stop-opacity=".96"/></linearGradient></defs>
    <rect width="${width}" height="${height}" fill="url(#shade)"/>
    <rect x="${titleX}" y="${boxY}" width="${vertical ? width - 136 : 840}" height="${boxH}" rx="18" fill="#07131b" fill-opacity=".78" stroke="${article.accent}" stroke-width="3"/>
    <text x="${titleX + 34}" y="${boxY + 54}" font-family="Arial, Helvetica, sans-serif" font-size="18" font-weight="800" fill="${article.accent}">${esc(article.kicker)}</text>
    ${textBlock(article.title, titleX + 34, titleY, titleSize, titleWidth, 900, '#ffffff', 1.02)}
    <text x="${titleX + 34}" y="${vertical ? 1254 : 572}" font-family="Arial, Helvetica, sans-serif" font-size="20" font-weight="750" fill="#ffffff">${article.author} · VERIFIED JULY 2026</text>
    <rect x="${width - 210}" y="44" width="154" height="44" rx="22" fill="${article.accent}"/><text x="${width - 133}" y="73" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="17" font-weight="900" fill="#07131b">IGNITIONSIM</text>
  </svg>`;
}

async function makeCover(article, out, width, height, vertical = false) {
  const base = path.join(publicDir, article.base);
  await sharp(base)
    .rotate()
    .resize(width, height, { fit: 'cover', position: 'attention' })
    .modulate({ saturation: 0.94, brightness: 0.93 })
    .composite([{ input: Buffer.from(coverOverlay(article, width, height, vertical)) }])
    .webp({ quality: 86 })
    .toFile(out);
}

for (const article of articles) {
  const infographicDir = path.join(publicDir, 'images/infographics', article.bay);
  fs.mkdirSync(infographicDir, { recursive: true });
  for (const diagram of article.diagrams) fs.writeFileSync(path.join(infographicDir, diagram.name), diagramSvg(article, diagram));
  await makeCover(article, path.join(publicDir, 'images/generated/article-covers', `${article.slug}.webp`), 1200, 675);
  await makeCover(article, path.join(publicDir, 'images/generated/social', `${article.slug}.webp`), 1200, 630);
  await makeCover(article, path.join(publicDir, 'images/generated/vertical', `${article.slug}.webp`), 1080, 1350, true);
}

const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
for (const article of articles) {
  manifest[article.slug] = {
    image: `/images/generated/article-covers/${article.slug}.webp`,
    alt: article.alt,
    label: article.label,
    wide: true,
  };
}
fs.writeFileSync(manifestPath, `${JSON.stringify(Object.fromEntries(Object.entries(manifest).sort(([a], [b]) => a.localeCompare(b))), null, 2)}\n`);

console.log(`Built ${articles.length * 2} diagrams and ${articles.length * 3} share images.`);
