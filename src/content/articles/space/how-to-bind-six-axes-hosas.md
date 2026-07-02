---
title: "How to Bind All Six Axes on a HOSAS (Star Citizen & Elite Dangerous, 2026)"
description: "A practical, no-fluff guide to mapping three rotation and three translation axes across two flight sticks — the standard layout, the twist axis you should disable, per-game setup steps, and where to build your curves so they survive patches."
bay: "space"
type: "how-to"
primaryKeyword: "HOSAS bindings six axes"
author: "Val Chen"
publishDate: 2026-06-13
updatedDate: 2026-07-02
goldStatus: "refresh"
sourceReviewDate: 2026-07-02
revenueTier: "B"
contentCluster: "space"
heroImage: "/images/gear/space/vkb-gladiator-nxt-evo-space-combat-edition.jpg"
heroAlt: "VKB Gladiator NXT EVO Space Combat Edition stick — one half of a HOSAS pair, the hardware you're about to bind"
excerpt: "Eight analog axes, six ship axes, and one decision that trips up every new HOSAS pilot. Here's the layout that works, the axis to disable, the per-game steps, and where to build your curves so they survive game patches."
featured: false
readingTime: 10
faqs:
  - q: "How do I bind six degrees of freedom with two sticks?"
    a: "Put pitch, yaw, and roll on the right stick and the three thruster axes on the left. Twist on one stick covers the sixth axis, so you never run out of analog inputs. The community-standard layout is rotation on the right hand, translation on the left — right rotates, left translates."
  - q: "Should I disable twist on my right stick?"
    a: "Many pilots disable twist on the aiming stick to prevent accidental yaw while keeping twist on the off-hand stick for a translation axis. When you tilt hard for pitch and roll in a dogfight, your wrist twists slightly on its own, and that parasitic twist becomes reticle drift you can't feel. Moving yaw off the right twist removes the most common source of that drift."
  - q: "Which stick handles strafe?"
    a: "The left (off-hand) stick handles all three translation axes — forward/back, lateral strafe, and vertical strafe. Map left/right tilt to lateral strafe, forward/back tilt to forward thrust, and the left stick's twist or a slider to vertical strafe."
  - q: "Does Elite Dangerous detect two sticks automatically?"
    a: "Yes. Elite Dangerous sees each stick plugged into a separate USB port as its own device and lets you bind axes from either one directly in Options > Controls. Star Citizen also supports two devices but does less hand-holding, so expect more manual binding work in its advanced keybinding menu."
  - q: "Where should I build my response curves — in the game or the stick software?"
    a: "Build them in your stick's software (VKBDevCfg for VKB, VPC for Virpil, SimAppPro for WinWing). A curve baked into the hardware rides along at the device level: it survives game patches, transfers between titles, and applies before the game ever sees the axis. Star Citizen's per-axis sensitivity in particular can get shuffled across patches, so a hardware curve is the durable choice."
  - q: "What about forward thrust if my left stick self-centers?"
    a: "A self-centering left stick springs forward thrust back to zero, which is fine for combat but tiring for long cruises. Either bind cruise to a non-centering control, use a detented off-hand grip like the VKB Omni-Throttle, or keep a separate throttle for set-and-forget speed. In Star Citizen's NAV mode for traversal this matters more than in a dogfight."
related:
  - "hosas-vs-hotas"
  - "vkb-vs-virpil-vs-winwing-space-sticks-2026"
  - "best-beginner-hosas-under-300"
---

Verdict first: **put rotation on the right stick, translation on the left, and disable twist on the aiming hand so wrist wobble never becomes accidental yaw.** That single layout covers all six axes of a spaceship with room to spare, it takes about fifteen minutes to set up, and once it's in your hands it never changes. Elite Dangerous makes it easy — it auto-detects two sticks and you bind each axis directly. Star Citizen makes you work for it in an advanced keybinding menu but rewards the analog off-hand strafe more. Build your binds first, then build your curves in the *stick's* software, not the game's, so they survive patches.

