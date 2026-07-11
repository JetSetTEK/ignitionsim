---
title: "Best FFB Settings 2026: iRacing, ACC and Le Mans Ultimate Dialed In"
description: "The best FFB settings for iRacing, ACC and Le Mans Ultimate in 2026 — starting values by torque, per-sim tuning tables, how to kill clipping, and the tools that find your numbers."
bay: "racing"
type: "how-to"
primaryKeyword: "best ffb settings sim racing"
author: "Duke Alvarez"
publishDate: 2026-06-14
updatedDate: 2026-07-02
sourceReviewDate: 2026-07-02
revenueTier: "B"
contentCluster: "racing"
goldStatus: "refresh"
heroImage: "/images/gear/racing/moza-r12.jpg"
heroAlt: "MOZA R12 direct-drive wheelbase — the kind of base these FFB settings target"
excerpt: "One tuning workflow, three sims. Starting values by torque tier, per-sim settings tables, the clipping fix that actually works, and the telemetry tools that find your numbers."
featured: true
readingTime: 12
faqs:
  - q: "What FFB gain should I start at for a direct-drive wheel?"
    a: "Start conservative and tune down against the clip meter. In iRacing, MOZA's own published in-game Strength is 60 for the R5, 65 for the R9/R12, 80 for the R16 and 90 for the R21. In ACC, most guides start Gain around 50% and walk it down. In Le Mans Ultimate, a sub-10Nm base wants about 90% FFB Strength and a 10-18Nm base 100%. These are documented starting points, not destinations — every car clips differently, so verify against the in-game force meter."
  - q: "Why does my wheel feel like it hits a wall mid-corner?"
    a: "That flat, dead 'wall' is clipping: the game is asking for more force than your motor can produce, so every detail above the ceiling gets flattened to the same maximum. Lower your in-game gain (ACC) or Max Force / Strength (iRacing) in 5% steps until the peaks feel dynamic again instead of slamming into a hard stop."
  - q: "What should Min Force be on a direct-drive base?"
    a: "Zero, or very close to it. Min Force exists to lift the tiniest forces above a belt or gear wheel's mechanical deadzone. Direct-drive bases have no such deadzone, so iRacing, ACC and LMU guides all recommend 0% (or a hair) on DD — crank it and the wheel buzzes with a robotic rattle on the straights. The 3-8% and 10-15% figures you see are for G29/G920/G923-class wheels, not direct drive."
  - q: "Should I use my wheelbase software or the in-game sliders?"
    a: "Set your base software once to a neutral, near-full-strength baseline and do almost all your tuning in-game. The sim knows the physics; per-game gain and smoothing are where the real feel lives. Base-side filters like damping, inertia and interpolation are last-mile polish, not the main event."
  - q: "Is iRacing's 360Hz MOZA mode worth turning on?"
    a: "Yes if you own a MOZA base and run iRacing. Recent iRacing builds added native 360Hz FFB output for MOZA bases and enable it automatically — it carries higher-resolution force data than the old DirectInput path, so curbs and rapid load changes feel sharper. It has also made third-party layers like irFFB no longer mandatory for direct drive."
  - q: "Do I need SimHub, WheelCheck or irFFB to get good FFB?"
    a: "On direct drive, usually not. WheelCheck + irFFB exist to build a linearization LUT that fixes the deadzone on belt and gear wheels — DD bases rarely need it. SimHub is a great telemetry and overlay tool but optional for basic tuning. The one tool you truly need is already built in: the in-game force meter."
related:
  - "how-to-fix-ffb-clipping-direct-drive-2026"
  - "best-wheel-for-iracing-2026"
  - "moza-vs-fanatec-vs-simagic"
---

Verdict first: **the single most important FFB setting in any sim is the one that stops your wheel from clipping.** Everything else — smoothing, min force, damping, inertia, the number your friend swears by — is a rounding error next to it. Clipping is the game asking for more torque than your motor can deliver, and when it happens the most important moments you race by (the snap of oversteer, the edge of front grip) all arrive as the same dead wall. Get the gain below the clip point and a 5Nm entry wheel will out-inform a misconfigured flagship.

Force feedback is the only sense a sim gives you that a screen can't, and "best FFB settings" gets searched a hundred times a day and answered with a hundred different number salads — most copy-pasted between brands and sims that handle force completely differently. So here's one workflow that tunes any direct-drive base on any of the big three — **iRacing**, **Assetto Corsa Competizione**, and **Le Mans Ultimate** — plus honest, sourced starting numbers for each. Numbers beat adjectives, but only if you understand what they're doing.

