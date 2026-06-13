---
title: "MSFS 2024 Best Graphics Settings in 2026: Stop the Stutter, Keep the Frames"
description: "The MSFS 2024 settings that actually cost FPS in 2026 — Terrain LOD, clouds, shadows — plus the frame-pacing fixes that stop stutter. NVIDIA and AMD specifics inside."
bay: "flight"
type: "how-to"
primaryKeyword: "MSFS 2024 best graphics settings 2026"
author: "Robert Pruitt"
publishDate: 2026-06-09
heroImage: "/images/flight/msfs-2024-best-graphics-settings-fps.jpg"
heroAlt: "A triple-monitor flight-sim battlestation silhouette at night with screens glowing cyan and an abstract HUD altitude tape"
excerpt: "Half the settings in MSFS 2024 are nearly free and half will gut your frame rate. Here is which is which, plus the frame-pacing fixes that matter more than raw FPS."
featured: false
readingTime: 11
faqs:
  - q: "What MSFS 2024 settings hurt FPS the most?"
    a: "Terrain Level of Detail (LOD) is the single biggest cost — pushing it to maximum can drop frame rate by around 30 percent. Volumetric Clouds, tree density, and raytraced shadows are the next-heaviest. Most other settings are comparatively cheap to keep high."
  - q: "Why does MSFS 2024 stutter even at high FPS?"
    a: "Stutter is a frame-pacing problem, not a frame-count problem. A steady 35 FPS feels smoother than a 60 FPS that constantly pauses. The usual culprits are MSFS 2024's built-in VSync, an unlocked frame rate, or VRAM pressure from texture settings set too high."
  - q: "Should I use DLSS or frame generation in MSFS 2024?"
    a: "Yes, on NVIDIA RTX cards DLSS in Quality mode is close to free image quality and frames. Frame generation helps GPU-bound scenery flying but adds latency and can shimmer on cockpit gauges, so test it per aircraft rather than leaving it on globally."
  - q: "Is MSFS 2024 CPU-bound or GPU-bound?"
    a: "Usually CPU-bound in dense airports and complex airliners, GPU-bound when sightseeing in 4K or VR. Watch the developer FPS counter — if the limiter reads 'MainThread' you are CPU-bound and lowering graphics will not help; reduce traffic, object density, and LOD instead."
related:
  - "best-flight-sim-setup-beginners"
  - "vr-vs-monitor-flight-sim"
  - "flight-sim-control-curves-calibration"
---

You can have the best yoke in the world and MSFS 2024 will still feel terrible if the picture hitches every few seconds. This is the most common complaint of the post-2024 era, and the fix is almost never "buy a bigger GPU." It is knowing which settings are expensive, which are nearly free, and — the part most guides bury — why a high frame rate can still stutter.

Let me walk through it the way I would tune my own station: find the bottleneck first, then spend your settings budget where it actually buys smoothness.

## First: are you CPU-bound or GPU-bound?

Before touching a single slider, turn on the developer FPS counter (Options > General > Developers > FPS overlay). It tells you what is limiting you:

- **Limited by "MainThread" or "GPU: low" with high CPU** → you are **CPU-bound**. Dense airports, heavy airliners like the PMDG 737, and AI traffic do this. Lowering Terrain LOD, object density, and traffic helps; lowering resolution and shadows does almost nothing.
- **Limited by "GPU"** → you are **GPU-bound**. Common in 4K, VR, or scenery flying. Now the graphics sliders and render scaling are your levers.

Tuning the wrong side is why people drop everything to Low and still stutter. Diagnose first.

## The settings that actually cost you frames

Not all sliders are equal. A handful eat your whole frame budget; the rest are rounding errors. Here is the honest cost map.

| Setting | FPS cost | Recommendation |
|---|---|---|
| **Terrain Level of Detail** | Very high (~30% at max) | Medium-High; the biggest single lever |
| **Volumetric Clouds** | High | Medium; High only when GPU-bound headroom exists |
| **Tree / Bush density** | High | Medium |
| **Raytraced shadows / Contact shadows** | High | Off or Low |
| **Objects Level of Detail** | Medium-High | Medium; lower at busy airports |
| **Render scaling** | Scales with value | 100; drop before lowering resolution |
| **Ambient Occlusion** | Medium | High (good value) |
| **Shadow Maps** | Low | High (cheap) |
| **Glass Cockpit refresh** | Low | High (cheap, helps avionics) |
| **Anisotropic Filtering** | Near-free | 16x |
| **Light Shafts** | Near-free | High |
| **Texture resolution** | Free *unless* VRAM-limited | Ultra if you have the VRAM, else High |