You bought two sticks. You plugged them in. Now you're staring at a controls menu with hundreds of bindable actions and no idea where pitch, yaw, roll, and three flavors of strafe are supposed to live. This is the moment most new **HOSAS** pilots quietly give up and go back to a gamepad. Don't — the layout is solved, and the rest of this guide is just filling it in. If you're still deciding whether two sticks is even right for you, read [HOSAS vs HOTAS](/space/hosas-vs-hotas) first; this guide assumes the hardware is already on your desk. If you haven't bought yet, the [beginner HOSAS under $300](/space/best-beginner-hosas-under-300) covers the cheapest credible pair.

<div class="shotgrid">
  <figure><a href="/space/gear/vkb-gladiator-nxt-evo-space-combat-edition"><img src="/images/gear/space/vkb-gladiator-nxt-evo-space-combat-edition.jpg" alt="VKB Gladiator NXT EVO Space Combat Edition joystick" loading="lazy"></a><figcaption>VKB Gladiator — the right (aiming) hand</figcaption></figure>
  <figure><a href="/space/gear/vkb-gladiator-nxt-evo-omni-throttle"><img src="/images/gear/space/vkb-gladiator-nxt-evo-omni-throttle.jpg" alt="VKB Gladiator NXT EVO Omni-Throttle" loading="lazy"></a><figcaption>VKB Omni-Throttle — a non-centering off hand</figcaption></figure>
  <figure><a href="/space/gear/thrustmaster-t16000m-fcs"><img src="/images/gear/space/thrustmaster-t16000m-fcs.jpg" alt="Thrustmaster T.16000M FCS joystick" loading="lazy"></a><figcaption>Thrustmaster T.16000M — ambidextrous, buy two</figcaption></figure>
</div>

## The mental model: right rotates, left translates

A spaceship has six independent axes. Split them by hand.

- **Right stick = rotation.** Pitch, yaw, roll. This is your aiming hand — it points the nose.
- **Left stick = translation.** Forward/back, lateral strafe, vertical strafe. This is your maneuvering hand — it moves the whole ship without turning it.

That's the entire framework. Everything below is just deciding which physical tilt goes to which axis, and resolving the one input you have a surplus of.

## The standard axis map

You have four analog inputs per stick — X tilt, Y tilt, twist, and often a thumb slider or ministick. You need three axes per hand. That's a surplus, which is good: it means you get to *choose* what to drop. Here's the layout the community converged on:

| Physical input | Right stick (aiming) | Left stick (maneuvering) |
|---|---|---|
| X tilt (left/right) | Roll | Lateral strafe |
| Y tilt (forward/back) | Pitch | Forward/back thrust |
| Twist | **Yaw — or disabled** | Vertical strafe |
| Thumb slider / ministick (if present) | Zoom / throttle | Spare or cruise |

The right stick's twist is the famous decision point, and it deserves its own section.

## The one decision: kill twist on the aiming stick

Here's the trap. Your right stick can twist, and twist naturally maps to yaw. But when you're tilting that stick hard for pitch and roll in a dogfight, your wrist *also* twists slightly without you meaning to. That parasitic twist becomes accidental yaw — your reticle drifts off target for reasons you can't feel.

The fix the community swears by: **disable twist on the right stick and move yaw somewhere else.** You have two clean options:

1. **Yaw on the left stick.** Put yaw on the left stick's X tilt and move lateral strafe to a hat or the left twist. Some pilots prefer rotation split across both hands.
2. **Yaw on the right stick's X tilt, roll on twist.** Swap the assignments so the deliberate tilt does yaw and the easier-to-control twist does roll, which is less aim-critical.

Either way, the principle holds: **don't let your aiming axis share a control with an accidental motion.** Keep twist on the *left* stick, where it drives a translation axis you're not relying on for fine aim. Hardware helps here — VKB's Gladiator has a self-centering twist you can zero in software, and Virpil's Constellation ALPHA grip has a *lockable* twist axis so you can disable it mechanically on the aiming hand and keep it live on the off hand. This single change is the difference between "my aim drifts and I don't know why" and steady gimbal tracking at range.

<div class="callout forum">
  <div class="ct">// From the forums</div>
  <p>The most common "my HOSAS feels broken" post is a buried double-bind — a default keyboard or stick binding still driving an axis you also mapped to a stick. Both games happily let two inputs fight over one ship axis, and the result is a ship that cheats sideways when you roll. On a pair of T.16000M sticks there's an extra gotcha: the physical hand-switch on each base must be set to opposite positions (one "left," one "right") or Windows enumerates them as the same device and every bind you make on one lands on both. Set the switches, clear every default in the category, then assign your own — that fixes the overwhelming majority of these.</p>
