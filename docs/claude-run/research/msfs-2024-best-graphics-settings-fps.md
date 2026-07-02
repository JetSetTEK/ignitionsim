# Research Pack: MSFS 2024 Best Graphics Settings for FPS (2026)

- **Article:** MSFS 2024 Best Graphics Settings in 2026: Stop the Stutter, Keep the Frames
- **Slug:** `flight/msfs-2024-best-graphics-settings-fps`
- **Curator:** Mac Donovan (flight)
- **Article type:** settings how-to (naturally very low product-density — essentially zero sim-hardware products)
- **Date researched:** 2026-07-02

## Source table

| Claim / need | Source | URL | Date accessed | Used where | Confidence | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| Terrain LOD is the #1 FPS lever; ~-36% at 400 vs mid, diminishing returns above 200; biggest stutter source over 200 | SimTuts + Flightsim.to | https://simtuts.com/guides/msfs-2024-graphics-settings-guide ; https://flightsim.to/guides/the-complete-msfs-2024-performance-optimization-guide-more-fps-less-stutter-better-flights | 2026-07-02 | Kill-list table, verdict, tip | High | Percentages are community benchmarks, framed as ranges |
| Trees up to ~34% Low→Ultra; High adds tree shadowing | SimTuts | https://simtuts.com/guides/msfs-2024-graphics-settings-guide | 2026-07-02 | Kill-list #2 | High | Recommend High (skip Ultra) |
| Volumetric Clouds ~22% when GPU-limited | SimTuts | https://simtuts.com/guides/msfs-2024-graphics-settings-guide | 2026-07-02 | Kill-list #3 | High | High recommended, Ultra w/ headroom |
| AI Traffic ~10-15% on mid CPUs (CPU-bound) | SimTuts | https://simtuts.com/guides/msfs-2024-graphics-settings-guide | 2026-07-02 | Kill-list #4, tier table | High | Low/Medium |
| Object LOD ~14% at minimum; range 10-200 | SimTuts | https://simtuts.com/guides/msfs-2024-graphics-settings-guide | 2026-07-02 | Kill-list #5 | High | 100-150 recommended |
| Raytraced Shadows ~8-12%, cockpit-interior | SimTuts | https://simtuts.com/guides/msfs-2024-graphics-settings-guide | 2026-07-02 | Kill-list #6, tier table | High | Off for performance/balanced |
| Fauna = documented micro-stutter spawning bug; disable ENTIRELY (not Low), ~95% stutter reduction reported | SimTuts + Flightsim.to | (both above) | 2026-07-02 | Kill-list #7, community, warnings | Medium-High | Bug-level; Off not Low |
| Cheap settings (Glass Cockpit ~0%, Shadow Maps <1%, AF <1%, Light Shafts minimal, AO <4%) | SimTuts | https://simtuts.com/guides/msfs-2024-graphics-settings-guide | 2026-07-02 | Kill-list tail | High | Turn all up |
| Texture res ~0% FPS but big VRAM (Ultra ~8.2 GB vs Medium ~5.4 GB) | SimTuts | https://simtuts.com/guides/msfs-2024-graphics-settings-guide | 2026-07-02 | Kill-list, warnings | High | VRAM dial not FPS dial |
| DLSS Quality ~67% internal res; 1440p Quality only; 4K Quality/Balanced | SimTuts | https://simtuts.com/guides/msfs-2024-graphics-settings-guide | 2026-07-02 | DLSS section, tier table | High | FSR any-GPU equivalent |
| Frame Gen ~30-35% FPS; does NOT reduce CPU bottleneck; +1 GB VRAM min; 8 GB cards struggle 1440p+ | SimTuts + Flightsim.to | (both above) | 2026-07-02 | DLSS section, tip, warnings, FAQ | High | GPU-bound only |
| 1080p/1440p GPU-bound; 4K flips CPU-bound (photogrammetry streaming overhead) | SimTuts | https://simtuts.com/guides/msfs-2024-graphics-settings-guide | 2026-07-02 | CPU/GPU section, FAQ | High | |
| VRAM: 4K Ultra 12 GB+, 1440p 8-10 GB, 1080p 6-8 GB; overflow = severe immediate stutter, single-digit FPS | SimTuts + Flightsim.to | (both above) | 2026-07-02 | Frame-pacing, warnings, tier table | High | Cliff not slope |
| GPU-tier settings (Balanced/Quality/Ultra TLOD 100/150/200 etc., FPS targets) | SimTuts | https://simtuts.com/guides/msfs-2024-graphics-settings-guide | 2026-07-02 | Tier table | High | Starting points |
| Windows High Performance / Ultimate power plan eliminates regular-interval CPU-scaling stutters | Flightsim.to | https://flightsim.to/guides/... | 2026-07-02 | Frame-pacing #2, forum callout, warnings | High | MSFS sensitive to CPU freq scaling |
| Capped even 40 FPS beats uncapped 30-60 bounce | SimTuts | https://simtuts.com/guides/msfs-2024-graphics-settings-guide | 2026-07-02 | Frame-pacing #1, verdict | High | Frame-pacing philosophy |
| Rolling cache 32-64 GB on SSD; wired Ethernet non-negotiable; rebuild cache after updates | Flightsim.to | https://flightsim.to/guides/... | 2026-07-02 | Frame-pacing #4 | High | Streaming stutters |
| DX12 far more VRAM-hungry than DX11; DX12+frame-gen stutter combo | AVSIM + PMDG forum | https://www.avsim.com/forums/topic/638750-is-a-dx12-vram-fix-feasible-in-msfs/ ; https://forum.pmdg.com/forum/main-forum/general-discussion-news-and-announcements/281198-dx12-frame-generation-issues | 2026-07-02 | Warnings | Medium | Forum-reported; test DX11 |
| Frame-gen flicker/stutter reports | MSFS Forums | https://forums.flightsimulator.com/t/extreme-flickering-and-stuttering-with-frame-generation/678009 | 2026-07-02 | DLSS caveat, warnings | Medium | Community thread |
| VR: OpenXR runtime preferred; render scale ~80% start, OpenXR default 100%, 4090 up to 150%; DLSS 4 + frame-gen; Pimax 90Hz+, foveated + smart smoothing, 75-80% scale | MSFS Addons + Pimax + Gamers By Night | https://msfsaddons.com/2025/03/02/setting-up-vr-in-msfs-2024-with-dlss-4-and-the-pimax-crystal-light/ ; https://pimax.com/blogs/blogs/msfs2024-virtual-reality-vr-setup-settings ; https://www.gamersbynight.com/microsoft-flight-simulator-vr-settings/ | 2026-07-02 | VR section | Medium-High | Render scale is master dial |
| Sim Update patches change performance; re-benchmark after updates | MSFS Forums 2026 overview + Flightsim.to | https://forums.flightsimulator.com/t/msfs-2024-graphic-settings-overview-in-2026/757241 | 2026-07-02 | Community, warnings, sources caveat | High | Reason for range-not-authoritative framing |

