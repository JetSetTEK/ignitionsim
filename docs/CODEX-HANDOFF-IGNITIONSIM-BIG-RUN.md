# Codex Handoff — IgnitionSim Big Run (Article Fill-In Pass)

**Run date:** 2026-07-02
**Agent:** Claude Code (research + article fill-in only; NO push, NO deploy, NO certification)
**Scope delivered:** 30 existing `refresh` articles upgraded to gold-candidate quality + 90 handoff files (research / image-manifest / article-checklist per article).

## Summary

All 30 target articles from the run brief were upgraded end-to-end: verdict-first structure, curator byline (author = responsible curator), buy-order ladders, comparison tables, forum/pro-tip callouts, setup-tax warnings, FAQs, internal links, Amazon `tag=ignitionsim-20` affiliate paths, and a dated **Sources Checked** shelf with real (WebSearch/WebFetch-verified) URLs.

**Hard rules honored throughout:**
- **Verified-images-only in bodies** — every embedded `/images/gear/**` path is in `src/data/verified-product-images.json` (audited: **0 unverified, 0 missing across all 30**). Products discussed but lacking a verified photo are text + Amazon-search links and are logged in each image-manifest as `needs-download`.
- **No fabrication** — prices/specs quoted from official pages; sale-volatile figures left as ranges / "check current" and flagged.
- **No procedural/AI product art**, no hotlinking, no fake UI, no long quotes (community patterns paraphrased).
- **Left as `goldStatus: refresh`** (not certified) per run rules; `candidateForCertification` is set in each checklist.

**Build/audit state (local):** `npm run gold-audit` passes (20 pre-existing certified articles, unchanged). `npx astro build` clean (166 pages). `npm run build` (prune step) intentionally NOT run. Working tree is dirty with drafts + handoff files only — nothing committed or deployed.

> Note: refresh articles do not emit a public route (the `[bay]/[slug]` route gates on `goldStatus === 'certified'`) — same staging behavior as the existing gold reference articles. Certification is Codex's deliberate next step.

## Per-article status

Legend: **ready-for-codex-final-art** = content is certification-grade, ≥8 verified images, just needs Codex's final art/composite + human cert flip. **blocked-by-product-images** = strong content but a headline pick is text-only pending a verified photo. **needs-codex-graphics** = legitimately low product-density how-to; needs infographics/diagrams (not product photos) to hit the visual bar.

