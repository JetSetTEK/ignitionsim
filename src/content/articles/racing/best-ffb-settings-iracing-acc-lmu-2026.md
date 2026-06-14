---
title: "Best FFB Settings 2026: iRacing, ACC and Le Mans Ultimate Dialed In"
description: "The best FFB settings for iRacing, ACC and Le Mans Ultimate in 2026 — start values by torque, how to kill clipping, and a per-sim tuning workflow."
bay: "racing"
type: "how-to"
primaryKeyword: "best ffb settings sim racing"
author: "Robert Pruitt"
publishDate: 2026-06-14
heroImage: "/images/racing/best-ffb-settings-iracing-acc-lmu-2026.jpg"
heroAlt: "Hands on a carbon GT wheel lit by amber telemetry glow, force feedback in motion"
excerpt: "One tuning workflow, three sims. Start values by torque tier, the clipping fix that actually works, and the per-game settings that matter most."
featured: true
readingTime: 11
faqs:
  - q: "What FFB gain should I start at for a direct-drive wheel?"
    a: "Start a 5-10Nm base around 65-70% gain in iRacing and 55-65% in ACC; a 10Nm+ base around 60-65% in iRacing and 50-55% in ACC. Then lower until the in-game force meter rarely hits red. Those are starting points, not destinations — every car clips differently."
  - q: "Why does my wheel feel like it hits a wall mid-corner?"
    a: "That flat, dead 'wall' is clipping: the game is asking for more force than your motor can produce, so detail above the ceiling is lost. Lower your in-game gain in 5% steps until the peaks feel dynamic again instead of slamming into a hard stop."
  - q: "Should I use my wheelbase software or the in-game sliders?"
    a: "Set your base software once to a neutral, full-strength baseline (100 percent, minimal filtering) and do almost all your tuning in-game. The sim knows the physics; per-game gain and smoothing are where the real feel lives. Base-side filters like damping and interpolation are last-mile polish."
  - q: "Is iRacing's 360Hz MOZA mode worth turning on?"
    a: "Yes if you own a MOZA base and run iRacing — the 360Hz native mode (added in 2025 Season 3) carries higher-resolution force data than the standard DirectInput path, so curbs and rapid load changes feel sharper. Toggle it in the MOZA settings and A/B test; most drivers keep it on."
related:
  - "how-to-fix-ffb-clipping-direct-drive-2026"
  - "best-wheel-for-iracing-2026"
  - "moza-vs-fanatec-vs-simagic"
---

Force feedback is the only sense a sim gives you that a screen can't. Get it wrong and a 20Nm base feels like a numb arcade toy; get it right and a 5Nm entry wheel will out-inform a misconfigured flagship. The problem is that "best FFB settings" gets searched a hundred times a day and answered with a hundred different number salads, most of them copy-pasted between brands and sims that handle force completely differently.

I'm going to give you one workflow instead. The same five-step process tunes any direct-drive base on any of the big three sims — **iRacing**, **Assetto Corsa Competizione**, and **Le Mans Ultimate** — and then I'll hand you honest starting numbers for each. Numbers beat adjectives, but only if you understand what the numbers are doing.

## The one rule that fixes 80% of bad FFB: stop clipping

Clipping is when the game requests more torque than your motor can physically deliver. Everything above that ceiling gets flattened to maximum — so the most important moments (the snap of oversteer, the edge of front grip) arrive as a dead, identical wall instead of a rising signal. You are literally throwing away the data you race by.

Every sim worth running shows you this. **iRacing** has a built-in FFB meter — when the bar parks in the red and stays there, you're clipping. **ACC** exposes the steering-torque graph in the Analyze tab of a replay; a line that flatlines at the top is clipping. **LMU** behaves the same — if the wheel hits a hard, repeatable wall under load, the signal has maxed out.

The fix is always the same direction: **lower the in-game gain until the peaks breathe.** You want the meter brushing the top only on genuine impacts — big curbs, a hard lockup — not droning in the red through every fast corner.

## The five-step tuning workflow (works on any base, any sim)

1. **Neutralize the base software.** In Pit House (MOZA), Fanatec App / FanaLab, or SimPro (Simagic), set overall strength to 100% and strip filtering back to near-zero — no heavy damping, no inertia, minimal interpolation. The base is now an honest amplifier. You tune in-game from here.
2. **Set rotation to the game's control.** Use the "use game-controlled rotation / auto" option wherever it exists so each car gets its correct lock. Manual 540° everywhere will make formula cars twitchy and trucks vague.
3. **Pick a clipping-test car and track.** A GT3 around a circuit with one big curb is perfect. Drive five laps watching the force meter.
4. **Walk the gain down in 5% steps** until the meter only flashes red on real impacts. That gain number is your foundation — write it down per car class.
5. **Add filtering last, sparingly.** A touch of smoothing tames notchy curbs; a little damping calms a nervous on-center. These are seasoning, not the meal. Over-filter and you sand off the road.

That's it. Everything below is just the right starting numbers so step 4 takes three laps instead of thirty.

<div class="callout tip">
  <div class="ct">// Pro tip</div>
  <p>Write your final gain down per car class, not per sim. A GT3 and a heavy LMP clip at completely different gains on the same base — the prototype will drown in red at the number that's perfect for the GT3. One number for "my base" is the setup that feels great in one car and broken in the next.</p>
</div>

## Starting values by torque tier

These are conservative starting points — the highest gain where most cars stay clean. Always verify against the meter; a heavy LMP or a no-power-steering classic will clip lower than a GT3.

