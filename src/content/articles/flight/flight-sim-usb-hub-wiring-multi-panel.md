---
title: "Flight Sim USB Hubs and Wiring: How to Power a Multi-Panel Cockpit (2026)"
description: "Wire a multi-panel flight sim cockpit without dropouts: buy a powered USB hub, budget ports and current, and apply the two-line Windows fix that kills random WinWing and Honeycomb panel disconnects."
bay: "flight"
type: "how-to"
primaryKeyword: "flight sim USB hub multi-panel cockpit"
author: "Mac Donovan"
publishDate: 2026-06-14
updatedDate: 2026-07-02
sourceReviewDate: 2026-07-02
revenueTier: "B"
contentCluster: "flight"
goldStatus: "refresh"
heroImage: "/images/gear/flight/honeycomb-bravo-throttle.jpg"
heroAlt: "Honeycomb Bravo throttle quadrant with its backlit autopilot annunciator panel — the kind of power-hungry, LED-heavy device that overwhelms plain USB in a multi-panel cockpit"
excerpt: "Add enough panels and your cockpit stops being about flying and starts being about USB. Here's the verdict — buy a powered hub — plus the current-draw math, the port budget, and the free Windows fix that kills the dropouts WinWing and Honeycomb stacks are famous for."
featured: false
readingTime: 10
faqs:
  - q: "Do I need a powered USB hub for flight sim panels?"
    a: "Once you go past two or three USB devices, yes. A standard USB 2.0 port supplies only 500mA and USB 3.0 about 900mA, and a bus-powered hub splits one port's budget across everything plugged into it. Backlit airliner panels and force-feedback bases draw far more than that leaves, so they brown out and drop. A self-powered (powered) hub with its own wall adapter is what stops the random disconnects in a multi-panel cockpit."
  - q: "How many watts does a flight sim USB hub need?"
    a: "It depends on your panels. The Honeycomb Flight Sim USB Hub supplies up to 30W across 6 ports (about $50), which handles a typical yoke-throttle-pedals-plus-a-few-panels setup. Heavy multi-panel WinWing stacks routinely run two powered hubs, and one documented PMDG-builder setup powers a full Alpha/Bravo/Charlie plus WinWing MCDU, FCU, EFIS-L/R, PAP and PFP across two hubs on a 60W supply. When in doubt, buy more headroom than you need."
  - q: "Why do my flight sim panels randomly disconnect?"
    a: "The two most common causes are an unpowered or overloaded USB hub and Windows USB selective suspend, a power-saving feature that switches off 'idle' devices. A backlit panel you aren't actively pressing looks idle to Windows, so Windows cuts its power and it vanishes from the sim. Move panels to a powered hub and disable USB selective suspend in Windows power options — that pair of fixes resolves the majority of dropout reports."
  - q: "Can I run all my flight sim hardware on one USB hub?"
    a: "Often yes, if it's a quality powered hub with enough wattage and ports. Many builders run a full Honeycomb Alpha, Bravo and Charlie plus a couple of panels on one 30W hub. But for a large airliner stack, split devices across two hubs to balance the current draw — documented WinWing pedestal builds run two hubs rather than overloading one."
  - q: "Should I plug my yoke directly into the motherboard or a hub?"
    a: "For a stable finished cockpit, a quality powered hub keeps cabling tidy and supplies steady power to every panel. But when you're troubleshooting a problem device — one that won't initialize, or a set of pedals that needs a power cycle to appear — plug it straight into a rear motherboard port first to rule the hub out. Keyboard and mouse are also best left on the motherboard, not the sim hub."
  - q: "Do bus-powered USB hubs work for flight sim?"
    a: "For a mouse, keyboard or a single light controller, yes. For a multi-panel cockpit, no. A bus-powered hub has no wall adapter — it redistributes the 500mA/900mA a single upstream port provides, so stacking backlit panels on it is exactly how you cause the classic brownout-and-dropout. The flight-sim consensus is unanimous: self-powered hubs only for panel stacks."
