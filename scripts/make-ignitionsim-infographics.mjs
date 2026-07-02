import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const root = process.cwd();
const outRoot = path.join(root, 'public/images/infographics');
const publicRoot = path.join(root, 'public');

const themes = {
  racing: { accent: '#ff5a1f', soft: '#fff3ec', dark: '#15120f' },
  golf: { accent: '#168f55', soft: '#ecfff5', dark: '#0e1813' },
  flight: { accent: '#2563eb', soft: '#edf5ff', dark: '#101827' },
  space: { accent: '#7c3aed', soft: '#f4efff', dark: '#151026' },
};

const esc = (value) => String(value).replace(/[&<>"']/g, (ch) => ({
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&apos;',
}[ch]));

const wrap = (text, max = 30) => {
  const words = String(text).split(/\s+/);
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
  return lines.slice(0, 4);
};

const textBlock = (text, x, y, size, color, max = 30, weight = 700) =>
  wrap(text, max).map((line, i) =>
    `<text x="${x}" y="${y + i * (size + 7)}" font-family="Inter, Arial, sans-serif" font-size="${size}" font-weight="${weight}" fill="${color}">${esc(line)}</text>`
  ).join('');

const makeLadder = ({ bay, title, kicker, file, steps, footer }) => {
  const t = themes[bay];
  const cardW = 285;
  const gap = 22;
  const startX = 70;
  const cards = steps.map((step, i) => {
    const x = startX + i * (cardW + gap);
    const top = 305 + (i % 2) * 54;
    return `
      <rect x="${x}" y="${top}" width="${cardW}" height="270" rx="28" fill="#ffffff" stroke="${t.accent}" stroke-width="3"/>
      <circle cx="${x + 48}" cy="${top + 52}" r="24" fill="${t.accent}"/>
      <text x="${x + 38}" y="${top + 61}" font-family="Inter, Arial, sans-serif" font-size="25" font-weight="900" fill="#ffffff">${i + 1}</text>
      ${textBlock(step.label, x + 32, top + 110, 27, t.dark, 18, 900)}
      ${textBlock(step.body, x + 32, top + 178, 19, '#475569', 27, 600)}
    `;
  }).join('');
  return writeSvg(file, `
    <svg width="1600" height="1000" xmlns="http://www.w3.org/2000/svg">
      <rect width="1600" height="1000" fill="${t.soft}"/>
      <path d="M0 150 C330 80 460 220 760 150 C1030 90 1220 180 1600 95 L1600 0 L0 0 Z" fill="#ffffff"/>
      <text x="70" y="130" font-family="Inter, Arial, sans-serif" font-size="28" font-weight="900" letter-spacing="4" fill="${t.accent}">${esc(kicker)}</text>
      ${textBlock(title, 70, 215, 58, t.dark, 36, 900)}
      ${cards}
      <rect x="70" y="825" width="1460" height="92" rx="26" fill="${t.dark}"/>
      ${textBlock(footer, 105, 878, 28, '#ffffff', 82, 800)}
    </svg>
  `);
};

const makeGrid = ({ bay, title, kicker, file, blocks, footer }) => {
  const t = themes[bay];
  const cols = 2;
  const w = 685;
  const h = 225;
  const cards = blocks.map((block, i) => {
    const x = 80 + (i % cols) * 735;
    const y = 290 + Math.floor(i / cols) * 255;
    return `
      <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="26" fill="#ffffff" stroke="#dbe3ec" stroke-width="2"/>
      <rect x="${x}" y="${y}" width="12" height="${h}" rx="6" fill="${t.accent}"/>
      ${textBlock(block.label, x + 42, y + 58, 30, t.dark, 26, 900)}
      ${textBlock(block.body, x + 42, y + 122, 21, '#475569', 54, 600)}
    `;
  }).join('');
  return writeSvg(file, `
    <svg width="1600" height="1000" xmlns="http://www.w3.org/2000/svg">
      <rect width="1600" height="1000" fill="${t.soft}"/>
      <text x="80" y="110" font-family="Inter, Arial, sans-serif" font-size="28" font-weight="900" letter-spacing="4" fill="${t.accent}">${esc(kicker)}</text>
      ${textBlock(title, 80, 195, 58, t.dark, 38, 900)}
      ${cards}
      <rect x="80" y="860" width="1440" height="78" rx="24" fill="${t.dark}"/>
      ${textBlock(footer, 115, 909, 25, '#ffffff', 86, 800)}
    </svg>
  `);
};

const makeRoom = ({ bay, title, kicker, file, labels, footer }) => {
  const t = themes[bay];
  return writeSvg(file, `
    <svg width="1600" height="1000" xmlns="http://www.w3.org/2000/svg">
      <rect width="1600" height="1000" fill="${t.soft}"/>
      <text x="80" y="110" font-family="Inter, Arial, sans-serif" font-size="28" font-weight="900" letter-spacing="4" fill="${t.accent}">${esc(kicker)}</text>
      ${textBlock(title, 80, 195, 58, t.dark, 38, 900)}
      <rect x="220" y="315" width="1160" height="455" rx="24" fill="#ffffff" stroke="${t.dark}" stroke-width="6"/>
      <rect x="270" y="365" width="220" height="355" rx="20" fill="${t.accent}" opacity=".16" stroke="${t.accent}" stroke-width="4"/>
      <rect x="685" y="420" width="230" height="250" rx="20" fill="#f8fafc" stroke="#94a3b8" stroke-width="4"/>
      <rect x="1110" y="360" width="190" height="365" rx="20" fill="${t.accent}" opacity=".12" stroke="${t.accent}" stroke-width="4"/>
      <line x1="490" y1="540" x2="685" y2="540" stroke="${t.dark}" stroke-width="5" stroke-dasharray="14 14"/>
      <line x1="915" y1="540" x2="1110" y2="540" stroke="${t.dark}" stroke-width="5" stroke-dasharray="14 14"/>
      ${textBlock(labels.left, 292, 548, 30, t.dark, 16, 900)}
      ${textBlock(labels.center, 720, 548, 30, t.dark, 16, 900)}
      ${textBlock(labels.right, 1140, 548, 30, t.dark, 16, 900)}
      <text x="520" y="514" font-family="Inter, Arial, sans-serif" font-size="24" font-weight="900" fill="${t.dark}">${esc(labels.depthA)}</text>
      <text x="943" y="514" font-family="Inter, Arial, sans-serif" font-size="24" font-weight="900" fill="${t.dark}">${esc(labels.depthB)}</text>
      <rect x="80" y="830" width="1440" height="112" rx="24" fill="${t.dark}"/>
      ${textBlock(footer, 115, 879, 24, '#ffffff', 78, 800)}
    </svg>
  `);
};

