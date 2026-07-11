---
title: "Build Your Own Ship's Wheel and Throttle for Bridge Command (Under $60)"
description: "The marine bay's flagship maker project: build a real ship's helm and twin throttles for the free Bridge Command sim using a Leo Bodnar BU0836 board, three 10k linear pots, and the string-friction trick that makes the levers hold position like a real engine control."
bay: "marine"
type: "diy"
primaryKeyword: "DIY ship helm controller"
author: "Gus Calder"
publishDate: 2026-05-31
updatedDate: 2026-07-02
heroImage: "/images/gear/marine/leobodnar-bu0836x-diy-board.jpg"
heroAlt: "Leo Bodnar BU0836X joystick interface board with push-in wire terminals — the brain of a DIY Bridge Command helm build"
excerpt: "Bridge Command is the one marine sim that publishes an official hardware build. For under $60 in parts — a BU0836 board and three 10k linear pots — you get a real analog helm and twin throttles. Here's the full build, wiring, and the friction trick everyone skips."
featured: false
goldStatus: "refresh"
sourceReviewDate: 2026-07-02
revenueTier: "B"
contentCluster: "marine"
readingTime: 9
faqs:
  - q: "What parts do I need to build a DIY ship throttle for Bridge Command?"
    a: "A Leo Bodnar BU0836 USB interface board and three 10k linear potentiometers — two for the port and starboard throttles, one for the wheel — plus hookup wire, an enclosure, and optionally a push-to-make button for the ship's horn. Total parts cost runs roughly $30–$60. Prices drift, so check current before you order."
  - q: "How do I make DIY throttle levers feel realistic instead of flopping?"
    a: "Add friction so each lever holds its setting instead of drifting under its own weight. The trick the official Bridge Command guide documents is to wrap string around the potentiometer shaft and anchor it solidly to something rigid — the drag holds the lever wherever you push it, exactly like a real engine control. An O-ring or felt washer under the knob does the same job with a cleaner look."
  - q: "Do I have to solder to build the Bridge Command helm?"
    a: "Only if you use the classic BU0836A, which has pin headers you solder pots and switches to. If you'd rather skip the iron entirely, the BU0836X is the same Leo Bodnar interface with push-in wire terminals — press the tab, push the wire in, done. It costs more (about £59.99 / ~$77 versus ~£33 / ~$42 for the BU0836A) but needs no soldering."
  - q: "Why linear potentiometers and not logarithmic ones?"
    a: "A logarithmic (audio) taper crams most of its resistance change into one end of its travel, so your lever's physical center won't read as electrical center and 'half ahead' lands nowhere near the middle of the throttle range. The Bridge Command guide specifies linear pots around 10k for exactly this reason. Check the printed code: 'B10K' is linear, 'A10K' is logarithmic."
  - q: "Is Bridge Command really free, and does it read the DIY board without extra software?"
    a: "Yes — Bridge Command is a free, open-source, ship-handling simulator, and it's the only marine sim I know of that publishes an official DIY throttle-and-wheel build. Because a BU0836 board presents to Windows as a standard USB game controller, the sim reads its axes natively once you enable joystick support and assign the axes in settings. No glue software needed for this specific build."
related:
  - "diy-marine-button-box-bridge-console"
  - "marine-sim-controller-support"
  - "marine-sim-hardware-reality"
---

Verdict first: **this is the one marine rig you don't buy — you build it, for the price of a single AAA game, and it feels more like a real helm than anything you can order off a shelf.** Every other article in this bay ends with "repurpose a racing wheel." This one is different, because **Bridge Command** — a free, open-source, ship-handling sim — is the only marine title I know of that publishes an *official* how-to for building your own throttles and wheel. The recipe is a **Leo Bodnar BU0836 board**, **three 10k linear potentiometers**, an enclosure, and a length of string. Get the string-friction step right and three floppy pots become engine levers that hold their setting like the real thing. Skip it, and you've built a toy. That one detail is the whole difference, so read to the end.

