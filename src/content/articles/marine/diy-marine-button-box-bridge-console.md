---
title: "DIY Marine Button Box: Build a Bridge Console for Horn, Lights, Anchor and VHF"
description: "A practical DIY guide to building a marine sim button box — which switches and encoders to use, what bridge functions deserve a button, and how to wire an Arduino Pro Micro or a Leo Bodnar board for under $50."
bay: "marine"
type: "diy"
primaryKeyword: "DIY marine button box"
author: "Gus Calder"
publishDate: 2026-06-14
updatedDate: 2026-07-02
heroImage: "/images/gear/marine/leobodnar-bbi-32-button-box-interface.jpg"
heroAlt: "Leo Bodnar BBI-32 button box interface board — the solderless digital brain behind a DIY bridge switch panel"
excerpt: "A wheel steers and a throttle drives — but a real bridge is buttons and switches. Here's how to build a marine button box for horn, lights, anchor and autopilot for under $50, and what's worth a dedicated control."
featured: false
goldStatus: "refresh"
sourceReviewDate: 2026-07-02
revenueTier: "B"
contentCluster: "marine"
readingTime: 9
faqs:
  - q: "What functions should a marine sim button box have?"
    a: "The high-value ones are the things you reach for repeatedly or in a hurry: horn/sound signals, navigation and deck lights, anchor up/down, autopilot engage and heading adjust, bow thruster, VHF channel, and a camera/view toggle. Toggle switches suit on/off states (nav lights, anchor light), momentary buttons suit actions (horn, anchor drop), and rotary encoders suit values you dial (autopilot heading, VHF channel)."
  - q: "How much does a DIY marine button box cost to build?"
    a: "Under $50 for most builds. An Arduino Pro Micro clone runs about $4–$8, a Leo Bodnar BU0836A is £33 (roughly $42 before shipping), and the switches, buttons and encoders add $10–$25 depending on quality. The enclosure can be a 3D print, a project box, or scrap. Most of the cost is the switches, not the brains."
  - q: "Arduino or a Leo Bodnar board for a marine button box?"
    a: "The Leo Bodnar BU0836A (or the solderless BU0836X) is the no-code route — wire your switches to it, plug in USB, and it's a recognized controller with no drivers. The Arduino Pro Micro is the code-it-yourself route using the open-source ArduinoJoystickLibrary; it's cheaper and far more flexible (button matrices, encoder handling, software toggles for latching switches) but you spend time in the IDE."
  - q: "Will latching toggle switches work in a button box?"
    a: "Yes, but a latching toggle registers as a continuous 'press and hold' rather than a single press. For sim functions that expect a momentary tap, you either use momentary switches or add code/software that converts the held state into a single trigger. The Arduino route handles this in the sketch; the no-code board route needs mapping software like JoyToKey."
  - q: "Do I need soldering skills to build a marine button box?"
    a: "It depends on the board. An Arduino or the classic BU0836A means soldering wires to pin headers. If you want to skip the iron entirely, the Leo Bodnar BU0836X and BBI-32 use solderless push-in terminals — strip a wire, push it in, done — and a ready-made PXN CB1 skips fabrication altogether. So soldering is optional, not mandatory."
related:
  - "diy-bridge-command-throttle"
  - "marine-sim-mapping-software-guide"
  - "professional-ship-simulator-2026-hardware-setup"
  - "marine-sim-hardware-reality"
---

**Verdict first: a marine button box is the single best-value DIY in this bay, because the hard part is already solved — the sim-racing world spent a decade perfecting cheap button boxes, and you just relabel the switches for a bridge.** A wheel steers and a throttle drives, but neither makes a rig feel like a *bridge*. What does is the wall of switches: the horn you slap during a crossing, the deck lights you flip at dusk, the anchor you let go, the autopilot you nudge two degrees to starboard. Build it on a **$4–$8 Arduino Pro Micro** if you want maximum value and don't mind writing a sketch, or on a **no-code Leo Bodnar board** (£33 BU0836A, or the solderless BU0836X) if you'd rather wire-and-plug. Sixteen buttons, six toggles, two encoders, two evenings, under $50 — and your rig stops being a desk with a wheel on it.

