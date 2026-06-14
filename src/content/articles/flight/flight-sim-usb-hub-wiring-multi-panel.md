---
title: "Flight Sim USB Hubs and Wiring: How to Power a Multi-Panel Cockpit (2026)"
description: "Wire a multi-panel flight sim cockpit without dropouts: powered USB hubs, wattage math, port budgeting, and the Windows fix for panels that randomly disconnect."
bay: "flight"
type: "how-to"
primaryKeyword: "flight sim USB hub multi-panel cockpit"
author: "Robert Pruitt"
publishDate: 2026-06-14
heroImage: "/images/flight/flight-sim-usb-hub-wiring-multi-panel.jpg"
heroAlt: "An overhead schematic of a flight sim cockpit USB wiring tree in cyan lines on deep navy, with a central powered hub node and panel connections branching out"
excerpt: "Add enough panels and your cockpit stops being about flying and starts being about USB. Here is how to budget ports, size a powered hub, and kill the random dropouts that plague WinWing and Honeycomb stacks."
featured: false
readingTime: 9
faqs:
  - q: "Do I need a powered USB hub for flight sim panels?"
    a: "Once you go past two or three USB devices, yes. Yokes, throttles and backlit panels draw real power, and a motherboard's USB ports plus an unpowered hub cannot supply it reliably. A powered hub with its own wall adapter is what stops the random dropouts in a multi-panel cockpit."
  - q: "How many watts does a flight sim USB hub need?"
    a: "It depends on your panels, but backlit airliner panels and FFB bases draw the most. The Honeycomb Flight Sim USB Hub supplies up to 30W across 6 ports, which handles a typical yoke-throttle-pedals-plus-a-few-panels setup. Heavy multi-panel WinWing stacks often run two powered hubs or a hub with a 60W supply."
  - q: "Why do my flight sim panels randomly disconnect?"
    a: "The most common causes are an unpowered or overloaded USB hub and Windows USB selective suspend power-saving. Move panels to a powered hub and disable USB selective suspend in Windows power options — that pair of fixes resolves the majority of random dropout reports."
  - q: "Can I run all my flight sim hardware on one USB hub?"
    a: "Often yes, if it is a quality powered hub with enough wattage and ports. Many builders run a full Honeycomb Alpha, Bravo and Charlie plus several WinWing panels across one or two powered hubs. For very large cockpits, split devices across two hubs to balance the power draw."
  - q: "Should I plug my yoke directly into the motherboard or a hub?"
    a: "Either works, but for troubleshooting a problem device, plug it directly into a rear motherboard USB port first to rule out the hub. For a stable finished cockpit, a quality powered hub keeps cabling tidy and supplies steady power to every panel."
related:
  - "how-to-mount-flight-sim-hardware"
  - "msfs-2024-best-graphics-settings-fps"
  - "honeycomb-flight-deck-upgrade-path"
---

There is a moment every cockpit builder hits where the hobby quietly stops being about flying and starts being about USB. You add the [yoke](/flight/gear/honeycomb-alpha-yoke), then the [Bravo throttle](/flight/gear/honeycomb-bravo-throttle), then [rudder pedals](/flight/gear/honeycomb-charlie-pedals), then a WinWing MCDU, then an FCU, and suddenly a panel blinks out mid-approach for no reason. Welcome to USB power and port management — the unglamorous engineering problem that decides whether your cockpit is reliable or a flickering mess.

This is the guide I wish existed when I wired my first multi-panel stack. No mysticism, just port budgeting, wattage math, and the two-line Windows fix that cures most dropouts.

## Why a multi-panel cockpit overwhelms plain USB

Every device you add does two things to your USB bus: it eats a **port**, and it draws **power**. A motherboard has a finite number of USB ports, and the total current those ports can supply is shared. A yoke and a stick are modest. But **backlit airliner panels** — a WinWing MCDU, an FCU, an ECAM — light up dozens of LEDs and run their own microcontrollers, and a **force-feedback base** is in another league entirely. Stack four or five of those on a cheap unpowered hub plugged into one motherboard port, and you are asking a single port to feed a small Christmas tree. It cannot, so devices brown out and drop.

The fix is conceptually simple: give your panels their own power source instead of begging it from the PC. That source is a **powered USB hub** — a hub with its own wall adapter that supplies current to every port regardless of what the motherboard can spare.

## Powered vs unpowered hubs — the one that matters

| Hub type | Power source | Good for | Risk in a cockpit |
|---|---|---|---|
| **Unpowered hub** | Draws from the PC's one upstream port | A mouse, a keyboard, a USB stick | Browns out panels; the classic dropout cause |
| **Powered USB hub** | Its own wall adapter (e.g. 30W, 60W) | Yokes, throttles, backlit panels, FFB | The right tool — size the wattage to your load |
| **Direct to motherboard** | The port itself | One problem device while troubleshooting | Runs out of physical rear ports fast |

For anything past two or three devices, the answer is a **powered hub**. The only real decision left is how much wattage and how many ports.

### Sizing the wattage

Think in terms of total draw. A typical enthusiast cockpit — yoke, throttle, pedals, and two or three backlit panels — fits comfortably on a hub that supplies around **30W across 6 ports**. The **Honeycomb Flight Sim USB Hub** is built exactly for this: 6 powered ports, up to 30W total, sized for a flight-sim load rather than general office use.