</div>

## A quick decision tree for the twist axis

If you're not sure which of the two twist fixes to use, this is the short version:

- **You aim with the stick and fly stick-only?** Disable right twist, put **yaw on the left stick's X tilt**, and slide lateral strafe onto a hat or the left twist. This is the cleanest for pure two-stick aiming.
- **You aim with relative mouse and fly the sticks for movement?** Twist drift matters less — you can leave **yaw on the right twist** and keep lateral strafe on the left X tilt. Mouse aim forgives the wobble.
- **Your grip has a lockable twist (Virpil ALPHA)?** Lock the right hand's twist in hardware and keep the left hand's live. Best of both — no accidental yaw, full six axes.

There's no universally correct answer; there's only the one that matches how you aim. Pick, fly a week, and adjust.

## Setting it up in Elite Dangerous

Elite detects each stick on its own USB port as a separate device, which makes this the easy game.

1. Open **Options > Controls** and confirm both sticks appear as separate devices.
2. Bind **Pitch** and **Roll** to the right stick's Y and X, and **Yaw** to your chosen control (left stick X if you've disabled right twist).
3. Bind the **Thrust** axes — forward, lateral, vertical — to the left stick's tilts and twist. Prefer flight-thrust mode over binding throttle to twist; a twist throttle fights your strafe hand.
4. In the right stick's device settings, set the **twist (Z) axis** to unbound, or zero its sensitivity, to kill accidental yaw.
5. Sanity-check in a station: roll without yawing, strafe without rotating. If the ship cheats sideways when you roll, you've got a crossed axis or a leftover default.

Elite's community also maintains **[EDRefCard](https://edrefcard.info/)**, a free tool that turns your exported `.binds` file into a printable, color-coded reference of every control — genuinely useful when hundreds of actions blur together.

## Setting it up in Star Citizen

Star Citizen supports two devices too, but it does less hand-holding, so expect more manual work — and there's one 2026 wrinkle worth knowing before you start.

1. In **Options > Keybindings**, switch the view to **Advanced Controls Customization** and find the **Flight - Movement** category.
2. Bind **Pitch / Yaw / Roll** to the right stick, applying the disable-twist principle in the same way.
3. Bind **Strafe Longitudinal / Lateral / Vertical** to the left stick's axes — these are the three translation binds that do the real work in a knife fight.
4. Watch for double-binds. Star Citizen will happily let the same physical axis drive two ship axes, which produces baffling behavior. Clear defaults in the category before you assign.
5. Test in **Arena Commander**, not the persistent universe, so a binding mistake doesn't cost you a ship.

<div class="callout tip">
  <div class="ct">// Pro tip — Master Modes and your binds</div>
  <p>Since Alpha 3.23, Star Citizen splits flight into <strong>SCM</strong> (Standard Control Mode — capped speed, weapons and shields live, where dogfighting happens) and <strong>NAV</strong> (Navigation Mode — faster traversal, weapons and shields off, quantum spool). Your six flight axes bind once and work in both, but the tempo differs: SCM rewards constant analog strafe on the left stick to slide your reticle onto a target, while NAV is a cruise mode where a non-centering forward-thrust control or a kept throttle earns its keep. Bind a comfortable <strong>SCM/NAV toggle</strong> to a thumb button you can hit without leaving either stick — it's the mode switch you'll press most.</p>
</div>

Because Star Citizen leans on an off-hand strafe grip, this is where an analog left stick — versus buttons — pays off most. A button strafe lurches; an analog tilt slides.

## After the binds: tune the curves in the right place

Raw linear axes feel twitchy near center, where fine aim lives. Once your binds are in, the next job is a mild **S-curve** plus a small center deadzone on the aiming stick so long-range tracking holds steady. That's a tuning task, not a binding task — and *where* you build it matters more than the exact numbers.

