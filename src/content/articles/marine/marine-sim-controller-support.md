---
title: "Marine Sim Controller Support: Which Sims Actually Read Your Wheel and Throttle (2026)"
description: "A verified 2026 compatibility map for marine sim hardware: which titles read an analog wheel, throttle, and rudder — and which only see keyboard left/right — across Bridge Command, Sailaway, eSail, Seafarer, Fishing: Barents Sea, Ships At Sea, and the upcoming Professional Ship Simulator."
bay: "marine"
type: "comparison"
primaryKeyword: "marine sim controller support"
author: "Gus Calder"
publishDate: 2026-06-10
updatedDate: 2026-07-02
heroImage: "/images/gear/marine/professional-ship-simulator-context.jpg"
heroAlt: "Professional Ship Simulator (ex-Nautic XP) — the upcoming ship sim built around deep controller mapping"
excerpt: "The hard gate in marine sim isn't the hardware — it's whether the title reads analog axes at all. This is the 2026 compatibility map: who reads your wheel and throttle, who only sees left/right, and what glue software fills the gap."
featured: true
goldStatus: "certified"
goldCertifiedDate: 2026-07-02
sourceReviewDate: 2026-07-02
revenueTier: "B"
contentCluster: "marine"
readingTime: 9
faqs:
  - q: "Does eSail support steering wheels?"
    a: "Not natively. eSail's own developers state it has no direct support for steering wheels or joysticks — but you can enable a controller in Settings and the main steering and throttle axes usually work, treated like gamepad sticks with a center deadzone. There is no force feedback, and advanced mapping needs third-party software like AntiMicro or JoyToKey. Always check current build behavior before buying a wheel for it."
  - q: "Which marine sims read an analog throttle axis?"
    a: "It varies title by title and changes with updates, so verify the current build. As of this review, Bridge Command reads analog axes natively through its documented DIY build, Sailaway supports analog controllers and joysticks, and eSail reads main axes once the controller is enabled. Ships At Sea has drawn repeated community complaints about missing wheel and throttle support. When a title only reads keyboard-style input, an analog throttle lever is simply never polled — glue software like vJoy or JoyToKey is the workaround."
  - q: "Will Professional Ship Simulator support my throttle and button box?"
    a: "That's the plan, but treat the numbers as check-current until launch. Professional Ship Simulator (rebranded from Nautic XP, by SWE Systems / Aerosoft) is targeting Steam Early Access in 2026 and advertises a fully-interactive cockpit with 100+ mappable buttons and multiple control axes. It's the most hardware-friendly upcoming marine sim on paper, but it is not released yet, so confirm the final input spec before buying gear for it."
  - q: "Why does my analog throttle do nothing in some marine sims?"
    a: "Because those titles only read keyboard-style digital input. They never poll the throttle axis, so the lever is ignored entirely and a wheel collapses to a binary left/right. The fix is glue software — vJoy, JoyToKey, Xpadder, or AntiMicro — that converts the axis into the keystrokes or virtual-controller input the game accepts, at the cost of proportional control."
related:
  - "marine-sim-hardware-reality"
  - "racing-wheel-boat-helm"
  - "diy-bridge-command-throttle"
---

**Verdict first: in marine sim the gate is the software, not the hardware — buy the sim first, read its row, and only then buy gear the title will actually read.** The expensive mistake in this bay is plugging in a wheel and a throttle quadrant and discovering the game never polls the axes: your wheel collapses to left/right and your throttle lever does literally nothing. The hardware was never the problem. This is the 2026 compatibility map I wish existed when I started — which titles read your analog inputs, which only see keyboard-style presses, and what glue software bridges the gap.

One honesty note before we start. Two of the most-recommended pieces of gear in this bay — the **Logitech G29** racing wheel used as a helm and the **Saitek Pro Flight Throttle Quadrant** used as an engine telegraph — appear below as text and Amazon links, not photos, because I don't have a verified image of either in a marine context. Every product picture on this page is a unit I've actually verified. I'd rather flag the gap than show you a stock shot pretending to be something it isn't.

