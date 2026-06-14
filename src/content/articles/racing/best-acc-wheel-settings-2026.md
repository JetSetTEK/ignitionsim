---
title: "Best ACC Wheel Settings 2026: Per-Base FFB That Actually Works"
description: "The best ACC wheel settings for 2026 — per-base Gain, Min Force and Dynamic Damping values, the Road Effects trick, and the controls.json fix nobody mentions."
bay: "racing"
type: "how-to"
primaryKeyword: "best acc wheel settings"
author: "Robert Pruitt"
publishDate: 2026-06-13
heroImage: "/images/racing/best-acc-wheel-settings-2026.jpg"
heroAlt: "Carbon GT3 wheel rim lit by amber telemetry, Assetto Corsa Competizione FFB in motion"
excerpt: "ACC's force feedback is heavier and more mechanical than any other sim. Here are the per-base start values, the Road Effects rule, and the steering-lock fix that ruins lap times silently."
featured: false
readingTime: 11
faqs:
  - q: "What Gain should I run in ACC for a direct-drive wheel?"
    a: "Start ACC's in-game Gain at 55-65% for a 5-10Nm base and 45-55% for a 12Nm+ base, then lower it until the steering-torque graph in the replay Analyze tab stops flat-lining at the top. ACC's FFB is heavier than AC or iRacing, so it clips at lower Gain numbers than those sims do."
  - q: "What should Min Force be set to in ACC on a direct-drive base?"
    a: "Zero. Min Force exists to overcome the deadzone in cheap gear and belt wheels; a direct-drive motor has no deadzone, so any Min Force above 0 just adds a constant fake weight that masks the lightest, most useful detail. Leave it at 0 on any DD base."
  - q: "Why does ACC oscillate or shake on the straights with my MOZA or Simagic base?"
    a: "ACC's mechanical FFB excites straight-line oscillation on high-torque bases. Add Dynamic Damping (in-game) around 5-10% or your base software's wheel damper around 20-25 on a 12Nm+ unit. It kills the wobble without dulling the cornering signal you actually need."
  - q: "Should Road Effects be high or low in ACC?"
    a: "High. Unlike the original Assetto Corsa, ACC's Road Effects slider amplifies real suspension telemetry rather than canned rumble, so running it at 60-100% gives you genuine surface and kerb information instead of noise. Most drivers land around 70-80%."
related:
  - "best-ffb-settings-iracing-acc-lmu-2026"
  - "how-to-fix-ffb-clipping-direct-drive-2026"
  - "best-wheel-for-iracing-2026"
---

Assetto Corsa Competizione is the most-tuned, most-argued game in sim racing, and most of the advice you'll find is wrong for your hardware. ACC's force feedback is fundamentally different from the original Assetto Corsa, from iRacing, and from rFactor 2 — it's heavier, more mechanical, and it clips at lower numbers than any of them. Copy a Logitech G29 settings table onto a 12Nm direct-drive base and you'll either feel a numb arcade toy or a vibrating mess that flat-lines through every fast corner.

This is an ACC-specific guide. If you want the cross-sim workflow that tunes [iRacing, ACC and Le Mans Ultimate from one process](/racing/best-ffb-settings-iracing-acc-lmu-2026), read that. Here I'm staying inside one game and giving you the per-base numbers, the two settings everyone gets backwards, and the silent controls.json bug that costs lap time without ever announcing itself.

## The two settings everyone gets backwards

Before the numbers, fix the two sliders that ruin more ACC setups than Gain ever does.

**Min Force should be 0 on direct drive.** Min Force (minimum force) injects a constant baseline torque to overcome the mechanical deadzone in gear and belt wheels — the slack where the motor isn't strong enough to move the rim against its own friction. A **direct-drive motor has no deadzone.** The shaft is bolted to the rim. So any Min Force above 0 on a DD base adds a permanent fake weight that drowns out the lightest signals — the exact feather-light front-grip information you need at corner entry. Set it to **0** and leave it there. The only people who should touch Min Force are running a Logitech G29/G923 or an old belt Thrustmaster.

