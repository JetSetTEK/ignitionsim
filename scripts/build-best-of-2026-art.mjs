import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const root = process.cwd();
const publicDir = path.join(root, 'public');
const manifestPath = path.join(root, 'src/data/generated-article-covers.json');

const guides = [
  {
    slug: 'best-sim-room-components-2026',
    bay: 'racing',
    label: 'Cross-sim foundation',
    title: 'Best Sim Room Components 2026',
    author: 'MAC DONOVAN',
    accent: '#22d3ee',
    scene: '/images/curator-scenes/best-of-2026/mac-cross-sim-usb-commission.webp',
    alt: 'Mac Donovan commissioning a bright multi-simulator room with a super-ultrawide display, VR headset, macro controls, and a labeled USB power plan',
    diagrams: [
      {
        id: 'cross-sim-buy-order-2026',
        eyebrow: 'THE SHARED FOUNDATION',
        title: 'Buy the room in the order your body notices it.',
        cards: [
          ['1 · VIEW', '49-inch 32:9 or VR', 'Match the game and GPU', 'Do not buy both first'],
          ['2 · MOUNT', 'Lock controls to the body', 'Fix screen distance', 'Remove desk movement'],
          ['3 · MEMORY', 'Head tracking + macro keys', 'Label recurring actions', 'Keep eyes in the sim'],
          ['4 · RELIABILITY', 'Powered USB and strain relief', 'Document every port', 'Export every profile'],
        ],
        footer: 'The expensive control is not the foundation if the display, mount, power, or profile still breaks the session.',
      },
      {
        id: 'cross-sim-display-picker-2026',
        eyebrow: 'MONITOR, VR, OR BOTH?',
        title: 'Choose the compromise you will still tolerate after two hours.',
        cards: [
          ['32:9 DISPLAY', 'Instant entry and crisp text', 'Shared room friendly', 'Needs width and GPU'],
          ['VR HEADSET', 'Best presence and depth', 'Small physical footprint', 'Heat, comfort, clarity tax'],
          ['HEAD TRACKING', 'Low-cost cockpit freedom', 'Keeps real controls visible', 'Not true stereoscopic depth'],
          ['HYBRID ROOM', 'One display plus optional VR', 'Best long-term flexibility', 'Highest total spend'],
        ],
        footer: 'Racing, flight, space, marine, and golf do not reward the same display choice. Start with the game you play weekly.',
      },
    ],
  },
  {
    slug: 'sim-rig-buyer-map-2026',
    bay: 'racing',
    label: 'Racing build order',
    title: 'Best Sim Racing Rig 2026',
    author: 'DUKE ALVAREZ',
    accent: '#ff5e1a',
    scene: '/images/curator-scenes/best-of-2026/duke-rig-flex-torque-check.webp',
    alt: 'Duke Alvarez torque-checking a sim racing pedal deck while a driver loads the brake and a dial indicator measures cockpit flex',
    diagrams: [
      {
        id: 'racing-rig-buy-order-2026',
        eyebrow: 'THE LAP-TIME ORDER',
        title: 'Rigidity and braking come before torque theater.',
        cards: [
          ['1 · POSITION', 'Seat, wheel, pedals repeat', 'No chair roll', 'No desk wobble'],
          ['2 · BRAKE', 'Load cell on a stiff deck', 'Tune force to your leg', 'Add heel support'],
          ['3 · SIGNAL', '5.5-12 Nm direct drive', 'Leave clipping headroom', 'Choose ecosystem'],
          ['4 · IMMERSION', 'Correct FOV, then tactile', 'Add shifter by discipline', 'Motion comes last'],
        ],
        footer: 'A stronger base only makes a weak frame tell the truth louder.',
      },
      {
        id: 'racing-rig-budget-ladder-2026',
        eyebrow: 'THREE HONEST CARTS',
        title: 'Spend where the next upgrade will not replace it.',
        cards: [
          ['$700-$1,000', 'G923 or entry DD', 'Wheel stand / used seat', 'Brake upgrade first'],
          ['$1,500-$2,500', 'MOZA R5-class DD', 'Victory / Trophy cockpit', 'Load-cell pedals'],
          ['$3,500-$6,000', '9-12 Nm ecosystem', 'Aluminum profile rig', 'Triples / 32:9 + tactile'],
          ['SKIP FOR NOW', '20+ Nm bragging rights', 'Full motion', 'Decorative dashboards'],
        ],
        footer: 'Buy once on the frame, brake, and monitor mount. Those are the parts that make the next wheelbase better.',
      },
    ],
  },
  {
    slug: 'best-flight-sim-hardware-2026',
    bay: 'flight',
    label: 'Flight controls ranked',
    title: 'Best Flight Sim Hardware 2026',
    author: 'VAL CHEN',
    accent: '#38bdf8',
    scene: '/images/curator-scenes/best-of-2026/val-flight-approach-instruction.webp',
    alt: 'Val Chen instructing a pilot during a bright general-aviation simulator approach with yoke, throttle quadrant, pedals, checklist, and powered USB',
    diagrams: [
      {
        id: 'flight-control-language-2026',
        eyebrow: 'NAME THE AIRCRAFT FIRST',
        title: 'The correct first control depends on what you fly.',
        cards: [
          ['GENERAL AVIATION', 'Yoke + six-lever quadrant', 'Pedals next', 'Head tracking later'],
          ['AIRBUS', 'Sidestick + detent throttle', 'Rudder after habit', 'Panels only when earned'],
          ['BOEING', 'Pendular yoke + quadrant', 'Desk depth matters', 'Console compatibility check'],
          ['COMBAT', 'HOTAS + pedals', 'Mounts before panels', 'Export per-aircraft binds'],
        ],
        footer: 'A great Cessna yoke is still the wrong A320 control.',
      },
      {
        id: 'flight-commissioning-order-2026',
        eyebrow: 'THE FIRST EVENING',
        title: 'Commission one device at a time and keep the known-good state.',
        cards: [
          ['POWER', 'Direct USB for first test', 'Powered hub for the stack', 'Label every port'],
          ['CALIBRATE', 'Windows raw axes first', 'Neutral curves', 'No duplicate bindings'],
          ['FLY', 'One default aircraft', 'Taxi, trim, flare', 'Test autopilot release'],
          ['BACK UP', 'Export profile', 'Photograph labels', 'Date firmware notes'],
        ],
        footer: 'The premium yoke is innocent until the passive hub is questioned.',
      },
    ],
  },
  {
    slug: 'best-space-sim-controllers-2026',
    bay: 'space',
    label: 'Space control language',
    title: 'Best Space Sim Controllers 2026',
    author: 'VAL CHEN',
    accent: '#d946ef',
    scene: '/images/curator-scenes/best-of-2026/val-hosas-mount-install.webp',
    alt: 'Val Chen installing two correctly scaled HOSAS controls on metal desk mounts in a bright spacecraft-inspired workshop',
    diagrams: [
      {
        id: 'space-hosas-hotas-picker-2026',
        eyebrow: 'WHAT DOES THE LEFT HAND DO?',
        title: 'HOSAS for translation. HOTAS for thrust habit.',
        cards: [
          ['DOGFIGHT / EVA', 'Dual-stick HOSAS', 'Left hand owns strafe', 'Pedals optional'],
          ['HAUL / EXPLORE', 'HOTAS is comfortable', 'Throttle owns cruise', 'Add ministick strafe'],
          ['CROSSOVER PILOT', 'HOTAS + pedals', 'Works in DCS / MSFS', 'Accept weaker 6DoF'],
          ['TRY IT CHEAP', 'T.16000M pair', 'Learn the control language', 'Upgrade mounts first'],
        ],
        footer: 'Do not buy a throttle because it looks more serious if the ship needs a second stick.',
      },
      {
        id: 'space-binding-survival-2026',
        eyebrow: 'PATCH-DAY INSURANCE',
        title: 'A control map is only good if you can recover it.',
        cards: [
          ['MAP', 'Flight and landing first', 'Combat / career second', 'Modifiers stay visible'],
          ['MOUNT', 'Match elbow height', 'Test full deflection', 'Route one service loop'],
          ['EXPORT', 'Save profiles and device order', 'Photograph labels', 'Date the backup'],
          ['RESTORE', 'Verify USB identity', 'Test six axes', 'Add macros last'],
        ],
        footer: 'Bind for stress, route for sleep, and never rebuild eighty controls from memory.',
      },
    ],
  },
  {
    slug: 'best-marine-sim-gear-2026',
    bay: 'marine',
    label: 'Marine control reality',
    title: 'Best Marine Sim Gear 2026',
    author: 'GUS CALDER',
    accent: '#2dd4bf',
    scene: '/images/curator-scenes/best-of-2026/gus-twin-engine-calibration.webp',
    alt: 'Gus Calder calibrating a realistic DIY twin-engine throttle and wheel with a builder in a bright marine simulator bridge',
    diagrams: [
      {
        id: 'marine-control-stack-2026',
        eyebrow: 'NO CONSUMER BOAT AISLE',
        title: 'Prove the axis, then give the borrowed hardware a new job.',
        cards: [
          ['SOFTWARE GATE', 'Check analog support', 'Find axis names', 'Test inversion and range'],
          ['CHEAP PROOF', 'Flight quadrant as engines', 'Wheel or stick as rudder', 'Map buttons visibly'],
          ['BETTER BRIDGE', 'Separate port / starboard', 'Repeatable neutral', 'Add bow thruster'],
          ['DIY ENDGAME', 'USB interface + sensors', 'Hard stops + strain relief', 'Document calibration'],
        ],
        footer: 'If the simulator will not expose an axis, premium hardware cannot negotiate with it.',
      },
      {
        id: 'marine-axis-commissioning-2026',
        eyebrow: 'DOCKING TEST',
        title: 'Three positions reveal whether the whole bridge is trustworthy.',
        cards: [
          ['FULL ASTERN', 'Both engines independent', 'No crossed channels', 'View remains still'],
          ['NEUTRAL', 'Stable dead zone', 'No creeping RPM', 'Physical detent aligns'],
          ['FULL AHEAD', 'Equal maximum range', 'Curves remain smooth', 'No USB dropout'],
          ['ASYMMETRIC', 'Port ahead / starboard astern', 'Rudder centered', 'Practice pivot turn'],
        ],
        footer: 'A beautiful throttle with crossed engines is still a sculpture.',
      },
    ],
  },
  {
    slug: 'best-golf-simulators-2026',
    bay: 'golf',
    label: 'Complete room builds',
    title: 'Best Home Golf Simulators 2026',
    author: 'NINA BROOKS',
    accent: '#eab308',
    scene: '/images/curator-scenes/best-of-2026/nina-radar-room-commission.webp',
    alt: 'Nina Brooks laser-measuring a bright golf simulator room while a player checks swing clearance and a radar monitor sits at correct depth',
    diagrams: [
      {
        id: 'golf-room-first-picker-2026',
        eyebrow: 'THE ROOM GETS VETO POWER',
        title: 'Depth decides radar. Width decides handedness. Height decides joy.',
        cards: [
          ['SHALLOW ROOM', 'Side-of-ball camera', 'Photometric monitor', 'Protect service access'],
          ['DEEP GARAGE', 'Radar or fusion works', 'Mark sensor-to-ball distance', 'Control lighting'],
          ['LEFT + RIGHT', 'Widen hitting zone', 'Center the mat and screen', 'Avoid fixed side sensor'],
          ['LOW CEILING', 'Dry-swing every player', 'Build an iron room if needed', 'Do not edit the swing'],
        ],
        footer: 'The shopping cart is not allowed to vote before the tape measure.',
      },
      {
        id: 'golf-complete-build-ladder-2026',
        eyebrow: 'THE REAL CART',
        title: 'The launch monitor is only the brain; budget the whole body.',
        cards: [
          ['$1,200-$2,000', 'Garmin R10 + net', 'Joint-safe hitting strip', 'Phone / tablet display'],
          ['$3,000-$6,000', 'MLM2PRO / camera monitor', 'Enclosure + 1080p short throw', 'Software subscription'],
          ['$7,000-$12,000', 'ST MAX / Launch Pro class', 'Premium screen + mat', 'Dedicated PC + laser projector'],
          ['$15,000+', 'R50 / premium camera', 'Finished room and protection', 'Service and upgrade access'],
        ],
        footer: 'Price three years of software, then refuse to cheap out on the mat or safety enclosure.',
      },
    ],
  },
];