<div class="shotgrid">
  <figure><a href="/marine/gear/bridge-command-free-sim"><img src="/images/gear/marine/bridge-command-free-sim.jpg" alt="Bridge Command (free open-source ship sim)" loading="lazy"></a><figcaption>Bridge Command — native, documents its own hardware</figcaption></figure>
  <figure><a href="/marine/gear/professional-ship-simulator-context"><img src="/images/gear/marine/professional-ship-simulator-context.jpg" alt="Professional Ship Simulator (ex-Nautic XP)" loading="lazy"></a><figcaption>Professional Ship Simulator — the one to watch</figcaption></figure>
  <figure><a href="/marine/gear/thrustmaster-twcs-throttle-engine-lever"><img src="/images/gear/marine/thrustmaster-twcs-throttle-engine-lever.jpg" alt="Thrustmaster TWCS Throttle (as engine lever)" loading="lazy"></a><figcaption>TWCS throttle — needs an analog-aware title</figcaption></figure>
  <figure><a href="/marine/gear/thrustmaster-t16000m-rudder"><img src="/images/gear/marine/thrustmaster-t16000m-rudder.jpg" alt="Thrustmaster T.16000M FCS (as rudder)" loading="lazy"></a><figcaption>T.16000M — a rudder axis for sims that expose one</figcaption></figure>
</div>

## The one rule that explains everything

Marine titles fall into two camps on input. Some have proper **analog-axis support**, so a wheel steers proportionally and a throttle lever reads continuously. Others only accept **digital, keyboard-style input**, so any analog signal collapses: a wheel becomes a binary left/right, and an analog throttle axis is simply never polled. For a given input there is no in-between — either the game reads the axis or it doesn't.

That single distinction decides whether your gear works. Everything below is just applying it title by title. And because these are mostly small-studio and Early Access titles, the answers *move* — a wheel that "magically works" today does so because the game auto-detects it as an Xbox controller, not because the developer built wheel support. So treat every row as "verify on the current build," and check the store page and recent patch notes before you spend.

## The 2026 compatibility map

| Sim | Analog axis support | Force feedback | Native controller support | How to make hardware work |
|---|---|---|---|---|
| **Bridge Command** | Yes — documented DIY build | No | Yes, designed for it | Native; wire DIY pots/wheel axes straight to a BU0836 board |
| **Sailaway** | Yes — analog controllers + joysticks | No | Yes (joypad support added) | Native controller/joystick; x360ce or reWASD for unsupported devices |
| **eSail** | Partial — main axes work once enabled | No (dev-confirmed) | No direct wheel/joystick support | Enable controller in Settings; AntiMicro/JoyToKey for advanced mapping |
| **Seafarer: The Ship Sim** (EA) | Only if wheel emulates an Xbox pad | No | Unofficial — not tested by dev | Works only if the wheel is auto-detected as a gamepad; else glue software |
| **Fishing: Barents Sea** | Limited — historically gamepad-first | No | Limited (Xbox-style) | Verify current build; remap via JoyToKey/x360ce for wheels and throttles |
| **Ships At Sea** | No wheel/joystick support reported | No | Community-requested, unresolved | No native wheel/throttle support per players; glue software only, verify current |
| **Professional Ship Simulator** (EA 2026) | Advertised — multiple control axes | Not stated | Planned — 100+ mappable buttons | Native mapping promised; **verify final spec at launch** |

A few things jump out of that table, and they are the whole point.

**Force feedback is dead across the board.** Not a single mainstream marine title meaningfully supports FFB — eSail's developers say so in plain text ("We do not support force feedback"). This is why, as I argue in [the racing-wheel-as-helm guide](/marine/racing-wheel-boat-helm), you should buy a **Logitech G29** over the pricier **G923**: the G923's TrueForce is wasted on water. Do not pay for force feedback you will never feel.

**Bridge Command is the gold standard for builders.** It is the only title that *documents its own hardware* — an official "make your own throttles and wheel" guide built around a Leo Bodnar BU0836 board and three 10k linear potentiometers — which is exactly why it is the [flagship DIY build target](/marine/diy-bridge-command-throttle). When a sim publishes the build, analog axis support is a given.