**Road Effects should be HIGH, and this is the opposite of the original AC.** In the first Assetto Corsa, Road Effects was canned rumble — fake texture layered on top, so you turned it down. ACC rebuilt it: the slider now **amplifies real suspension telemetry**, the actual load coming through the virtual chassis. Run it low and you blank out genuine kerb strike and surface change. Run it at **60-100%** (most drivers settle around 70-80%) and the car tells you what the tarmac is doing.

<div class="callout tip">
  <div class="ct">// Pro tip</div>
  <p>If you've ever copied a settings table off a Logitech G29 thread onto your DD base, the Min Force value is the line that ruined your feel. That number exists only to punch through a gear wheel's deadzone — a direct-drive shaft has none, so it just bolts a constant fake weight onto the lightest cues you need. Zero it out and half the "my expensive base feels numb" complaints vanish.</p>
</div>

## Per-base starting values

Set your **wheelbase software to a neutral baseline first** — 100% strength, filters off or minimal — then do the real work in-game. ACC knows the physics; your job is to scale it to your motor without clipping. These are honest start points, not gospel:

| Base (torque) | In-game Gain | Min Force | Dynamic Damping | Wheel Damper (software) |
|---|---|---|---|---|
| **Logitech G29/G923** (gear, ~2.5Nm) | 90-100% | 5-8% | 0% | n/a |
| **Cammus C5 / MOZA R5** (5-5.5Nm) | 60-70% | 0% | 0-5% | 10-15 |
| **Fanatec CSL DD / GT DD Pro** (5-8Nm) | 60-65% | 0% | 0-5% | 10-15 |
| **MOZA R9 / Simagic Evo Sport** (9Nm) | 55-60% | 0% | 5% | 15-20 |
| **MOZA R12 / Simagic Evo / ClubSport DD** (12Nm) | 48-55% | 0% | 5-10% | 20-25 |
| **MOZA R16 / Simagic Evo Pro** (16-18Nm) | 42-50% | 0% | 5-10% | 20-30 |
| **MOZA R21 / Simucube 2 Sport** (21Nm+) | 38-45% | 0% | 10% | 25-30 |

Notice the trend: **the stronger the base, the lower the Gain.** That's not a bug — ACC's physics output is the same regardless of your hardware, so a 21Nm base reaches the clipping ceiling at a far lower Gain percentage than a 5Nm one. A common mistake is running a flagship at 80% "because it can handle it." It can't — you'll just clip everything above the ceiling and throw away the detail you paid for.

## Reading the ACC FFB graph (the part nobody does)

ACC ships with the single best clipping tool in sim racing and almost nobody uses it. Drive a few laps, exit to a replay, open the **Analyze tab**, and look at the steering-torque trace.

- A trace that **rises and falls in dynamic peaks** = healthy. You're using the full range without maxing it.
- A trace that **flat-lines at the top through corners** = clipping. Lower Gain in 3-5% steps until the peaks come back.
- A trace that **barely leaves the centre** = Gain too low; you're losing detail in the noise floor. Raise it.

Tune to the graph, not to a forum post. Five minutes here beats five hours of copy-pasting other people's numbers. This is the same clipping logic from [the direct-drive clipping fix guide](/racing/how-to-fix-ffb-clipping-direct-drive-2026), but ACC hands it to you visually — use it.

## The straight-line oscillation fix

Here's the ACC tax on strong bases: drive a fast straight in a GT3 car on a 12Nm+ unit and the wheel can develop a self-feeding wobble — a left-right oscillation that builds on its own. ACC's heavier, more mechanical FFB excites it more than other sims do.

Two dampers cure it. **Dynamic Damping** (in-game, 5-10%) resists rapid direction changes. Your **base software's wheel damper** (20-25 on a [MOZA R12](/racing/gear/moza-r12) or [Simagic Evo](/racing/gear/simagic-evo), more on bigger bases) does the same at the hardware layer. Add damping a few points at a time until the straight goes quiet — but stop the moment cornering feel starts going syrupy. Damping is a scalpel, not a volume knob. **Who should skip damping entirely:** anyone on a 5-9Nm base. There's not enough torque to oscillate, and damping there just dulls a base that's already light on detail.