<div class="callout tip">
  <div class="ct">// Pro tip — build curves in the stick software, not the game</div>
  <p>Build the curve in your stick's config tool — VKBDevCfg for VKB, VPC for Virpil, SimAppPro for WinWing — not in the game. Star Citizen's per-axis sensitivity gets shuffled across patches, and Elite's in-game curve tools are coarse. A curve baked into the hardware rides along at the device level: it survives game updates, transfers between titles, and applies before the game ever sees the axis. In VKBDevCfg the response curve is drawn in the Logical Axes panel (deadzone set under DzLo); a value around a flat 1:1 with a gentle S on the top half is a sane starting point for pitch and yaw. Get the binds right first, tune the feel second.</p>
</div>

## The setup tax nobody warns you about

Binding six axes across two sticks is genuinely a project, not a five-minute job. Budget for three things before you sit down:

- **Handedness and hand-switches.** On ambidextrous sticks (T.16000M) confirm the base switch is set to opposite hands, or the game reads both as one device. On boutique sticks confirm you actually bought one left and one right — two right-hand grips is the single most common HOSAS shopping mistake.
- **Defaults fight you.** Both games ship with keyboard and gamepad defaults still bound to flight axes. A leftover default plus your new stick bind means two inputs on one ship axis. Clear the category first.
- **The overflow of everything else.** Six flight axes are the easy part; power triage, weapon groups, gear, and comms are the hundreds of other binds. A labeled macro panel like the [Elgato Stream Deck XL](/space/gear/elgato-stream-deck-xl) absorbs the overflow so you're not memorizing unmarked switches.

## The buy order (if you're still assembling the rig)

This guide is about binding, but a few hardware choices make the binding vastly easier. In order:

1. **Get a genuinely ambidextrous or handed pair.** Twin [T.16000M](/space/gear/thrustmaster-t16000m-fcs) sticks (~$80 each) are the canonical cheap HOSAS because each one reconfigures left or right. Boutique buyers: one dedicated left, one dedicated right.
2. **Pick a stick whose twist you can disable or lock.** A self-centering twist you can zero (VKB Gladiator) or a lockable twist (Virpil ALPHA) makes the disable-twist step a one-click job instead of a fight.
3. **Solve the off-hand throttle question early.** If you want set-and-forget cruise, a non-centering off-hand grip like the [VKB Omni-Throttle](/space/gear/vkb-gladiator-nxt-evo-omni-throttle) (~$149) holds a forward-thrust position instead of springing back — handy for Elite supercruise and SC NAV runs.
4. **Add a Stream Deck for the bind overflow** before you chase a fancier base — the hundreds of non-flight binds hurt more than a spring feel.

<aside class="gearpick">
  <a class="gp-shot" href="/space/gear/thrustmaster-t16000m-fcs"><span class="gp-tag">Easiest to bind</span><img src="/images/gear/space/thrustmaster-t16000m-fcs.jpg" alt="Thrustmaster T.16000M FCS joystick" loading="lazy"></a>
  <div class="gp-body">
    <span class="gp-eyebrow">Ambidextrous HOSAS block · Hall-effect, four axes + twist</span>
    <span class="gp-name"><a href="/space/gear/thrustmaster-t16000m-fcs">Thrustmaster T.16000M FCS</a></span>
    <p class="gp-why">The friendliest stick to bind a first HOSAS on. Genuinely ambidextrous — three removable parts swap it left or right — so two identical units give you the eight analog axes you need for six ship axes, and the base hand-switch is the fix for the twin-stick double-bind gotcha. Four axes including twist means every axis in the standard map has a home. Light and plastic, but the Hall-effect sensors don't drift.</p>
    <span class="gp-price">~$80 each (~$160 the pair)</span>
    <span class="gp-actions">
      <a class="gp-review" href="/space/gear/thrustmaster-t16000m-fcs">Spec card</a>
      <a class="gp-buy" href="https://www.amazon.com/s?k=Thrustmaster+T.16000M+FCS&tag=ignitionsim-20" target="_blank" rel="sponsored nofollow noopener">Check Amazon</a>
    </span>
  </div>
</aside>