<aside class="gearpick">
  <a class="gp-shot" href="/marine/gear/bridge-command-free-sim"><span class="gp-tag">Native, today</span><img src="/images/gear/marine/bridge-command-free-sim.jpg" alt="Bridge Command (free open-source ship sim)" loading="lazy"></a>
  <div class="gp-body">
    <span class="gp-eyebrow">Free ship sim · documents its own hardware</span>
    <span class="gp-name"><a href="/marine/gear/bridge-command-free-sim">Bridge Command (free open-source ship sim)</a></span>
    <p class="gp-why">The only title that ends the analog-axis argument before it starts, because it ships the build guide for the very hardware it reads — three 10k pots and a BU0836 board become a working wheel and twin throttles. Free, open-source, ship-handling focused. If you're buying or building a DIY board, this is the sim it was designed around.</p>
    <span class="gp-price">Free</span>
    <span class="gp-actions">
      <a class="gp-review" href="/marine/gear/bridge-command-free-sim">Spec card</a>
      <a class="gp-buy" href="https://www.bridgecommand.co.uk/" target="_blank" rel="noopener">Download at Bridge Command ↗</a>
    </span>
  </div>
</aside>

**Sailaway is the friendliest commercial option.** It added joypad support years ago, reads analog controllers and joysticks, and the community routinely runs Xbox pads, Logitech sticks, and — via **x360ce** or **reWASD** — wheels that aren't natively recognized. Analog steering works; force feedback still doesn't.

**eSail is "partial," and honest about it.** The developers state plainly that eSail "does not have direct support for controllers such as steering wheels or joysticks, but it is still possible to use them with great results." Enable the controller in Settings and the main steering and throttle axes usually work — but the wheel behaves like a gamepad stick with a center deadzone, it isn't tied to the on-screen wheel, and there is no force feedback. For anything past the basic axes, the developers themselves point you at remapping software like **AntiMicro**.

**Professional Ship Simulator is the one to watch — with an asterisk.** Rebranded from Nautic XP and developed by SWE Systems (published by Aerosoft), it targets Steam Early Access in **2026** and advertises a fully-interactive cockpit with **100+ mappable buttons** and multiple control axes. In a bay where most sims ignore half your hardware, a developer explicitly designing around deep mapping is the most hardware-friendly signal in years. But it is not released, the store page doesn't yet spell out the exact axis count, and earlier Nautic XP marketing quoted a "9-axis" figure I could not re-verify on the current page — so treat the input spec as *check current* until launch.

<aside class="gearpick">
  <a class="gp-shot" href="/marine/gear/professional-ship-simulator-context"><span class="gp-tag">One to watch · verify at launch</span><img src="/images/gear/marine/professional-ship-simulator-context.jpg" alt="Professional Ship Simulator (ex-Nautic XP)" loading="lazy"></a>
  <div class="gp-body">
    <span class="gp-eyebrow">Upcoming ship sim · deep controller mapping</span>
    <span class="gp-name"><a href="/marine/gear/professional-ship-simulator-context">Professional Ship Simulator (ex-Nautic XP)</a></span>
    <p class="gp-why">The first mainstream marine title built to read a builder's rig as a first-class citizen — a fully-interactive cockpit with 100+ mappable buttons and multiple control axes. Steam Early Access targeted for 2026 (EA planned to wrap mid-2027). Treat the spec as a promise to verify, but it's the most hardware-friendly signal the niche has had.</p>
    <span class="gp-price">Price TBD · wishlist on Steam</span>
    <span class="gp-actions">
      <a class="gp-review" href="/marine/gear/professional-ship-simulator-context">Spec card</a>
      <a class="gp-buy" href="https://store.steampowered.com/app/3636930/Professional_Ship_Simulator/" target="_blank" rel="noopener">Find on Steam ↗</a>
    </span>
  </div>
</aside>

**The middle of the table is where money gets wasted.** Seafarer, Fishing: Barents Sea, and Ships At Sea all land in "unofficial," "limited," or "unresolved." Seafarer's developers say plainly they "don't actively support any steering wheel and haven't tested the game on any" — some wheels work only because the game auto-detects them as an Xbox pad. Ships At Sea has drawn repeated forum complaints that a ship sim ships without wheel or joystick support. For these titles, glue software is not optional.