related:
  - "how-to-mount-flight-sim-hardware"
  - "msfs-2024-best-graphics-settings-fps"
  - "honeycomb-flight-deck-upgrade-path"
---

Verdict first: **buy a self-powered USB hub before you buy your third panel, and disable USB selective suspend in Windows the day you install it.** Those two moves — one cheap, one free — are what separate a cockpit that stays connected through a whole flight from one where a panel blinks out on short final for no reason you can see. Everything else in this guide is the math and the wiring discipline behind that verdict.

There's a moment every cockpit builder hits where the hobby quietly stops being about flying and starts being about USB. You add the [yoke](/flight/gear/honeycomb-alpha-yoke), then the [Bravo throttle](/flight/gear/honeycomb-bravo-throttle), then [rudder pedals](/flight/gear/honeycomb-charlie-pedals), then a WinWing MCDU, then an FCU — and suddenly a panel drops mid-approach for no reason. Welcome to USB power and port management: the unglamorous engineering problem that decides whether your cockpit is reliable or a flickering mess. This is a wiring how-to, so there's little to "buy" here beyond a hub and some cable — the money and the frustration both hide in the planning.

## Why a multi-panel cockpit overwhelms plain USB

Every device you add does two things to your USB bus: it eats a **port**, and it draws **power**. The power side is where cockpits break, because the numbers are smaller than people expect. A standard **USB 2.0** downstream port supplies up to **500mA at 5V**; a **USB 3.0** port up to **900mA** ([USB spec figures via Cadence](https://resources.pcb.cadence.com/blog/2020-what-are-the-maximum-power-output-and-data-transfer-rates-for-the-usb-standards)). A yoke and a stick are modest. But **backlit airliner panels** — a WinWing MCDU, an FCU, an EFIS, a Honeycomb Bravo with its 14-light annunciator — light up dozens of LEDs and run their own microcontrollers, and a **force-feedback base** is in another league entirely.

Now stack four or five of those on a **bus-powered** hub — one with no wall adapter, which simply redistributes the single upstream port's 500mA or 900mA across everything plugged in. You're asking one port's power budget to feed a small Christmas tree. It can't, so devices brown out and drop. The fix is conceptually simple: give your panels their own power source instead of begging it from the PC. That source is a **self-powered USB hub** — a hub with its own wall adapter that supplies current to every port regardless of what the motherboard can spare.

## What draws power in a cockpit

Not every device is equal. Here's the rough hierarchy of what taxes your USB power budget, from trivial to serious — plan the hub around the heavy end of this table, not the light end.

| Device class | Relative draw | Why | Example |
|---|---|---|---|
| Yoke / stick / pedals | Low | A sensor and a few buttons; little or no lighting | [Honeycomb Alpha](/flight/gear/honeycomb-alpha-yoke), [Charlie pedals](/flight/gear/honeycomb-charlie-pedals) |
| Throttle quadrant w/ panel | Low–medium | Levers plus a lit autopilot/annunciator bank | [Honeycomb Bravo](/flight/gear/honeycomb-bravo-throttle), [MOZA MTQ](/flight/gear/moza-mtq-throttle-quadrant) |
| Backlit airliner panel | Medium–high | Dozens of LEDs + a microcontroller, always lit | WinWing MCDU / FCU / EFIS / PAP / PFP |
| Multiple stacked panels | High | Draw is cumulative — five lit panels add up fast | A full WinWing pedestal + glareshield |
| Force-feedback base | Highest | Servo-driven; often wants its own supply entirely | [MOZA AY210 FFB yoke](/flight/gear/moza-ay210-ffb-yoke) |

The takeaway: a yoke, throttle and pedals are easy. The moment **backlit panels** and **stacked panels** enter the build, your total current demand jumps, and a bus-powered hub can't keep up.

<aside class="gearpick">
  <a class="gp-shot" href="/flight/gear/honeycomb-bravo-throttle"><span class="gp-tag">The draw problem, boxed</span><img src="/images/gear/flight/honeycomb-bravo-throttle.jpg" alt="Honeycomb Bravo throttle quadrant with backlit autopilot annunciator panel" loading="lazy"></a>
  <div class="gp-body">
    <span class="gp-eyebrow">Throttle quadrant + autopilot panel · 14-light annunciator</span>
    <span class="gp-name"><a href="/flight/gear/honeycomb-bravo-throttle">Honeycomb Bravo Throttle Quadrant</a></span>
    <p class="gp-why">A perfect illustration of why plain USB struggles: the Bravo isn't just levers, it's a lit autopilot panel with a 14-light annunciator running its own controller. One is fine on a motherboard port; add it to a stack of WinWing panels on a bus-powered hub and the cumulative draw is what browns the whole tree out. Panels like this are the reason you size a powered hub.</p>
    <span class="gp-price">~$280</span>
    <span class="gp-actions">
      <a class="gp-review" href="/flight/gear/honeycomb-bravo-throttle">Spec card</a>

    </span>
  </div>
</aside>

## Powered vs unpowered hubs — the one distinction that matters

| Hub type | Power source | Good for | Risk in a cockpit |
|---|---|---|---|
| **Bus-powered (unpowered) hub** | Draws from the PC's one upstream port | A mouse, keyboard, USB stick, one light controller | Browns out panels — the classic dropout cause |
| **Self-powered (powered) hub** | Its own wall adapter (e.g. 30W, 60W) | Yokes, throttles, backlit panels, panel stacks | The right tool — size the wattage to your load |
| **Direct to motherboard** | The port itself | Keyboard, mouse, one problem device while troubleshooting | Runs out of physical rear ports fast |

For anything past two or three devices, the answer is a **self-powered hub**. The flight-sim community is unanimous on this — builders on the MSFS and AVSIM forums route all their sim hardware through powered hubs and leave only keyboard and mouse on the motherboard. The only real decisions left are how much wattage and how many ports.

### Sizing the wattage

Think in terms of total draw. A typical enthusiast cockpit — yoke, throttle, pedals, and two or three backlit panels — fits comfortably on a hub that supplies around **30W across 6 ports**. The [Honeycomb Flight Sim USB Hub](https://flyhoneycomb.com/products/flight-sim-usb-hub) is built exactly for this: 6 powered ports, up to **30W total**, at about **$50**, and Honeycomb lists it as compatible with its own gear and other leading peripherals.

When you push into a **full airliner panel stack** — MCDU plus FCU plus both EFIS panels plus a PAP or PFP plus a couple of throttles — you're past what one 30W hub handles. Heavy builders routinely run **two powered hubs**, splitting the panels across them to balance the draw. One documented PMDG-builder setup on the [PMDG cockpit-builders forum](https://forum.pmdg.com/forum/main-forum/cockpit-builders/384201-usb-hub-recommendations-for-winwing-accessories) runs a full Honeycomb Alpha, Bravo and Charlie alongside WinWing MCDU, FCU, EFIS-L/R, PAP and PFP across **two 7-port powered hubs on a 60W supply**. If your cockpit is growing that direction, plan for two hubs from the start; it's cheaper than discovering the limit mid-build.

<div class="callout tip">
  <div class="ct">// Pro tip</div>
  <p>Split by function, not just to fill ports. Put your flight controls (yoke, throttle, pedals) on one hub and your lit panels on the other. If a panel stack ever browns out, you've isolated the heavy, LED-hungry gear onto its own supply — and a single hub failure never takes your whole cockpit offline mid-flight.</p>
</div>

### Budgeting the ports

Count every USB device, then add headroom. Each yoke, throttle, pedal set, and panel is one port. A six-port hub fills faster than you think once panels arrive — a Fenix A320 pedestal alone can be four or five panels. The rule I use: **buy one tier more ports than you currently need**, because cockpit builds only ever grow. Running out of ports mid-project means re-cabling everything, which is exactly the tedium this article exists to prevent. Larger 10-port cockpit hubs (Desktop Pilot, TP-Link and Sabrent all make suitable powered units) exist for precisely this reason.

## The dropout fix nobody mentions until it bites them

Even on a properly powered hub, panels can still drop out — and the culprit is usually not the hardware at all. It's **Windows USB selective suspend**, a power-saving feature that switches off "idle" USB devices. A backlit panel you aren't actively pressing looks idle to Windows, so Windows cuts its power, and it vanishes from the sim until you unplug and replug it. This is the single most-reported "my panel randomly disconnects" cause on the flight-sim forums, and it's free to fix.

The fix is two steps:

1. **Disable USB selective suspend.** In Windows power options, open your active plan's *Change advanced power settings*, find *USB settings → USB selective suspend setting*, and set both **On battery** and **Plugged in** to **Disabled** ([Puget Systems walkthrough](https://www.pugetsystems.com/support/guides/how-to-disable-usb-selective-suspend-1190/)).
2. **Disable "Allow the computer to turn off this device" per hub.** In Device Manager, expand *Universal Serial Bus controllers*, and for each **USB Root Hub** and **Generic USB Hub**, open Properties → Power Management and uncheck that box. Reboot after.

Between a powered hub and these two settings, the overwhelming majority of "my panel randomly disconnects" reports go away. If a single device still misbehaves — some rudder pedals notoriously won't initialize until you cycle the hub's power — plug it **directly into a rear motherboard port** to isolate whether it's the device or the hub.

<div class="callout tip">
  <div class="ct">// Pro tip</div>
  <p>Disable USB selective suspend before you spend a dollar on hardware. The single most common "the sim won't see my panel" fix is free, lives in Windows power options, and takes thirty seconds — try it before you assume a panel or hub is dead. It costs you nothing and rules out the most likely cause first.</p>
</div>

## Cable and layout discipline

The electrical side is half the job; the physical side is the other half, and it ties straight into [how you mount the hardware](/flight/how-to-mount-flight-sim-hardware):

- **Use rear motherboard ports for the hub's upstream cable.** Front-panel and case-top ports are often lower quality and a source of flaky connections.
- **Keep keyboard and mouse on the motherboard, not the sim hub.** Leave the hub's power budget for the gear that actually needs it.
- **Match USB version to the device.** Most panels are happy on USB 2.0, but a few devices genuinely need USB 3.0 bandwidth and will choke on a 2.0-only hub or cable. If a specific device acts up, check whether it wants 3.0.
- **Keep cable runs short.** Long USB runs near power supplies and monitors pick up interference; a panel on a 3-metre extension is more dropout-prone than one on a short cable. If you must run long, use a powered/active extension, not a passive one.
- **Watch for ground-loop noise.** A cockpit full of separately-grounded adapters can introduce hum or flaky sensor readings; keep the hub and PC on the same outlet strip where you can.
- **Velcro the hub somewhere accessible and label the cables.** You will replug things. Don't bury the hub behind the desk, and color-code panel cables so you can find one in five seconds instead of tracing a spaghetti bowl.
- **Plan the hub before the panels.** Wiring is far easier to do once than to redo. If you're mapping out a full station, sketch the USB tree alongside the frame in [the Rig Configurator](/racing/configurator).

<div class="callout forum">
  <div class="ct">// From the forums</div>
  <p>The recurring cockpit-builder confession: the "dead" panel that won't show up was almost never dead. Nine times out of ten it's selective suspend cutting an idle backlit panel, or a bus-powered hub quietly starving the stack. The builders who never post dropout threads all did the same two boring things — powered hub, suspend disabled — before they flew a single leg.</p>
</div>

## A note on force feedback

Force-feedback bases like the [MOZA AY210 yoke](/flight/gear/moza-ay210-ffb-yoke) are a category apart. Their servos draw real power and they typically ship with their own dedicated supply rather than sipping from a USB hub — treat them as a standalone circuit, not another device on the panel hub. If you're running FFB, don't count it against your hub's wattage budget; wire it to its own outlet and let the hub handle the panels.

## Who should skip this

Skip the powered-hub investment if your whole setup is a yoke, a throttle, and pedals — three devices plugged straight into rear motherboard ports work fine and a hub adds nothing. Skip the **two-hub / 60W** planning unless you're genuinely building an airliner panel stack; a single 30W hub covers most enthusiast cockpits for years. And if your only complaint is one flaky device on an otherwise stable rig, skip the rewiring and try the **selective-suspend fix** first — it's free and solves more dropouts than new hardware does.

## Verdict

A multi-panel flight sim cockpit is an electrical project disguised as a flying hobby, and the two things that make it reliable are cheap and boring: a **self-powered USB hub sized to your load** — around 30W and 6 ports (roughly $50) for most builds, two hubs or a 60W supply for big airliner stacks — and **disabling USB selective suspend** in Windows. Size the hub around the heavy end of the draw table (backlit and stacked panels), not the yoke. Budget one extra tier of ports because cockpits only grow, keep cable runs short and labeled, leave keyboard/mouse and any FFB base off the panel hub, and wire the hub before the panels rather than after. Do it once, do it properly, and you can go back to worrying about the approach instead of the USB tree. When you're ready to stage the panel buildout itself, the [Honeycomb flight deck upgrade path](/flight/honeycomb-flight-deck-upgrade-path) lays out the order to add gear.

## Visual Setup Maps

![What draws power in a cockpit](/images/infographics/flight/flight-sim-usb-hub-wiring-multi-panel-what-draws-power.png)

![Powered vs bus-powered — the one that matters](/images/infographics/flight/flight-sim-usb-hub-wiring-multi-panel-hub-decision.png)

## Sources Checked

Source review date: July 2, 2026. We checked official product pages, USB power specifications, and current cockpit-builder forum threads rather than repeating box copy. Wattage and port figures are quoted from the manufacturers; setup patterns are paraphrased from builder reports in our own voice.

Official + spec: [Honeycomb Flight Sim USB Hub (6-port, 30W)](https://flyhoneycomb.com/products/flight-sim-usb-hub), [Honeycomb 6-Port USB Hub on Amazon](https://www.amazon.com/dp/B0F63QL7K3?tag=ignitionsim-20), [Desktop Pilot 10-Port USB Hub](https://www.desktoppilot.com/product/desktop-pilot-10-port-usb-hub/), [USB port power/data figures (Cadence)](https://resources.pcb.cadence.com/blog/2020-what-are-the-maximum-power-output-and-data-transfer-rates-for-the-usb-standards).

Windows fix: [How to disable USB selective suspend (Puget Systems)](https://www.pugetsystems.com/support/guides/how-to-disable-usb-selective-suspend-1190/), [Disable USB selective suspend (Microchip)](https://support.microchip.com/s/article/USB--How-to-disable-USB-selective-suspend-on-Windows-OS).

Builder + community reads (paraphrased in our voice): [PMDG cockpit-builders — USB hub recommendations for WinWing](https://forum.pmdg.com/forum/main-forum/cockpit-builders/384201-usb-hub-recommendations-for-winwing-accessories), [MSFS forum — for those using powered USB hubs](https://forums.flightsimulator.com/t/for-those-using-powered-usb-hubs/610524), [MSFS forum — all controllers on one hub?](https://forums.flightsimulator.com/t/all-controllers-on-1-usb-hub-or/634928), [AVSIM — best way to connect USB flight controls](https://www.avsim.com/forums/topic/551387-best-way-to-connect-usb-flight-controls/).
