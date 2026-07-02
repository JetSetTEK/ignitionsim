---
title: "Mapping Software for Marine Sims: The AntiMicroX, JoyToKey, vJoy and reWASD Playbook"
description: "Most marine sims ignore your throttle and wheel because they only read the keyboard. Here is the honest, tool-by-tool workflow to force eSail, Sailaway and Ships At Sea to listen to your hardware."
bay: "marine"
type: "how-to"
primaryKeyword: "marine sim mapping software"
author: "Gus Calder"
publishDate: 2026-06-10
updatedDate: 2026-07-02
heroImage: "/images/gear/marine/thrustmaster-twcs-throttle-engine-lever.jpg"
heroAlt: "A repurposed flight throttle lever standing in as a ship's engine control — the exact analog hardware that mapping software exists to bring to life"
excerpt: "The hard gate in marine sim is not hardware — it is software. Many titles only read keyboard input, so your analog throttle does nothing. This is the candid, tool-by-tool guide to fixing that, with 2026 prices verified."
featured: false
goldStatus: "refresh"
sourceReviewDate: 2026-07-02
revenueTier: "B"
contentCluster: "marine"
readingTime: 10
faqs:
  - q: "Why doesn't my throttle or wheel work in marine sims?"
    a: "Many marine titles only read keyboard-style digital input, so an analog axis maps to nothing at all. The fix is glue software — AntiMicroX, JoyToKey, reWASD or vJoy — that translates your axis movement into key presses or a clean virtual controller the game will accept."
  - q: "What is the best free mapping software for sailing sims?"
    a: "AntiMicroX is the strongest free choice and is the community's default for axis-to-key mapping in eSail. It is the actively-maintained fork of the older AntiMicro (which stopped being updated in 2016), it is GPL open source, and it costs nothing. JoyToKey is a close second with a small $7.50 license after a free trial."
  - q: "How much does reWASD cost in 2026?"
    a: "reWASD is no longer the cheap one-time purchase it once was. As of 2026 it sells a Lifetime Access plan from around €34.99 (roughly $35+) plus 3-month and 1-year subscriptions; the old ~€7 legacy license is grandfathered for existing owners only and is not sold to new users. Check current pricing before buying — for most marine mapping, free AntiMicroX does the same job."
  - q: "What does vJoy do that JoyToKey doesn't?"
    a: "vJoy creates a virtual controller device but translates nothing on its own — it needs a feeder application driving it. You feed it with a tool like JoyToKey so a stubborn game sees one clean virtual joystick instead of three competing physical ones. It solves device-priority conflicts, not key mapping itself."
  - q: "Do I turn the game's controller setting off when using mapping software?"
    a: "Usually yes. eSail's community guidance is explicit: turn Controller OFF in eSail Settings so the game does not fight your remapped input. Leave it on only if the game has genuine native axis support you actually want to keep."
  - q: "Will mapping software give me analog throttle control or just on/off?"
    a: "Axis-to-key mapping is stepped, not smooth — you assign zones of travel to different keys. For true analog you need a game with native axis support; no glue software can invent analog control the engine never reads."
related:
  - marine-sim-controller-support
  - racing-wheel-boat-helm
  - marine-sim-hardware-reality
  - best-budget-marine-sim-setup
---

Verdict first: **the wall in marine sim is software, not hardware — and you clear it for free.** Most marine titles only read keyboard-style input, so your analog throttle lever does literally nothing until you bolt on glue software that fakes key presses from axis movement. **Start with AntiMicroX, always set a center deadzone, and turn the game's controller setting off.** Only escalate to the vJoy decoy when multiple USB devices collide, and only pay for reWASD if the free tools genuinely frustrate you — and know that in 2026 reWASD is a €35+ purchase, not the pocket-change it used to be. It will never be true analog on a game that does not support it, but it turns a dead lever into a working engine telegraph, and on this thin a market that is the difference between a rig you use and a rig that gathers dust.

The dirty secret of the marine bay is that the hardware is the easy part. You can repurpose a racing wheel into a helm and a flight throttle into an engine telegraph in an afternoon — that whole story is in the [marine sim hardware reality check](/marine/marine-sim-hardware-reality). The wall you hit next is software: a large share of marine titles only accept **keyboard-style digital input**, so your wheel's analog sweep collapses into a binary left/right and your beautiful throttle lever does precisely nothing. In eSail, the community's own hardware guides say it plainly — there is no native controller support for axes, so you reach for outside tools. This is the guide to those tools, written the way simmers actually use them, with the failure modes named and the 2026 prices checked.

## The four tools, and what each one is actually for

These are not interchangeable. Picking the wrong one is how people spend an evening swearing at a stationary throttle.