function esc(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&apos;',
  }[char]));
}

function wrap(text, max = 28) {
  const words = String(text).split(/\s+/);
  const lines = [];
  let line = '';
  for (const word of words) {
    if (line && `${line} ${word}`.length > max) {
      lines.push(line);
      line = word;
    } else {
      line = `${line} ${word}`.trim();
    }
  }
  if (line) lines.push(line);
  return lines;
}

function textBlock(text, x, y, size, max, weight, fill, lineHeight = 1.15) {
  return wrap(text, max).map((line, index) => (
    `<text x="${x}" y="${y + index * size * lineHeight}" font-family="Arial, Helvetica, sans-serif" font-size="${size}" font-weight="${weight}" fill="${fill}">${esc(line)}</text>`
  )).join('');
}

function desktopDiagram(guide, diagram) {
  const cards = diagram.cards.map((card, index) => {
    const x = 54 + index * 332;
    const [heading, ...items] = card;
    return `<g>
      <rect x="${x}" y="300" width="306" height="360" rx="16" fill="#f8fbfc" stroke="${guide.accent}" stroke-width="4"/>
      <rect x="${x}" y="300" width="306" height="72" rx="16" fill="${guide.accent}"/>
      ${textBlock(heading, x + 22, 345, 24, 22, 900, '#07131b')}
      ${items.map((item, i) => `<circle cx="${x + 26}" cy="${416 + i * 64}" r="6" fill="${guide.accent}"/>${textBlock(item, x + 44, 424 + i * 64, 22, 23, 700, '#1d2a34')}`).join('')}
    </g>`;
  }).join('');

  return `<svg xmlns="http://www.w3.org/2000/svg" width="1400" height="820" viewBox="0 0 1400 820">
    <defs>
      <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#07131b"/><stop offset="1" stop-color="#193440"/></linearGradient>
      <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse"><path d="M48 0H0V48" fill="none" stroke="#fff" stroke-opacity=".055"/></pattern>
    </defs>
    <rect width="1400" height="820" fill="url(#bg)"/><rect width="1400" height="820" fill="url(#grid)"/>
    <rect x="54" y="54" width="12" height="198" fill="${guide.accent}"/>
    ${textBlock(diagram.eyebrow, 92, 92, 19, 70, 900, guide.accent)}
    ${textBlock(diagram.title, 92, 154, 46, 49, 900, '#fff', 1.04)}
    ${cards}
    <rect x="54" y="704" width="1290" height="66" rx="12" fill="#fff" fill-opacity=".1" stroke="#fff" stroke-opacity=".16"/>
    ${textBlock(diagram.footer, 84, 745, 23, 101, 650, '#e5eef0')}
    <text x="1338" y="798" text-anchor="end" font-family="Arial, Helvetica, sans-serif" font-size="15" font-weight="900" fill="${guide.accent}">IGNITIONSIM · 2026 FIELD MAP</text>
  </svg>`;
}

