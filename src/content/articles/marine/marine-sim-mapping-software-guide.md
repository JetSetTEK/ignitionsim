---
title: "Mapping Software for Marine Sims: vJoy, JoyToKey, AntiMicro and reWASD, Step by Step"
description: "Most marine sims ignore your throttle and wheel. Here is the exact glue-software workflow to force eSail, Sailaway and Ships At Sea to read your hardware."
bay: "marine"
type: "how-to"
primaryKeyword: "marine sim mapping software"
author: "Robert Pruitt"
publishDate: "2026-06-10"
heroImage: "/images/marine/marine-sim-mapping-software-guide.jpg"
heroAlt: "Macro of a DIY helm build with machined aluminum throttle levers, exposed wiring and a small circuit board under cool teal workshop light"
excerpt: "The hard gate in marine sim is not hardware — it is software. Many titles only read keyboard input, so your analog throttle does nothing. This is the candid, tool-by-tool guide to fixing that."
featured: false
readingTime: 9
faqs:
  - q: "Why doesn't my throttle or wheel work in marine sims?"
    a: "Many marine titles only read keyboard-style digital input, so an analog axis maps to nothing. The fix is glue software — AntiMicro, JoyToKey, reWASD or vJoy — that translates your axis movement into key presses or a virtual controller the game accepts."
  - q: "What is the best free mapping software for sailing sims?"
    a: "AntiMicro is the strongest free choice and is what eSail's own developer recommends for axis-to-key mapping. JoyToKey is free to try with a small license nag. reWASD is paid (around $5 to 7) but the most polished for analog work."
  - q: "What does vJoy do that JoyToKey doesn't?"
    a: "vJoy creates a virtual controller device. You feed it through a feeder like JoyToKey so a stubborn game sees one clean virtual joystick instead of three competing physical ones — it solves device-priority conflicts, not key mapping itself."
  - q: "Do I turn the game's controller setting off when using mapping software?"
    a: "Usually yes. eSail's developer explicitly recommends turning Controller OFF in settings so the game does not fight your remapped input. Leave it on only if the game has genuine native axis support you want to keep."
  - q: "Will mapping software give me analog throttle control or just on/off?"
    a: "Axis-to-key mapping is stepped, not smooth — you assign zones of travel to different keys. For true analog you need a game with native axis support; software cannot invent analog control the engine never reads."
related:
  - marine-sim-controller-support
  - racing-wheel-boat-helm
  - marine-sim-hardware-reality
  - best-budget-marine-sim-setup
---

The dirty secret of marine sim is that the hardware is the easy part. You can repurpose a racing wheel into a helm and a flight throttle into an engine telegraph in an afternoon. The wall you hit next is software: a large share of marine titles only accept **keyboard-style digital input**, so your wheel's analog sweep collapses into a binary left/right and your beautiful throttle lever does precisely nothing. eSail's own developer says it plainly in the Steam forums — there are no built-in mapping options for axes, so you reach for outside tools.

This is the guide to those tools, written the way the community actually uses them, with the failure modes named.

## The four tools, and what each one is for

These are not interchangeable. Picking the wrong one is why people spend an evening swearing at a stationary throttle.

