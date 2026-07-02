#!/usr/bin/env node
// Merges the deep persona research into src/data/crew.json — keeps every existing
// field and adds the rich personality/expertise layer. Backtick strings avoid all
// JSON-escaping hazards. Run: node scripts/build-crew.mjs
import fs from 'node:fs';
import path from 'node:path';

const P = path.join(process.cwd(), 'src/data/crew.json');
const existing = JSON.parse(fs.readFileSync(P, 'utf8'));
const byName = Object.fromEntries(existing.map((c) => [c.name, c]));

// persona additions keyed by name
const add = {
  'Duke Alvarez': {
    tagline: `Load paths and lap-time truth.`,
    since: `In sim racing since 2013 — started on a clamped-to-the-desk belt wheel, quit making excuses in 2017.`,
    origin: `Duke came in through iRacing endurance leagues on a Logitech G27 bolted to a flexing office desk, and spent two seasons blaming his consistency on the software. The night he watched his brake trace wander while the whole desk visibly rocked under threshold braking, it clicked: the hardware under the pedals was lying to his feet before the sim ever got a vote. He rebuilt around a rigid rig and a load-cell brake first — wheelbase last — dropped half a second a lap, and never trusted a wobbly deck again.`,
    expertise: [
      `Direct-drive wheelbase selection (MOZA, Fanatec, Simagic, Asetek, Simucube)`,
      `Load-cell vs hydraulic brake feel and take-up`,
      `Cockpit rigidity & flex diagnosis — 8020 profile vs steel vs folding`,
      `FFB gain staging and clipping avoidance (~85% peak utilization)`,
      `Quick-release standards & third-party wheel compatibility`,
      `Ecosystem lock-in mapping across bases, wheels, pedals`,
      `Bass-shaker / tactile telemetry via SimHub ShakeIt`,
      `Triple-screen vs 32:9 ultrawide field-of-view & mounting`,
      `Torque-to-frame matching — sizing rig stiffness to peak Nm`,
    ],
    credentials: `Duke has bought, mounted, and torn down enough rigs across every major ecosystem to diagnose flex by where a brake trace wanders, and he can read an in-sim FFB telemetry bar and tell you exactly where your gain is lying to you. His advice is grounded in force staging, load paths, and cross-ecosystem compatibility — the stuff that survives after the launch-hype reviews go quiet.`,
    signatureGear: { name: `Heusinkveld Sprint load-cell pedals`, why: `The brake is the pedal Duke measures every other rig against — repeatable pressure, a stiff plate that doesn't move under his heel, and a load cell he can dial without re-learning the car. It's the one box he'll tell you to buy before you ever touch a bigger wheelbase, because a brake that lies costs you more lap time than any missing Newton-meter.` },
    nowRunning: `Simagic Alpha Evo on a Sim-Lab GT1 Evo 80mm profile rig, Heusinkveld Sprint pedals with the heaviest brake spring stack, twin ButtKicker/Dayton BST-1 tactile under the seat driven by SimHub ShakeIt, and triple 27-inch screens for reference angles he actually trusts.`,
    catchphrase: `If the brake deck moves, the lap time lies.`,
    hillsToDieOn: [
      `Torque past 12Nm is mostly ego — above that you're buying arm fatigue and clipping headroom you'll never legally use, not fidelity. Spend the difference on the pedals and the frame.`,
      `Your first upgrade is never the wheelbase, it's the load path — a rigid rig and a real load-cell brake will drop more lap time than trading a 9Nm base for a 20Nm one on a rig that flexes.`,
      `A load-cell brake with a proper spring stack beats a cheap hydraulic every time — hydraulic's 'take-up' feel is real, but if the plate under it moves you've engineered authenticity into a wet noodle.`,
    ],
    petPeeve: `Reviews that quote peak torque to two decimal places and never once mention what the wheelbase is bolted to.`,
    favoriteSim: `iRacing for the FFB honesty; Assetto Corsa Competizione when he wants the tactile channel to do the talking.`,
    authorBio: `Duke Alvarez runs the Torque desk at IgnitionSim, translating wheelbases, pedals, cockpit rigidity, and ecosystem lock-in into buying orders that don't eat your wallet twice.`,
    trustLine: `Duke will tell you to spend less on the wheelbase and more on the frame and brake — advice that costs him nothing and saves you a wallet-eating second upgrade.`,
    scene: `/images/curator-scenes/duke-racing-cockpit-pedal-tuning-2.webp`,
    sceneAlt: `AI editorial scene of Duke Alvarez tuning load-cell pedals in a sim racing cockpit`,
    signatureTakes: [
      { q: `I've got $1,500 for a whole setup — where does it go?`, a: `Frame and pedals first, wheelbase last. Buy the stiffest rig your money allows — an 80mm profile or a well-triangulated steel rig — and a real load-cell brake, then whatever direct-drive base is left over in the 8-to-12Nm range. A 9Nm base on a rig that doesn't flex will teach you more than a 20Nm base on a deck that rocks. You can always upgrade the base into a rigid rig later; you can't un-flex a bad frame.` },
      { q: `Does ecosystem lock-in actually matter, or is everyone just brand-loyal?`, a: `It matters at the wallet, not the lap time. Fanatec's the closed console world — great if you need PlayStation or Xbox, expensive if you want to bolt on a third-party wheel. Simagic opened up its quick-release, MOZA sells a cheap adapter, and everyone's finally stopped pretending their QR is the only good one. Pick the base whose pedals and wheels you actually want, because that's the drawer you'll be buying out of for five years.` },
      { q: `My force feedback feels vague and lifeless in corners — more torque, right?`, a: `Almost never. That's clipping — your gain is set so high the signal flatlines and the car goes numb exactly when you need detail, mid-corner. Pull up the in-sim FFB telemetry bar, back the gain down until it only peaks in the heaviest braking, and aim for around 85% utilization. In iRacing, set Wheel Force to your base's real Nm and hit Auto per car. You'll feel the front end come alive without spending a dime.` },
    ],
  },
  'Nina Brooks': {
    tagline: `Room first, launch monitor second.`,
    since: `In home golf sims since 2016 — started measuring garages before she owned a launch monitor.`,
    origin: `Nina caught the bug the winter a SkyTrak showed up at her club's off-season practice bay and she realized she could keep her swing over the cold months at home — if she could just fit a bay in the garage. Her first build was a comedy of errors: a driver clipped a rafter on day one, and the projector she'd already bought threw a giant shadow of her own head across every shot. She spent the next year obsessively re-measuring, and somewhere in there discovered she was better at fitting the room to the golfer than she'd ever been at breaking 80.`,
    expertise: [
      `Ceiling-height & swing-arc clearance math`,
      `Photometric vs radar launch-monitor fit for the space`,
      `Impact-screen & enclosure sizing with buffer tolerances`,
      `Short-throw projector throw ratios & shadow geometry`,
      `Hitting-mat construction and turf-shock / joint longevity`,
      `Room-depth budgeting: tee line to screen to back wall`,
      `GSPro / E6 Connect / TGC software fit`,
      `Overhead vs floor-unit placement and dispersion`,
      `Left/right-hand switch-hitting layouts & side clearance`,
    ],
    credentials: `Nina has designed and re-measured dozens of home and garage bays around real walls, low rafters, and awkward depth, and can tell you before you buy which launch monitor your room will actually tolerate. Her judgment comes from hundreds of hours matching hardware to ceiling height, throw distance, and joint health — not from a résumé.`,
    signatureGear: { name: `A 25-foot tape measure and a laser distance meter`, why: `She measures ceiling height, tee-to-screen depth, and side clearance before anyone opens a shopping cart, because the room decides what you're allowed to buy. Every bad sim build she's ever seen skipped this step and paid for it in shadows, rafter dents, or a driver that never fit.` },
    nowRunning: `A garage bay with a Uneekor EYE XO overhead into GSPro, an Optoma 4K400STx short-throw at a 0.5:1 throw ratio, a Fiberbuilt Grass Series hitting mat, a 4:3 impact screen in a padded enclosure, and 9'6" of hard-won ceiling with a foot of buffer behind the screen.`,
    catchphrase: `Tell me your ceiling height and we'll go from there.`,
    hillsToDieOn: [
      `Ceiling height is the first spec, not the launch monitor — 9 feet lets you fake it with wedges, but you need a true 10 to swing driver without editing your swing, and no gadget buys back a rafter.`,
      `A bright 1080p short-throw beats a dim 4K every single time in a home bay; chase 3,500–4,000 lumens and a throw ratio under 0.6 before you ever chase pixels.`,
      `In a short room, radar is the wrong tool no matter how good the price looks — a Garmin R10 wants real ball flight, and a photometric unit that reads at impact will make your tight garage honest.`,
    ],
    petPeeve: `People who buy the launch monitor first and measure the ceiling last.`,
    favoriteSim: `GSPro on a Uneekor overhead — but she'll happily set you up on SkyTrak+ and E6 if the room and budget say so.`,
    authorBio: `Nina Brooks builds home golf-simulator bays room-first, matching launch monitors, screens, and projectors to the walls you actually have.`,
    trustLine: `Nina will tell you the honest launch monitor and projector your room can support — and talk you out of the one it can't — before you spend a dollar.`,
    scene: `/images/curator-scenes/nina-golf-bay-presenting.webp`,
    sceneAlt: `AI editorial scene of Nina Brooks presenting a home golf simulator bay`,
    signatureTakes: [
      { q: `I've got a garage with 8.5-foot ceilings. Can I still build a sim?`, a: `Yes, but let's be honest about what you're building: a short-game and iron room, not a driver bay. At 8.5 feet most people can swing wedges and mid-irons cleanly, but a driver will either clip the ceiling or force you to shorten your swing, which defeats the point of practicing at home. Put the money you'd spend chasing driver clearance into a good mat and a photometric monitor that reads at impact, and enjoy the room you actually have.` },
      { q: `Garmin R10 for $499 or save up for a SkyTrak+? It's an indoor garage.`, a: `Indoors in a garage, the R10's price is a trap — it's radar, and radar wants ball flight it won't get in a short room, so you'll be squinting at calculated numbers instead of measured ones. SkyTrak+ reads at impact and behaves in tight spaces, and the gap in trust between them indoors is worth the wait. If your budget genuinely stops at the R10, take it outside to the range where radar shines and keep the indoor dream on the shelf for now.` },
      { q: `My wrists are killing me after sim sessions. Is it my swing or my mat?`, a: `Before you blame your swing, look down — a firm foam-and-glue mat sandwiches your club between soft turf and a hard base, so hitting down and in is like hitting into steel, and that turf-shock travels straight up the shaft into your joints. A bristle or brush-style mat like the Fiberbuilt Grass Series lets the clubhead pass through with almost no resistance, and it's the single upgrade I've seen save the most elbows and wrists. A cheap mat saves you money once and then charges you interest every swing after.` },
    ],
  },
  'Val Chen': {
    tagline: `The calm systems brain of the cockpit.`,
    since: `In flight sim since 2012, on HOSAS since the Elite Dangerous alpha in 2014.`,
    origin: `Val came in through the 'just fly the tutorial' door of Elite Dangerous with a bargain-bin Thrustmaster T16000M, then spent a rainy weekend discovering the stick was fine and her USB situation was the problem — three devices sharing one unpowered hub, dropping out mid-supercruise. She rebuilt the whole desk around power and mounting instead of buying a bigger stick, and never looked back. What started as a fix for one flaky port turned into a decade of treating the cockpit as a wiring diagram with a seat attached.`,
    expertise: [
      `HOSAS/HOTAS axis mapping and 6DoF binding`,
      `Hall-effect gimbal cam & spring tuning (VKB, Virpil)`,
      `USB power topology & powered-hub device budgeting`,
      `SimAppPro / VPC Configurator multi-device management`,
      `Monstertech and 8020 cockpit mounting`,
      `MSFS 2024 profile recovery & sensitivity curves`,
      `DCS control profiles and modifier layering`,
      `Star Citizen / Elite Dangerous 6DoF flight models`,
      `TrackIR / OpenTrack head-tracking vs VR tradeoffs`,
    ],
    credentials: `Val has bound, rebound, and rescued control profiles across MSFS 2024, DCS, Star Citizen, and Elite Dangerous through every major peripheral generation, and can explain exactly why a stick "disconnects randomly" nine times out of ten before ever touching the stick itself. She reads gimbal cam charts and USB device trees the way other people read spec sheets.`,
    signatureGear: { name: `A powered 7-port USB hub with per-port switches`, why: `Modern throttle bases can enumerate as several USB devices at once, and a stick, throttle, pedals, panels, and a head tracker will quietly overrun an unpowered hub until things drop out mid-flight. A good powered hub with its own wall supply is the single cheapest part that turns a haunted cockpit into a boring, reliable one.` },
    nowRunning: `VKB Gunfighter Mk.III base with a Kosmosima grip on the right, VKB STECS throttle on the left running true HOSAS-plus-throttle, VKB T-Rudder pedals, all clamped to Monstertech desk mounts and fed through a single powered 7-port hub — TrackIR 5 up top, with a Quest 3 on the shelf for the days immersion wins over instrument clarity.`,
    catchphrase: `Bind for stress, route for sleep.`,
    hillsToDieOn: [
      `A random stick disconnect is almost never the stick — it's an unpowered hub or a throttle base registering as four USB devices, and no amount of premium gimbal fixes a power budget you never planned.`,
      `For a space sim with six degrees of freedom, HOSAS plus a throttle beats a single-stick HOTAS every time; if you can strafe, you should be able to bind strafe to an axis, not a hat.`,
      `VKB's swappable cams make a Gunfighter more tunable out of the box than a Virpil you can't re-feel without buying parts — 'what you get is what you get' is a feature list, not a compliment.`,
    ],
    petPeeve: `People who buy a $400 stick to fix a wobble that a $15 clamp and a real desk mount would have solved — the base was flexing, not the gimbal.`,
    favoriteSim: `DCS World and Elite Dangerous, with Star Citizen when I want to argue about axes.`,
    authorBio: `Val Chen owns IgnitionSim's flight and space bay, where she turns cockpit fantasies into control maps and cable plans that actually survive the weekend.`,
    trustLine: `Val will tell you when the cheaper stick is the right stick and when the problem was never the stick at all — she's more interested in your USB tree and your desk than in selling you torque you'll never bind.`,
    scene: `/images/curator-scenes/val-space-hosas-cable-check.webp`,
    sceneAlt: `AI editorial scene of Val Chen checking HOSAS cable routing at a flight and space sim desk`,
    signatureTakes: [
      { q: `HOTAS or HOSAS for Star Citizen and Elite Dangerous?`, a: `If you fly space combat, go HOSAS plus a throttle — space ships strafe, and dual sticks give you real axes for the extra degrees of freedom instead of stacking everything onto hats. If you're mostly trading, hauling, or exploring, a good HOTAS is genuinely fine and easier to learn. Start with a T16000M pair if you're unsure; it's cheap enough to find out which camp you're in before you commit.` },
      { q: `My stick keeps disconnecting randomly mid-flight — is it dying?`, a: `Almost certainly not. Check your power path first: a single unpowered hub feeding stick, throttle, pedals, and a tracker is the usual culprit, and some throttle bases register as multiple USB devices, which blows past what a passive hub can hold up. Move everything to a powered hub with its own wall supply, give the base its own port, and the 'dying' stick usually lives a long, quiet life.` },
      { q: `Is VKB or Virpil the better first premium stick?`, a: `For most people I say VKB Gunfighter, because it ships with swappable cams and a tunable clutch, so you can re-feel the stick without buying anything extra — you dial in the centering and travel you actually like. Virpil builds beautifully and their grips are gorgeous, but out of the box you get one feel and changing it means parts. Buy the one you can tune to your hand, not the one with the longest spec sheet.` },
    ],
  },
  'Gus Calder': {
    tagline: `The helm is whatever you can wire an axis to.`,
    since: `In sim hardware since 2011, in marine sim since a bargain-bin copy of Ship Simulator Extremes in 2013.`,
    origin: `Gus grew up crewing on other people's sailboats on weekends — enough to learn that a real helm is slow, heavy, and nothing like a game pad. He fell into ship sims looking for that feel indoors, discovered the marine shelf is basically empty, and spent a rainy winter following the Bridge Command 'make your own throttles and wheel' guide with a Leo Bodnar board and three potentiometers. He never left the workbench; every rig since has been borrowed parts talked into behaving like a bridge.`,
    expertise: [
      `Repurposing racing wheels & flight quadrants as helm/throttle axes`,
      `Bridge Command joystick config (rudder channel, throttle mapping, .ini)`,
      `Leo Bodnar BU0836A / potentiometer helm builds`,
      `Arduino Joystick-library DIY axes and button boxes`,
      `Throttle-quadrant detent vs continuous-axis mapping for ahead/astern`,
      `Sailaway, NAUTIS Home & Ship Simulator controller support`,
      `Azimuth / azipod and bow-thruster control on non-marine hardware`,
      `Autopilot & chart-plotter immersion without dedicated panels`,
      `Deadzone, axis inversion & non-linear curves for slow-vessel feel`,
    ],
    credentials: `Gus has personally wired helms out of a Logitech G27, a Saitek yoke-and-quadrant, and a Honeycomb Bravo, and can tell you which sims will actually bind each axis and which will silently ignore it. He reads the sim's config files before he buys anything, because in marine sim the software refusing an axis is the failure mode nobody warns you about.`,
    signatureGear: { name: `Leo Bodnar BU0836A 12-bit joystick controller board`, why: `It turns three cheap potentiometers into a helm, a throttle, and a rudder that Windows sees as a plain USB joystick — no drivers, no drama, the exact board the Bridge Command DIY guide is built around. When the marine shelf has nothing for you, this board is what lets you build the thing that should exist.` },
    nowRunning: `A Logitech G923 doing rudder duty next to a Saitek Pro Flight throttle quadrant mapped to ahead/astern, a homemade twin-lever azipod box on a Bodnar BU0836A, all feeding Bridge Command and NAUTIS Home on a Windows box, with an old tablet running a chart beside it for plotter immersion.`,
    catchphrase: `Hear me out — that's a helm now.`,
    hillsToDieOn: [
      `A racing wheel makes a worse helm than a slow potentiometer on a Bodnar board — 900 degrees of snappy self-centering is the opposite of how a real rudder behaves, and no amount of premium force feedback fixes wrong.`,
      `Before you spend a cent, open the sim's config file: if it won't expose the axis, the fanciest quadrant on Earth is just a paperweight with levers.`,
      `A flight-sim throttle quadrant with real detents beats a smooth analog lever for ship engine orders, because a bridge runs on telegraph steps — slow ahead, half, full — not a continuous slider you can never park on the same spot twice.`,
    ],
    petPeeve: `People who buy a $400 direct-drive wheel for a ship sim, then act surprised the boat doesn't feel like a boat.`,
    favoriteSim: `Bridge Command (and NAUTIS Home when I want prettier water).`,
    authorBio: `Gus Calder builds ship-bridge controls out of borrowed racing and flight hardware and has never met an axis he couldn't talk into steering something.`,
    trustLine: `Gus has actually built the marine helms he recommends out of racing and flight parts, and he'll tell you when the honest answer is a $20 board and a soldering iron instead of a purchase.`,
    scene: `/images/curator-scenes/gus-marine-throttle-helm.webp`,
    sceneAlt: `AI editorial scene of Gus Calder at a marine sim throttle and helm bench`,
    signatureTakes: [
      { q: `Can I just use my old Logitech G27 as a ship's helm?`, a: `Yes, and plenty of people do — map the wheel to rudder, the pedals or the shifter to ahead/astern, and the buttons to thruster and telegraph. The catch is the wheel wants to self-center hard and spin fast, which is nothing like a real helm, so turn the force feedback down or off and stretch the response curve out. It works; it just won't feel like tonnage until you slow it down in software.` },
      { q: `What's the cheapest way to get a real throttle for engine orders?`, a: `A used flight-sim quadrant — a Saitek or Thrustmaster TCA — is the sweet spot, because the physical detents line up beautifully with telegraph steps like slow, half, and full ahead. If you want it truly bespoke, a Leo Bodnar BU0836A and a couple of quality potentiometers gets you a twin-lever helm for the price of a pizza and an afternoon of soldering. Skip the smooth analog sliders; you can never park them on the same order twice.` },
      { q: `Why won't my sim recognize the axis I just wired up?`, a: `Because in marine sim that's the number-one gotcha, not a rare one. Open the config — in Bridge Command it's the joystick .ini and the rudder-channel and throttle-mapping lines — and confirm the sim actually reads that channel before you blame the hardware. Nine times out of ten the potentiometer is fine and the software simply isn't listening to the axis you assigned; if the sim won't expose it, no premium controller can negotiate with it.` },
    ],
  },
  'Mac Donovan': {
    tagline: `Where invisible failures get labeled.`,
    since: `In sim gear since 2011, on the DIY side since a 2014 bass-shaker build hummed like a beehive.`,
    origin: `Mac started by zip-tying a single Dayton shaker under a dining chair to feel curbs in rFactor, and spent the next weekend chasing a ground-loop hum he swore was a haunting. That rabbit hole — shielded RCA, star grounding, a ground-loop isolator that finally killed the buzz — turned a casual tinkerer into someone who reads a rig as a wiring diagram first and a cockpit second. Fifteen-odd builds later, half of them other people's rescues, he's the guy friends text at midnight when a USB device 'randomly' drops mid-race.`,
    expertise: [
      `SFX-100 / SimFeedback motion builds (stepper actuators, servo drives)`,
      `SimHub ShakeIt tactile tuning and effect routing`,
      `Arduino Pro Micro / Leonardo button boxes (Joystick.h, matrix wiring)`,
      `Bass shaker vs exciter selection (Dayton BST-1, TT25, ButtKicker)`,
      `Multi-channel tactile amps, crossovers & per-effect channel splitting`,
      `EMI / ground-loop diagnosis, star grounding, ferrite cores`,
      `Powered USB hub topology & brown-out troubleshooting`,
      `PWM wind-sim controllers (high-CFM fans, SimHub speed mapping)`,
      `Cable management, strain relief & label discipline`,
    ],
    credentials: `Mac has built and rescued enough DIY rigs to recognize a fault by its symptom — he can tell a USB brown-out from an EMI dropout from a flaky solder joint before he touches a multimeter. He knows the real spec sheets (which Dayton transducer is a rumble puck versus a full-range exciter, why a TT25 belongs in a pedal and not under a seat) and, more usefully, the failure modes the spec sheets never mention.`,
    signatureGear: { name: `A powered USB 3.0 hub with its own wall brick (self-powered, not bus-powered)`, why: `Half the 'my wheelbase randomly disconnects' mysteries are a bus-powered hub browning out under load, and no amount of premium hardware negotiates with a sagging 5V rail. A dedicated powered hub with clean grounding turns a haunted cockpit back into a boring, reliable one.` },
    nowRunning: `A DIY SFX-100 (four NEMA34 steppers on AASD-15A drives running SimFeedback), an 8020 cockpit with a Pro Micro button box he wired himself, four Dayton BST-1s plus a pair of TT25 pucks in the pedal deck split across a Nobsound multichannel amp, a GDSTIME high-CFM wind pair on a PWM SimHub controller, and every cable ferrite-cored, loomed, and label-printed.`,
    catchphrase: `Temporary wiring becomes permanent faster than pride admits.`,
    hillsToDieOn: [
      `One clean full-range exciter channel plus a real crossover beats four cheap shakers all fed the same muddy signal — separation is the whole point of tactile, and dumping every effect into one puck is just expensive vibration.`,
      `The SFX-100 doesn't earn its cost in lap time, it earns it in heave you can feel on curb strikes and jumps — if you're buying motion for the timing screen instead of the seat of your pants, save the money and add shakers.`,
      `Ninety percent of 'random USB disconnects' are power and EMI, not the device — before you RMA the wheelbase, fix the bus-powered hub, route the amp's power away from the data lines, and clamp a ferrite on the offender.`,
    ],
    petPeeve: `Unlabeled rat's-nest wiring behind a beautiful cockpit — the build Future You has to reverse-engineer with a flashlight at 1 a.m. because Past You "would definitely remember which wire that was."`,
    favoriteSim: `Assetto Corsa (the SimHub telemetry playground) and iRacing for shaking down a fresh tactile profile.`,
    authorBio: `Mac Donovan builds, breaks, and rescues DIY motion and tactile rigs, and treats every cockpit as a wiring diagram with a seat bolted on.`,
    trustLine: `Trust Mac on the boring electrical and wiring decisions that separate a rig that just works from one that acts haunted at 1 a.m.`,
    scene: `/images/curator-scenes/mac-diy-button-board-test.webp`,
    sceneAlt: `AI editorial scene of Mac Donovan testing a DIY button board at the electronics bench`,
    signatureTakes: [
      { q: `Should I build an SFX-100 or just buy a commercial motion platform?`, a: `Buy the commercial one if you value a Saturday afternoon over 25-plus hours of drilling, wiring, and swearing at servo drives — it works out of the box and that's worth real money. Build the SFX-100 if the tinkering IS the hobby and you want 3DOF with heave for roughly the price of a 2DOF commercial mover. Either way, reinforce the cockpit first: a mover only broadcasts how much your frame flexes, and a wobbly rig will make good motion feel cheap.` },
      { q: `How many bass shakers do I actually need to feel my car?`, a: `Fewer than the forums sell you, wired smarter than you'd think. Two decent transducers split into separate channels — one for low-end rumble under the seat, a lighter puck like a TT25 in the pedal deck for lockup and road texture — beats four identical shakers all fed the same full-mix signal. The magic isn't count, it's SimHub routing each effect to its own channel through an amp that can actually drive them; a shaker fed a muddy summed signal just buzzes.` },
      { q: `My wheelbase keeps disconnecting mid-race — is it dying?`, a: `Probably not, so put the credit card down. First suspect is power: a bus-powered USB hub sagging under a high-torque base will drop it every time, so move it to a self-powered hub with its own brick. Second suspect is EMI — run the amp and motor power away from your USB data cables, clamp a ferrite core on the offending line, and get everything on a common ground. Nine times out of ten it's dirty power or a coupling problem, not the hardware.` },
    ],
  },
};

const merged = existing.map((c) => ({ ...c, ...(add[c.name] || {}) }));
fs.writeFileSync(P, JSON.stringify(merged, null, 2) + '\n');
console.log(`Enriched ${merged.length} curators; fields now: ${Object.keys(merged[0]).length}`);
for (const c of merged) console.log(`  ${c.name}: +${Object.keys(add[c.name] || {}).length} fields, ${c.expertise?.length || 0} expertise, ${c.signatureTakes?.length || 0} takes`);
