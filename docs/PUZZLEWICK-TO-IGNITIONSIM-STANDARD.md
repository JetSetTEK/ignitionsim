# Puzzlewick-To-IgnitionSim Standard

Locked July 6, 2026. This is the translation layer between the Puzzlewick gold standard and IgnitionSim. Puzzlewick works because it does not feel like an index or a store grid. It feels like a living cabinet where real product proof, curator personality, beautiful thumbnails, buyer guidance, and surfacing all reinforce each other. IgnitionSim must hit the same bar for simulator builders.

## Core Translation

Puzzlewick sells the wonder of owning the object, then proves the object is real. IgnitionSim must sell the world the reader wants to build, then prove the hardware will actually work.

- Puzzlewick universe = IgnitionSim bay or game hub.
- Puzzlewick Oracle = IgnitionSim Sim Stream.
- Puzzlewick cabinet = IgnitionSim parts bench and build bay shelves.
- Puzzlewick box art thumbnail = IgnitionSim product-first rig/product thumbnail.
- Puzzlewick curator room = IgnitionSim curator workshop, pit lane, cockpit, garage bay, bridge, or command station.
- Puzzlewick collector card = IgnitionSim bench pass, build card, rig badge, or curator field card.

The philosophy sentence for every page: create the worlds our readers are trying to live in with these sims, then show the real parts, tradeoffs, and setup tax that decide whether the dream survives the weekend.

## Why Puzzlewick Is Working

### 1. The Page Is A World, Not A Catalog

Puzzlewick's best pages open with mood, story, curator presence, and a recognizable product signal. The article is not a marketplace search result. It is a guided visit into a universe.

IgnitionSim rule: racing pages feel like pit lane, garage, and track-day telemetry; golf pages feel like a private practice bay; flight pages feel like a home cockpit with checklist discipline; space pages feel like a command station; marine pages feel like a bridge. No certified page may open with a generic white grid of products.

### 2. Product Recognition Comes First

Puzzlewick thumbnails work because the box art is large enough to recognize in a crowded slider. The curator supports the product, not the other way around.

IgnitionSim rule: article cards, guide shelves, Sim Stream cards, and homepage rotators use one dominant real product, rig, room, game screenshot, or installed setup. Curator context is welcome, but the product or simulator world must read first at card size.

### 3. The Curators Are Hosts With Jobs

Puzzlewick curators are not decorative portraits. They carry taste, opinion, tension, jokes, warnings, and recurring personality.

IgnitionSim rule: a curator image fails if the curator is just standing beside a product. They should be installing, measuring, tuning, driving, flying, swinging, wiring, annotating, arguing over a checklist, or reacting to a setup mistake. Every curator appearance must answer: what is this person helping the reader decide?

### 4. Research Becomes Taste, Not A Dump

Puzzlewick gathers community talk, official facts, guides, forum wisdom, and product photos, then rewrites the best parts in a curator voice.

IgnitionSim rule: sources produce a decision map, not a bibliography wall. The reader should get the useful patterns: repeated complaints, upgrade regrets, setup traps, compatibility gotchas, low-star risk patterns, and the one or two decisions that actually matter.

### 5. Images Are Distributed Through The Reading Flow

Puzzlewick does not hide proof at the bottom. Real photos, component shots, in-line buy moments, diagrams, and curator panels appear while the reader is making the decision.

IgnitionSim rule: a cornerstone article needs visual proof in every major decision section: product photo, in-use/install photo, diagram, screenshot, or comparison bench. A bottom product grid does not satisfy the standard.

### 6. Surfacing Is Part Of Publishing

Puzzlewick treats a guide as unfinished until it appears in the homepage rotator, Oracle, curator page, universe hub, cabinet/wing, game finder, and schema surfaces where appropriate.

IgnitionSim rule: a guide is unfinished until it appears in the bay hub, `/guides`, Sim Stream, homepage module, related guides, game hub if applicable, sitemap, RSS/feed, and the responsible curator surface. If the article maps to iRacing, Assetto Corsa EVO, GSPro, MSFS, DCS, Star Citizen, Elite, Sailaway, Bridge Command, or a similar universe, the game hub must update too.

Concrete publishing equivalents:

- Puzzlewick front page image slider = IgnitionSim homepage `cornerstoneIds` and visible guide scroller in `src/pages/index.astro`.
- Puzzlewick Oracle/content river = IgnitionSim Sim Stream via `src/pages/build-stream/index.astro`, plus homepage `streamLeadIds` ordering for the latest 10/12 visible pieces.
- Puzzlewick universe page = IgnitionSim bay hub and game/software hub, including `src/pages/[bay]/index.astro` and `src/data/games.json` `guideIds`.
- Puzzlewick cabinet/gear shelves = IgnitionSim product, gear, best-of, brand, and verified image data in `src/data/products`, `src/data/verified-product-images.json`, `src/data/stat-lists.json`, and `src/data/brands.json`.
- Puzzlewick curator page = IgnitionSim crew profiles in `src/pages/curator/[id].astro`, `src/pages/curators/index.astro`, and the matching `author` in article frontmatter.
- Puzzlewick custom box-art thumbnail = IgnitionSim product-first wide card art in `src/data/generated-article-covers.json`.

