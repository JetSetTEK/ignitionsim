---
title: "Bass Shakers & Tactile Feedback 2026: The SimHub Setup Guide"
description: "How to add bass shakers and tactile feedback to a sim rig in 2026 — what transducers do, the amplifier you can't skip, the full SimHub ShakeIt setup, wiring maps, and why it's the best-value upgrade in sim racing."
bay: "racing"
type: "how-to"
primaryKeyword: "sim racing bass shakers"
author: "Duke Alvarez"
publishDate: 2026-06-13
updatedDate: 2026-07-02
sourceReviewDate: 2026-07-02
revenueTier: "B"
contentCluster: "racing"
goldStatus: "refresh"
heroImage: "/images/gear/racing/buttkicker-gamer-pro.jpg"
heroAlt: "ButtKicker Gamer PRO tactile transducer and its 150W amplifier — the plug-and-play route into sim racing tactile feedback"
excerpt: "Force feedback talks to your hands. Tactile transducers talk to the rest of your body — wheelspin, lockups, kerbs and shift kicks felt through the seat. Here's the full SimHub build, wired step by step."
featured: false
readingTime: 12
faqs:
  - q: "What is a bass shaker and what does it do for sim racing?"
    a: "A bass shaker — properly a tactile transducer — is a magnet-and-coil unit built like a speaker driver but designed to move a heavy piston instead of air. Bolted to your seat or rig and fed by telemetry through SimHub, it lets you feel wheelspin, lockups, kerb strikes, road texture, gear shifts and engine RPM through your body — information your force-feedback wheel can't deliver to your hands. It's widely rated the highest-return-per-dollar immersion upgrade in sim racing."
  - q: "Do I need an amplifier for a bass shaker?"
    a: "Yes, and it must be a dedicated low-frequency (Class-D) amplifier — a regular hi-fi amp won't survive the constant low-frequency load. Your PC's audio output can't drive a transducer directly. Budget roughly 50W RMS per channel minimum at the shaker's impedance (usually 4 or 8 ohms), and pass frequencies down to about 20Hz. Big transducers want far more headroom, which is why bundles like the ButtKicker Gamer PRO ship with their own 150W amp."
  - q: "Is SimHub required for bass shakers?"
    a: "Effectively yes for real sim use. SimHub's ShakeIt Bass Shakers module reads the game's live telemetry and turns each signal — wheelspin, ABS, kerbs, RPM — into a specific frequency sent to your shakers. Without it you'd just get generic game-audio bass, which carries almost none of the separable information the ShakeIt effects do. ButtKicker's own HaptiConnect is a simpler native alternative for their newer units."
  - q: "How many audio outputs do I need, and where do I mount the shakers?"
    a: "You need two separate audio outputs: one for your normal game/headset audio and a second dedicated output feeding the amp that drives the shakers. Start with one or two transducers under the seat for the broad effects (road, kerbs, impacts), then add a smaller pair on the pedal tray for wheelspin and lockup felt through your feet. Always isolate the mounting bolt with dense rubber or Sorbothane, or the rig transmits vibration as rattle instead of feel."
  - q: "How much does a tactile setup cost?"
    a: "A DIY pair of Dayton Audio BST-1 shakers (~$30 each) plus a budget class-D amp (~$25-50) can get you into tactile for under $150 plus SimHub. A plug-and-play ButtKicker Gamer PRO with its bundled 150W amp runs around $200-350 depending on retailer. Both routes deliver the same core benefit; the ButtKicker trades money for skipping the impedance-matching and amp-selection homework."
related:
  - "best-ffb-settings-iracing-acc-lmu-2026"
  - "desk-vs-cockpit-sim-racing-2026"
  - "smart-upgrade-path"
---

