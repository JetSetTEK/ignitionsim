# IgnitionSim Gold Standard

IgnitionSim is an authority site for people who want to buy real simulator hardware, install it cleanly, and start playing without losing a weekend to bad fit, weak mounting, driver weirdness, or forum haze.

Companion benchmarks:

- `docs/ARTICLE-GOLD-STANDARD-V2.md` is the current operational reference for
  research, writing, visual proof, curator action, commerce, QA, and publishing.
- `docs/CURATOR-BIBLE-IGNITIONSIM.md` defines the crew's roles, voice, chat,
  visual behavior, and disclosure boundaries.
- `docs/PUZZLEWICK-TO-IGNITIONSIM-STANDARD.md` remains the translation layer
  from Puzzlewick's proven discovery and personality system.

Before any homepage, hub, card, article, or curator work is published, use all
three as the "does this have soul, evidence, and surfacing discipline?" gate.

## Audience
- Primary reader: Gen X and older millennial builders with engineering brains, gaming nostalgia, and limited patience for hype.
- They want real products, real photos, wiring/mounting reality, clear tradeoffs, and a fast buy/no-buy answer.
- The house voice can be sharp, practical, funny, and a little snarky, but it should never sound careless about money or safety.

## Public Promise
- Help the reader decide what to buy, what to avoid, what works together, and what extra work the purchase creates.
- Favor buyer maps, comparisons, product benches, setup diagrams, and field notes over clever tools until the tools are fully fed by real data.
- Every important page should make a shopper feel: "These people understand the thing I am about to build."

## Certified-Only Publishing Rule
- Public article surfaces show only `goldStatus: "certified"` and `draft !== true`.
- All new or legacy articles default to `goldStatus: "refresh"` until they pass this checklist.
- Use `goldCertifiedDate`, `sourceReviewDate`, `revenueTier`, and `contentCluster` on every certified article.
- Do not certify an article because the topic is important. Certify it only when the page is useful enough to make a real builder buy, wait, or avoid faster.
- Clean slate means the public UI has to earn trust too. Do not publish a surface just because it builds: homepage modules, bay hubs, product pages, gear indexes, best-of rankings, brand pages, tools, sitemap, and footer/navigation links must feel complete, visual, useful, and aligned with the Gen X builder-command-center direction.
- Product, brand, best-of, and tool surfaces stay noindexed or out of navigation until they have the same buyer usefulness as certified articles: real product imagery, review/source snapshots, warnings, affiliate paths, and clear verdict logic.

## Quantitative Certification Gate
- Run `npm run audit:quality` before certifying or materially refreshing an article. The report is written to `reports/ignitionsim-worldclass-quality.md` and `.json`.
- A new revenue-tier A cornerstone must score at least **85/100** before publication. A score never excuses weak facts, wrong product identity, unclear rights, or bad judgment; it only catches omissions that visual review routinely misses.
- Minimum cornerstone evidence: 1,800 useful editorial words, 8 source URLs with official sources for hard claims, 10 unique images, 70% image uniqueness, one real use/install photo, one curator action scene, and one practical diagram. The 90-point target raises that to roughly 2,400 words, 10 sources, 12 unique images, two use/install photos, two curator action scenes, and two useful diagrams.
- Product images repeated in multiple cards count once. Repetition is layout, not evidence. A gallery of the same white-background object from nearly identical angles does not pass the visual-diversity requirement.
- Existing certified pages below 85 enter the revenue-weighted rescue queue. Tier A pages are repaired first. Certification is not expanded to additional pages while higher-value certified pages still contain placeholders, repeated art, weak sourcing, or no real-use proof.
- The scorecard is a triage instrument, not an automatic demotion bot. Editorial review decides whether an older page remains public while it is refreshed, but no new article may knowingly ship below the gate.

