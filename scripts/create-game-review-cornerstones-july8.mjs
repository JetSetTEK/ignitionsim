import fs from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();
const affiliateTag = 'ignitionsim-20';

const imageJobs = [
  ['https://gsprogolf.com/assets/img/gsproball.png', 'public/images/games/gspro/gspro-ball.png'],
  ['https://gsprogolf.com/assets/img/logov3.png', 'public/images/games/gspro/gspro-logo.png'],
  ['https://flightsimulator.azureedge.net/wp-content/uploads/2025/09/01_872423.jpg', 'public/images/games/msfs-2024/msfs-2024-cockpit.jpg'],
  ['https://flightsimulator.azureedge.net/wp-content/uploads/2026/06/MSFS2024_M600_noSnipe_noLogo_noText-1-1536x864.png', 'public/images/games/msfs-2024/msfs-2024-aircraft.jpg'],
  ['https://flightsimulator.azureedge.net/wp-content/uploads/2024/11/MSFS2024_AircraftChart_V3_Final-Updated.png', 'public/images/games/msfs-2024/msfs-2024-aircraft-chart.png'],
  ['https://flightsimulator.azureedge.net/wp-content/uploads/2024/11/MSFS2024_Standard_Tile_540x810.png', 'public/images/games/msfs-2024/msfs-2024-standard-box.png'],
  ['https://robertsspaceindustries.com/media/rsx2i01b0kva9r/heap_thumb/Mini-Thumbnail_HEAP_421.jpg', 'public/images/games/star-citizen/star-citizen-alpha-421.jpg'],
  ['https://www.bridgecommand.co.uk/data/_uploaded/image/ASD%20Tug.png', 'public/images/games/bridge-command/bridge-command-tug.png'],
  ['https://www.bridgecommand.co.uk/data/_uploaded/image/DSC_0172-1.jpg', 'public/images/games/bridge-command/bridge-command-control-room.jpg'],
  ['https://www.bridgecommand.co.uk/images/multihead_small.png', 'public/images/games/bridge-command/bridge-command-multihead.png'],
  ['https://www.bridgecommand.co.uk/Doc/images/joystick_map.png', 'public/images/games/bridge-command/bridge-command-joystick-map.png'],
  ['https://evercade.co.uk/wp-content/uploads/2024/04/Evercade_VS-R-EXP-R_GroupProductShot-1536x838-1-1.png', 'public/images/gear/racing/evercade-vs-r-exp-r.png'],
  ['https://evercade.co.uk/wp-content/uploads/2024/05/Updated-Render-6-Cartridges.jpg', 'public/images/games/evercade/evercade-cartridges.jpg'],
  ['https://evercade.co.uk/wp-content/uploads/2025/02/Blaze-48522.jpg', 'public/images/games/evercade/evercade-cartridge-wall.jpg'],
  ['https://blog.playstation.com/tachyon/2026/07/70bb22030b29f4234fd812253bf1129b00609c4c.jpg', 'public/images/games/evercade/playstation-physical-disc-context.jpg'],
];