## The glue-software layer

When a title falls short of full native support, you bridge the gap with input-translation software. These tools sit between your hardware and the sim, converting axes and buttons into whatever input the game will actually accept:

- **vJoy** — creates a virtual joystick device; the backbone for feeding combined or remapped axes into a sim.
- **JoyToKey** — maps controller inputs to keystrokes, ideal when a sim only reads keyboard input.
- **AntiMicro** — the free remapper eSail's own developers recommend; maps controller inputs to keyboard/mouse.
- **x360ce** — emulates an Xbox controller, useful when a sim (like Sailaway or Fishing: Barents Sea) recognizes a gamepad but not your specific device.
- **reWASD / Xpadder** — flexible keystroke-and-profile mappers popular for older or half-supported titles.

For a title in the "partial" column, the workflow is usually: enable the controller natively, see what works, then layer **AntiMicro**, **JoyToKey**, or **x360ce** on top to remap the inputs the game ignored. For a keyboard-only title, you go straight to **JoyToKey** to turn your analog wheel into left/right keystrokes — accepting that you lose proportional steering in the process.

<div class="callout forum">
  <div class="ct">// From the forums</div>
  <p>The most expensive lesson in this bay gets posted weekly: someone buys a wheel and a quadrant, the wheel only goes hard-left or hard-right, the throttle does nothing, and they assume the gear is broken. It isn't. The title just doesn't poll analog axes — or it only recognizes the wheel because it looks like an Xbox pad. Read the row before you read the return policy.</p>
</div>

## The glue candidates worth owning

Two verified pieces of hardware earn their keep specifically *because* they play well with the glue-software layer and with the analog-aware titles above.

If you run single-screw vessels and want one smooth, high-resolution engine lever, the **Thrustmaster TWCS** is the step up from a flight quadrant. Its 80 mm slide-rail throttle uses a genuine 16-bit axis — far smoother than a potentiometer lever — plus a rotary and toggle rudder you can map to thruster or trim duty. It only does anything in an analog-aware title, and twin-screw ships still need a second axis, but for a clean primary throttle it's the nicest feel short of a DIY build.

<aside class="gearpick">
  <a class="gp-shot" href="/marine/gear/thrustmaster-twcs-throttle-engine-lever"><span class="gp-tag">Smooth engine lever</span><img src="/images/gear/marine/thrustmaster-twcs-throttle-engine-lever.jpg" alt="Thrustmaster TWCS Throttle (as engine lever)" loading="lazy"></a>
  <div class="gp-body">
    <span class="gp-eyebrow">Flight throttle · 16-bit slide rail</span>
    <span class="gp-name"><a href="/marine/gear/thrustmaster-twcs-throttle-engine-lever">Thrustmaster TWCS Throttle (as engine lever)</a></span>
    <p class="gp-why">A flight throttle drafted as a ship's main engine lever. The 80 mm slide-rail is genuinely smooth and high-resolution — the nicest single-throttle feel short of a DIY build. One axis, so twin-screw ships need a quadrant alongside it. Analog-aware sims only; verify the title reads a throttle axis first.</p>
    <span class="gp-price">~$130 (check current)</span>
    <span class="gp-actions">
      <a class="gp-review" href="/marine/gear/thrustmaster-twcs-throttle-engine-lever">Spec card</a>

    </span>
  </div>
</aside>

For sims that expose a true **rudder axis** rather than a wheel, a flight stick's twist axis is the natural mapping. The **Thrustmaster T.16000M** uses contactless Hall-effect sensors, so the rudder axis stays precise and won't drift over years — a real edge over potentiometer sticks. A vertical stick is an odd hand position for steering, and it only fits rudder-axis titles, but it's the durable, cheap way to add a proper rudder to a rig.