## UI And Experience Standard
- The site should feel like a Gen X simulator builder command center: real garage/workbench energy, PC-gaming-magazine confidence, product catalog clarity, and engineering practicality.
- Cornerstone philosophy: create the worlds that our viewers are trying to live in with these sims. Racing should feel like a garage/pit lane. Golf should feel like a private practice bay. Flight should feel like a cockpit. Space should feel like a command station. Marine should feel like a bridge. Never let the public UI collapse into a generic shopping grid.
- Do not preserve old Claude scaffolding when it makes the site feel generic, dark, fake, or unfinished. Rebuild the UI around the reader's buying/building task.
- Homepage and hubs must answer immediately: what this site is, who it is for, what they can find, and what to click first.
- Use real product photos and real rig/use imagery as the main visual signal. Curators, editorial textures, and abstract diagrams can add personality, but they cannot replace real hardware.
- Make the main structures reusable: build bays, parts bench, certified guide shelf, curator bench, world/dream scrollers, and workbench/newsletter drop. A question chooser can return only when it feels premium and genuinely helps the builder pick a path.
- Public copy should speak to builders, not to our internal business plan. The $10k/month horizon guides prioritization but never appears as reader-facing UI.
- Dream first, reality earns the sale. The first viewport and early scroll should make builders want the room, rig, bay, cockpit, or command station before they inspect the buying caveats.
- Avoid opening major pages with dense text plus tiny product thumbnails. Use large aspirational simulator scenes, curator-in-context images, big product-lust cards, and immersive scrollers before detailed comparison grids.
- Homepage first-scroll QA: after the hero, the page must lead with simulator worlds, game/use cases, and curator judgment before it leans into product benches. If the first visible articles look like adjacent marketplace tiles, repeated products, repeated curator poses, or generic white-background product cutouts, the homepage fails the standard.
- Curators should feel like adult, credible simulator influencers: handling gear, pointing out setup mistakes, giving sharp tips, and carrying personality. Static headshots alone are not enough for cornerstone surfaces.
- Curators must have public participation surfaces: homepage bench, bay hero notes, Sim Stream chimes, curator index/profile pages, and article/card context when their bay is featured.
- Curator images fail if the curator is merely posing, pasted beside a product, or floating over a generic background. They should be simming, installing, testing, tuning, driving, flying, comparing, annotating, or reacting inside the correct universe. If they are not doing something useful, remove or regenerate them.
- Generated imagery is allowed for dream scenes and curator/editorial moments as long as it is clearly labeled as an AI/editorial scene and does not pretend to be a real specific product photo. Use real product imagery for the actual buying decision modules.
- The ideal premium visual is a hybrid: AI-assisted room/curator atmosphere merged with real screenshots, real product photos, real hardware cutouts, and reality-check callouts. The AI creates the stage; real evidence supplies the objects.
- Every cornerstone article should include at least one dream/reality section near the top: the emotional build people want, the practical constraints that decide whether it works, and the curator's sharpest tip.

## Visual Standard
- Use real licensed product, manufacturer, affiliate-feed, Amazon Associates, or owned photos for physical products and rigs.
- Use Pexels/Unsplash only for lifestyle or rig atmosphere, with visible credit where required.
- Do not use AI-generated imagery to represent an actual component, cockpit, launch monitor, wheelbase, pedal set, stick, yoke, enclosure, or rig.
- If an AI-generated curator scene appears near a buyer decision, pair it with real product photos on the same page section or immediately below it. The reader should never wonder whether a launch monitor, wheelbase, cockpit, yoke, projector, mat, screen, or enclosure in a scene is a real recommended product.
- When we want real products inside an editorial/dream composition, use a real product-photo composite or overlay workflow. Do not prompt-generate a "Garmin-looking" or "Fanatec-looking" object and treat it as proof.
- For screens, monitors, projectors, dashboards, game UI, or simulator displays, prefer real screenshots, official screenshots, or owned captured screens composited into the generated scene. Do not let an image model invent fake telemetry, fake game UI, fake menus, fake dashboards, fake wiring labels, or fake spec readouts.
- For branded hardware in a dream scene, composite actual product cutouts at correct scale and perspective after generation. Label these images as `AI scene + real product composite` when they are used near purchase decisions.
- Composite workflow:
  1. Collect the real evidence first: product photos, installation photos, official screenshots, game screenshots, review photos, diagrams, and source URLs.
  2. Generate only the environment, lighting, curator pose, and editorial mood, leaving room for product/screen overlays when possible.
  3. Place real products/screens as sharp overlays or masked composites. Preserve the product shape, proportions, labels, and scale.
  4. Add reality-check annotations where useful: room depth, ceiling height, cable path, mount point, projector throw, pedal flex, USB hub, return-window warning, or subscription trap.
  5. QA the final image for fake-looking screens, warped products, wrong scale, impossible ergonomics, unreadable text, unsafe setup geometry, and any component that could be mistaken for a real recommendation but is not.