const articles = [
  {
    id: 'golf/gspro-review-2026',
    bay: 'golf',
    slug: 'gspro-review-2026',
    title: 'GSPro Review 2026: Is It the Home Golf Software Worth Building a PC Bay Around?',
    description: 'A practical GSPro review for 2026 home golf simulator builders: launch monitor compatibility, PC needs, courses, subscriptions, hidden setup pain, and what to buy.',
    author: 'Nina Brooks',
    cluster: 'golf',
    hero: '/images/games/gspro/gspro-ball.png',
    heroAlt: 'GSPro golf simulator logo and ball mark',
    excerpt: 'GSPro is the software that makes many garage golf bays feel alive, but the right launch monitor, PC, projector, and connector path matter more than the logo.',
    reading: 18,
    primaryKeyword: 'GSPro review 2026',
    related: ['garmin-r50-room-build-bible-2026', 'premium-launch-monitor-room-fit-2026', 'budget-launch-monitor-war-2026', 'golf-simulator-projector-guide'],
    faqs: [
      ['Is GSPro worth it for a home golf simulator in 2026?', 'Yes for PC-based builders who want a huge course ecosystem and do not mind checking launch-monitor compatibility before buying hardware. It is not the cleanest appliance path for every golfer.'],
      ['What matters most before buying GSPro?', 'Confirm your launch monitor connection path, room dimensions, projector geometry, impact screen, gaming PC, and internet/network setup before you pay for software.'],
      ['Is GSPro beginner friendly?', 'It is friendly once the bay is working, but the setup stage rewards patient builders who read compatibility notes and keep firmware, connectors, and PC graphics drivers current.'],
    ],
    sources: [
      ['GSPro official site', 'https://gsprogolf.com/'],
      ['r/Golfsimulator', 'https://www.reddit.com/r/Golfsimulator/'],
      ['Golf Simulator Forum', 'https://golfsimulatorforum.com/'],
      ['Garmin Approach R50 support path', 'https://www.garmin.com/en-US/p/1052189'],
    ],
    body: gsproBody,
  },
  {
    id: 'flight/microsoft-flight-simulator-2024-review-2026',
    bay: 'flight',
    slug: 'microsoft-flight-simulator-2024-review-2026',
    title: 'Microsoft Flight Simulator 2024 Review 2026: Is It Still the Home Cockpit King?',
    description: 'A home-cockpit-focused MSFS 2024 review for 2026: hardware order, yokes, rudders, throttles, VR, PC specs, editions, add-ons, and the traps builders hit.',
    author: 'Val Chen',
    cluster: 'flight',
    hero: '/images/games/msfs-2024/msfs-2024-cockpit.jpg',
    heroAlt: 'Microsoft Flight Simulator 2024 aircraft cockpit screenshot',
    excerpt: 'MSFS 2024 is still the gravity well for home cockpit builders, but the best first upgrade is not a wall of panels. It is the control loop.',
    reading: 20,
    primaryKeyword: 'Microsoft Flight Simulator 2024 review 2026',
    related: ['msfs-home-cockpit-buyer-map-2026', 'yoke-throttle-rudder-head-tracking-order-2026', 'best-gpu-for-sim-racing-flight-2026', 'best-vr-headset-for-sim-2026'],
    faqs: [
      ['Is Microsoft Flight Simulator 2024 worth building a cockpit around in 2026?', 'Yes if you want civil aviation, scenery, procedures, bush flying, airliners, and a giant add-on ecosystem. Build controls first, then panels.'],
      ['What hardware should MSFS 2024 buyers buy first?', 'A yoke or stick, throttle quadrant, rudder pedals, powered USB, and head tracking usually beat decorative panels for early cockpit satisfaction.'],
      ['Should MSFS 2024 builders buy VR or monitors first?', 'VR is incredible for presence, but many builders should stabilize controls, performance, and seated comfort first. Monitors are easier for long procedure sessions.'],
    ],
    sources: [
      ['MSFS 2024 official page', 'https://www.flightsimulator.com/microsoft-flight-simulator-2024/'],
      ['MSFS 2024 FAQ', 'https://www.flightsimulator.com/microsoft-flight-simulator-2024-faq/'],
      ['MSFS Forums', 'https://forums.flightsimulator.com/'],
      ['FSElite', 'https://fselite.net/'],
    ],
    body: msfsBody,
  },
  {
    id: 'space/star-citizen-review-2026',
    bay: 'space',
    slug: 'star-citizen-review-2026',
    title: 'Star Citizen Review 2026: Is It Worth Building HOSAS Around Yet?',
    description: 'A Star Citizen 2026 sim-builder review focused on HOSAS, HOTAS, desk mounts, bindings, performance pain, Alpha 4.2.1, and whether the hardware dream is worth it.',
    author: 'Val Chen',
    cluster: 'space',
    hero: '/images/games/star-citizen/star-citizen-alpha-421.jpg',
    heroAlt: 'Star Citizen Alpha 4.2.1 official patch artwork',
    excerpt: 'Star Citizen is still the most dangerous reason to buy dual sticks: thrilling when the bindings click, absurd when you skip mounts, power, and patience.',
    reading: 21,
    primaryKeyword: 'Star Citizen review 2026 HOSAS',
    related: ['thrustmaster-sol-r2-vs-sol-r4-hosas-hotas-2026', 'star-citizen-hosas-buyer-map-2026', 'star-citizen-hosas-upgrade-path-2026', 'vkb-vs-virpil-vs-winwing-space-sticks-2026'],
    faqs: [
      ['Is Star Citizen worth building a HOSAS setup around in 2026?', 'Yes for players who specifically love six-axis flight, mining, hauling, and dogfighting enough to tolerate alpha instability and binding work.'],
      ['Should beginners buy HOTAS or HOSAS for Star Citizen?', 'HOSAS fits six-axis spaceflight best. HOTAS still makes sense for big-ship flying, mixed flight sims, or players who want a throttle muscle-memory anchor.'],
      ['What is the biggest Star Citizen hardware mistake?', 'Buying premium sticks before desk mounts, button mapping, and a realistic patience budget. The first night is often configuration, not victory laps.'],
    ],
    sources: [
      ['Star Citizen Alpha 4.2.1 patch notes', 'https://robertsspaceindustries.com/en/comm-link/Patch-Notes/20702-Star-Citizen-Alpha-421'],
      ['r/starcitizen', 'https://www.reddit.com/r/starcitizen/'],
      ['r/hotas', 'https://www.reddit.com/r/hotas/'],
      ['VKB North America', 'https://www.vkbcontrollers.com/'],
    ],
    body: starCitizenBody,
  },
  {
    id: 'marine/bridge-command-review-2026',
    bay: 'marine',
    slug: 'bridge-command-review-2026',
    title: 'Bridge Command Review 2026: The DIY Ship Bridge Simulator for Builders',
    description: 'A Bridge Command review for marine sim builders: what it does, hardware reality, DIY throttles, helm controls, multi-screen setups, and who should build around it.',
    author: 'Gus Calder',
    cluster: 'marine',
    hero: '/images/games/bridge-command/bridge-command-tug.png',
    heroAlt: 'Bridge Command tug simulator screenshot',
    excerpt: 'Bridge Command is not a shiny boxed cockpit. It is a practical ship-bridge sandbox for people who like labels, wiring, and making weird controls behave.',
    reading: 16,
    primaryKeyword: 'Bridge Command review 2026',
    related: ['professional-ship-simulator-2026-hardware-setup'],
    faqs: [
      ['Is Bridge Command worth using for a DIY ship bridge simulator?', 'Yes if you want an accessible marine bridge simulator and you are comfortable adapting controls. It is a builder project, not a plug-and-play consumer console.'],
      ['Can Bridge Command use a joystick or wheel?', 'Yes, Bridge Command documents joystick input and many builders adapt joysticks, wheels, button boards, and throttle controls to ship functions.'],
      ['What is the biggest Bridge Command setup trap?', 'Expecting purpose-built marine controls to be cheap and common. Most practical builds use repurposed hardware, DIY USB boards, and careful labels.'],
    ],
    sources: [
      ['Bridge Command official site', 'https://www.bridgecommand.co.uk/'],
      ['Bridge Command joystick documentation', 'https://www.bridgecommand.co.uk/Doc/joystick.php'],
      ['Bridge Command DIY throttle documentation', 'https://www.bridgecommand.co.uk/Doc/makethrottle.php'],
      ['MarineVerse', 'https://www.marineverse.com/'],
    ],
    body: bridgeBody,
  },
  {
    id: 'racing/evercade-physical-cartridge-sim-room-2026',
    bay: 'racing',
    slug: 'evercade-physical-cartridge-sim-room-2026',
    title: 'Evercade in 2026: Is the Physical Cartridge Ecosystem Worth Adding to a Sim Room?',
    description: 'A 2026 Evercade review for sim-room and game-room builders: VS-R, EXP-R, cartridges, preservation appeal, couch sessions, costs, and why physical media matters now.',
    author: 'Mac Donovan',
    cluster: 'cross-sim',
    hero: '/images/gear/racing/evercade-vs-r-exp-r.png',
    heroAlt: 'Evercade VS-R and EXP-R physical cartridge gaming hardware',
    excerpt: 'Evercade is not a simulator, but it may be the best little physical-media side station for a room built around expensive screens, seats, and serious nostalgia.',
    reading: 14,
    primaryKeyword: 'Evercade review 2026 physical cartridges',
    related: ['iracing-review-2026', 'best-gpu-for-sim-racing-flight-2026', 'best-vr-headset-for-sim-2026'],
    faqs: [
      ['Does Evercade fit IgnitionSim?', 'Yes as a physical-media side station for sim rooms and retro game-room builds, not as a core simulator platform. It belongs beside the rig, not instead of it.'],
      ['Why is Evercade more interesting in 2026?', 'Physical media anxiety is rising. Sony announced that physical disc production for new PlayStation console games ends in January 2028, which makes cartridge ecosystems feel newly relevant.'],
      ['Should a sim builder buy Evercade before core rig parts?', 'No. Buy your controls, display, seat, PC, and power first. Evercade is a lifestyle add-on once the main sim room works.'],
    ],
    sources: [
      ['Evercade official site', 'https://evercade.co.uk/'],
      ['Evercade cartridges', 'https://evercade.co.uk/cartridges/'],
      ['Evercade EXP-R and VS-R announcement', 'https://evercade.co.uk/new-hardware-new-lower-price-introducing-evercade-exp-r-and-evercade-vs-r/'],
      ['PlayStation Blog physical disc production update', 'https://blog.playstation.com/2026/07/01/physical-disc-production-ending-in-january-2028-for-new-games-releasing-on-playstation-consoles/'],
    ],
    body: evercadeBody,
  },
];

function ama(query) {
  return `https://www.amazon.com/s?k=${encodeURIComponent(query)}&tag=${affiliateTag}`;
}

function mdImage(src, alt, caption) {
  return `![${alt}](${src})\n\n<small>${caption}</small>`;
}

function shotGrid(items) {
  return `<div class="shot-grid">\n${items.map((item) => `  <figure>\n    <img src="${item.src}" alt="${escapeHtml(item.alt)}" loading="lazy" />\n    <figcaption><strong>${escapeHtml(item.label)}</strong> ${escapeHtml(item.note)}</figcaption>\n  </figure>`).join('\n')}\n</div>`;
}

function buyGrid(items) {
  return `<div class="gear-grid">\n${items.map((item) => `  <article class="gear-pick">\n    <img src="${item.src}" alt="${escapeHtml(item.alt)}" loading="lazy" />\n    <div>\n      <p class="eyebrow">${escapeHtml(item.kind)}</p>\n      <h3>${escapeHtml(item.name)}</h3>\n      <p>${escapeHtml(item.note)}</p>\n      <a data-buy-link="true" href="${item.url}" rel="nofollow sponsored noopener" target="_blank">Check Amazon</a>\n    </div>\n  </article>`).join('\n')}\n</div>`;
}

function verdictCards(items) {
  return `<div class="verdict-grid">\n${items.map((item) => `  <div class="verdict-card">\n    <p class="eyebrow">${escapeHtml(item.kicker)}</p>\n    <h3>${escapeHtml(item.title)}</h3>\n    <p>${escapeHtml(item.copy)}</p>\n  </div>`).join('\n')}\n</div>`;
}