const makeProjectorThrowMap = ({ file }) => writeSvg(file, `
  <svg width="1600" height="1000" xmlns="http://www.w3.org/2000/svg">
    <rect width="1600" height="1000" fill="#ecfff5"/>
    <rect x="76" y="78" width="1448" height="844" rx="34" fill="#ffffff" stroke="#168f55" stroke-width="4"/>
    <text x="112" y="145" font-family="Inter, Arial, sans-serif" font-size="28" font-weight="900" letter-spacing="4" fill="#168f55">PROJECTOR THROW MATH</text>
    ${textBlock('Screen width decides where the projector can live', 112, 225, 58, '#0e1813', 38, 900)}
    <rect x="116" y="360" width="1120" height="430" rx="18" fill="#f8fafc" stroke="#0e1813" stroke-width="5"/>
    <rect x="156" y="402" width="240" height="346" rx="12" fill="#d9f99d" stroke="#168f55" stroke-width="4"/>
    <text x="190" y="584" font-family="Inter, Arial, sans-serif" font-size="32" font-weight="900" fill="#0e1813">SCREEN</text>
    <rect x="545" y="535" width="140" height="88" rx="18" fill="#0e1813"/>
    <circle cx="666" cy="579" r="28" fill="#74d38d"/>
    <text x="520" y="665" font-family="Inter, Arial, sans-serif" font-size="26" font-weight="900" fill="#0e1813">0.50 THROW</text>
    <text x="500" y="700" font-family="Inter, Arial, sans-serif" font-size="22" font-weight="700" fill="#475569">10 ft screen = 5 ft mount</text>
    <rect x="975" y="535" width="140" height="88" rx="18" fill="#0e1813" opacity=".72"/>
    <circle cx="1096" cy="579" r="28" fill="#facc15"/>
    <text x="930" y="665" font-family="Inter, Arial, sans-serif" font-size="26" font-weight="900" fill="#0e1813">0.90 THROW</text>
    <text x="904" y="700" font-family="Inter, Arial, sans-serif" font-size="22" font-weight="700" fill="#475569">10 ft screen = 9 ft mount</text>
    <line x1="396" y1="578" x2="545" y2="578" stroke="#168f55" stroke-width="8" stroke-dasharray="18 16"/>
    <line x1="396" y1="618" x2="975" y2="618" stroke="#d97706" stroke-width="8" stroke-dasharray="18 16"/>
    <path d="M620 496 L430 422 L430 735 L620 662 Z" fill="#168f55" opacity=".16"/>
    <path d="M1048 496 L430 422 L430 735 L1048 662 Z" fill="#d97706" opacity=".12"/>
    <rect x="1270" y="372" width="188" height="350" rx="22" fill="#0e1813"/>
    <text x="1300" y="444" font-family="Inter, Arial, sans-serif" font-size="33" font-weight="900" fill="#ffffff">FORMULA</text>
    <text x="1300" y="510" font-family="Inter, Arial, sans-serif" font-size="28" font-weight="900" fill="#74d38d">throw</text>
    <text x="1300" y="550" font-family="Inter, Arial, sans-serif" font-size="28" font-weight="900" fill="#74d38d">ratio</text>
    <text x="1300" y="610" font-family="Inter, Arial, sans-serif" font-size="26" font-weight="800" fill="#ffffff">x screen</text>
    <text x="1300" y="648" font-family="Inter, Arial, sans-serif" font-size="26" font-weight="800" fill="#ffffff">width</text>
    <text x="1300" y="704" font-family="Inter, Arial, sans-serif" font-size="27" font-weight="900" fill="#facc15">= mount</text>
    <text x="1300" y="742" font-family="Inter, Arial, sans-serif" font-size="27" font-weight="900" fill="#facc15">distance</text>
    <rect x="112" y="835" width="1376" height="62" rx="20" fill="#0e1813"/>
    <text x="148" y="875" font-family="Inter, Arial, sans-serif" font-size="24" font-weight="900" fill="#ffffff">Nina rule: calculate this before reviews, sales, or 4K lust enter the room.</text>
  </svg>
`);

