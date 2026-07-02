---
title: "MSFS 2024 Best Graphics Settings in 2026: Stop the Stutter, Keep the Frames"
description: "The MSFS 2024 settings that actually cost FPS in 2026 — Terrain LOD, clouds, trees, traffic — ranked by cost, plus recommended settings by GPU tier, DLSS/frame-gen, VR, and the frame-pacing fixes that stop stutter."
bay: "flight"
type: "how-to"
primaryKeyword: "MSFS 2024 best graphics settings 2026"
author: "Mac Donovan"
publishDate: 2026-06-09
updatedDate: 2026-07-02
sourceReviewDate: 2026-07-02
revenueTier: "B"
contentCluster: "flight"
goldStatus: "refresh"
heroImage: "/images/flight/msfs-2024-best-graphics-settings-fps.jpg"
heroAlt: "A triple-monitor flight-sim battlestation silhouette at night with screens glowing cyan and an abstract HUD altitude tape"
excerpt: "Four settings eat most of your frame budget and the rest are rounding errors. Here is the honest cost map, recommended settings by GPU tier, and the frame-pacing fixes that matter more than raw FPS."
featured: false
readingTime: 12
faqs:
  - q: "What MSFS 2024 settings hurt FPS the most?"
    a: "Four settings dominate your frame budget: Terrain Level of Detail (the single biggest lever), Trees, Volumetric Clouds, and AI Traffic. Community benchmarks put Terrain LOD at max around 36% slower than a mid value, Trees at up to 34% from Low to Ultra, and clouds around 22% when GPU-limited. Get those four right, turn everything cheap (Glass Cockpit, Shadow Maps, Anisotropic Filtering) up high, and you have a sim that looks expensive and runs smooth. These are attributed community figures, not lab-authoritative numbers — verify on your own rig."
  - q: "Why does MSFS 2024 stutter even at high FPS?"
    a: "Stutter is a frame-pacing problem, not a frame-count problem. A steady 35 FPS feels smoother than a 60 that constantly hitches. The most-reported 2026 culprits are VRAM overflow (frame times spike hard the moment textures spill into system RAM), the Fauna setting spawning micro-stutters, Windows' Balanced power plan throttling CPU clocks on load spikes, and Terrain LOD over 200. Fixes: drop textures a notch if VRAM is near 90%, disable Fauna, set Windows to High Performance, and cap your frame rate."
  - q: "Should I use DLSS or frame generation in MSFS 2024?"
    a: "Yes on DLSS — Quality mode (about 67% internal resolution) is near-free image quality and frames on RTX cards, and it is the first upscaling tier to reach for at 1440p. Frame generation (RTX 40/50 series) adds roughly 30-35% FPS but only helps when you are GPU-bound; it does not reduce a CPU bottleneck, and it costs at least 1 GB of extra VRAM, so 8 GB cards can struggle at 1440p and up with it on. Treat it as situational, not global."
  - q: "Is MSFS 2024 CPU-bound or GPU-bound?"
    a: "It depends on resolution and scene. At 1080p and 1440p the sim is usually GPU-bound, so the graphics sliders and upscaling are your levers. At 4K it flips CPU-bound because streaming photogrammetry at that detail creates heavy CPU overhead — as do dense airports, complex airliners, and AI traffic anywhere. Turn on the Developer-mode FPS counter: if the limiter reads 'MainThread' you are CPU-bound and lowering resolution or shadows will not help; cut Terrain LOD, Object LOD, and traffic instead."
related:
  - "best-flight-sim-setup-beginners"
  - "vr-vs-monitor-flight-sim"
  - "flight-sim-control-curves-calibration"
---

Verdict first: **the three settings to turn down before anything else are Terrain LOD, Trees, and AI Traffic.** In that order they eat the largest, most repeatedly-benchmarked chunks of your frame budget, and the visual cost of pulling them back from max is far smaller than the frames you get back. Do those three, keep the cheap settings high, stabilize your frame pacing with a cap, and a mid-range rig will look and feel like a much more expensive one. Chase raw FPS by dropping everything to Low and you will end up with an ugly sim that *still* stutters — because stutter is a cadence problem first and a horsepower problem a distant second.

