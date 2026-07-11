---
title: "Helicopter Flight Sim Controls for MSFS 2024: Collective, Cyclic and Anti-Torque Pedals"
description: "Set up helicopter controls in MSFS 2024 the right way: cyclic, collective and anti-torque pedals explained, the exact bindings, and a budget-to-dedicated hardware ladder from a $200 repurposed HOTAS to a $1,500 Komodo rig."
bay: "flight"
type: "buying-guide"
primaryKeyword: "helicopter flight sim controls MSFS 2024"
author: "Mac Donovan"
publishDate: 2026-06-13
updatedDate: 2026-07-02
heroImage: "/images/gear/flight/thrustmaster-tca-quadrant-airbus.jpg"
heroAlt: "Thrustmaster TCA Quadrant Airbus Edition — the community's favorite collective substitute for helicopter sim in MSFS 2024"
excerpt: "MSFS 2024 made helicopters first-class, and a yoke is useless for them. Here is the honest hardware ladder — cyclic, collective and the anti-torque pedals you cannot skip — plus the exact MSFS 2024 bindings, from a $200 repurposed HOTAS to a $1,500 dedicated rig."
featured: false
goldStatus: "refresh"
sourceReviewDate: 2026-07-02
revenueTier: "B"
contentCluster: "flight"
readingTime: 11
faqs:
  - q: "What hardware do I need to fly helicopters in MSFS 2024?"
    a: "Three controls: a cyclic (a precise, center-sprung joystick for pitch and roll), a collective (best served by a throttle lever you can leave parked at any position, since it must not self-center), and rudder pedals for the anti-torque axis. A center-sprung stick plus a throttle quadrant lever plus pedals is the minimum that flies the default R66, Bell 407, H125 and Cabri G2 properly. A dedicated cyclic-and-collective from a maker like Komodo Simulations is the upgrade, not the starting point."
  - q: "Can I use a HOTAS for helicopters?"
    a: "Yes, and it is the smartest budget path. A HOTAS stick makes a good cyclic, and its throttle lever works as a collective if you add friction so it stays parked where you leave it. The Logitech G X56 (~$249.99) is popular because its twin throttles unlock and sit to your left where a collective lives. You still need separate rudder pedals — the built-in twist rudder will not carry you far."
  - q: "Do I need rudder pedals for helicopters?"
    a: "More than for fixed-wing — close to mandatory. Helicopter flying is constant anti-torque work: every collective change, turn and gust needs a pedal correction to keep the nose straight. A twist-rudder on a stick technically works but fatigues your wrist fast and lacks the precision a hover needs. Budget entries like the Logitech G Flight Rudder Pedals (~$180) or Thrustmaster TFRP are the honest floor; the Honeycomb Charlie (~$270) is the metal, Hall-effect step up."
  - q: "Why does my helicopter collective work backwards in MSFS 2024?"
    a: "Throttle axes default to idle-at-bottom, but a collective should add power as you pull it up. In Controls, assign your lever to COLLECTIVE AXIS (under Power Management) — not the throttle — and tick Reverse so raising the lever increases collective pitch. This is the single most common helicopter binding mistake, and it is one checkbox to fix."
  - q: "What is the difference between the collective axis and the helicopter throttle axis in MSFS 2024?"
    a: "They are two different bindings and mixing them up is the most-reported helicopter setup headache. COLLECTIVE AXIS is your up/down power lever. SET HELICOPTER THROTTLE 1 AXIS is the twist-grip governor on aircraft like the R66 or Cabri G2 that manage rotor RPM separately. If your throttle lever accidentally lands on the helicopter-throttle binding, the collective feels dead — assign the lever to COLLECTIVE AXIS and leave the helicopter throttle to a separate twist axis or on auto-governor."
  - q: "Is a dedicated cyclic and collective worth it?"
    a: "Only if helicopters are your main sim. A repurposed HOTAS plus a throttle lever plus pedals (~$200-400) flies the entire MSFS 2024 rotorcraft roster well. Dedicated gear from makers like Komodo Simulations adds an authentic weighted lever, twist-grip throttle and real friction, but it is a hand-built, several-hundred-dollar specialist piece — overkill for anyone who flies rotary occasionally."
related:
  - "best-hotas-msfs-2024"
  - "best-flight-sim-rudder-pedals"
  - "best-flight-sim-setup-beginners"
