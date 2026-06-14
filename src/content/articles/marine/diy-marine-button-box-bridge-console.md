---
title: "DIY Marine Button Box: Build a Bridge Console for Horn, Lights, Anchor and VHF"
description: "A practical DIY guide to building a marine sim button box — which switches and encoders to use, what bridge functions deserve a button, and how to wire an Arduino Pro Micro for under $50."
bay: "marine"
type: "diy"
primaryKeyword: "DIY marine button box"
author: "Robert Pruitt"
publishDate: 2026-06-14
heroImage: "/images/marine/diy-marine-button-box-bridge-console.jpg"
heroAlt: "Macro of a DIY helm build with machined aluminum levers, exposed wiring and a small circuit board, workshop bokeh, steel and teal palette"
excerpt: "A wheel steers and a throttle drives — but a real bridge is buttons and switches. Here's how to build a marine button box for horn, lights, anchor and autopilot for under $50, and what's worth a dedicated control."
featured: false
readingTime: 8
faqs:
  - q: "What functions should a marine sim button box have?"
    a: "The high-value ones are the things you reach for repeatedly: horn/sound signals, navigation and deck lights, anchor up/down, autopilot engage and heading adjust, bow thruster, VHF channel, and a camera/view toggle. Toggle switches suit on/off states (lights, anchor light), momentary buttons suit actions (horn, anchor drop), and rotary encoders suit values (autopilot heading, VHF channel)."
  - q: "How much does a DIY marine button box cost to build?"
    a: "Under $50 for most builds. An Arduino Pro Micro clone is roughly $4–$8, a Leo Bodnar BU0836A is about $42, and the switches, buttons and encoders add $10–$25 depending on quality. The enclosure can be a 3D print, a project box, or scrap. Most of the cost is the switches, not the brains."
  - q: "Arduino or BU0836 for a marine button box?"
    a: "The BU0836A is the no-code route — wire your switches to it, plug in USB, and it's a recognized controller. The Arduino Pro Micro is the code-it-yourself route using the ArduinoJoystickLibrary; it's cheaper and far more flexible (button matrices, encoder handling, software toggles for latching switches) but you'll spend time in the IDE."
  - q: "Will latching toggle switches work in a button box?"
    a: "Yes, but they register as a continuous 'press and hold' rather than a single press. For sim functions that expect a momentary press, you either use momentary switches or add code/software to convert the held state into a single trigger. The Arduino route handles this in the sketch; the BU0836 route needs mapping software."
related:
  - "diy-bridge-command-throttle"
  - "marine-sim-mapping-software-guide"
  - "professional-ship-simulator-2026-hardware-setup"
---

A wheel steers and a throttle drives, but neither makes a rig feel like a *bridge*. What separates a credible bridge console from a desk with a wheel on it is the wall of switches — the horn you slap during a crossing, the deck lights you flip at dusk, the anchor you let go, the autopilot you nudge two degrees to starboard. That's a button box, and it's the one piece of marine hardware where the DIY sim-racing world hands you a complete, cheap, proven blueprint. You're not inventing anything here. You're borrowing a solved problem and relabeling the switches.

This is a maker project, so I'll be straight about the work involved: expect soldering, a couple of evenings, and some calibration. The reward is a console that does exactly what *your* bridge needs, for less than the price of one repurposed flight controller.

## Why build instead of buy

Because there's nothing to buy. As with the rest of the marine bay, no company sells a consumer marine button box — the same reason there's no consumer boat helm, covered in [the hardware reality check](/marine/marine-sim-hardware-reality). The sim-racing community, by contrast, has been building button boxes for a decade, and every part, wiring diagram and code library transfers directly. A typical sim-racing button box packs **32 or more functions** into a single box; a bridge doesn't need that many, which makes a marine build *easier* than a racing one, not harder.

## The brains: Pro Micro or BU0836A

You have two clean choices for the controller board, and the decision is effort versus flexibility.

| Board | ~Price | Setup | Best for |
|---|---|---|---|
| **Arduino Pro Micro (ATmega32u4)** | $4–$8 (clone) | Write a sketch with ArduinoJoystickLibrary | Cheapest, most flexible; handles button matrices, encoders, software toggles |
| **Leo Bodnar BU0836A** | ~$42 | No code — wire and plug in | Fastest path; recognized as a controller with zero programming |