function writeInfographic(rel, title, rows, accent = '#ff5e1a') {
  const width = 1320;
  const height = 760;
  const cardH = Math.floor((height - 230) / rows.length);
  const cards = rows.map((row, i) => {
    const y = 170 + i * cardH;
    return `<rect x="70" y="${y}" width="1180" height="${cardH - 22}" rx="26" fill="#ffffff" opacity="0.93"/>
<text x="110" y="${y + 54}" font-family="Arial, sans-serif" font-size="26" font-weight="800" fill="#0b1118">${escapeHtml(row.label)}</text>
<text x="110" y="${y + 96}" font-family="Arial, sans-serif" font-size="22" fill="#425466">${escapeHtml(row.note)}</text>
<text x="1120" y="${y + 76}" font-family="Arial, sans-serif" font-size="30" font-weight="900" fill="${accent}" text-anchor="middle">${escapeHtml(row.score)}</text>`;
  }).join('\n');
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <defs>
    <linearGradient id="g" x1="0" x2="1">
      <stop offset="0" stop-color="#08131f"/>
      <stop offset="0.55" stop-color="#182332"/>
      <stop offset="1" stop-color="${accent}"/>
    </linearGradient>
  </defs>
  <rect width="${width}" height="${height}" rx="36" fill="url(#g)"/>
  <path d="M80 110 C300 40 520 160 750 92 S1060 42 1235 130" fill="none" stroke="#ffffff" stroke-opacity="0.12" stroke-width="8"/>
  <text x="70" y="82" font-family="Arial, sans-serif" font-size="22" font-weight="800" fill="${accent}" letter-spacing="7">IGNITIONSIM FIELD CARD</text>
  <text x="70" y="128" font-family="Arial, sans-serif" font-size="52" font-weight="900" fill="#ffffff">${escapeHtml(title)}</text>
  ${cards}
</svg>`;
}

function fieldCard(rel, article, scene, proof, accent = '#ff5e1a') {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1400" height="760" viewBox="0 0 1400 760">
  <defs>
    <linearGradient id="shade" x1="0" x2="1">
      <stop offset="0" stop-color="#05080d" stop-opacity="0.7"/>
      <stop offset="1" stop-color="#05080d" stop-opacity="0.05"/>
    </linearGradient>
  </defs>
  <rect width="1400" height="760" rx="34" fill="#101820"/>
  <image href="${scene}" x="0" y="0" width="760" height="760" preserveAspectRatio="xMidYMid slice"/>
  <image href="${proof}" x="720" y="88" width="560" height="420" preserveAspectRatio="xMidYMid meet"/>
  <rect width="1400" height="760" fill="url(#shade)"/>
  <rect x="730" y="520" width="560" height="118" rx="22" fill="#ffffff" opacity="0.94"/>
  <text x="770" y="565" font-family="Arial, sans-serif" font-size="18" font-weight="800" fill="${accent}" letter-spacing="5">CURATOR BENCH</text>
  <text x="770" y="608" font-family="Arial, sans-serif" font-size="32" font-weight="900" fill="#0b1118">${escapeHtml(article.author)}</text>
  <text x="770" y="648" font-family="Arial, sans-serif" font-size="21" fill="#344054">${escapeHtml(article.excerpt).slice(0, 96)}</text>
  <text x="62" y="620" font-family="Arial, sans-serif" font-size="20" font-weight="800" fill="${accent}" letter-spacing="5">DREAM FIRST, RECEIPTS SECOND</text>
  <text x="62" y="676" font-family="Arial, sans-serif" font-size="44" font-weight="900" fill="#ffffff">${escapeHtml(article.title).slice(0, 54)}</text>
</svg>`;
}

async function download(url, rel) {
  const out = path.join(root, rel);
  await fs.mkdir(path.dirname(out), { recursive: true });
  try {
    const res = await fetch(url, { headers: { 'user-agent': 'IgnitionSim editorial asset audit/1.0' } });
    if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
    const buf = Buffer.from(await res.arrayBuffer());
    if (buf.length < 2000) throw new Error('tiny asset');
    await fs.writeFile(out, buf);
    console.log(`downloaded ${rel}`);
  } catch (error) {
    console.warn(`asset skipped ${url}: ${error.message}`);
  }
}

function fm(article) {
  const faq = article.faqs.map(([q, a]) => `  - q: "${yaml(q)}"\n    a: "${yaml(a)}"`).join('\n');
  const related = article.related.map((item) => `  - ${item}`).join('\n');
  return `---\ntitle: "${yaml(article.title)}"\ndescription: "${yaml(article.description)}"\nbay: ${article.bay}\ntype: buying-guide\nprimaryKeyword: "${yaml(article.primaryKeyword)}"\nauthor: "${article.author}"\npublishDate: 2026-07-08\nupdatedDate: 2026-07-08\nheroImage: "${article.hero}"\nheroAlt: "${yaml(article.heroAlt)}"\nexcerpt: "${yaml(article.excerpt)}"\nfeatured: true\ndraft: false\ngoldStatus: certified\ngoldCertifiedDate: 2026-07-08\nsourceReviewDate: 2026-07-08\nrevenueTier: A\ncontentCluster: ${article.cluster}\nreadingTime: ${article.reading}\nfaqs:\n${faq}\nrelated:\n${related}\n---\n\n`;
}

