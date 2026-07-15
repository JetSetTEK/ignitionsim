---
title: "Best Budget Marine Sim Setup for Under $200 (Without Wasting Money)"
description: "The cheapest credible boat and ship-sim control stack: free sims, gear you may already own, and the one or two purchases that actually matter — plus explicit 'don't buy this for marine' warnings."
bay: "marine"
type: "buying-guide"
primaryKeyword: "budget marine sim setup"
author: "Gus Calder"
publishDate: 2026-05-20
updatedDate: 2026-07-02
heroImage: "/images/gear/marine/bridge-command-free-sim.jpg"
heroAlt: "Bridge Command, the free open-source ship-handling simulator that anchors the cheapest possible marine sim setup"
excerpt: "Most marine sims play fine on keyboard or a basic pad. So the under-$200 question isn't 'what wheel?' — it's 'which one or two purchases actually matter?' Here's the honest budget build, priced in 2026."
featured: false
goldStatus: "refresh"
sourceReviewDate: 2026-07-02
revenueTier: "B"
contentCluster: "marine"
readingTime: 8
faqs:
  - q: "What's the cheapest good marine sim setup?"
    a: "Genuinely free. Bridge Command is an open-source, ship-handling simulator (version 5.9, GPLv2) that even documents how to build your own controls — pair it with a gamepad you already own and you have a fully playable rig for $0. If you want one physical upgrade, a flight throttle quadrant is the single best immersion-per-dollar buy in the bay at about $70. Most marine titles don't need a racing wheel to play well."
  - q: "Do I need a racing wheel for boat sims?"
    a: "No, and it's often the most-wasted money in this bay. Verify your specific title reads an analog steering axis first — many marine sims play perfectly well on keyboard and mouse, and several only see a wheel as binary left/right anyway, so a $250 wheel behaves like two arrow keys. Buy engine levers before you buy a wheel."
  - q: "What single purchase adds the most immersion under $200?"
    a: "A flight throttle quadrant like the Logitech G Saitek Pro Flight Throttle Quadrant (about $70 at official price in 2026). Its three analog levers map to twin throttles plus a bow thruster and add more marine feel per dollar than a wheel — provided your sim reads analog throttle axes."
  - q: "Is DIY really cheaper than buying marine sim hardware?"
    a: "Yes, and it's the smartest money in the bay. Bridge Command's official build guide uses a Leo Bodnar BU0836 board plus three roughly 10k linear potentiometers — around $60 in parts — to make a real analog wheel and twin throttles the sim reads as true axes. That's a complete position-holding helm for less than a single off-the-shelf racing wheel."
  - q: "Do I need force feedback for a budget marine rig?"
    a: "No — skip it entirely to protect your budget. Marine titles almost never support force feedback, and a car wheel's FFB doesn't replicate a boat wheel's feel anyway. Never pay the premium for a force-feedback wheel expecting it to matter on the water; that money buys nothing here. Put it toward a throttle quadrant or a DIY board instead."
related:
  - "marine-sim-hardware-reality"
  - "racing-wheel-boat-helm"
  - "marine-sim-controller-support"
---

Verdict first: **the cheapest credible marine sim setup is free — a free ship sim plus a gamepad you already own — and the single best physical upgrade under $200 is a ~$70 flight throttle quadrant, not a racing wheel.** Most budget guides open by telling you what to buy. In marine sim, the under-$200 trap is assuming you need a wheel at all. You probably don't: most marine titles play fine on keyboard and mouse or a pad, and several won't even read a wheel as a proper analog helm. So the real question for $200 isn't "which wheel?" — it's "which one or two purchases actually move the needle?" And before you spend a dollar, there's one gate that decides whether *any* hardware works: confirm your sim reads analog axes, because the cheapest gear the game actually reads beats the priciest rig it ignores.

