# Research Pack: Direct Drive in 2026 — Do You Need It?

- **Article:** Direct Drive in 2026: Do You Actually Need It (and How Much Torque Is Enough)?
- **Slug:** `racing/direct-drive-2026-do-you-need-it`
- **Curator:** Duke Alvarez (racing)
- **Date researched:** 2026-07-02

## Source table

| Claim / need | Source | URL | Date accessed | Used where | Confidence | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| MOZA R12 V2 = 12Nm, 21-bit (2,097,152 PPR) encoder, NexGen 4.0 | MOZA official | https://mozaracing.com/products/r12-wheelbase | 2026-07-02 | Sweet-spot section, table, gearpick, FAQ | High | Specs confirmed on-page. US price NOT on that page (showed CAD); US street ~$399 sale / $429 regular per Micro Center + MOZA US collection |
| Entry DD price parity: entry DD ~$350-500 now matches good belt wheels (Thrustmaster T300); "price gap that used to justify starting with belt has largely closed" | SimRacingGearGuide | https://www.simracinggearguide.com/wheels/direct-drive-vs-belt-driven/ | 2026-07-02 | Verdict, "price argument is gone", who-should-skip | High | Also gives drive-type torque bands (below) |
| Drive-type torque bands: gear 2-3Nm, belt 4-6Nm, direct drive 6-30+Nm | SimRacingGearGuide | https://www.simracinggearguide.com/wheels/direct-drive-vs-belt-driven/ | 2026-07-02 | "What DD changed" section | High | Used verbatim as ranges in body |
| DD lower latency vs belt (qualitative: "instant response" vs "moderate"); a 3-8ms vs 10-15ms figure appears in secondary sources | ProSimHQ (qualitative) + racingrigguide/f1simulatormaniac (numeric) | https://prosimhq.com/blogs/buyers-guide/direct-drive-belt-drive-or-gear-drive-unpacking-the-realism-of-sim-racing-wheel-feel ; https://racingrigguide.com/blog/direct-drive-vs-belt-drive-vs-gear-drive | 2026-07-02 | "What DD changed" (kept qualitative in body) | Medium | ProSimHQ gives NO ms numbers; the 3-8/10-15ms figure is from search summaries, not a page I fully retrieved — DELIBERATELY kept qualitative ("a few milliseconds") in the article, did NOT print a hard ms number |
| Torque tiers: 3-8Nm casual/entry, 10-18Nm serious; rigidity matters as much as +Nm; most run bases below max | Apex Sim Racing + SimXPro + BoxThisLap | https://www.apexsimracing.com/blogs/sim-racing-blog/how-much-torque ; https://simxpro.com/en-us/blogs/guides/how-much-direct-drive-torque-do-you-really-need-5nm-vs-8nm-vs-12nm-vs-20nm ; https://boxthislap.org/sim-racing-finding-your-ideal-torque-range/ | 2026-07-02 | "How much torque" section, table, FAQ | Medium-High | SimXPro's actual emphasis is "the right Nm is one you can run without flex"; used to support the 70%-not-100% rule |
| Cammus C5 = integrated 5Nm (peak ~7Nm), complete bundle ~$299-328 with pedals/clamp, PC-only | Cammus official + Amazon + BoostedMedia | https://cammusracing.com/product/global-first-cammus-c5-direct-drive-steering-wheel/ ; https://www.amazon.com/Simulator-Technology-Wheelbase-Construction-Cloud-based-Desktop/dp/B0CSGD9T7L | 2026-07-02 | Price-floor section, tip callout, shortlist table | Medium | Price range $299-328 spans wheel-only vs bundle vs sale; left as range + "check current". NO verified in-house image → text/search only |
| MOZA R3 Xbox bundle = 3.9Nm, 15-bit, Xbox+PC, complete kit ~$319-399 sale | MOZA US + product data | https://us.mozaracing.com/products/r3-racing-bundle-pc | 2026-07-02 | Shotgrid, gearpick, table | Medium-High | "sale price varies; regular price often higher" per local product data; left as range |
| MOZA R5 bundle = 5.5Nm, complete kit (~£289 / ~$380 US ballpark) | MOZA US | https://us.mozaracing.com/products/r5-racing-bundle | 2026-07-02 | Torque table | Medium | Mentioned in table only; US$ not pinned, no hard price quoted in body |
| Fanatec CSL DD QR2 = 5Nm stock, 8Nm with Boost Kit 180, Xbox+PC | Fanatec bundle pages | https://www.fanatec.com/us/en/p/sim-racing-bundles/r2r_csl_dd_qr2_8nm_us/csl-dd-qr2-ready2race-bundle-pc-8-nm-us | 2026-07-02 | Setup-tax (Boost Kit), table | High | Direct base product page 404'd/403'd via WebFetch; bundle pages resolved via search. Bundle prices are sale-dependent → not quoted as base MSRP |
| Fanatec GT DD Pro = 8Nm w/ Boost Kit 180, PS5 Gran Turismo licensed, complete bundle | Fanatec + product data | https://www.fanatec.com/us/en/p/wheel-bases/crd-9020006-us/gran-turismo-dd-pro-wheel-base-qr2-us | 2026-07-02 | PS5 section, gearpick, table, FAQ | High | Bundle price sale-dependent → "check current pricing", no hard figure |
| Fanatec ClubSport DD+ = 15Nm sustained, PS5/PS4/PC, ~$999 | Local product data (racing-extra.json) cross-check | https://www.fanatec.com/us/en/p/wheel-bases/cs_dd+_us/clubsport-dd-plus-us | 2026-07-02 | PS5 step-up gearpick, table | Medium | ~$999 from local data; page 403 via WebFetch. Left with "check current" |
| Simagic Alpha Evo line = 9/12/18/28Nm; Pro 18Nm ~$699; low-inertia servo + 21-bit encoder; open QR-A | Simagic + SimRaceReviews | https://simagic.com/pages/alpha-evo | 2026-07-02 | Diminishing-returns section, gearpick, table | High | Family torque steps confirmed via search |
| ClubSport DD firmware raised 12Nm -> 15Nm (May 2026) | Traxion (established last pass) | https://traxion.gg/fanatec-boosts-power-of-wheel-bases-via-firmware-update/ | 2026-07-02 | Setup-tax, table note | High | Carried from prior wheelbase-guide research; not re-fetched this pass |