- AI curators are fictional editorial hosts. Label them as AI curator scenes in the UI when they appear in generated lifestyle imagery.
- Curators are not represented as real product testers, owners, or independent human reviewers. Robert Pruitt is the accountable author/editor in visible bylines and article schema; the crew member is an AI-assisted editorial persona and schema contributor. Persona copy may synthesize sourced evidence, but it must never invent first-hand ownership or testing.
- Before publishing any AI scene, inspect it for fake screens, impossible workstations, wrong scale, malformed controls, confusing product lookalikes, unsafe setup geometry, and distracting layout artifacts. If it creates trust friction, replace it or move it out of the hero.
- Do not use procedural/abstract placeholder art for certified article covers, related cards, gear cards, product benches, or money-page thumbnails. If a public card cannot show real product/use/parts imagery, the page stays `refresh` until it can.
- Product thumbnails and gear cards should center the product, use `object-fit: contain`, and avoid aggressive cropping.
- Do not use micro-collage article covers as public card art, related-card art, guide-shelf art, or proof-wall hero art. Public cards should use one dominant real product/use image, a real rig/build photo, or a deliberate AI/editorial world scene with real product proof nearby.
- Public article cards should prefer wide product-proof covers generated from real product photos, the correct sim world, and the responsible curator. Run `npm run visual-proof` after changing product images, article card art, or certified article surfaces.
- Public article-card curators must be scene-integrated, not pasted-on portrait stickers. Use varied poses, action scenes, author-accurate curator selection, blended edges, and category-appropriate environments. If a cover batch repeats the same curator crop or pose across a cluster, regenerate or rotate the curator scene pool before publishing.
- Public cards must fail QA if the dominant product does not match the article topic. A GPU guide cannot show a yoke, a VR guide cannot show a throttle, and a cockpit guide cannot use a logo-only image as proof. Duplicate dominant product images across adjacent/latest cards are allowed only when the two articles are intentionally about the same product family.
- Logo-only assets, abstract brand marks, empty white-box product tiles, and generic marketplace-style product placeholders are not acceptable as public article-card proof. Replace them with a real hardware/use photo, a cleaner manufacturer/store product image, or keep the article out of the visible module until the image is fixed.
- AI imagery is allowed for abstract backdrops, editorial textures, characters, retro UI flavor, or diagrams that cannot be mistaken for real hardware. It is not a substitute for real people using/installing real gear whenever those photos can be sourced.
- Diagrams must be useful: wiring paths, room measurements, cockpit mounting points, cable management, display geometry, pedal/load-cell forces, throw-ratio math, or decision trees.
- Certified cornerstone articles need visual density and visual variety: real product shots, official install/use photos, part closeups, comparison benches, practical diagrams, color-coded proof cards, and large graphic breaks. The goal is a page a builder can scan with coffee in hand and immediately understand what goes in the cart and what goes on the desk/rig/wall.
- Avoid long stretches of prose without visual relief. A certified guide should repeatedly alternate between advice, real product proof, diagrams, and reality-check cards.

## Article Requirements
Every cornerstone article should include:
- A fast verdict near the top: buy now, buy with caveats, wait, or skip.
- A "what to buy first" path for different budgets and seriousness levels.
- Verified product photos, use photos, diagrams, or manufacturer/store images for every recommended product.
- At least one article-cover/product-bench image made from real products, not decorative geometry.
- At least 8 useful visuals for a normal certified buyer guide, and 12+ visuals for high-ROI cornerstone guides.
- Article rescue passes must add visible proof, not just copy edits: a product/use photo grid from official, manufacturer, seller, licensed, or owned sources; at least one real human/use/context image when available; at least one curator-in-context editorial scene where the curator is doing useful work; at least one practical infographic/diagram; and a named curator judgment block with memorable advice.
- Real product/use photos should be large enough to inspect. Avoid postage-stamp proof, repeated white-background monotony, and image grids that look like a marketplace scrape.
- Practical warnings: setup tax, weekend killers, compatibility traps, room/desk/mount limits, software gotchas, and return-window advice.
- Official sources for hard specs and compatibility claims.
- Community pattern reads paraphrased in our own voice, linked to Reddit/forum searches or specific threads when useful.
- Live seller-review check links instead of stale marketplace star claims unless the rating is captured with a date.
- Internal links to the bay hub, gear pages, adjacent buyer maps, and relevant best-of rankings.
- FAQ blocks written as direct answer-engine bait: short, specific, accurate, and useful.
- Product schema, article schema, FAQ schema, descriptive image alt text, and a clear updated date when refreshed.
- Contextual crew participation: the responsible curator should answer the current page's central question, surface a memorable caveat, and recommend the next useful guide. Static biography alone does not count.