The **Pro Micro** is the value king. Its ATmega32u4 chip has native USB, so with the open-source ArduinoJoystickLibrary it presents to Windows as a real HID joystick — your switches show up as buttons, your encoders as inputs, no extra drivers. At a few dollars it's the cheapest custom-controller foundation there is. The catch is you write a sketch and calibrate. See [the Arduino-as-helm gear page](/marine/gear/arduino-leonardo-diy-hid) for the full board rundown — the Leonardo and Pro Micro use the same chip and the same library.

<aside class="gearpick">
  <a class="gp-shot" href="/marine/gear/arduino-leonardo-diy-hid"><span class="gp-tag">Value king</span><img src="/images/gear/marine/arduino-leonardo-diy-hid.jpg" alt="Arduino Leonardo (ATmega32u4 HID)" loading="lazy"></a>
  <div class="gp-body">
    <span class="gp-eyebrow">Programmable DIY · native USB HID</span>
    <span class="gp-name"><a href="/marine/gear/arduino-leonardo-diy-hid">Arduino Leonardo (ATmega32u4 HID)</a></span>
    <p class="gp-why">Same ATmega32u4 brain as the Pro Micro, and the cheapest way to make a wall of switches and encoders read as a real controller. Worth it for the code flexibility alone — a sketch can turn a latching toggle into a clean single press, which the no-code boards can't.</p>
    <span class="gp-price">~$25</span>
    <span class="gp-actions">
      <a class="gp-review" href="/marine/gear/arduino-leonardo-diy-hid">Full review ▸</a>
      <a class="gp-buy" href="https://www.amazon.com/s?k=Arduino+Leonardo&tag=ignitionsim-20" target="_blank" rel="sponsored nofollow noopener">Check price on Amazon ↗</a>
    </span>
  </div>
</aside>

The **BU0836A** is the no-code shortcut: solder your switches to the pin headers, plug in, done. It's the documented choice for [the Bridge Command DIY helm build](/marine/diy-bridge-command-throttle), and if you're already building a wheel and throttle around one, adding your button-box switches to the same board is the obvious move. The [BU0836A gear page](/marine/gear/leobodnar-bu0836a-diy-board) covers its 8 axes and 32 inputs.

<aside class="gearpick">
  <a class="gp-shot" href="/marine/gear/leobodnar-bu0836a-diy-board"><span class="gp-tag">No-code shortcut</span><img src="/images/gear/marine/leobodnar-bu0836a-diy-board.jpg" alt="Leo Bodnar Electronics BU0836A USB Joystick Interface" loading="lazy"></a>
  <div class="gp-body">
    <span class="gp-eyebrow">DIY interface · 8 axes + 32 buttons</span>
    <span class="gp-name"><a href="/marine/gear/leobodnar-bu0836a-diy-board">Leo Bodnar Electronics BU0836A USB Joystick Interface</a></span>
    <p class="gp-why">The zero-IDE answer, and the smart pick if you're already running a DIY helm — your throttle pots and your bridge switches can share one board. Skip the sketch entirely; just solder and plug in. Note the 32-button cap if your console gets ambitious.</p>
    <span class="gp-price">~$42</span>
    <span class="gp-actions">
      <a class="gp-review" href="/marine/gear/leobodnar-bu0836a-diy-board">Full review ▸</a>
      <a class="gp-buy" href="https://www.amazon.com/s?k=Leo+Bodnar+BU0836A&tag=ignitionsim-20" target="_blank" rel="sponsored nofollow noopener">Check price on Amazon ↗</a>
    </span>
  </div>
</aside>

For a button box specifically — lots of switches, no analog axes needed — the Pro Micro is the smart pick. For a *combined* helm-plus-buttons console, the BU0836A's analog inputs earn their keep.

## What deserves a dedicated control

This is the design half of the project, and it's worth thinking through before you cut a single hole. The rule: **a function earns a physical control if you reach for it often or in a hurry.** Here's the marine-specific layout I'd build, mapped to the right switch type.

- **Momentary push buttons** (single action): horn / sound signals, anchor drop, man-overboard marker, camera/view cycle, day-night display toggle.
- **Toggle switches** (on/off state): navigation lights, deck lights, anchor light, engine room / bilge pump, autopilot engage.
- **Rotary encoders** (a value you adjust): autopilot heading, VHF channel, radar range, throttle trim or bow-thruster fine control.
- **A keyed ignition switch** (optional, but it sells the realism): engine start.

