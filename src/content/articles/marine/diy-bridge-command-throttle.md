---
title: "Build Your Own Ship's Wheel and Throttle for Bridge Command (Under $60)"
description: "The bay's flagship maker project: build a real ship's helm and twin throttles for the free Bridge Command sim using a BU0836 USB chip, three 10k linear pots, and the string-friction trick for real engine-lever drag."
bay: "marine"
type: "diy"
primaryKeyword: "DIY ship helm controller"
author: "Robert Pruitt"
publishDate: 2026-05-31
heroImage: "/images/marine/diy-bridge-command-throttle.jpg"
heroAlt: "Macro of a DIY helm build — machined aluminum throttle levers, exposed wiring and a small circuit board, workshop bokeh"
excerpt: "Bridge Command is the one marine sim that publishes a hardware build. For under $60 in parts — a BU0836 chip and three 10k pots — you get a real helm and twin throttles. Here's the full build."
featured: false
readingTime: 8
faqs:
  - q: "What parts do I need to build a DIY ship throttle?"
    a: "A BU0836 USB interface chip and three 10k linear potentiometers — two for port and starboard throttles, one for the wheel — plus wire, connectors, and an enclosure. Total parts cost runs roughly $30–$60."
  - q: "How do I make DIY throttle levers feel realistic?"
    a: "Add friction to the throttle pots so the lever holds its position instead of springing back. The documented Bridge Command trick is to wrap string around the pot shaft and anchor it, creating drag that mimics a real engine control."
  - q: "Is Bridge Command really free?"
    a: "Yes. Bridge Command is an open-source, ship-handling-focused simulator, and it uniquely publishes an official how-to for building your own throttles and wheel at bridgecommand.co.uk. It's the reference target for hobbyist helm builds."
related:
  - "arduino-joystick-helm-build"
  - "marine-sim-controller-support"
  - "marine-sim-hardware-reality"
---

Every other article in this bay ends with some version of "repurpose gear from another hobby." This one is different. This is the project where the marine sim niche has its *own* hardware — built by you, for around the cost of a single AAA game. **Bridge Command** is a free, open-source, ship-handling simulator, and it is the only marine sim I know of that publishes an official how-to for building your own throttles and wheel. That makes it the closest thing the bay has to a native hardware ecosystem, and the build is genuinely approachable.

If you have ever wanted real engine levers that hold their position and a wheel that reads as a true analog axis, this is the cheapest honest path to it. No force feedback, no proprietary anything — just pots, a USB chip, and an afternoon.

## Why Bridge Command is the right target

Most marine titles fight you on hardware — the analog-axis gate I describe in [the controller compatibility map](/marine/marine-sim-controller-support) means a lot of sims ignore your inputs entirely. Bridge Command does not have that problem, because it documents the build itself. You are constructing hardware the sim already expects to see. That is a rare luxury in this niche, and it is exactly why this is the bay's flagship maker project.

## The bill of materials

The entire build runs roughly **$30–$60** in parts. Here is the core list.

| Part | Purpose | Notes |
|---|---|---|
| **BU0836** USB interface chip | Turns pots into a recognized game controller | The documented, no-code choice |
| **3× 10k linear potentiometers** | Two throttles + one wheel axis | Linear taper, not logarithmic |
| Hookup wire + connectors | Pot-to-board wiring | Three wires per pot |
| Enclosure / panel | Mounting the levers and wheel | Wood, acrylic, or a project box |
| String + an anchor point | Throttle friction | The realism trick — details below |

The **BU0836** is the heart of it. It is a small board that presents your potentiometers to the PC as analog axes on a standard USB game controller — no firmware, no coding. You wire a pot to it, Windows sees an axis. That is the whole magic, and it is why the BU0836 is the documented choice over a code-it-yourself board. (If you *want* the flexible, programmable route instead, that is the [Arduino-as-joystick path](/marine/arduino-joystick-helm-build) — same idea, more control, more work.)

<aside class="gearpick">
  <a class="gp-shot" href="/marine/gear/leobodnar-bu0836a-diy-board"><span class="gp-tag">The brains</span><img src="/images/gear/marine/leobodnar-bu0836a-diy-board.jpg" alt="Leo Bodnar Electronics BU0836A USB Joystick Interface" loading="lazy"></a>
  <div class="gp-body">
    <span class="gp-eyebrow">DIY interface · 8 axes, no firmware</span>
    <span class="gp-name"><a href="/marine/gear/leobodnar-bu0836a-diy-board">Leo Bodnar Electronics BU0836A USB Joystick Interface</a></span>
    <p class="gp-why">The exact board the Bridge Command build guide names — and for good reason. Wire a pot, Windows sees an axis; there's no sketch to write and no driver to chase. Eight axes and 32 inputs is room for a full helm console for the price of lunch out.</p>
    <span class="gp-price">~$42</span>
    <span class="gp-actions">
      <a class="gp-review" href="/marine/gear/leobodnar-bu0836a-diy-board">Full review ▸</a>
      <a class="gp-buy" href="https://www.amazon.com/s?k=Leo+Bodnar+BU0836A&tag=ignitionsim-20" target="_blank" rel="sponsored nofollow noopener">Check price on Amazon ↗</a>
    </span>
  </div>