const makeProjectorShadowTrap = ({ file }) => writeSvg(file, `
  <svg width="1600" height="1000" xmlns="http://www.w3.org/2000/svg">
    <rect width="1600" height="1000" fill="#fff7ed"/>
    <text x="86" y="115" font-family="Inter, Arial, sans-serif" font-size="28" font-weight="900" letter-spacing="4" fill="#c2410c">SHADOW TRAP</text>
    ${textBlock('The wrong mount makes a beautiful projector look broken', 86, 198, 58, '#111827', 36, 900)}
    <rect x="86" y="310" width="680" height="520" rx="32" fill="#ffffff" stroke="#ef4444" stroke-width="5"/>
    <rect x="834" y="310" width="680" height="520" rx="32" fill="#ffffff" stroke="#168f55" stroke-width="5"/>
    <text x="130" y="376" font-family="Inter, Arial, sans-serif" font-size="32" font-weight="900" fill="#ef4444">BAD: behind the golfer</text>
    <text x="878" y="376" font-family="Inter, Arial, sans-serif" font-size="32" font-weight="900" fill="#168f55">GOOD: ahead of the swing</text>
    <rect x="144" y="466" width="130" height="235" rx="16" fill="#d9f99d" stroke="#111827" stroke-width="4"/>
    <rect x="1074" y="466" width="130" height="235" rx="16" fill="#d9f99d" stroke="#111827" stroke-width="4"/>
    <text x="164" y="586" font-family="Inter, Arial, sans-serif" font-size="26" font-weight="900" fill="#111827">SCREEN</text>
    <text x="1094" y="586" font-family="Inter, Arial, sans-serif" font-size="26" font-weight="900" fill="#111827">SCREEN</text>
    <circle cx="516" cy="596" r="38" fill="#111827"/>
    <rect x="488" y="636" width="56" height="120" rx="24" fill="#111827"/>
    <line x1="516" y1="650" x2="450" y2="716" stroke="#111827" stroke-width="16" stroke-linecap="round"/>
    <line x1="516" y1="650" x2="604" y2="704" stroke="#111827" stroke-width="16" stroke-linecap="round"/>
    <line x1="516" y1="650" x2="664" y2="496" stroke="#111827" stroke-width="12" stroke-linecap="round"/>
    <rect x="626" y="430" width="82" height="54" rx="14" fill="#0e1813"/>
    <path d="M626 456 L276 488 L276 690 L626 484 Z" fill="#ef4444" opacity=".18"/>
    <line x1="620" y1="642" x2="275" y2="565" stroke="#ef4444" stroke-width="10" stroke-dasharray="18 14"/>
    ${textBlock('Your body crosses the beam. Every swing flickers the course.', 136, 770, 22, '#475569', 42, 800)}
    <circle cx="1312" cy="596" r="38" fill="#111827"/>
    <rect x="1284" y="636" width="56" height="120" rx="24" fill="#111827"/>
    <line x1="1312" y1="650" x2="1248" y2="716" stroke="#111827" stroke-width="16" stroke-linecap="round"/>
    <line x1="1312" y1="650" x2="1402" y2="704" stroke="#111827" stroke-width="16" stroke-linecap="round"/>
    <line x1="1312" y1="650" x2="1446" y2="498" stroke="#111827" stroke-width="12" stroke-linecap="round"/>
    <rect x="905" y="430" width="82" height="54" rx="14" fill="#0e1813"/>
    <path d="M987 456 L1074 488 L1074 690 L987 484 Z" fill="#168f55" opacity=".18"/>
    <line x1="988" y1="642" x2="1074" y2="565" stroke="#168f55" stroke-width="10" stroke-dasharray="18 14"/>
    ${textBlock('Short throw near the screen keeps the beam out of the swing path.', 884, 770, 22, '#475569', 43, 800)}
    <rect x="86" y="875" width="1428" height="62" rx="20" fill="#111827"/>
    <text x="124" y="915" font-family="Inter, Arial, sans-serif" font-size="24" font-weight="900" fill="#ffffff">Ladder test before drilling: stand where the lens will sit, then swing slowly with a club.</text>
  </svg>
`);

async function makeProjectorCover() {
  const width = 1600;
  const height = 900;
  const bg = await sharp(path.join(publicRoot, 'images/worlds/golf-world.webp'))
    .resize(width, height, { fit: 'cover' })
    .modulate({ saturation: 1.08, brightness: 0.78 })
    .toBuffer();
  const product = await sharp(path.join(publicRoot, 'images/gear/golf/benq-ak700st.jpg'))
    .resize(760, 480, { fit: 'contain', background: '#ffffff' })
    .flatten({ background: '#ffffff' })
    .jpeg({ quality: 90 })
    .toBuffer();
  const overlay = Buffer.from(`
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="shade" x1="0" x2="1">
          <stop offset="0%" stop-color="#07130d" stop-opacity=".94"/>
          <stop offset="58%" stop-color="#07130d" stop-opacity=".54"/>
          <stop offset="100%" stop-color="#07130d" stop-opacity=".12"/>
        </linearGradient>
      </defs>
      <rect width="${width}" height="${height}" fill="url(#shade)"/>
      <rect x="84" y="72" width="132" height="8" rx="4" fill="#74d38d"/>
      <text x="84" y="142" font-family="Inter, Arial, sans-serif" font-size="25" font-weight="900" letter-spacing="5" fill="#74d38d">GOLF PROJECTOR GUIDE</text>
      <text x="84" y="252" font-family="Saira, Arial Black, Arial, sans-serif" font-size="76" font-weight="900" fill="#ffffff">Best Golf</text>
      <text x="84" y="333" font-family="Saira, Arial Black, Arial, sans-serif" font-size="76" font-weight="900" fill="#ffffff">Simulator</text>
      <text x="84" y="414" font-family="Saira, Arial Black, Arial, sans-serif" font-size="76" font-weight="900" fill="#ffffff">Projectors</text>
      <text x="88" y="480" font-family="Inter, Arial, sans-serif" font-size="28" font-weight="800" fill="#d9f99d">BenQ AK700ST, AH700ST, LK936ST,</text>
      <text x="88" y="520" font-family="Inter, Arial, sans-serif" font-size="28" font-weight="800" fill="#d9f99d">and Optoma GT2100HDR</text>
      <rect x="88" y="586" width="540" height="72" rx="18" fill="#ffffff" opacity=".92"/>
      <text x="116" y="632" font-family="Inter, Arial, sans-serif" font-size="25" font-weight="900" fill="#0e1813">Throw ratio first. Shadows never.</text>
      <rect x="746" y="150" width="748" height="570" rx="38" fill="#ffffff" stroke="#d9f99d" stroke-width="4"/>
      <rect x="812" y="735" width="612" height="66" rx="20" fill="#0e1813"/>
      <text x="846" y="777" font-family="Inter, Arial, sans-serif" font-size="24" font-weight="900" fill="#ffffff">Real product photo: BenQ AK700ST</text>
    </svg>
  `);
  const out = path.join(publicRoot, 'images/golf/golf-simulator-projector-guide.jpg');
  await sharp({ create: { width, height, channels: 3, background: '#0e1813' } })
    .composite([
      { input: bg, left: 0, top: 0 },
      { input: overlay, left: 0, top: 0 },
      { input: product, left: 740, top: 198 },
    ])
    .jpeg({ quality: 90, mozjpeg: true })
    .toFile(out);
  console.log('+ /images/golf/golf-simulator-projector-guide.jpg');
}