function yaml(value) {
  return String(value).replace(/\\/g, '\\\\').replace(/"/g, '\\"');
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"]/g, (ch) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[ch]));
}

async function writeArticle(article) {
  const file = path.join(root, 'src/content/articles', article.id + '.md');
  await fs.mkdir(path.dirname(file), { recursive: true });
  await fs.writeFile(file, fm(article) + article.body(article), 'utf8');
  console.log(`wrote ${article.id}`);
}

async function writeVisuals() {
  const visuals = [
    ['public/images/infographics/golf/gspro-buy-path.svg', 'GSPro Bay Buy Path', [
      { label: 'Software first', note: 'Choose GSPro before you lock the launch monitor and connector route.', score: '1' },
      { label: 'Room second', note: 'Ceiling, hitting depth, projector throw, and side protection decide comfort.', score: '2' },
      { label: 'PC third', note: 'Stable Windows, GPU headroom, and wired networking beat pretty RGB.', score: '3' },
      { label: 'Courses last', note: 'The course library is the reward after the room stops fighting you.', score: '4' },
    ], '#74c365'],
    ['public/images/infographics/golf/gspro-launch-monitor-fit.svg', 'Launch Monitor Fit', [
      { label: 'Garmin R50', note: 'Standalone screen is convenient; confirm GSPro connector expectations.', score: 'Fit' },
      { label: 'Bushnell / Foresight', note: 'Premium data path, but software packages and subscriptions need scrutiny.', score: '$$$' },
      { label: 'Uneekor', note: 'Permanent bay favorite when ceiling and budget allow an overhead unit.', score: 'Bay' },
      { label: 'Budget monitors', note: 'Cheap can be brilliant, but connector friction decides the weekend.', score: 'Check' },
    ], '#74c365'],
    ['public/images/infographics/flight/msfs-control-order.svg', 'MSFS Control Order', [
      { label: 'Primary control', note: 'Yoke or stick must feel natural before panels matter.', score: '1' },
      { label: 'Throttle and rudders', note: 'The landing loop needs hands and feet before extra screens.', score: '2' },
      { label: 'USB and mounting', note: 'Powered hubs and stable clamps save more nights than another dial.', score: '3' },
      { label: 'Panels, VR, scenery', note: 'Add the candy after the cockpit stops disconnecting.', score: '4' },
    ], '#38bdf8'],
    ['public/images/infographics/flight/msfs-edition-map.svg', 'MSFS Edition Reality', [
      { label: 'Standard', note: 'Best for most builders until you know your aircraft obsession.', score: 'Buy' },
      { label: 'Deluxe / Premium', note: 'Worth it when the included aircraft and airports are the exact draw.', score: 'Maybe' },
      { label: 'Aviator', note: 'For collectors and aircraft omnivores, not first-time budget cockpit math.', score: '$$$' },
      { label: 'Add-ons', note: 'Budget marketplace spending like hardware. It sneaks up.', score: 'Plan' },
    ], '#38bdf8'],
    ['public/images/infographics/space/star-citizen-hosas-hotspots.svg', 'Star Citizen Control Map', [
      { label: 'Right stick', note: 'Pitch, yaw, weapons, targeting, boost, and fine aim.', score: 'Aim' },
      { label: 'Left stick', note: 'Strafe, throttle blend, vertical lift, mining, and landing control.', score: 'Move' },
      { label: 'Mounts', note: 'The hidden purchase that makes dual sticks feel intentional.', score: 'Must' },
      { label: 'Bindings', note: 'Export profiles and keep a printed cheat sheet until muscle memory lands.', score: 'Pain' },
    ], '#b45cff'],
    ['public/images/infographics/space/star-citizen-buy-verdict.svg', 'Star Citizen Buy Verdict', [
      { label: 'Buy HOSAS', note: 'If six-axis flight is the whole reason you log in.', score: 'Yes' },
      { label: 'Buy HOTAS', note: 'If hauling, mixed flight sims, and throttle feel matter more.', score: 'Yes' },
      { label: 'Wait', note: 'If alpha bugs make you rage or your desk cannot mount the gear.', score: 'Wait' },
      { label: 'Skip premium', note: 'If you have not mapped the cheap gear you already own.', score: 'Skip' },
    ], '#b45cff'],
    ['public/images/infographics/marine/bridge-command-diy-loop.svg', 'Bridge Command DIY Loop', [
      { label: 'Map the vessel', note: 'Decide helm, throttle, bow thruster, views, and alarms before hardware.', score: 'Plan' },
      { label: 'Use USB boards', note: 'Button interfaces and labels often beat rare marine controls.', score: 'Build' },
      { label: 'Test profiles', note: 'Keep backups. Marine controls are choreography, not decoration.', score: 'Save' },
      { label: 'Add screens slowly', note: 'Multihead is fun after the input loop is reliable.', score: 'Then' },
    ], '#2dd4bf'],
    ['public/images/infographics/marine/bridge-command-control-options.svg', 'Marine Control Options', [
      { label: 'Repurposed joystick', note: 'Cheap, flexible, and documented enough for first builds.', score: '$' },
      { label: 'Racing wheel / pedal', note: 'Useful for helm experiments, less perfect for throttle realism.', score: '$$' },
      { label: 'DIY throttle', note: 'Best builder path when labels and levers matter.', score: 'DIY' },
      { label: 'Pro console', note: 'Wonderful, rare, and usually outside casual home budgets.', score: '$$$' },
    ], '#2dd4bf'],
    ['public/images/infographics/racing/evercade-side-station-fit.svg', 'Evercade Side Station Fit', [
      { label: 'Core rig first', note: 'Controls, display, seat, power, PC. Do not let nostalgia steal the cockpit budget.', score: '1' },
      { label: 'Physical shelf second', note: 'Cartridges give the room a visible library and quick couch sessions.', score: '2' },
      { label: 'Friends mode', note: 'VS-R makes sense when the sim room doubles as a game-night room.', score: '3' },
      { label: 'Collector guardrails', note: 'Buy the collections you will actually play. Plastic multiplies.', score: '4' },
    ], '#ff5e1a'],
    ['public/images/infographics/racing/evercade-buy-wait-skip.svg', 'Evercade Buy Wait Skip', [
      { label: 'Buy', note: 'You love physical cartridges and want a tidy retro station beside the rig.', score: 'Buy' },
      { label: 'Wait', note: 'You are still funding the wheelbase, projector, GPU, or cockpit.', score: 'Wait' },
      { label: 'Skip', note: 'You only want modern simulation depth or already emulate legally on PC.', score: 'Skip' },
      { label: 'Watch', note: 'Physical media news makes this ecosystem more culturally interesting.', score: 'Track' },
    ], '#ff5e1a'],
  ];
  for (const [rel, title, rows, accent] of visuals) {
    const out = path.join(root, rel);
    await fs.mkdir(path.dirname(out), { recursive: true });
    await fs.writeFile(out, writeInfographic(rel, title, rows, accent), 'utf8');
  }

  const fieldCards = [
    ['public/images/curator-scenes/generated/gspro-review-2026-field-card.svg', articles[0], '/images/curator-scenes/nina-golf-bay-presenting.webp', '/images/gear/golf/garmin-approach-r50.jpg', '#74c365'],
    ['public/images/curator-scenes/generated/microsoft-flight-simulator-2024-review-2026-field-card.svg', articles[1], '/images/curator-scenes/val-space-hosas-routing-2.webp', '/images/games/msfs-2024/msfs-2024-aircraft.jpg', '#38bdf8'],
    ['public/images/curator-scenes/generated/star-citizen-review-2026-field-card.svg', articles[2], '/images/curator-scenes/val-space-hosas-cable-check.webp', '/images/gear/space/vkb-gladiator-nxt-evo-space-combat-edition.jpg', '#b45cff'],
    ['public/images/curator-scenes/generated/bridge-command-review-2026-field-card.svg', articles[3], '/images/curator-scenes/gus-marine-throttle-helm.webp', '/images/games/bridge-command/bridge-command-control-room.jpg', '#2dd4bf'],
    ['public/images/curator-scenes/generated/evercade-physical-cartridge-sim-room-2026-field-card.svg', articles[4], '/images/curator-scenes/mac-gpu-flight-pc-workbench.webp', '/images/gear/racing/evercade-vs-r-exp-r.png', '#ff5e1a'],
  ];
  for (const [rel, article, scene, proof, accent] of fieldCards) {
    const out = path.join(root, rel);
    await fs.mkdir(path.dirname(out), { recursive: true });
    await fs.writeFile(out, fieldCard(rel, article, scene, proof, accent), 'utf8');
  }
}

async function updateGames() {
  const file = path.join(root, 'src/data/games.json');
  const games = JSON.parse(await fs.readFile(file, 'utf8'));
  const addGuide = (slug, id) => {
    const game = games.find((item) => item.slug === slug);
    if (!game) return;
    game.guideIds = [id, ...game.guideIds.filter((existing) => existing !== id)];
  };
  addGuide('gspro', 'golf/gspro-review-2026');
  addGuide('microsoft-flight-simulator-2024', 'flight/microsoft-flight-simulator-2024-review-2026');
  addGuide('star-citizen', 'space/star-citizen-review-2026');
  addGuide('bridge-command', 'marine/bridge-command-review-2026');
  if (!games.some((game) => game.slug === 'evercade')) {
    games.push({
      slug: 'evercade',
      name: 'Evercade',
      bay: 'racing',
      type: 'physical cartridge retro console',
      signal: 'The sim-room side station for physical-media people.',
      bestFor: 'Builders who want a tidy retro cartridge shelf beside the cockpit, golf bay, or flight desk.',
      hardwareThatMatters: 'VS-R or EXP-R hardware, HDMI or handheld plan, cartridge storage, and a budget that does not raid the main rig.',
      watchTheTrap: 'It is a lifestyle add-on, not a simulator upgrade. Buy it after the rig works.',
      guideIds: ['racing/evercade-physical-cartridge-sim-room-2026'],
      officialUrl: 'https://evercade.co.uk/'
    });
  } else {
    addGuide('evercade', 'racing/evercade-physical-cartridge-sim-room-2026');
  }
  await fs.writeFile(file, `${JSON.stringify(games, null, 2)}\n`, 'utf8');
}

async function updateGrowth() {
  const file = path.join(root, 'src/data/growth-priorities.json');
  const data = JSON.parse(await fs.readFile(file, 'utf8'));
  const ids = articles.map((article) => article.id);
  data.cornerstoneArticleIds = [...ids, ...data.cornerstoneArticleIds.filter((id) => !ids.includes(id))];
  data.streamLeadArticleIds = [...ids, ...data.streamLeadArticleIds.filter((id) => !ids.includes(id))];
  data.moneyClusters.golf = ['gspro-review-2026', ...data.moneyClusters.golf.filter((slug) => slug !== 'gspro-review-2026')];
  data.moneyClusters.flightSpace = [
    'microsoft-flight-simulator-2024-review-2026',
    'star-citizen-review-2026',
    ...data.moneyClusters.flightSpace.filter((slug) => !['microsoft-flight-simulator-2024-review-2026', 'star-citizen-review-2026'].includes(slug)),
  ];
  data.moneyClusters.racing = ['evercade-physical-cartridge-sim-room-2026', ...data.moneyClusters.racing.filter((slug) => slug !== 'evercade-physical-cartridge-sim-room-2026')];
  data.moneyClusters.marine = ['bridge-command-review-2026', ...((data.moneyClusters.marine || []).filter((slug) => slug !== 'bridge-command-review-2026'))];
  await fs.writeFile(file, `${JSON.stringify(data, null, 2)}\n`, 'utf8');
}

async function updateProducts() {
  const file = path.join(root, 'src/data/products/racing-extra.json');
  const products = JSON.parse(await fs.readFile(file, 'utf8'));
  if (!products.some((item) => item.id === 'evercade-vs-r-exp-r')) {
    products.push({
      id: 'evercade-vs-r-exp-r',
      name: 'Evercade VS-R / EXP-R',
      brand: 'Evercade',
      bay: 'racing',
      category: 'retro side station',
      price: 'Check live pricing',
      image: '/images/gear/racing/evercade-vs-r-exp-r.png',
      alt: 'Evercade VS-R console and EXP-R handheld physical cartridge hardware',
      affiliateUrl: ama('Evercade VS-R EXP-R'),
      verdict: 'A physical-cartridge side station for sim rooms once the core rig is already funded.',
      sourceUrl: 'https://evercade.co.uk/new-hardware-new-lower-price-introducing-evercade-exp-r-and-evercade-vs-r/'
    });
  }
  await fs.writeFile(file, `${JSON.stringify(products, null, 2)}\n`, 'utf8');
}

async function main() {
  for (const [url, rel] of imageJobs) await download(url, rel);
  await writeVisuals();
  for (const article of articles) await writeArticle(article);
  await updateGames();
  await updateGrowth();
  await updateProducts();
}

function sourceList(article) {
  return article.sources.map(([label, url]) => `- [${label}](${url})`).join('\n');
}

function commonClosing(article) {
  return `\n## Source Notes\n\n${sourceList(article)}\n\n## FAQ\n\n${article.faqs.map(([q, a]) => `### ${q}\n\n${a}`).join('\n\n')}\n`;
}

function gsproBody(article) {
  return `# ${article.title}\n\n${mdImage('/images/curator-scenes/generated/gspro-review-2026-field-card.svg', 'Nina Brooks in a home golf simulator bay presenting the GSPro buying path', 'AI curator scene with real product proof. Nina is here to keep the software dream attached to room geometry.')}\n\n## Fast Verdict\n\n${verdictCards([{ kicker: 'Buy Now', title: 'Build around GSPro if you want a PC golf bay with legs.', copy: 'The course ecosystem, community momentum, and launch-monitor breadth make GSPro the software most serious garage golfers should at least plan around.' }, { kicker: 'Buy With Caveats', title: 'Compatibility is the toll booth.', copy: 'Do not buy a launch monitor because a forum post sounded happy. Confirm the exact connector path, subscription reality, and firmware state first.' }, { kicker: 'Wait', title: 'If you want appliance simplicity, pause.', copy: 'Golfers who want an iPad-first, sealed-box experience may be happier with a launch-monitor-native software path.' }])}\n\nNina's take: GSPro is not just software. It is the decision that decides your launch monitor, your Windows PC, your network cable, your projector geometry, and whether your weekend becomes golf or driver updates. When it is right, the bay stops feeling like a net in a garage and starts feeling like a place people ask to come over to.\n\n${mdImage('/images/infographics/golf/gspro-buy-path.svg', 'GSPro buy path infographic for software, room, PC, and courses', 'IgnitionSim infographic: build the room in the right order before chasing course count.')}\n\n## What GSPro Actually Solves\n\nGSPro gives home-golf builders a better reason to finish the room. The big draw is the feeling of a living course library and a software ecosystem that community golfers actually talk about. The practical draw is different: once GSPro is the target, you can stop shopping vaguely and start asking better questions.\n\n- Does this launch monitor connect cleanly?\n- Does it need a bridge app, subscription, or specific firmware?\n- Does my PC have enough GPU headroom for the resolution I want?\n- Does the projector throw work before I drill anything?\n- Can I keep this stable when friends are over and nobody wants to troubleshoot?\n\nThe forums keep saying the same thing in different accents: GSPro happiness is rarely about the download. It is about the whole bay behaving like a system.\n\n${shotGrid([{ src: '/images/games/gspro/gspro-ball.png', alt: 'GSPro ball logo', label: 'Software signal.', note: 'This is the logo people are really buying into, but the bay underneath has to earn it.' }, { src: '/images/gear/golf/garmin-approach-r50.jpg', alt: 'Garmin Approach R50 launch monitor', label: 'Standalone temptation.', note: 'R50-style devices are attractive because the screen makes the bay feel less PC-dependent.' }, { src: '/images/gear/golf/foresight-gc3.jpg', alt: 'Foresight GC3 launch monitor', label: 'Premium data.', note: 'Foresight and Bushnell paths can be excellent, but software entitlements matter.' }, { src: '/images/gear/golf/uneekor-eye-mini-lite.jpg', alt: 'Uneekor Eye Mini Lite launch monitor', label: 'Room math.', note: 'Camera-based systems change hitting-area and lighting assumptions.' }, { src: '/images/gear/golf/sig10-enclosure.jpg', alt: 'SIG10 golf simulator enclosure', label: 'The catcher.', note: 'Screen and enclosure quality decide whether the room feels permanent or patched together.' }, { src: '/images/gear/golf/benq-ak700st.jpg', alt: 'BenQ AK700ST golf simulator projector', label: 'Projection tax.', note: 'A beautiful software image still needs throw distance, brightness, and safe mounting.' }])}\n\n## The Buy Path Nina Would Actually Use\n\n${mdImage('/images/infographics/golf/gspro-launch-monitor-fit.svg', 'GSPro launch monitor compatibility decision card', 'IgnitionSim infographic: the launch monitor is not just hardware. It is the software door handle.')}\n\n1. Pick GSPro or a competing software ecosystem first.\n2. Pick a launch monitor with a verified connection path.\n3. Draw the room in boring numbers: width, ceiling, hitting depth, projector throw, ball flight, side misses.\n4. Build the PC and network like a boring adult. Wired networking and stable drivers are romantic when guests are waiting.\n5. Add the pretty parts: course playlists, club rack, lighting, seating, and the screen-shot-worthy finish.\n\nThe sneaky mistake is buying a launch monitor because it appears in a beautiful product photo and then discovering your preferred software route is awkward, subscription-heavy, or community-dependent. That is not a disaster for tinkerers. It is a disaster for the golfer who just wants 18 holes after dinner.\n\n## What Owners Love\n\nThe owner praise tends to cluster around course variety, immersion, and the feeling that the software keeps getting more useful after the purchase. People like having a bay that can host a serious practice session, a casual round, or a late-night course wander without feeling like a sterile range screen.\n\nThe best compliment is not technical. It is social: when the bay works, non-obsessive friends understand the room immediately. They see the course, hit a ball, and stop asking why there is a projector in the garage.\n\n## What Owners Complain About\n\nThe complaints are practical: connector friction, update timing, launch monitor support confusion, PC fiddling, and the classic home-sim disease where one tiny device ruins a beautiful room. If your joy depends on everything working in five minutes, budget for boring reliability.\n\nNina's rule: if a product requires a forum thread to explain the connection path, read the whole thread before you buy the product.\n\n## What To Buy First\n\n${buyGrid([{ kind: 'Launch monitor', name: 'Garmin Approach R50', src: '/images/gear/golf/garmin-approach-r50.jpg', alt: 'Garmin Approach R50', note: 'A premium all-in-one monitor to research if you want screen-forward convenience. Confirm GSPro workflow before buying.', url: ama('Garmin Approach R50 launch monitor') }, { kind: 'Launch monitor', name: 'Uneekor Eye Mini Lite', src: '/images/gear/golf/uneekor-eye-mini-lite.jpg', alt: 'Uneekor Eye Mini Lite', note: 'A serious PC-bay candidate when you want data without jumping straight to overhead money.', url: ama('Uneekor Eye Mini Lite launch monitor') }, { kind: 'Projector', name: 'BenQ AK700ST', src: '/images/gear/golf/benq-ak700st.jpg', alt: 'BenQ AK700ST golf projector', note: 'Short-throw golf projection is room geometry, not decoration. Verify throw and mount position.', url: ama('BenQ AK700ST golf simulator projector') }])}\n\n## Bottom Line\n\nGSPro is worth building around if you are building a real home golf simulator, not a temporary net corner. It rewards people who plan the full system. Buy the software dream, yes, but buy the boring compatibility work first.\n\n${commonClosing(article)}`;
}

function msfsBody(article) {
  return `# ${article.title}\n\n${mdImage('/images/curator-scenes/generated/microsoft-flight-simulator-2024-review-2026-field-card.svg', 'Val Chen presenting Microsoft Flight Simulator 2024 cockpit build advice', 'AI curator scene with official MSFS visual proof. Val is here to keep the cockpit from becoming a USB crime scene.')}\n\n## Fast Verdict\n\n${verdictCards([{ kicker: 'Buy Now', title: 'MSFS 2024 is still the home-cockpit gravity well.', copy: 'For civil aviation, scenery, aircraft variety, and add-on culture, this is still the sim most builders orbit.' }, { kicker: 'Buy With Caveats', title: 'Performance and peripherals need patience.', copy: 'Treat the first week like cockpit commissioning, not a tourist flight.' }, { kicker: 'Wait', title: 'If you hate tinkering, watch updates first.', copy: 'MSFS can be majestic and fussy in the same evening. That is aviation, apparently.' }])}\n\nVal's line is simple: MSFS 2024 sells the sky, but your hardware sells the cockpit. The mistake is buying a radio stack before the yoke, throttle, rudders, USB power, and view control feel natural.\n\n${mdImage('/images/infographics/flight/msfs-control-order.svg', 'MSFS 2024 home cockpit hardware purchase order infographic', 'IgnitionSim infographic: controls first, panels later, fewer mystery disconnects forever.')}\n\n## The Cockpit Order That Actually Works\n\nThe forums are full of builders who love the dream and quietly admit the same hard truth: a cockpit is only as good as the control loop. A yoke that moves around, a sticky throttle, missing rudders, or a flaky hub ruins more sessions than a missing autopilot panel.\n\n${shotGrid([{ src: '/images/games/msfs-2024/msfs-2024-cockpit.jpg', alt: 'Microsoft Flight Simulator 2024 cockpit screenshot', label: 'The dream.', note: 'MSFS 2024 is strongest when the screen makes the room disappear.' }, { src: '/images/games/msfs-2024/msfs-2024-aircraft.jpg', alt: 'MSFS 2024 aircraft screenshot', label: 'The variety.', note: 'Aircraft choice is part of the appeal, but it can also push you into hardware sprawl.' }, { src: '/images/games/msfs-2024/msfs-2024-standard-box.png', alt: 'Microsoft Flight Simulator 2024 Standard edition key art', label: 'Edition math.', note: 'Start with the edition whose aircraft you will actually fly.' }, { src: '/images/gear/flight/honeycomb-alpha-yoke.jpg', alt: 'Honeycomb Alpha flight yoke', label: 'Primary control.', note: 'This is where the room starts feeling like a cockpit instead of a desk.' }, { src: '/images/gear/flight/honeycomb-bravo-throttle.jpg', alt: 'Honeycomb Bravo throttle quadrant', label: 'Throttle flow.', note: 'A good quadrant changes airliner and GA sessions more than another decorative panel.' }, { src: '/images/gear/flight/thrustmaster-tpr-pendular-rudder.jpg', alt: 'Thrustmaster TPR rudder pedals', label: 'Feet matter.', note: 'Rudders make landings and taxiing feel less like keyboard punishment.' }])}\n\n## Standard, Deluxe, Premium, Aviator\n\n${mdImage('/images/infographics/flight/msfs-edition-map.svg', 'MSFS 2024 edition buying guide infographic', 'IgnitionSim infographic: buy the aircraft you will fly, not the bundle that sounds most complete.')}\n\nMost home cockpit builders should start with the edition that matches their actual flying. If you are not sure, Standard plus hardware budget is usually wiser than a bigger edition and a wobbly desk clamp. Deluxe, Premium, and Aviator make sense when the included aircraft and airports are the point, not because the word premium feels safer.\n\n## What Makes It Great\n\nMSFS 2024 is still absurdly good at making a normal room feel like a departure gate, bush strip, storm cell, or night approach. It also has the ecosystem gravity that matters for builders: hardware companies support it, YouTube pilots teach it, forums debug it, and add-on makers keep feeding it.\n\nThe best sessions are not the most expensive. They are the ones where the yoke is stable, the throttle is mapped, the rudders work, the view control is natural, and you stop reaching for the keyboard.\n\n## What Can Kill The Weekend\n\nUSB weirdness, update surprises, add-on conflicts, graphics settings, and peripheral profiles. MSFS makes people chase panels before the basics are stable. Do the unglamorous work: powered hub, cable labels, saved profiles, stable mounting, and a backup settings note.\n\nVal's habit: every time a cockpit behaves, export the profile and write the date down. The future version of you is always grateful.\n\n## What To Buy First\n\n${buyGrid([{ kind: 'Yoke', name: 'Honeycomb Alpha', src: '/images/gear/flight/honeycomb-alpha-yoke.jpg', alt: 'Honeycomb Alpha yoke', note: 'A strong first yoke for builders who want GA and airliner control without immediate panel sprawl.', url: ama('Honeycomb Alpha yoke') }, { kind: 'Throttle', name: 'Honeycomb Bravo', src: '/images/gear/flight/honeycomb-bravo-throttle.jpg', alt: 'Honeycomb Bravo throttle', note: 'Still one of the easiest ways to make MSFS feel like a cockpit instead of a keyboard shortcut exam.', url: ama('Honeycomb Bravo throttle quadrant') }, { kind: 'Rudders', name: 'Thrustmaster TPR', src: '/images/gear/flight/thrustmaster-tpr-pendular-rudder.jpg', alt: 'Thrustmaster TPR rudder pedals', note: 'Expensive, serious, and worth considering when landings matter more than panel glitter.', url: ama('Thrustmaster TPR rudder pedals') }])}\n\n## Bottom Line\n\nMSFS 2024 remains the home-cockpit king because it makes hardware feel emotionally justified. Just build the cockpit in the right order. The sky can wait one weekend while you fix the USB hub.\n\n${commonClosing(article)}`;
}

function starCitizenBody(article) {
  return `# ${article.title}\n\n${mdImage('/images/curator-scenes/generated/star-citizen-review-2026-field-card.svg', 'Val Chen configuring Star Citizen HOSAS controls in a space sim cockpit', 'AI curator scene with real HOSAS proof. Val is smiling because the bindings finally survived a patch.')}\n\n## Fast Verdict\n\n${verdictCards([{ kicker: 'Buy Now', title: 'Yes, if six-axis flight is the point.', copy: 'Star Citizen can make dual sticks feel magical in a way normal flight sims do not.' }, { kicker: 'Buy With Caveats', title: 'It is still alpha-brained.', copy: 'Patch changes, bugs, and performance reality are part of the deal. Hardware does not delete that.' }, { kicker: 'Wait', title: 'If you only want polished missions, wait.', copy: 'The best hardware in the world cannot make an unfinished live universe behave like a boxed game.' }])}\n\nStar Citizen is the game that convinces rational adults to put two joysticks on desk mounts and call it practical. Sometimes it is. Sometimes it is an expensive lesson in bindings, cable routing, and patience. The difference is whether you build for how you actually fly.\n\n${mdImage('/images/infographics/space/star-citizen-hosas-hotspots.svg', 'Star Citizen HOSAS control mapping infographic', 'IgnitionSim infographic: the HOSAS dream works when each hand has a job you can remember under pressure.')}\n\n## What Changed In The 2026 Conversation\n\nThe Alpha 4.2.1 patch cycle keeps the universe moving, and that matters for buyers because a living alpha creates both excitement and churn. Reddit and HOTAS communities keep circling the same buyer question: do I buy a mainstream set, jump to VKB or Virpil, or wait for a cleaner all-in-one space solution?\n\nVal's answer: buy the layout first, the brand second. Dogfighters and low-altitude chaos pilots tend to love HOSAS. Haulers, explorers, and mixed-sim players can be perfectly happy with HOTAS. Big spenders who skip mounts are still wrong.\n\n${shotGrid([{ src: '/images/games/star-citizen/star-citizen-alpha-421.jpg', alt: 'Star Citizen Alpha 4.2.1 official image', label: 'Living alpha.', note: 'Patch momentum is the reason people keep building, and the reason patience is required.' }, { src: '/images/gear/space/vkb-gladiator-nxt-evo-space-combat-edition.jpg', alt: 'VKB Gladiator NXT EVO Space Combat Edition joystick', label: 'Value hero.', note: 'A frequent step-up pick before boutique metal money.' }, { src: '/images/gear/space/vkb-gladiator-nxt-evo-omni-throttle.jpg', alt: 'VKB Gladiator NXT EVO Omni Throttle', label: 'Left-hand trick.', note: 'Omni throttles help bridge throttle comfort and six-axis control.' }, { src: '/images/gear/space/virpil-constellation-alpha-prime.jpg', alt: 'Virpil Constellation Alpha Prime joystick', label: 'Boutique pull.', note: 'Wonderful if you know the layout you want and can afford the mount ecosystem.' }, { src: '/images/gear/space/winwing-ursa-minor-space.jpg', alt: 'WinWing Ursa Minor Space joystick', label: 'New challenger.', note: 'More competition is good, but read owner feedback on software and support.' }, { src: '/images/gear/space/monstertech-desk-mount.jpg', alt: 'Monstertech joystick desk mount', label: 'The hidden must.', note: 'Mounts turn dual sticks from desk clutter into a cockpit.' }])}\n\n## HOSAS vs HOTAS\n\n${mdImage('/images/infographics/space/star-citizen-buy-verdict.svg', 'Star Citizen HOSAS versus HOTAS buyer verdict infographic', 'IgnitionSim infographic: buy the control style that matches the flight loop, not the loudest forum reply.')}\n\nHOSAS is the closest physical match for six degrees of freedom. Your right hand aims and flies; your left hand translates, strafes, lands, mines, and handles velocity finesse. HOTAS remains easier for players who also fly DCS, MSFS, Elite, or big-ship loops where a throttle axis feels natural.\n\nThe forum wisdom worth stealing: do not over-map the first night. Make a survival profile first. Flight, landing, targeting, quantum, power, mining if you need it. Then add layers after your hands know where home is.\n\n## What Owners Love\n\nWhen it works, Star Citizen plus good controls is outrageous. Docking feels deliberate. Mining feels physical. Dogfighting becomes a hands-and-feet skill instead of a keyboard scramble. The game sells expensive hardware because the movement model actually uses it.\n\n## What Owners Warn About\n\nBudget sticks can develop twist-yaw wear. Boutique sticks can become overkill if you are not sure what role you play. Desk mounts, USB routing, and binding backups are not optional. And every patch can make you revisit settings, so save profiles like a person who values sleep.\n\n## What To Buy First\n\n${buyGrid([{ kind: 'Starter HOSAS', name: 'VKB Gladiator NXT EVO Space Combat Edition', src: '/images/gear/space/vkb-gladiator-nxt-evo-space-combat-edition.jpg', alt: 'VKB Gladiator NXT EVO Space Combat Edition', note: 'The practical serious start for many Star Citizen pilots before boutique spending.', url: ama('VKB Gladiator NXT EVO Space Combat Edition') }, { kind: 'Left-hand control', name: 'VKB Omni Throttle', src: '/images/gear/space/vkb-gladiator-nxt-evo-omni-throttle.jpg', alt: 'VKB Omni Throttle', note: 'A clever bridge for players who want throttle-ish comfort with space-sim movement.', url: ama('VKB Omni Throttle') }, { kind: 'Mounting', name: 'Monstertech Desk Mount', src: '/images/gear/space/monstertech-desk-mount.jpg', alt: 'Monstertech desk mount', note: 'Not glamorous. Absolutely cockpit-changing.', url: ama('joystick desk mount HOSAS') }])}\n\n## Bottom Line\n\nStar Citizen is worth building HOSAS around if the flight is your hobby, not just the backdrop for missions. Buy the control style, mounts, and binding patience as one package. Otherwise the dream turns into two expensive sticks sliding around a desk.\n\n${commonClosing(article)}`;
}

function bridgeBody(article) {
  return `# ${article.title}\n\n${mdImage('/images/curator-scenes/generated/bridge-command-review-2026-field-card.svg', 'Gus Calder testing a DIY ship bridge simulator control station', 'AI curator scene with real Bridge Command proof. Gus believes labels are a love language.')}\n\n## Fast Verdict\n\n${verdictCards([{ kicker: 'Buy / Build', title: 'Bridge Command is for DIY marine sim people.', copy: 'If you want a ship bridge project and can adapt controls, it is one of the most practical starting points.' }, { kicker: 'Buy With Caveats', title: 'The hardware market is thin.', copy: 'There is no consumer marine-control aisle waiting for you. Repurposing is the game.' }, { kicker: 'Skip', title: 'If you want plug-and-play polish, skip.', copy: 'This is a builder simulator. The fun is partly in making the bridge behave.' }])}\n\nBridge Command is a different animal from racing, golf, and flight. It does not sell itself with a glossy consumer cockpit ecosystem. It appeals to people who look at a spare USB board and think, yes, that could be a bow thruster panel.\n\n${mdImage('/images/infographics/marine/bridge-command-diy-loop.svg', 'Bridge Command DIY marine simulator build loop infographic', 'IgnitionSim infographic: marine sim control is a map, label, test, backup loop.')}\n\n## What Bridge Command Does Well\n\nBridge Command gives builders a practical ship simulator foundation, including multi-screen possibilities, vessel handling, and documented controller support. The official docs matter because this niche needs receipts. When a simulator documents joystick mapping and DIY throttle paths, that is not trivia. That is permission to build.\n\n${shotGrid([{ src: '/images/games/bridge-command/bridge-command-tug.png', alt: 'Bridge Command tug simulator screenshot', label: 'Ship handling.', note: 'The appeal is slower, heavier, and more procedural than most sim genres.' }, { src: '/images/games/bridge-command/bridge-command-control-room.jpg', alt: 'Bridge Command control room photo', label: 'Real room energy.', note: 'This is the kind of functional setup marine sim builders want to decode.' }, { src: '/images/games/bridge-command/bridge-command-multihead.png', alt: 'Bridge Command multihead display example', label: 'Multi-screen bridge.', note: 'More screens make sense only after controls are mapped.' }, { src: '/images/games/bridge-command/bridge-command-joystick-map.png', alt: 'Bridge Command joystick map documentation', label: 'Input proof.', note: 'Documentation like this is gold for DIY builders.' }, { src: '/images/gear/marine/leobodnar-bbi-32-button-box-interface.jpg', alt: 'Leo Bodnar BBI-32 button interface board', label: 'DIY buttons.', note: 'Boards like this make labeled marine panels realistic.' }, { src: '/images/gear/marine/raildriver-ship-throttle.jpg', alt: 'RailDriver control console used as sim throttle', label: 'Repurpose bench.', note: 'The best marine controls often start life in another niche.' }])}\n\n## The Marine Builder Reality\n\n${mdImage('/images/infographics/marine/bridge-command-control-options.svg', 'Bridge Command marine control options infographic', 'IgnitionSim infographic: start with practical control options before chasing a fantasy helm.')}\n\nThe community pattern is blunt: most marine sim builders adapt. A joystick can become helm input. A button box can handle lights, horn, camera, map, and view controls. A racing wheel or pedal set can test a concept. A DIY throttle can become the thing that makes the station feel like a bridge.\n\nGus's rule: if someone else has to use your bridge, label it like they are smart but tired.\n\n## What Owners Love\n\nBridge Command scratches a niche itch: vessel handling, approach, docking, slow-speed planning, and bridge workflow. It is not about twitch reactions. It is about making a little command station and feeling the weight of a vessel that does not care about your impatience.\n\n## What Owners Warn About\n\nThe hardware path is not standardized. You will research, wire, map, test, and remap. Some builders should start with software and a simple joystick before turning the spare room into a wheelhouse.\n\n## What To Buy First\n\n${buyGrid([{ kind: 'DIY board', name: 'Leo Bodnar BBI-32', src: '/images/gear/marine/leobodnar-bbi-32-button-box-interface.jpg', alt: 'Leo Bodnar BBI-32 board', note: 'A practical button-interface path for labeled marine controls.', url: ama('Leo Bodnar BBI-32 button box interface') }, { kind: 'Repurposed control', name: 'RailDriver-style console', src: '/images/gear/marine/raildriver-ship-throttle.jpg', alt: 'RailDriver control console', note: 'Worth studying as a repurposed lever/button station if you enjoy tinkering.', url: ama('RailDriver desktop train cab controller') }, { kind: 'Labels and wiring', name: 'Panel labels, USB hub, cable kit', src: '/images/gear/racing/powered-usb-hub.jpg', alt: 'Powered USB hub for sim controls', note: 'The boring kit that makes weird DIY controls usable by other humans.', url: ama('powered usb hub cable labels simulator cockpit') }])}\n\n## Bottom Line\n\nBridge Command is worth it if you want to build a ship bridge more than you want to buy a shiny appliance. It is niche, practical, and strangely charming. The people who love it are the people who enjoy turning a control problem into a room.\n\n${commonClosing(article)}`;
}

function evercadeBody(article) {
  return `# ${article.title}\n\n${mdImage('/images/curator-scenes/generated/evercade-physical-cartridge-sim-room-2026-field-card.svg', 'Mac Donovan presenting Evercade hardware as a physical media side station for a sim room', 'AI curator scene with real Evercade product proof. Mac approves of cartridges because they cannot be silently patched out of a shelf.')}\n\n## Fast Verdict\n\n${verdictCards([{ kicker: 'Buy Later', title: 'Evercade belongs after the core rig works.', copy: 'It is a fantastic physical-media side station, not a replacement for the wheelbase, projector, GPU, yoke, or launch monitor.' }, { kicker: 'Buy Now', title: 'If the room is also a retro hangout, yes.', copy: 'VS-R on a side display or EXP-R on the couch gives the sim room a visible cartridge culture.' }, { kicker: 'Skip', title: 'If you only want serious simulation, skip.', copy: 'Evercade is charm, preservation, and quick sessions. It is not telemetry, FFB, or training value.' }])}\n\nEvercade fits IgnitionSim as a side-station idea: the little physical shelf beside the expensive cockpit. It is not pretending to be a flight sim or a racing sim. It is the thing you play while a firmware update runs, the thing guests understand instantly, and the thing that makes a modern digital room feel less disposable.\n\n${mdImage('/images/infographics/racing/evercade-side-station-fit.svg', 'Evercade side station fit infographic for sim rooms', 'IgnitionSim infographic: nostalgia is allowed, but not before the cockpit budget survives.')}\n\n## Why It Feels More Relevant In 2026\n\nSony's PlayStation Blog announced that physical disc production for new PlayStation console games ends in January 2028. That does not make Evercade the future of everything, but it does make physical media feel less quaint. A cartridge ecosystem suddenly reads like a deliberate design choice instead of a retro gimmick.\n\nFor sim-room builders, that matters because these rooms are already about touch. Wheels, yokes, throttles, pedals, cartridges, boxes on shelves. Physical things make the room feel owned.\n\n${shotGrid([{ src: '/images/gear/racing/evercade-vs-r-exp-r.png', alt: 'Evercade VS-R and EXP-R hardware', label: 'The hardware.', note: 'Console or handheld, the appeal is tidy physical play.' }, { src: '/images/games/evercade/evercade-cartridges.jpg', alt: 'Evercade cartridge collection render', label: 'The shelf.', note: 'Cartridges make the room feel collected, not merely downloaded.' }, { src: '/images/games/evercade/evercade-cartridge-wall.jpg', alt: 'Evercade cartridges and packaging', label: 'Box culture.', note: 'This is the product-photo part that matters to collectors.' }, { src: '/images/games/evercade/playstation-physical-disc-context.jpg', alt: 'PlayStation physical disc production announcement image', label: 'Market signal.', note: 'Physical media scarcity gives Evercade a stronger cultural hook.' }, { src: '/images/gear/racing/samsung-odyssey-oled-g9-49.jpg', alt: 'Samsung Odyssey OLED G9 monitor', label: 'Side-screen logic.', note: 'A sim room often already has a display ecosystem Evercade can piggyback on.' }, { src: '/images/gear/racing/steelseries-arctis-nova-7.jpg', alt: 'SteelSeries Arctis Nova 7 headset', label: 'Guest mode.', note: 'Keep the rig serious and the side station low-friction.' }])}\n\n## Where It Belongs In A Sim Room\n\n${mdImage('/images/infographics/racing/evercade-buy-wait-skip.svg', 'Evercade buy wait skip infographic for sim room builders', 'IgnitionSim infographic: cartridge charm is real, but order of operations still matters.')}\n\nEvercade works best as a secondary play ritual. A small display near the rig. A handheld on the couch. A shelf of cartridges that gives the room a little museum energy. The danger is obvious: collectors can turn a modest side station into another budget leak.\n\nMac's rule: if your cockpit still slides, no new cartridge shelf. Fix the sliding.\n\n## What People Love\n\nThe love is tactile. Cartridges, cases, curated collections, and a console that does not ask you to manage a giant storefront. It feels finite in a way modern digital libraries often do not.\n\n## What People Warn About\n\nYou must actually like the collections. Do not buy hardware for the idea of physical media and then discover the library does not match your taste. Also, Evercade belongs in the fun budget, not the sim-performance budget.\n\n## What To Buy First\n\n${buyGrid([{ kind: 'Hardware', name: 'Evercade VS-R / EXP-R', src: '/images/gear/racing/evercade-vs-r-exp-r.png', alt: 'Evercade VS-R and EXP-R', note: 'The core choice: TV side station or handheld physical-media machine.', url: ama('Evercade VS-R EXP-R') }, { kind: 'Storage', name: 'Cartridge storage', src: '/images/games/evercade/evercade-cartridges.jpg', alt: 'Evercade cartridges', note: 'The whole point is the shelf. Make the shelf clean.', url: ama('Evercade cartridges storage') }, { kind: 'Display', name: 'Small HDMI gaming display', src: '/images/gear/racing/samsung-odyssey-oled-g9-49.jpg', alt: 'Gaming monitor for sim room side station', note: 'Use what you have, but a side display keeps guests out of the main rig settings.', url: ama('small hdmi gaming monitor') }])}\n\n## Bottom Line\n\nEvercade fits IgnitionSim if you treat it as sim-room culture, not sim-room performance. It is the physical-media side station for builders who want a room with objects, shelves, and quick fun between serious sessions.\n\n${commonClosing(article)}`;
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