This is a maker project, so I'll be straight about the work: expect wiring, a couple of evenings, and some calibration. The reward is a console that does exactly what *your* bridge needs, for less than the price of one repurposed flight controller. You're not inventing anything here — you're borrowing a solved problem.

**A quick honesty note on photos.** This is a low-product-density build guide, not a shopping list, so I show a verified product photo only for the boards and panels I've actually confirmed. The two most-recommended controller boards — the classic solder-it-yourself **BU0836A** and the **Arduino Pro Micro clone** — appear as links rather than photos where I don't have a verified image in this context. Where I *do* have a verified board photo (the solderless BU0836X, the BBI-32, the ready-made PXN CB1), I show it. I'd rather flag the gap than dress up a stock shot.

## Why build instead of buy

Because there's nothing to buy. As with the rest of the marine bay, no company sells a consumer marine button box — the same reason there's no consumer boat helm, covered in [the hardware reality check](/marine/marine-sim-hardware-reality). The sim-racing community, by contrast, has been building button boxes for a decade, and every part, wiring diagram and code library transfers directly. A typical sim-racing button box packs **32 or more functions** into one box; a bridge doesn't need that many, which makes a marine build *easier* than a racing one, not harder.

## The brains: Arduino Pro Micro or a Leo Bodnar board

You have two clean choices for the controller board, and the decision is effort versus flexibility.

| Board | ~Price (2026) | Setup | Best for |
|---|---|---|---|
| **Arduino Pro Micro (ATmega32u4)** | $4–$8 (clone) | Write a sketch with ArduinoJoystickLibrary | Cheapest, most flexible; button matrices, encoders, software toggles |
| **Leo Bodnar BU0836A** | £33 (~$42) | No code — solder and plug in | Recognized controller, zero programming, 8 axes + 32 inputs |
| **Leo Bodnar BU0836X** | £59.99 (~$77) | No code, no solder — push-in terminals | Same as BU0836A but solderless; pricier |