When you push into a **full airliner panel stack** — MCDU plus FCU plus EFIS plus overhead plus a couple of throttles — you are past what one 30W hub handles. Heavy builders routinely run **two powered hubs**, or a single hub fed by a beefier **60W supply**, splitting the panels across them to balance the draw. One documented PMDG-builder setup runs a full Honeycomb Alpha, Bravo and Charlie alongside multiple WinWing panels — MCDU, PFP, EFIS, FCU — across two powered hubs with a 60W supply. If your cockpit is growing that direction, plan for two hubs from the start; it is cheaper than discovering the limit mid-build.

<aside class="gearpick">
  <a class="gp-shot" href="/flight/gear/desktop-pilot-10-port-usb-hub"><span class="gp-tag">Cheap insurance</span><img src="/images/gear/flight/desktop-pilot-10-port-usb-hub.jpg" alt="Desktop Pilot 10-Port Powered USB Hub" loading="lazy"></a>
  <div class="gp-body">
    <span class="gp-eyebrow">Powered USB hub · 10 ports, dedicated 12V supply</span>
    <span class="gp-name"><a href="/flight/gear/desktop-pilot-10-port-usb-hub">Desktop Pilot 10-Port Powered USB Hub</a></span>
    <p class="gp-why">The unglamorous part that ends mid-flight dropouts. Its own 12V adapter feeds every device clean power regardless of what the PC can spare, and per-port switches let you cut gear you aren't using. Buy one tier more ports than you need — cockpits only grow.</p>
    <span class="gp-price">~$60</span>
    <span class="gp-actions">
      <a class="gp-review" href="/flight/gear/desktop-pilot-10-port-usb-hub">Full review ▸</a>
      <a class="gp-buy" href="https://www.amazon.com/s?k=Desktop+Pilot+10-Port+Powered+USB+Hub&tag=ignitionsim-20" target="_blank" rel="sponsored nofollow noopener">Check price on Amazon ↗</a>
    </span>
  </div>
</aside>

### Budgeting the ports

Count every USB device, then add headroom. Each yoke, throttle, pedal set, and panel is one port. A six-port hub fills faster than you think once panels arrive. The rule I use: **buy one tier more ports than you currently need**, because cockpit builds only ever grow. Running out of ports mid-project means re-cabling everything, which is exactly the tedium this article exists to prevent.

## The dropout fix nobody mentions until it bites them

Even on a properly powered hub, panels can still drop out — and the culprit is usually not the hardware at all. It is **Windows USB selective suspend**, a power-saving feature that switches off "idle" USB devices. A backlit panel you are not actively pressing looks idle to Windows, so Windows cuts its power, and it vanishes from the sim until you unplug and replug it.

The fix is two steps:

1. **Disable USB selective suspend.** In Windows power options, edit your active plan's advanced settings, find *USB settings → USB selective suspend setting*, and set it to **Disabled**.
2. **Disable "Allow the computer to turn off this device" per hub.** In Device Manager, for each USB Root Hub and Generic USB Hub, open Properties → Power Management and uncheck that box.

Between a powered hub and these two settings, the overwhelming majority of "my panel randomly disconnects" reports go away. If a single device still misbehaves, plug it **directly into a rear motherboard port** to isolate whether it is the device or the hub.

<div class="callout tip">
  <div class="ct">// Pro tip</div>
  <p>Disable USB selective suspend before you spend a dollar on hardware. The single most common "the sim won't see my panel" fix is free, lives in Windows power options, and takes thirty seconds — try it before you assume a panel or hub is dead.</p>
</div>

## Cable and layout discipline

The electrical side is half the job; the physical side is the other half, and it ties straight into [how you mount the hardware](/flight/how-to-mount-flight-sim-hardware):

- **Use rear motherboard ports for the hub's upstream cable.** Front-panel and case-top ports are often lower quality and a source of flaky connections.
- **Velcro the hub somewhere accessible.** You will replug things; do not bury it behind the desk.
- **Label or color-code panel cables.** When something drops, you want to find its cable in five seconds, not trace a spaghetti bowl.
- **Keep cable runs short.** Long USB runs near power supplies and monitors pick up interference; a panel on a 3-metre extension is more dropout-prone than one on a short cable.
- **Plan the hub before the panels.** Wiring is far easier to do once than to redo. If you are mapping out a full station, sketch the USB tree alongside the frame in [the Rig Configurator](/racing/configurator).

## Who should skip this

Skip the powered-hub investment if your whole setup is a yoke, a throttle, and pedals — three devices plugged straight into rear motherboard ports work fine and a hub adds nothing. Skip the **two-hub / 60W** planning unless you are genuinely building an airliner panel stack; a single 30W hub covers most enthusiast cockpits for years. And if your only complaint is one flaky device on an otherwise stable rig, skip the rewiring and try the **selective-suspend fix** first — it is free and solves more dropouts than new hardware does.

## Verdict

A multi-panel flight sim cockpit is an electrical project disguised as a flying hobby, and the two things that make it reliable are cheap and boring: a **powered USB hub sized to your load** (a 30W, 6-port unit like the Honeycomb hub for most builds, two hubs or 60W for big airliner stacks) and **disabling USB selective suspend** in Windows. Get those right and your panels stay connected through the whole flight. Budget one extra tier of ports because cockpits only grow, keep your cable runs short and labeled, and wire the hub before the panels rather than after. Do it once, do it properly, and you can go back to worrying about the approach instead of the USB tree. When you are ready to stage the panel buildout itself, the [Honeycomb flight deck upgrade path](/flight/honeycomb-flight-deck-upgrade-path) lays out the order to add gear.