async function writeSvg(file, svg) {
  const out = path.join(outRoot, file);
  await fs.mkdir(path.dirname(out), { recursive: true });
  await sharp(Buffer.from(svg)).png().toFile(out);
  console.log(`+ /images/infographics/${file}`);
}

await makeProjectorCover();

await makeProjectorThrowMap({
  file: 'golf/projector-throw-ratio-map.png',
});

await makeProjectorShadowTrap({
  file: 'golf/projector-shadow-trap.png',
});

await makeLadder({
  bay: 'golf',
  file: 'golf/projector-buy-ladder-2026.png',
  kicker: 'PROJECTOR BUY LADDER',
  title: 'Pick by room depth, then image ambition',
  steps: [
    { label: 'Tight budget', body: 'Optoma GT2100HDR if 1080p and tight throw solve the room.' },
    { label: 'Value golf', body: 'BenQ AH700ST for bright 1080p and golf-specific setup tools.' },
    { label: 'Default 4K', body: 'BenQ AK700ST for 4K without custom-install drama.' },
      { label: 'Showpiece', body: 'BenQ LK936ST for 4K, lens shift, and premium rooms.' },
      { label: 'Skip now', body: 'Net-only practice? Buy monitor and mat first.' },
  ],
  footer: 'Geometry first. A pretty picture loses if the lens sits in your swing.',
});

await makeGrid({
  bay: 'flight',
  file: 'flight/msfs-usb-sanity-map.png',
  kicker: 'MSFS BUILD MAP',
  title: 'USB sanity before panel spending',
  blocks: [
    { label: 'Powered hub', body: 'Use a powered hub for panels and accessories. Passive splitters are how cockpits become haunted tech support.' },
    { label: 'Direct ports', body: 'Put the most sensitive controls on stable ports first: yoke, throttle, rudders, head tracker.' },
    { label: 'Label everything', body: 'Tiny labels beat future rage. Firmware updates and wake bugs are easier when cables have names.' },
    { label: 'Sleep settings', body: 'Disable selective suspend if devices vanish after idle. Test before cable management gets permanent.' },
  ],
  footer: 'The cheapest reliability upgrade is boring cable discipline.',
});

await makeLadder({
  bay: 'flight',
  file: 'flight/control-priority-map.png',
  kicker: 'CONTROL ORDER',
  title: 'Buy the controls you touch every flight',
  steps: [
    { label: 'Yoke or stick', body: 'Match aircraft first: GA yoke, Airbus stick, combat HOTAS.' },
    { label: 'Throttle', body: 'Power control removes the most mouse work after primary axes.' },
    { label: 'Rudders', body: 'Taxi, crosswinds, helicopters, taildraggers, and discipline.' },
    { label: 'Head tracking', body: 'More situational awareness than another pretty panel.' },
    { label: 'Panels', body: 'Buy after your aircraft habit is real, not aspirational.' },
  ],
  footer: 'Workflow beats cockpit cosplay. Buy what your hands use constantly.',
});

await makeGrid({
  bay: 'flight',
  file: 'flight/pilot-type-buy-map.png',
  kicker: 'PILOT TYPE MAP',
  title: 'Different aircraft deserve different first buys',
  blocks: [
    { label: 'GA and bush', body: 'Yoke plus throttle first. Rudders become important when taxi, crosswind, and taildragger work starts mattering.' },
    { label: 'Airliner', body: 'Throttle/autopilot workflow beats a generic yoke. Buy aircraft-specific panels only after the habit sticks.' },
    { label: 'Helicopter', body: 'Stick or cyclic, rudders, then collective. A yoke is decorative guilt for this pilot type.' },
    { label: 'Combat/DCS', body: 'HOTAS and head tracking first. Panels wait until axes, binds, and view control stop fighting you.' },
  ],
  footer: 'The right first buy is the one your aircraft makes you touch constantly.',
});

await makeGrid({
  bay: 'racing',
  file: 'racing/rigidity-flex-ladder.png',
  kicker: 'RIGIDITY TEST',
  title: 'Where sim-rig flex actually steals lap time',
  blocks: [
    { label: 'Pedal deck', body: 'If the brake plate moves under panic pressure, your muscle memory is negotiating with furniture.' },
    { label: 'Wheel uprights', body: 'High torque exposes twist. The base should move the wheel, not the cockpit.' },
    { label: 'Seat mount', body: 'A sliding seat turns load-cell pressure into comedy. Lock the driver before upgrading pedals.' },
    { label: 'Accessory arms', body: 'Shifter, handbrake, keyboard, haptics, and displays need mounting points with room to grow.' },
  ],
  footer: 'Fix flex before buying more torque. Otherwise you are tuning around the wrong problem.',
});

