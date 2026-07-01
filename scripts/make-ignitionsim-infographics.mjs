import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const root = process.cwd();
const outRoot = path.join(root, 'public/images/infographics');

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
      <rect x="80" y="850" width="1440" height="82" rx="24" fill="${t.dark}"/>
      ${textBlock(footer, 115, 902, 25, '#ffffff', 86, 800)}
    </svg>
  `);
};

async function writeSvg(file, svg) {
  const out = path.join(outRoot, file);
  await fs.mkdir(path.dirname(out), { recursive: true });
  await sharp(Buffer.from(svg)).png().toFile(out);
  console.log(`+ /images/infographics/${file}`);
}

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