## What is clipping, and why it's the only rule that really matters

Clipping is when the game requests more torque than your motor can physically deliver. Everything above that ceiling gets flattened to maximum — so the peaks you actually need arrive as a dead, identical wall instead of a rising signal. You are literally throwing away the data you race by.

Every sim worth running shows you this:

- **iRacing** has a built-in FFB meter. When the bar parks in the red and stays there, you're clipping. iRacing's own tuning revolves around a **Max Force** telemetry value — the point where your hardware maxes out — and the [Auto](https://simracingcockpit.gg/iracing-ffb-settings/) button sets it per car after a clean lap.
- **ACC** exposes a steering-torque graph in the Analyze tab of a replay. A line that flatlines at the top is clipping.
- **LMU** behaves the same — if the wheel hits a hard, repeatable wall under load, the signal has maxed out.

The fix is always the same direction: **lower the in-game gain until the peaks breathe.** You want the meter brushing the top only on genuine impacts — big curbs, a hard lockup — not droning in the red through every fast corner.

<div class="callout tip">
  <div class="ct">// Pro tip</div>
  <p>Write your final gain down per car class, not per sim. A GT3 and a heavy LMP clip at completely different gains on the same base — the prototype will drown in red at the number that's perfect for the GT3. One number for "my base" is the setup that feels great in one car and broken in the next.</p>
</div>

## The five-step tuning workflow (works on any base, any sim)

1. **Neutralize the base software.** In Pit House (MOZA), the Fanatec App / FanaLab, or Simagic's software, set overall strength to near-100% and strip filtering back toward zero — no heavy damping, no inertia, minimal interpolation. The base is now an honest amplifier. You tune in-game from here.
2. **Set the torque ceiling to your real hardware.** In iRacing this is **Wheel Force**; in LMU it's **Steering Torque Capability**. Set it to your base's actual peak Nm — 12 for an R12, ~17 for a Simucube 2 Sport, ~18 for a ClubSport DD+ or Alpha Evo Pro. This is a *safety ceiling and scaling reference*, not a strength dial. Inflating it doesn't make the wheel stronger; it just removes the safety margin and invites a violent crash spike.
3. **Set rotation to the game's control.** Use "game-controlled / auto" rotation wherever it exists so each car gets its correct lock.
4. **Walk the gain down in 5% steps** until the meter only flashes red on real impacts. In iRacing, map the **Auto** button and hit it after two clean laps in every new car — the most repeated iRacing mistake is never doing that. That gain/Max Force number is your foundation. Write it down per car class.
5. **Add filtering last, sparingly.** A touch of smoothing tames notchy curbs; a little damping calms a nervous on-center. These are seasoning, not the meal. Over-filter and you sand off the road.

That's it. Everything below is the right starting numbers so step 4 takes three laps instead of thirty.

## Starting values by torque tier

These are conservative starting points — the highest gain where most cars stay clean. Always verify against the meter; a heavy LMP or a no-power-steering classic will clip lower than a GT3. Every number here is a *documented starting range*, attributed in the [sources below](#sources-checked), not a magic answer.

| Sim | 5-10Nm base (e.g. MOZA R5/R9, CSL DD) | 10-18Nm base (e.g. R12, ClubSport DD+, Alpha Evo Pro) |
|-----|---------------------------------------|-----------------------------------------------|
| **iRacing** | Wheel Force = base Nm · Strength ~60-65 (MOZA) · Auto per car | Wheel Force = base Nm · Strength ~65-80 (MOZA) · trim via Auto |
| **ACC** | Gain ~50% start, walk down · MinForce 0% (DD) | Gain ~50% start, walk down · MinForce 0% (DD) |
| **Le Mans Ultimate** | STC = base Nm · FFB Strength ~90% · Smoothing 0 | STC = base Nm · FFB Strength 100% · Smoothing 0 |

**Bold takeaway:** stronger bases want the *same or lower* gain percentages, not higher — plus more headroom for the spikes. A 12Nm base at a sane gain can out-punch an 8Nm base run near its ceiling, precisely because it isn't clipping into every corner.

<aside class="gearpick">
  <a class="gp-shot" href="/racing/gear/moza-r12"><span class="gp-tag">Easiest to tune</span><img src="/images/gear/racing/moza-r12.jpg" alt="MOZA R12 direct-drive wheelbase" loading="lazy"></a>
  <div class="gp-body">
    <span class="gp-eyebrow">Direct-drive base · 12Nm, Pit House</span>
    <span class="gp-name"><a href="/racing/gear/moza-r12">MOZA R12</a></span>
    <p class="gp-why">If you're picking a base to live this workflow on, the R12 makes it painless. MOZA publishes its own iRacing numbers (Strength 65, FFB Intensity 100%, Road Sensitivity 10), Pit House is the cleanest software for neutralizing filters, and 12Nm gives enough headroom that a sane in-game gain rarely clips. The native 360Hz iRacing mode is the cherry on top.</p>
    <span class="gp-price">~$429 (12Nm)</span>
    <span class="gp-actions">
      <a class="gp-review" href="/racing/gear/moza-r12">Spec card</a>

    </span>
  </div>
</aside>

## iRacing: Wheel Force, Auto, Linear, and the 360Hz wrinkle

iRacing is the cleanest of the three to tune because its physics output is honest and its meter is excellent. The specifics that matter:

- **Set Wheel Force to your base's real peak Nm** and leave it there. It's the safety ceiling, not a power dial — [SimRacingCockpit](https://simracingcockpit.gg/iracing-ffb-settings/) is blunt that setting 25Nm on a 12Nm base just removes the crash-spike safety margin.
- **Run Linear Mode ON** on any DD base. Linear means the wheel reports torque 1:1 with the physics — no hidden low-end boost. It feels heavier at first; that weight is information.
- **Min Force 0%, Damping 0%** on direct drive. There's no mechanical deadzone to compensate for; non-zero Min Force just adds a robotic rattle on straights.
- **Map the Auto button and use it every new car.** After two clean laps it calibrates Max Force to that car; GT3s typically settle around 35-50Nm post-calibration regardless of base strength. Then trim 5-10% by hand if a curb-heavy car still nips the red.
- **MOZA owners:** recent iRacing builds added **native 360Hz** FFB for MOZA bases and enable it automatically. It pipes higher-resolution force data — curbs and rapid load swings get noticeably crisper — and it's why irFFB is no longer mandatory for DD.

MOZA's own published iRacing starting points, per base:

| MOZA base | In-game Strength | Pit House FFB Intensity | Natural Inertia | Wheel Damper |
|-----------|------------------|--------------------------|-----------------|--------------|
| R5 (5.5Nm) | ~60 | 100% | 200% | 35% |
| R9 / R12 | ~65 | 100% | 200% | 35% |
| R16 | ~80 | 100% | 200% | 30% |
| R21 | ~90 | 80% | 150% | 35% |

*Road Sensitivity ~10 across the range; Linear Mode On. Source: [MOZA's official iRacing settings guide](https://us.mozaracing.com/blogs/blog/moza-ffb-settings-for-iracing-r5-r9-r12-r16-and-r21).*

## ACC: the most filter-sensitive of the three

ACC's force feedback is gorgeous when tuned and mushy when not. The big levers:

- **Gain** sets overall strength. Most guides start around **50%** and walk it down under the clip line — watch the steering-torque graph in a replay's Analyze tab and pull Gain back until the top stops flatlining.
- **Min Force** lifts the tiniest forces above a wheel's deadzone. On direct drive, keep it at **0%** — it's a belt/gear crutch (3-8% there). Crank it on DD and the wheel buzzes constantly.
- **Dynamic Damping** adds parking-lot weight; leave it low or 0 on DD or the wheel feels glued. It's the setting to nudge in small steps, never big ones.
- ACC offers **per-car torque multipliers.** If one car clips badly while the rest feel right, drop *that car's* multiplier instead of nuking your global Gain. Surgical beats sledgehammer.

| ACC setting | Direct drive | Belt / gear |
|-------------|--------------|-------------|
| Gain | ~50% start, walk down to clip line | ~50% start, walk down |
| Min Force | 0% | 3-8% |
| Dynamic Damping | 0% (nudge up in tiny steps) | low |
| Per-car multiplier | drop only the offending car | drop only the offending car |

## Le Mans Ultimate: strong ceiling, honest strength, low smoothing

LMU is built on the rFactor 2 engine and responds well to a strong ceiling that you then tune with FFB Strength. [RaceControl's DD guide](https://news.racecontrol.gg/hardware/le-mans-ultimate-ffb-settings-for-dd-bases/) lays out concrete numbers:

- **Steering Torque Capability = your base's peak Nm** (10Nm base → 10, 18Nm base → 18). Same ceiling logic as iRacing's Wheel Force.
- **FFB Strength by torque:** a sub-10Nm base wants ~**90%** to prevent clipping; a **10-18Nm** base sits at **100%**; above 18Nm it's subjective, roughly 60-100%.
- **Smoothing 0** on direct drive — higher values filter out the tyre-slip detail you need. (SimRacingCockpit notes DD wants 0-2 max.)
- **Min Torque 0%** on any DD base above ~8-10Nm.
- **Collision Strength 100%** (down from the 150% default) so a crash doesn't rip your arms off.
- **Per class:** LMP2 can drop to ~90% Strength on a low-Nm base; Hypercars benefit from Steering Torque Sensitivity ~105% for low-speed feel.

| LMU setting | Recommended (DD) |
|-------------|------------------|
| Steering Torque Capability | = base peak Nm |
| FFB Strength (<10Nm) | ~90% |
| FFB Strength (10-18Nm) | 100% |
| FFB Strength (>18Nm) | 60-100% (subjective) |
| Smoothing | 0 (0-2 max) |
| Min Torque | 0% |
| Collision Strength | 100% |

<div class="callout forum">
  <div class="ct">// From the forums</div>
  <p>The recurring LMU thread nobody wants to believe: the "dropout" that cuts your wheel dead mid-corner usually isn't the game. On MOZA bases it's <strong>Hands-Off Protection</strong> firing by mistake — turn it OFF in Pit House. And after the March 2026 Studio 397 V1.3 update broke Pit House's built-in "LMU Preset," a lot of R5-R21 owners chasing "notchy, dead FFB" were fighting a broken preset, not a broken base. Build your LMU settings by hand instead of trusting that preset.</p>
</div>

<aside class="gearpick">
  <a class="gp-shot" href="/racing/gear/simucube-2-sport"><span class="gp-tag">Smoothness reference</span><img src="/images/gear/racing/simucube-2-sport.jpg" alt="Simucube 2 Sport direct-drive wheelbase" loading="lazy"></a>
  <div class="gp-body">
    <span class="gp-eyebrow">Direct-drive base · 17Nm</span>
    <span class="gp-name"><a href="/racing/gear/simucube-2-sport">Simucube 2 Sport</a></span>
    <p class="gp-why">If your "dead" FFB is actually the base and not the settings, this is the reference for what zero-cogging, ripple-free feel is supposed to be. Set Wheel Force / STC to 17Nm, run True Drive near neutral, and let iRacing and LMU do the talking. It's the smoothness yardstick the others get measured against.</p>
    <span class="gp-price">~$1,199 (17Nm)</span>
    <span class="gp-actions">
      <a class="gp-review" href="/racing/gear/simucube-2-sport">Spec card</a>

    </span>
  </div>
</aside>

## The telemetry tools — and which you actually need

- **The in-game force meter** (iRacing) and **replay Analyze graph** (ACC) are the only tools you truly need. Free, built in, and the source of truth for clipping.
- **WheelCheck + irFFB** build a linearization LUT to fix a wheel's deadzone. This is a **belt/gear** fix (G29/G920/G923 territory) — direct-drive bases rarely benefit, and on DD you generally skip it entirely.
- **SimHub** is excellent for telemetry dashboards and clipping overlays if you want a live readout, but it's optional. Don't let a tool-collecting rabbit hole replace three laps of walking the gain down while watching the meter.

## What the community gets right (and wrong)

The community is dead right that **clipping is the #1 mistake** and that the in-game force meter is the truth-teller — that's hard-won consensus, not opinion. They're also right that **chasing other people's exact numbers is a trap**: a setting perfect on someone's R12 on a different rig will clip on yours.

Where the forums go wrong: the endless **"more strength = more realism"** myth. It doesn't. Past the clip point, more strength deletes detail. The other trap is **over-filtering** — stacking damping, friction, inertia and interpolation until the wheel feels like stirring wet cement, then concluding the base is "dead." Strip filters back toward zero and most "dead" bases come alive.

## Common mistakes that ruin good FFB

- **Setting Wheel Force / STC above your hardware's Nm.** It doesn't add strength — it deletes the safety ceiling and invites a crash spike that can hurt you.
- **Non-zero Min Force on direct drive.** That's a belt/gear fix. On DD it adds a constant robotic rattle. Keep it at 0.
- **Over-damping.** Dynamic Damping (ACC), Wheel Damper (Pit House) and their cousins are polish. Big values glue the wheel and hide the road; nudge them in tiny steps or leave them alone.
- **Trusting a broken software preset.** The March 2026 LMU-Preset breakage in MOZA Pit House sent people chasing "notchy" FFB that was the preset's fault, not the base's — build settings by hand and A/B test.
- **Leaning on telemetry tools you don't need.** WheelCheck/irFFB LUTs are a belt/gear solution; installing them on a DD base to fix "flat" feel is usually solving the wrong problem — you're clipping, and the meter would have told you.

## Who should skip the deep tune

If you're on a gear or belt wheel, or a sub-5Nm bundle you'll replace within months, don't agonize: set the in-game gain so nothing clips, add a touch of smoothing, and go race. The lap time in micro-tuning a starter wheel is smaller than the time you'll find just driving more. Save the obsession for a base worth obsessing over — and when you get there, run it through [the Rig Configurator](/racing/configurator) to sanity-check that your pedals and rig aren't the actual weak link.

## The verdict

There is no magic settings sheet, and anyone selling you one for your exact base is guessing. The real "best FFB settings" are a *process*: neutralize the base, set the ceiling to your true Nm, tune in-game, walk the gain down until the meter stops drowning in red, and add filtering only as polish. Do that once per sim and you'll extract more feel from a mid-tier base than most people get out of a flagship. If you're still shopping for that base, my [best wheel for iRacing guide](/racing/best-wheel-for-iracing-2026) and the [MOZA vs Fanatec vs Simagic ecosystem breakdown](/racing/moza-vs-fanatec-vs-simagic) are the next stops — and if your wheel is already maxing out and feeling flat, read the dedicated [clipping fix](/racing/how-to-fix-ffb-clipping-direct-drive-2026) before you blame the hardware.

## Visual Setup Maps

![What clipping looks like on the meter](/images/infographics/racing/best-ffb-settings-iracing-acc-lmu-2026-clipping-explainer.png)

![Set the ceiling to your real Nm](/images/infographics/racing/best-ffb-settings-iracing-acc-lmu-2026-per-sim-ceiling-map.png)

## Sources Checked

Source review date: July 2, 2026. Every number in this guide is a documented **starting range** from the sources below, verified against the in-game force meter — not an authoritative "correct" setting. Force feedback is per-base, per-car, per-rig and per-driver.

Manufacturer + sim official: [MOZA official iRacing settings (R5-R21)](https://us.mozaracing.com/blogs/blog/moza-ffb-settings-for-iracing-r5-r9-r12-r16-and-r21), [MOZA Pit House FFB guide](https://mozaracing.com/blogs/blog/moza-pit-house-force-feedback-settings-guide), [iRacing controller setup & calibration](https://support.iracing.com/support/solutions/articles/31000133335-controller-setup-and-calibration), [MOZA iRacing support](https://support.mozaracing.com/en/support/solutions/articles/70000628472-iracing).

Per-sim settings guides (paraphrased in our voice): [SimRacingCockpit iRacing FFB](https://simracingcockpit.gg/iracing-ffb-settings/), [Driver61 iRacing FFB setup](https://driver61.com/sim-racing/iracing-force-feedback-setup/), [Coach Dave — ACC force feedback](https://coachdaveacademy.com/tutorials/how-to-set-up-force-feedback-for-acc/), [SimRacingSetup ACC FFB](https://simracingsetup.com/assetto-corsa/acc-best-force-feedback-settings-xbox-ps4/), [RaceControl — LMU FFB for DD bases](https://news.racecontrol.gg/hardware/le-mans-ultimate-ffb-settings-for-dd-bases/), [SimRacingCockpit LMU wheel settings](https://simracingcockpit.gg/lmu-wheel-settings/), [Coach Dave — MOZA settings for LMU](https://coachdaveacademy.com/tutorials/moza-settings-for-le-mans-ultimate/).

Tools referenced: iRacing in-game force meter, ACC replay Analyze graph, [WheelCheck + irFFB LUT workflow](https://directdrivewheels.com/guides/iracing-ffb-settings/), and SimHub telemetry overlays.