await makeLadder({
  bay: 'racing',
  file: 'racing/direct-drive-stop-points.png',
  kicker: 'DD STOP POINTS',
  title: 'The direct-drive ladder is about stopping, not climbing',
  steps: [
    { label: '5 Nm', body: 'Learn the hobby and beat old gear/belt wheels easily.' },
    { label: '8-12 Nm', body: 'Best stopping point for most serious drivers.' },
    { label: '15-18 Nm', body: 'Needs cockpit and pedals that deserve the force.' },
    { label: '21 Nm plus', body: 'Headroom, heavy rims, and very few excuses left.' },
    { label: 'Pedals first?', body: 'Often yes. A better brake beats a bigger number.' },
  ],
  footer: 'Torque is fun. Repeatable inputs are faster.',
});

await makeGrid({
  bay: 'racing',
  file: 'racing/tactile-wiring-map.png',
  kicker: 'TACTILE SETUP',
  title: 'Bass shaker wiring that does not eat your weekend',
  blocks: [
    { label: 'Mount solidly', body: 'A shaker needs a rigid path into the seat or frame. Loose brackets waste the signal.' },
    { label: 'Isolate the rig', body: 'Use feet or pads so the floor does not become your neighbor notification system.' },
    { label: 'Tune few effects', body: 'Start with shifts, kerbs, engine, ABS. Too many channels turns information into soup.' },
    { label: 'Strain relief', body: 'Leave cable slack and clamp the run. Motion or seat movement should not pull connectors.' },
  ],
  footer: 'Subtle tactile feels expensive. Overdriven tactile feels like broken laundry.',
});

await makeLadder({
  bay: 'racing',
  file: 'racing/immersion-upgrade-path.png',
  kicker: 'IMMERSION ORDER',
  title: 'Motion is not phase one',
  steps: [
    { label: 'Rigid cockpit', body: 'Everything else depends on a stable frame.' },
    { label: 'Seat shaker', body: 'Lowest-cost immersion with real telemetry value.' },
    { label: 'Pedal haptics', body: 'ABS and traction cues where your feet already listen.' },
    { label: 'Four-corner', body: 'Only after you can tune cleanly.' },
    { label: 'Motion', body: 'Power, safety, travel, and cable planning required.' },
  ],
  footer: 'Tactile gives information sooner. Motion is amazing after the foundation is solved.',
});

await makeLadder({
  bay: 'racing',
  file: 'racing/build-order-map.png',
  kicker: 'FIRST RIG MAP',
  title: 'The buy order that saves money',
  steps: [
    { label: 'Mount', body: 'Stable stand, cockpit, or profile frame before torque.' },
    { label: 'Pedals', body: 'Load-cell braking is the consistency jump.' },
    { label: 'Wheelbase', body: '5-12 Nm is plenty for most humans.' },
    { label: 'Display', body: 'FOV and placement beat bigger marketing numbers.' },
    { label: 'Immersion', body: 'Haptics and motion after the rig behaves.' },
  ],
  footer: 'A balanced rig beats one expensive part bolted to a weak foundation.',
});

await makeRoom({
  bay: 'golf',
  file: 'golf/golf-room-reality-map.png',
  kicker: 'ROOM REALITY',
  title: 'The golf sim room is three zones, not one purchase',
  labels: {
    left: 'Impact screen',
    center: 'Hitting mat',
    right: 'Launch monitor',
    depthA: 'ball flight / safety gap',
    depthB: 'sensor space',
  },
  footer: 'Do not buy the launch monitor until the room geometry is honest.',
});

await makeLadder({
  bay: 'golf',
  file: 'golf/launch-monitor-decision-ladder.png',
  kicker: 'LAUNCH MONITOR',
  title: 'Pick by room and setup tolerance',
  steps: [
    { label: 'No PC', body: 'Garmin R50 if convenience beats tinkering.' },
    { label: 'Tight room', body: 'Camera units beat rear radar in shallow bays.' },
    { label: 'Budget radar', body: 'R10 or MLM2PRO need depth and discipline.' },
    { label: 'Accuracy', body: 'Launch Pro or GC3 class, then count fees.' },
    { label: 'Permanent bay', body: 'Spend on mat, screen, enclosure, projector too.' },
  ],
  footer: 'The wrong monitor in the wrong room is how a simulator becomes storage.',
});

await makeGrid({
  bay: 'space',
  file: 'space/hosas-six-axis-map.png',
  kicker: 'SIX AXIS CONTROL',
  title: 'Why HOSAS makes spaceflight click',
  blocks: [
    { label: 'Right hand', body: 'Pitch, roll, yaw, weapons, targeting, and fine aim live where your brain expects steering.' },
    { label: 'Left hand', body: 'Forward, back, lateral, vertical strafe, speed limiter, and landing finesse get analog control.' },
    { label: 'Twist or pedals', body: 'Twist works early. Pedals help when yaw, roll, or ground vehicles need separation.' },
    { label: 'Mounts matter', body: 'Lower sticks reduce shoulder tension and make long sessions feel controlled instead of clenched.' },
  ],
  footer: 'Two analog hands beat aircraft-throttle habits for six-degree space combat.',
});

