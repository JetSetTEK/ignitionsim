# Claude Code Mega Run 2: IgnitionSim Backlog, Product Photos, and Opportunity Scout

Paste the prompt below into Claude Code while pointed at the `ignitionsim` repo. This is intentionally bigger than the first run. It uses the remaining Claude Code Max / 20x usage for the work Claude is best at: broad research, article upgrades, source ledgers, product-photo hunting, and structured handoff. Codex will still do final graphics, image verification, certification, QA, and deploy.

## Paste This Into Claude Code

You are working in the `ignitionsim` repo. This is **Mega Run 2**. You are not publishing. You are researching, upgrading staged content, sourcing photo candidates, and producing a clean Codex handoff.

Read these first:

- `docs/GOLD-STANDARD-IGNITIONSIM.md`
- `docs/SOURCE-LEXICON-IGNITIONSIM.md`
- `docs/HORIZON-GOAL-IGNITIONSIM.md`
- `docs/CONTENT-TRIAGE-IGNITIONSIM.md`
- `docs/CODEX-HANDOFF-IGNITIONSIM-BIG-RUN.md`
- `src/content.config.ts`
- `scripts/audit-gold-standard.mjs`
- `scripts/verify-local-product-images.mjs`

## Hard Rules

- Do **not** push, deploy, certify, or set any article to `goldStatus: "certified"`.
- Leave upgraded content as `goldStatus: "refresh"` unless Codex explicitly later certifies it.
- Do not create literal wrapper junk like `<content>`, `</content>`, `<invoke>`, or `</invoke>` in any file.
- Every JSON file must parse with `JSON.parse`.
- Do not hotlink product images in article bodies.
- Do not use AI-generated images to represent real hardware, game UI, telemetry, launch-monitor screens, dashboards, cockpit displays, button labels, or product details.
- Do not fabricate prices, review counts, star ratings, dimensions, release dates, compatibility, firmware claims, stock status, or forum sentiment.
- Paraphrase community wisdom. Use short direct quotes only when necessary and cite them.
- If Amazon does not clearly show the correct product, do **not** create an Amazon CTA. Use the official/vendor URL and flag the item for exact-ASIN follow-up. Search-result Amazon links never ship.
- If a claim needs re-checking, mark it as unresolved rather than smoothing it over.

## Run Structure

This run has three lanes. Work in this order.

### Lane 1: Product-Photo Sourcing Sprint

Before writing more articles, attack the recurring image blockers from the first run. For each product below, find official/product-page/press/retailer image candidates and put them into a machine-readable file. Download only if source terms make sense and the repo's existing image practice permits it; otherwise leave source candidates for Codex.

Create:

- `docs/claude-run-2/product-photo-candidates.json`
- `docs/claude-run-2/product-photo-candidates.md`

Each JSON entry:

```json
{
  "product": "MOZA AY210 Force Feedback Yoke",
  "bay": "flight",
  "preferredLocalPath": "/images/gear/flight/moza-ay210-ffb-yoke.jpg",
  "officialProductUrl": "https://...",
  "imageCandidateUrls": [
    {
      "url": "https://...",
      "sourceName": "MOZA",
      "sourceType": "official | retailer | review | amazon | community-permission-needed",
      "likelyDownloadable": true,
      "notes": "Clean white-background product shot / install photo / use photo"
    }
  ],
  "amazonDirectUrl": "https://www.amazon.com/dp/ASIN?tag=ignitionsim-20 or blank until verified",
  "blocksArticles": ["force-feedback-yoke-worth-it", "best-flight-sim-hardware-2026"],
  "confidence": "high | medium | low",
  "needsCodexVerification": true
}
```

Priority products:

- WinWing Ursa Minor Space joystick
- WinWing MCDU / PFP-3N / PAP-3 / FCU + EFIS panel variants
- MOZA AY210 Force Feedback Yoke
- Thrustmaster HOTAS Warthog
- Fanatec CSL DD / CSL DD QR2
- Cammus C5
- Logitech G PRO Racing Wheel
- Fanatec Podium DD
- Asetek Invicta wheelbase
- Virpil Constellation ALPHA grip
- MOZA SR-P and Fanatec CSL LC pedals
- Dayton Audio BST-1, BST-300EX, and common tactile amps
- RaceBox GT-FLAG / GTE or equivalent sim-racing button boxes
- Uneekor EYE XO2
- Foresight Falcon
- TrackMan iO if relevant
- TrueStrike Gel Mat and Carl's HotShot
- Logitech G29/G923 as marine helm
- Logitech/Saitek throttle quadrant for marine engine telegraph
- Turtle Beach VelocityOne / VelocityOne Rudder where a space/flight article needs the image

Do not force bad images into articles. The point is to create a source runway for Codex.

### Lane 2: Upgrade the Uncertified Legacy Backlog

Upgrade these 42 existing uncertified legacy articles. Some may already have `goldStatus: "refresh"` and some may be older files with no gold metadata yet. If usage runs short, prioritize Golf/Racing revenue first, then Flight/Space, then Marine. Keep every upgraded article hidden by ending with `goldStatus: "refresh"`.

#### Flight

1. `src/content/articles/flight/best-flight-sim-rudder-pedals.md`
2. `src/content/articles/flight/best-flight-sim-setup-beginners.md`
3. `src/content/articles/flight/best-hotas-msfs-2024.md`
4. `src/content/articles/flight/flight-sim-control-curves-calibration.md`
5. `src/content/articles/flight/flightsimexpo-2026-hardware-buyer-map.md`
6. `src/content/articles/flight/helicopter-flight-sim-controls-collective-cyclic.md`
7. `src/content/articles/flight/honeycomb-flight-deck-upgrade-path.md`
8. `src/content/articles/flight/honeycomb-vs-thrustmaster-tca.md`
9. `src/content/articles/flight/how-to-mount-flight-sim-hardware.md`
10. `src/content/articles/flight/vr-vs-monitor-flight-sim.md`

#### Golf

11. `src/content/articles/golf/best-golf-simulator-software.md`
12. `src/content/articles/golf/do-you-need-a-gaming-pc-golf-simulator.md`
13. `src/content/articles/golf/low-ceiling-golf-simulator.md`
14. `src/content/articles/golf/skytrak-plus-review.md`

#### Marine

15. `src/content/articles/marine/best-budget-marine-sim-setup.md`
16. `src/content/articles/marine/best-marine-sim-gear-2026.md`
17. `src/content/articles/marine/diy-bridge-command-throttle.md`
18. `src/content/articles/marine/diy-marine-button-box-bridge-console.md`
19. `src/content/articles/marine/marine-sim-controller-support.md`
20. `src/content/articles/marine/marine-sim-mapping-software-guide.md`
21. `src/content/articles/marine/professional-ship-simulator-2026-hardware-setup.md`
22. `src/content/articles/marine/racing-wheel-boat-helm.md`
23. `src/content/articles/marine/vr-sailing-simulator.md`

#### Racing

24. `src/content/articles/racing/best-acc-wheel-settings-2026.md`
25. `src/content/articles/racing/direct-drive-2026-do-you-need-it.md`
26. `src/content/articles/racing/how-to-fix-ffb-clipping-direct-drive-2026.md`
27. `src/content/articles/racing/moza-r5-review-2026.md`
28. `src/content/articles/racing/quick-release-trap.md`
29. `src/content/articles/racing/sim-racing-handbrake-shifter-guide-2026.md`
30. `src/content/articles/racing/smart-upgrade-path.md`

#### Space

31. `src/content/articles/space/best-controls-for-elite-dangerous.md`
32. `src/content/articles/space/best-hotas-for-star-citizen.md`
33. `src/content/articles/space/best-hotas-throttle-dcs-2026.md`
34. `src/content/articles/space/best-space-sim-controllers-2026.md`
35. `src/content/articles/space/gamepad-vs-hotas-star-citizen.md`
36. `src/content/articles/space/head-tracking-vs-vr-star-citizen.md`
37. `src/content/articles/space/how-to-bind-six-axes-hosas.md`
38. `src/content/articles/space/mounting-your-hosas-monstertech.md`
39. `src/content/articles/space/stream-deck-button-box-space-sim.md`
40. `src/content/articles/space/vkb-gladiator-to-gunfighter-upgrade-path.md`
41. `src/content/articles/space/voiceattack-hcs-setup-space-sims.md`
42. `src/content/articles/space/winwing-ursa-minor-vs-vkb-gladiator-nxt-evo.md`