---

Verdict first: **you cannot fly a helicopter with a yoke, and you do not need to spend a fortune to fly one well.** The winning setup for almost everyone is a precise center-sprung **stick as the cyclic**, a **throttle-quadrant lever as the collective** (with friction, so it stays where you leave it), and **dedicated rudder pedals** for the anti-torque axis — roughly **$200-400** all in. That flies the default Robinson R66, Bell 407, Airbus H125 and Guimbal Cabri G2 correctly, and the pedals carry straight over to your fixed-wing flying. Dedicated Komodo gear is wonderful and completely optional; buy it only when rotary flying is the whole point of your sim.

MSFS 2024 did what its predecessor never properly did: it made helicopters a first-class part of the sim, with a flight model that punishes sloppy hands and rewards a settled hover. The first thing every fixed-wing simmer learns is that a gorgeous [Honeycomb yoke](/flight/gear/honeycomb-alpha-yoke) is *useless* here. A helicopter has no yoke. It has three controls — cyclic, collective and anti-torque pedals — that you work simultaneously, all the time, in a constant balancing act. Get the hardware mapping right and a twitchy, unflyable helicopter usually becomes controllable in the same session.

<div class="shotgrid">
  <figure><a href="/flight/gear/thrustmaster-tca-sidestick-airbus"><img src="/images/gear/flight/thrustmaster-tca-sidestick-airbus.jpg" alt="Thrustmaster TCA Sidestick Airbus Edition used as a helicopter cyclic" loading="lazy"></a><figcaption>Cyclic — a precise center-sprung stick</figcaption></figure>
  <figure><a href="/flight/gear/thrustmaster-tca-quadrant-airbus"><img src="/images/gear/flight/thrustmaster-tca-quadrant-airbus.jpg" alt="Thrustmaster TCA Quadrant Airbus Edition used as a helicopter collective" loading="lazy"></a><figcaption>Collective — a throttle lever that stays parked</figcaption></figure>
  <figure><a href="/flight/gear/honeycomb-charlie-pedals"><img src="/images/gear/flight/honeycomb-charlie-pedals.jpg" alt="Honeycomb Aeronautical Charlie Rudder Pedals for the anti-torque axis" loading="lazy"></a><figcaption>Pedals — the anti-torque axis you can't skip</figcaption></figure>
  <figure><a href="/flight/gear/moza-mtq-throttle-quadrant"><img src="/images/gear/flight/moza-mtq-throttle-quadrant.jpg" alt="MOZA MTQ Throttle Quadrant as a modular collective lever" loading="lazy"></a><figcaption>MTQ — a modular collective alternative</figcaption></figure>
</div>

## The three controls, and what each one does

Before you spend a dime, understand the three controls and how sim hardware maps to them. Every helicopter uses the same trio.

- **Cyclic** — the stick between your knees. It tilts the rotor disc, moving the helicopter forward, back, left and right. In sim terms it is your **pitch and roll axes**, exactly like a joystick. The key requirement is a precise, low-drift center, because hover is a game of tiny corrections and the smallest wander shows up instantly.
- **Collective** — the lever by your left hip that you pull up to climb and push down to descend. It changes the pitch of all rotor blades at once, i.e. **total lift and power**. The one hard requirement: it must *stay where you leave it* — no self-centering spring. A throttle-quadrant lever with friction is perfect; a spring-loaded self-centering throttle is not.
- **Anti-torque pedals** — the pedals that counter the tail rotor and point the nose. They are your **yaw axis**, and in a helicopter you are on them *constantly*, far more than in any fixed-wing aircraft.

That third point is the one that sinks beginners. Every power change on the collective twists the airframe, and the pedals are how you cancel it. You cannot fake this with a twist-rudder for long — your wrist gives out and the precision simply isn't there.

## The honest hardware ladder

| Tier | Cyclic | Collective | Pedals | Approx. total | Best for |
|---|---|---|---|---|---|
| Make-do | Center-sprung stick you own | Throttle lever (add friction) | Twist-rudder (temporary) | ~$120-180 | Trying helicopters |
| Budget proper | **Thrustmaster T.16000M** (~$80) or similar Hall-effect stick | Throttle-quadrant lever | **Rudder pedals** (~$180) | ~$300-400 | Most rotary simmers |
| HOTAS combo | **Logitech G X56** stick (~$250) | X56 twin throttle as collective | Separate pedals | ~$400-500 | One-box convenience |
| Dedicated | Komodo replica cyclic grip | Komodo weighted collective w/ twist throttle | **Pendular pedals (TPR ~$600)** | ~$1,200-1,800 | Helicopters as your main sim |