await makeLadder({
  bay: 'space',
  file: 'space/hosas-upgrade-ladder.png',
  kicker: 'HOSAS LADDER',
  title: 'Spend after your binds are real',
  steps: [
    { label: 'One stick', body: 'Test analog aim before buying a cockpit.' },
    { label: 'Dual VKB', body: 'Default no-regrets Star Citizen setup.' },
    { label: 'Mounts', body: 'Better posture before boutique metal.' },
    { label: 'Tracking', body: 'Free your view from hat-switch duty.' },
    { label: 'Premium', body: 'Gunfighter or Virpil after you know why.' },
  ],
  footer: 'Premium sticks are a reward for solved ergonomics, not a substitute for them.',
});

async function makePremiumLaunchMonitorCover() {
  const width = 1600;
  const height = 900;
  const bg = await sharp(path.join(publicRoot, 'images/worlds/golf-world.webp'))
    .resize(width, height, { fit: 'cover' })
    .modulate({ saturation: 1.16, brightness: 0.7 })
    .blur(1.2)
    .toBuffer();
  const products = await Promise.all([
    ['garmin-approach-r50.jpg', 500, 360],
    ['skytrak-st-max.jpg', 390, 295],
    ['bushnell-launch-pro.jpg', 390, 295],
  ].map(([file, w, h]) => sharp(path.join(publicRoot, 'images/gear/golf', file))
    .resize(w, h, { fit: 'contain', background: '#ffffff' })
    .flatten({ background: '#ffffff' })
    .jpeg({ quality: 92 })
    .toBuffer()));
  const overlay = Buffer.from(`
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="shade" x1="0" x2="1">
          <stop offset="0%" stop-color="#07130d" stop-opacity=".96"/>
          <stop offset="55%" stop-color="#07130d" stop-opacity=".70"/>
          <stop offset="100%" stop-color="#07130d" stop-opacity=".26"/>
        </linearGradient>
      </defs>
      <rect width="${width}" height="${height}" fill="url(#shade)"/>
      <path d="M0 728 C280 654 426 776 704 712 C1014 640 1252 732 1600 640 L1600 900 L0 900 Z" fill="#07130d" opacity=".72"/>
      <rect x="86" y="72" width="136" height="8" rx="4" fill="#74d38d"/>
      <text x="86" y="142" font-family="Inter, Arial, sans-serif" font-size="25" font-weight="900" letter-spacing="5" fill="#74d38d">PREMIUM LAUNCH MONITOR ROOM FIT</text>
      <text x="84" y="254" font-family="Saira, Arial Black, Arial, sans-serif" font-size="74" font-weight="900" fill="#ffffff">Garmin R50</text>
      <text x="84" y="333" font-family="Saira, Arial Black, Arial, sans-serif" font-size="74" font-weight="900" fill="#ffffff">vs SkyTrak</text>
      <text x="84" y="412" font-family="Saira, Arial Black, Arial, sans-serif" font-size="74" font-weight="900" fill="#ffffff">ST MAX</text>
      <text x="84" y="491" font-family="Saira, Arial Black, Arial, sans-serif" font-size="74" font-weight="900" fill="#ffffff">vs Launch Pro</text>
      <rect x="90" y="558" width="680" height="100" rx="22" fill="#ffffff" opacity=".94"/>
      <text x="122" y="594" font-family="Inter, Arial, sans-serif" font-size="24" font-weight="900" fill="#0e1813">The real winner is the one your room, PC tolerance,</text>
      <text x="122" y="628" font-family="Inter, Arial, sans-serif" font-size="24" font-weight="900" fill="#0e1813">and subscription patience can actually live with.</text>
      <rect x="810" y="92" width="695" height="418" rx="42" fill="#ffffff" stroke="#74d38d" stroke-width="4"/>
      <text x="1056" y="470" font-family="Inter, Arial, sans-serif" font-size="23" font-weight="900" fill="#0e1813">Garmin Approach R50</text>
      <rect x="780" y="548" width="330" height="186" rx="28" fill="#ffffff" stroke="#168f55" stroke-width="4"/>
      <rect x="1166" y="548" width="330" height="186" rx="28" fill="#ffffff" stroke="#168f55" stroke-width="4"/>
      <text x="864" y="706" font-family="Inter, Arial, sans-serif" font-size="21" font-weight="900" fill="#0e1813">SkyTrak ST MAX</text>
      <text x="1250" y="706" font-family="Inter, Arial, sans-serif" font-size="21" font-weight="900" fill="#0e1813">Bushnell Launch Pro</text>
      <rect x="910" y="760" width="500" height="62" rx="18" fill="#0e1813"/>
      <text x="950" y="799" font-family="Inter, Arial, sans-serif" font-size="23" font-weight="900" fill="#ffffff">Real product photos. Room-fit verdict.</text>
    </svg>
  `);
  const out = path.join(publicRoot, 'images/golf/premium-launch-monitor-room-fit-2026.jpg');
  await sharp({ create: { width, height, channels: 3, background: '#0e1813' } })
    .composite([
      { input: bg, left: 0, top: 0 },
      { input: overlay, left: 0, top: 0 },
      { input: products[0], left: 910, top: 138 },
      { input: products[1], left: 750, top: 418 },
      { input: products[2], left: 1138, top: 418 },
    ])
    .jpeg({ quality: 91, mozjpeg: true })
    .toFile(out);
  console.log('+ /images/golf/premium-launch-monitor-room-fit-2026.jpg');
}

