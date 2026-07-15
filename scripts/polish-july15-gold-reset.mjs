import { readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const root = new URL('..', import.meta.url).pathname;

const plans = {
  'src/content/articles/flight/g1000-hardware-flightsimbuilder-vs-realsimgear-vs-moza-mgx1000-2026.md': {
    headings: [
      '## What does each G1000 system actually look like?',
      '## Why is FlightSimBuilder the value recommendation?',
      '## Why does RealSimGear cost more?',
      '## Is MOZA MGX1000 the new value king?',
      '## Which avionics variants are not interchangeable?',
      '## How hard is the USB and display setup?',
      '## What causes returns or disappointment?'
    ],
    classes: ['product-proof', 'product-proof', 'use-proof', 'product-proof', 'use-proof', 'product-proof', 'product-proof'],
    scenes: [
      ['## Why does RealSimGear cost more?', '/images/curator-scenes/july15-reset/val-g1000-procedure-flight.webp', 'Val uses a generic glass-cockpit trainer to test the only premium question that matters: does the hardware improve the procedure, or merely decorate the desk?', 'A premium panel earns its keep when the hand goes to the right knob without a translation step.'],
      ['## Which avionics variants are not interchangeable?', '/images/curator-scenes/july15-reset/val-g1000-depth-gauge.webp', 'Val measures the panel depth, mount clearance, and connector service space before treating any bezel as interchangeable.', 'A front dimension tells you what fits in a photograph. Rear clearance tells you what fits in a build.'],
      ['## How hard is the USB and display setup?', '/images/curator-scenes/july15-reset/val-g1000-cable-route-v2.webp', 'Val labels USB, display, and power paths before the panels are buried in a cockpit shell.', 'Commission one panel first, record its ports, then add the second. Mystery USB problems love simultaneous installs.']
    ],
    researchHeading: '## What causes returns or disappointment?',
    research: 'The most expensive disappointment is buying by bezel resemblance while ignoring software architecture. A two-panel trainer can add multiple displays, USB devices, power supplies, and a mounting problem at once. Owners who report stable procedure stations tend to commission one device at a time, preserve a known-good port map, and verify the exact aircraft or avionics variant before panel fabrication. The value decision is therefore not simply panel price: it is the cost of a repeatable, supportable station.'
  },
  'src/content/articles/flight/moza-ay210-vs-brunner-cls-e-vs-flitesim-cls-60-ffb-yokes-2026.md': {
    headings: [
      '## What are you really buying with a force-feedback yoke?',
      '## Which yoke wins for most enthusiasts?',
      '## When is Brunner worth the premium?',
      '## Why would you choose FliteSim CLS-60 or CLS-120?',
      '## What will installation actually consume?',
      '## What do owners love after the honeymoon?',
      '## What makes people regret or return one?'
    ],
    classes: ['use-proof', 'product-proof', 'use-proof', 'product-proof', 'product-proof', 'product-proof', 'product-proof'],
    scenes: [
      ['## Which yoke wins for most enthusiasts?', '/images/curator-scenes/july15-reset/val-yoke-flight-load.webp', 'Val evaluates force feedback from the seat: control loading, trim movement, stall cues, and whether the shoulder can stay relaxed.', 'Force feedback is valuable when it communicates aircraft state. Vibration alone is theater.'],
      ['## What will installation actually consume?', '/images/curator-scenes/val-msfs-cockpit-tuning-original.webp', 'Val tunes the installed controls from the pilot seat, where reach, travel, knees, and cable clearance become obvious.', 'The base weight is only the first number. Measure clamp reach, desk thickness, shaft travel, knees, power brick, and cable bend radius.'],
      ['## What makes people regret or return one?', '/images/curator-scenes/july15-reset/val-yoke-software-calibration.webp', 'Val calibrates physical motion against a known test profile instead of judging a fresh install by one dramatic effect.', 'Do not decide whether FFB works from a runway rumble. Confirm telemetry, trim movement, centering, autopilot behavior, and stall loading separately.']
    ],
    researchHeading: '## What makes people regret or return one?',
    research: 'Fresh July 2026 owner discussion makes the verdict more nuanced. Pilots praise the AY210 as an unusually strong value and repeatedly say that going back to a spring yoke is difficult after genuine control loading. The counter-pattern is equally important: some owners describe software freezes, telemetry that was never activated, yokes that felt like vibration plus centering, plastic fit issues, or slow international support. One user only reached the expected behavior after launching the simulator through MOZA Cockpit until telemetry reported active. Buy the hardware, but reserve the return window for commissioning rather than admiration.'
  },
  'src/content/articles/flight/vkb-stecs-vs-virpil-vmax-vs-winctrl-orion2-throttle-2026.md': {
    headings: [
      '## What does each throttle do best?',
      '## Why is VKB STECS the least-regret choice?',
      '## Who should buy Virpil VMAX Prime?',
      '## When is WINCTRL Orion2 F-15EX the better buy?',
      '## Which one fits a desk, mount, and human arm?',
      '## How should detents be commissioned?',
      '## How should one throttle serve DCS, MSFS, and space sims?',
      '## What causes regret?'
    ],
    classes: ['product-proof', 'product-proof', 'product-proof', 'product-proof', 'use-proof', 'product-proof', 'product-proof', 'use-proof'],
    scenes: [
      ['## Which one fits a desk, mount, and human arm?', '/images/curator-scenes/july15-reset/val-throttle-seated-reach.webp', 'Val sets throttle height from the seated elbow, then marks the rail. Ergonomics are measured in the body, not the catalog.', 'If your shoulder lifts at military power, the mount is wrong even when the throttle is excellent.'],
      ['## How should detents be commissioned?', '/images/curator-scenes/july15-reset/val-throttle-detent-swap-v2.webp', 'Val swaps a detent frame at the bench and keeps the screws, profile, and calibration notes together.', 'A detent is a physical promise. Calibrate the software range after every mechanical change or the promise becomes a dead zone.'],
      ['## What causes regret?', '/images/curator-scenes/july15-reset/val-throttle-mount-audit.webp', 'Val watches a second pilot move the throttle through full travel and catches a cable snag that a product photo could never reveal.', 'Commission from idle to stop with the cable connected and the chair occupied. The last ten percent of travel finds every lazy mount.']
    ],
    researchHeading: '## What causes regret?',
    research: 'The current owner split is sharper than a feature table suggests. STECS keeps winning multi-airframe recommendations because the button modules, front-mounted ministick, software depth, and changeable detents solve practical reuse. VMAX attracts buyers who prioritize metal finish and premium feel, but several experienced owners question its grip ergonomics. Orion2 earns fierce loyalty for aircraft-specific control density and metal tactility, while support history and software are the recurring caveats. This is not quality versus quality; it is adaptable system versus premium object versus replica identity.'
  },
  'src/content/articles/marine/marine-sim-twin-engine-throttle-controls-2026.md': {
    headings: [
      '## What real hardware can a home marine builder use?',
      '## Why is an aircraft quadrant the correct first test?',
      '## When is Honeycomb Bravo the best appliance?',
      '## When should you build a real twin lever?',
      '## How does Bridge Command map physical controls?',
      '## What should the mechanism feel like?',
      '## What should you buy?'
    ],
    classes: ['product-proof', 'use-proof', 'product-proof', 'product-proof', 'product-proof', 'product-proof', 'use-proof'],
    scenes: [
      ['## When should you build a real twin lever?', '/images/curator-scenes/july15-reset/gus-marine-plywood-prototype.webp', 'Gus proves lever spacing, throw, and neutral with a plywood prototype before spending money on a finished helm.', 'Build the ugly lever first. The hand will tell you where neutral, reverse, and separation belong.'],
      ['## How does Bridge Command map physical controls?', '/images/curator-scenes/gus-bridge-command-wiring-calibration.webp', 'Gus checks port and starboard at full reverse, neutral, and full ahead while watching the software axes.', 'A beautiful twin lever with crossed axes is a sculpture. Calibrate each engine independently, then test asymmetric thrust.'],
      ['## What should the mechanism feel like?', '/images/curator-scenes/july15-reset/gus-marine-bridge-run.webp', 'Gus operates a bright bridge trainer and keeps his eyes outside while his hands find both levers by feel.', 'Marine immersion comes from unambiguous neutral and independent engines, not from the lever looking nautical in a photograph.']
    ],
    researchHeading: '## When should you build a real twin lever?',
    research: 'Bridge Command’s own documentation supports physical joystick and throttle mapping, including fixed points that translate lever position to engine revolutions. That makes a DIY controller technically credible, but the software is the easy half. The real project is two durable mechanical levers with repeatable neutral, reverse travel, strain relief, service access, and independent calibration. Borrow the logic of real dual-function marine controls, not their electrical protocol: each hand needs to understand ahead, neutral, and astern without looking.'
  },
  'src/content/articles/space/star-citizen-mining-salvage-control-deck-2026.md': {
    headings: [
      '## What does real mining gameplay ask your hands to do?',
      '## Stream Deck Plus, XL, or physical modules?',
      '## What should be on the first mining page?',
      '## How should salvage differ?',
      '## How do you keep the deck working after a patch?',
      '## What do builders love?',
      '## What makes the setup annoying?',
      '## Beginner, intermediate, and advanced builds'
    ],
    classes: ['use-proof', 'product-proof', 'use-proof', 'product-proof', 'product-proof', 'product-proof', 'product-proof', 'product-proof'],
    scenes: [
      ['## Stream Deck Plus, XL, or physical modules?', '/images/curator-scenes/july15-reset/val-star-citizen-hybrid-deck.webp', 'Val separates visible mode controls from the one analog axis that must remain precise.', 'If a control changes a state, label it. If it changes an amount, put it on an axis.'],
      ['## How should salvage differ?', '/images/curator-scenes/july15-reset/val-star-citizen-salvage-shift.webp', 'Val operates a fictional salvage station to test whether mode color and control placement remain obvious under workload.', 'Mining and salvage may share a deck, but they should not share a visual state. Make the active career obvious from peripheral vision.'],
      ['## How do you keep the deck working after a patch?', '/images/curator-scenes/july15-reset/val-star-citizen-patch-recovery.webp', 'Val restores a dated profile, USB order, and printed physical map before rebuilding cosmetic pages.', 'Patch recovery order is flight, safety, career loop, then decoration. The icons can wait until the ship can land.']
    ],
    researchHeading: '## What makes the setup annoying?',
    research: 'Current binding discussions keep converging on the same maintenance lesson: copied profiles are useful scaffolding, not truth. Device order, inversion, modifiers, left-versus-right stick identity, plugin behavior, and patch changes can all invalidate a beautiful layout. The deck is successful only when a printed map, exported action profile, Stream Deck backup, and known USB topology let you restore the career loop without rediscovering it from scratch.'
  }
};

function extractFigures(markdown) {
  const match = markdown.match(/<div class="shotgrid">([\s\S]*?)<\/div>/);
  if (!match) throw new Error('shotgrid missing');
  const figures = [...match[1].matchAll(/<figure>([\s\S]*?)<\/figure>/g)].map((entry) => entry[1].trim());
  return { markdown: markdown.replace(match[0], ''), figures };
}

function figureHtml(content, extraClass) {
  return `<figure class="proof-wide ${extraClass}">${content}</figure>`;
}

function curatorHtml(src, caption, quote) {
  const curator = src.includes('/gus-') ? 'Gus' : 'Val';
  return `<figure class="proof-wide curator-proof"><img src="${src}" alt="${caption}" loading="lazy"><figcaption><b>${caption}</b><span>AI-assisted editorial scene; no retail product or game interface is being represented.</span></figcaption></figure>\n\n<div class="callout tip"><div class="ct">// ${curator}'s bench note</div><p>${quote}</p></div>`;
}

for (const [relative, plan] of Object.entries(plans)) {
  const path = join(root, relative);
  let markdown = await readFile(path, 'utf8');
  const extracted = extractFigures(markdown);
  markdown = extracted.markdown;

  extracted.figures.forEach((figure, index) => {
    const heading = plan.headings[index];
    if (!heading) return;
    markdown = markdown.replace(heading, `${heading}\n\n${figureHtml(figure, plan.classes[index] || 'product-proof')}`);
  });

  for (const [heading, src, caption, quote] of plan.scenes) {
    markdown = markdown.replace(heading, `${heading}\n\n${curatorHtml(src, caption, quote)}`);
  }

  markdown = markdown.replace(plan.researchHeading, `${plan.researchHeading}\n\n${plan.research}`);
  markdown = markdown.replace(/updatedDate: "2026-07-15"/, 'updatedDate: "2026-07-15"');
  await writeFile(path, markdown.replace(/\n{4,}/g, '\n\n\n'));
  console.log(`polished ${relative}: ${extracted.figures.length} proof figures, ${plan.scenes.length + 1} curator moments`);
}