A solid first build is roughly **16 momentary buttons, 6 toggle switches, and 2 rotary encoders** — enough for a complete bridge without overwhelming the wiring. That's well within a single Pro Micro's input count when you wire the buttons as a matrix.

## The switch-type trap

One thing that trips up first-time builders, marine or racing: **latching (non-momentary) toggle switches register as press-and-hold, not a single press.** If your sim's "anchor light on" command expects a momentary tap, a latching toggle will hold the input down forever. You have two fixes. On the **Arduino route**, handle it in the sketch — detect the state *change* and fire a single button press. On the **BU0836 route**, you have no code, so you either use momentary switches for those functions or add a mapping layer. This is exactly the kind of job [marine sim mapping software](/marine/marine-sim-mapping-software-guide) — JoyToKey, vJoy and friends — exists for: converting a held state into a clean single trigger.

<div class="callout tip">
  <div class="ct">// Pro tip</div>
  <p>Don't want to fabricate at all? A ready-made panel like the PXN CB1 (~$80) gives you 19 controls and ~30 mappable functions out of the box, driver-free over USB-C — you just bind its buttons to your sim's bridge commands. It's racing-styled RGB rather than a salty bridge aesthetic, and being all-digital it pairs with an analog throttle, but it skips every solder joint in this guide.</p>
</div>

## The build, step by step

1. **Plan the panel.** Sketch your switch layout on paper at actual size first. Decide what's a button, a toggle, an encoder. Measure the mounting-hole diameters of your chosen switches (commonly 12 mm and 16 mm).
2. **Make the enclosure.** A 3D-printed panel from Printables/Thingiverse is the clean route; a plastic project box or even an aluminum bracket works. Drill or print the holes to match step 1.
3. **Mount the switches.** Fit every switch and encoder before wiring — it's far easier to solder to mounted hardware than to wrestle a finished harness into holes.
4. **Wire the buttons as a matrix.** For more than a handful of buttons, a row-column matrix saves pins. Add a diode per button if you want true multi-press (n-key rollover); for simple bridge use you can often skip it.
5. **Wire encoders and toggles** to their input pins (CLK/DT/SW for each encoder).
6. **Flash the firmware** (Pro Micro) or just plug in (BU0836A). For the Arduino, upload a sketch using ArduinoJoystickLibrary, then hit Verify and Upload.
7. **Calibrate and test in Windows** — open the game controller properties and confirm every button, toggle and encoder registers before you ever launch a sim.
8. **Map into your sim**, adding glue software only for any latching-switch or non-native functions.

Total build time is realistically **two evenings** — one to fabricate and mount, one to wire, flash and map.

## Where a button box pays off most

The button box earns its keep in the deepest titles. **Professional Ship Simulator** (Early Access targeted 2026) advertises support for **50+ buttons and 9 axes**, which is practically an invitation to build a full console — every one of those buttons is a function you'd otherwise hunt for on a keyboard. If that's your target sim, plan the button box and the helm together; [the Professional Ship Simulator hardware setup guide](/marine/professional-ship-simulator-2026-hardware-setup) walks the full 9-axis rig. Planning the physical desk layout for a multi-part console alongside a wheel and throttle is also exactly what [the Rig Configurator](/racing/configurator) is for.

## Who should skip it

If you only sail — eSail, Sailaway III, MarineVerse — a button box is overkill. Sailing sims lean on sail trim and navigation, not a wall of bridge switches, and a couple of keyboard binds cover what little you toggle. The button box is a *ship-handling and fishing-vessel* upgrade: the more systems your sim models, the more a console earns its place. Match the build to the sim, not to the fantasy.

## The verdict

A marine button box is the most satisfying DIY in the bay because it's the least uncertain — the sim-racing world already solved every hard part, and you're just relabeling the switches for the bridge. Build it on a **$4–$8 Arduino Pro Micro** if you want maximum value and don't mind a sketch, or piggyback it on a **BU0836A** if you're already running a DIY helm and want zero code. Sixteen buttons, six toggles, two encoders, two evenings, under $50 — and your rig stops being a desk with a wheel on it and starts being a bridge.