| Tool | Cost (verified July 2026) | What it does | Best for |
|---|---|---|---|
| **AntiMicroX** | Free (GPL open source) | Maps controller/joystick axes and buttons to keystrokes | The default for axis-to-key in sims with no native support |
| **JoyToKey** | $7.50 license (free unlimited trial) | Axis/button to keystroke, plus feeding a virtual device | Button-heavy mapping, vJoy feeding |
| **reWASD** | Lifetime from ~€34.99, or subscription | Polished remapping, virtual controller emulation, layered profiles | People who want it to just work and will pay for polish |
| **vJoy** | Free | Creates a *virtual* joystick device (needs a feeder) | Resolving device-priority conflicts, not key mapping |

The key mental model: **AntiMicroX, JoyToKey and reWASD are translators** — axis movement becomes a key press. **vJoy is a decoy** — it manufactures a clean virtual controller so a confused game stops arguing with three physical devices and listens to one. vJoy translates nothing by itself; you feed it with a tool like JoyToKey. You never use vJoy alone.

<div class="callout tip">
  <div class="ct">// Name check</div>
  <p>Reach for <strong>AntiMicroX</strong> (with the X), not the original AntiMicro. The old project went quiet back in 2016; a developer forked and revived it as AntiMicroX, and that fork is the one still shipping updates. Old eSail forum posts say "AntiMicro" because they predate the split — the tool they mean is today's AntiMicroX.</p>
</div>

## Step 1 — Turn the game's controller setting OFF

This is the step everyone skips and then blames the software. When you remap a physical axis to a keystroke, the game must not *also* be reading that physical device directly, or it receives two conflicting inputs and twitches. eSail's community guidance is explicit: turn Controller OFF in eSail Settings so you avoid confusing the game. The same logic applies to Sailaway and most indie marine titles. The one exception is a sim with genuine native axis support you actually want — there, leave it on and skip to per-game tuning.

## Step 2 — Map your axes (AntiMicroX walkthrough)

1. Install AntiMicroX and launch it with your controller plugged in. It auto-detects the device and shows every axis and button.
2. Click the axis you want to map — say your throttle lever. AntiMicroX splits an axis into a low half and a high half.
3. Assign keys to each half. For a throttle, bind the "increase speed" key to the high half and "decrease speed" to the low half (in eSail these are the keyboard throttle keys — check the in-game key list first).
4. Set a **deadzone** in the axis settings so a centered lever sends nothing. Without it, a slightly off-center stick spams keys forever. This is the single most common "it won't stop turning" bug.
5. Save the profile per game and name it for the title, so you are not re-mapping every session.

The honest limitation: this is **stepped, not smooth**. You are turning a continuous lever into key taps. It is night-and-day better than no throttle, but it is not true analog. No software conjures analog control out of an engine that never reads it — that requires a game with native axis support, the subject of the [marine sim controller support compatibility map](/marine/marine-sim-controller-support).

<div class="callout tip">
  <div class="ct">// Pro tip</div>
  <p>Before you map a single axis, open the sim's own keyboard-controls list and write down the exact keys for throttle-up, throttle-down, rudder-left and rudder-right. Ninety percent of "my mapping does nothing" reports are a profile bound to the wrong keys — you mapped your throttle to the arrow keys the game uses for the map screen. Map to the keys the sim actually steers with, not the ones you assume.</p>
</div>

## Step 3 — When axes fight: the vJoy decoy trick

Some setups have a different problem entirely. A flight stick, a throttle quadrant and a wheel all enumerate as separate USB devices, and a stubborn game grabs the wrong one or refuses the second. The documented fix: install **vJoy** to create a virtual joystick, then configure a feeder like JoyToKey to read your physical device and drive the clean vJoy device the game sees. The game gets one tidy virtual controller and the priority conflict evaporates. This is overkill for a single throttle but a lifesaver for a multi-part rig — exactly the kind of build described in the [marine sim hardware reality check](/marine/marine-sim-hardware-reality).

<div class="callout forum">
  <div class="ct">// From the forums</div>
  <p>A recurring head-scratcher across the ship-sim hubs: the game "only sees the wheel, never the throttle." Nine times out of ten the title grabs whichever controller enumerates as device #1 and ignores the rest. The vJoy decoy fixes it properly — but the lazy first test costs nothing: unplug everything except the device you're binding, map it, then plug the others back in one at a time until you find the one the game is fighting over.</p>
</div>

## What works where (community-reported)

Paraphrasing what simmers report across the eSail, Seafarer and Ships At Sea Steam hubs. Treat these as a starting map, not a spec sheet — controller support changes with patches, so verify current status before you buy hardware for a specific title.

