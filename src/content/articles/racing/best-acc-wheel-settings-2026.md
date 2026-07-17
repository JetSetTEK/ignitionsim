---
title: "Best ACC Wheel Settings 2026: Per-Base FFB That Actually Works"
description: "The best ACC wheel settings for 2026 — per-base Gain, the Min Force rule, Dynamic Damping, and the Road Effects truth most old settings tables get backwards on direct drive."
bay: "racing"
type: "how-to"
primaryKeyword: "best acc wheel settings"
author: "Duke Alvarez"
publishDate: 2026-06-13
updatedDate: 2026-07-02
goldStatus: "refresh"
sourceReviewDate: 2026-07-02
revenueTier: "B"
contentCluster: "racing"
heroImage: "/images/gear/racing/moza-r12.jpg"
heroAlt: "MOZA R12 direct-drive wheelbase, a 12Nm reference base for ACC force feedback tuning"
excerpt: "ACC's force feedback is heavier and more mechanical than any other sim. Here are the per-base start values, the Min Force rule, and the Road Effects truth most copy-paste tables get backwards on direct drive."
featured: false
readingTime: 11
faqs:
  - q: "What Gain should I run in ACC for a direct-drive wheel?"
    a: "It scales with torque: a 5Nm base wants roughly 90-100% in-game Gain, a 12Nm base around 50-60%, and a 20Nm+ base around 30-40%. ACC's force feedback is heavier than AC or iRacing, so a strong base reaches the clipping ceiling at a much lower Gain number than the marketing torque figure suggests. Start from the per-base table below and lower Gain until the wheel stops feeling flat and numb through fast corners."
  - q: "What should Min Force be set to in ACC on a direct-drive base?"
    a: "Zero. Min Force exists to punch through the mechanical deadzone in cheap gear and belt wheels; a direct-drive motor has no deadzone, so any Min Force above 0 just adds a constant fake weight and can cause a robotic center oscillation on straights. Every current 2026 DD guide agrees: leave Min Force at 0 on any direct-drive base. Only Logitech G29/G920-class gear wheels want 3-8%."
  - q: "Should Road Effects be high or low in ACC on direct drive?"
    a: "Low. This is the setting most old settings tables get backwards. On a direct-drive base, current 2026 guides put ACC's Road Effects at 0-15% (often just 0), because at high values it layers coarse vibration that masks the fine steering signal a DD motor already delivers. Turn it down on DD; only entry-level gear/belt wheels benefit from running it higher (roughly 20-40%)."
  - q: "How do I know if my ACC force feedback is clipping?"
    a: "ACC has no built-in force-output meter, so you can't read clipping off a bar. Tune by feel: if the wheel goes heavy-then-flat and stops adding detail as a corner loads up, you're clipping — drop Gain in 3-5% steps until the detail returns. If it feels weak and vague everywhere, Gain is too low. The heavier the base, the lower the Gain that hits the ceiling."
  - q: "What steering rotation and FFB frequency should I use in ACC?"
    a: "Set your wheelbase software and ACC to the same rotation — 900° or 1080° both work — and let ACC soft-lock the steering ratio per car automatically. A mismatch between software and game silently mis-scales every input. Leave FFB frequency at 333Hz for any modern direct-drive wheel; only very old wheels (Logitech G25/G27) drop to 111Hz."
related:
  - "best-ffb-settings-iracing-acc-lmu-2026"
  - "how-to-fix-ffb-clipping-direct-drive-2026"
  - "best-sim-racing-wheelbases-2026"
---

Verdict first: **in ACC, set Min Force to 0, run Road Effects LOW (0-15%) on any direct-drive base, and pick your Gain from the per-base table below — then lower it until the wheel stops going flat through fast corners.** ACC's force feedback is heavier and more mechanical than the original Assetto Corsa, iRacing or rFactor 2, and it clips at far lower Gain numbers than any of them. Copy a Logitech G29 settings table onto a 12Nm direct-drive base and you'll feel either a numb arcade toy or a vibrating mess that flat-lines through every fast corner.