I've written hardware guides for racing rigs where the hard part is choosing between three excellent direct-drive bases. Marine is the opposite: [there is no consumer boat wheel on any shelf anywhere](/marine/marine-sim-hardware-reality), so the niche's most "native" hardware isn't sold — it's made. That sounds like a downgrade until you build one. You end up with a true analog wheel axis and position-holding levers feeding a sim that was *designed* to accept exactly that. No proprietary ecosystem, no force feedback you'll never use, no analog-axis gate to fight. Just pots, a USB board, and an afternoon.

**A quick honesty note on photos.** The board the classic Bridge Command guide names is the solder-it-yourself **BU0836A**, and I don't have a verified product photo of that exact unit — so it appears below as text and a link, not a picture. Where I *do* show a board, it's the solderless **BU0836X** (the same Leo Bodnar interface, friendlier wiring) and the **Arduino Leonardo**, both of which I've verified in this catalog. I'd rather flag that gap than show you a stock shot pretending to be the part you're wiring.

## Why Bridge Command is the right target

Most marine titles fight you on hardware. The [analog-axis gate I map out in the controller-support guide](/marine/marine-sim-controller-support) means a lot of sims read only keyboard-style left/right, so your beautiful analog wheel maps to a binary turn and your throttle lever does nothing at all. Bridge Command doesn't have that problem — because it documents the build itself. You're constructing hardware the sim already expects to see, and a BU0836 board presents to Windows as an ordinary USB game controller, so the axes assign cleanly in the sim's settings with no glue software in the middle. That's a rare luxury in this niche, and it's exactly why this is the bay's flagship maker project.

<figure>

![Bridge Command, the free open-source ship-handling simulator that documents its own DIY helm build](/images/gear/marine/bridge-command-free-sim.jpg)

<figcaption>Bridge Command — the free, open-source ship-handling sim that publishes the official throttle-and-wheel build. The hardware and this sim are inseparable.</figcaption>
</figure>

## The bill of materials

The whole build runs roughly **$30–$60** in parts. Prices on the board and pots drift with supply and shipping, so treat these as approximate and **check current** before ordering — especially the Leo Bodnar board, which ships from the UK.

| Part | Purpose | Notes |
|---|---|---|
| **BU0836** USB interface board | Turns pots into a recognized game controller | The documented, no-code choice; ~£33 / ~$42 (BU0836A) |
| **3× 10k linear potentiometers** | Two throttles + one wheel axis | Linear taper (B10K), not logarithmic. ~10k value; exact value isn't critical |
| Hookup wire + connectors | Pot-to-board wiring | Three wires per pot (two outer + wiper) |
| Enclosure / panel | Mounting the levers and wheel | Wood, acrylic, or a project box |
| String + a rigid anchor | Throttle friction | The realism trick — details below |
| **Push-to-make button** *(optional)* | Ship's horn | Wired between a ground pin and the column-1 button pin |

The **BU0836** is the heart of it. It's a small board that presents your potentiometers to the PC as analog axes on a standard USB game controller — 8 analog inputs at 12-bit resolution, no firmware, no coding. You wire a pot, Windows sees an axis. That's the whole magic, and it's why the BU0836 is the documented choice over a code-it-yourself board.

