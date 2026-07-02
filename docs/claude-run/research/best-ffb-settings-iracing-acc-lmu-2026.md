# Research Pack: Best FFB Settings 2026 (iRacing, ACC, Le Mans Ultimate)

- **Article:** Best FFB Settings 2026: iRacing, ACC and Le Mans Ultimate Dialed In
- **Slug:** `racing/best-ffb-settings-iracing-acc-lmu-2026`
- **Curator:** Duke Alvarez (racing)
- **Date researched:** 2026-07-02
- **Article type:** Settings how-to (low product-density by nature — this is a tuning guide, not a product roundup)

## Uncertainty note (read first)

Every numeric FFB value below is a **starting-point range** attributed to a named source, not an authoritative "correct" setting. Force feedback is per-base, per-car, per-rig and per-driver; the guides themselves stress this. The article frames all numbers as ranges + "verify against the clip meter" and never presents a single number as definitive. Where a specific base's percentage is quoted, it comes from that manufacturer's or a named outlet's published recommendation.

## Source table

| Claim / need | Source | URL | Date accessed | Used where | Confidence | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| iRacing: set Wheel Force = base peak Nm (safety ceiling); use Max Force + Auto per car; GT3 settles ~35–50Nm post-Auto; Linear Mode ON for DD; Min Force 0% on DD; Damping 0% | SimRacingCockpit | https://simracingcockpit.gg/iracing-ffb-settings/ | 2026-07-02 | iRacing section, tables, clipping, warnings | High | "Never hitting Auto per new car" flagged as biggest single mistake |
| iRacing: MOZA per-base in-game Strength — R5 60, R9/R12 65, R16 80, R21 90; Pit House FFB Intensity 80–100%, Road Sensitivity 10, Natural Inertia 150–200%, Wheel Damper 30–35%; Linear Mode On | MOZA official (US) | https://us.mozaracing.com/blogs/blog/moza-ffb-settings-for-iracing-r5-r9-r12-r16-and-r21 | 2026-07-02 | iRacing section, MOZA gearpick, table | High | Manufacturer's own published numbers |
| iRacing native 360Hz FFB for MOZA (iRacing 6.10, auto-enabled); third-party layers (irFFB) no longer mandatory for DD | SimRacingCockpit / MOZA support | https://simracingcockpit.gg/iracing-ffb-settings/ ; https://support.mozaracing.com/en/support/solutions/articles/70000628472-iracing | 2026-07-02 | iRacing 360Hz note, FAQ | Medium | 360Hz auto-enabled by default on MOZA in recent iRacing builds |
| Min Force via WheelCheck-generated LUT routed through irFFB (mainly for belt/gear wheels like G29/G920/G923 at 10–15%) | SimRacingCockpit / DirectDriveWheels | https://simracingcockpit.gg/iracing-ffb-settings/ ; https://directdrivewheels.com/guides/iracing-ffb-settings/ | 2026-07-02 | Telemetry-tools warning, clipping section | Medium | WheelCheck + irFFB is the LUT workflow; DD generally wants Min Force 0 |
| ACC: Gain ~50% start; Min Force 0% for DD (3–8% for belt/gear); Dynamic Damping low/0 on DD; per-car torque multiplier available | SimRacingSetup / Coach Dave / Trophi | https://simracingsetup.com/assetto-corsa/acc-best-force-feedback-settings-xbox-ps4/ ; https://coachdaveacademy.com/tutorials/how-to-set-up-force-feedback-for-acc/ ; https://www.trophi.ai/post/assetto-corsa-competizione-ffb-setup-guide | 2026-07-02 | ACC section, table | Medium | Min Force 0 on DD is the consistent cross-source recommendation; belt/gear 3–8% |
| LMU: Steering Torque Capability = base peak Nm; FFB Strength — <10Nm 90%, 10–18Nm 100%, >18Nm 60–100%; Smoothing 0; Min Torque 0% on DD >8–10Nm; Collision 100%; per-class tweaks (LMP2 90% on low-Nm, Hypercar STS 105%) | RaceControl News | https://news.racecontrol.gg/hardware/le-mans-ultimate-ffb-settings-for-dd-bases/ | 2026-07-02 | LMU section, table | High | Concrete DD-specific LMU numbers |
| LMU: keep Smoothing low on DD; FFB Strength 70–80% often more usable than maxed; run base software ~100% | SimRacingCockpit | https://simracingcockpit.gg/lmu-wheel-settings/ | 2026-07-02 | LMU section | Medium | Confirms low-smoothing + back-off-strength pattern |
| MOZA Hands-Off Protection OFF for LMU (bugs out, cuts FFB mid-corner on R5–R21); Studio 397 V1.3 (31 Mar 2026) broke the Pit House "LMU Preset" → notchy/dead FFB | SimRacingCockpit / Coach Dave | https://simracingcockpit.gg/lmu-wheel-settings/ ; https://coachdaveacademy.com/tutorials/moza-settings-for-le-mans-ultimate/ | 2026-07-02 | LMU section, warnings | Medium | Specific, current MOZA+LMU footgun worth surfacing |
| Fanatec LMU: NDP 5–10, INT 1–2, FEI 80–100 | SimRacingCockpit | https://simracingcockpit.gg/lmu-wheel-settings/ | 2026-07-02 | LMU section (Fanatec aside) | Medium | Fanatec-specific filter guidance |
| DRIVER61 iRacing FFB method (clipping-first, Max Force via meter) | Driver61 | https://driver61.com/sim-racing/iracing-force-feedback-setup/ | 2026-07-02 | Clipping explainer | Medium | Corroborates meter-driven Max Force approach |

## Core principles (cross-source consensus)

