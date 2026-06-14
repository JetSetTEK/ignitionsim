---
title: "Can a Racing Wheel Be a Boat Helm? Logitech G923/G29 in Marine Sims, Honestly"
description: "A car wheel as a ship's helm works — but only if the sim reads analog steering. Here's which titles see the wheel as analog, which only see left/right, why force feedback is wasted, and how to map it."
bay: "marine"
type: "how-to"
primaryKeyword: "racing wheel boat simulator"
author: "Robert Pruitt"
publishDate: 2026-05-24
heroImage: "/images/marine/racing-wheel-boat-helm.jpg"
heroAlt: "A weathered ship's helm wheel in polished steel and dark wood, ocean dusk through bridge windows behind"
excerpt: "A racing wheel is the default boat helm because no boat wheel exists. The catch: half the marine sims only see it as left/right, and force feedback is dead weight. Here's the honest test."
featured: false
readingTime: 7
faqs:
  - q: "Does force feedback work on a wheel in marine sims?"
    a: "Almost never. Titles like eSail explicitly don't support FFB, and a car wheel doesn't replicate a boat wheel's feel regardless. The G923's TrueForce, the main reason it costs more than a G29, is wasted in marine sims."
  - q: "Will a Logitech G29 work in Fishing: Barents Sea?"
    a: "It steers, but the game's lack of full analog-axis support means a separate throttle lever can't reliably be used as an analog throttle. The wheel functions as a steering device, not as a full analog helm."
  - q: "Is the G923 worth it over the G29 for marine sims?"
    a: "No. The G923's headline upgrade is TrueForce force feedback, which marine sims don't use. For boats, the cheaper G29 (~$250–$300) does the same job as the G923 (~$349)."
related:
  - "marine-sim-hardware-reality"
  - "marine-sim-controller-support"
  - "best-budget-marine-sim-setup"
---

The single most common question in marine sim is also the most reasonable one: *I already have a Logitech G29 — can I just use it as a boat helm?* The answer is yes, with an asterisk so large it deserves its own paragraph. The wheel will physically turn your vessel. Whether it turns it *the way a helm should* depends entirely on whether the sim bothers to read the wheel as an analog axis. That is the test, and most buyers never run it before they buy.

I went looking for the honest answer rather than the optimistic one. Here it is.

## Why a racing wheel at all

Because there is no alternative. As I covered in [the marine sim hardware reality check](/marine/marine-sim-hardware-reality), no dedicated consumer boat-helm controller exists. So the community reaches for the nearest round, rotation-sensing device it already owns — and that is a racing wheel. The **Logitech G29** (~$250–$300) is the budget classic, the "a cheap wheel works fine" answer. The **G923** (~$349) is its more expensive sibling. Both are recommended as helm stand-ins, and both work to exactly the same degree, which brings us to the first money-saving truth.

## The force feedback trap

The G923's headline feature over the G29 is **TrueForce** force feedback. In a racing sim it is genuinely worth the premium — you feel the road. In a marine sim it is dead weight. Marine titles essentially do not support force feedback; **eSail**, for one, explicitly does not. And even if a sim did pipe FFB to the wheel, a car wheel's self-centering road feel has nothing to do with the heavy, sluggish behavior of a real ship's helm. So the TrueForce you paid extra for sits idle.

The practical conclusion: **for boats, buy the G29, not the G923.** You are paying roughly $50–$100 more for a feature the bay cannot use. Save it for the rig fund.

<aside class="gearpick">
  <a class="gp-shot" href="/marine/gear/logitech-g29-helm"><span class="gp-tag">Buy this one</span><img src="/images/gear/marine/logitech-g29-helm.jpg" alt="Logitech G G29 Driving Force (as helm)" loading="lazy"></a>
  <div class="gp-body">
    <span class="gp-eyebrow">Helm stand-in · 900° leather wheel</span>
    <span class="gp-name"><a href="/marine/gear/logitech-g29-helm">Logitech G G29 Driving Force (as helm)</a></span>
    <p class="gp-why">The right racing wheel for marine, full stop. It steers as a credible helm, drops to ~$200 secondhand, and skips the TrueForce tax the G923 charges for force feedback no boat sim sends. The asterisk: verify your title reads analog steering before you buy.</p>
    <span class="gp-price">~$250</span>
    <span class="gp-actions">
      <a class="gp-review" href="/marine/gear/logitech-g29-helm">Full review ▸</a>
      <a class="gp-buy" href="https://www.amazon.com/s?k=Logitech+G+G29+Driving+Force&tag=ignitionsim-20" target="_blank" rel="sponsored nofollow noopener">Check price on Amazon ↗</a>
    </span>
  </div>