</aside>

The **three 10k linear pots** map to the three things a small-ship helm needs: a port throttle, a starboard throttle, and the wheel itself. Use *linear* taper, not logarithmic — you want the lever's physical middle to read as the electrical middle.

<aside class="gearpick">
  <a class="gp-shot" href="/marine/gear/arduino-leonardo-diy-hid"><span class="gp-tag">Code-it route</span><img src="/images/gear/marine/arduino-leonardo-diy-hid.jpg" alt="Arduino Leonardo (ATmega32u4 HID)" loading="lazy"></a>
  <div class="gp-body">
    <span class="gp-eyebrow">Programmable DIY · native USB HID</span>
    <span class="gp-name"><a href="/marine/gear/arduino-leonardo-diy-hid">Arduino Leonardo (ATmega32u4 HID)</a></span>
    <p class="gp-why">The BU0836's flexible cousin: spend an evening in the IDE and you get software detents, button matrices and a combined helm-plus-button-box on one ~$25 board. More work, more control — pick it if you'd rather write a sketch than buy a finished part.</p>
    <span class="gp-price">~$25</span>
    <span class="gp-actions">
      <a class="gp-review" href="/marine/gear/arduino-leonardo-diy-hid">Full review ▸</a>
      <a class="gp-buy" href="https://www.amazon.com/s?k=Arduino+Leonardo&tag=ignitionsim-20" target="_blank" rel="sponsored nofollow noopener">Check price on Amazon ↗</a>
    </span>
  </div>
</aside>

## The build, step by step

1. **Mount the three pots** to your panel or enclosure — two side by side for the throttles, one for the wheel axis. Leave room for the lever arms to swing through their full travel.
2. **Wire each pot to the BU0836.** A potentiometer has three terminals: the two outer ones go to the board's voltage reference and ground, the center wiper goes to an analog input pin. Repeat for all three.
3. **Connect the BU0836 to your PC over USB.** Windows should immediately recognize it as a game controller with three axes.
4. **Calibrate in Windows.** Open the game controller properties and sweep each pot through its full range so the OS records the endpoints. Confirm all three axes move independently and travel corner to corner.
5. **Attach lever arms and a wheel** to the pot shafts. Throttle levers want a satisfying physical handle; the wheel pot wants a spoke or rim you can actually grip.
6. **Map the axes in Bridge Command.** Because the sim documents this build, the throttle and wheel axes assign cleanly to engine and rudder control.

## The string-friction trick (the part everyone forgets)

A raw potentiometer offers almost no resistance — the lever flops. A real engine control holds wherever you set it. The documented Bridge Command fix is delightfully low-tech: **add friction to the throttle pots by wrapping string around the pot shaft and anchoring it.** The string drags against the shaft as the lever moves, so the throttle *stays* where you push it instead of springing or sliding back.

This is the difference between a toy and a control. Without friction, you fight the lever constantly and it never feels like a ship's telegraph. With a few wraps of string anchored to the enclosure, the lever holds a setting the way a real engine control does. Tune the number of wraps until the drag feels right — too little and it slips, too much and it binds.

<div class="callout forum">
  <div class="ct">// From the forums</div>
  <p>Every first-timer skips the friction step, posts a video of a throttle lever flopping back to idle, and asks what they did wrong. The answer is always "string." A waxed boot-lace around the pot shaft is the bridge-builder's secret handshake — and if string feels too crude, an o-ring or a felt washer under the knob does the same job with less of a workshop look.</p>
</div>

<div class="callout tip">
  <div class="ct">// Pro tip</div>
  <p>Buy linear-taper pots, not the audio/logarithmic ones the bargain bins are full of. A log taper crams most of its travel into one end, so your lever's physical center won't read as electrical center and "half ahead" lands nowhere near the middle. Check the printed code: a "B10k" is linear, an "A10k" is log.</p>
</div>

## What this build is not

Be honest with yourself about the ceiling. This is a hobbyist DIY rig, not a [professional full-mission bridge](/marine/marine-sim-hardware-reality). There is no motion, no certified physics, no force feedback. What you get is real, position-holding levers and a true analog wheel axis feeding a sim that was designed to accept exactly that — for the price of a controller you would otherwise buy off a shelf, except no such shelf exists.

## The verdict

This is the build I point people to when they ask what is *genuinely* native to marine sim. For roughly $30–$60 — a **BU0836**, **three 10k linear pots**, an enclosure, and a length of string — you get a working ship's helm and twin throttles, feeding the free, open-source sim that documented the build in the first place. Don't skip the string-friction step; it is the cheap detail that turns three flopping potentiometers into engine controls that hold their setting like the real thing.