function mobileDiagram(guide, diagram) {
  const cards = diagram.cards.map((card, index) => {
    const y = 350 + index * 184;
    const [heading, ...items] = card;
    return `<g>
      <rect x="42" y="${y}" width="816" height="158" rx="16" fill="#f8fbfc" stroke="${guide.accent}" stroke-width="4"/>
      <rect x="42" y="${y}" width="250" height="158" rx="16" fill="${guide.accent}"/>
      ${textBlock(heading, 66, y + 54, 25, 15, 900, '#07131b')}
      ${items.map((item, i) => `<circle cx="326" cy="${y + 43 + i * 42}" r="5" fill="${guide.accent}"/>${textBlock(item, 344, y + 51 + i * 42, 21, 40, 700, '#1d2a34')}`).join('')}
    </g>`;
  }).join('');

  return `<svg xmlns="http://www.w3.org/2000/svg" width="900" height="1200" viewBox="0 0 900 1200">
    <defs>
      <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#07131b"/><stop offset="1" stop-color="#193440"/></linearGradient>
      <pattern id="grid" width="42" height="42" patternUnits="userSpaceOnUse"><path d="M42 0H0V42" fill="none" stroke="#fff" stroke-opacity=".055"/></pattern>
    </defs>
    <rect width="900" height="1200" fill="url(#bg)"/><rect width="900" height="1200" fill="url(#grid)"/>
    <rect x="42" y="42" width="11" height="250" fill="${guide.accent}"/>
    ${textBlock(diagram.eyebrow, 78, 84, 18, 46, 900, guide.accent)}
    ${textBlock(diagram.title, 78, 148, 42, 29, 900, '#fff', 1.05)}
    ${cards}
    <rect x="42" y="1090" width="816" height="76" rx="12" fill="#fff" fill-opacity=".1" stroke="#fff" stroke-opacity=".16"/>
    ${textBlock(diagram.footer, 66, 1127, 19, 76, 650, '#e5eef0')}
  </svg>`;
}