For every article:

- Use the correct curator voice:
  - Racing: Duke Alvarez
  - Golf: Nina Brooks
  - Flight: Mac Donovan
  - Space: Val Chen
  - Marine: Gus Calder
- Add verdict-first opening.
- Add a buy-first ladder, comparison table, setup-tax warning, or decision tree.
- Add official specs and current source review.
- Add forum/reddit/reviewer pattern reads in our voice.
- Add inline Amazon links with `tag=ignitionsim-20`.
- Add or improve "What to Buy" sections.
- Add FAQs in frontmatter.
- Add real verified image references only. If a product lacks a verified local image, leave it text-only and put it in the manifest.
- Add a dated Sources Checked shelf.

For every touched article, create:

- `docs/claude-run-2/research/<slug>.md`
- `docs/claude-run-2/image-manifests/<slug>.json`
- `docs/claude-run-2/article-checklists/<slug>.json`

Use the same schema as Run 1, but JSON must parse cleanly. Include `blocksCertification` as a clear array.

### Lane 3: Opportunity Scout for New High-ROI Content

Research the web, Reddit, forums, YouTube/review transcripts, manufacturer news, and seller/category signals for the next content calendar. Create:

- `docs/claude-run-2/opportunity-scout-2026-07.md`
- `docs/claude-run-2/opportunity-scout-2026-07.json`

Find at least **60 new article opportunities**, scored by:

- buyer intent
- AOV / affiliate potential
- image availability
- trend urgency
- topical authority value
- competition difficulty
- curator fit
- needed product-photo work

Output the top 25 recommended in priority order. Favor:

- Golf launch monitors, projectors, mats, screens, full-room builds, subscriptions
- Racing direct drive, pedals, rigs, displays, haptics, motion, console compatibility
- Flight controls, yokes, rudders, mounts, head tracking, MSFS 2024 hardware
- Space/HOTAS/HOSAS, Star Citizen and Elite Dangerous control setups
- Niche marine only when it creates distinctive long-tail authority
- Cross-sim accessories: chairs, mounts, PCs, monitors, USB/power, audio, lighting, cable management

Each opportunity entry:

```json
{
  "title": "Best Golf Simulator Projectors for Low Ceilings",
  "bay": "golf",
  "curator": "Nina Brooks",
  "searchIntent": "buyer comparison",
  "whyNow": "Repeated room-fit/projector confusion in golf sim forums",
  "primaryProducts": ["BenQ AK700ST", "Optoma GT2100HDR"],
  "estimatedAov": "medium-high",
  "imageAvailability": "high",
  "sourceSeeds": ["https://...", "https://..."],
  "recommendedPriority": 1,
  "notesForCodex": "Needs throw-ratio infographic and low-ceiling room diagram"
}
```

## Handoff File

At the end, create:

- `docs/CODEX-HANDOFF-IGNITIONSIM-MEGA-RUN-2.md`

Include:

- How many articles upgraded
- Which products had usable image candidates
- Which articles are ready for Codex final art
- Which articles are blocked by product images
- Which articles are blocked by uncertain claims
- Which JSON files validated
- Which build/audit commands passed or failed
- Top 10 things Codex should do next
- Recommended certification order

## Required Validation

Run:

```bash
node -e "for (const d of ['docs/claude-run-2/image-manifests','docs/claude-run-2/article-checklists']) { const fs=require('fs'); if (!fs.existsSync(d)) continue; for (const f of fs.readdirSync(d).filter(x=>x.endsWith('.json'))) JSON.parse(fs.readFileSync(`${d}/${f}`,'utf8')); } console.log('json ok')"
npm run gold-audit
npm run build
```

If any command fails, record the exact failure in the handoff. Do not hide it.

## Final Claude Message

Tell Rob:

- What you completed
- Where the handoff file is
- How many articles are ready for Codex final art
- What product-photo blockers remain
- Whether JSON validation and build passed