Prices are mid-2026 street estimates and move with sales; treat them as "around" and **check current** before you buy.

### Make-do — fly helicopters tonight with what you own

If you already have a center-sprung joystick and any throttle lever, you can fly helicopters right now. Use the stick as the cyclic, assign a throttle lever to the collective, and limp along on a twist-rudder until you commit. It works well enough to learn whether you even *like* rotary flying before spending money. The twist-rudder is the weak link — it will frustrate you within an hour of hover practice, for reasons we'll get to.

### Budget proper — the setup most people should buy

The sweet spot is a **precise Hall-effect stick** as the cyclic, a **throttle-quadrant lever** as the collective, and **dedicated rudder pedals**. The [Thrustmaster T.16000M](/flight/gear/thrustmaster-tca-sidestick-airbus) (~$79.99) is the classic budget cyclic because its H.E.A.R.T magnetic sensors hold center without drift — and a settled hover lives or dies on that center. Add a throttle-quadrant lever for the collective (the Airbus TCA Quadrant is the community favorite here) and a set of [rudder pedals](/flight/best-flight-sim-rudder-pedals) and you are at roughly **$300-400** for a rig that flies the entire default MSFS 2024 roster properly. This is what I recommend to anyone who is serious but not all-in.

<aside class="gearpick">

  <a class="gp-shot" href="/flight/gear/thrustmaster-tca-quadrant-airbus"><span class="gp-tag">Collective · budget favorite</span><img src="/images/gear/flight/thrustmaster-tca-quadrant-airbus.jpg" alt="Thrustmaster TCA Quadrant Airbus Edition" loading="lazy"></a>
  <div class="gp-body">
    <span class="gp-eyebrow">Throttle quadrant as collective · contactless H.E.A.R.T sensors</span>
    <span class="gp-name"><a href="/flight/gear/thrustmaster-tca-quadrant-airbus">Thrustmaster TCA Quadrant Airbus Edition</a></span>
    <p class="gp-why">The community's go-to collective substitute. It was built as an Airbus airliner throttle, but one lever maps cleanly to the COLLECTIVE AXIS, the tension holds it parked where you leave it, and the contactless sensors never wear. At around $100 it is the cheap, precise way to give a helicopter a real up-and-down power lever.</p>
    <span class="gp-price">~$100 · check current</span>
    <span class="gp-actions">
      <a class="gp-review" href="/flight/gear/thrustmaster-tca-quadrant-airbus">Spec card</a>

    </span>
  </div>

</aside>

For the cyclic, a compact all-in-one stick works too, and it's the friendliest first buy for a newcomer who wants one device. The [Turtle Beach VelocityOne Flight Stick](/flight/gear/turtle-beach-velocityone-flight-stick) (~$130) is Xbox- and PC-licensed with an integrated twist-rudder, so you can fly helicopters the moment it's plugged in — then add real pedals once the twist-rudder starts fighting you.

<aside class="gearpick">

  <a class="gp-shot" href="/flight/gear/turtle-beach-velocityone-flight-stick"><span class="gp-tag">Cyclic · all-in-one starter</span><img src="/images/gear/flight/turtle-beach-velocityone-flight-stick.jpg" alt="Turtle Beach VelocityOne Flight Stick" loading="lazy"></a>
  <div class="gp-body">
    <span class="gp-eyebrow">Cyclic stick · integrated twist rudder, OLED display</span>
    <span class="gp-name"><a href="/flight/gear/turtle-beach-velocityone-flight-stick">Turtle Beach VelocityOne Flight Stick</a></span>
    <p class="gp-why">A console-friendly cyclic you can fly on day one. 27 programmable buttons, an OLED status screen and a built-in twist-rudder mean no extra gear to start. It's plastic-heavy and a touch better on PC than Xbox, but for a first helicopter cyclic it gets you hovering fast — add dedicated pedals when the twist axis frustrates you.</p>
    <span class="gp-price">~$130 · check current</span>
    <span class="gp-actions">
      <a class="gp-review" href="/flight/gear/turtle-beach-velocityone-flight-stick">Spec card</a>

    </span>
  </div>