The **Pro Micro** is the value king. Its ATmega32u4 chip has native USB, so with the open-source [ArduinoJoystickLibrary](https://github.com/MHeironimus/ArduinoJoystickLibrary) (LGPL-3.0, actively maintained) it presents to Windows as a real HID joystick — your switches show up as buttons, your encoders as inputs, no extra drivers. Clones sell for a few dollars, so it's the cheapest custom-controller foundation there is. The catch is you write a sketch and calibrate. See [the Arduino-as-helm gear page](/marine/gear/arduino-leonardo-diy-hid) for the full board rundown — the Leonardo and Pro Micro share the same chip and the same library.

<aside class="gearpick">
  <a class="gp-shot" href="/marine/gear/arduino-leonardo-diy-hid"><span class="gp-tag">Value king</span><img src="/images/gear/marine/arduino-leonardo-diy-hid.jpg" alt="Arduino Leonardo (ATmega32u4 HID)" loading="lazy"></a>
  <div class="gp-body">
    <span class="gp-eyebrow">Programmable DIY · native USB HID</span>
    <span class="gp-name"><a href="/marine/gear/arduino-leonardo-diy-hid">Arduino Leonardo (ATmega32u4 HID)</a></span>
    <p class="gp-why">Same ATmega32u4 brain as the Pro Micro clone, and the cheapest way to make a wall of switches and encoders read as a real controller. Worth it for the code flexibility alone — a sketch can turn a latching toggle into a clean single press, which the no-code boards can't. You write the sketch and build the hardware around it.</p>
    <span class="gp-price">~$25 (Pro Micro clone from ~$5)</span>
    <span class="gp-actions">
      <a class="gp-review" href="/marine/gear/arduino-leonardo-diy-hid">Spec card</a>

    </span>
  </div>
</aside>

The **Leo Bodnar boards** are the no-code shortcut: wire your switches to the terminals, plug in, done. The classic **BU0836A** (£33, ~$42) gives you 8 analog axes and 32 button / 16 encoder inputs, and it's the documented choice for [the Bridge Command DIY helm build](/marine/diy-bridge-command-throttle) — if you're already building a wheel and throttle around one, adding your button-box switches to the same board is the obvious move. The catch is you solder to its pin headers.

If you'd rather never touch a soldering iron, the **BU0836X** is the same interface with push-in terminals — strip a wire, push it in — for £59.99 (~$77). That's the board I can show you a verified photo of, and it's the friendlier version of the same recipe.

<aside class="gearpick">
  <a class="gp-shot" href="/marine/gear/leobodnar-bu0836x-diy-board"><span class="gp-tag">No-code, no-solder</span><img src="/images/gear/marine/leobodnar-bu0836x-diy-board.jpg" alt="Leo Bodnar BU0836X Joystick Interface (push-in connectors)" loading="lazy"></a>
  <div class="gp-body">
    <span class="gp-eyebrow">8 analog axes + 32 buttons · solderless</span>
    <span class="gp-name"><a href="/marine/gear/leobodnar-bu0836x-diy-board">Leo Bodnar BU0836X Joystick Interface</a></span>
    <p class="gp-why">The zero-IDE, zero-solder answer, and the smart pick if you're already running a DIY helm — your throttle pots and your bridge switches can share one board. Eight axes plus 32 buttons cover twin throttles, wheel, thruster and a switch panel at once. Pricier than the solder-it-yourself BU0836A, and it ships from the UK.</p>
    <span class="gp-price">~$77</span>
    <span class="gp-actions">
      <a class="gp-review" href="/marine/gear/leobodnar-bu0836x-diy-board">Spec card</a>
      <a href="https://www.leobodnar.com/shop/index.php?main_page=product_info&products_id=180" target="_blank" rel="nofollow noopener">Read official specifications</a>
    </span>
  </div>
</aside>

For a button box specifically — lots of switches, no analog axes needed — a Pro Micro is the cheapest smart pick. For a *combined* helm-plus-buttons console where you also want throttle and wheel axes, a BU0836-series board's analog inputs earn their keep on one board.

## What deserves a dedicated control

This is the design half of the project, and it's worth thinking through before you cut a single hole. The rule: **a function earns a physical control if you reach for it often or in a hurry.** Here's the marine-specific layout I'd build, mapped to the right switch type.

| Switch type | What it suits | Marine functions to map |
|---|---|---|
| **Momentary push button** | Single actions | Horn / sound signals, anchor drop, man-overboard marker, camera/view cycle, day-night display toggle |
| **Toggle switch** | On/off states | Navigation lights, deck lights, anchor light, engine-room / bilge pump, autopilot engage |
| **Rotary encoder** | A value you dial | Autopilot heading, VHF channel, radar range, throttle trim or bow-thruster fine control |
| **Keyed ignition switch** | Realism (optional) | Engine start |

A solid first build is roughly **16 momentary buttons, 6 toggle switches, and 2 rotary encoders** — enough for a complete bridge without overwhelming the wiring. That's well within a single Pro Micro's input count once you wire the buttons as a matrix, and comfortably inside a BU0836's 32-input budget.

## The switch-type trap (read this before you buy switches)

One thing trips up first-time builders, marine or racing: **latching (non-momentary) toggle switches register as press-and-hold, not a single press.** If your sim's "anchor light on" command expects a momentary tap, a latching toggle holds the input down forever. You have two fixes:

- **On the Arduino route,** handle it in the sketch — detect the state *change* and fire one clean button press. This is the cleanest fix and costs nothing but a few lines of code.
- **On the no-code board route,** you have no sketch, so either use momentary switches for those functions or add a mapping layer. This is exactly what [marine sim mapping software](/marine/marine-sim-mapping-software-guide) — JoyToKey, vJoy and friends — exists for: converting a held state into a single trigger.

Decide this *before* you order switches, because it changes what you buy. A wall of latching toggles looks great and behaves badly on a no-code board; a mix of momentary buttons and a few latching switches (for genuine on/off states like nav lights) is the safer first build.

<div class="callout tip">
  <div class="ct">// Pro tip</div>
  <p>Don't want to fabricate at all? A ready-made panel like the PXN CB1 gives you 19 controls and up to 30 mappable functions out of the box, driver-free over USB-C — you just bind its buttons to your sim's bridge commands. It's racing-styled RGB rather than a salty bridge aesthetic, and being all-digital it pairs with an analog throttle, but it skips every wiring step in this guide. Current street price runs about $100 (regular $129.99); check current before you buy.</p>
</div>

## The build, step by step

1. **Plan the panel.** Sketch your switch layout on paper at actual size first. Decide what's a button, a toggle, an encoder. Measure the mounting-hole diameters of your chosen switches (commonly 12 mm and 16 mm).
2. **Make the enclosure.** A 3D-printed panel from Printables/Thingiverse is the clean route; a plastic project box or an aluminum bracket works. Drill or print the holes to match step 1.
3. **Mount the switches.** Fit every switch and encoder before wiring — it's far easier to solder or terminate to mounted hardware than to wrestle a finished harness into holes.
4. **Wire the buttons as a matrix (Arduino) or straight to inputs (Bodnar).** For more than a handful of buttons on an Arduino, a row-column matrix saves pins; add a diode per button if you want true multi-press (n-key rollover), which simple bridge use can often skip. A BU0836/BBI-32 takes each switch on its own input, no matrix math.
5. **Wire encoders and toggles** to their input pins (CLK/DT for the encoder rotation, SW for its push).
6. **Flash the firmware** (Pro Micro) or just plug in (Bodnar boards). For the Arduino, upload a sketch using ArduinoJoystickLibrary, then Verify and Upload.
7. **Calibrate and test in Windows** — open the game-controller properties and confirm every button, toggle and encoder registers *before* you ever launch a sim.
8. **Map into your sim,** adding glue software only for latching-switch or non-native functions.

Total build time is realistically **two evenings** — one to fabricate and mount, one to wire, flash and map.

<div class="callout forum">
  <div class="ct">// From the builders</div>
  <p>The DIY-button-box wisdom nobody tells you until your first build: test the whole harness in the Windows game-controller panel <em>before</em> you close the enclosure. Builders across the sim-racing forums repeat the same regret — they buttoned everything up, then found one cold solder joint or a swapped encoder pin and had to tear the panel back open. Five minutes clicking through the "USB Game Controllers" properties dialog, watching each input light up as you press it, saves an hour of disassembly. Map in the sim last; verify at the OS level first.</p>
</div>

## Where a button box pays off most

The button box earns its keep in the deepest titles. **Professional Ship Simulator** (rebranded from Nautic XP, unveiled by Aerosoft and SWE Systems in April 2026, targeting Steam Early Access in 2026) advertises a fully interactive cockpit with **100+ mappable buttons** — practically an invitation to build a full console, where every one of those buttons is a function you'd otherwise hunt for on a keyboard. It also added a rudder deadzone option aimed at HOTAS/controller rigs, a sign the developer is designing for builders' hardware. (Its exact axis count and final Early Access window are still shifting — the live Steam page currently reads "Early Access finished in mid of 2027" — so treat specifics as *check current*.) If that's your target sim, plan the button box and the helm together; [the Professional Ship Simulator hardware setup guide](/marine/professional-ship-simulator-2026-hardware-setup) walks the full rig.

<aside class="gearpick">
  <a class="gp-shot" href="/marine/gear/professional-ship-simulator-context"><span class="gp-tag">Where it pays off</span><img src="/images/gear/marine/professional-ship-simulator-context.jpg" alt="Professional Ship Simulator (ex-Nautic XP)" loading="lazy"></a>
  <div class="gp-body">
    <span class="gp-eyebrow">Steam Early Access · 2026</span>
    <span class="gp-name"><a href="/marine/gear/professional-ship-simulator-context">Professional Ship Simulator (ex-Nautic XP)</a></span>
    <p class="gp-why">Not hardware — the sim most likely to reward a full bridge console. A fully interactive cockpit with 100+ mappable buttons and a rudder deadzone option for HOTAS/controller rigs means your button box maps to real ship systems instead of gathering dust. Early Access, so expect launch caveats; price not yet announced.</p>
    <span class="gp-price">Price TBD · wishlist on Steam</span>
    <span class="gp-actions">
      <a class="gp-review" href="/marine/gear/professional-ship-simulator-context">Spec card</a>
      <a href="https://store.steampowered.com/app/3636930/Professional_Ship_Simulator/" target="_blank" rel="nofollow noopener">Official Steam page</a>
    </span>
  </div>
</aside>

Planning the physical desk layout for a multi-part console alongside a wheel and throttle is also exactly what [the Rig Configurator](/racing/configurator) is for — it thinks in terms of one shared base you reuse, which is the right mental model for a bridge you build in pieces.

## The solderless path: a dedicated switch-panel board

If you want a full bridge panel of switches, knobs and encoders but don't want to solder or write code, the digital-only **Leo Bodnar BBI-32** is the companion board to a BU0836. Solderless push-in terminals take **32 switches or up to 16 encoders** (chainable rotary switches reach as many as 132 inputs), so it handles a complete panel — nav lights, horn, autopilot, anchor, engine-room toggles — while a BU0836 handles any analog axes. It's plug-and-play HID with no drivers. The honest caveat: it has no analog inputs at all, so it complements a BU0836 rather than replacing it, and it ships from the UK.

<aside class="gearpick">
  <a class="gp-shot" href="/marine/gear/leobodnar-bbi-32-button-box-interface"><span class="gp-tag">Bridge switch panel</span><img src="/images/gear/marine/leobodnar-bbi-32-button-box-interface.jpg" alt="Leo Bodnar BBI-32 Button Box Interface" loading="lazy"></a>
  <div class="gp-body">
    <span class="gp-eyebrow">Digital-only · 32 inputs, no solder</span>
    <span class="gp-name"><a href="/marine/gear/leobodnar-bbi-32-button-box-interface">Leo Bodnar BBI-32 Button Box Interface</a></span>
    <p class="gp-why">The solderless digital workhorse for a bridge console's switches, knobs and encoders. Push-in terminals, 32 inputs (chainable to 132), plug-and-play HID, no drivers. No analog axes, so it pairs with a BU0836 for throttles and wheel rather than replacing it.</p>
    <span class="gp-price">~$53</span>
    <span class="gp-actions">
      <a class="gp-review" href="/marine/gear/leobodnar-bbi-32-button-box-interface">Spec card</a>
      <a href="https://www.leobodnar.com/shop/index.php?main_page=product_info&products_id=204" target="_blank" rel="nofollow noopener">Read official specifications</a>
    </span>
  </div>
</aside>

## Buy order: what to get, in what order

Build from the top; stop when your bridge feels complete.

1. **Decide code vs no-code first.** Free decision, governs everything below. Want cheapest and most flexible, and comfortable in the Arduino IDE? Pro Micro. Want wire-and-plug? A Leo Bodnar board.
2. **The brain.** An Arduino Pro Micro clone (~$5), a soldered BU0836A (~$42), or a solderless BU0836X (~$77) / BBI-32 (~$53) if you'd rather not solder.
3. **The switches.** Momentary buttons, a few latching toggles for true on/off states, and 1–2 rotary encoders. Budget $10–$25 — this is where most of the money goes.
4. **The enclosure.** A 3D print, a project box, or scrap aluminum. Free to ~$20.
5. **Glue software (only if needed).** JoyToKey or vJoy — free — to convert latching-switch holds into single presses on a no-code board.
6. **Or skip the build entirely.** A ready-made PXN CB1 (~$100) is a finished panel; you just map its buttons.

## Who should skip it

If you only sail — eSail, Sailaway III, MarineVerse — a button box is overkill. Sailing sims lean on sail trim and navigation, not a wall of bridge switches, and a couple of keyboard binds cover what little you toggle. The button box is a *ship-handling and fishing-vessel* upgrade: the more systems your sim models, the more a console earns its place. Match the build to the sim, not to the fantasy.

## The verdict

A marine button box is the most satisfying DIY in the bay because it's the least uncertain — the sim-racing world already solved every hard part, and you're just relabeling the switches for the bridge. Build it on a **$4–$8 Arduino Pro Micro** if you want maximum value and don't mind a sketch, or on a **Leo Bodnar board** (£33 BU0836A soldered, or the ~$77 BU0836X / ~$53 BBI-32 solderless) if you want zero code. Sixteen buttons, six toggles, two encoders, two evenings, under $50 — and your rig stops being a desk with a wheel on it and starts being a bridge. The only thing that changes your parts list is the latching-switch decision, so make that call first.

## Sources Checked

Source review date: July 2, 2026. Prices and specs verified against manufacturer pages and the open-source projects these builds are designed around; where a figure moves with sales or a store listing, it's flagged *check current* in the text rather than quoted as fixed.

Board + library references: [Leo Bodnar BU0836A joystick interface](https://www.leobodnar.com/shop/index.php?main_page=product_info&products_id=204) (£33.00, 8 axes / 32 button / 16 encoder inputs, no drivers), [Leo Bodnar BU0836X (solderless)](https://www.leobodnar.com/shop/index.php?main_page=product_info&products_id=180) (£59.99), [Leo Bodnar BBI-32 button box interface](https://www.leobodnar.com/shop/index.php?main_page=index&cPath=94), [ArduinoJoystickLibrary (MHeironimus, LGPL-3.0)](https://github.com/MHeironimus/ArduinoJoystickLibrary), [ArduinoJoystickFirmware for Pro Micro (BrunoBBS)](https://github.com/BrunoBBS/ArduinoJoystickFirmware).

DIY + free-sim references: [Bridge Command "Make your own throttles and wheel"](https://www.bridgecommand.co.uk/Doc/makethrottle.php) (BU0836 + three ~10k linear pots + horn button + string-friction trick), [Bridge Command (free, open source)](https://www.bridgecommand.co.uk/).

Ready-made panel: [PXN CB1 button box (official)](https://us.e-pxn.com/products/pxn-cb1-racing-button-box-for-american-truck-simulator-farm-simulation) (19 controls / 30 programmable functions, driver-free USB-C; ~$99.99 street, MSRP $129.99 — check current).

Target sim: [Professional Ship Simulator on Steam (ex-Nautic XP)](https://store.steampowered.com/app/3636930/Professional_Ship_Simulator/) (fully interactive cockpit, 100+ mappable buttons, rudder deadzone option; Early Access window stated on-page as finishing "mid of 2027" — treat as check current).

Community + mapping tools (paraphrased in our voice): the recurring "test the harness in the Windows game-controller panel before you close the enclosure" build wisdom from DIY button-box forums, plus the standard glue-software stack — [JoyToKey](https://joytokey.net/en/) and [vJoy](https://sourceforge.net/projects/vjoystick/) — for converting latching-switch holds into clean single presses.