## Community pattern notes (paraphrased in our voice)
- Owners of 18Nm+ bases overwhelmingly run them at 60-70% and never revisit — torque headroom is for heavy/no-assist cars, not lap time. (r/simracing recurring pattern.)
- "Buy pedals before more torque" is the most repeated regret: a load-cell brake beats a bigger base for consistency. Cross-linked to Pedals Over Power.
- The 2026 shift everyone repeats: entry DD reaching belt-wheel prices killed the "start on belt" advice for anyone with a $400+ budget.
- SimXPro's angle: the "right" Nm is the one you can run without rig flex or fatigue; a rigid cockpit often matters more than +5Nm.

## Credible warnings / caveats
- Big bases (12Nm+) on desk clamps flex, creak, and can damage desks — 4-bolt mount + rigid stand required.
- Entry bases (CSL DD, GT DD Pro) only reach their higher torque figure with the optional Boost Kit 180 — confirm which PSU ships in the box.
- Firmware changes the real torque number (ClubSport DD 12->15Nm) — check current firmware, not the box.
- Fanatec QR2 can disable FFB on non-Fanatec rims — ecosystem lock-in is a real cost if you own third-party wheels.
- Prices are sale-volatile across the whole fleet; every figure in the body is a "check current" ballpark, not a locked MSRP.

## Products discussed
| Product | Gear page | Amazon (search) | Local image | Verified? |
| --- | --- | --- | --- | --- |
| MOZA R12 | /racing/gear/moza-r12 | MOZA+R12+wheelbase | /images/gear/racing/moza-r12.jpg | YES (hero + body) |
| MOZA R3 Xbox bundle | /racing/gear/moza-r3-xbox-bundle | MOZA+R3+Racing+Bundle+Xbox | /images/gear/racing/moza-r3-xbox-bundle.png | YES |
| Thrustmaster T598 | /racing/gear/thrustmaster-t598 | Thrustmaster+T598 | /images/gear/racing/thrustmaster-t598.webp | YES |
| MOZA R9 | /racing/gear/moza-r9 | MOZA+R9+wheelbase | /images/gear/racing/moza-r9.jpg | YES |
| Fanatec GT DD Pro | /racing/gear/fanatec-gt-dd-pro | Fanatec+GT+DD+Pro | /images/gear/racing/fanatec-gt-dd-pro.jpg | YES |
| Fanatec ClubSport DD+ | /racing/gear/fanatec-clubsport-dd-plus | Fanatec+ClubSport+DD+plus | /images/gear/racing/fanatec-clubsport-dd-plus.webp | YES |
| Simagic Alpha Evo Pro | /racing/gear/simagic-evo-pro | Simagic+Alpha+Evo+Pro+wheelbase | /images/gear/racing/simagic-evo-pro.jpg | YES |
| Simucube 2 Sport | /racing/gear/simucube-2-sport | Simucube+2+Sport+wheel+base | /images/gear/racing/simucube-2-sport.jpg | YES |
| Asetek Forte | /racing/gear/asetek-forte | Asetek+Forte+wheel+base | /images/gear/racing/asetek-forte.jpg | YES |
| Cammus C5 | /racing/gear/cammus-c5 | Cammus+C5+direct+drive | /images/gear/racing/cammus-c5.jpg | **NO — needs real photo (text + Amazon-search only in body)** |
| MOZA R5 | /racing/gear/moza-r5 | MOZA+R5+bundle | /images/gear/racing/moza-r5.jpg | YES (verified but not embedded; table mention only) |
| Fanatec CSL DD | /racing/gear/fanatec-csl-dd | Fanatec+CSL+DD | /images/gear/racing/fanatec-csl-dd.jpg | **NO — text-only (table mention)** |
| Simagic Alpha Evo (12Nm) | /racing/gear/simagic-evo | Simagic+Alpha+Evo | /images/gear/racing/simagic-evo.jpg | **NO — text-only (table mention)** |
| Asetek Invicta (27Nm base) | /racing/gear/asetek-invicta | Asetek+Invicta+wheelbase | /images/gear/racing/asetek-invicta.jpg | **NO — text-only (table mention)** |

## Unresolved / for Codex to re-check
- Exact current US MSRP for Cammus C5 — sources span $299 (bundle sale), $319.99 (wheel), $328 (bundle). Resolve before quoting a single number; body deliberately says "~$299-328 / check current."
- Current Fanatec GT DD Pro and ClubSport DD+ bundle/base prices are sale-dependent — body intentionally quotes no hard figure ("check current pricing").
- Hard DD-vs-belt latency ms figure (3-8ms vs 10-15ms) appears in secondary/aggregator sources only; a primary-source measurement was NOT retrieved. Body keeps it qualitative ("a few milliseconds") — source a measured figure before printing an ms number.
- Cammus C5, Fanatec CSL DD, Simagic Alpha Evo (12Nm) base, and Asetek Invicta (27Nm) base have NO verified product image; they are text/search-only in the body/table. Source real photos before any body image or certification. (Note: MOZA R5 IS verified but was left as a table mention only; could add a gearpick if desired.)