| Bay | Slug | Curator | Visuals | Status |
|-----|------|---------|:------:|--------|
| racing | best-sim-racing-wheelbases-2026 | Duke Alvarez | 10 | ready-for-codex-final-art |
| racing | best-wheel-for-iracing-2026 | Duke Alvarez | 10 | ready-for-codex-final-art |
| racing | desk-vs-cockpit-sim-racing-2026 | Duke Alvarez | 12 | ready-for-codex-final-art |
| racing | best-sim-racing-setup-under-1000-2026 | Duke Alvarez | 11 | ready-for-codex-final-art |
| racing | moza-vs-fanatec-vs-simagic | Duke Alvarez | 14 | blocked-by-product-images (sweet-spot bases text-only) |
| racing | pedals-over-power | Duke Alvarez | 13 | blocked-by-product-images (MOZA SR-P, CSL LC) |
| racing | cheapest-direct-drive-2026 | Duke Alvarez | 10 | blocked-by-product-images (Cammus C5, CSL DD) |
| racing | best-ffb-settings-iracing-acc-lmu-2026 | Duke Alvarez | 2 | needs-codex-graphics (settings how-to) |
| racing | bass-shakers-tactile-feedback-simhub-2026 | Duke Alvarez | 1 | needs-codex-graphics (wiring how-to; only ButtKicker verified) |
| racing | button-box-vs-stream-deck-2026 | Duke Alvarez | 1 | needs-codex-graphics (only Stream Deck XL verified) |
| golf | golf-simulator-cost | Nina Brooks | 22 | ready-for-codex-final-art |
| golf | best-golf-launch-monitor-under-1000 | Nina Brooks | 12 | ready-for-codex-final-art |
| golf | skytrak-vs-bushnell-launch-pro-vs-gc3 | Nina Brooks | 11 | ready-for-codex-final-art |
| golf | best-golf-simulators-2026 | Nina Brooks | 22 | ready-for-codex-final-art |
| golf | best-golf-simulator-hitting-mat | Nina Brooks | 12 | ready-for-codex-final-art |
| golf | golf-simulator-impact-screen-enclosure | Nina Brooks | 11 | ready-for-codex-final-art |
| golf | radar-vs-photometric-launch-monitor | Nina Brooks | 8 | ready-for-codex-final-art |
| golf | golf-simulator-room-size | Nina Brooks | 8+ | ready-for-codex-final-art (verify checklist visualCount field) |
| golf | garage-golf-simulator-build-guide | Nina Brooks | 12 | blocked-by-product-images (bespoke garage hero wanted) |
| golf | gspro-setup-guide-courses-connectors | Nina Brooks | 6 | needs-codex-graphics (software how-to) |
| flight | best-flight-sim-hardware-2026 | Mac Donovan | 16 | blocked-by-product-images (Warthog, WinWing PAP-3, MOZA AY210 text-only) |
| flight | head-tracking-trackir-vs-tobii-msfs | Mac Donovan | 6 | blocked-by-product-images (2-product comparison; both verified — near-ready) |
| flight | force-feedback-yoke-worth-it | Mac Donovan | 2 | blocked-by-product-images (MOZA AY210 headline, text-only) |
| flight | flight-sim-usb-hub-wiring-multi-panel | Mac Donovan | 1 | needs-codex-graphics (wiring how-to) |
| flight | msfs-2024-best-graphics-settings-fps | Mac Donovan | 0 | needs-codex-graphics (settings guide; infographic-driven) |
| space | vkb-vs-virpil-vs-winwing-space-sticks-2026 | Val Chen | 12 | ready-for-codex-final-art (WinWing photo = top gap) |
| space | best-beginner-hosas-under-300 | Val Chen | 9 | ready-for-codex-final-art (WinWing Ursa Minor text-only) |
| space | hosas-vs-hotas | Val Chen | 9 | ready-for-codex-final-art |
| marine | marine-sim-hardware-reality | Gus Calder | 10 | ready-for-codex-final-art |
| marine | best-sailing-sim-setup-2026 | Gus Calder | 2 | needs-codex-graphics (niche; only Quest 3 verified) |

## Top image-generation / composite priorities for Codex