- **eSail** — no native axis customization; AntiMicroX is the community-blessed answer, reWASD a paid alternative. Turn the controller off first, and expect stepped, key-based throttle rather than smooth analog.
- **Seafarer: The Ship Sim** — wheels often "work" only because Windows detects them as an Xbox controller, not through real wheel support. Community accounts say the developer does not actively support or test wheels; mapping software smooths the gaps. Check current status before assuming.
- **Ships At Sea** (the Barents Sea successor) — has gamepad support, but by community accounts **no wheel or joystick support yet**; it is reported to be on the roadmap with no firm date. Until it lands, mapping software is the only path for stick or wheel users. Xbox pads work with some controls still on keyboard.
- **Sailaway III** — sailing-focused; most controls are sail-trim and helm, which map acceptably to axis-to-key, though purists run keyboard-plus-mouse and skip the rig entirely.

## The tool decision tree

If you are staring at four download pages, this is the order to reach for them:

1. **One or two axes, a single sim, keyboard-only game?** Use **AntiMicroX**. Free, and it is the whole job for most people. Set a deadzone, save a per-game profile, done.
2. **Lots of buttons to map, or you already own it?** **JoyToKey** ($7.50) handles button-heavy layouts cleanly and is also your feeder if you go the vJoy route.
3. **The game grabs the wrong device, or refuses your second controller?** Add **vJoy** (free) as the decoy, fed by JoyToKey. This is the fix for device-priority conflicts, not for key mapping.
4. **Free tools frustrate you and you want layered profiles that just work?** **reWASD** — but know the 2026 cost: a Lifetime plan from ~€34.99 or a subscription, not the old few-dollars license. For pure marine mapping, this is a want, not a need.

## Setup tax: the warnings that save an evening

<div class="callout warn">
  <div class="ct">// Before you map</div>
  <p>Four honest warnings for glue software. <strong>One:</strong> always set a center deadzone — the runaway-input "it won't stop turning" bug is almost always a missing deadzone. <strong>Two:</strong> run one translator at a time; AntiMicroX and reWASD active together create ghost inputs and phantom key spam. <strong>Three:</strong> back up your profiles — a Windows update or a game patch can reset device IDs, and a saved profile is a two-minute restore instead of an hour of re-mapping. <strong>Four:</strong> map and test at the dock in a calm scenario, not mid-passage in heavy weather where a mis-bound key becomes a grounding.</p>
</div>

## Who should skip all of this

If you play a sim with real native axis support, or you are happy on keyboard and mouse — and many marine simmers genuinely are — you do not need any of this. Mapping software is for the specific, common case of good hardware meeting a game that will not read it. It is also not worth the effort for a title you are merely trying out; map only the sims you actually live in. And if you want true analog throttle *feel*, no glue software delivers it — choose the game first, as laid out in the [best budget marine sim setup](/marine/best-budget-marine-sim-setup). The single brightest signal on the horizon is a native-axis future: an upcoming title advertising a nine-axis input model would make this whole guide optional for the sims that adopt it — covered in the [hardware reality check](/marine/marine-sim-hardware-reality).

## The verdict

Mapping software is the unglamorous, essential layer that makes the entire repurposed-hardware niche viable. **Start free with AntiMicroX**, always set a deadzone, turn the game's controller setting off, and only escalate to the vJoy decoy when multiple devices collide. Spend on reWASD only if the free tools frustrate you — and go in knowing it is a €35+ purchase in 2026, not the bargain it once was. It will never be true analog on a game that does not support it. But it turns a dead throttle lever into a working engine telegraph, and on a market this thin, that is the whole difference between a rig you use and a rig that gathers dust.

## Sources Checked

Source review date: July 2, 2026. Prices and licensing models change fast for these tools, so each figure below was verified against the tool's own page or store this week rather than repeated from older guides.

Tool pages + pricing: [AntiMicroX (GitHub, GPL open source)](https://github.com/AntiMicroX/antimicrox), [JoyToKey purchase page ($7.50, free trial)](https://joytokey.net/en/purchase), [reWASD 2026 licensing / Lifetime plans](https://www.rewasd.com/blog/post/membership-upgrade), [vJoy (SourceForge)](https://sourceforge.net/projects/vjoystick/).

Sim controller-support references (community-reported, paraphrased in our voice): [eSail — how to map controller axis (Steam)](https://steamcommunity.com/app/794860/discussions/0/1769259642858804643/), [eSail hardware tips guide (Steam)](https://steamcommunity.com/sharedfiles/filedetails/?id=1410493788), [Ships At Sea — wheel and joystick support thread (Steam)](https://steamcommunity.com/app/1266540/discussions/0/4337609541991526037/), [Seafarer — steering wheel / joystick support thread (Steam)](https://steamcommunity.com/app/2582140/discussions/0/599665349675389035/).