## Product Review Standard
- Never fabricate prices, review counts, star ratings, stock status, dimensions, compatibility, or firmware claims.
- If a product has credible low-star patterns, name the risk in plain English and link readers to live reviews or a sourced discussion.
- If a product is good but annoying, say so: "buy it, but know this will take an extra Saturday."
- If the best advice is to wait for a revision, say that even if the affiliate link would convert today.
- Amazon CTAs must use verified direct product pages only: `https://www.amazon.com/dp/ASIN?tag=ignitionsim-20`. Never publish Amazon search-result links (`/s?k=`, `/s?keywords=`, or generic "Check Amazon" destinations). If the exact ASIN cannot be verified, use an official/vendor/specialty-retailer link or omit the Amazon CTA until verified.

## Game And Software Review Standard
- Treat game/software reviews as hardware-buying pages, not generic game criticism. The core question is: is this sim worth building a room, rig, bay, cockpit, desk, or control stack around?
- Every game review needs a fast verdict: build around it, play it before buying hardware, wait, or skip unless you already own the gear.
- Show real screenshots, official media, UI/settings screens, community setup photos when allowed, and product photos of the hardware that materially changes the game.
- Include a "hardware that actually matters" section: controls, cockpit/seat, display, PC/console, audio/haptics, mounts, USB/power, and software/subscription costs.
- Include a "what will annoy you" section sourced from forums, Reddit, Steam reviews, official known issues, patch notes, or credible reviewers.
- Include the right game/universe placement: `/games`, the game detail card, bay hub, Build Stream/info river, related buyer guides, homepage module if strategically important, sitemap, and RSS/feed path.
- Use screenshots and official art only with source/credit discipline. Do not AI-generate fake game UI, fake telemetry, fake cockpit displays, fake scorecards, fake maps, or fake setup menus.
- End with a "What to Buy for This Sim" section that links to the starter hardware path, serious-builder path, and luxury/upgrade path.

## Homepage And Hub Standard
The public path should prioritize:
- Sim type lanes: racing, flight, space, marine, golf.
- Current cornerstone buyer maps.
- High-intent product comparisons and gear benches.
- Real build/community research summarized in our voice.
- Brands and best-of rankings.
- Tool pages only when they are accurate enough to reduce purchase uncertainty.
- Every new certified article must be placed in the correct public discovery surfaces before it counts as published: bay hub, `/guides`, the simulator games/universe hub when the article maps to a specific game or sport, the Build Stream/info river, related-guide slots, sitemap, and the appropriate homepage module.
- Homepage thumbnails for new cornerstone articles must be product-first and varied. Use one dominant real product/use image whenever possible; use AI/editorial context only to sell the dream around the real product proof, not as a fake substitute for the product.
- Game/universe placement matters. If an article answers an iRacing, Assetto Corsa EVO, GSPro, MSFS, DCS, Star Citizen, Elite, Sailaway, Bridge Command, or similar game-specific buying question, update the relevant game card/routes so the reader can enter from the game they actually play.
- The Build Stream/info river is the sitewide reverse-chronological discovery path for certified articles only. It should feel like a useful simulator buyer feed, not an archive dump: strong cards, bay/game context, product-first art, and clear next-step links.

