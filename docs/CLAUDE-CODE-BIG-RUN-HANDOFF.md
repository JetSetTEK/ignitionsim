# Claude Code Big Run Handoff: IgnitionSim Article Fill-In Pass

Paste the prompt below into Claude Code while pointed at the `ignitionsim` repo. This is designed for a long, high-usage run where Claude researches and upgrades the existing article base, but leaves Codex a clean handoff for final image generation, composites, certification, QA, and publishing.

## Paste This Into Claude Code

You are working in the `ignitionsim` repo. Your job is to perform a long-form IgnitionSim research and article fill-in pass, not a redesign and not a deployment.

Read these files first and obey them exactly:

- `docs/GOLD-STANDARD-IGNITIONSIM.md`
- `docs/SOURCE-LEXICON-IGNITIONSIM.md`
- `docs/HORIZON-GOAL-IGNITIONSIM.md`
- `docs/CONTENT-TRIAGE-IGNITIONSIM.md`
- `src/content.config.ts`
- `scripts/audit-gold-standard.mjs`
- `scripts/verify-local-product-images.mjs`

The site goal is a $10,000/month simulator authority site. The public promise is simple: help a real simulator builder decide what to buy, what to avoid, what fits together, what will waste a weekend, and what is worth the money.

## Non-Negotiable Rules

- Do not push, deploy, or mark anything complete for publication.
- Do not set any newly upgraded article to `goldStatus: "certified"` unless it passes every IgnitionSim Gold Standard requirement and the local audit/build passes. Prefer leaving upgraded articles as `goldStatus: "refresh"` with a handoff note saying `candidateForCertification: true`.
- Do not create placeholder art, micro-collage covers, abstract procedural product images, fake product renders, fake game UI, fake telemetry, fake dashboards, fake launch monitor screens, or fake cockpit displays.
- Do not use AI-generated images to represent real hardware. If a visual should show hardware, find real product photos or leave a prompt/composite instruction for Codex.
- Do not hotlink images.
- Do not copy long quotes. Paraphrase Reddit/forum/review patterns in our voice. Use direct quotes only sparingly and keep them short.
- Do not fabricate prices, ratings, review counts, stock, release dates, firmware claims, dimensions, compatibility, or source sentiment.
- If Amazon does not clearly land on the correct product, use an Amazon search link with `tag=ignitionsim-20` and flag it for later exact-ASIN replacement.
- If you cannot verify the source, say so in the handoff instead of smoothing over uncertainty.

## Target Run Scope

Upgrade up to 30 existing `goldStatus: "refresh"` articles. Prioritize existing articles over creating new ones. If you cannot complete all 30 to a high standard, complete fewer and document exactly where you stopped.

Priority order:

1. High-ROI golf and racing buyer intent.
2. Flight and space authority articles that support hardware purchases.
3. Marine long-tail authority only where there is real source material and visual support.

Recommended first 30 from the existing article base:

### Racing

1. `src/content/articles/racing/best-sim-racing-wheelbases-2026.md`
2. `src/content/articles/racing/cheapest-direct-drive-2026.md`
3. `src/content/articles/racing/moza-vs-fanatec-vs-simagic.md`
4. `src/content/articles/racing/pedals-over-power.md`
5. `src/content/articles/racing/best-wheel-for-iracing-2026.md`
6. `src/content/articles/racing/bass-shakers-tactile-feedback-simhub-2026.md`
7. `src/content/articles/racing/best-ffb-settings-iracing-acc-lmu-2026.md`
8. `src/content/articles/racing/button-box-vs-stream-deck-2026.md`
9. `src/content/articles/racing/desk-vs-cockpit-sim-racing-2026.md`
10. `src/content/articles/racing/best-sim-racing-setup-under-1000-2026.md`

### Golf

11. `src/content/articles/golf/golf-simulator-cost.md`
12. `src/content/articles/golf/golf-simulator-room-size.md`
13. `src/content/articles/golf/best-golf-launch-monitor-under-1000.md`
14. `src/content/articles/golf/skytrak-vs-bushnell-launch-pro-vs-gc3.md`
15. `src/content/articles/golf/best-golf-simulators-2026.md`
16. `src/content/articles/golf/best-golf-simulator-hitting-mat.md`
17. `src/content/articles/golf/golf-simulator-impact-screen-enclosure.md`
18. `src/content/articles/golf/garage-golf-simulator-build-guide.md`
19. `src/content/articles/golf/gspro-setup-guide-courses-connectors.md`
20. `src/content/articles/golf/radar-vs-photometric-launch-monitor.md`

### Flight

21. `src/content/articles/flight/best-flight-sim-hardware-2026.md`
22. `src/content/articles/flight/force-feedback-yoke-worth-it.md`
23. `src/content/articles/flight/head-tracking-trackir-vs-tobii-msfs.md`
24. `src/content/articles/flight/flight-sim-usb-hub-wiring-multi-panel.md`
25. `src/content/articles/flight/msfs-2024-best-graphics-settings-fps.md`

### Space