## IgnitionSim Homepage Blueprint

The homepage should follow the Puzzlewick shape, adapted to simulator builders:

1. **Dream Hero:** one strong simulator-world scene with real product/game proof composited or adjacent. Copy answers: "what is this site, who is it for, what can I do next?"
2. **Build Worlds Slider:** five large horizontal lanes: Racing, Golf, Flight, Space, Marine. Each lane shows a real rig/product/screen signal and a curator action note.
3. **Buy Once, Cry Once But Worth It:** high-AOV, high-intent product cards with real images, blunt verdicts, and caveats. This replaces flat "expensive parts" language.
4. **Sim Stream:** the Oracle equivalent. Reverse-chronological certified content only, with large horizontal cards, curator chimes, product-first thumbnails, and clear category/game tags.
5. **Latest 12 From The Bench:** beautiful editorial cards, not tall skinny marketplace tiles. Cards should use stable wide media, strong captions, and curator notes.
6. **Game And Sport Hubs:** iRacing, Assetto Corsa EVO, ACC, MSFS, DCS, Star Citizen, Elite, GSPro, TGC, Sailaway, Bridge Command, and other build-around software. This mirrors Puzzlewick universes.
7. **Curator Bench:** every curator has a reason to exist, a field, a public page, a shelf, a quote bank, and articles with notes in their voice.
8. **Newsletter Workbench Drop:** a weekly "what changed, what to buy, what to wait on" capture point.

The first scroll fails if it feels like Amazon, Alibaba, a parts wholesaler, or a generic SaaS blog.

## IgnitionSim Article Blueprint

Every cornerstone guide must include:

- A fast verdict: buy now, buy with caveats, wait, skip, or rent/try first.
- A "what you are really building" section that sells the dream and names the practical constraints.
- A buyer path by budget and seriousness level.
- A product-proof gallery with at least 4 real product/install/use images before the midpoint of the article.
- A comparison table or decision tree that makes the purchase path obvious.
- At least one practical diagram: room geometry, cockpit mounting, USB/power path, pedal/wheel upgrade ladder, projector throw, launch-monitor depth, HOSAS binding map, or haptic wiring.
- At least one curator-in-action scene, labeled as AI/editorial if generated, where the curator is doing something useful.
- Community pattern cards: paraphrased forum/Reddit/review wisdom, linked, with no fabricated quotes.
- A "what owners love" block and a "what makes people return it" block.
- Correct affiliate links in context and in the bottom "What To Buy" section.
- FAQ written for Google, GEO, and AI answer extraction.
- A source shelf with official specs, seller/review checks, community sources, and image-source notes.

Cornerstone visual floor:

- 12+ useful visuals for high-ROI articles.
- 6+ real product/use/install/screenshot photos.
- 2+ practical infographics or diagrams.
- 1+ curator action scene.
- 1+ product-first custom thumbnail.
- 1+ share/collector card or field badge when the article is a flagship.

## IgnitionSim Thumbnail Standard

No tall skinny cards. No micro-collages. No same curator pose repeated across a row. No abstract placeholders. No white-background product cutout pasted on a dark AI backdrop as the main creative answer.

Certified thumbnail recipe:

1. Pick one dominant product, rig, game screenshot, or installed setup.
2. Place it in the correct simulator world: pit lane, golf bay, cockpit, command station, bridge, workbench.
3. Add the responsible curator only if they are integrated into the scene and doing useful work.
4. Keep the product recognizable at card size.
5. Use a wide, stable crop for homepage, Sim Stream, bay pages, related cards, and social previews.
6. Regenerate OG and pin/social images whenever the thumbnail changes.

## Curator Personality Translation

The IgnitionSim crew should feel older, sharper, more practical, and more mechanically credible than Puzzlewick, but just as present.

- **Duke Alvarez, Racing:** ex-track-day wrench energy. He talks torque, flex, pedal feel, and "will this still feel good in six months?" He should be seen mounting, tuning, and driving.
- **Nina Brooks, Golf:** room-fit pragmatist. She is warm but ruthless about ceiling height, depth, projector geometry, mats, subscriptions, and whether a garage build will survive real life.
- **Val Chen, Flight/Space:** calm systems thinker. She maps controls, power, USB, bindings, checklists, and cockpit ergonomics. She should be seen labeling controls, flying, and solving layout problems.
- **Mason Ward, PC/VR/Displays:** skeptical Gen X PC builder. He cares about frames, thermals, cable routing, USB hubs, monitor geometry, and "do not spend $2,000 to discover your room is wrong."
- **Rory Vale or equivalent Marine/DIY host:** patient, niche, practical. Focuses on bridge controls, macro panels, DIY throttle/helm reality, sailing sim immersion, and what actually exists.

Every curator needs:

- A public profile page.
- A shelf of articles/products/games they care about.
- A quote bank.
- A visual pose set for each useful action: measuring, installing, testing, driving/flying/swinging, annotating, warning.
- A recurring pattern of speech.
- A role in Sim Stream comments and homepage modules.

## Research System To Preserve The Standard

Use a source stack before writing:

- Official manufacturer pages, manuals, press kits, compatibility charts, firmware notes, and installation PDFs.
- Specialty reviewers and category authorities.
- Reddit and forums for repeated complaints, upgrade regrets, and build photos as research/outbound links.
- Seller and marketplace reviews for low-star risk patterns, checked live or dated.
- Official game/software screenshots, release notes, and community setup guides.
- Licensed/owned photos for real people using gear; AI only for editorial curator scenes or dream layouts.

Current source anchors:

- `r/simracing` monthly guide threads position themselves as one-stop hubs for new and veteran sim racers, which confirms the audience wants centralized, practical buying guidance.
- Boosted Media's current direct-drive guides win trust with brand comparisons, technical education, product-guide structure, and discount tracking.
- Golf Simulator Forum and golf simulator retailer guides show that buyers obsess over room fit, launch-monitor type, enclosure/screen choices, and garage constraints.
- MSFS and flight-sim community discussions repeatedly emphasize controls order: yoke/stick, throttle, rudder pedals, head tracking, USB/power, and aircraft-specific needs.
- HOTAS/HOSAS threads show that space sim buyers need layout advice by play style, not generic "best joystick" rankings.

## No-Go List

- Do not publish incomplete pages just because the topic is high ROI.
- Do not let placeholder articles, placeholder images, abstract geometry, or logo-only cards surface publicly.
- Do not ship a page whose first article row shows duplicate dominant products unless the row is intentionally a same-product comparison cluster.
- Do not let AI-generated gear, fake screens, fake game UI, fake dashboards, or fake telemetry stand in for evidence.
- Do not use curator images as stickers.
- Do not bury all real proof at the bottom.
- Do not write like a shopping site. Write like a trusted builder friend with sharper notes and better receipts.

## Publishing Gate

A new IgnitionSim article is not done until:

1. `goldStatus: "certified"` is earned, not assumed.
2. The article has the required visuals, verdict, source shelf, affiliate links, FAQ, and schema.
3. The custom thumbnail passes card-size visual QA.
4. The article appears in the bay hub, Sim Stream, homepage module if strategic, guide index, related-guide cluster, game hub if applicable, sitemap, and feed.
5. The responsible curator page and quote/note system update.
6. Product links are checked for the intended product.
7. The build and gold audit pass.
8. Desktop and mobile screenshots do not look like a store grid, text wall, or placeholder board.
9. The change is pushed to the production branch, Netlify production deploy is verified, and the live public URL returns `200`.
10. The final handoff includes the live URL and Netlify deploy log when public pages changed.

## Implementation Priority

1. Rebuild homepage modules to match the blueprint above.
2. Create real curator pages and quote/note data.
3. Enforce wide card media and remove tall skinny card layouts.
4. Create a Sim Stream component patterned after Puzzlewick's Oracle but styled for simulator worlds.
5. Add game hub routing and surfacing logic.
6. Add a thumbnail QA script that flags placeholder, duplicate, logo-only, and wrong-product card images.
7. Make every new article publish through the gate, not by manual hope.

## Sources And Benchmark Notes

- Internal Puzzlewick standards: `docs/CONTENT-GOLD-STANDARD.md`, `docs/PLATINUM-STANDARD.md`, `docs/CURATOR-THEMES.md`.
- IgnitionSim standards this document reinforces: `docs/GOLD-STANDARD-IGNITIONSIM.md`, `docs/SOURCE-LEXICON-IGNITIONSIM.md`, `docs/HORIZON-GOAL-IGNITIONSIM.md`.
- External research anchors checked July 6, 2026: [r/simracing monthly guide thread](https://www.reddit.com/r/simracing/comments/1t2qy57/rsimracing_monthly_super_thread_a_onestop_guide/), [Boosted Media direct-drive buyer guide](https://boostedmedia.net/sim-racing/hardware-reviews/the-essential-direct-drive-sim-racing-buyers-guide/), [Boosted Media FFB guide](https://boostedmedia.net/buyers-guides/everything-you-need-to-know-about-ffb/), [Golf Simulator Forum garage launch-monitor discussion](https://golfsimulatorforum.com/forum/golf-simulator-forum/simulator-builds/299610-new-garage-build-launch-monitor-opinions), [Carl's Place launch-monitor guide](https://www.carlofet.com/blog/how-to-choose-a-golf-simulator-launch-monitor), [Microsoft Flight Simulator forum hardware discussion](https://forums.flightsimulator.com/t/yoke-throttle-discussion/534567), [r/MicrosoftFlightSim hardware discussion](https://www.reddit.com/r/MicrosoftFlightSim/comments/1dv1wq8/i_consider_buying_gear_to_play_msfs_what_do_you/).