### Editorial Surface Gate (Locked 2026-07-13)
- Certification makes an article public; it does not automatically earn promotion. Homepage investigations require an 85+ world-class quality score. Sim Stream, bay-hub, and curator-shelf promotion require 70+.
- Homepage guide IDs must be unique across Current Investigations and the Sim Stream preview. A guide cannot appear twice merely because it is both strong and recent.
- The homepage order is: immersive dream hero, five build worlds, The Bench Says, real builds, three Current Investigations, contextual Objects of Desire, five-item Sim Stream preview, curator debate, newsletter.
- No article wall, archive dump, or product grid may be reintroduced on the homepage. No section may show more than six repeated editorial items.
- Objects of Desire use real installed, use, official lifestyle, or room-context images. White-background catalog cutouts stay in technical product benches where inspection is the purpose.
- Bay hubs explain the complete system before displaying the parts: four-stage system map, strongest buyer route, curator field note, short promoted shelf, owner pattern, then technical product bench.
- Sim Stream alternates product investigations, build stories, failure clinics, field tests, owner-pattern updates, and full curator field notes. It is an information river, not a newest-first white-card dump.
- Curator pages must expose current rig, origin, strong opinions, a weekend plan, at least two distinct task-based scenes, and no more than six promoted guides.
- Run `npm run audit:surfaces` after homepage, Stream, hub, curator, quality-report, or editorial-image changes. The audit enforces promotion thresholds, contextual product imagery, real-build credits, and distinct curator action scenes.

## Publishing Surface Map
Every certified guide must be checked against the public discovery system before it counts as published. Puzzlewick-style surfacing is part of the work, not a cleanup task later.

Automatic surfaces once `goldStatus: "certified"` and `draft !== true` are correct:
- Bay/category hub: `src/pages/[bay]/index.astro`.
- Certified guide index: `src/pages/guides/index.astro`.
- Sim Stream/info river: `src/pages/build-stream/index.astro`.
- Curator profile and curator index, when `author` matches `src/data/crew.json`: `src/pages/curator/[id].astro` and `src/pages/curators/index.astro`.
- Article related guides, using explicit frontmatter `related` first and same-bay fallback in `src/pages/[bay]/[slug].astro`.
- Sitemap/RSS/feed paths after `npm run build`.

Manual surfaces that must be decided and updated before publish:
- Homepage promotion is quality-gated automatically from `reports/ignitionsim-worldclass-quality.json`: 85+ for Current Investigations and 70+ for the five-item Sim Stream preview. Re-run `npm run audit:quality` after material article work so the scores are current.
- `src/data/growth-priorities.json` remains the revenue/editorial queue, but it cannot override the public quality thresholds.
- Custom thumbnail: add or refresh the slug in `src/data/generated-article-covers.json`. The image must be wide, product-first, and free of placeholder/marketplace monotony.
- Game/software universe hub: update `src/data/games.json` `guideIds` when the guide maps to iRacing, Assetto Corsa EVO, ACC, GSPro, E6 Connect, Awesome Golf, MSFS, X-Plane, DCS, Star Citizen, Elite Dangerous, Sailaway, Bridge Command, or any other build-around game/sport universe.
- Product and gear surfaces: update `src/data/products/*.json`, `src/data/verified-product-images.json`, and real images under `public/images/gear/...` when the guide introduces gear, depends on gear, or changes a buyer path.
- Best-of and brand surfaces: update `src/data/stat-lists.json` or `src/data/brands.json` when the guide changes rankings, category recommendations, or brand positioning.
- Related-guide strategy: add explicit `related` frontmatter for adjacent buyer maps, reviews, and setup guides instead of relying only on same-bay fallback.
- Curator participation: make sure the responsible curator has a meaningful note, image, profile surface, or article shelf presence. A certified article should make the curator smarter, not just add another byline.

## Tool Policy
- Backburner pages: configurators, garage, drops, and alerts stay in the repo but should not be primary navigation or indexed until the data is real.
- Bring a tool back to the front only when it has real product photos, clear disclaimers, current data, and a user flow that beats reading a guide.
- A tool that is fun but incomplete is a lab asset. A tool that helps someone avoid a $500 mistake is a homepage asset.