Verdict first: **tactile feedback is the most under-bought, high-return upgrade in sim racing, and for the price of a set of decent pedals you can feel everything your force-feedback wheel never told you.** Force feedback is brilliant at exactly one thing — telling your hands what the front tyres are doing. It says almost nothing about the rear axle stepping out, the inside wheel spinning up out of a corner, the ABS pulsing under braking, or the bang of a kerb under the floor. That information already exists in the telemetry; it's just never reaching your body. **Tactile transducers, driven by SimHub, close that gap** — and dollar for dollar it's one of the highest-return upgrades you can make.

This is the full build: what a transducer actually is, the amplifier you can't skip, how SimHub turns telemetry into feel, the exact wiring, and where to bolt everything so it informs you instead of rattling the house. If you've already got your [force feedback dialed in](/racing/best-ffb-settings-iracing-acc-lmu-2026), this is the layer that comes next.

## What a tactile transducer actually is

A bass shaker — properly, a **tactile transducer** — is a magnetic vibration unit. It uses a magnet and a coil, the same architecture as a loudspeaker, but instead of pushing a paper cone to move air it drives a **heavy piston to move a surface.** (The ButtKicker Gamer PRO's driver, for example, throws a 1 lb piston.) Bolt it to the right surface and you don't hear it so much as feel it through your spine, hands and feet.

That's the key difference from "just add a subwoofer." A sub fills the room with generic bass tied to game audio. A transducer driven by **telemetry** delivers specific, separable events: this frequency is wheelspin, that one is the left-rear kerb, this pulse is ABS. It's information, not ambience — and the sim community's recurring line is that a well-mounted $200 shaker delivers more useful feedback than a badly-mounted motion platform many times the price.

## The amplifier you cannot skip

Here's where beginners get stuck: **a transducer is a passive device — it needs its own amplifier.** Your PC's headphone jack or motherboard audio cannot drive one. You run a line out from the PC into a dedicated amp, and the amp drives the shakers.

Just as important, it has to be the *right* amplifier. A tactile transducer pulls a constant low-frequency load, and a normal hi-fi amp will not last under it — the guides are blunt that consumer audio amps burn out. You want a dedicated **Class-D** amp that passes low frequencies (down to ~20Hz).

The numbers that matter:

- **Power:** minimum **~50W RMS per channel** at the shaker's impedance. More is better for headroom and clean low-frequency punch.
- **Impedance match:** shakers are usually **4 or 8 ohms** — your amp must be rated for it. (Note the ButtKicker Gamer PRO amp is rated 150W RMS *at 2 ohms*, matched to its own driver — always read power at the stated impedance, not the headline number.)
- **Low-frequency capability:** it should pass down to roughly 20Hz, where most of the felt information lives.
- **Channels:** one per independently-driven shaker (or per pair you want to run together).

The classic trap is starving a big transducer. Underpower one and you'll get a unit that thumps for a while and then goes quiet or shuts down mid-stint. Match the amp to the shaker and the problem disappears. This is exactly why the plug-and-play route below exists: a bundle sidesteps the whole impedance-and-wattage puzzle.

<aside class="gearpick">

  <a class="gp-shot" href="/racing/gear/buttkicker-gamer-pro"><span class="gp-tag">Amp bundled</span><img src="/images/gear/racing/buttkicker-gamer-pro.jpg" alt="ButtKicker Gamer PRO tactile transducer with its 150W amplifier" loading="lazy"></a>

  <div class="gp-body">
    <span class="gp-eyebrow">Tactile transducer · 150W amp bundled · verified</span>
    <span class="gp-name"><a href="/racing/gear/buttkicker-gamer-pro">ButtKicker Gamer PRO</a></span>
    <p class="gp-why">The shortcut past the underpowered-amp trap: a magnetic-suspension driver that hits harder than voice-coil shakers, and it ships with its own 150W amplifier (digital volume display, wireless remote, USB input) so you're not guessing at impedance matching. Its universal clamp fits round or square posts ~1 to 1.77 in, and it produces its effects even through headphones — so the room stays quiet while your spine doesn't. Runs on SimHub, or on ButtKicker's own HaptiConnect for a defaults-first setup.</p>
    <span class="gp-price">~$200 (amp included)</span>
    <span class="gp-actions">
      <a class="gp-review" href="/racing/gear/buttkicker-gamer-pro">Spec card</a>

    </span>
  </div>

</aside>

## What you need: the tactile stack

A tactile setup is three parts — transducer, amplifier, and SimHub — plus the mounting hardware to isolate it. Here's the stack at each budget tier. Only the ButtKicker Gamer PRO is a verified product on IgnitionSim; the DIY transducers and amps below are honest, widely-recommended options you'll source yourself (prices are documented ranges, not our own pricing).

| Layer | DIY budget tier | Plug-and-play tier |
|---|---|---|
| **Transducer** | 2x Dayton Audio BST-1 (~$30 each, 25W continuous) | [ButtKicker Gamer PRO](/racing/gear/buttkicker-gamer-pro) (magnetic-suspension driver) |
| **Amplifier** | Budget class-D e.g. Dayton Audio DTA-120 (~$50) or Nobsound mini-amp | Bundled 150W amp — nothing to buy or match |
| **Software** | SimHub ShakeIt Bass Shakers (free core) | SimHub, or ButtKicker HaptiConnect (defaults) |
| **Mounting** | M6 bolts + Sorbothane/rubber isolators | Universal clamp (~1–1.77 in posts) |
| **What you feel** | Road, kerbs, big impacts under the seat | + wheelspin, ABS, lockup, RPM, shifts once tuned |

**Bigger transducers exist** — the Dayton Audio BST-300EX (~$80, higher output), the ButtKicker LFE for aluminum-profile rigs, and pro-grade units like the Clark Synthesis TST — but they demand proportionally more amp. A high-output shaker on a 50W amp is the underpowering trap all over again. Match the pair, don't mix a big shaker with a small amp.

<div class="callout tip">

  <div class="ct">// Pro tip</div>
  <p>Buy the amp <strong>and</strong> the transducer as a matched pair before you buy anything else. The single most common beginner mistake is buying a big shaker on a cheap 20W amp, feeling a weak thump, and concluding tactile "doesn't do much." It does — you just starved it. If matching parts sounds like a chore, that's the entire reason the bundled-amp ButtKicker route exists.</p>

</div>

## SimHub: turning telemetry into feel

**SimHub is the universal answer** for tactile in sim racing, and its **ShakeIt Bass Shakers** module is the part that makes the whole thing worth doing. SimHub reads the live telemetry your game exports and maps each useful signal to a frequency band sent to your shakers. The effects you'll actually use:

- **Wheelspin / tyre slip** — rising rumble as the driven wheels break traction
- **Wheel lock / ABS** — a sharp pulse under threshold braking
- **Road texture** — surface detail under the seat
- **Kerbs / bumps** — directional thumps you can locate left or right
- **Gear shift** — a kick on each change
- **Engine RPM** — a baseline hum that rises with revs

You assign each effect to an output channel, set its frequency and intensity, and SimHub does the real-time conversion while you drive. **Pro tip:** don't run every effect at once on day one. The community consensus is **3–5 effects** — turn on **wheelspin and lockup first** (they carry the most actionable information), get them feeling right, then layer in road, kerbs and RPM. Stacking ten effects at full intensity immediately just produces mud you can't read.

If SimHub's depth feels like too much, ButtKicker's newer units run on **HaptiConnect**, which skips the learning curve and gives you working defaults out of the box. SimHub remains the more capable, more tunable route.

## The wiring: PC to amp to shaker

The physical chain is short, but the audio-routing step trips up almost everyone. The core rule: **you need two separate audio outputs** — one for the game/headset audio you want to hear, and a second, dedicated output that feeds the shaker amp. If you send SimHub's signal to your main output, your shakers fight your speakers.

Here's the full path and the SimHub setup, step by step:

| Step | What you do | Notes |
|---|---|---|
| 1. Second output | Free up a second PC audio output for the shakers | e.g. green aux jack, or a cheap USB sound card / monitor-out |
| 2. Amp input | Run that output into the amp's line-in (3.5mm → RCA, or USB) | ButtKicker Gamer PRO includes RCA-to-3.5mm and USB-C-to-A cables |
| 3. Amp to shaker | Speaker wire from amp output to the transducer terminals | Match impedance (4/8Ω); keep runs short and tidy |
| 4. SimHub module | In SimHub, open **ShakeIt Bass Shakers → Sound Output** | This is the tactile engine |
| 5. Select device | Enable your dedicated output; set **Mono** for a single shaker | Click **Test Now** to confirm the shaker fires |
| 6. Add effects | Enable 3–5 effects; adjust each effect's volume slider | Start: gear shift, RPM (low), one road effect, wheel lock/slip |
| 7. Launch via SimHub | Start the game from SimHub's **Games** tab | Ensures telemetry reaches ShakeIt |

<div class="callout tip">

  <div class="ct">// Pro tip</div>
  <p>Tune each effect's <strong>frequency</strong>, not just its volume. Pile every effect onto the same low band and they smear into one indistinguishable rumble. Put wheelspin and engine RPM on separate frequencies far enough apart that your body can tell them apart — that separation is what turns "vibration" into actual information you can drive on.</p>

</div>

## Mounting: isolation is everything

A transducer bolted rigidly to your rig will transmit its vibration through every panel as **noise** — you'll hear a buzzing rig and annoy the whole house while feeling less than you should. The fix is mechanical isolation.

**Always mount through dense rubber, a Sorbothane pad, or the thick-washer technique** — a rubber-isolated bolt that lets the shaker move the intended surface without coupling its high-frequency buzz into the rest of the frame. Do not bolt a transducer directly to the seat-rail metal. This applies whether you're mounting to the seat pan or to the aluminum profile of the rig itself.

Placement strategy:

- **Under the seat (start here):** one or two large shakers for the broad effects — road, kerbs, impacts, the stuff you feel through your back and hips.
- **Pedal tray (add second):** smaller exciters for wheelspin and lockup felt through your feet, which is exactly where a real driver senses traction at the contact patch.
- **Seat frame / floor platform (advanced):** extends the low end into the whole structure; four-corner kits split effects left/right for directional feel.

This is also a strong argument for a [real cockpit over a desk setup](/racing/desk-vs-cockpit-sim-racing-2026): you need solid surfaces to bolt shakers to, and an aluminum-profile rig gives you seat rails, pedal deck and side extrusion all ready to mount and isolate. A wobbly desk has nowhere good to put a transducer.

<div class="callout forum">

  <div class="ct">// From the forums</div>
  <p>The recurring tactile-thread verdict: it's "the upgrade I should have bought before a stronger wheelbase." People consistently report that adding wheelspin and lockup tactile did more for their car control and consistency than another 6Nm of torque would have — because it filled in the rear-axle and traction information FFB simply doesn't carry. The two perennial warnings: don't underpower your transducer, and isolate your mounts or you'll drive the household insane. And once it's dialed, almost nobody turns it back off.</p>

</div>

## Warnings before you buy and bolt

- **Amp power and heat.** Underpowering a big transducer is the #1 disappointment. Buy a matched amp with real headroom; a starved shaker feels weak and can cut out mid-session. Never run a general-purpose hi-fi amp long-term — the constant low-frequency load kills consumer audio amps.
- **Impedance matching.** Read amp power *at the shaker's stated impedance* (4 or 8Ω — the ButtKicker's 150W figure is at 2Ω for its own driver). A mismatch either underdrives the shaker or overloads the amp.
- **Isolation and mounting.** A rigidly-bolted transducer becomes a noise-maker. Always mount through rubber or Sorbothane, and give a big shaker a solid surface — not a flexy desk.
- **Wiring safety.** Keep speaker runs short and correctly polarized, don't short the amp terminals, and route cables clear of moving pedals and the seat slider. Power the amp down before changing connections.
- **SimHub effect tuning.** More effects is not more feel. Start with 3–5, separate them by frequency, and resist maxing every slider — over-driven effects clip into mud and can mask the ones that matter.

