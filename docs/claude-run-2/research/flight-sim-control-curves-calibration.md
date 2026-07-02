# Research Pack: Flight Sim Control Curves & Calibration (MSFS 2024)

- **Article:** Flight Sim Control Curves & Calibration: Fix Twitchy Controls in MSFS 2024
- **Slug:** `flight/flight-sim-control-curves-calibration`
- **Curator:** Mac Donovan (flight)
- **Date researched:** 2026-07-02

## Source table

| Claim / need | Source | URL | Date accessed | Used where | Confidence | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| MSFS 2024 axis tuning is Sensitivity (curve) + Neutral dead zone + Extremity dead zone; the MSFS 2020 "Reactivity" smoothing slider was reworked/removed | Flight Simulation Showcase | https://flightsimulationshowcase.com/msfs-2024-controls/ | 2026-07-02 | Settings table, "Did MSFS 2024 remove Reactivity" FAQ, verdict | Medium | Blocked by 403 on direct fetch; claim corroborated by search snippet + MSFS forums. Build-dependent — article flags "check current" |
| Negative Sensitivity = softer around center, more precise small corrections; keep dead zones minimal | Flight Simulation Showcase / MSFS Addons | https://msfsaddons.com/2024/11/27/how-to-configure-your-controllers-in-microsoft-flight-simulator-2024/ | 2026-07-02 | Settings table, recipe | Medium | MSFS Addons confirms curve-flattening technique but does not enumerate slider names |
| Fenix recommends ~-30% sensitivity curve for the A320 | Fenix support (via community/search) | https://support.fenixsim.com/hc/en-us/articles/12374514755087-Recommended-Sensitivity | 2026-07-02 | Recipe, FAQ, verdict | Medium | Fenix page 403 on direct fetch; -30% figure surfaced repeatedly in search + PMDG/community threads. Flagged as developer recommendation |
| Community pitch/roll curves land ~0.3–0.5; ~-15% for gentle passes; extremity dead zone trims last 10–20%; saturation ~40% for 1:1 travel | MSFS Forums + Just Flight community | https://forums.flightsimulator.com/t/controls-way-too-sensitive/671758 ; https://community.justflight.com/topic/9111/msfs-2024-control-sensitivity-looking-for-tips-suggestions-on-how-to-deal-in-tbm | 2026-07-02 | Recipe, forum callout | Medium | Paraphrased pattern, not quoted. Wide band — no universal number |
| Consumer yoke ~5 in travel vs ~12 in real column → inputs compressed → twitch is partly hardware-travel, not just curve | Just Flight community (TBM thread) | https://community.justflight.com/topic/9111/msfs-2024-control-sensitivity-looking-for-tips-suggestions-on-how-to-deal-in-tbm | 2026-07-02 | "Why linear curves feel wrong", physical-root paragraph | Medium | Paraphrased; TBM is the recurring "too sensitive" example |
| 2–5% dead zone is a reasonable band when one is needed | Yawman Flight docs | https://yawmanflight.com/a/docs/getting-started/adjusting-sensitivity-dead-zone-in-msfs | 2026-07-02 | Recipe step 1, FAQ | Medium | Controller maker's own how-to; 2–5% is their recommendation |
| Calibrate physical range in device app first, then keep in-sim curve linear + dead zone minimal | MOZA support | https://support.mozaracing.com/en/support/solutions/articles/70000684199-microsoft-flight-simulator-2020-2024 | 2026-07-02 | "Calibrate before you curve" section, pro tips, FAQ | High | Direct fetch succeeded; MOZA's explicit workflow |
| Potentiometers wear (wiper on resistive track) → drift/dead spots; budget pot sticks commonly drift after ~12–18 months; Hall-effect/contactless = no contact, no wear, millions of cycles | Turtle Beach + iFixit + search synthesis | https://www.turtlebeach.com/blog/hall-effect-thumbsticks-vs-traditional-joysticks ; https://www.ifixit.com/Wiki/Hall-Effect_Joysticks | 2026-07-02 | Hardware/drift section, FAQ, verdict | High | Well-corroborated across multiple sources |
| Honeycomb Alpha = low-deadzone steel shaft; Charlie = Hall-effect rudder + toe brakes; TCA Sidestick = contactless H.E.A.R.T sensors | IgnitionSim product data (flight.json) | (internal) src/data/products/flight.json | 2026-07-02 | Gearpicks, shotgrid, "drift-free gear" section | High | Prices are "approx 2026 street price" in data — article says "check current" |