The classic guide names the **BU0836A** (pin-header version, ~£33 / ~$42), which you solder your pots and switches to. I don't have a verified photo of that exact board, so it's a link rather than a picture here — check current pricing and buy direct from [Leo Bodnar](https://www.leobodnar.com/shop/index.php?main_page=product_info&products_id=204) (US makers can also source it through Ricmotech), or verify marketplace availability for the Leo Bodnar BU0836A.

If you'd rather not touch a soldering iron at all, the **BU0836X** below is the same Leo Bodnar interface with solderless push-in terminals — press the tab, push the wire in, done. It's the friendlier version of the identical recipe (same 8 axes, same 12-bit resolution, 32 buttons), and it's the one board in this build I can show you a verified photo of. It costs more (~£59.99 / ~$77) for the convenience.

<aside class="gearpick">
  <a class="gp-shot" href="/marine/gear/leobodnar-bu0836x-diy-board"><span class="gp-tag">No-solder board</span><img src="/images/gear/marine/leobodnar-bu0836x-diy-board.jpg" alt="Leo Bodnar BU0836X Joystick Interface (push-in connectors)" loading="lazy"></a>
  <div class="gp-body">
    <span class="gp-eyebrow">8 analog axes · solderless</span>
    <span class="gp-name"><a href="/marine/gear/leobodnar-bu0836x-diy-board">Leo Bodnar BU0836X Joystick Interface</a></span>
    <p class="gp-why">The same proven Leo Bodnar interface as the classic BU0836A, but with push-in wire terminals — no soldering iron needed. Eight analog axes plus 32 buttons cover twin throttles, wheel, thruster and a horn on one board. It's the whole Bridge Command recipe without solder; pricier than the BU0836A for the convenience. Ships from the UK.</p>
    <span class="gp-price">~$77 (check current)</span>
    <span class="gp-actions">
      <a class="gp-review" href="/marine/gear/leobodnar-bu0836x-diy-board">Spec card</a>
      <a class="gp-buy" href="https://www.leobodnar.com/shop/index.php?main_page=product_info&products_id=180" target="_blank" rel="noopener">Buy at Leo Bodnar ↗</a>
    </span>
  </div>
</aside>

The **three 10k linear pots** map to the three things a small-ship helm needs: a port throttle, a starboard throttle, and the wheel itself. The Bridge Command guide is explicit that they must be **linear** taper, around 10k, and that the exact resistance value doesn't matter. You can use sliding or rotary pots — a slider is mechanically simpler, but a rotary makes a more convincing throttle lever.

## The build, step by step

The official guide's own wiring instructions are refreshingly plain. Here's the whole thing.

1. **Mount the three pots** to your panel or enclosure — two side by side for the throttles, one for the wheel axis. Leave room for the lever arms to swing through their full travel.
2. **Wire each pot to the board.** A potentiometer has three terminals: the two outer ones carry the voltage reference and ground, the center **wiper** carries the varying signal to an analog input. On the BU0836, the guide has you connect each pot's three pins to one of the three-pin sets along the left of the board. Repeat for all three pots.
3. **(Optional) Add the horn button.** Wire a simple push-to-make switch between any ground pin and the button matrix's column-1 pin. In the guide's own words, the column-1 pin is the 6th from the right along the top of the board, and the nearest ground pin is two pins to its left.
4. **Connect the board to your PC over USB.** Windows recognizes it immediately as a game controller — no drivers — with your three axes.
5. **Verify and correct the axes.** Open Windows' game-controller properties and sweep each pot end to end. If an axis runs backwards or the wrong pot drives the wrong axis, the guide's fix is literally to swap how the connectors are wired, and flip a connector if a channel reads inverted.
6. **Attach lever arms and a wheel** to the pot shafts. Throttle levers want a handle you can grip and push; the wheel pot wants a spoke or rim.
7. **Enable joystick support and map the axes in Bridge Command.** Because the sim documents this build, the throttle and wheel axes assign cleanly to engine and rudder control in its settings.

## The string-friction trick (the part everyone forgets)

A raw potentiometer offers almost no resistance — the lever flops, and a throttle you set to "half ahead" drifts back to idle the moment you let go. A real engine control holds wherever you leave it. The Bridge Command guide's fix is delightfully low-tech and I'll quote its intent exactly: **wrap some string around the potentiometer shaft and solidly connect it to something rigid.** The string drags against the shaft as the lever moves, so the throttle *stays* where you push it.

This is the difference between a toy and a control. Without friction, you fight the lever constantly and it never feels like a ship's telegraph. With a few wraps of string anchored to the enclosure, the lever holds a setting the way a real engine control does. Tune the number of wraps until the drag feels right — too little and it slips, too much and it binds.

<div class="callout forum">
  <div class="ct">// From the builders</div>
  <p>The recurring first-timer story in DIY-helm threads is always the same: someone posts a clip of a throttle lever sliding back to idle on its own and asks what they wired wrong. The answer is never wiring — it's friction. A waxed boot-lace looped around the pot shaft and anchored to the enclosure is the bridge-builder's secret handshake. If bare string feels too crude for your build, an O-ring or a felt washer under the knob does the same job with a tidier look. Sort the friction before you fabricate the pretty enclosure — it's the step that decides whether the whole rig feels real.</p>
</div>

<div class="callout tip">
  <div class="ct">// Pro tip</div>
  <p>Buy linear-taper pots, not the audio/logarithmic ones the bargain bins are full of. A log taper crams most of its travel into one end, so your lever's physical center won't read as electrical center and "half ahead" lands nowhere near the middle. Check the printed code on the pot: a "B10K" is linear (what you want), an "A10K" is logarithmic (what you don't).</p>
</div>

## The code-it-yourself alternative: Arduino

The BU0836 is the no-code path — wire a pot, get an axis. If instead you want *logic* the fixed board can't do — software detents at each throttle notch, a button matrix, an encoder for the compass, or a combined helm-plus-button-box on one cheap board — the **Arduino Leonardo** is the flexible route. Its ATmega32u4 chip has native USB, so with the open-source [ArduinoJoystickLibrary](https://github.com/MHeironimus/ArduinoJoystickLibrary) (LGPL-3.0) your pots and switches present to the PC as a real HID joystick's axes and buttons. It supports the Leonardo, Micro, and any ATmega32u4 clone like a Pro Micro.

The trade is effort for control: you write and calibrate a sketch instead of just wiring pins, and the Leonardo gives you 12 analog inputs to the BU0836's 8. But at the low end of the price range (a Pro Micro clone is a few dollars) it's the cheapest custom-controller foundation in the bay. Pick it if you'd rather write a sketch than buy a finished part. Board prices move around, so **check current** before you order.

<aside class="gearpick">
  <a class="gp-shot" href="/marine/gear/arduino-leonardo-diy-hid"><span class="gp-tag">Code-it route</span><img src="/images/gear/marine/arduino-leonardo-diy-hid.jpg" alt="Arduino Leonardo (ATmega32u4 HID)" loading="lazy"></a>
  <div class="gp-body">
    <span class="gp-eyebrow">Native USB HID · programmable</span>
    <span class="gp-name"><a href="/marine/gear/arduino-leonardo-diy-hid">Arduino Leonardo (ATmega32u4 HID)</a></span>
    <p class="gp-why">The BU0836's flexible cousin. Its native USB and the open ArduinoJoystickLibrary make your pots and switches read as real axes and buttons — plus logic a fixed board can't do: software detents, button matrices, a combined helm and button box on one board. More work (you write the sketch) but full control, and the cheapest custom foundation in the bay via a Pro Micro clone.</p>
    <span class="gp-price">~$25 (check current)</span>
    <span class="gp-actions">
      <a class="gp-review" href="/marine/gear/arduino-leonardo-diy-hid">Spec card</a>

    </span>
  </div>
</aside>

## Which board should you buy? A quick decision tree

Three honest paths, depending on how you like to work:

1. **You don't want to solder, and you want it done tonight.** → **BU0836X** (~$77). Push-in terminals, no iron, no code. The most expensive of the three, but the fastest to a working helm.
2. **You're comfortable with a soldering iron and want to save money.** → **BU0836A** (~$42). Same axes, same 12-bit resolution, same no-code simplicity — you just solder the pots to pin headers. This is the board the official guide names.
3. **You want custom logic (detents, encoders, a combined panel) and don't mind coding.** → **Arduino Leonardo / Pro Micro** (~$25 and down). The cheapest and most flexible, but you write and debug a sketch.

For most first-time marine builders, the BU0836A is the sweet spot — the documented recipe, the lowest cost among the plug-and-wire boards, and no software to write. Reach for the BU0836X only if soldering is a dealbreaker, and the Arduino only if you specifically want the programmability. And if your build is going to grow a full switch panel — nav lights, horn, autopilot, anchor — plan the [digital button-box side of the bridge console](/marine/diy-marine-button-box-bridge-console) at the same time; it complements the axis board rather than replacing it.

## What this build is not

Be honest with yourself about the ceiling. This is a hobbyist DIY rig, not a [professional full-mission bridge](/marine/marine-sim-hardware-reality). There's no motion, no certified physics, no force feedback. It's also a genuine project — fabrication, wiring, and friction-tuning — not a plug-and-play afternoon for everyone. What you *do* get is real, position-holding levers and a true analog wheel axis feeding a sim designed to accept exactly that, for the price of a controller you'd otherwise buy off a shelf, except no such shelf exists.

<div class="callout warn">
  <div class="ct">// Before you build</div>
  <p>Three honest warnings. <strong>One:</strong> the Leo Bodnar boards ship from the UK, so budget for shipping cost and lead time (US makers can shortcut this via Ricmotech). <strong>Two:</strong> the friction step isn't optional polish — skip it and your throttles drift, full stop. <strong>Three:</strong> use <em>linear</em> pots (B-code), because a logarithmic pot will make your lever's physical center read nowhere near electrical center and every throttle setting will feel wrong.</p>
</div>

## The verdict

This is the build I point people to when they ask what's *genuinely* native to marine sim. For roughly **$30–$60** — a **BU0836** board, **three 10k linear pots**, an enclosure, and a length of string — you get a working ship's helm and twin throttles feeding the free, open-source sim that documented the build in the first place. Solder-averse? Spend the extra on the BU0836X. Want custom logic? Drop to an Arduino. Whichever board you pick, don't skip the string-friction step: it's the cheap, five-minute detail that turns three flopping potentiometers into engine controls that hold their setting like the real thing. Prices drift, so check current on the board and pots before you order — but the recipe itself hasn't changed, and it's still the best value in the entire bay.

## Sources Checked

Source review date: July 2, 2026. This build is verified against the official Bridge Command DIY documentation and each board against its manufacturer's current product page — rather than repeating third-hand parts lists.

Build guide + free sim: [Bridge Command — Make your own throttles and wheel](https://www.bridgecommand.co.uk/Doc/makethrottle.php) (the source for the three-10k-linear-pot recipe, the horn-button wiring, and the string-friction trick), [Bridge Command — Using external controls](https://www.bridgecommand.co.uk/Doc/joystick.php), and the [Bridge Command home page](https://www.bridgecommand.co.uk/) (free, open source).

Interface boards: [Leo Bodnar BU0836A joystick interface](https://www.leobodnar.com/shop/index.php?main_page=product_info&products_id=204) (12-bit, 8 analog axes, 32 buttons, pin headers — £33.00 as listed), [Leo Bodnar BU0836X joystick interface](https://www.leobodnar.com/shop/index.php?main_page=product_info&products_id=180) (same core spec, solderless push-in terminals — £59.99 as listed).

Code-it-yourself path: [ArduinoJoystickLibrary on GitHub](https://github.com/MHeironimus/ArduinoJoystickLibrary) (open source, LGPL-3.0; supports Leonardo, Micro, Pro Micro and ATmega32u4 clones as USB HID joysticks).

Prices and stock shift with supply and shipping; the figures above are approximate 2026 street/list prices and should be re-checked at the source before ordering.