## Community pattern notes (paraphrased in our voice)
- "Expensive GPU still stutters" → answer is almost never the GPU. It's Balanced power plan throttling CPU, VRAM spilling into system RAM, or Fauna spawning hitches. Check FPS-overlay limiter + VRAM number before touching sliders.
- Terrain LOD is the universally-cited first slider to pull, and the biggest single stutter source above 200.
- Fauna is the sleeper micro-stutter bug — disable fully (not Low).
- Frame-pacing > frame-count: a locked cap beats an uncapped yo-yo.
- Re-benchmark after every Sim Update; old guides go stale.

## Credible warnings / caveats
- VRAM overflow is a cliff, not a slope — single-digit FPS the moment textures spill to system RAM.
- DX12 is far more VRAM-hungry than DX11; DX12 + frame-gen pushes 8-12 GB cards into overflow. Test DX11 / frame-gen off if DX12 stutters post-update.
- Frame generation does NOT fix a CPU bottleneck; it only helps GPU-bound.
- Over-tweaking reintroduces stutter; stop once cadence is smooth.
- Aging CPU at dense photogrammetry airport = hardware limit, not a slider fix.

## Products discussed
None. This is a settings how-to. **No sim-hardware products are relevant** to graphics/FPS tuning, so the article carries ZERO product cards and ZERO product images by design. The only images this page should ever carry are Codex-produced infographics (settings tables, FPS-killer chart) — see the image manifest. VR headsets (Pimax Crystal Light) are mentioned in prose only as context; no verified flight-VR-headset product image exists and none is embedded.

## Image reality
- Existing hero `/images/flight/msfs-2024-best-graphics-settings-fps.jpg` is retained (a flight-sim battlestation scene). It is NOT in `verified-product-images.json` because that manifest is a gear-product allowlist, not a scene-art allowlist; the hero is existing site art, not a product photo, so per run rules it stays.
- No verified product image in `verified-product-images.json` is relevant to an FPS/settings guide, so none is embedded in the body. This is correct and expected for a settings how-to.

## Unresolved / for Codex to re-check
- The FPS percentages are community benchmarks and vary by rig/resolution/aircraft. If Codex builds the FPS-killer chart, label it as "community-reported ranges, verify on your rig."
- Confirm the exact current Sim Update / build when Codex refreshes, since performance shifts per patch (guide deliberately avoids naming a build).
- Optional: capture a licensed/owned MSFS Dev-overlay screenshot (CPU-bound vs GPU-bound MainThread reading) to strengthen the diagnosis section — must be owned, not scraped. Non-blocking.