async function makeIracingReviewCover() {
  const width = 1600;
  const height = 900;
  const bg = await sharp(path.join(publicRoot, 'images/games/iracing/iracing-2026-s3-hero.jpg'))
    .resize(width, height, { fit: 'cover' })
    .modulate({ saturation: 1.12, brightness: 0.66 })
    .toBuffer();
  const rig = await sharp(path.join(publicRoot, 'images/gear/racing/sim-lab-p1x.jpg'))
    .resize(700, 540, { fit: 'contain', background: '#ffffff' })
    .flatten({ background: '#ffffff' })
    .jpeg({ quality: 92 })
    .toBuffer();
  const overlay = Buffer.from(`
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="shade" x1="0" x2="1">
          <stop offset="0%" stop-color="#100b08" stop-opacity=".96"/>
          <stop offset="52%" stop-color="#100b08" stop-opacity=".72"/>
          <stop offset="100%" stop-color="#100b08" stop-opacity=".16"/>
        </linearGradient>
      </defs>
      <rect width="${width}" height="${height}" fill="url(#shade)"/>
      <path d="M0 710 C290 626 468 770 760 696 C1050 622 1240 728 1600 630 L1600 900 L0 900 Z" fill="#100b08" opacity=".68"/>
      <rect x="84" y="72" width="134" height="8" rx="4" fill="#ff6a2a"/>
      <text x="84" y="142" font-family="Inter, Arial, sans-serif" font-size="25" font-weight="900" letter-spacing="5" fill="#ff9a64">IRACING HARDWARE REVIEW</text>
      <text x="84" y="250" font-family="Saira, Arial Black, Arial, sans-serif" font-size="80" font-weight="900" fill="#ffffff">iRacing</text>
      <text x="84" y="333" font-family="Saira, Arial Black, Arial, sans-serif" font-size="80" font-weight="900" fill="#ffffff">Review 2026</text>
      <text x="86" y="404" font-family="Inter, Arial, sans-serif" font-size="30" font-weight="900" fill="#ffe0cf">Build the rig around discipline,</text>
      <text x="86" y="446" font-family="Inter, Arial, sans-serif" font-size="30" font-weight="900" fill="#ffe0cf">not peak torque cosplay.</text>
      <rect x="88" y="525" width="654" height="100" rx="22" fill="#ffffff" opacity=".94"/>
      <text x="122" y="562" font-family="Inter, Arial, sans-serif" font-size="24" font-weight="900" fill="#15120f">Subscription, paid tracks, safety rating, PC load,</text>
      <text x="122" y="596" font-family="Inter, Arial, sans-serif" font-size="24" font-weight="900" fill="#15120f">and the hardware that actually lowers lap-time chaos.</text>
      <rect x="815" y="100" width="700" height="575" rx="46" fill="#ffffff" stroke="#ff6a2a" stroke-width="5"/>
      <rect x="862" y="692" width="600" height="64" rx="20" fill="#15120f"/>
      <text x="910" y="733" font-family="Inter, Arial, sans-serif" font-size="24" font-weight="900" fill="#ffffff">Real cockpit proof: Sim-Lab P1X</text>
      <rect x="92" y="682" width="168" height="58" rx="18" fill="#ff6a2a"/>
      <text x="122" y="718" font-family="Inter, Arial, sans-serif" font-size="20" font-weight="900" fill="#15120f">PAID TRACKS</text>
      <rect x="282" y="682" width="170" height="58" rx="18" fill="#ffffff" opacity=".92"/>
      <text x="314" y="718" font-family="Inter, Arial, sans-serif" font-size="20" font-weight="900" fill="#15120f">LOAD CELL</text>
      <rect x="474" y="682" width="158" height="58" rx="18" fill="#ffffff" opacity=".92"/>
      <text x="507" y="718" font-family="Inter, Arial, sans-serif" font-size="20" font-weight="900" fill="#15120f">TRIPLES</text>
      <rect x="654" y="682" width="88" height="58" rx="18" fill="#ffffff" opacity=".92"/>
      <text x="681" y="718" font-family="Inter, Arial, sans-serif" font-size="20" font-weight="900" fill="#15120f">VR?</text>
      <text x="970" y="812" font-family="Inter, Arial, sans-serif" font-size="21" font-weight="900" fill="#ffe0cf">Official iRacing media + real product photo</text>
    </svg>
  `);
  const out = path.join(publicRoot, 'images/racing/iracing-review-2026.jpg');
  await sharp({ create: { width, height, channels: 3, background: '#15120f' } })
    .composite([
      { input: bg, left: 0, top: 0 },
      { input: overlay, left: 0, top: 0 },
      { input: rig, left: 815, top: 140 },
    ])
    .jpeg({ quality: 91, mozjpeg: true })
    .toFile(out);
  console.log('+ /images/racing/iracing-review-2026.jpg');
}

await makePremiumLaunchMonitorCover();

await makeLadder({
  bay: 'golf',
  file: 'golf/premium-launch-monitor-decision-ladder.png',
  kicker: 'PREMIUM MONITOR DECISION',
  title: 'Start with room, PC tolerance, then fees',
  steps: [
    { label: 'No-PC dream', body: 'Garmin R50 if a touchscreen-first bay beats tinkering.' },
    { label: 'Indoor value', body: 'SkyTrak ST MAX if tight-room speed matters and PC software is fine.' },
    { label: 'Accuracy first', body: 'Bushnell Launch Pro if Foresight-grade ball data is worth plan math.' },
    { label: 'Already own PC', body: 'Spend less on all-in-one convenience and more on mat/screen.' },
    { label: 'Fee allergic', body: 'Price software years before celebrating hardware discounts.' },
  ],
  footer: 'The best premium monitor is the one that does not create a second hidden build.',
});