I wrote the [marine hardware reality check](/marine/marine-sim-hardware-reality) as the full map of this bay — the short version is that no consumer "boat wheel" exists, so everything here is repurposed racing and flight gear or a homemade build. This guide takes that reality and answers a narrower question: **if your budget is $200, where does each dollar go first?**

## The budget ladder: buy in this order

Build from the top. Stop when your sim and your wallet say enough. Every rung assumes you've already confirmed your title reads analog axes.

1. **$0 — a free sim and a pad you own.** Bridge Command (free, open source) plus any gamepad. Fully playable. This is your baseline, not a consolation prize.
2. **~$70 — a flight throttle quadrant.** The best immersion-per-dollar buy in the bay. Real engine levers change how the rig feels more than anything else at this price.
3. **~$60 in parts — the DIY route.** A Leo Bodnar board plus three ~10k pots builds a true analog helm and twin throttles the sim reads as real axes. The smartest money here if you'll pick up a soldering iron.
4. **Free — glue software.** vJoy / JoyToKey to force keyboard-only titles to read your gear. Mandatory for several popular sims.
5. **Stretch (over budget) — a used racing wheel.** Optional, and only if the sim reads analog steering. Buy the cheap non-FFB option.

The rest of this guide walks each rung and flags what to *skip*.

## Start with $0: the sim and a pad you own

The cheapest good marine sim setup costs nothing beyond a controller you already have. **Bridge Command** is free, open-source (GPLv2), ship-handling focused, and — uniquely in this bay — documents its own DIY helm build. The current release, version 5.9, even added virtual-reality support for PCVR headsets. Pair it with a basic gamepad and you have a genuinely playable rig for $0.

This is not a throwaway tier. The honest truth running through the whole marine bay is that most titles were built around keyboard-style input, so a pad or even keys cover the core controls fine. Before you spend a dollar, play this way for a week. You'll learn which controls you actually wish were physical — and *that* is your shopping list, not a spec sheet.

<aside class="gearpick">
  <a class="gp-shot" href="/marine/gear/bridge-command-free-sim"><span class="gp-tag">Free · $0</span><img src="/images/gear/marine/bridge-command-free-sim.jpg" alt="Bridge Command free open-source ship-handling simulator" loading="lazy"></a>
  <div class="gp-body">
    <span class="gp-eyebrow">Free open-source ship sim · DIY-documented</span>
    <span class="gp-name"><a href="/marine/gear/bridge-command-free-sim">Bridge Command (free ship-handling sim)</a></span>
    <p class="gp-why">The $0 on-ramp and the reason the budget tier isn't a compromise. Ship-handling focused, GPLv2, now version 5.9 with PCVR support — and the only sim that publishes an official DIY wheel-and-throttle build. Play it with a pad you own before you buy anything.</p>
    <span class="gp-price">Free</span>
    <span class="gp-actions">
      <a class="gp-review" href="/marine/gear/bridge-command-free-sim">Spec card</a>
      <a href="https://www.bridgecommand.co.uk/Download" target="_blank" rel="nofollow noopener">Official free download</a>
    </span>
  </div>
</aside>

If sailing rather than ship-handling is your thing, **Sailaway** has a demo path worth checking (a newer Sailaway III is on Steam) — confirm the current free-demo status on the store page before assuming, as demo availability shifts. Either way, the point stands: play free first.

## The one purchase that matters: a throttle quadrant

If anything earns its place in a $200 budget, it's engine levers — not a wheel. The **Logitech G Saitek Pro Flight Throttle Quadrant** runs **$69.99 at Logitech's official price** in 2026 (often less on sale) and gives you three analog levers plus three two-way rocker switches — nine programmable commands in total. The three levers map naturally to port throttle, starboard throttle, and a bow thruster. In sims that read analog axes, this is the single best immersion-per-dollar purchase in the bay, and the quadrants daisy-chain when three levers aren't enough.

The full repurposing walkthrough lives in the [hardware reality check](/marine/marine-sim-hardware-reality), but the headline is simple: real levers you can set and hold transform engine control in a way a keyboard never will. The only caveat is the one that governs everything here — the levers do nothing in a sim that won't read analog throttle input, so verify first.