</aside>

### HOTAS combo — one box, two jobs

A [Logitech G X56](/flight/best-hotas-msfs-2024) (~$249.99) is a popular helicopter pick because its twin throttle levers **unlock and separate**, so you can slide the assembly to your left where a real collective lives. (One myth to kill: the X56's cables are built in, so the throttle doesn't fully detach — but you *can* unlock the twin levers and adjust their friction so one stays parked as a collective.) Configure the left lever as the collective with friction, use the stick as the cyclic, and you have a tidy two-piece setup. You still need pedals — the X56 has a twist-rudder but you'll outgrow it fast. For the binding and curve work this needs, the [control curves guide](/flight/flight-sim-control-curves-calibration) is worth a read; helicopters are far more sensitive to a good curve than fixed-wing.

### Dedicated — replica cyclic and collective

If helicopters are your *main* sim, dedicated gear exists. Makers like **Komodo Simulations** hand-build replica cyclic grips and collectives in the UK, modeled on Bell 206-style rotorcraft controls, with authentic switchgear, a twist throttle on the collective head and proper adjustable friction — and they register as plug-and-play USB controllers in MSFS, X-Plane and DCS with no special drivers. Paired with **pendular pedals** like the [Thrustmaster TPR](/flight/best-flight-sim-rudder-pedals) (~$599.99), a full dedicated rig lands around **$1,200-1,800**. It's superb, and completely unnecessary for anyone who flies helicopters occasionally. Buy this only when you've logged serious hover hours and the budget tier is genuinely limiting you.

The dedicated collective is text-and-link only below — we don't have a verified studio photo of the exact Komodo unit, and its price and lead time move because each is hand-built to order. Komodo publicly dropped prices on its cyclic grips and collectives (a roughly £200 reduction), so confirm the current figure on their store before you buy.