<aside class="gearpick">
  <a class="gp-shot" href="/space/gear/vkb-gladiator-nxt-evo-omni-throttle"><span class="gp-tag">Fixes the self-centering off hand</span><img src="/images/gear/space/vkb-gladiator-nxt-evo-omni-throttle.jpg" alt="VKB Gladiator NXT EVO Omni-Throttle" loading="lazy"></a>
  <div class="gp-body">
    <span class="gp-eyebrow">Off-hand controller · multi-axis thrust/strafe, holds position</span>
    <span class="gp-name"><a href="/space/gear/vkb-gladiator-nxt-evo-omni-throttle">VKB Gladiator NXT EVO Omni-Throttle</a></span>
    <p class="gp-why">The answer to step 3 of the buy order. It mounts a Gladiator stick on an omnidirectional adapter, so your off hand strafes on analog axes <em>and</em> holds a cruise position instead of springing back to zero. That solves the "my forward thrust keeps resetting" problem in Elite supercruise and Star Citizen NAV mode, while keeping all three translation axes analog. Shares the Gladiator's magnetic sensors and self-centering twist.</p>
    <span class="gp-price">~$149</span>
    <span class="gp-actions">
      <a class="gp-review" href="/space/gear/vkb-gladiator-nxt-evo-omni-throttle">Spec card</a>
      <a class="gp-buy" href="https://www.amazon.com/s?k=VKB+Gladiator+NXT+EVO+Omni-Throttle&tag=ignitionsim-20" target="_blank" rel="sponsored nofollow noopener">Check Amazon</a>
    </span>
  </div>
</aside>

## Verdict

The layout is not a mystery: **right stick rotates, left stick translates, and you disable twist on the aiming hand** so wrist wobble never becomes accidental yaw. Set it up once, sanity-check it in a station or Arena Commander, and it becomes muscle memory that carries across every ship you fly. Elite makes it easy and auto-detects two devices; Star Citizen makes you work through an advanced menu but rewards the analog off-hand strafe more, especially in SCM combat. Build the binds first, build the curves in your stick's software second so they survive patches, and clear every default before you blame your hardware. If your sticks are sliding around while you test all this, that's a mounting problem worth fixing before you touch your binds — and you can price a complete two-stick rig, mounts included, in [the Rig Configurator](/racing/configurator). For the hardware behind the binds, start with [the best beginner HOSAS under $300](/space/best-beginner-hosas-under-300) or the full [VKB vs Virpil vs WinWing breakdown](/space/vkb-vs-virpil-vs-winwing-space-sticks-2026).

## Sources Checked

Source review date: July 2, 2026. This is a how-to, so we checked current community binding consensus and official game/hardware documentation rather than repeating box specs, and we quote street prices as approximate because boutique stock and pricing swing week to week.

Game + tooling references: [Star Citizen Master Modes explained](https://citizen-history.com/article/starcitizen-mastermodes-explained) (SCM vs NAV, introduced in Alpha 3.23), the [EDRefCard binds-reference generator](https://edrefcard.info/) and its [source repository](https://github.com/richardbuckle/EDRefCard), and the VKB community threads on [response curves and deadzones in VKBDevCfg](http://forum.vkb-sim.pro/viewtopic.php?t=4377).

Community + consensus reads (paraphrased in our voice): the [Elite Dangerous dual-joystick setup discussion](https://steamcommunity.com/app/359320/discussions/0/2144217924396895339/) on axis layout, the T.16000M base hand-switch as the double-bind fix, and avoiding twist-throttle; the recurring [r/starcitizen](https://www.reddit.com/r/starcitizen/) and [r/hotas](https://www.reddit.com/r/hotas/) HOSAS binding threads on the right-rotates/left-translates convention and the disable-twist-on-the-aiming-stick best practice; and the [Frontier forums HOSAS-with-pedals throttle thread](https://forums.frontier.co.uk/threads/dual-stick-hosas-with-pedals-how-do-you-control-your-throttle.401144/) on the self-centering-throttle problem.

**Photo-verification note:** the VKB Gladiator NXT EVO Space Combat Edition, VKB Gladiator NXT EVO Omni-Throttle, and Thrustmaster T.16000M FCS are shown with verified in-house product photos. The Virpil Constellation ALPHA (referenced for its lockable twist) is genuine and current but is kept text-only here until a verified in-house image is sourced — we don't embed images we can't stand behind.