<aside class="gearpick">
  <a class="gp-shot" href="/marine/gear/thrustmaster-t16000m-rudder"><span class="gp-tag">Rudder axis</span><img src="/images/gear/marine/thrustmaster-t16000m-rudder.jpg" alt="Thrustmaster T.16000M FCS (as rudder)" loading="lazy"></a>
  <div class="gp-body">
    <span class="gp-eyebrow">Flight stick · Hall-effect twist</span>
    <span class="gp-name"><a href="/marine/gear/thrustmaster-t16000m-rudder">Thrustmaster T.16000M FCS (as rudder)</a></span>
    <p class="gp-why">A flight stick repurposed as a rudder — its twist axis maps cleanly to rudder in titles that expose one. Hall-effect sensors mean it won't develop the drift that kills cheap sticks. Only for rudder-axis sims, not wheel-steered ones.</p>
    <span class="gp-price">~$80 (check current)</span>
    <span class="gp-actions">
      <a class="gp-review" href="/marine/gear/thrustmaster-t16000m-rudder">Spec card</a>

    </span>
  </div>
</aside>

## The buttons don't have the analog problem

Here's a quiet upside of the analog gate: it only applies to *axes*. Buttons, switches, and encoders are digital, so a bridge panel maps cleanly in almost any title — bind nav lights, horn, autopilot, anchor, and engine commands and they just work, no glue software required. That makes a button box the safest first purchase in a marine rig, because it's the one thing the compatibility table above can't ruin.

The no-DIY route is a **PXN CB1**: a finished, plug-and-play panel with 19 controls and up to 30 programmable functions over driver-free USB-C. It's marketed for racing and truck sims, so you map its buttons to your marine title, and being all-digital it complements a throttle or wheel rather than replacing one.

<aside class="gearpick">
  <a class="gp-shot" href="/marine/gear/pxn-cb1-button-box"><span class="gp-tag">Ready-made panel</span><img src="/images/gear/marine/pxn-cb1-button-box.jpg" alt="PXN CB1 Sim Control Button Box" loading="lazy"></a>
  <div class="gp-body">
    <span class="gp-eyebrow">19 controls · 30 functions · all-digital</span>
    <span class="gp-name"><a href="/marine/gear/pxn-cb1-button-box">PXN CB1 Sim Control Button Box</a></span>
    <p class="gp-why">A finished bridge-command panel for builders who don't want to fabricate a board. Nineteen controls, 30 programmable functions, driver-free USB-C. All-digital — so it dodges the analog-axis gate entirely and maps cleanly in nearly any marine title. Pair it with a throttle or wheel for the axes it doesn't provide.</p>
    <span class="gp-price">~$80 (check current)</span>
    <span class="gp-actions">
      <a class="gp-review" href="/marine/gear/pxn-cb1-button-box">Spec card</a>

    </span>
  </div>
</aside>

If you're building rather than buying, the digital-only **Leo Bodnar BBI-32** is the switch-side companion board. Solderless push-in terminals take 32 switches or up to 16 encoders (chainable to 132 inputs), so it handles a full bridge panel while a BU0836 handles the axes — the exact split the Bridge Command recipe uses.

<aside class="gearpick">
  <a class="gp-shot" href="/marine/gear/leobodnar-bbi-32-button-box-interface"><span class="gp-tag">DIY bridge switch panel</span><img src="/images/gear/marine/leobodnar-bbi-32-button-box-interface.jpg" alt="Leo Bodnar BBI-32 Button Box Interface" loading="lazy"></a>
  <div class="gp-body">
    <span class="gp-eyebrow">Digital-only · 32 inputs, no solder</span>
    <span class="gp-name"><a href="/marine/gear/leobodnar-bbi-32-button-box-interface">Leo Bodnar BBI-32 Button Box Interface</a></span>
    <p class="gp-why">The solderless digital workhorse for a bridge console's switches, knobs and encoders. Push-in terminals, 32 inputs (chainable to 132), plug-and-play HID. No analog axes, so it complements a BU0836 rather than replacing it — and because it's all digital, it maps in almost any title.</p>
    <span class="gp-price">~$53 (check current)</span>
    <span class="gp-actions">
      <a class="gp-review" href="/marine/gear/leobodnar-bbi-32-button-box-interface">Spec card</a>
      <a class="gp-buy" href="https://www.leobodnar.com/shop/index.php?main_page=product_info&products_id=204" target="_blank" rel="noopener">Buy at Leo Bodnar ↗</a>
    </span>
  </div>