A quick honesty note on the photo below. The Saitek quadrant is the budget MVP of this bay, but I don't have a verified marine-context product image of it yet, so it appears as text and links rather than a photo. I'd rather flag that than show a stock shot pretending to be a marine telegraph. Check current pricing and stock: Logitech G Saitek Pro Flight Throttle Quadrant on Amazon.

<div class="callout tip">
  <div class="ct">// Pro tip</div>
  <p>Live with the free-sim-plus-pad rig for a full week before buying anything. The controls you keep wishing were physical are your shopping list — and they're almost never "a wheel." For most people the first dollar that earns its keep is engine levers, then a rudder or a button panel. Steering is the last thing to spend on, not the first.</p>
</div>

## The smartest budget move: build it yourself

Here's where the budget actually beats the wallet. Marine sim's most "native" hardware isn't sold — it's built. **Bridge Command's official controls guide** documents making your own wheel and throttles from a **Leo Bodnar BU0836** USB interface board plus **three roughly 10k linear potentiometers** — two for throttles, one for the wheel — with an optional push-button for the ship's horn. The whole build lands around **$60 in parts**: a complete, position-holding ship's helm for less than a single off-the-shelf wheel, feeding the exact sim that documented it.

The board the classic guide points at is the solder-it-yourself **Leo Bodnar BU0836A** (about £33 / ~$42 direct from Leo Bodnar) — the cheapest way in if you're comfortable with a soldering iron. I don't have a verified photo of that exact board, so it stays text-only here: [source the BU0836A direct from Leo Bodnar](https://www.leobodnar.com/shop/index.php?main_page=product_info&products_id=204). If you'd rather see what you're wiring and skip the solder, the **BU0836X** below is the same Leo Bodnar interface with solderless push-in terminals — a bit pricier at about £59.99 / ~$77, but the friendlier version of the identical recipe, and I do have a verified image of it.

<aside class="gearpick">
  <a class="gp-shot" href="/marine/gear/leobodnar-bu0836x-diy-board"><span class="gp-tag">Best value (no solder)</span><img src="/images/gear/marine/leobodnar-bu0836x-diy-board.jpg" alt="Leo Bodnar BU0836X Joystick Interface (push-in connectors)" loading="lazy"></a>
  <div class="gp-body">
    <span class="gp-eyebrow">8 analog axes · solderless</span>
    <span class="gp-name"><a href="/marine/gear/leobodnar-bu0836x-diy-board">Leo Bodnar BU0836X Joystick Interface</a></span>
    <p class="gp-why">The proven Leo Bodnar board behind most DIY ship-helm builds, in its solderless push-in version. Eight analog axes plus 32 buttons cover twin throttles, wheel, thruster and a panel on one board — the whole Bridge Command recipe without a soldering iron. Cheaper still is the solder-it-yourself BU0836A. Ships from the UK.</p>
    <span class="gp-price">~$77 (solder-it BU0836A ~$42)</span>
    <span class="gp-actions">
      <a class="gp-review" href="/marine/gear/leobodnar-bu0836x-diy-board">Spec card</a>
      <a href="https://www.leobodnar.com/shop/index.php?main_page=product_info&products_id=180" target="_blank" rel="nofollow noopener">Read official specifications</a>
    </span>
  </div>
</aside>

<div class="callout forum">
  <div class="ct">// From the builders</div>
  <p>The DIY-helm lesson nobody warns you about until your first build: the board and the pots are the easy part — the <em>friction</em> is the whole game. A bare 10k pot flops loosely, so your throttle won't hold a setting and drifts back to idle on its own. The Bridge Command builders' fix is dead simple and dead cheap: wrap a loop of string around the potentiometer shaft and anchor it under light tension so the lever drags where you leave it. That one trick is the difference between a toy and a throttle that stays put. Sort the friction before you fabricate the enclosure.</p>
</div>

If you'd rather code your own logic — software detents, a button matrix, a combined helm-plus-panel on one cheap board — the **Arduino Leonardo** (or a Pro Micro clone) presents as a real HID joystick via the open ArduinoJoystickLibrary. It's the flexible route: more effort than the no-code Bodnar boards, but full control, and at about $25 it's the cheapest custom-controller foundation in the bay. For a strict budget it's the single cheapest way to a real analog axis the sim reads.

<aside class="gearpick">
  <a class="gp-shot" href="/marine/gear/arduino-leonardo-diy-hid"><span class="gp-tag">Cheapest real axis · ~$25</span><img src="/images/gear/marine/arduino-leonardo-diy-hid.jpg" alt="Arduino Leonardo (ATmega32u4 HID)" loading="lazy"></a>
  <div class="gp-body">
    <span class="gp-eyebrow">Native USB HID · code-it-yourself</span>
    <span class="gp-name"><a href="/marine/gear/arduino-leonardo-diy-hid">Arduino Leonardo (ATmega32u4 HID)</a></span>
    <p class="gp-why">The cheapest path to a genuine analog axis. Its native USB and the open ArduinoJoystickLibrary make your pots and switches read as real axes and buttons, with logic a fixed board can't do. You write the sketch and build every bit of hardware — the trade for the lowest price of entry.</p>
    <span class="gp-price">~$25 (clones cheaper)</span>
    <span class="gp-actions">
      <a class="gp-review" href="/marine/gear/arduino-leonardo-diy-hid">Spec card</a>

    </span>
  </div>
</aside>

## The gate that ruins a budget: analog axis support

Now the part that separates people happy with their cheap rig from people who returned an expensive one. The hard limit in marine sim is not hardware. It is software — and on a budget it matters more, because you can't afford to waste a purchase.

Many marine titles still only accept digital, keyboard-style input. When that's true, your analog wheel doesn't steer proportionally — it maps to a binary **left/right**, exactly as if you were tapping arrow keys. Worse, your analog throttle lever often does *nothing at all*, because the game never reads the axis. On a $200 budget, buying a wheel for a keyboard-only title is the single most expensive mistake you can make.

This is why glue software belongs in every serious marine rig, and it's free. Tools like **vJoy**, **JoyToKey** (a free shareware controller-to-keyboard mapper) and **Xpadder** translate your hardware's axes and buttons into whatever input the stubborn title actually accepts. It's not optional polish; for several popular sims it's the difference between working and not — and it costs nothing. Before you buy *anything*, check the title-by-title breakdown in [the analog-axis compatibility map](/marine/marine-sim-controller-support).

## Two low-cost extras worth a look

If you've got a little room left in the budget after levers, two things add real bridge feel without a wheel.

A **PXN CB1** is a finished, plug-and-play button box — 19 controls and up to 30 programmable functions for nav lights, horn, autopilot, anchor and engine commands. It's marketed for racing and truck sims, so you map its buttons to your marine title, and being all-digital it complements a throttle rather than replacing one. At around $80 it's the no-DIY way to add a full command panel.

<aside class="gearpick">
  <a class="gp-shot" href="/marine/gear/pxn-cb1-button-box"><span class="gp-tag">Ready-made panel</span><img src="/images/gear/marine/pxn-cb1-button-box.jpg" alt="PXN CB1 Sim Control Button Box" loading="lazy"></a>
  <div class="gp-body">
    <span class="gp-eyebrow">19 controls · 30 functions</span>
    <span class="gp-name"><a href="/marine/gear/pxn-cb1-button-box">PXN CB1 Sim Control Button Box</a></span>
    <p class="gp-why">A finished bridge-command panel for builders who don't want to fabricate a Bodnar board. Nineteen controls, 30 programmable functions, driver-free USB-C. All-digital, so pair it with a throttle for the axes it doesn't provide — a clean, cheap way to add nav lights, horn and autopilot commands.</p>
    <span class="gp-price">~$80</span>
    <span class="gp-actions">
      <a class="gp-review" href="/marine/gear/pxn-cb1-button-box">Spec card</a>

    </span>
  </div>
</aside>

If you're going fully DIY and want a solderless way to wire a real panel of bridge switches, the digital-only **Leo Bodnar BBI-32** takes 32 switches or up to 16 encoders through push-in terminals — the switch-side companion to a BU0836 axis board. It's the maker's route to the same panel the CB1 gives you off the shelf, and it slots into a Bridge Command build cleanly.

<aside class="gearpick">
  <a class="gp-shot" href="/marine/gear/leobodnar-bbi-32-button-box-interface"><span class="gp-tag">DIY switch panel</span><img src="/images/gear/marine/leobodnar-bbi-32-button-box-interface.jpg" alt="Leo Bodnar BBI-32 Button Box Interface" loading="lazy"></a>
  <div class="gp-body">
    <span class="gp-eyebrow">Digital-only · 32 inputs, no solder</span>
    <span class="gp-name"><a href="/marine/gear/leobodnar-bbi-32-button-box-interface">Leo Bodnar BBI-32 Button Box Interface</a></span>
    <p class="gp-why">The solderless digital workhorse for a bridge console's switches, knobs and encoders. Push-in terminals, 32 inputs (chainable further), plug-and-play HID. No analog axes, so it complements a BU0836 rather than replacing it — the DIY answer to a ready-made button box.</p>
    <span class="gp-price">~$53</span>
    <span class="gp-actions">
      <a class="gp-review" href="/marine/gear/leobodnar-bbi-32-button-box-interface">Spec card</a>
      <a href="https://www.leobodnar.com/shop/index.php?main_page=product_info&products_id=205" target="_blank" rel="nofollow noopener">Read official specifications</a>
    </span>
  </div>
</aside>

## Maybe a wheel — but it's a stretch, and buy the cheap one

A racing wheel as a helm is *optional* and, for most people on this budget, skippable. If you go that route, buy the budget option and expect to blow past $200: the **Logitech G29** runs roughly **$200–$300** (often ~$200 secondhand thanks to the flooded sim-racing market) and the **G923** more still. A wheel is a stretch purchase, not a starter one.

Two hard rules if you buy one. First, **do not pay for the G923 over the G29 expecting force feedback to matter** — marine sims don't use FFB, so that premium buys nothing on the water. Second, **confirm your chosen title reads analog steering before you spend**, because as the [compatibility map](/marine/marine-sim-controller-support) shows, several popular titles only see the wheel as binary left/right — in which case you spent $250 to press the arrow keys. I don't have a verified marine-context photo of the G29, so it's text-and-link only here, honestly flagged rather than faked: Logitech G29 on Amazon.

## The budget tiers at a glance

| Budget | What you buy | What you get | Don't bother with |
|---|---|---|---|
| **$0** | Free sim (Bridge Command 5.9) + pad you own | Fully playable core controls | A wheel you haven't tested |
| **~$25** | Arduino Leonardo + a 10k pot (DIY) | Your first real analog axis the sim reads | A pre-built "marine helm" — none exists |
| **~$60** | BU0836 board + three 10k pots (DIY) | A true analog helm + twin throttles | Force feedback hardware |
| **~$70** | Saitek Pro Flight Throttle Quadrant | Twin throttles + bow thruster levers | Paying MSRP — wait for a sale |
| **~$80** | Add a PXN CB1 button box | Nav lights, horn, autopilot, anchor panel | An all-in-one marine console |
| **Stretch (over $200)** | Used Logitech G29 helm | Analog steering *if the sim reads it* | The G923's TrueForce premium |

## What to explicitly skip on a budget

- **A force-feedback wheel for the FFB.** Marine sims don't support it. Buy the cheaper non-FFB option, or skip the wheel entirely.
- **MSRP on the throttle quadrant.** It's $69.99 official but frequently discounted — set a price alert rather than paying full list.
- **A second monitor "for the helm."** Steering is simple; if you want a second screen, it's for charting, not the wheel.
- **Any "marine helm controller" you think you found.** There's no plug-and-play marine helm on the market — if a listing implies otherwise, it's a repurposed racing wheel with a markup.

<div class="callout warn">
  <div class="ct">// Before you buy</div>
  <p>Four honest budget warnings. <strong>One:</strong> nothing here is plug-and-play marine hardware — everything is a repurpose or a build, so budget setup time, not just money. <strong>Two:</strong> a DIY helm is a real project (fabrication, wiring, the friction trick), not an afternoon. <strong>Three:</strong> confirm analog-axis support <em>before</em> any purchase — the wrong title turns a $250 wheel into two arrow keys. <strong>Four:</strong> prices move — the Meta Quest price hike in April 2026 is a reminder to check current figures before you commit, not to trust a number you saw last year.</p>
</div>

## Two things worth watching (not buying yet)

A budget note on the horizon, and one VR sidestep — neither is a required purchase.

**Professional Ship Simulator** (rebranded from Nautic XP), targeting Steam Early Access in 2026, is the most hardware-friendly marine sim on the horizon: a 9-axis input model, 50+ buttons, and a rudder deadzone option built for HOTAS and controller rigs. In a bay defined by software that ignores your hardware, that's genuinely exciting — it's the title most likely to read your cheap repurposed gear as real analog inputs. Price isn't announced and it's Early Access, so wishlist it, don't pre-plan a budget around it.

<aside class="gearpick">
  <a class="gp-shot" href="/marine/gear/professional-ship-simulator-context"><span class="gp-tag">Upcoming · hardware-friendly</span><img src="/images/gear/marine/professional-ship-simulator-context.jpg" alt="Professional Ship Simulator (ex-Nautic XP)" loading="lazy"></a>
  <div class="gp-body">
    <span class="gp-eyebrow">Steam Early Access · 2026</span>
    <span class="gp-name"><a href="/marine/gear/professional-ship-simulator-context">Professional Ship Simulator (ex-Nautic XP)</a></span>
    <p class="gp-why">Not hardware — the most hardware-friendly sim on the horizon. Nine axes, 50+ buttons and a rudder deadzone option built for HOTAS/controller rigs mean it's the upcoming title most likely to actually read your cheap repurposed wheel, throttle and button box as real analog inputs. Wishlist it; price is TBD.</p>
    <span class="gp-price">Price TBD · wishlist on Steam</span>
    <span class="gp-actions">
      <a class="gp-review" href="/marine/gear/professional-ship-simulator-context">Spec card</a>
      <a href="https://store.steampowered.com/app/3636930/Professional_Ship_Simulator/" target="_blank" rel="nofollow noopener">Official Steam page</a>
    </span>
  </div>
</aside>

VR sidesteps the hardware problem entirely, though it's a stretch on a strict budget. On a **Meta Quest 3S** (from $349.99 after the April 2026 price change) running MarineVerse Sailing Club (a $29.99 one-time purchase), you "hold" the tiller and sheet with the hand-tracked controllers — no helm to buy, no analog-axis caveat. It's sailing-only, not ship-handling, and it leans entirely on MarineVerse. But it pairs with NauticEd courses, so it straddles game and real sail training. The pricier Quest 3 (512GB, $599.99) runs the same software.

<aside class="gearpick">
  <a class="gp-shot" href="/marine/gear/meta-quest-3-marineverse-vr"><span class="gp-tag">No helm needed</span><img src="/images/gear/marine/meta-quest-3-marineverse-vr.jpg" alt="Meta Quest 3 (MarineVerse VR sailing)" loading="lazy"></a>
  <div class="gp-body">
    <span class="gp-eyebrow">VR sailing · hand-tracked</span>
    <span class="gp-name"><a href="/marine/gear/meta-quest-3-marineverse-vr">Meta Quest 3 / 3S (MarineVerse VR sailing)</a></span>
    <p class="gp-why">The one path that skips the whole hardware problem: hand-tracked controllers become the tiller and sheet, so the headset is the only gear. Sailing-only, and it leans on MarineVerse — but the NauticEd course integration teaches genuine skills. A stretch on a strict budget; the Quest 3S is the cheaper entry.</p>
    <span class="gp-price">~$350 (Quest 3S) + $29.99 app</span>
    <span class="gp-actions">
      <a class="gp-review" href="/marine/gear/meta-quest-3-marineverse-vr">Spec card</a>

    </span>
  </div>
</aside>

## The verdict

The best marine sim setup under $200 is mostly *restraint*. Start free with Bridge Command and a pad you already own — that alone is a real, playable rig. Spend your first real dollars on a **~$70 Saitek throttle quadrant** for engine levers, or — better still if you'll pick up a soldering iron — on a **~$60 BU0836 DIY build** that gives you a true analog helm and twin throttles for less than a single off-the-shelf wheel. Add a **~$80 PXN CB1** for bridge commands if there's room. Treat a racing wheel as an optional stretch that blows the budget, buy the **G29** not the G923 if you do, and *always* confirm the title reads analog steering first — free glue software like JoyToKey is mandatory more often than a wheel is. In marine, the cheapest hardware the game actually reads beats the most expensive rig it refuses to. For most budgets, the smart money stays in your pocket.

## Sources Checked

Source review date: July 2, 2026. Because this bay has almost no marine-specific products, each repurposed item is verified against its manufacturer page and the DIY builds against the open-source sim they're designed for — rather than repeating box specs. Prices are 2026 figures where a live source confirmed them, and flagged as "check current" otherwise.

Free sim + DIY references: [Bridge Command (free, open source, v5.9)](https://www.bridgecommand.co.uk/), [Bridge Command download page](https://www.bridgecommand.co.uk/Download), [Bridge Command "Making a controller" DIY build guide](https://www.bridgecommand.co.uk/Doc/Current/makethrottle.html), [Bridge Command source on GitHub](https://github.com/bridgecommand/bc), [Leo Bodnar BU0836A interface (£33)](https://www.leobodnar.com/shop/index.php?main_page=product_info&products_id=204), [Leo Bodnar BU0836X interface (£59.99, solderless)](https://www.leobodnar.com/shop/index.php?main_page=product_info&products_id=180), [Leo Bodnar BBI-32 button-box interface](https://www.leobodnar.com/shop/index.php?main_page=product_info&products_id=205), [ArduinoJoystickLibrary](https://github.com/MHeironimus/ArduinoJoystickLibrary).

Official product pages: [Logitech G Saitek Pro Flight Throttle Quadrant ($69.99)](https://www.logitechg.com/en-us/shop/p/flight-simulator-throttle-quadrant), [Thrustmaster T.16000M FCS](https://www.thrustmaster.com/en-us/products/t-16000m-fcs/), [Meta Quest pricing update (April 2026)](https://www.meta.com/blog/update-meta-quest-pricing/), [MarineVerse Sailing Club ($29.99)](https://www.meta.com/experiences/marineverse-sailing-club/2465388190184288/).

Upcoming + related titles: [Professional Ship Simulator on Steam (ex-Nautic XP)](https://store.steampowered.com/search/?term=professional+ship+simulator), [Sailaway III on Steam](https://store.steampowered.com/app/2631870/Sailaway_III/).

Free glue-software stack (paraphrased in our voice): the standard mapping tools that make keyboard-only titles read analog gear — [vJoy](https://sourceforge.net/projects/vjoystick/), [JoyToKey (free shareware)](https://joytokey.net/en/), and [Xpadder](https://www.xpadder.com/). Community wisdom — the Bridge Command builders' string-friction trick for DIY throttle levers — is paraphrased from the official build guide above, not quoted.