Let me walk through it the way I would tune my own station: find the bottleneck, spend your settings budget on the four sliders that matter, and fix the frame pacing that most guides never mention. Every number below is an **attributed community figure** — a documented starting range from the sources at the bottom, not a lab-certified "correct" value. Rigs vary; benchmark your own.

## First: are you CPU-bound or GPU-bound?

Before touching a single slider, turn on the Developer-mode FPS counter (Options > General > Developers > FPS overlay). It tells you what is limiting you, and tuning the wrong side is why people drop everything to Low and still stutter.

- **Limited by "MainThread" (high CPU, GPU idle)** → you are **CPU-bound**. Dense airports, heavy airliners like the PMDG 737, AI traffic, and 4K photogrammetry streaming do this. Lowering Terrain LOD, Object LOD, and traffic helps; lowering resolution and shadows does almost nothing.
- **Limited by "RenderThread / GPU"** → you are **GPU-bound**. Common at 1080p and 1440p, in scenery flying, and in VR. Now the graphics sliders, clouds, and upscaling are your real levers.

The rough rule the community has settled on: **1080p and 1440p are usually GPU-bound; 4K flips CPU-bound** because streaming and managing photogrammetry at that detail creates serious CPU overhead. Diagnose first, then spend.

## The biggest FPS killers, ranked

Not all sliders are equal. A handful eat your whole frame budget; the rest are rounding errors. Here is the honest cost map, ordered by how much frame rate each one can cost — figures are community/benchmark ranges, so treat them as guidance and verify on your rig.

| Rank | Setting | Reported FPS cost | Why it hurts | Recommendation |
|---|---|---|---|---|
| 1 | **Terrain LOD (TLOD)** | ~-36% at 400 vs a mid value | Streams and renders far more terrain geometry | 100-200; the single biggest lever |
| 2 | **Trees** | up to ~34% Low→Ultra | High adds tree shadowing (huge visual jump) | High (best value; skip Ultra) |
| 3 | **Volumetric Clouds** | ~22% when GPU-limited | Expensive volumetric raymarching | High; Ultra only with GPU headroom |
| 4 | **AI Traffic** | ~10-15% on mid CPUs | CPU-bound; hits MainThread | Low or Medium |
| 5 | **Object LOD (OLOD)** | ~14% at minimum | More airport clutter drawn far out | 100-150; lower at busy airports |
| 6 | **Raytraced Shadows** | ~8-12% | Cockpit-interior shadow detail | Off for performance/balanced builds |
| 7 | **Fauna** | micro-stutter source | Documented spawning bug | **Off** (not Low — Off) |
| 8 | **Displacement Mapping** | ~4-10% | Terrain surface relief | Off for airliners, On for VFR |
| — | **Texture Resolution** | ~0% FPS, big VRAM | Ultra ~8.2 GB vs Medium ~5.4 GB | Ultra if VRAM allows, else High |
| — | **Ambient Occlusion** | <4% | Contact shading | High (good value) |
| — | **Shadow Maps (2048)** | <1% | Base shadowing | High (nearly free) |
| — | **Glass Cockpit refresh** | ~0% measurable | Avionics update rate | High (free, helps IFR) |
| — | **Anisotropic Filtering** | <1% | Texture sharpness at angle | 16x always |
| — | **Light Shafts** | minimal | God rays | High/Ultra |

The takeaway the community keeps arriving at: **spend your real budget on Terrain LOD, Trees, Clouds, and Traffic; turn everything cheap up high.** Glass Cockpit, Shadow Maps, Anisotropic Filtering, and Light Shafts can sit maxed for almost nothing, and they are what make the sim look expensive. And notice **Fauna** sitting in the kill list not for raw FPS but for micro-stutter — multiple 2026 reports point to a spawning bug, and turning it fully Off (not Low) is a documented smoothness win.

<div class="callout tip">
  <div class="ct">// Pro tip</div>
  <p>Terrain LOD 400 looks almost identical to LOD 200 from the cockpit while costing you roughly a sixth of your frame rate. Going from 10 to 100 transforms the landscape; going from 200 to 400 mostly transforms your frame times. Park it at 100-200, spend the frames you save on clouds and trees, and you will not miss the difference from a moving aircraft.</p>
</div>

## Recommended settings by GPU tier