This is an ACC-specific guide. If you want the cross-sim workflow that tunes [iRacing, ACC and Le Mans Ultimate from one process](/racing/best-ffb-settings-iracing-acc-lmu-2026), read that. Here I'm staying inside one game and giving you the per-base numbers, the two sliders everyone gets backwards, and the steering-lock mismatch that costs lap time without ever announcing itself.

<div class="shotgrid">
  <figure><a href="https://www.amazon.com/dp/B0DHHJD97L?tag=ignitionsim-20" target="_blank" rel="sponsored nofollow noopener" data-buy-link="true" data-event="buy_click" data-buy-product="moza-r12"><img src="/images/gear/racing/moza-r12.jpg" alt="MOZA R12 direct-drive wheelbase" loading="lazy"></a><figcaption>MOZA R12 — 12Nm reference (~50-60% Gain)</figcaption></figure>
  <figure><a href="/racing/gear/simagic-evo-pro"><img src="/images/gear/racing/simagic-evo-pro.jpg" alt="Simagic Alpha Evo Pro wheelbase" loading="lazy"></a><figcaption>Simagic Alpha Evo Pro — 18Nm (~40-45% Gain)</figcaption></figure>
  <figure><a href="/racing/gear/fanatec-clubsport-dd-plus"><img src="/images/gear/racing/fanatec-clubsport-dd-plus.webp" alt="Fanatec ClubSport DD+ wheelbase" loading="lazy"></a><figcaption>Fanatec ClubSport DD+ — 15Nm class (~40-45%)</figcaption></figure>
  <figure><a href="/racing/gear/simucube-2-sport"><img src="/images/gear/racing/simucube-2-sport.jpg" alt="Simucube 2 Sport wheelbase" loading="lazy"></a><figcaption>Simucube 2 Sport — 17Nm smoothness reference</figcaption></figure>
</div>

## The two sliders everyone gets backwards

Before the numbers, fix the two settings that ruin more ACC setups than Gain ever does.

**Min Force should be 0 on direct drive.** Min Force (minimum force) injects a constant baseline torque to overcome the mechanical deadzone in gear and belt wheels — the slack where the motor isn't strong enough to move the rim against its own friction. A **direct-drive motor has no deadzone.** The shaft is bolted to the rim. So any Min Force above 0 on a DD base adds a permanent fake weight that drowns out the lightest signals — the exact feather-light front-grip information you need at corner entry — and on some bases it introduces a robotic left-right twitch on the straights. Set it to **0** and leave it there. The only people who should touch Min Force are running a Logitech G29/G920 or an old belt Thrustmaster, where roughly 3-8% helps mask the deadzone.

**Road Effects should be LOW on direct drive — and this is the setting most old tables get backwards.** You'll find dozens of copy-paste tables that crank Road Effects high "for more detail." On a direct-drive base that's the wrong move. The DD motor already resolves fine surface and kerb signal on its own; pushing Road Effects up just layers coarse vibration on top that masks the very detail you're chasing. Current 2026 direct-drive guides land on **0-15%** for DD (many simply run it at **0**). Only entry-level gear and belt wheels benefit from running it higher, around **20-40%**, because their motors can't resolve that detail otherwise. If you take one number from this guide onto a DD base, turn Road Effects *down*.

<div class="callout tip">
  <div class="ct">// Pro tip</div>
  <p>If you copied a settings table off a Logitech G29 thread onto your DD base, two lines betray it: a non-zero Min Force and a high Road Effects value. Both exist to compensate for a gear wheel's limitations — a direct-drive motor has none of them, so on DD they just bolt fake weight and coarse buzz onto the clean signal you paid for. Zero the Min Force, drop Road Effects low, and half the "my expensive base feels numb or noisy" complaints vanish.</p>
</div>

## Per-base starting values

Set your **wheelbase software to a neutral baseline first** — full or near-full strength, filters minimal — then do the real work in-game. ACC knows the physics; your job is to scale it to your motor without clipping. These are honest start points, not gospel; exact numbers vary by source and by how much strength you leave in your base software, so **check current** against your own base's tuning app and adjust by feel:

| Base (torque) | In-game Gain | Min Force | Dynamic Damping | Road Effects |
|---|---|---|---|---|
| **Logitech G29/G920** (gear, ~2.5Nm) | 90-100% | 3-8% | ~20-35% | 20-40% |
| **Cammus C5 / MOZA R5** (5-5.5Nm) | 90-100% | 0% | 60-100% | 0-10% |
| **Fanatec CSL DD / GT DD Pro** (5-8Nm) | 75-100% | 0% | 60-100% | 0-10% |
| **MOZA R9 / Simagic Evo Sport** (9-10Nm) | 60-70% | 0% | 60-100% | 0-10% |
| **MOZA R12 / Simagic Evo / ClubSport DD** (12Nm) | 50-60% | 0% | 60-100% | 0-10% |
| **MOZA R16 / Simagic Evo Pro / ClubSport DD+** (15-18Nm) | 40-45% | 0% | 50-100% | 0-5% |
| **MOZA R21 / Simucube 2 Sport** (17-21Nm) | 30-40% | 0% | 50-100% | 0-5% |

Notice the trend: **the stronger the base, the lower the Gain.** That's not a bug — ACC's physics output is the same regardless of your hardware, so a 21Nm base reaches the clipping ceiling at a far lower Gain percentage than a 5Nm one. A common mistake is running a flagship at 70-80% "because it can handle it." It can't — you'll just clip everything above the ceiling and throw away the detail you paid for.

Two schools of thought exist on *where* to scale torque, and both are valid: one keeps in-game Gain fixed (often ~90%) and drops the strength in your base software instead; the other, shown above, scales in-game Gain and leaves the base near full. Pick one and be consistent — don't cut torque in both places at once, or you'll starve the signal.

## Reading the feedback without a clipping meter

Here's the catch ACC doesn't advertise: **there is no in-game force-output meter.** You can't read clipping off a bar the way you can in some sims. So you tune by feel, and the tell is specific:

- The wheel **builds weight as a corner loads, then keeps adding detail near the limit** = healthy. You're using the full range.
- The wheel **goes heavy, then flat — the force stops increasing and the detail disappears as you load the corner harder** = clipping. Drop Gain in 3-5% steps until the top of the corner comes back to life.
- The wheel feels **weak and vague everywhere, no bite even at high load** = Gain too low. Raise it until the car starts talking.

Tune to that feeling on a corner you know well, not to a forum post. Five focused minutes here beats five hours of copy-pasting other people's numbers. It's the same clipping logic from [the direct-drive clipping fix guide](/racing/how-to-fix-ffb-clipping-direct-drive-2026) — ACC just makes you feel it rather than showing it to you.

<aside class="gearpick">
  <a class="gp-shot" href="https://www.amazon.com/dp/B0DHHJD97L?tag=ignitionsim-20" target="_blank" rel="sponsored nofollow noopener" data-buy-link="true" data-event="buy_click" data-buy-product="moza-r12"><span class="gp-tag">12Nm reference</span><img src="/images/gear/racing/moza-r12.jpg" alt="MOZA R12 direct-drive wheelbase" loading="lazy"></a>
  <div class="gp-body">
    <span class="gp-eyebrow">Direct-drive base · 12Nm, Pit House</span>
    <span class="gp-name"><a href="https://www.amazon.com/dp/B0DHHJD97L?tag=ignitionsim-20" target="_blank" rel="sponsored nofollow noopener" data-buy-link="true" data-event="buy_click" data-buy-product="moza-r12">MOZA R12</a></span>
    <p class="gp-why">The base most of this table is written around: at 12Nm, ACC wants roughly 50-60% in-game Gain, Min Force 0, and a Pit House wheel damper around 20-25 to settle the straight-line wobble. Strong enough to clip if you over-cook the Gain, which is exactly why the numbers run lower than the 12Nm figure suggests.</p>
    <span class="gp-price">~$429 · check current</span>
    <span class="gp-actions"><a class="gp-review" href="/racing/gear/moza-r12">Spec card</a><a class="gp-buy" href="https://www.amazon.com/dp/B0DHHJD97L?tag=ignitionsim-20" target="_blank" rel="sponsored nofollow noopener" data-buy-link="true" data-event="buy_click" data-buy-product="moza-r12">View exact product on Amazon</a></span>
  </div>