| Sim | 5-10Nm base (e.g. MOZA R5/R9, CSL DD) | 10Nm+ base (e.g. R12, Alpha Evo, ClubSport DD) |
|-----|---------------------------------------|-----------------------------------------------|
| **iRacing** | Strength ~65-70% (use Auto then trim) | ~60-65%, Linear mode ON |
| **ACC** | Gain ~55-65%, MinForce ~3-5% | Gain ~50-55%, MinForce ~2-4% |
| **Le Mans Ultimate** | FFB Strength ~90%, Smoothing 3-6 | FFB Strength ~80-90%, Smoothing 2-5 |

**Bold takeaway:** stronger bases want *lower* gain percentages, not higher. A 12Nm base at 55% can still out-punch an 8Nm base at 75% — and it'll have headroom left for the spikes instead of clipping into them.

<aside class="gearpick">
  <a class="gp-shot" href="/racing/gear/moza-r12"><span class="gp-tag">Easiest to tune</span><img src="/images/gear/racing/moza-r12.jpg" alt="MOZA R12 direct-drive wheelbase" loading="lazy"></a>
  <div class="gp-body">
    <span class="gp-eyebrow">Direct-drive base · 12Nm, Pit House</span>
    <span class="gp-name"><a href="/racing/gear/moza-r12">MOZA R12</a></span>
    <p class="gp-why">If you're picking a base to live this tuning workflow on, the R12 makes it painless: Pit House is the cleanest software for neutralizing filters to a 100% baseline, and 12Nm gives enough headroom that a sane in-game gain rarely clips. The 360Hz iRacing mode is the cherry on top.</p>
    <span class="gp-price">~$429</span>
    <span class="gp-actions">
      <a class="gp-review" href="/racing/gear/moza-r12">Full review ▸</a>
      <a class="gp-buy" href="https://www.amazon.com/s?k=MOZA+R12+wheelbase&tag=ignitionsim-20" target="_blank" rel="sponsored nofollow noopener">Check price on Amazon ↗</a>
    </span>
  </div>
</aside>

## iRacing: Linear, Auto, and the 360Hz wrinkle

iRacing is the cleanest of the three to tune because its physics output is honest and its meter is excellent. Two specifics matter:

- **Run "Linear mode" (disable the "reduce force when parked" / strength-curve options) on any DD base.** Linear means the wheel reports torque 1:1 with the physics — no hidden compression. It feels heavier at first; that weight is information, not error.
- Use the **Auto** strength button to get a per-car ballpark, then trim down 5-10% by hand. Auto tends to leave a hair of clipping on curb-heavy cars.
- If you own a **MOZA base, turn on iRacing's 360Hz mode** (added in the 2025 Season 3 update via MOZA's native API, not DirectInput). It pipes higher-resolution force data — curbs and rapid load swings get noticeably crisper. You can disable it via the `loadMozaAPI=0` switch if it ever misbehaves, but most people leave it on.

## ACC: the most filter-sensitive of the three

ACC's force feedback is gorgeous when tuned and mushy when not. The big levers:

- **Gain** sets overall strength — keep it under the clip line.
- **Min Force** lifts the tiniest forces above your base's deadzone so on-center isn't numb. DD bases need very little — 2-5%. Crank it and the wheel buzzes constantly.
- **Dynamic Damping** adds parking-lot weight; leave it low on DD or the wheel feels glued.
- ACC also offers **per-car torque multipliers.** If one car clips badly while the rest feel right, drop *that car's* multiplier instead of nuking your global gain. Surgical beats sledgehammer.

## Le Mans Ultimate: strong baseline, then back off

LMU (built on the rFactor 2 engine) responds well to a strong baseline that you then trim:

- Start **FFB Strength near 90%** and drop toward 80% if a sub-10Nm base clips.
- **Increase Smoothing** a few clicks to soften brutal curb spikes — LMU's curbs are violent out of the box.
- **MOZA owners:** turn **Hands-Off Protection OFF** in Pit House. It's known to bug out and cut LMU's FFB mid-corner — a genuinely dangerous-feeling dropout that people spend hours blaming on the game.

## What the community gets right (and wrong)

The community is dead right that **clipping is the #1 mistake** and that the in-game force meter is the truth-teller — that's hard-won consensus, not opinion. They're also right that **chasing other people's exact numbers is a trap**: a setting that's perfect on someone's R12 on a different rig at a different gain will clip on yours.

Where the forums go wrong: the endless **"more strength = more realism"** myth. It doesn't. Past the clip point, more strength deletes detail. The other trap is **over-filtering** — stacking damping, friction, inertia and interpolation until the wheel feels like stirring wet cement, then concluding the base is "dead." Strip filters back to near-zero and most "dead" bases come alive.

## Who should skip the deep tune

If you're on a gear or belt wheel, or a sub-5Nm bundle you'll replace within months, don't agonize: set the in-game gain so nothing clips, add a touch of smoothing, and go race. The marginal lap time in micro-tuning a starter wheel is smaller than the time you'll find just driving more. Save the obsession for when you're on a base worth obsessing over — and when you get there, run it through [the Rig Configurator](/racing/configurator) to sanity-check that your pedals and rig aren't the actual weak link.

## The verdict

There is no magic settings sheet, and anyone selling you one for your exact base is guessing. The real "best FFB settings" are a *process*: neutralize the base, tune in-game, walk the gain down until the meter stops drowning in red, and add filtering only as polish. Do that once per sim and you'll extract more feel from a mid-tier base than most people get out of a flagship. If you're still shopping for that base, my [best wheel for iRacing guide](/racing/best-wheel-for-iracing-2026) and the [MOZA vs Fanatec vs Simagic ecosystem breakdown](/racing/moza-vs-fanatec-vs-simagic) are the next stops — and if your wheel is already maxing out and feeling flat, read the dedicated [clipping fix](/racing/how-to-fix-ffb-clipping-direct-drive-2026) before you blame the hardware.