</aside>

<aside class="gearpick">
  <a class="gp-shot" href="/marine/gear/logitech-g923-helm"><span class="gp-tag">Skip for marine</span><img src="/images/gear/marine/logitech-g923-helm.jpg" alt="Logitech G G923 (as helm)" loading="lazy"></a>
  <div class="gp-body">
    <span class="gp-eyebrow">Helm stand-in · TrueForce FFB (unused)</span>
    <span class="gp-name"><a href="/marine/gear/logitech-g923-helm">Logitech G G923 (as helm)</a></span>
    <p class="gp-why">A fine wheel that's the wrong purchase here. Its whole reason to cost more than a G29 — TrueForce force feedback — is dead weight in marine sims that don't support FFB. Buy it if you race too; never buy it <em>for</em> boats.</p>
    <span class="gp-price">~$300</span>
    <span class="gp-actions">
      <a class="gp-review" href="/marine/gear/logitech-g923-helm">Full review ▸</a>
      <a class="gp-buy" href="https://www.amazon.com/s?k=Logitech+G+G923&tag=ignitionsim-20" target="_blank" rel="sponsored nofollow noopener">Check price on Amazon ↗</a>
    </span>
  </div>
</aside>

## The real test: analog vs. left/right

Here is what actually decides whether your wheel is a helm or a glorified arrow key. When a marine sim has proper **analog-axis support**, your wheel steers proportionally — a small turn is a small rudder angle, a hard-over is a hard-over. When a sim only reads **digital/keyboard-style input**, the wheel collapses to binary: any turn left is "press left," any turn right is "press right," with nothing in between. You lose the entire point of a helm.

This is not hypothetical. It is the defining limitation of the bay. Some titles read the wheel cleanly; others ignore the axis entirely and may not even register the wheel without help. The full title-by-title breakdown lives in [the analog-axis compatibility map](/marine/marine-sim-controller-support), but here is the short version for the three most-asked-about cases.

| Sim | Wheel as analog helm? | Notes |
|---|---|---|
| **eSail** | Partial | Controller can be enabled and main axes often work, but advanced mapping needs third-party software; no force feedback |
| **Fishing: Barents Sea** | Limited | Wheel steers, but lack of full analog-axis support means a separate throttle lever can't be used as an analog throttle |
| **Bridge Command** | Yes (via DIY/mapping) | Built for ship handling; the open-source sim that documents its own helm build |

## Mapping the wheel when the sim won't cooperate

If your chosen title falls in the "limited" or "partial" column, you are not stuck — you are in glue-software territory. Tools like **JoyToKey**, **Xpadder**, **vJoy**, and **x360ce** sit between the wheel and the sim, translating wheel rotation into whatever input the game will accept. The walkthrough is its own job; I cover the tool choices and setup in the [mapping software guide](/marine/marine-sim-controller-support).

A practical mapping checklist for a wheel-as-helm:

1. **Plug in and calibrate** the wheel in Windows first, confirming full left-to-right travel registers.
2. **Launch the sim and check for native controller support.** If steering responds proportionally, you are done — no glue software needed.
3. **If steering is binary or absent**, layer in JoyToKey or vJoy to remap rotation to the title's steering input.
4. **Reduce the wheel's rotation range** in the Logitech software if a full 900° turn feels absurd for a slow-responding vessel — a tighter range often feels more ship-like.
5. **Ignore force feedback settings entirely.** They will do nothing here.

<div class="callout tip">
  <div class="ct">// Pro tip</div>
  <p>Dial the wheel's rotation down in Logitech G HUB before you judge the feel. A racing wheel's full 900° lock-to-lock is wrong for a vessel that answers its helm slowly — drop it to ~360–540° and a hard-over starts to feel like a ship leaning into a turn instead of a go-kart twitch.</p>
</div>

## What about the throttle?

The wheel handles steering. It does not handle engine control, and you should not expect it to. The clean pairing is a [flight throttle quadrant as your engine telegraph](/marine/marine-sim-hardware-reality) — three analog levers for port, starboard, and bow thruster, around $60–$80. If you are assembling the whole setup on a budget, the [best marine sim setup under $200](/marine/best-budget-marine-sim-setup) lays out the order to buy in.

## The verdict

A racing wheel makes a perfectly good boat helm — *in the sims that read it as analog*. Buy the **G29**, not the G923, because force feedback is wasted on water. Then, before you commit to a title, confirm it actually reads the wheel's axis; if it does not, budget a weekend for JoyToKey or vJoy and treat the glue software as part of the kit. Done right, a $250 wheel you may already own becomes a genuine helm. Done blind, it becomes a $349 way to press the left-arrow key.