</aside>

## The straight-line oscillation fix

Here's the ACC tax on strong bases: drive a fast straight in a GT3 car on a 12Nm+ unit and the wheel can develop a self-feeding wobble — a left-right oscillation that builds on its own. ACC's heavier, more mechanical FFB excites it more than other sims do.

Two dampers cure it. **Dynamic Damping** (in-game) is really the effective weight of the car — the wheel lightens as speed rises — and on entry direct-drive bases it's often left near 100%; on high-torque bases you may drop it if your base software is already adding its own damping. Your **base software's wheel damper** (roughly 20-25 on a [MOZA R12](/racing/gear/moza-r12) or [Simagic Evo](/racing/gear/simagic-evo), more on bigger bases) resists the wobble at the hardware layer. Add damping a few points at a time until the straight goes quiet — but stop the moment cornering feel starts going syrupy. Damping is a scalpel, not a volume knob. **Who should skip damping entirely:** anyone on a 5-9Nm base. There's not enough torque to oscillate, and damping there just dulls a base that's already light on detail.

<!-- Product card withheld: exact Amazon ASIN not verified for fanatec-clubsport-dd-plus. -->

## The steering-lock mismatch that costs lap time silently

This is the one that costs lap time without ever feeling like an FFB problem. ACC reads your physical wheel's degrees of rotation and maps it to each car's steering ratio. If your **base software is set to 1080° but ACC thinks it's getting 900°** (or the reverse), every input is subtly mis-scaled — the car turns more or less than your hands ask for, and you'll fight it forever without knowing why.

The clean fix: **set your base software and ACC to the same rotation** — 900° and 1080° both work fine — then enable ACC's per-car steering lock so the game soft-clamps the ratio to each car's real value automatically. Verify once in-game that the on-screen wheel matches your real wheel rotation one-to-one. If you ever rage-quit a setup because "the car just feels off" and the force feedback itself seems fine, **check your steering rotation match before you touch another slider.**

<div class="callout forum">
  <div class="ct">// From the forums</div>
  <p>The recurring confession on the ACC and direct-drive forums: someone chases "magic FFB numbers" for weeks, then discovers their base software and the game were on different degrees of rotation the whole time. The blunt advice to newcomers has settled into three rules — Min Force 0 on DD, Road Effects low on DD, and match your steering rotation before you blame the force feedback. Almost every "my car just feels wrong" thread ends at one of those three, not at Gain.</p>
</div>

## The setup tax nobody quotes you

- **There's no clipping meter.** ACC won't show you force output, so budget five real minutes of feel-tuning per base rather than trusting a copied table.
- **Old tables are dangerous on DD.** The single most-copied mistake is a non-zero Min Force and a high Road Effects value carried over from a gear-wheel table. Both are wrong on direct drive.
- **Base-software strength double-counts.** If you scale torque down in your base app *and* run low in-game Gain, you starve the signal. Cut it in one place, not both.
- **Rotation mismatch hides as a handling problem.** A software-vs-game degrees mismatch feels like a bad setup, not a bad setting. Match them first.
- **Firmware and app versions move.** Base tuning apps (Pit House, Fanatec App, SimPro Manager) change defaults between versions — re-check your damper and strength values after an update.

## The buy order (of settings, not hardware)

1. Set Min Force to **0** (any direct-drive base). Only gear/belt wheels get 3-8%.
2. Match steering rotation between base software and ACC, and enable per-car soft-lock.
3. Set Road Effects **low** on DD (0-15%), higher only on entry gear/belt wheels.
4. Pick Gain from the per-base table, then lower it by feel until fast corners stop going flat.
5. Add just enough Dynamic Damping / base-software damper to silence straight-line wobble on strong bases — and no more.
6. Leave FFB frequency at **333Hz** on any modern wheel.

## What to run ACC on