<aside class="gearpick">
  <a class="gp-shot" href="/racing/gear/moza-r12"><span class="gp-tag">12Nm reference</span><img src="/images/gear/racing/moza-r12.jpg" alt="MOZA R12 direct-drive wheelbase" loading="lazy"></a>
  <div class="gp-body">
    <span class="gp-eyebrow">Direct-drive base · 12Nm, Pit House</span>
    <span class="gp-name"><a href="/racing/gear/moza-r12">MOZA R12</a></span>
    <p class="gp-why">The base most of this table is written around: at 12Nm, ACC wants ~48-55% Gain and a Pit House wheel damper around 20-25 to silence the straight-line wobble. Strong enough to clip if you over-cook the Gain, which is exactly why the numbers run lower than people expect.</p>
    <span class="gp-price">~$429</span>
    <span class="gp-actions">
      <a class="gp-review" href="/racing/gear/moza-r12">Full review ▸</a>
      <a class="gp-buy" href="https://www.amazon.com/s?k=MOZA+R12+wheelbase&tag=ignitionsim-20" target="_blank" rel="sponsored nofollow noopener">Check price on Amazon ↗</a>
    </span>
  </div>
</aside>

## The silent controls.json bug: steering lock

This is the one that costs lap time without ever feeling wrong. ACC reads your physical wheel's degrees of rotation and maps it to each car's steering ratio. If your **base software is set to 1080° but ACC thinks it's getting 900°** (or vice versa), every input is subtly mis-scaled — the car turns more or less than your hands ask for, and you'll fight it forever without knowing why.

Set your **base software to a fixed value** (most GT3 drivers use 540° matched to the car, or leave the base at 900-1080° and let ACC auto-clamp per car — pick one and be consistent). Then verify in ACC that the on-screen wheel matches your real wheel rotation one-to-one. If you ever rage-quit a setup because "the car just feels off" and the FFB graph looks clean, **check your steering lock before you touch another slider.**

## What the community says

The consensus on the ACC subreddit and OverTake forums has converged on a few hard rules: Min Force 0 on DD is non-negotiable; Road Effects high is the single most underrated change; and the people chasing "magic numbers" almost always have a steering-lock or damping problem they're trying to fix with Gain. The recurring advice to newcomers is blunt — "stop copying tables, open the Analyze tab."

## The verdict

ACC rewards restraint. Set **Min Force to 0**, **Road Effects high**, pick your Gain from the table above as a starting point, and then **tune to the steering-torque graph until it stops clipping.** Add just enough damping to silence straight-line wobble on strong bases and no more. Get those four things right and a humble [Fanatec CSL DD](/racing/gear/fanatec-csl-dd) will feel sharper than a flagship that someone left at 80% Gain.

<aside class="gearpick">
  <a class="gp-shot" href="/racing/gear/fanatec-csl-dd"><span class="gp-tag">Punches above price</span><img src="/images/gear/racing/fanatec-csl-dd.jpg" alt="Fanatec CSL DD wheelbase" loading="lazy"></a>
  <div class="gp-body">
    <span class="gp-eyebrow">Entry DD base · 5-8Nm, PC + Xbox</span>
    <span class="gp-name"><a href="/racing/gear/fanatec-csl-dd">Fanatec CSL DD</a></span>
    <p class="gp-why">The proof that settings beat spec: a humble CSL DD with Min Force at 0, Road Effects high and a clip-free Gain will out-inform a flagship someone left parked at 80%. Set it to ~60-65% Gain in ACC and it never feels like the budget base it is.</p>
    <span class="gp-price">~$350 (base)</span>
    <span class="gp-actions">
      <a class="gp-review" href="/racing/gear/fanatec-csl-dd">Full review ▸</a>
      <a class="gp-buy" href="https://www.amazon.com/s?k=Fanatec+CSL+DD&tag=ignitionsim-20" target="_blank" rel="sponsored nofollow noopener">Check price on Amazon ↗</a>
    </span>
  </div>
</aside>

Hardware still sets the ceiling — a clean 9Nm base with perfect settings out-informs a mis-tuned 21Nm one, but it can't manufacture detail the motor never delivered. If you're still deciding what to run ACC on, [the wheelbase comparison](/racing/best-sim-racing-wheelbases-2026) lays out the tiers, or build a full kit in [the Rig Configurator](/racing/configurator) and dial it in with the numbers above.