</aside>

## The DIY board sidesteps the whole debate

The cleanest way to guarantee a title reads your gear is to make your hardware *look like a standard controller* to the OS before the sim ever sees it. That's what a DIY interface board does — and it's why Bridge Command's build is the reference. A **Leo Bodnar BU0836X** presents pots and switches as a plain HID joystick with 8 analog axes and 32 buttons, solderless, driver-free. Wire the Bridge Command recipe (two throttle pots, a wheel pot, a horn button) and every analog-aware title reads it as native axes; for keyboard-only titles you still layer glue software, but you're starting from a device Windows already trusts.

<aside class="gearpick">
  <a class="gp-shot" href="/marine/gear/leobodnar-bu0836x-diy-board"><span class="gp-tag">DIY helm board (no solder)</span><img src="/images/gear/marine/leobodnar-bu0836x-diy-board.jpg" alt="Leo Bodnar BU0836X Joystick Interface (push-in connectors)" loading="lazy"></a>
  <div class="gp-body">
    <span class="gp-eyebrow">8 analog axes · solderless</span>
    <span class="gp-name"><a href="/marine/gear/leobodnar-bu0836x-diy-board">Leo Bodnar BU0836X Joystick Interface</a></span>
    <p class="gp-why">The proven Leo Bodnar board behind most DIY ship-helm builds, in its solderless push-in version. Eight analog axes plus 32 buttons cover twin throttles, wheel, thruster and a panel on one board — the whole Bridge Command recipe without a soldering iron, and it presents as a native controller the sim already trusts. Ships from the UK.</p>
    <span class="gp-price">~$77 (check current)</span>
    <span class="gp-actions">
      <a class="gp-review" href="/marine/gear/leobodnar-bu0836x-diy-board">Spec card</a>
      <a class="gp-buy" href="https://www.leobodnar.com/shop/index.php?main_page=product_info&products_id=214" target="_blank" rel="noopener">Buy at Leo Bodnar ↗</a>
    </span>
  </div>
</aside>

If you'd rather code your own logic — software detents, button matrices, a combined helm-plus-button-box on one cheap board — the **Arduino Leonardo** presents as a real HID joystick via the open ArduinoJoystickLibrary. More effort than the no-code Bodnar board, but full control, and the cheapest custom-controller foundation in the bay.

<aside class="gearpick">
  <a class="gp-shot" href="/marine/gear/arduino-leonardo-diy-hid"><span class="gp-tag">Code-it-yourself helm</span><img src="/images/gear/marine/arduino-leonardo-diy-hid.jpg" alt="Arduino Leonardo (ATmega32u4 HID)" loading="lazy"></a>
  <div class="gp-body">
    <span class="gp-eyebrow">Native USB HID · budget board</span>
    <span class="gp-name"><a href="/marine/gear/arduino-leonardo-diy-hid">Arduino Leonardo (ATmega32u4 HID)</a></span>
    <p class="gp-why">The programmable DIY route. Its native USB and the open ArduinoJoystickLibrary make your pots and switches read as real axes and buttons — with logic a fixed board can't do. Cheapest custom foundation in the bay, but you write the sketch and build every bit of hardware.</p>
    <span class="gp-price">~$25 (check current)</span>
    <span class="gp-actions">
      <a class="gp-review" href="/marine/gear/arduino-leonardo-diy-hid">Spec card</a>

    </span>
  </div>
</aside>

<div class="callout tip">
  <div class="ct">// Pro tip</div>
  <p>Treat the sim's store page and recent patch notes as a hardware spec sheet. If "controller support" or analog-axis input isn't explicitly listed, assume keyboard-only and budget an evening of glue software — or skip the wheel. And re-check before you buy: these are mostly Early Access titles, so a "no wheel support" thread from 2024 may be stale, and a wheel that "works" may only be piggybacking on gamepad detection.</p>
</div>