These are honest starting points by hardware class, drawn from the community guides in the sources — a place to begin, not a finish line. Every rig, resolution, and add-on aircraft shifts the math, so set these, watch the FPS overlay, and trim.

| Setting | Balanced (RTX 3060-4060, 8-12 GB) | Quality (RTX 4070-Ti Super, 12 GB) | Ultra (RTX 4080S/4090, 16 GB) |
|---|---|---|---|
| **Terrain LOD** | 100 | 150 | 200 |
| **Object LOD** | 100 | 100-150 | 150-200 |
| **Volumetric Clouds** | High | High | Ultra |
| **Trees** | High | High | High |
| **Raytraced Shadows** | Off | Off | On |
| **Traffic** | Low | Low-Medium | Medium |
| **Fauna** | Off | Off | Off |
| **Textures** | High | Ultra | Ultra |
| **Upscaling** | DLSS/FSR Quality @1440p | DLSS Quality | DLSS Quality |
| **Realistic target** | 60 FPS @1080p / 40 @1440p | 40 @1440p / 30 @4K | 40-50 @4K |

**Bold takeaway:** the jump from Balanced to Ultra is almost entirely Terrain LOD, Raytraced Shadows, and cloud tier — the exact four-ish settings from the kill list. Everything else stays roughly the same across tiers because it is already cheap. You do not "unlock quality" by cranking sliders; you unlock it by spending your extra GPU on the *right* four.

## DLSS, FSR, and frame generation

Upscaling is the closest thing to free performance MSFS 2024 offers — used with a clear head.

- **DLSS (RTX 20+):** Quality mode renders at about 67% internal resolution and reconstructs the rest; it is near-free image quality and frames on a GPU-bound setup. At 1440p run **Quality only**; at 4K, Quality or Balanced. This is the first upscaling lever to reach for.
- **AMD FSR** works on any GPU with similar quality tiers — the pick for Radeon and older cards.
- **Frame Generation (RTX 40/50 via DLSS, or FSR 3):** delivers roughly **30-35% more FPS** but with two hard caveats. First, it **does not reduce a CPU bottleneck** — it invents frames while your actual CPU frame time is unchanged, so it only helps when you are GPU-bound (scenery flying, VR, high resolutions), not in a packed airliner cockpit. Second, it costs **at least 1 GB of extra VRAM**, so 8 GB cards can struggle at 1440p and up with it enabled. Great for smooth sightseeing; test it per aircraft rather than leaving it global.

<div class="callout tip">
  <div class="ct">// Pro tip</div>
  <p>Frame generation is a GPU-bound tool wearing a "more FPS" costume. Turn on the FPS overlay: if you are MainThread-limited in a heavy airliner, frame-gen adds latency and shimmer on glass gauges without fixing the actual stutter. Save it for VFR scenery and VR where you are genuinely GPU-bound — that is where its 30-plus percent actually lands.</p>
</div>

## VR settings

VR is a different budget entirely, and the desktop numbers above do not transfer directly — render resolution dominates everything.

- **Use OpenXR as the runtime** wherever your headset supports it; it is a cleaner, faster path than OpenVR/SteamVR and is the recommended default.
- **Render scale is king.** A common starting point is **~80% render scale**, adjusted by performance. OpenXR default is 100%; only very high-end GPUs push it to 150%, and that is a heavy setting.
- **DLSS 4 upscaling plus frame generation** is what makes modern VR headroom possible — it lets you feed a high per-eye resolution without paying full native cost.
- **On Pimax-class headsets,** community setups aim for 90 Hz or higher, medium/high render quality, foveated rendering and smart smoothing on, render scale starting near 75-80% in Pimax Play. Foveated rendering in particular is close to free frames on supported hardware.
- Terrain LOD and traffic hurt **even more** in VR because you are effectively rendering two views — pull them lower than your desktop profile.

For the headset-versus-monitor decision and the full VR-vs-flatscreen math, see [VR vs monitor for flight sim](/flight/vr-vs-monitor-flight-sim); the numbers there are headset-specific and do not map onto the desktop table above.

## The stutter fix nobody mentions: frame pacing

Here is the counterintuitive truth that outranks every slider. **Frame pacing — the consistency of the gap between frames — matters more than the frame count.** A locked, even 35 FPS feels glassy. A 60 that lurches feels broken. Before chasing bigger numbers, stabilize the cadence:

1. **Cap your frame rate to a number you can *hold*.** A capped 40 with even frame times beats an uncapped rate bouncing between 30 and 60. Cap via NVIDIA's "Max Frame Rate," AMD's limiter, or RTSS — often 30, 40, or your refresh-minus-3.
2. **Set Windows to High Performance (or Ultimate Performance).** MSFS is highly sensitive to CPU frequency scaling; the Balanced plan throttles clocks on brief load spikes and produces regular-interval stutters. This one setting kills a whole class of hitching.
3. **Watch VRAM like a hawk.** Keep it under ~90% of your card's capacity in the Dev overlay. The moment textures overflow into system RAM, "frame times spike and stutters become severe and immediate" — sometimes down to single digits. Drop texture resolution one notch, disable frame generation, or lower off-screen pre-caching if you are near the ceiling.
4. **Get streaming off Wi-Fi.** Wired Ethernet is effectively non-negotiable; a rolling cache of **32-64 GB on an SSD** smooths terrain streaming. Delete and rebuild the cache if stutters appear right after a Sim Update.

A steady cap below your peak will feel dramatically smoother than an uncapped rate that yo-yos. This is the single highest-impact change most simmers never make.

## What the community says

Across the MSFS forums, SimTuts, Flightsim.to, and the broader performance scene, the 2026 consensus has hardened around a few points. **Terrain LOD is the universally cited frame-killer** — the first slider veterans pull down, and the biggest single stutter source above 200. **Fauna is the sleeper** — repeatedly fingered as a micro-stutter bug where disabling it entirely (not just lowering it) fixes hitching that no graphics slider touches. And the recurring reminder is that **Sim Update patches change performance** — settings that were optimal at launch are not necessarily optimal now, so re-benchmark after major updates rather than copying an old guide wholesale.

<div class="callout forum">
  <div class="ct">// From the forums</div>
  <p>The thread that keeps resurfacing: someone posts "I have a 4080 and it still stutters at every airport," gets told to lower graphics, drops everything to Low — and still stutters. The answer is almost never the GPU. It is a Balanced power plan throttling the CPU, VRAM quietly spilling into system RAM, or Fauna spawning hitches. Check the FPS overlay's limiter and VRAM number <em>before</em> you touch a single graphics slider. Nine "my expensive GPU stutters" posts out of ten die right there.</p>
</div>

## Pro tips

- **Benchmark one variable at a time** at a fixed, repeatable spot (a busy airport works best because it stresses both CPU and streaming). Change one slider, fly the same approach, compare.
- **Build two profiles:** a "scenery" profile (Terrain LOD high, traffic low, clouds Ultra) and an "airliner" profile (Terrain LOD medium, traffic low, Glass Cockpit high) — the bottleneck flips between VFR sightseeing and a heavy CPU-bound tubeliner.
- **In VR, render scale is the master dial** — everything else is noise next to it. See [VR vs monitor for flight sim](/flight/vr-vs-monitor-flight-sim) for the headset-specific math.
- Smooth frames make precise control easier — if landings still feel twitchy after this, the problem is your input curves, not your GPU. Fix those in [the control curves guide](/flight/flight-sim-control-curves-calibration), and if you are still building the station itself, start with [the beginner setup guide](/flight/best-flight-sim-setup-beginners).

## Warnings and traps

- **DX12 + frame generation is a known stutter combo for some rigs.** DX12 is far more VRAM-hungry than DX11, and stacking frame generation on top pushes 8-12 GB cards into overflow territory where frame times spike hard. If DX12 stutters after an update, test DX11 and test with frame-gen off before blaming your settings.
- **VRAM overflow is a cliff, not a slope.** Performance does not degrade gently as you approach the limit; it falls off a cliff — sometimes to single-digit FPS — the moment you spill into system RAM. Keep the Dev-overlay VRAM number under ~90% and treat texture resolution as a VRAM dial, not an FPS dial.
- **Over-tweaking is its own disease.** If your sim already holds a steady, hitch-free frame rate, **stop tuning.** You will chase placebo gains and reintroduce stutter you did not have. And if your bottleneck is an aging CPU at a dense airport, no graphics setting will save you — that is a hardware conversation, not a slider conversation.