## Community pattern notes (paraphrased in our voice)
- Most "my controls are too sensitive" posts are curve or hardware-travel problems, not defective gear. Soften the curve (or trim the ends with an extremity dead zone) before touching anything else.
- Add a real dead zone only when an axis actively drifts at rest — piling on dead zone to fix twitch just adds a mushy delay around center.
- Per-aircraft tuning is the repeated advice: the TBM (and light/fighter aircraft) want their own soft profile, separate from an everyday airliner profile.
- A meaningful minority keeps the curve fully linear (especially for airliners with mechanically linked yokes) and instead lowers saturation or trims the extremities to buy back the missing physical travel.

## Credible warnings / caveats
- **The Reactivity slider is version-dependent.** MSFS 2020 exposed a distinct Reactivity smoothing slider; MSFS 2024 reworked axis tuning around Sensitivity + dead zones. Reports differ by build and some aircraft docs still say "Reactivity." The article deliberately tells the reader to tune the sliders they actually see and flags "check current" — do NOT hard-assert a single slider name.
- **Calibrate the hardware range BEFORE curving in-sim.** A curve on an uncalibrated/off-center axis will never feel right — this is the most common self-inflicted "bad axis."
- **Drift is a hardware failure, not a curve failure.** A small dead zone is a band-aid on worn pots; new contactless sensors are the actual cure. Don't tell readers to mask real drift with a permanent dead zone.
- **Prices move.** All product prices in the article are "~$ / check current" — none are quoted as hard figures.

## Products discussed
| Product | Gear page | Amazon (search) | Local image | Verified? | Used in body? |
| --- | --- | --- | --- | --- | --- |
| Honeycomb Alpha | /flight/gear/honeycomb-alpha-yoke | Honeycomb+Aeronautical+Alpha+Flight+Controls | /images/gear/flight/honeycomb-alpha-yoke.jpg | YES | Hero + shotgrid + gearpick (drift-free reference) |
| Honeycomb Charlie | /flight/gear/honeycomb-charlie-pedals | Honeycomb+Aeronautical+Charlie+Rudder+Pedals | /images/gear/flight/honeycomb-charlie-pedals.jpg | YES | Shotgrid + gearpick (drift-free rudder) |
| Thrustmaster TCA Sidestick | /flight/gear/thrustmaster-tca-sidestick-airbus | Thrustmaster+TCA+Sidestick+Airbus+Edition | /images/gear/flight/thrustmaster-tca-sidestick-airbus.jpg | YES | Shotgrid (contactless-sensor example) |

Note: this is a **low-product-density how-to.** Only three genuinely relevant verified products are featured — the two Hall-effect Honeycomb pieces and the contactless TCA Sidestick — because the drift-vs-curve argument is what makes them relevant. No product cards were forced. The rest of the flight fleet (Bravo, MTQ, Boeing yoke, TrackIR, Tobii, Sky Yoke, VelocityOne) has verified images but was intentionally NOT embedded — it isn't relevant to a calibration explainer.

## Unresolved / for Codex to re-check
- **Confirm the exact MSFS 2024 Controls > Sensitivity slider set for the current build** (does the shipping build still label anything "Reactivity"? is "Saturation" exposed by that name?). The article hedges to "tune what you see / check current" precisely because primary sources disagree. A dated screenshot infographic of the actual 2024 Sensitivity screen would let us tighten the language and is the highest-value Codex asset here.
- Two key primary sources (Fenix Recommended-Sensitivity page, Flight Simulation Showcase) returned HTTP 403 on automated fetch — re-verify the ~-30% Fenix A320 figure and the "Reactivity removed" claim against a live browser read before any certification.
- **Article routing gap (pre-existing, NOT caused by this rewrite):** `flight-sim-control-curves-calibration` does not currently emit an HTML page in `dist/flight/` — same as the certified reference `best-flight-sim-hardware-2026` and 14 other flight articles; only articles wired to a page route (e.g. `msfs-home-cockpit-buyer-map-2026`) render. Flag to Codex/routing owner; out of scope for this content pass.
- Consider a second infographic: a "twitchy vs drifting" decision tree (curve-fix vs hardware-fix) — the article's core mental model, ideal as a visual.
