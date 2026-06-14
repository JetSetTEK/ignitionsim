---
title: "Which Marine Sims Actually Support Your Hardware? An Analog-Axis Compatibility Map"
description: "The reference table the marine sim community never had: analog-axis support, force feedback, and mapping method across Sailaway III, eSail, Fishing: Barents Sea, Bridge Command, Seafarer, and Professional Ship Simulator."
bay: "marine"
type: "comparison"
primaryKeyword: "marine sim controller support"
author: "Robert Pruitt"
publishDate: 2026-06-10
heroImage: "/images/marine/marine-sim-controller-support.jpg"
heroAlt: "Wide cinematic shot of a darkened ship bridge at dusk, glowing teal radar and chart displays, brushed-metal console"
excerpt: "The hard gate in marine sim isn't hardware — it's whether the title reads analog axes at all. This is the compatibility map: who reads your wheel and throttle, who only sees left/right, and what glue software fills the gap."
featured: true
readingTime: 8
faqs:
  - q: "Does eSail support steering wheels?"
    a: "Not fully natively. You can enable the controller and the main axes often work, but advanced mapping needs third-party software like JoyToKey or vJoy, and there is no force feedback support."
  - q: "Will Professional Ship Simulator support my throttle and button box?"
    a: "It advertises a 9-axis input model, support for 50+ buttons, a triple-layer keyboard layout, and a HOTAS rudder-deadzone option — making it the most hardware-friendly upcoming marine sim, targeting Early Access in 2026."
  - q: "Why does my analog throttle do nothing in some marine sims?"
    a: "Because those titles only read keyboard-style digital input. They never poll the throttle axis, so the lever is ignored entirely. The fix is glue software like vJoy or JoyToKey that converts the axis into input the game accepts."
related:
  - "marine-sim-hardware-reality"
  - "racing-wheel-boat-helm"
  - "diy-bridge-command-throttle"
---

If you read only one article before spending money in this bay, make it this one. The expensive mistake in marine sim is buying a wheel and a throttle quadrant, plugging them in, and discovering the game never reads the axes — your wheel collapses to left/right and your throttle lever does literally nothing. The hardware was never the problem. The *software gate* is. So this is the map I wish existed when I started: which titles actually read your analog inputs, which only see keyboard-style digital presses, and what glue software bridges the gap.

<div class="shotgrid">
  <figure><a href="/marine/gear/bridge-command-free-sim"><img src="/images/gear/marine/bridge-command-free-sim.jpg" alt="Bridge Command (free open-source ship sim)" loading="lazy"></a><figcaption>Bridge Command — native, documented build</figcaption></figure>
  <figure><a href="/marine/gear/professional-ship-simulator-context"><img src="/images/gear/marine/professional-ship-simulator-context.jpg" alt="Professional Ship Simulator (ex-Nautic XP)" loading="lazy"></a><figcaption>Professional Ship Simulator — 9-axis, the one to watch</figcaption></figure>
  <figure><a href="/marine/gear/logitech-g29-helm"><img src="/images/gear/marine/logitech-g29-helm.jpg" alt="Logitech G G29 Driving Force (as helm)" loading="lazy"></a><figcaption>Logitech G29 — the wheel you're checking support for</figcaption></figure>
  <figure><a href="/marine/gear/logitech-saitek-throttle-quadrant-telegraph"><img src="/images/gear/marine/logitech-saitek-throttle-quadrant-telegraph.jpg" alt="Logitech G Saitek Pro Flight Throttle Quadrant (as engine telegraph)" loading="lazy"></a><figcaption>Saitek quadrant — needs an analog-aware title</figcaption></figure>
</div>

## The one rule that explains everything

Marine titles fall into two camps on input. Some have proper **analog-axis support**, so a wheel steers proportionally and a throttle lever reads continuously. Others only accept **digital, keyboard-style input**, so any analog signal collapses: a wheel becomes binary left/right, and an analog throttle axis is simply never polled. There is no in-between for a given input — either the game reads the axis or it doesn't.

That single distinction decides whether your gear works. Everything below is just applying it title by title.

## The compatibility map

| Sim | Analog axis support | Force feedback | Native controller support | Mapping method |
|---|---|---|---|---|
| **Bridge Command** | Yes (documented DIY build) | No | Yes — designed for it | Native; assign DIY/wheel axes directly |
| **Professional Ship Simulator** (EA 2026) | Yes — **9 axes**, **50+ buttons** | Not advertised | Yes, broad | Native; **HOTAS rudder-deadzone** option |
| **eSail** | Partial — main axes often work | No | Partial | Enable controller; **third-party** (JoyToKey/vJoy) for advanced mapping |
| **Sailaway III** | Varies by control | No | Partial | Verify per control; glue software for unsupported axes |
| **Fishing: Barents Sea** | Limited — wheel steers | No | Limited | Wheel works for steering; throttle axis unreliable, often needs remap |
| **Seafarer: The Ship Sim** | Varies | No | Partial | Check per build; glue software as needed |

A few things jump out of that table, and they are the whole point.

**Force feedback is dead across the board.** Not a single mainstream marine title meaningfully supports FFB. This is why, as I argue in [the racing-wheel-as-helm guide](/marine/racing-wheel-boat-helm), you should buy a **Logitech G29** over the **G923** — the G923's TrueForce is wasted here. Do not pay for force feedback you will never feel on water.