function coverOverlay(guide, width, height, vertical = false) {
  const panelY = vertical ? 925 : 430;
  const panelH = vertical ? 360 : 200;
  const titleSize = vertical ? 64 : 48;
  const titleMax = vertical ? 25 : 38;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">
    <defs><linearGradient id="shade" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#07131b" stop-opacity=".04"/><stop offset=".48" stop-color="#07131b" stop-opacity=".12"/><stop offset="1" stop-color="#07131b" stop-opacity=".92"/></linearGradient></defs>
    <rect width="${width}" height="${height}" fill="url(#shade)"/>
    <rect x="0" y="${panelY}" width="${width}" height="${panelH}" fill="#07131b" fill-opacity=".76"/>
    <rect x="54" y="${panelY + 34}" width="10" height="${vertical ? 252 : 132}" fill="${guide.accent}"/>
    <text x="86" y="${panelY + 62}" font-family="Arial, Helvetica, sans-serif" font-size="${vertical ? 21 : 17}" font-weight="900" fill="${guide.accent}">${esc(guide.label.toUpperCase())}</text>
    ${textBlock(guide.title, 86, panelY + 122, titleSize, titleMax, 900, '#fff', 1.02)}
    <text x="${width - 54}" y="${height - 34}" text-anchor="end" font-family="Arial, Helvetica, sans-serif" font-size="${vertical ? 20 : 16}" font-weight="900" fill="#fff">${guide.author} · IGNITIONSIM</text>
  </svg>`;
}

async function makeCover(guide, out, width, height, vertical = false) {
  await sharp(path.join(publicDir, guide.scene.slice(1)))
    .resize(width, height, { fit: 'cover', position: 'attention' })
    .composite([{ input: Buffer.from(coverOverlay(guide, width, height, vertical)) }])
    .webp({ quality: 88 })
    .toFile(out);
}

for (const guide of guides) {
  const dir = path.join(publicDir, 'images/infographics', guide.bay);
  fs.mkdirSync(dir, { recursive: true });
  for (const diagram of guide.diagrams) {
    fs.writeFileSync(path.join(dir, `${diagram.id}.svg`), desktopDiagram(guide, diagram));
    fs.writeFileSync(path.join(dir, `${diagram.id}-mobile.svg`), mobileDiagram(guide, diagram));
  }

  await makeCover(guide, path.join(publicDir, 'images/generated/article-covers', `${guide.slug}.webp`), 1200, 675);
  await makeCover(guide, path.join(publicDir, 'images/generated/social', `${guide.slug}.webp`), 1200, 630);
  await makeCover(guide, path.join(publicDir, 'images/generated/vertical', `${guide.slug}.webp`), 1080, 1350, true);
}

const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
for (const guide of guides) {
  manifest[guide.slug] = {
    image: `/images/generated/article-covers/${guide.slug}.webp`,
    alt: guide.alt,
    label: guide.label,
    wide: true,
  };
}
fs.writeFileSync(
  manifestPath,
  `${JSON.stringify(Object.fromEntries(Object.entries(manifest).sort(([a], [b]) => a.localeCompare(b))), null, 2)}\n`,
);

console.log(`Built ${guides.length * 4} responsive diagrams and ${guides.length * 3} share images.`);