## Who should skip it

If you're still on a [starter bundle and haven't sorted pedals yet](/racing/smart-upgrade-path), tactile is premature — a load-cell brake comes first. And if you race in a shared room with thin walls and zero tolerance for low-frequency rumble, even isolated shakers can be a problem; tactile is felt *and* heard, and there's a floor on how quiet it gets. (The ButtKicker's works-through-headphones trick helps, but it doesn't make the physical vibration silent to the room.)

## The verdict

Tactile feedback is the most under-bought, high-return upgrade in sim racing. For a **modest two-shaker-plus-amp budget you'll feel wheelspin, lockups, kerbs and impacts** your wheel never told you about — and your consistency will climb because you finally know what the rear of the car is doing. Buy shakers matched to a properly-powered amp, run them through **SimHub's ShakeIt module** (or ButtKicker's HaptiConnect for defaults), wire a dedicated second audio output, start with wheelspin and lockup, and **isolate every mount.** It won't make your FFB stronger, but it'll make you a more informed, faster, and frankly more grinning driver. If you'd rather not source and match parts, the bundled-amp [ButtKicker Gamer PRO](/racing/gear/buttkicker-gamer-pro) is the one-box way in.

## Visual Setup Maps

![PC to amp to shaker: the tactile signal chain](/images/infographics/racing/bass-shakers-tactile-feedback-simhub-2026-wiring-chain.png)

![Which SimHub effects to turn on first](/images/infographics/racing/bass-shakers-tactile-feedback-simhub-2026-simhub-effect-order.png)

## Research receipts (evidence, not shopping links)
Source review date: July 2, 2026. Every figure here is a documented spec or a widely-repeated community range, attributed below — tactile feel is per-rig, per-mount and per-driver, so treat power and price numbers as starting points, not absolutes.

Manufacturer + product specs: [ButtKicker Gamer PRO (official)](https://thebuttkicker.com/products/buttkicker-gamer-pro), [ButtKicker Haptics (models overview)](https://thebuttkicker.com/), [Dayton Audio SAB-1060 / ShakeIt Bass Shaker SimHub guide (PDF)](https://www.daytonaudio.com/images/resources/325-510--SAB-1060-SimHub-ShakeIt-Bass-Shaker-Guide.pdf), [Dayton Audio at SIMLINE](https://simline.eu/en/brand/dayton-audio).

Setup + how-to guides (paraphrased in our voice): [SimRacingCockpit — ButtKicker & tactile feedback beginner's guide](https://simracingcockpit.gg/buttkicker-sim-racing-tactile-feedback/), [Pagnian Imports — SimHub ButtKicker setup](https://pagnianimports.com.au/blogs/news/simhub-guide-buttkicker-setup), [Sim Coaches — bass shaker setup guide](https://simcoaches.com/blogs/best-hydraulic-sim-racing-pedals-2025/bass-shaker-setup-guide-for-sim-racing-under-seat-transducer-effects), [AMSTUDIO — budget bass shaker install & setup](https://amstudioprojects.com/ready-to-rumble-how-to-install-and-setup-budget-bass-shakers/).

Community + tooling: [SimHub ShakeIt / bass shakers forum](https://www.simhubdash.com/community-2/simhub-support/bass-shakers/), [OverTake.gg bass-shaker threads](https://www.overtake.gg/tags/bass-shaker/), [Boosted Media — ButtKicker Gamer 2 install & software review](https://boostedmedia.net/technology/buttkicker-gamer-2-unboxing-installation-software-setup-and-review/).