## Two escape hatches from the analog gate

If the compatibility table is more hassle than your title is worth, two verified options sidestep it entirely.

**VR skips the helm problem.** On a **Meta Quest 3** running MarineVerse Sailing Club, you "hold" the tiller and sheet with hand-tracked controllers — no wheel, no throttle, no analog-axis caveat, because there's no peripheral to be read. It's sailing-only (dinghies, yachts, catamarans), not ship-handling, and it leans entirely on the MarineVerse app, but the NauticEd course integration teaches genuine skills. The cheaper Quest 3S runs the same software.

<aside class="gearpick">
  <a class="gp-shot" href="/marine/gear/meta-quest-3-marineverse-vr"><span class="gp-tag">No helm needed</span><img src="/images/gear/marine/meta-quest-3-marineverse-vr.jpg" alt="Meta Quest 3 (MarineVerse VR sailing)" loading="lazy"></a>
  <div class="gp-body">
    <span class="gp-eyebrow">VR sailing · hand-tracked</span>
    <span class="gp-name"><a href="/marine/gear/meta-quest-3-marineverse-vr">Meta Quest 3 (MarineVerse VR sailing)</a></span>
    <p class="gp-why">The one path that skips the whole controller-compatibility problem: hand-tracked controllers become the tiller and sheet, so the headset is the only gear and there's no analog axis to be ignored. Sailing-only, and it leans entirely on MarineVerse — but the NauticEd course integration teaches genuine skills.</p>
    <span class="gp-price">~$499 (Quest 3S from ~$329, check current)</span>
    <span class="gp-actions">
      <a class="gp-review" href="/marine/gear/meta-quest-3-marineverse-vr">Spec card</a>

    </span>
  </div>
</aside>

**A crossover controller with its own software layer.** The train-sim **RailDriver** desk unit has chunky throttle, reverser, and brake levers that suit slow marine engine work, plus 34 programmable buttons. It needs third-party mapping (vJoy/JoyToKey) to talk to marine titles and, like everything here, only helps in analog-aware sims — but for lever-feel obsessives it's a genuine, if pricey, repurpose.

<aside class="gearpick">
  <a class="gp-shot" href="/marine/gear/raildriver-ship-throttle"><span class="gp-tag">Crossover lever feel</span><img src="/images/gear/marine/raildriver-ship-throttle.jpg" alt="RailDriver Desktop Train Cab Controller (as ship throttle)" loading="lazy"></a>
  <div class="gp-body">
    <span class="gp-eyebrow">Train controller · 34 buttons + levers</span>
    <span class="gp-name"><a href="/marine/gear/raildriver-ship-throttle">RailDriver Desktop Cab Controller (as ship throttle)</a></span>
    <p class="gp-why">A train-cab controller carried over to ship sims for its long, deliberate lever feel — better than a flight quadrant for slow engine moves. Pricey for a repurpose and it needs mapping software (vJoy/JoyToKey), so it's for lever-feel obsessives, not the value buyer.</p>
    <span class="gp-price">~$220 (check current)</span>
    <span class="gp-actions">
      <a class="gp-review" href="/marine/gear/raildriver-ship-throttle">Spec card</a>
      <a class="gp-buy" href="https://raildriver.com/" target="_blank" rel="noopener">Buy at RailDriver ↗</a>
    </span>
  </div>
</aside>

## The wheel and throttle you're checking support for (text-only, honestly)

The two most-recommended axis controllers in this bay are a repurposed racing wheel as a helm and a flight throttle quadrant as an engine telegraph. I don't have a verified marine-context photo of either, so they're links, not pictures.

- **Logitech G29 (as helm)** — the community default helm stand-in, a 900-degree racing wheel with a leather rim that reads as a ship's wheel and floods the secondhand market. Its analog steering only matters if your title reads an analog axis, and its force feedback is unused on water. Buy the G29 over the G923 and pocket the FFB premium. verify current pricing through a direct product listing.
- **Saitek Pro Flight Throttle Quadrant (as engine telegraph)** — the best value in the bay, dollar for dollar: three analog levers map to port throttle, starboard throttle, and bow thruster, and the quadrants daisy-chain. The levers sit dead in any sim that won't read an analog throttle axis, so verify first. verify current pricing through a direct product listing.