This is a settings guide, not a shopping list — the right numbers make a humble base feel sharp, and no base is "too weak" for good ACC feel once it's dialed. If you *are* still choosing hardware, the honest short version: a 12Nm base like the [MOZA R12](/racing/gear/moza-r12) sits in the sweet spot most drivers never outgrow, and a clean 9-12Nm base with perfect settings out-informs a mis-tuned 18-21Nm one every time. Budget-first? The Fanatec CSL DD (5-8Nm) tunes up beautifully in ACC at 75-100% Gain — verify current pricing through a direct product listing. We don't have a verified studio photo of it yet, so it's a text pick here rather than a pictured one.

<aside class="gearpick">
  <a class="gp-shot" href="https://www.amazon.com/dp/B0DHHJD97L?tag=ignitionsim-20" target="_blank" rel="sponsored nofollow noopener" data-buy-link="true" data-event="buy_click" data-buy-product="moza-r12"><span class="gp-tag">Best all-round ACC base</span><img src="/images/gear/racing/moza-r12.jpg" alt="MOZA R12 direct-drive wheelbase" loading="lazy"></a>
  <div class="gp-body">
    <span class="gp-eyebrow">Direct-drive base · 12Nm sweet spot</span>
    <span class="gp-name"><a href="https://www.amazon.com/dp/B0DHHJD97L?tag=ignitionsim-20" target="_blank" rel="sponsored nofollow noopener" data-buy-link="true" data-event="buy_click" data-buy-product="moza-r12">MOZA R12</a></span>
    <p class="gp-why">The base most of these numbers are written around and the one I'd point most ACC drivers to: 12Nm of headroom, the easiest tuning app in the business, and a full upgrade ladder behind it. Dial it to ~50-60% Gain, Min Force 0, Road Effects low, and it feels like far more base than the price suggests.</p>
    <span class="gp-price">~$429 · check current</span>
    <span class="gp-actions"><a class="gp-review" href="/racing/gear/moza-r12">Spec card</a><a class="gp-buy" href="https://www.amazon.com/dp/B0DHHJD97L?tag=ignitionsim-20" target="_blank" rel="sponsored nofollow noopener" data-buy-link="true" data-event="buy_click" data-buy-product="moza-r12">View exact product on Amazon</a></span>
  </div>
</aside>

Hardware still sets the ceiling — a clean 9Nm base with perfect settings out-informs a mis-tuned 21Nm one, but it can't manufacture detail the motor never delivered. If you're still deciding what to run ACC on, [the wheelbase comparison](/racing/best-sim-racing-wheelbases-2026) lays out the tiers, or build a full kit in [the Rig Configurator](/racing/configurator) and dial it in with the numbers above.

## Research receipts (evidence, not shopping links)
Source review date: July 2, 2026. We checked current per-base ACC settings guides and official rotation/frequency behavior rather than repeating a single legacy table, and reconciled the disagreements in our own voice.

Per-base settings + Road Effects / Min Force on direct drive: [SimRacingCockpit ACC wheel settings 2026](https://simracingcockpit.gg/acc-wheel-settings/), [SimRacingSetup ACC MOZA FFB settings (R5/R9/R16/R21)](https://simracingsetup.com/product-guides/acc-moza-force-feedback-settings/), [Trophi.ai ACC FFB setup guide](https://www.trophi.ai/post/assetto-corsa-competizione-ffb-setup-guide), [Coach Dave Academy — ACC force feedback](https://coachdaveacademy.com/tutorials/how-to-set-up-force-feedback-for-acc/).

Steering lock / rotation matching: [Coach Dave Academy — ACC steering locks & ratios (2026)](https://coachdaveacademy.com/tutorials/correct-steering-locks-and-ratios-in-acc/), [SimRacingSetup — ACC steering lock settings](https://simracingsetup.com/assetto-corsa/acc-steering-lock-settings/).

Base pricing/spec sanity check (paraphrased, prices left as "check current"): [DirectDriveWheels — MOZA R12 V2](https://directdrivewheels.com/bases/moza-r12-v2/), [DirectDriveWheels — Simagic Alpha Evo 12](https://directdrivewheels.com/bases/simagic-alpha-evo-12/).