## Who should skip this

If your sim already holds a steady frame rate with no hitching, stop reading and go fly — tuning has sharply diminishing returns the moment the cadence is smooth. And if you are on a six-year-old CPU melting at a photogrammetry-heavy airport, the honest answer is that the frame pacing is a hardware limit, not a settings one. Everyone else: diagnose, spend on the four killers, cap the frame rate, and stop.

## Verdict

The picture you want in MSFS 2024 comes from three moves: **diagnose CPU-vs-GPU first with the Dev overlay, turn down Terrain LOD, Trees, and Traffic before anything else while keeping the cheap settings high, and stabilize frame pacing with an external cap plus High Performance power plan instead of chasing raw FPS.** Layer DLSS Quality on top for near-free frames, save frame generation for the GPU-bound moments, and watch VRAM so it never spills. Do that and a mid-range rig looks and feels like a much more expensive one. Smoothness is a cadence problem first and a horsepower problem a distant second — tune for the cadence and the frames take care of themselves.

## Visual Setup Maps

![The biggest FPS killers, ranked](/images/infographics/flight/msfs-2024-best-graphics-settings-fps-fps-killers-ranked.png)

![Recommended MSFS 2024 settings by GPU tier](/images/infographics/flight/msfs-2024-best-graphics-settings-fps-settings-by-gpu-tier.png)

![CPU-bound or GPU-bound? Read the limiter](/images/infographics/flight/msfs-2024-best-graphics-settings-fps-cpu-vs-gpu-bound-decision.png)

![Stop the stutter: 4 frame-pacing fixes](/images/infographics/flight/msfs-2024-best-graphics-settings-fps-frame-pacing-stutter-fix.png)

## Sources Checked

Source review date: July 2, 2026. Every FPS figure in this guide is a documented **community/benchmark range** from the sources below, not a lab-authoritative "correct" number. MSFS performance is per-rig, per-resolution, per-aircraft, and shifts with every Sim Update — verify on your own hardware and re-benchmark after major patches.

Settings + performance guides (paraphrased in our voice): [SimTuts — Best MSFS 2024 Graphics Settings (2026)](https://simtuts.com/guides/msfs-2024-graphics-settings-guide), [Flightsim.to — Complete MSFS 2024 Performance Optimization Guide](https://flightsim.to/guides/the-complete-msfs-2024-performance-optimization-guide-more-fps-less-stutter-better-flights), [MSFS Addons — best visuals and FPS graphics guide](https://msfsaddons.com/2024/11/29/unlock-the-best-visuals-and-fps-in-msfs-2024-with-this-guide/), [PC Optimized Settings — MSFS 2024 optimization](https://pcoptimizedsettings.com/microsoft-flight-simulator-2024-optimization-best-graphics-settings-for-msfs-2024/).

VR guides: [MSFS Addons — VR with DLSS 4 and Pimax Crystal Light](https://msfsaddons.com/2025/03/02/setting-up-vr-in-msfs-2024-with-dlss-4-and-the-pimax-crystal-light/), [Pimax — MSFS 2024 VR Setup & Settings](https://pimax.com/blogs/blogs/msfs2024-virtual-reality-vr-setup-settings), [Gamers By Night — MSFS optimal VR settings](https://www.gamersbynight.com/microsoft-flight-simulator-vr-settings/).

Stutter, frame-gen + community reads: [MSFS Forums — Frame Generation flickering/stuttering](https://forums.flightsimulator.com/t/extreme-flickering-and-stuttering-with-frame-generation/678009), [PMDG Forum — DX12 + Frame Generation issues](https://forum.pmdg.com/forum/main-forum/general-discussion-news-and-announcements/281198-dx12-frame-generation-issues), [AVSIM — DX12 VRAM fix discussion](https://www.avsim.com/forums/topic/638750-is-a-dx12-vram-fix-feasible-in-msfs/), [ResetXPDR MSFS_AutoFPS (auto TLOD/FPS tool)](https://github.com/ResetXPDR/MSFS_AutoFPS), [MSFS Forums — 2026 graphics settings overview](https://forums.flightsimulator.com/t/msfs-2024-graphic-settings-overview-in-2026/757241).
