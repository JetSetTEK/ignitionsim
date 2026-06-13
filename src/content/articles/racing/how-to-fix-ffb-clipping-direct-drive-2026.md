---
title: "How to Fix FFB Clipping on a Direct-Drive Wheel (2026)"
description: "How to fix FFB clipping on a direct-drive sim racing wheel — read the gain meter, walk down the strength, and keep detail in iRacing, ACC and LMU."
bay: "racing"
type: "how-to"
primaryKeyword: "how to fix ffb clipping"
author: "Robert Pruitt"
publishDate: 2026-06-10
heroImage: "/images/racing/how-to-fix-ffb-clipping-direct-drive-2026.jpg"
heroAlt: "High-torque wheelbase glowing with amber internal light, force-feedback motion trails in a dark studio"
excerpt: "That dead 'wall' mid-corner isn't your base being bad — it's clipping, and it's deleting your most important cues. Here's the five-minute fix."
featured: false
readingTime: 9
faqs:
  - q: "What is FFB clipping in sim racing?"
    a: "Clipping happens when the game requests more steering force than your motor can physically produce. Everything above that ceiling gets flattened to maximum, so the strongest, most important cues — oversteer, front-grip loss, big curbs — all arrive as the same dead wall. You lose the exact information you need to drive on the limit."
  - q: "How do I know if my wheel is clipping?"
    a: "Use the in-game force meter. iRacing has a built-in FFB bar — if it parks in the red and stays there, you're clipping. ACC shows steering torque in the Analyze replay tab; a flatlined top means clipping. If the wheel hits a hard, repeatable 'wall' under load that doesn't get stronger, that's clipping you can feel."
  - q: "How do I stop my direct-drive wheel from clipping?"
    a: "Lower your in-game gain or force strength in 5% steps until the force meter only flashes red on genuine impacts, not through every fast corner. Always tune in-game first; only touch base-side strength if the in-game slider can't get low enough."
  - q: "Does a stronger wheelbase clip less?"
    a: "Yes — a higher-torque base has more headroom, so the physics peaks fit under its ceiling at a given gain. But headroom is wasted if you crank the gain to match; the cure for clipping is always lower gain, not more torque. A 12Nm base at 55% clips less than an 8Nm base at 80%."
related:
  - "best-ffb-settings-iracing-acc-lmu-2026"
  - "best-wheel-for-iracing-2026"
  - "smart-upgrade-path"
---

You bought a direct-drive base for detail, and now your wheel feels like it slams into an invisible wall mid-corner — strong, but weirdly numb and dead at the exact moments you need information most. That's not a defective base, and it's not a bad sim. It's **clipping**, and it's the single most common force-feedback mistake in sim racing. The good news: it's free to fix and takes about five minutes. This is the dedicated, step-by-step version of the clipping section in my [full FFB settings guide](/racing/best-ffb-settings-iracing-acc-lmu-2026) — bookmark whichever one you'll actually open at the rig.

## What clipping actually is

Your motor can produce a maximum torque — say 12Nm. The game's physics ask for a *range* of forces every lap. When the requested force stays under your motor's ceiling, you feel the full, rising signal: light through a fast sweeper, building as the front loads, spiking over a curb.

The moment the physics ask for **more** than your motor can deliver, everything above that ceiling gets clamped to maximum. A 14Nm request and an 18Nm request both come out as a flat 12Nm. The peaks — oversteer onset, front-grip loss, the snap you're trying to catch — all flatten into the same dead wall. **You're not feeling the limit; you're feeling the top of your motor.** That's why a clipping flagship can feel less informative than a properly tuned entry base.

## Step 1: Find your force meter (every sim has one)

You cannot fix what you can't see. Before changing anything, turn on the meter:

- **iRacing** — enable the built-in **FFB meter** in the black box / options. A bar that lives in the red is clipping.
- **ACC** — drive a few laps, then open a replay and read the **Steering Torque** graph in the **Analyze** tab. A line pinned flat at the top is clipping.
- **Le Mans Ultimate** — no clean numeric meter, so use your hands: a hard, repeatable **wall of resistance under load** that never gets stronger is clipping.
- Brand apps help too — many wheelbase utilities (Fanatec, MOZA, Simagic) show a live force graph you can watch on a second screen.

## Step 2: The 5% walk-down

This is the whole fix, and it works on any base in any sim:

1. Pick a **test car and track** — a GT3 around a circuit with one big curb is ideal. Drive five laps watching the meter.
2. If the meter sits in the red through normal cornering, **drop your in-game gain / force strength by 5%.**
3. Re-run the laps. Repeat.
4. **Stop when the meter only flashes red on genuine impacts** — a hard curb strike, a big lockup — and lives in the green-to-amber the rest of the lap.

You've now found the highest gain where you keep your detail. That's the target: maximum strength *without* throwing data away.

## Recommended starting gains (so the walk-down is short)

| Base torque | iRacing start | ACC start |
|-------------|---------------|-----------|
| **5-10Nm** | ~65-70% | ~55-65% |
| **10Nm+** | ~60-65% | ~50-55% |

Notice the heavier base starts *lower*. More torque means more headroom, but only if you don't immediately spend it by cranking the gain. Start conservative and walk **up** if the meter never reaches the top, rather than starting maxed and wondering why it's numb.

## Step 3: Surgical fixes for problem cars

Sometimes 90% of cars feel perfect and one specific car — a heavy LMP, an old non-power-steering classic — clips badly. Don't nuke your global gain for one outlier:

- **ACC** has **per-car torque multipliers.** Lower the multiplier for the offending car only; everything else keeps its tuned feel.
- **iRacing** lets you save **per-car strength**, and its **Auto** button gives a fast per-car ballpark (trim it down 5-10% by hand — Auto leaves a little clipping on curb-heavy cars).
- **LMU** owners on MOZA: turn **Hands-Off Protection OFF** in Pit House. It can bug out and cut FFB mid-corner — a dropout people mistake for a clipping or hardware fault.

## What the community gets right (and wrong)

The community is **right** that the in-game meter is the single source of truth, and that clipping is the most common reason a "great" base feels disappointing. That's earned wisdom.

Where people go wrong: **trying to fix clipping with more torque** ("my wheel feels dead, I'll buy a stronger base"). A stronger base raises the ceiling, but if you keep cranking the gain you'll clip the new base too — now with a bigger, more violent dead wall. The cure is always *down on gain*, never *up on hardware*. The second mistake is **stacking base-side strength on top of in-game gain**: set the base to a neutral 100% baseline and do your tuning in-game, or you end up clipping twice and chasing your own tail.

## Who should skip this

If you're on a gear or belt wheel, you essentially can't clip the same way — those wheels run out of resolution long before they run out of motor — so set your in-game gain sensibly and just race. This is a direct-drive concern. It also doesn't need a deep dive on a sub-5Nm bundle: set it so nothing flatlines and move on. Save the precision tuning for a base worth tuning — and if you're deciding which base that should be, the [smart upgrade path](/racing/smart-upgrade-path) walks through when stronger torque actually helps.

## The verdict

Clipping is the most expensive-feeling problem in sim racing and the cheapest to fix: turn on the meter, walk the gain down 5% at a time until the peaks breathe, and handle outlier cars with per-car multipliers instead of global cuts. Do that and your current base — whatever it is — will hand you back the detail you paid for. Then sanity-check the rest of the chain (pedals, mount, rim) in [the Rig Configurator](/racing/configurator), and if you want the full per-sim numbers, the [FFB settings guide](/racing/best-ffb-settings-iracing-acc-lmu-2026) has every starting value laid out. Don't buy torque to fix a tuning problem — fix the tuning first, and you'll be amazed how alive your base already is.