26. `src/content/articles/space/vkb-vs-virpil-vs-winwing-space-sticks-2026.md`
27. `src/content/articles/space/best-beginner-hosas-under-300.md`
28. `src/content/articles/space/hosas-vs-hotas.md`

### Marine

29. `src/content/articles/marine/marine-sim-hardware-reality.md`
30. `src/content/articles/marine/best-sailing-sim-setup-2026.md`

If research shows one of these is weak or redundant, replace it with a stronger existing refresh article and document why.

## Article Upgrade Requirements

For each upgraded article:

- Keep the existing slug unless there is an obvious SEO reason to rename it. If you think a rename is needed, document it instead of renaming.
- Use the frontmatter schema in `src/content.config.ts`.
- Use the responsible curator voice:
  - Racing: Duke Alvarez
  - Golf: Nina Brooks
  - Flight: Mac Donovan
  - Space: Val Chen
  - Marine: Gus Calder
- Add or update:
  - Answer-first opening verdict: buy now, buy with caveats, wait, or skip.
  - Clear "what to buy first" ladder or buyer path.
  - At least 8 useful visual slots for normal guides and 12+ for cornerstone/high-ROI guides.
  - Product benches using real product image paths where they already exist.
  - A comparison table, build ladder, decision tree, wiring map, room-fit map, or setup-tax chart.
  - Useful warnings from forums/reviews: compatibility traps, installation pain, software gotchas, subscriptions, cable/power/mounting problems, return-window advice.
  - Amazon affiliate links using `tag=ignitionsim-20`, plus official/vendor links when Amazon is wrong or direct-only.
  - Internal links to the right bay hub, related certified articles, gear pages, best-of pages, and game/universe pages when relevant.
  - FAQ entries in frontmatter with direct, GEO/AISEO-friendly answers.
  - Source notes near the bottom of the article, with linked source material.

Style:

- Write like IgnitionSim, not Amazon, Alibaba, or generic SEO sludge.
- Gen X builder-command-center voice: practical, vivid, blunt, occasionally funny, but careful with money and specs.
- Strong opinions are good when sourced. Fake certainty is not.
- The reader should feel: "Good, these people know what actually happens when this box lands on my porch."

## Research Requirements

For each article, use a source mix:

- Official manufacturer pages/manuals/spec sheets for hard specs.
- Retailer pages and Amazon only for pricing/availability/link checking, not as the only authority.
- Credible review sites and YouTube transcripts where useful.
- Reddit/forums for repeated real-user patterns, not one-off drama.
- Existing IgnitionSim docs and product data.

Suggested recurring sources:

- Racing: MOZA, Fanatec, Logitech G, Thrustmaster, Simagic, Simucube, Asetek, Heusinkveld, Sim-Lab, Trak Racer, Next Level Racing, GT Omega, Boosted Media, Sim Racing Cockpit, Sim Racing Setup, OverTake/RaceDepartment, `r/simracing`.
- Golf: Garmin, SkyTrak, Bushnell/Foresight, Uneekor, FlightScope, Rapsodo, Full Swing, Square Golf, BenQ, Optoma, Shop Indoor Golf, Rain or Shine Golf, Carl's Place, Fiberbuilt, Golf Simulator Forum, `r/Golfsimulator`, Golf Monthly, Breaking Eighty.
- Flight: Honeycomb, Thrustmaster, Logitech/Saitek, MOZA Flight, WinWing, Turtle Beach, VKB, TrackIR, Tobii, MSFS forums, AVSIM, FSElite, FlightSimExpo coverage.
- Space: VKB, Virpil, WinWing, Thrustmaster, Logitech, Monstertech, Elgato, Tobii, TrackIR, `r/hotas`, `r/starcitizen`, Spectrum, Elite forums.
- Marine: Bridge Command, MarineVerse, Sailaway, eSail, Leo Bodnar, Arduino HID docs, RailDriver, Steam discussions, DIY controller/forum threads.

## Image And Graphics Handoff Requirements

Claude should research and collect image/source possibilities, but Codex will do the final generated/composite image pass.

Create these folders if needed:

- `docs/claude-run/research/`
- `docs/claude-run/image-manifests/`
- `docs/claude-run/article-checklists/`

For every article you touch, create:

1. `docs/claude-run/research/<slug>.md`

Include:

- Article title and slug.
- Date researched.
- Source table with columns: `claim/need`, `source name`, `url`, `date accessed`, `used where`, `confidence`, `notes`.
- Community pattern notes paraphrased in our voice.
- Credible warnings and caveats.
- Product list with official page URL, Amazon URL/search URL, image source URL candidates, and whether the existing local product image is verified.
- Unresolved claims or places Codex should re-check.

2. `docs/claude-run/image-manifests/<slug>.json`

Use this shape:

```json
{
  "slug": "example-slug",
  "bay": "racing",
  "curator": "Duke Alvarez",
  "priority": "A",
  "visualGoal": "Make the reader want the rig/room before they inspect the caveats.",
  "realProductPhotosNeeded": [
    {
      "product": "MOZA R5",
      "preferredLocalPath": "/images/gear/racing/moza-r5.jpg",
      "officialSourceUrl": "https://...",
      "amazonUrl": "https://www.amazon.com/s?k=MOZA+R5+bundle&tag=ignitionsim-20",
      "status": "exists-verified | needs-download | needs-permission | source-blocked",
      "notes": "Use as dominant product proof, not tiny collage."
    }
  ],
  "editorialCompositePrompts": [
    {
      "id": "hero-dream-reality",
      "type": "AI scene + real product composite",
      "prompt": "Realistic Gen X garage sim racing workbench at golden-hour track-lane lighting, empty mounting space for real MOZA/Fanatec/Simagic product overlays, Duke Alvarez pointing at cable routing, no fake branded hardware, no fake UI, no invented labels, 16:9 editorial cover.",
      "realOverlays": ["/images/gear/racing/moza-r5.jpg"],
      "labelRequired": "AI scene + real product composite",
      "negativePrompt": "fake logos, fake dashboards, warped wheelbases, impossible cockpit ergonomics, tiny unreadable text"
    }
  ],
  "infographicPrompts": [
    {
      "id": "buy-order-ladder",
      "title": "What to buy first",
      "format": "1600x1000",
      "content": ["Phase 1 stable mount", "Phase 2 load-cell brake", "Phase 3 wheelbase", "Phase 4 display", "Phase 5 haptics"],
      "style": "IgnitionSim command-center chart, large readable text, racing colors, product-photo placeholders for Codex overlays"
    }
  ],
  "curatorScenePrompts": [
    {
      "id": "duke-bench-tip",
      "prompt": "Realistic adult Gen X sim-racing curator Duke Alvarez in a clean garage cockpit bay, holding a torque wrench near an empty wheel deck, confident mechanic energy, product overlay space, practical not fantasy, 4:5 portrait.",
      "labelRequired": "AI curator scene"
    }
  ],
  "screenshotsOrGameMediaNeeded": [],
  "openQuestions": []
}
```

3. `docs/claude-run/article-checklists/<slug>.json`

Use this shape:

```json
{
  "slug": "example-slug",
  "articleFile": "src/content/articles/racing/example-slug.md",
  "candidateForCertification": false,
  "goldStatusLeftAs": "refresh",
  "visualCount": 0,
  "realProductImageCount": 0,
  "affiliateLinksChecked": false,
  "officialSpecsChecked": false,
  "communityResearchChecked": false,
  "faqUpdated": false,
  "internalLinksUpdated": false,
  "sourceShelfUpdated": false,
  "needsCodexGraphics": true,
  "blockers": []
}
```

At the end of the whole run, create:

- `docs/CODEX-HANDOFF-IGNITIONSIM-BIG-RUN.md`

That file should include:

- A summary of what you completed.
- A table of all touched articles with status:
  - `ready-for-codex-final-art`
  - `needs-more-research`
  - `blocked-by-product-images`
  - `blocked-by-uncertain-claims`
  - `skip/archive-recommended`
- The top image-generation/composite priorities for Codex.
- Products needing local verified product photos.
- Exact URLs that should be checked by Codex before certification.
- Any articles that should remain hidden or be archived.
- A recommended final certification order.

## Product Data And Photos

Before adding a product to an article:

- Check whether it exists in `src/data/products/*.json`.
- Check whether its image appears in `src/data/verified-product-images.json`.
- Prefer existing verified product image paths.
- If a product is missing from product data, add a proposed product block to the research handoff rather than hastily wiring a public gear page.
- If you download or add a product photo, save it under the correct `public/images/gear/<bay>/` folder and run the verification script.
- If you cannot verify the image, do not use it in a public article body. Put it in the image manifest as `needs-download`, `needs-permission`, or `source-blocked`.

## Affiliate Link Rules

Use Amazon Associates links for now:

- Exact product if verified:
  - `https://www.amazon.com/dp/ASIN?tag=ignitionsim-20`
- Search fallback if exact product is uncertain:
  - `https://www.amazon.com/s?k=PRODUCT+NAME&tag=ignitionsim-20`

Every article should have:

- Inline links where the product is discussed.
- A bottom "What to Buy" section.
- Official/vendor links when Amazon is wrong, unavailable, marketplace-confusing, or direct-only.

Do not overstate affiliate availability. If Amazon is messy, say "Check Amazon" not "Buy this exact model."

## QA Commands

Run these during or after the pass:

```bash
npm run gold-audit
npm run visual-proof
npm run build
```

If these fail, do not hide the failure. Put the error summary and likely fix in `docs/CODEX-HANDOFF-IGNITIONSIM-BIG-RUN.md`.

## Stop Conditions

Stop the run and write the handoff if:

- You complete 30 article upgrades.
- You hit usage limits.
- Source quality is not high enough to keep going.
- The build/audit fails in a way that needs Codex intervention.
- You find the content base needs structural changes before more article work.

Do not improvise a push. The deliverable is a clean working tree with article drafts, research packs, image manifests, and the Codex handoff.

## Final Message To User

When finished, tell the user:

- How many articles were upgraded.
- Which files were touched.
- Where the Codex handoff file is.
- Which articles are ready for Codex final graphics/certification.
- Which claims or product photos need re-checking.
- Whether the build/audit passed.

