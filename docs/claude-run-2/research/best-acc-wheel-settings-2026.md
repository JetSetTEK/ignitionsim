# Research Pack: Best ACC Wheel Settings 2026

- **Article:** Best ACC Wheel Settings 2026: Per-Base FFB That Actually Works
- **Slug:** `racing/best-acc-wheel-settings-2026`
- **Curator:** Duke Alvarez (racing)
- **Date researched:** 2026-07-02

## Source table

| Claim / need | Source | URL | Date accessed | Used where | Confidence | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| Min Force = 0 on any direct-drive base; 3-8% only for G29/G920-class gear wheels | SimRacingCockpit + Coach Dave + Trophi.ai | https://simracingcockpit.gg/acc-wheel-settings/ ; https://coachdaveacademy.com/tutorials/how-to-set-up-force-feedback-for-acc/ ; https://www.trophi.ai/post/assetto-corsa-competizione-ffb-setup-guide | 2026-07-02 | "Two sliders" section, table, FAQ, verdict | High | Unanimous across all DD guides |
| Road Effects should be LOW on DD (0-15%, often 0); higher (20-40%) only on gear/belt | SimRacingCockpit + SimRacingSetup MOZA + Trophi.ai | https://simracingcockpit.gg/acc-wheel-settings/ ; https://simracingsetup.com/product-guides/acc-moza-force-feedback-settings/ ; https://www.trophi.ai/post/assetto-corsa-competizione-ffb-setup-guide | 2026-07-02 | "Two sliders" section, table, FAQ, verdict | High | CORRECTS the prior version of this article, which claimed Road Effects should be HIGH (real telemetry). Sources DISAGREE on the *reason* (canned vibration vs real-but-noisy) but AGREE the DD answer is LOW. See warnings. |
| Gain scales DOWN with torque: 5Nm ~90-100%, 12Nm ~50-60%, 21Nm+ ~30-40% | SimRacingCockpit (CSL DD 100%, ClubSport DD 55%, Podium DD2 30%; Moza R5 95%, R21 35%) + Trophi.ai (high-end 60+, mid 70-80, entry 100) | https://simracingcockpit.gg/acc-wheel-settings/ ; https://www.trophi.ai/post/assetto-corsa-competizione-ffb-setup-guide | 2026-07-02 | Per-base table, FAQ | High | Two valid schools: scale in-game Gain (this table) OR fix Gain ~90% and scale strength in base software (SimRacingSetup MOZA guide). Article presents both. |
| Dynamic Damping: ~100% default on entry DD; drop on high-torque if base software already damps | Trophi.ai + SimRacingCockpit (fixed ~60%) + SimRacingSetup MOZA (100%) | https://www.trophi.ai/post/assetto-corsa-competizione-ffb-setup-guide ; https://simracingcockpit.gg/acc-wheel-settings/ | 2026-07-02 | Table, oscillation section, FAQ | Medium | Sources diverge (60% fixed vs 100%); article gives a range and says "check current / tune to taste" |
| No in-game clipping/force-output meter in ACC — tune by feel | Trophi.ai ("no in-game display showing the force output") + Coach Dave | https://www.trophi.ai/post/assetto-corsa-competizione-ffb-setup-guide | 2026-07-02 | "Reading the feedback" section, FAQ | High | Directly contradicts prior version's claim of an "Analyze tab clipping graph" — that is an rFactor2/AC-style tool, NOT ACC. Removed. |
| Steering rotation: set base software and ACC to same value (900° or 1080°), enable ACC per-car soft-lock | Coach Dave steering locks + SimRacingSetup + SimRacingCockpit | https://coachdaveacademy.com/tutorials/correct-steering-locks-and-ratios-in-acc/ ; https://simracingsetup.com/assetto-corsa/acc-steering-lock-settings/ ; https://simracingcockpit.gg/acc-wheel-settings/ | 2026-07-02 | Steering-lock section, FAQ | High | Grounds the "silent steering mismatch" claim. Prior version invented a "controls.json bug" filename not corroborated by sources — reframed to the real degrees-mismatch issue. |
| FFB Frequency 333Hz for modern wheels; 111Hz for G25/G27 | Trophi.ai | https://www.trophi.ai/post/assetto-corsa-competizione-ffb-setup-guide | 2026-07-02 | Buy-order, FAQ | High | Some sources cite 400Hz as cleanly handled by modern DD; 333Hz is the safe universal default |
| Base pricing sanity (MOZA R12 ~$429; Simagic Evo Pro $699 / Evo $549 / Sport $399; Fanatec prices moved in 2026) | DirectDriveWheels + product JSON | https://directdrivewheels.com/bases/moza-r12-v2/ ; https://directdrivewheels.com/bases/simagic-alpha-evo-12/ | 2026-07-02 | Gearpick prices (all "check current") | Medium | Fanatec pricing volatile in 2026 (one source cited a DD+ increase to ~$1299); left every price as "check current" to avoid staleness |

