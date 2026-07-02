# Research Pack: How to Fix FFB Clipping on a Direct-Drive Wheel (2026)

- **Article:** How to Fix FFB Clipping on a Direct-Drive Wheel (2026)
- **Slug:** `racing/how-to-fix-ffb-clipping-direct-drive-2026`
- **Curator:** Duke Alvarez (racing) | **Tier:** B | **Type:** how-to (low product density)
- **Date researched:** 2026-07-02

This is a **low-product-density how-to / explainer**. It is not a buyer's guide — the only genuinely relevant product is a stronger wheelbase for the narrow "confirmed real clipping at a sane gain" edge case. One verified product image is embedded (MOZA R12) as hero + one gearpick. The article leans on a decision tree, per-sim tables/callouts, and tip/forum callouts rather than product cards.

## Source table

| Claim / need | Source | URL | Date accessed | Used where | Confidence | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| iRacing: press F for meter box; bar marked F fills and turns **orange** at max = clipping; a little orange on big hits is fine | iRacing support | https://support.iracing.com/support/solutions/articles/31000133494-meter-box-f-key-in-game- | 2026-07-02 | Step 1 meter table, FAQ | High | Corrected prior draft's "red" to "orange" per official wording |
| iRacing: Wheel Force = base peak Nm (rescales slider); Auto samples laps then sets Max Force; higher Max Force = lighter wheel | iRacing support + SimRacingCockpit | https://support.iracing.com/support/solutions/articles/31000133335-controller-setup-and-calibration ; https://simracingcockpit.gg/torque-settings-iracing/ | 2026-07-02 | Step 3 iRacing | High | |
| iRacing DD: Linear Mode ON, Min Force 0; Min Force 10–15% is a belt/gear (G29/G920/T300) setting, NOT DD | directdrivewheels.com | https://directdrivewheels.com/guides/iracing-ffb-settings/ | 2026-07-02 | Step 3 iRacing, "Who should skip" | High | |
| 2026: iRacing native 360Hz means irFFB no longer mandatory for DD; irFFB2026 rewrite (June 2026) adds Pacejka self-aligning-torque cues + SimHub clipping-% overlay + auto-tune Max Force; Wheelcheck still useful on belt/gear | directdrivewheels.com + irFFB2026 GitHub | https://directdrivewheels.com/guides/iracing-ffb-settings/ ; https://github.com/thogue95/irFFB2026 | 2026-07-02 | irFFB/Wheelcheck section, FAQ | High | irFFB2026 confirmed active/rebuilt; framing = tool alive but not needed for the clipping fix. Season-dependent — re-verify at cert |
| ACC: **no clean built-in numeric clipping meter**; use free FFBClip app (graph: game-requested vs delivered force) or SimHub overlay, or reduce gain until dead wall goes; DD = base 100%, tune in-game Gain; per-car adjustment is ACC's superpower | Coach Dave Academy + trophi.ai + OverTake (FFBClip) | https://coachdaveacademy.com/tutorials/how-to-set-up-force-feedback-for-acc/ ; https://www.trophi.ai/post/assetto-corsa-competizione-ffb-setup-guide ; https://www.overtake.gg/downloads/ffbclip-app.7910/ | 2026-07-02 | Step 1 meter table, Step 3 ACC | High | **Corrected** prior draft's "Analyze-tab Steering Torque graph" claim — trophi.ai explicitly says ACC has no in-game force-output display; FFBClip/SimHub is the real route |
| LMU: Steering Torque Capability = base peak Nm exactly; sub-10Nm bases drop FFB Strength to ~90%; 18Nm+ bases won't clip at 100% and often run 60%; FFB Smoothing softens curb spikes | SimRacingCockpit LMU | https://simracingcockpit.gg/lmu-wheel-settings/ | 2026-07-02 | Step 3 LMU | High | Firmware-dependent |
| Clipping = analogue signal exceeds 100%, top sheared flat; cure is lower gain not more torque | Driver Labs 2026 + Joltfly | https://driver-labs.com/ffb-clipping-guide-2026 ; https://joltfly.com/fix-ffb-clipping-the-ultimate-sim-racing-tuning-guide/ | 2026-07-02 | What clipping is, traps | Medium | Paraphrased in our voice |
| SimHub is a free overlay platform; community FFB-meter dashboards draw a live force bar for sims without a native meter (rF2/LMU/ACC) | SimHub official + OverTake community dashboards | https://www.simhubdash.com/ | 2026-07-02 | Step 1 meter table, tools | Medium | SimHub has no single built-in one-click clip warning (on-site request thread is 2020); capability = community dashboards + irFFB2026 overlay. Article framed as "community FFB overlay," not a native feature |
| MOZA R12: 12Nm peak, NexGen 4.0, native iRacing 360Hz support; ~$429 US ($549 CAD on MOZA CA-geo site) | MOZA official | https://mozaracing.com/products/r12-wheelbase | 2026-07-02 | gearpick, "when more torque helps", FAQ | High | US price not shown on CA-geo page — labeled "check current" |