1. **Clipping is the #1 mistake.** Every source agrees: the game requesting more torque than the motor can deliver flattens peaks to a dead wall and deletes the most important information. Fix = lower in-game strength/gain until the meter stops sitting in the red.
2. **Wheel Force / Steering Torque Capability = your base's real peak Nm.** In iRacing and LMU this is a safety ceiling / scaling reference, NOT a "make it stronger" dial. Setting it above your hardware's Nm removes the safety margin and risks a violent crash spike (SimRacingCockpit).
3. **Neutralize base software, tune in-game.** Base at ~100% strength, minimal filtering; do the real work on the sim's sliders.
4. **Min Force ~0 on direct drive.** DD bases have no mechanical deadzone, so Min Force / Min Torque should be 0 (or a hair) on DD; it's a belt/gear-wheel crutch (3–8% / 10–15%).
5. **Tune per car class, not one global number.** GT3, LMP2/LMP, Hypercar and no-power-steering classics clip at different points on the same base.

## Per-sim starting-point summary (all RANGES, verify against meter)

### iRacing
- Wheel Force = base peak Nm (e.g. R12 = 12, DD+ ~18, Simucube 2 Sport = 17). Safety ceiling, do not inflate.
- Linear Mode **ON** for any DD base. Min Force **0%**. Damping **0%**.
- Use **Auto** (map to a button) after 2 clean laps in every new car to calibrate Max Force. Then trim 5–10% if a curb-heavy car still clips.
- MOZA published in-game Strength: R5 60, R9/R12 65, R16 80, R21 90; Pit House: FFB Intensity 100% (R21 80%), Road Sensitivity 10, Natural Inertia 200% (R21 150%), Wheel Damper 35% (R16 30%).
- MOZA + iRacing: native **360Hz** auto-enabled in recent builds; irFFB no longer mandatory for DD.

### ACC
- Gain **~50% start**, then walk down under the clip line (peaks off the top of the steering-torque graph in replay Analyze tab).
- Min Force **0%** on DD (3–8% belt/gear).
- Dynamic Damping **low / 0** on DD.
- Per-car **torque multiplier**: drop the specific offending car's multiplier instead of nuking global Gain.

### Le Mans Ultimate (rF2 engine)
- Steering Torque Capability = base peak Nm.
- FFB Strength: **<10Nm → 90%**, **10–18Nm → 100%**, **>18Nm → 60–100%** (subjective).
- Smoothing **0** (keep low to retain slip detail).
- Min Torque **0%** on DD >8–10Nm. Collision Strength 100% (down from 150% default).
- Per-class: LMP2 → 90% on low-Nm bases; Hypercar → Steering Torque Sensitivity 105% for low-speed feel.
- Fanatec: NDP 5–10, INT 1–2, FEI 80–100.
- **MOZA warning:** Hands-Off Protection **OFF** in Pit House (cuts FFB mid-corner); the Mar 2026 Studio 397 V1.3 update broke Pit House's "LMU Preset" — build settings manually rather than trusting that preset.

## Telemetry / diagnostic tools referenced
- **iRacing in-game force meter** — the primary clip truth-teller.
- **ACC replay Analyze tab** — steering-torque graph; a flat top line = clipping.
- **WheelCheck + irFFB** — LUT generation for linearizing FFB (mainly belt/gear; DD usually doesn't need it).
- **SimHub** — telemetry/overlay dashboards (can surface FFB/clipping overlays); useful but optional on DD.

## Product angle (LOW density by design)
This is a settings how-to. Product mentions are limited to the **verified wheelbases the settings genuinely target**, used as gearpick asides — no forced roundup. Verified images available and used:

| Product | Gear page | Amazon (search) | Local image | Verified? |
| --- | --- | --- | --- | --- |
| MOZA R12 | /racing/gear/moza-r12 | MOZA+R12+wheelbase | /images/gear/racing/moza-r12.jpg | YES |
| Fanatec ClubSport DD+ | /racing/gear/fanatec-clubsport-dd-plus | Fanatec+ClubSport+DD | /images/gear/racing/fanatec-clubsport-dd-plus.webp | YES |
| Simagic Alpha Evo Pro | /racing/gear/simagic-evo-pro | Simagic+Alpha+Evo+Pro+wheelbase | /images/gear/racing/simagic-evo-pro.jpg | YES |
| Simucube 2 Sport | /racing/gear/simucube-2-sport | Simucube+2+Sport+wheel+base | /images/gear/racing/simucube-2-sport.jpg | YES |

Additional verified racing images available if a shotgrid is wanted: moza-r9.jpg, moza-r5.jpg, asetek-forte.jpg, fanatec-gt-dd-pro.jpg, simagic-evo-ultra.jpg.

## Hero image decision
No dedicated FFB hero photo exists as a verified asset. Per the HARD IMAGE RULE, the heroImage must be a VERIFIED path. Using **/images/gear/racing/moza-r12.jpg** as the hero — the R12 (Pit House) is a primary base the guide's iRacing/LMU settings target, so it's on-topic rather than decorative. (The pre-existing frontmatter pointed at `/images/racing/best-ffb-settings-iracing-acc-lmu-2026.jpg`, which is NOT in verified-product-images.json and cannot be used.)

## Unresolved / for a later pass
- No verified editorial "hands-on-wheel with clipping meter" scene image exists; a Codex composite (real base overlay + AI garage scene) is listed in the manifest as needs-download/generate. Not blocking — the guide is visually carried by settings tables + gearpicks + callouts.
- ACC exact per-base Gain percentages vary widely by source and the Coach Dave settings image failed to load; article deliberately gives Gain as a "~50% start, walk down" range rather than a hard per-base number.