| Tool | Cost | What it does | Best for |
|---|---|---|---|
| **AntiMicro** | Free (open source) | Maps controller/joystick axes and buttons to keystrokes | The default for axis-to-key in sims with no native support (eSail dev's pick) |
| **JoyToKey** | Free w/ license nag | Axis/button to keystroke, plus device-priority control | Button-heavy mapping, vJoy feeding |
| **reWASD** | ~$5–$7 | Polished remapping, virtual controller emulation, layered profiles | Cleanest analog-ish work, people who want it to just work |
| **vJoy** | Free | Creates a *virtual* joystick device | Resolving device-priority conflicts, not key mapping |

The key mental model: **AntiMicro, JoyToKey and reWASD are translators** (axis movement becomes a key press). **vJoy is a decoy** — it manufactures a clean virtual controller so a confused game stops arguing with three physical devices and listens to one. You feed vJoy with a tool like JoyToKey; you do not use it alone.

## Step 1 — Turn the game's controller setting OFF

This is the step everyone skips and then blames the software. When you remap a physical axis to a keystroke, the game must not also be reading that physical device directly, or it receives two conflicting inputs and twitches. eSail's developer is explicit: "it would be best to turn Controller OFF in eSail Settings. That way you should avoid confusing eSail." The same logic applies to Sailaway and most indie marine titles. The exception is a sim with genuine native axis support you actually want — there, leave it on and skip to per-game tuning.

## Step 2 — Map your axes (AntiMicro walkthrough)

1. Install AntiMicro and launch it with your controller plugged in. It auto-detects the device and shows every axis and button.
2. Click the axis you want to map — say your throttle lever. AntiMicro splits an axis into a low half and a high half.
3. Assign keys to each half. For a throttle, bind the "increase speed" key to the high half and "decrease speed" to the low half (in eSail these are the keyboard throttle keys; check the in-game key list first).
4. Set a **deadzone** in the axis settings so a centered lever sends nothing — without it, a slightly off-center stick spams keys forever. This is the single most common "it won't stop turning" bug.
5. Save the profile per game. Name it for the title so you are not re-mapping every session.

The honest limitation: this is **stepped, not smooth**. You are turning a continuous lever into key taps. It is night-and-day better than no throttle, but it is not true analog. No software can conjure analog control out of an engine that never reads it — that requires a game with native axis support, the subject of our [marine sim controller support compatibility map](/marine/marine-sim-controller-support).

<aside class="gearpick">
  <a class="gp-shot" href="/marine/gear/logitech-saitek-throttle-quadrant-telegraph"><span class="gp-tag">Maps cleanly</span><img src="/images/gear/marine/logitech-saitek-throttle-quadrant-telegraph.jpg" alt="Logitech G Saitek Pro Flight Throttle Quadrant (as engine telegraph)" loading="lazy"></a>
  <div class="gp-body">
    <span class="gp-eyebrow">Engine telegraph · 3 analog levers</span>
    <span class="gp-name"><a href="/marine/gear/logitech-saitek-throttle-quadrant-telegraph">Logitech G Saitek Pro Flight Throttle Quadrant (as engine telegraph)</a></span>
    <p class="gp-why">The hardware most of this guide's mapping work is in service of. Three cheap analog levers that AntiMicro can split into ahead/astern key zones for the many titles that won't read the axis natively — turning a dead lever into a working telegraph for ~$60.</p>
    <span class="gp-price">~$60</span>
    <span class="gp-actions">
      <a class="gp-review" href="/marine/gear/logitech-saitek-throttle-quadrant-telegraph">Full review ▸</a>
      <a class="gp-buy" href="https://www.amazon.com/s?k=Logitech+G+Saitek+Pro+Flight+Throttle+Quadrant&tag=ignitionsim-20" target="_blank" rel="sponsored nofollow noopener">Check price on Amazon ↗</a>
    </span>
  </div>
</aside>

## Step 3 — When axes fight: the vJoy decoy trick

Some setups have a different problem. A flight stick, a throttle quadrant, and a wheel all enumerate as separate devices, and a stubborn game grabs the wrong one or refuses the second. JoyToKey documents the fix: install **vJoy** to create a virtual joystick, then configure JoyToKey to treat your physical device as the second or third device while feeding the clean vJoy device to the game. The game sees one tidy virtual controller; the priority conflict evaporates. This is overkill for a single throttle but a lifesaver for a multi-part rig — exactly the kind of build described in our [marine sim hardware reality check](/marine/marine-sim-hardware-reality). If you are still planning that rig, [the Rig Configurator](/racing/configurator) will flag how many USB devices you are about to throw at the problem.

<div class="callout forum">
  <div class="ct">// From the forums</div>
  <p>A recurring head-scratcher: the game "only sees the wheel, never the throttle." Nine times out of ten the title grabs whichever controller enumerates as device #1 and ignores the rest. The vJoy decoy fixes it — but the lazy first test is just unplugging everything except the device you're binding, mapping it, then plugging the others back in one at a time.</p>
</div>

## What works where (community-reported)

Paraphrasing what simmers report across the eSail, Seafarer and Ships At Sea Steam hubs:

- **eSail** — no native axis customization; AntiMicro is the developer-blessed answer, reWASD a paid alternative. Turn the controller off first.
- **Seafarer: The Ship Sim** — wheels often work only because Windows detects them as an Xbox controller, not via real wheel support. The developer (Astragon) confirms they do not actively support or test wheels. Mapping software smooths the gaps.
- **Ships At Sea** (the Barents Sea successor) — gamepad support with vibration settings, but **no wheel or joystick support yet** by community accounts; it is on the roadmap. Until then, mapping software is the only path for stick or wheel users.
- **Sailaway III** — sailing-focused; most controls are sail-trim and helm, which map acceptably to axis-to-key, though purists run keyboard plus mouse and skip the rig entirely.

## Pro tips that save an evening

- **Always set a deadzone.** The runaway-input bug is almost always a missing center deadzone.
- **One tool at a time.** Running AntiMicro and reWASD simultaneously creates ghost inputs. Pick one translator.
- **Save and back up profiles.** A Windows update or game patch can reset device IDs; a saved profile is a two-minute restore instead of an hour.
- **Test in a calm scenario.** Map and verify at the dock, not mid-passage in heavy weather.

## Who should skip all of this

If you play a sim with real native axis support, or you are happy on keyboard and mouse — and many marine simmers genuinely are — you do not need any of this. Mapping software is for the specific, common case of good hardware meeting a game that will not read it. It is also not worth the effort for a title you are merely trying out; map only the sims you actually live in. And if you want true analog throttle feel, no glue software delivers it — choose the game first, as we lay out in the [best budget marine sim setup](/marine/best-budget-marine-sim-setup).

## Verdict

Mapping software is the unglamorous, essential layer that makes the entire repurposed-hardware niche viable. **Start free with AntiMicro**, always set a deadzone, turn the game's controller setting off, and only escalate to the vJoy decoy when multiple devices collide. Spend the $5 to 7 on reWASD only if free tools frustrate you. It will never be true analog on a game that does not support it — but it turns a dead throttle lever into a working engine telegraph, and on a thin market, that is the difference between a rig you use and a rig that gathers dust.