- **[Komodo Simulations Helicopter Collective](/flight/gear/komodo-simulations-collective)** — hand-built UK weighted lever with twist-grip throttle, Bell 206-style, plug-and-play USB, **check current price** (approx. £350+ after the price drop), [official store](https://komodosimulations.co.uk/){:target="_blank" rel="nofollow noopener"} or check Amazon{:target="_blank" rel="sponsored nofollow noopener"}.

## The collective, up close: two verified options

The single most helicopter-specific piece of your rig is whatever gives you an up-and-down power lever that stays parked. You do **not** need a dedicated collective to get this — a throttle quadrant does the job, and two of them are worth a close look.

<aside class="gearpick">

  <a class="gp-shot" href="/flight/gear/moza-mtq-throttle-quadrant"><span class="gp-tag">Collective · modular</span><img src="/images/gear/flight/moza-mtq-throttle-quadrant.jpg" alt="MOZA MTQ Throttle Quadrant" loading="lazy"></a>
  <div class="gp-body">
    <span class="gp-eyebrow">Modular throttle quadrant · swappable lever packs</span>
    <span class="gp-name"><a href="/flight/gear/moza-mtq-throttle-quadrant">MOZA MTQ Throttle Quadrant</a></span>
    <p class="gp-why">A compact, reconfigurable quadrant whose lever doubles neatly as a collective — park one lever with tension and bind it to the collective axis. It brings 23 controls and a real gear lever in a small body, so the same base flies jets one night and helicopters the next. Non-removable flap detents are the one knock for rotary use.</p>
    <span class="gp-price">~$199 base (+$39 per lever pack)</span>
    <span class="gp-actions">
      <a class="gp-review" href="/flight/gear/moza-mtq-throttle-quadrant">Spec card</a>

    </span>
  </div>

</aside>

<div class="callout forum">

  <div class="ct">// From the forums</div>
  <p>The most-repeated helicopter setup story on the MSFS forums isn't about which brand to buy — it's about one axis binding. Simmers, some of whom had spent hundreds on dedicated collectives, kept finding the lever felt dead until they realized their throttle had landed on the *helicopter throttle* binding rather than the *collective* binding. The fix that "works like a charm" over and over: assign the lever to COLLECTIVE AXIS under Power Management, invert it, and leave the twist-grip throttle to a separate axis or the auto-governor. Boring, one checkbox, and it un-breaks the whole flight.</p>

</div>

## The anti-torque pedals: the part you cannot cheap out on

Your feet never stop working in a helicopter, so pedals matter more here than anywhere in fixed-wing. The metal, drift-proof step up is the Honeycomb Charlie; below it sit honest budget and combat options.

<aside class="gearpick">

  <a class="gp-shot" href="/flight/gear/honeycomb-charlie-pedals"><span class="gp-tag">Anti-torque · metal step-up</span><img src="/images/gear/flight/honeycomb-charlie-pedals.jpg" alt="Honeycomb Aeronautical Charlie Rudder Pedals" loading="lazy"></a>
  <div class="gp-body">
    <span class="gp-eyebrow">Rudder pedals · aluminum frame, Hall-effect sensors</span>
    <span class="gp-name"><a href="/flight/gear/honeycomb-charlie-pedals">Honeycomb Aeronautical Charlie Rudder Pedals</a></span>
    <p class="gp-why">The pedals that make constant anti-torque work feel precise instead of fatiguing. An aluminum frame, Hall-effect sensors that don't drift, adjustable foot angle and a tension knob you can loosen for the light, always-moving feel a hover wants. Pricier than the Logitech entry, but for a control you're on every second, you feel where the money went.</p>
    <span class="gp-price">~$270 · check current</span>
    <span class="gp-actions">
      <a class="gp-review" href="/flight/gear/honeycomb-charlie-pedals">Spec card</a>

    </span>
  </div>

</aside>

The budget and specialist pedals below are text-and-link only because we haven't verified their exact product photos:

- **[Logitech G Flight Rudder Pedals](/flight/gear/logitech-g-flight-rudder-pedals)** — budget entry with differential toe brakes and an adjustable damping dial, ~$180, check Amazon{:target="_blank" rel="sponsored nofollow noopener"}.
- **Thrustmaster TFRP Rudder** — the cheapest way to free your twist axis and get real pedals under your feet, **check current**, check Amazon{:target="_blank" rel="sponsored nofollow noopener"}.
- **[Thrustmaster TPR Pendular Rudder](/flight/best-flight-sim-rudder-pedals)** — pendular PENDUL_R motion, Hall-effect sensors, differential toe brakes, five pedal angles; the dedicated-tier choice, ~$599.99, check Amazon{:target="_blank" rel="sponsored nofollow noopener"}.

<div class="callout tip">

  <div class="ct">// Pro tip</div>
  <p>Why the twist-rudder frustrates you within an hour: on most sticks, twisting to around 60% of travel produces almost no yaw, then somewhere past 70% the nose suddenly swings — so the fine, constant corrections a hover demands are exactly the ones a twist axis is worst at. Dedicated pedals give you smooth, linear travel from the first millimeter. If a hover keeps swinging its nose, the culprit is almost always pedal management, not your cyclic.</p>

</div>

## The bindings that actually work in MSFS 2024

Hardware is only half the battle — MSFS 2024's defaults will fight you. Open Controls, pick your device, and set these:

- **Collective axis, inverted.** Assign your throttle-quadrant lever to **COLLECTIVE AXIS** (it lives under **Power Management**), not the throttle, and tick **Reverse** so pulling the lever *up* increases collective pitch. Throttles default to idle-at-bottom; a collective adds power as it rises. This one checkbox is the fix for 90% of "my helicopter flies backwards" complaints.
- **Cyclic on pitch and roll** — search "cyclic" and bind **SET CYCLIC LONGITUDINAL AXIS** and **SET CYCLIC LATERAL AXIS** to your stick. Then add a sensitivity curve of roughly **-30% to -40%** to both, which softens the twitchy center without losing full deflection at the extremes. Helicopters are extremely sensitive near center; a flat linear curve feels uncontrollable.
- **Pedals on the rudder axis** — MSFS calls the anti-torque pedals **RUDDER AXIS**, so bind your pedals there, full travel, and get comfortable being on them constantly.
- **Watch the helicopter throttle trap.** On governed helicopters (R66, Cabri G2) there's a separate **SET HELICOPTER THROTTLE 1 AXIS** for the twist-grip. Don't let your collective lever land on that binding by accident — keep the lever on COLLECTIVE AXIS and let a twist axis or the auto-governor handle rotor RPM.

<div class="callout tip">

  <div class="ct">// Pro tip</div>
  <p>If your helicopter sinks when you pull the lever up, you haven't broken anything — your collective axis just isn't inverted. Throttles default to idle-at-bottom; a collective adds power as it rises. Flip the Reverse checkbox and most "my heli flies backwards" frustration disappears in one click. Start from clean, empty assignments if you're fighting conflicting old bindings — it's faster than hunting the ghost.</p>

</div>

A collective sits low and to your left, so plan the physical layout before you buy — mapping the cyclic, collective and pedal positions in [the Rig Configurator](/racing/configurator) saves you from a cramped, unflyable seat. Get these three bindings right and a wobbly, unflyable helicopter usually becomes a controllable one in the same session.

## The setup tax nobody quotes you

- **The collective must hold position.** A self-centering throttle is the wrong tool — you need friction or a clutch so the lever stays exactly where you set it. Throttle quadrants with a tension screw (TCA Quadrant, MOZA MTQ) and dedicated collectives (Komodo, VIRPIL) are built for this; a spring-loaded stick throttle is not.
- **Curves are not optional.** A flat linear cyclic feels violent in a hover. Budget a session to dial in the -30% to -40% curves and a small (not zero) center deadzone before you judge the aircraft.
- **Real helicopters have a cyclic trim, and the best rigs mimic it.** Enthusiast bases (VIRPIL, Komodo) let you soften or remove the cyclic's return-to-center and the pedals' self-centering to match a real trim system. You don't need this to start, but it's the "why does the pro rig feel different" answer.
- **Pedals carry over; twist-rudders don't.** Money spent on real pedals also improves your fixed-wing crosswind landings. Money spent stretching a twist-rudder into hover duty is money you'll re-spend on pedals anyway.

## Who should skip this

Skip dedicated helicopter hardware if you fly **mostly fixed-wing** and just want to dabble — your existing stick, a throttle lever with friction and pedals cover it for the price of nothing extra. Skip the **Logitech X56** if you don't want a HOTAS for anything else; a plain Hall-effect stick plus a throttle quadrant is cheaper and just as capable. And skip the full **dedicated Komodo rig** entirely unless helicopters are your primary sim and you've already worn out the budget tier. Most simmers never need to leave the ~$300-400 setup.

## What to buy

<aside class="gearpick">

  <a class="gp-shot" href="/flight/gear/thrustmaster-tca-sidestick-airbus"><span class="gp-tag">Start here · cyclic</span><img src="/images/gear/flight/thrustmaster-tca-sidestick-airbus.jpg" alt="Thrustmaster TCA Sidestick Airbus Edition" loading="lazy"></a>
  <div class="gp-body">
    <span class="gp-eyebrow">Cyclic · precise magnetic-sensor stick</span>
    <span class="gp-name"><a href="/flight/gear/thrustmaster-tca-sidestick-airbus">Thrustmaster TCA Sidestick</a></span>
    <p class="gp-why">A cheap, drift-free stick whose contactless H.E.A.R.T sensors hold the rock-solid center a hover demands. Bind it to the cyclic axes, add a -30% curve, and you have the most important helicopter control sorted for around $80.</p>

  </div>

</aside>

<aside class="gearpick">

  <a class="gp-shot" href="/flight/gear/thrustmaster-tca-quadrant-airbus"><span class="gp-tag">Add this · collective</span><img src="/images/gear/flight/thrustmaster-tca-quadrant-airbus.jpg" alt="Thrustmaster TCA Quadrant Airbus Edition" loading="lazy"></a>
  <div class="gp-body">
    <span class="gp-eyebrow">Collective · a parked throttle lever</span>
    <span class="gp-name"><a href="/flight/gear/thrustmaster-tca-quadrant-airbus">Thrustmaster TCA Quadrant</a></span>
    <p class="gp-why">The community's favorite collective substitute. One lever binds to COLLECTIVE AXIS, holds its position with tension, and gives a helicopter the up-and-down power control a fixed-wing throttle can't. Under $100 and the piece that makes rotary flying click.</p>

  </div>

</aside>

<aside class="gearpick">

  <a class="gp-shot" href="/flight/gear/honeycomb-charlie-pedals"><span class="gp-tag">Don't skip · pedals</span><img src="/images/gear/flight/honeycomb-charlie-pedals.jpg" alt="Honeycomb Aeronautical Charlie Rudder Pedals" loading="lazy"></a>
  <div class="gp-body">
    <span class="gp-eyebrow">Anti-torque · the control you're on constantly</span>
    <span class="gp-name"><a href="/flight/gear/honeycomb-charlie-pedals">Honeycomb Charlie Pedals</a></span>
    <p class="gp-why">The one place not to economize. Smooth, linear, drift-proof pedals turn constant anti-torque work from a wrist-cramping twist-rudder chore into precise footwork — and they upgrade your fixed-wing landings too. Start on the ~$180 Logitech pedals if the budget's tight, but land here.</p>

  </div>

</aside>

## Verdict

For the vast majority of MSFS 2024 simmers who want to fly helicopters seriously, the budget-proper setup wins: a **Hall-effect stick** as the cyclic, a **throttle-quadrant lever** as the collective, and **dedicated rudder pedals**, for roughly $300-400. It flies the entire default MSFS 2024 helicopter roster — the Cabri G2, R66, Bell 407, H125 and more — correctly, and the pedals carry over to your fixed-wing flying too. Repurpose a HOTAS like the X56 if you want one tidy box, and reach for dedicated Komodo gear only when rotary flying is the whole point of your sim. Whatever you buy, do not cheap out on the pedals — in a helicopter, your feet never stop. If you're still deciding between stick types generally, the [best HOTAS breakdown](/flight/best-hotas-msfs-2024) covers the sticks that double as good cyclics.

## Sources Checked

Source review date: July 2, 2026. We checked official product pages and current pricing rather than repeating box specs; where a price was sale-dependent, hand-built to order, or not shown, we flagged "check current."

Official pages and pricing reads: [Thrustmaster T.16000M FCS](https://www.thrustmaster.com/en-us/products/t-16000m-fcs/) (listed $79.99), [Thrustmaster TCA Quadrant Airbus Edition](https://www.thrustmaster.com/products/tca-quadrant-add-on-airbus-edition/), [Thrustmaster TCA Sidestick Airbus](https://www.thrustmaster.com/products/tca-sidestick-airbus-edition/), [Thrustmaster TPR Pendular Rudder](https://eshop.thrustmaster.com/en_us/tpr-thrustmaster-pendular-rudder.html) (listed $599.99), [Logitech G X56 HOTAS](https://www.logitechg.com/en-us/shop/p/x56-space-flight-vr-simulator-controller) (listed $249.99), [Honeycomb Charlie Rudder Pedals](https://flyhoneycomb.com/products/charlie-rudder-pedals), [MOZA MTQ Throttle Quadrant](https://us.mozaracing.com/), [Turtle Beach VelocityOne Flight Stick](https://www.turtlebeach.com/), [Komodo Simulations](https://komodosimulations.co.uk/).

Bindings + setup reads: the MSFS 2024 helicopter binding names (SET CYCLIC LONGITUDINAL/LATERAL AXIS, COLLECTIVE AXIS, RUDDER AXIS, SET HELICOPTER THROTTLE 1 AXIS) and the collective-vs-helicopter-throttle confusion via the [Microsoft Flight Simulator forums](https://forums.flightsimulator.com/t/helicopter-throttles-are-mapped-to-collective-axis-for-all-helicopters/676875) and [SimTuts MSFS 2024 helicopter guide](https://simtuts.com/guides/msfs-2024-helicopter-guide) (cyclic curve -30% to -40%, collective inversion, constant pedal work in the hover); the cyclic-trim and non-centering-pedal enthusiast setup from [VIRPIL's helicopter cockpit guide](https://support.virpil.com/en/support/solutions/articles/47001266238-helicopter-simulation-cockpit-setup-guide-virpil-controls); and the MSFS 2024 default rotorcraft roster (Cabri G2, R66, Bell 407, H125, Erickson S-64, H225, CH-47D).

Community + review reads (paraphrased in our voice): the recurring MSFS-forum "throttle mapped to collective" binding threads, and the widely-reported twist-rudder deadzone pattern (little yaw until ~60-70% travel, then a sudden swing) that pushes hover pilots to dedicated pedals.