**Bridge Command is the gold standard for builders.** It is the only title that *documents its own hardware*, which is exactly why it is the [flagship DIY build target](/marine/diy-bridge-command-throttle). When a sim publishes the build, axis support is a given.

<aside class="gearpick">
  <a class="gp-shot" href="/marine/gear/bridge-command-free-sim"><span class="gp-tag">Native, today</span><img src="/images/gear/marine/bridge-command-free-sim.jpg" alt="Bridge Command (free open-source ship sim)" loading="lazy"></a>
  <div class="gp-body">
    <span class="gp-eyebrow">Free ship sim · documents its own hardware</span>
    <span class="gp-name"><a href="/marine/gear/bridge-command-free-sim">Bridge Command (free open-source ship sim)</a></span>
    <p class="gp-why">The only title that ends the analog-axis argument before it starts, because it ships the build guide for the very hardware it reads. Free, open-source, ship-handling focused — if you're buying or building a DIY board, this is the sim it was designed around.</p>
    <span class="gp-price">Free</span>
    <span class="gp-actions">
      <a class="gp-review" href="/marine/gear/bridge-command-free-sim">Full review ▸</a>
    </span>
  </div>
</aside>

**Professional Ship Simulator is the one to watch.** Rebranded from NauticXP and targeting Steam Early Access in **2026**, it advertises a **9-axis** input model, **50+ buttons**, a triple-layer keyboard layout, and a **HOTAS rudder-deadzone** option. In a bay where most sims ignore half your hardware, a developer explicitly designing around nine axes is the most hardware-friendly signal in years.

<aside class="gearpick">
  <a class="gp-shot" href="/marine/gear/professional-ship-simulator-context"><span class="gp-tag">One to watch</span><img src="/images/gear/marine/professional-ship-simulator-context.jpg" alt="Professional Ship Simulator (ex-Nautic XP)" loading="lazy"></a>
  <div class="gp-body">
    <span class="gp-eyebrow">Upcoming ship sim · 9 axes, 50+ buttons</span>
    <span class="gp-name"><a href="/marine/gear/professional-ship-simulator-context">Professional Ship Simulator (ex-Nautic XP)</a></span>
    <p class="gp-why">The first mainstream marine title built to read a builder's rig as a first-class citizen — nine axes, a rudder-deadzone option aimed at HOTAS setups, the works. Steam Early Access targeted for 2026; treat the spec as a promise to verify, but it's the most hardware-friendly signal the niche has had.</p>
    <span class="gp-price">TBD</span>
    <span class="gp-actions">
      <a class="gp-review" href="/marine/gear/professional-ship-simulator-context">Full review ▸</a>
    </span>
  </div>
</aside>

**The middle of the table is where money gets wasted.** eSail, Sailaway III, Fishing: Barents Sea, and Seafarer all land in "partial" or "limited" — they will see *some* of your hardware natively and ignore the rest. For those titles, glue software is not optional.

## The glue-software layer

When a title falls short of full native support, you bridge the gap with input-translation software. These tools sit between your hardware and the sim, converting axes and buttons into whatever input the game will actually accept:

- **vJoy** — creates a virtual joystick device; the backbone for feeding combined or remapped axes into a sim.
- **JoyToKey** — maps controller inputs to keystrokes, ideal when a sim only reads keyboard input.
- **Xpadder** — similar keystroke-mapping approach, popular for older titles.
- **x360ce** — emulates an Xbox controller, useful when a sim only recognizes gamepad input.

For a title in the "partial" column, the workflow is usually: enable the controller natively, see what works, then layer **JoyToKey** or **vJoy** on top to remap the inputs the game ignored. For a "digital only" title, you go straight to **JoyToKey** to turn your analog wheel into the left/right keystrokes the game expects — accepting that you lose proportional steering in the process.

<div class="callout forum">
  <div class="ct">// From the forums</div>
  <p>The most expensive lesson in this bay gets posted weekly: "Bought a wheel and a quadrant, the wheel only goes hard-left or hard-right and the throttle does nothing — is my gear broken?" It isn't. The gear is fine; the title just doesn't poll analog axes. Read the row before you read the return policy.</p>
</div>

## How to use this map before you buy

The order matters. Pick your *sim* first, find its row, then buy hardware that the row says will actually be read.

1. **Choose the title you actually want to play.**
2. **Read its row above.** Native analog support means buy with confidence. "Partial" or "limited" means budget a weekend for glue software.
3. **Skip any force-feedback premium** — no title uses it.
4. **If you are buying fresh,** lean toward Bridge Command (free, documented) or wait for Professional Ship Simulator (broad native support).

If you are still deciding on a full setup rather than a single title, the [marine sim hardware reality check](/marine/marine-sim-hardware-reality) lays out the repurposing map, and the [Rig Configurator](/racing/configurator) helps you plan a wheel-and-throttle base you can share across racing, flight, and marine.

## The verdict

The compatibility gate, not the gear, is what decides whether you are happy. Buy the sim first, check its row, and only then buy hardware the title will read. Lean toward **Bridge Command** for a documented build today and keep an eye on **Professional Ship Simulator** with its 9-axis model for tomorrow. For everything in between, treat **vJoy** and **JoyToKey** as required parts of the kit — and never, ever pay extra for force feedback in a bay that has none.