## Publishing Checklist
Before publishing or pushing a major update:
- Confirm the frontmatter includes `goldStatus: "certified"` only after the checks below pass.
- Run `npm run gold-audit`; it must pass before build, deploy, or push. The build now runs this automatically, but run it directly while editing so failures are caught early.
- Run `npm run audit:surfaces` after any discovery, hub, curator, or contextual-image change. Homepage duplication, catalog-cutout regression, and missing curator-action scenes are release blockers.
- Run `npm run audit:quality`; new Tier A work must meet the 85-point gate and the report must show no missing real-use proof, curator action, practical diagram, or non-direct Amazon link.
- Check that the article has a buyer verdict, warnings, product bench, source shelf, FAQ, internal links, and affiliate links that land on the intended exact product. Amazon links must be direct `/dp/ASIN` URLs with `tag=ignitionsim-20`; no search-result URLs ship.
- Check images for real-photo compliance, uncropped product visibility, correct alt text, and no fake product render confusion.
- Check article cards and homepage modules for wrong-product, duplicate-product, logo-only, or marketplace-placeholder imagery. Fix the source image or cover generator before publishing.
- Search the output for placeholder markers, `PHOTO SLOT READY`, `cimg-fallback`, procedural hero art, missing images, and product pages that are only spec cards. Fix or demote before deploy.
- Check mobile and desktop layouts for overflow, tiny infographic text, unreadable contrast, and cropped important content.
- `npm run art` is reserved for original diagrams/infographics. Do not use the legacy collage script for public article cards, guide shelves, related cards, product benches, or money-page thumbnails unless a human has explicitly approved a one-off editorial reason.
- Use `docs/SOURCE-LEXICON-IGNITIONSIM.md` before image hunting or source review. Official/manufacturer media comes first; specialty retailers and Amazon are fallback sources; community photos require permission or explicit licensing.
- Run `npm run build` and confirm the audit passes before any deploy.
- If a page relies on current prices, release dates, firmware, ratings, product availability, or active community sentiment, verify with current sources before publishing.
- Update the relevant hub/homepage/gear/best-of surfaces when the article is strategically important.
- Search the public pages after build to verify the article appears in the expected bay, games/universe hub, Build Stream/info river, homepage module, related-guide cluster, sitemap, and RSS/feed path where applicable.

## Trend + Distribution Gate (LOCKED 2026-07-13)
Traffic work is part of the article, not a cleanup pass. Every current-product or Tier A buyer guide must ship with:
- A dated demand brief that separates confirmed facts from rumors and records official, expert-review, owner/community, and current seller evidence.
- A 1200x675 product-first editorial thumbnail, a 1200x630 social card, and a 1080x1350 vertical share asset. The exact real product or real installed rig must dominate; generated context may sell the dream but never impersonate product proof.
- Final trailing-slash canonical, `og:type=article`, image discovery, RSS, sitemap, bay, games/universe, Sim Stream, curator, related-guide, and deliberate homepage placement checks in the same release.
- Network-aware `share_click` analytics and one useful share object: a compatibility map, total-cost ladder, room-fit diagram, failure diagnostic, installation timeline, or blunt buy/wait/skip scorecard.
- An IndexNow submission after the production deploy is verified. Submission helps discovery; it does not create authority by itself.
- A direct-product revenue path. Amazon links use exact verified ASINs with `tag=ignitionsim-20`; if an exact match is unavailable, use the official manufacturer or an approved specialty retailer rather than a search page.

## Live Push And Netlify Verification Gate
Publishing is not complete at local build or git push. Future public content work must end with a live production verification.

Required sequence for article, homepage, hub, image, or navigation changes:
1. Run `npm run gold-audit`.
2. Run `npm run build`.
3. Commit only the scoped files for the change.
4. Push the branch/mainline that production uses, usually `git push origin main`.
5. Confirm a Netlify production deploy starts and finishes. If the Git push does not trigger a deploy, run `netlify deploy --prod --dir=dist --site bb77f29f-8827-4318-8a57-eb2d2e9908f0`.
6. Verify the live URL with `curl -I -L <production-url>` and confirm it returns `200`, not local-only success.
7. Search live HTML or use browser QA to confirm the new/updated article appears on the homepage scroller if selected, bay hub, game/universe hub if applicable, Sim Stream, guide index, related-guide cluster, sitemap, and feed.
8. Include the production URL and Netlify deploy log in the handoff.

If production returns 404, stale content, an old guide count, missing custom thumbnail, missing hub placement, or a missing sitemap entry, the publish is not done.

## Revenue Horizon
- The site is being built toward a $10,000/month revenue horizon within a year. Every certified article should move the site toward that with high-intent topics, buyer confidence, product-photo trust, internal links to gear pages, and monetizable next steps.
- Revenue never outranks trust. The editorial stance remains blunt: buy now, buy with caveats, wait, or skip.
- When a content cluster has enough certified depth, look for tools that reduce purchase uncertainty: compatibility checkers, room/rig calculators, build ladders, cable/power planners, and cart-ready buyer paths.