Highest ROI (revenue-tier A + already certification-candidate content, just need final art):
1. **Golf cornerstones** — `best-golf-simulators-2026`, `golf-simulator-cost`, `best-golf-launch-monitor-under-1000`, `skytrak-vs-bushnell-launch-pro-vs-gc3` (22/22/12/11 verified images already; add dream-bay hero composites + buy-order infographics).
2. **Racing cornerstones** — `best-sim-racing-wheelbases-2026`, `best-sim-racing-setup-under-1000-2026`, `desk-vs-cockpit-sim-racing-2026` (torque-sweet-spot + buy-order infographics; garage-bench hero composites).
3. **Space rescues** — `vkb-vs-virpil-vs-winwing-space-sticks-2026`, `hosas-vs-hotas`, `best-beginner-hosas-under-300` (command-station hero composites; the WinWing photo gap is the #1 blocker here).

Each article's `docs/claude-run/image-manifests/<slug>.json` contains ready-to-use `editorialCompositePrompts`, `infographicPrompts`, and `curatorScenePrompts`.

## Products needing verified local photos (recurring `needs-download`)

Sourcing these unlocks certification for multiple articles at once (priority order by article impact):
- **WinWing** Ursa Minor Space + panels (MCDU / PFP-3N / PAP-3 / FCU-EFIS) — blocks 3 flight/space articles.
- **MOZA AY210 FFB yoke** — blocks `force-feedback-yoke-worth-it` + `best-flight-sim-hardware-2026`.
- **Thrustmaster HOTAS Warthog** — blocks the combat rung of `best-flight-sim-hardware-2026`.
- **Fanatec CSL DD, Cammus C5, Logitech G PRO Racing Wheel, Asetek Invicta (base), Fanatec Podium DD** — racing budget/premium picks (text-only across wheelbases / cheapest-DD / moza-vs).
- **Virpil Constellation ALPHA grip** — space.
- **Logitech G29 / G923 helm, Saitek throttle quadrant** (marine-context photos) — marine.
- **Turtle Beach VelocityOne** (space-bay path; only the flight-bay image is verified).
- **Bespoke garage-golf hero**, and confirm `sigpro-premium-impact-screen.jpg` verification status (embedded in `best-golf-simulators-2026`).

Files that exist on disk but are NOT verified (kept text-only correctly; vision-verify + add to `verified-product-images.json` if genuine): `desktop-pilot-10-port-usb-hub.jpg`, `moza-ay210-ffb-yoke.jpg`, `fanatec-csl-dd.jpg`, `uneekor-eye-xo2.jpg`, `foresight-falcon.jpg`, `logitech-g29-helm.jpg`, `winwing-ursa-minor-space.jpg`, `virpil-constellation-alpha-grip.jpg`.

## Data-drift flags for a product-JSON refresh (found during research)

- **MOZA R9** is now **V3**; `src/data/products/racing*.json` says V2.
- **Desktop Pilot 10-port USB hub** is now ~**$108**; `flight-extra.json` says ~$60.
- **ButtKicker Gamer Pro** official MSRP is **$349.95**; our spec card shows ~$200 (article used ~$200 to match spec card — reconcile).
- **SIG10 enclosure** live retailer now says **push-pin poles**; product JSON says steel-pipe.
- **eSail** current is **V3** (May 2026); **MarineVerse Cup → MarineVerse Sailing Club**.

## URLs Codex should re-check before certifying

- ClubSport DD+ exact US MSRP ($899 vs $999) — `fanatec.com`.
- Fanatec GT DD Pro current bundle price (sale-dependent).
- Thrustmaster HOTAS Warthog + WinWing panel variant MSRPs.
- Rapsodo/Garmin/SkyTrak subscription pricing (golf LM articles).
- GSPro subscription price + connector compatibility list.
- MOZA CRP2 US price; Fanatec CSL LC all-in price.
- PMDG multi-hub power detail (forum 403'd during research — paraphrased, flag to re-verify).

## Recommended certification order

1. **Golf revenue wave** (highest intent + AOV, most complete): `golf-simulator-cost` → `best-golf-launch-monitor-under-1000` → `best-golf-simulators-2026` → `skytrak-vs-bushnell-launch-pro-vs-gc3` → `best-golf-simulator-hitting-mat` → `golf-simulator-impact-screen-enclosure` → `radar-vs-photometric-launch-monitor` → `golf-simulator-room-size`.
2. **Racing revenue wave:** `best-sim-racing-wheelbases-2026` → `best-sim-racing-setup-under-1000-2026` → `desk-vs-cockpit-sim-racing-2026` → `best-wheel-for-iracing-2026`.
3. **Space authority (after WinWing photo):** `hosas-vs-hotas` → `best-beginner-hosas-under-300` → `vkb-vs-virpil-vs-winwing-space-sticks-2026`.
4. **Marine authority:** `marine-sim-hardware-reality`.
5. **After product photos land:** the `blocked-by-product-images` racing/flight roundups.
6. **After Codex infographics:** the `needs-codex-graphics` how-tos (FFB settings, MSFS graphics, USB wiring, bass shakers, button-box, GSPro).

## Where everything is

- Articles: `src/content/articles/<bay>/<slug>.md` (all 30, `goldStatus: refresh`).
- Research packs: `docs/claude-run/research/<slug>.md`.
- Image manifests: `docs/claude-run/image-manifests/<slug>.json`.
- Article checklists: `docs/claude-run/article-checklists/<slug>.json` (each has `candidateForCertification` + `blockers[]`).

No article was archived or recommended for deletion — all 30 are worth keeping and upgrading.