await makeGrid({
  bay: 'golf',
  file: 'golf/premium-launch-monitor-cost-trap.png',
  kicker: 'OWNERSHIP COST TRAP',
  title: 'The sticker price is not the build price',
  blocks: [
    { label: 'Garmin R50', body: '$4,999.99 official hardware price, plus Garmin Golf membership for Home Tee Hero course play and the normal room build.' },
    { label: 'SkyTrak ST MAX', body: 'Lower hardware buy-in than R50, but the value depends on whether you want SkyTrak software, GSPro, E6, or another third-party path.' },
    { label: 'Bushnell Launch Pro', body: '$2,499.99 official hardware price can look cheap until Silver/Gold, club data terms, and third-party software access enter the room.' },
    { label: 'Nina math', body: 'Add monitor, mat, screen, enclosure, projector/display, PC/tablet, subscriptions, mounts, protection, and return-window risk.' },
  ],
  footer: 'If the software renews every year, it belongs in the hardware budget.',
});

await makeGrid({
  bay: 'golf',
  file: 'golf/premium-launch-monitor-room-fit-map.png',
  kicker: 'ROOM FIT MAP',
  title: 'Three premium monitors, three different build personalities',
  blocks: [
    { label: 'R50: appliance bay', body: 'Side-of-tee, touchscreen, HDMI, no-PC workflow. Best when convenience is the product.' },
    { label: 'ST MAX: indoor PC bay', body: 'Side-of-ball, fast shot feedback, larger hitting zone, SkyTrak ecosystem. Best when value and indoor fit matter.' },
    { label: 'Launch Pro: accuracy bay', body: 'Side-of-ball Foresight sensor lineage. Best when ball data trust beats plan simplicity.' },
    { label: 'Shared reality', body: 'All three still need safe swing clearance, a durable mat, a screen or display, software checks, and lighting discipline.' },
  ],
  footer: 'No premium monitor fixes a bad room. It only tells the truth more expensively.',
});

await makeRoom({
  bay: 'golf',
  file: 'golf/premium-launch-monitor-layout-check.png',
  kicker: 'LAYOUT CHECK',
  title: 'Before checkout, tape the bay on the floor',
  labels: {
    left: 'Screen or net',
    center: 'Mat + ball',
    right: 'Monitor zone',
    depthA: 'safe ball flight',
    depthB: 'device + swing clearance',
  },
  footer: 'Measure the swing, the miss, the screen, and the software path before you measure your credit limit.',
});

await makeIracingReviewCover();

await makeGrid({
  bay: 'racing',
  file: 'racing/iracing-build-verdict-map.png',
  kicker: 'BUILD AROUND IT?',
  title: 'iRacing is worth a rig when you race weekly',
  blocks: [
    { label: 'Build around it', body: 'You want ranked online racing, league nights, endurance events, and a platform that rewards repeatable inputs.' },
    { label: 'Play first', body: 'You are curious, casual, or unsure whether paid seasons and safety rating pressure feel fun.' },
    { label: 'Wait', body: 'You still need a stable wheel stand, wired internet, Windows 11 PC, or a return window on VR.' },
    { label: 'Skip for now', body: 'You want offline career, mod culture, couch racing, or zero recurring cost. iRacing is not built for that mood.' },
  ],
  footer: 'Duke verdict: iRacing is expensive discipline. If you like that, it becomes the reason the rig exists.',
});

await makeGrid({
  bay: 'racing',
  file: 'racing/iracing-cost-stack-2026.png',
  kicker: 'COST STACK',
  title: 'The subscription is only the cover charge',
  blocks: [
    { label: 'Membership', body: 'New direct memberships were showing 30% off: $9.10 month, $77 year, or $139.30 for two years on source review day.' },
    { label: 'Included base', body: 'Official membership includes 32 cars, 29 tracks, online racing, licensing, ratings, leagues, and special events.' },
    { label: 'Paid content', body: 'Extra cars list at $11.95. Extra tracks list at $11.95 or $14.95, with volume discounts when you buy deliberately.' },
    { label: 'Hardware tax', body: 'Cockpit stability, load-cell brake, display FOV, PC headroom, and wired internet matter more than buying one monster wheelbase.' },
  ],
  footer: 'Pick one series first. Random car-and-track shopping is how the service eats the hardware budget.',
});

await makeLadder({
  bay: 'racing',
  file: 'racing/iracing-hardware-priority-ladder.png',
  kicker: 'IRACING HARDWARE ORDER',
  title: 'Spend where iRacing punishes inconsistency',
  steps: [
    { label: 'Stable rig', body: 'Seat, wheel, and pedals must stay fixed under braking.' },
    { label: 'Load-cell brake', body: 'Pressure repeatability matters more than wheelbase peak torque.' },
    { label: '8-12 Nm DD', body: 'Enough detail and strength without forcing luxury-tier mistakes.' },
    { label: 'Display FOV', body: 'Triples or ultrawide help traffic, apexes, and long-session comfort.' },
    { label: 'Haptics last', body: 'Tactile cues help after the control loop is stable.' },
  ],
  footer: 'iRacing makes sloppy inputs visible. Buy the hardware that removes slop.',
});

await makeGrid({
  bay: 'racing',
  file: 'racing/iracing-pc-display-map.png',
  kicker: 'PC AND DISPLAY REALITY',
  title: 'Before you subscribe, check the machine and the view',
  blocks: [
    { label: 'Windows 11 PC', body: 'Official requirements now list Windows 11 64-bit and do not support Mac, Linux, or virtual machines.' },
    { label: 'VRAM and storage', body: 'Minimum 6GB vRAM, recommended 8GB, high-end 10GB plus. Storage runs 40GB minimum or 225GB for all cars and tracks.' },
    { label: 'Displays', body: 'Triples aid racecraft; 49-inch ultrawide is the sane middle; VR is magic only when comfort and frame pacing cooperate.' },
    { label: 'Network', body: 'Use cable or fiber internet where possible. Official requirements do not support 5G/LTE wireless or high-orbit satellite.' },
  ],
  footer: 'The fastest setup is the one that stays smooth, visible, wired, and boring during lap-one traffic.',
});