## Community pattern notes (paraphrased in our voice)
- The most common "my car just feels wrong in ACC" thread resolves to one of three things: a non-zero Min Force on a DD base, a steering-degrees mismatch between base software and the game, or Road Effects cranked too high — almost never the Gain value people obsess over.
- Owners frequently copy a Logitech G29 settings table onto a direct-drive base and then complain the base feels "numb" (Min Force fake weight) or "noisy/buzzy" (Road Effects too high). Both are gear-wheel compensations that are wrong on DD.
- Recurring blunt advice to newcomers: zero the Min Force, drop Road Effects, match your rotation, then tune Gain by feel — because ACC gives you no clipping meter to read.

## Credible warnings / caveats
- **Road Effects semantics are genuinely disputed in the sources.** Trophi.ai and Coach Dave describe it as real track-surface/telemetry detail; SimRacingCockpit and several DD guides describe it as a canned/artificial vibration layer. They CONVERGE on the practical answer for direct drive (run it LOW, 0-15%), so the article states the LOW recommendation as the safe consensus and does NOT assert a single mechanism. This is the biggest factual correction versus the prior version, which claimed Road Effects "amplifies real suspension telemetry" and should be run HIGH — that is contradicted by current 2026 DD guides.
- **ACC has no clipping meter.** The prior version referenced an "Analyze tab steering-torque graph" for reading clipping; that is not a real ACC feature (it conflates other sims' tools). Corrected to feel-based tuning.
- **Per-base exact numbers vary by source and by base-software strength.** Every number in the table is a start point flagged "check current," because the two scaling schools (in-game Gain vs base-software strength) produce different in-game Gain figures for the same base.
- Fanatec base prices moved during 2026; do not quote a hard Fanatec figure without re-checking.

## Products discussed
| Product | Gear page | Amazon (search) | Local image | Verified? |
| --- | --- | --- | --- | --- |
| MOZA R12 | /racing/gear/moza-r12 | MOZA+R12+wheelbase | /images/gear/racing/moza-r12.jpg | YES (hero + shotgrid + 2 gearpicks) |
| Simagic Alpha Evo Pro | /racing/gear/simagic-evo-pro | Simagic+Alpha+Evo+Pro | /images/gear/racing/simagic-evo-pro.jpg | YES (shotgrid) |
| Fanatec ClubSport DD+ | /racing/gear/fanatec-clubsport-dd-plus | Fanatec+ClubSport+DD+wheel+base | /images/gear/racing/fanatec-clubsport-dd-plus.webp | YES (shotgrid + gearpick) |
| Simucube 2 Sport | /racing/gear/simucube-2-sport | Simucube+2+Sport | /images/gear/racing/simucube-2-sport.jpg | YES (shotgrid) |
| Fanatec CSL DD | /racing/gear/fanatec-csl-dd | Fanatec+CSL+DD | /images/gear/racing/fanatec-csl-dd.jpg | **NO — text + Amazon link only; prior version wrongly embedded this unverified image, now removed** |
| Simagic Alpha Evo (12Nm) | /racing/gear/simagic-evo | Simagic+Alpha+Evo | /images/gear/racing/simagic-evo.jpg | **NO — text-only internal link** |
| MOZA R9 / R5 / R16 / R21 | /racing/gear/moza-r9 etc. | — | (various) | R9/R5 NOT verified; referenced in table as text only |
| Cammus C5 | /racing/gear/cammus-c5 | Cammus+C5 | /images/gear/racing/cammus-c5.jpg | **NO — table text only** |

## Unresolved / for Codex to re-check
- **Road Effects final call:** confirm the LOW-on-DD recommendation still holds after any 2026 ACC patch; the two-camp mechanism dispute is noted but the practical answer is stable. If a future patch changes Road Effects behavior, this is the line to revisit first.
- **Exact per-base Gain numbers:** the article presents ranges reconciled from two scaling schools. If Codex wants a single authoritative number per base, pick ONE school (recommend: scale in-game Gain, leave base software near full) and lock the table to it.
- **Dynamic Damping:** sources split 60% vs 100%. Left as a range. Resolve if a single number is wanted.
- **Fanatec CSL DD photo:** needed before it can be pictured (currently text + Amazon link). Same needs-download as the wheelbases article manifest.
- **FFB frequency 333 vs 400Hz:** article says 333Hz (safe universal). Some 2026 DD guides say modern bases handle 400Hz cleanly. Low stakes; leave 333Hz.
- No product prices were quoted as hard figures — all "check current." No fabricated specs, dates, ratings, stock, or sentiment.
</content>
</invoke>