## How to use this map before you buy

The order matters. Pick your *sim* first, find its row, then buy hardware the row says will actually be read.

1. **Choose the title you actually want to play**, and read its row above.
2. **Confirm the current build** on the store page and recent patch notes — these are moving targets, especially the Early Access titles.
3. **Native analog support** (Bridge Command, Sailaway, likely Professional Ship Simulator) means buy axis gear with confidence. **"Partial"** (eSail) means budget an evening for glue software. **"Unofficial/unresolved"** (Seafarer, Ships At Sea, Fishing: Barents Sea) means lean on a button box and glue software, and don't spend big on a wheel until you've tested it.
4. **Skip any force-feedback premium** — no title uses it.
5. **Start with a button box** — it dodges the analog gate entirely and works in nearly everything.

If you're still deciding on a full setup rather than a single title, the [marine sim hardware reality check](/marine/marine-sim-hardware-reality) lays out the repurposing map, and the [Rig Configurator](/racing/configurator) helps you plan a wheel-and-throttle base you can share across racing, flight, and marine.

## The verdict

The compatibility gate, not the gear, is what decides whether you're happy. Buy the sim first, check its current-build row, and only then buy hardware the title will read. Lean toward **Bridge Command** for a documented, native build today, **Sailaway** for the friendliest commercial option, and keep an eye on **Professional Ship Simulator** for tomorrow — while verifying its final input spec at launch. Start any rig with a **button box**, because digital inputs dodge the analog gate. For everything in between, treat **vJoy**, **JoyToKey**, **AntiMicro**, and **x360ce** as required parts of the kit — and never, ever pay extra for force feedback in a bay that has none.

## Sources Checked

Source review date: July 2, 2026. Because marine sim controller support shifts with patches and Early Access updates, we verified each title against its store page, developer statements, or community threads current as of this date — and flagged anything we could not re-confirm as "check current" in the body rather than asserting it.

Sim compatibility + developer statements: [eSail Sailing Simulator on Steam](https://store.steampowered.com/app/794860/eSail_Sailing_Simulator/), [eSail hardware tips (developer guide)](https://steamcommunity.com/sharedfiles/filedetails/?id=1410493788), [eSail official support](https://www.esailyachtsimulator.com/support/), [Sailaway controller-support update (developer)](https://www.sailawaysimulator.com/2017/11/23/sailaway-update-v-0-9-027-hot-keys-plus-controller-support/), [Seafarer: The Ship Sim — steering-wheel thread](https://steamcommunity.com/app/2582140/discussions/0/599665891567905955/), [Ships At Sea — wheel & joystick support thread](https://steamcommunity.com/app/1266540/discussions/0/4337609541991526037/), [Fishing: Barents Sea — controller thread](https://steamcommunity.com/app/501080/discussions/0/1736588252397611126/).

DIY + native reference: [Bridge Command (free, open source)](https://www.bridgecommand.co.uk/), [Bridge Command — make your own throttles and wheel](https://www.bridgecommand.co.uk/Doc/makethrottle.php), [Leo Bodnar BU0836X interface](https://www.leobodnar.com/shop/index.php?main_page=product_info&products_id=214), [Leo Bodnar BBI-32](https://www.leobodnar.com/shop/index.php?main_page=product_info&products_id=204), [ArduinoJoystickLibrary](https://github.com/MHeironimus/ArduinoJoystickLibrary).

Upcoming title: [Professional Ship Simulator on Steam (ex-Nautic XP)](https://store.steampowered.com/app/3636930/Professional_Ship_Simulator/), [Professional Ship Simulator rename announcement](https://store.steampowered.com/news/app/3636930/view/501729087458378961).

Glue software (paraphrased in our voice): [vJoy](https://sourceforge.net/projects/vjoystick/), [JoyToKey](https://joytokey.net/en/), [reWASD — Sailaway support](https://www.rewasd.com/community/games/sailaway-controller-support), and the x360ce Xbox-controller emulator.