## Community pattern notes (paraphrased in our voice)
- The recurring "my expensive base feels dead" thread almost always resolves to gain maxed + meter buried at the top; the fix posted back is always "turn it down until the bar moves again." Loud is not informative.
- A little clipping on the biggest hits (curb strikes, hard lockups) is healthy and expected; only *continuous* clipping through ordinary corners is the problem.
- "Fix the tuning before you buy torque" is the most repeated regret — same theme as the wheelbase and pedals guides.
- MOZA Hands-Off Protection bugging out and cutting FFB mid-corner is frequently mis-diagnosed as clipping or a dead base.

## Credible warnings / caveats
- **"Dead" feel has three causes; only one is clipping.** Strong-but-flat-under-load = clipping (lower gain). Weak-everywhere = too little gain / low-torque base (raise gain). Notchy-on-straights = cogging / non-zero Min Force on DD / over-filtering (set Min Force 0). Lowering gain fixes only the first — this is why the article opens Step 0 with a decision tree.
- Never stack base-side strength on top of in-game gain — clip twice, chase your tail. Base at neutral 100%, tune in-game.
- More torque does NOT fix clipping if you re-max the gain — you just clip the bigger base harder.
- Min Force 10–15% is a belt/gear-wheel setting; on DD it adds a robotic straight-line rattle. Set DD Min Force to 0.
- No fabricated gain numbers: exact per-car values depend on base, firmware and title — flagged "check current" throughout.

## Products discussed
| Product | Gear page | Amazon (search) | Local image | Verified? | Treatment in body |
| --- | --- | --- | --- | --- | --- |
| MOZA R12 | /racing/gear/moza-r12 | MOZA+R12+wheelbase | /images/gear/racing/moza-r12.jpg | **YES** | Hero + one gearpick (edge-case "more headroom" pick only) |
| Fanatec GT DD Pro (8Nm) | /racing/gear/fanatec-gt-dd-pro | — | /images/gear/racing/fanatec-gt-dd-pro.jpg | YES (not embedded) | Text example only ("a Fanatec GT DD Pro is 8" for Wheel Force) — no card, correct for a how-to |

Free / open-source software referenced by **official link only** (no Amazon, per rule):
- SimHub — https://www.simhubdash.com/
- irFFB2026 — https://github.com/thogue95/irFFB2026
- FFBClip app (ACC) — community tool, named in body; official DL page https://www.overtake.gg/downloads/ffbclip-app.7910/ returned 403 to automated fetch, so it is named-not-hyperlinked to avoid an unverifiable link.

## Unresolved / for Codex to re-check
- Exact current **US MSRP** of the MOZA R12 (page geo-served CAD $549 to the fetch; product data + prior pass = ~$429 US). Left as "~$429 · check current."
- **FFBClip app** is named in the ACC row but not hyperlinked because the OverTake download page 403s to automated fetch — confirm a stable official/community URL before adding a link, or leave as a named tool.
- iRacing native-360Hz "irFFB no longer required for DD" is season-dependent — re-verify at cert time.
- This how-to has **zero product images beyond the single MOZA R12 by design.** To lift visual richness it needs **infographics/screenshots**, not more product cards — see the image manifest's `infographicPrompts` (clipping-waveform diagram, 5%-walk-down flow, per-sim meter-location cheat-sheet, decision tree) and `screenshotsOrGameMediaNeeded` (iRacing F meter, FFBClip graph, SimHub overlay). These are the real path to more visuals; do NOT force unrelated verified product photos into an FFB explainer.
- Verify SimHub still has no single built-in one-click clip warning at cert time (capability is via community dashboards / irFFB2026 overlay). If SimHub ships a native clip warning, tighten the wording.