The rule of thumb the community has settled on: **turn up everything cheap, and spend your real budget on Terrain LOD and clouds.** Glass Cockpit, Shadow Maps, Anisotropic Filtering, and Light Shafts can sit high or maxed for almost nothing, and they are what make the sim look expensive.

## The stutter fix nobody mentions: frame pacing

Here is the counterintuitive truth. **Frame pacing — the consistency of the gap between frames — matters more than the frame count.** A locked, even 35 FPS feels glassy. A 60 FPS that lurches and pauses feels broken. So before chasing bigger numbers, stabilize the cadence:

1. **Disable MSFS 2024's in-game VSync.** Its implementation introduces pacing hitches. Turn it off in the sim.
2. **Cap your frame rate externally** instead — via the **NVIDIA Control Panel** ("Max Frame Rate") or AMD's frame limiter, or RTSS. Cap to a number you can *hold consistently*, often 30, 45, or your refresh-minus-3.
3. **Watch VRAM.** If textures are pushing you to the edge of your card's memory, you get periodic stutter as the sim swaps assets. Drop texture resolution one notch if the overlay shows VRAM maxed.

A steady cap below your peak will feel dramatically smoother than an uncapped rate that yo-yos. This is the single highest-impact change most simmers never make.

## NVIDIA-specific settings

On RTX cards, prioritize **stability over aggressive overrides**:

- Set **Power Management** to "Prefer Maximum Performance" so the clock does not bounce.
- Use **DLSS in Quality mode** — it is nearly free image quality and frames on a GPU-bound setup.
- Treat **Frame Generation** as situational: great for smooth scenery flying, but it adds input latency and can shimmer on glass-cockpit gauges, so test it per aircraft rather than leaving it global.
- Keep the driver clean; let MSFS own most in-game settings rather than forcing them in the panel.

## AMD-specific settings

On Radeon cards:

- **Disable Radeon Chill and Boost** — both interfere with MSFS frame pacing.
- **Enable Anti-Lag** and **Surface Format Optimization**.
- Let MSFS control most graphics settings rather than overriding in Adrenalin.
- **Cap the frame rate** in driver for smoother delivery, same principle as above.

## What the community says

Across the MSFS forums, SimTuts, and the flight-sim performance scene, the consensus has hardened around a few points. **Terrain LOD is the universally cited frame-killer** — it is the first slider veterans pull down. The **frame-pacing-over-frame-count** philosophy is now the default advice for anyone reporting "high FPS but stuttery." And the recurring reminder is that **Sim Update patches change performance** — settings that were optimal at launch are not necessarily optimal now, so re-benchmark after major updates rather than copying an old guide wholesale.

## Pro tips

- **Benchmark one variable at a time** at a fixed, repeatable spot (a busy airport works). Change one slider, fly the same approach, compare.
- **Build two profiles:** a "scenery" profile (LOD high, traffic low) and an "airliner" profile (LOD medium, traffic low, glass cockpit high) since the bottleneck flips between them.
- **In VR, render scale is king** — see [VR vs monitor for flight sim](/flight/vr-vs-monitor-flight-sim) for the headset-specific math; the desktop numbers here do not transfer directly.
- Smooth frames make precise control easier — if landings still feel twitchy after this, the problem is your input curves, not your GPU. Fix those in [the control curves guide](/flight/flight-sim-control-curves-calibration).

## Who should skip this

If your sim already holds a steady frame rate with no hitching, **stop tuning** — you will only chase placebo gains and risk introducing stutter you did not have. And if your bottleneck is a six-year-old CPU at a dense airport, no graphics setting will save you; that is a hardware conversation, not a slider conversation. Tuning has diminishing returns the moment the cadence is smooth.

## Verdict

The picture you want in MSFS 2024 comes from three moves: **diagnose CPU-vs-GPU first, keep the cheap settings high and spend your real budget on Terrain LOD and clouds, and stabilize frame pacing with an external cap instead of in-game VSync.** Do those three and a mid-range rig will look and feel like a much more expensive one. Chase raw FPS instead and you will end up with an ugly sim that still stutters. Smoothness is a cadence problem first and a horsepower problem a distant second.
