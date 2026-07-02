# Research Pack: Radar vs Photometric Launch Monitors (2026)

- **Article:** Radar vs Photometric Launch Monitors (2026): How Each Measures, and Which One Your Room Actually Allows
- **Slug:** `golf/radar-vs-photometric-launch-monitor`
- **Curator:** Nina Brooks (golf)
- **Date researched:** 2026-07-02

## Source table

| Claim / need | Source | URL | Date accessed | Used where | Confidence | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| Radar tracks ball ~10-15 ft after impact via Doppler frequency shift; photometric uses 2,000-4,000 fps cameras at impact; photometric ~±1% ball speed vs radar ~±1-2% indoors | Multiple buyer guides (PlayBetter, solheimcup2019, thediygolfer) | https://www.playbetter.com/blogs/golf-simulator-comparisons/photometric-vs-radar-golf-launch-monitor | 2026-07-02 | Verdict, "room decides," comparison table, radar/photometric sections, FAQ | High | Numbers cross-checked across 3 guides; ranges given, not single-vendor |
| Radar optimal 18-20 ft, degrades under ~15 ft; photometric recommended down to ~12 ft | PlayBetter 2026 buyer's guide + GolfBays | https://www.playbetter.com/blogs/golf-simulator-comparisons/golf-launch-monitor-buying-guide ; https://golfbays.de/en/blogs/news/radar-vs-photometric-launch-monitors-indoors | 2026-07-02 | Room-depth section, table, FAQ | High | Depth figures are guidance ranges; flagged as "industry buyer guides" in body |
| Radar measures via microwave reflection/frequency shift; photometric measures spin from actual rotation (not inferred); photometric best indoors, radar best outdoors; cameras use infrared, reduce sunlight dependence | Uneekor explainer | https://uneekor.com/blogs/blog/photometric-vs.-doppler:-which-launch-monitor-technology-delivers-the-most-accurate-golf-data | 2026-07-02 | How-it-measures, lighting, indoor/outdoor sections | High | Vendor page but consistent with independent sources |
| Photometric flicker-free LED lighting is the low-cost fix for the most-reported camera reliability complaint | Home Performance Lab | https://homeperformancelab.com/skytrak-plus-vs-bushnell-launch-pro-vs-foresight-gc3/ | 2026-07-02 | Lighting warning, FAQ | High | |
| Bushnell Launch Pro within ~2% of GCQuad; SkyTrak+ camera within ~1-3 yd of GCQuad carry | Home Performance Lab + PlayBetter | https://homeperformancelab.com/skytrak-plus-vs-bushnell-launch-pro-vs-foresight-gc3/ ; https://www.playbetter.com/blogs/golf-simulator-comparisons/bushnell-launch-pro-vs-skytrak-plus-comparison-review | 2026-07-02 | Photometric section, gearpicks | High | Also matches IgnitionSim golf.json summaries |
| Which brands are radar (Trackman, FlightScope Mevo, Garmin R10) vs photometric (SkyTrak, Uneekor, Bushnell Launch Pro, Foresight GC3/GCQuad) | PlayBetter camera-vs-radar | https://www.playbetter.com/blogs/golf-simulator-comparisons/photometric-vs-radar-golf-launch-monitor | 2026-07-02 | Table, FAQ, all sections | High | R50 corrected to photometric (3-camera) per golf.json, not radar |
| Mevo Gen 2 uses Fusion Tracking (same engine as X3C), $1,299 base / $2,274 loaded; MLM2PRO GSPro direct connect added 2025, most capable sub-$1,000 unit | FlightScope + Breaking Eighty | https://flightscope.com/blogs/blogs/best-golf-launch-monitor-comparison-2026 ; https://breakingeighty.com/flightscope-vs-rapsodo | 2026-07-02 | Fusion section, gearpick, FAQ | High | Battery: Gen2 ~6h vs MLM2PRO ~2-4h |

## Community pattern notes (paraphrased in our voice)
- The two most-repeated regrets are mirror images: radar bought for a closet-depth garage, and a camera bought for a room the owner never properly lit.
- Camera owners who "blame the unit" for erratic reads most often have a flickering-light or direct-sun problem, not a defective sensor.
- "Measure depth first, compare data sheets last" is the recurring advice.

## Credible warnings / caveats
- Lighting is an unlisted spec for every photometric unit — flicker-free LED, no direct-sun window.
- Indoor-superb is not outdoor-superb: cameras can struggle in range glare, radar can flounder against a shallow wall.
- Fusion improves on pure radar indoors but still wants some depth; it is not a true tight-room camera substitute.
- Depth figures (18-20 / <15 / 12 ft) are guidance ranges from buyer guides, not a single hard manufacturer spec — presented as ranges.

## Products discussed
| Product | Gear page | Amazon (search) | Local image | Verified? |
| --- | --- | --- | --- | --- |
| Garmin Approach R10 (radar) | /golf/gear/garmin-approach-r10 | Garmin+Approach+R10+launch+monitor | /images/gear/golf/garmin-approach-r10.jpg | YES |
| SkyTrak+ (photometric) | /golf/gear/skytrak-plus | SkyTrak+Plus+launch+monitor | /images/gear/golf/skytrak-plus.jpg | YES |
| Bushnell Launch Pro (photometric) | /golf/gear/bushnell-launch-pro | Bushnell+Launch+Pro+launch+monitor | /images/gear/golf/bushnell-launch-pro.jpg | YES |
| Rapsodo MLM2PRO (fusion) | /golf/gear/rapsodo-mlm2pro | Rapsodo+MLM2PRO+launch+monitor | /images/gear/golf/rapsodo-mlm2pro.jpg | YES |
| FlightScope Mevo Gen 2 (fusion) | /golf/gear/flightscope-mevo-gen2 | FlightScope+Mevo+Gen2 | /images/gear/golf/flightscope-mevo-gen2.jpg | YES (verified; used text-only, not embedded) |
| Uneekor EYE XO2 (overhead camera) | /golf/gear/uneekor-eye-xo2 | Uneekor+EYE+XO2+launch+monitor | /images/gear/golf/uneekor-eye-xo2.jpg | **NO — file on disk but NOT in verified list; text-only** |
| Foresight Falcon (overhead camera) | /golf/gear/foresight-falcon | Foresight+Sports+Falcon+launch+monitor | /images/gear/golf/foresight-falcon.jpg | **NO — file on disk but NOT in verified list; text-only** |
| Garmin Approach R50 (photometric, side) | /golf/gear/garmin-approach-r50 | Garmin+Approach+R50+launch+monitor | /images/gear/golf/garmin-approach-r50.jpg | YES (verified; used text-only, not embedded) |

## Unresolved / for Codex to re-check
- Uneekor EYE XO2 and Foresight Falcon have image files on disk but are NOT in `src/data/verified-product-images.json`. They are text-only (links + Amazon) in the body per the hard image rule. Add to the verified list only after a real-photo confirmation, then they can become gearpicks/shotgrid tiles.
- Garmin R50 and FlightScope Mevo Gen 2 ARE verified; left as text/link mentions to keep the visual set focused on the radar/photometric/fusion contrast. They could be added as gearpicks in a later pass if we want more visual density.
- Depth-in-feet figures are ranges from buyer guides; if a single authoritative manufacturer spec is preferred, resolve before certification.
