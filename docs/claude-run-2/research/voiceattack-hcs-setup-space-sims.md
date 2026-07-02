# Research Pack: VoiceAttack & HCS Voice Packs for Space Sims

- **Article:** VoiceAttack & HCS Voice Packs for Star Citizen and Elite Dangerous: 2026 Setup Guide
- **Slug:** `space/voiceattack-hcs-setup-space-sims`
- **Curator:** Val Chen (space)
- **Date researched:** 2026-07-02

## Source table

| Claim / need | Source | URL | Date accessed | Used where | Confidence | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| VoiceAttack v2 ~$10 direct; unlimited profiles/commands; Windows-only, needs a working Windows speech engine | VoiceAttack official (purchase page) | https://voiceattack.com/purchase.aspx | 2026-07-02 | Verdict, cost table, "what it does", FAQ | High | Direct price $10.00 (+TX sale tax); v2 is current; v1 access included; free 2.x maintenance updates |
| VoiceAttack v2 $11.99 regular / ~$8.99 (25% off) during Steam sale | Steam store | https://store.steampowered.com/app/3046550/VoiceAttack_v2/ | 2026-07-02 | Cost table (~$9-12 sale range) | High | Confirms retail band around $9-12; sale-dependent |
| HCS ASTRA 2 Remastered (Star Citizen) £21.99; requires VoiceAttack; includes free "Event Horizon" profile for multi-crew voice assignment | HCS Voice Packs official (product page) | https://www.hcsvoicepacks.com/products/astra-2-remastered-star-citizen | 2026-07-02 | HCS section, cost table, FAQ | High | 10th-anniversary remaster; replaces original Astra 1 on upgrade |
| Star Citizen HCS packs ~£10-22.99 individual (ASTRA 2 £21.99, D.A.R.K v2 £22.99, Ripley £19.99, Jupiter £14.99, Orion/Vega/Nova/Callisto £15, Helix £10); starter bundles £26.99 (some include VoiceAttack) | HCS Voice Packs official (SC collection) | https://www.hcsvoicepacks.com/collections/star-citizen | 2026-07-02 | HCS section, cost table, FAQ | High | GBP prices; USD is approximate (FX + sales swing) — flagged "check current" |
| HCS voice talent are professional voice actors (Deejay Knight, Alix Martin, "The Man With No Name"); no big-name celebrity attribution visible on the store | HCS Voice Packs official (all collection) | https://www.hcsvoicepacks.com/collections/all | 2026-07-02 | HCS section (honesty fix) | High | CORRECTED prior draft's "celebrity-voiced / well-known sci-fi actors" claim — could NOT verify; softened to "professional voice actors" |
| WhisperAttack: free offline OpenAI Whisper AI recognition replacing Windows Speech Recognition; needs NVIDIA GPU 6GB+ VRAM; markedly more accurate | WhisperAttack (GitHub) + VoiceAttack forum | https://github.com/nikoelt/WhisperAttack ; https://forum.voiceattack.com/smf/index.php?topic=4973.0 | 2026-07-02 | Setup pro-tip callout, FAQ, verdict | High | 2026-relevant power-user accuracy upgrade; RTX 2060 6GB / GTX 1070 8GB confirmed working; CPU fallback if no CUDA |
| Example importable community SC VoiceAttack profile | GitHub (Chadarius) | https://github.com/Chadarius/StarCitizenVoiceAtk | 2026-07-02 | Setup step 3, sources | Medium | Cited as an example of public importable binds, not endorsed as canonical |
| Elgato Stream Deck XL 32 keys ~$225 (Sweetwater sale) / ~$250 MSRP; MK.2 15-key ~$150 | Elgato official + retail | https://www.elgato.com/us/en/p/stream-deck-xl | 2026-07-02 | Panel alternative, gearpick, cost | High | New "Stream Deck + XL" (36 keys, dials, ~$350) exists but is NOT the pick here — kept to the XL |
| "Speak the housekeeping, press the combat"; mic quality is the real variable; voice unsafe for combat-reaction inputs | Community consensus (paraphrased) | https://www.reddit.com/r/starcitizen/ ; https://www.reddit.com/r/EliteDangerous/ | 2026-07-02 | Forum callout, "what it does", verdict | Medium | Paraphrased pattern, not quoted |

## Community pattern notes (paraphrased in our voice)
- The durable community split: labeled hardware/voice for deliberate + conversational binds respectively; voice is great for "request docking" / "all power to engines" and dangerous for anything fired under pressure (recognition lag + misfires).
- The friction people actually report is setup and mic quality, NOT the concept. Untrained Windows recognition + a laptop mic in a noisy room is the top failure mode.
- Start-small wisdom: five high-value non-time-critical commands, live with them a week, then expand. A bloated half-remembered profile is worse than five trusted commands.
- 2026 shift: power users increasingly route around Windows Speech Recognition entirely with WhisperAttack (offline Whisper) for accuracy, at the cost of GPU VRAM and a separate install.

## Credible warnings / caveats
- Prices are sale- and FX-sensitive: VoiceAttack swings ~$9-12; HCS runs frequent sales and is priced in GBP — all USD figures are approximate, flagged "check current."
- HCS packs assume DEFAULT in-game binds; the buyer must remap to their own keymap (personalization tax).
- WhisperAttack is a power-user step (separate recognition server) and leans on an NVIDIA GPU with 6GB+ VRAM — not for everyone; confirm current requirements on GitHub.
- VoiceAttack is Windows-only and needs a working Windows speech engine in the user's language.
- Honesty correction applied: dropped the earlier "celebrity-voiced" / "well-known sci-fi actors" framing — not substantiated on the HCS store; now "professional voice actors."

## Products discussed
| Product | Type | Gear page / official link | Amazon (search) | Local image | Verified? |
| --- | --- | --- | --- | --- | --- |
| VoiceAttack v2 | Software (required engine) | https://voiceattack.com/ | n/a (official link, not Amazon) | — | N/A (software — no product card) |
| HCS Voice Packs (ASTRA 2, D.A.R.K, Ripley, etc.) | Software profiles (optional) | https://www.hcsvoicepacks.com/collections/star-citizen | n/a (official link) | — | N/A (software — no product card) |
| WhisperAttack | Free open-source tool (optional) | https://github.com/nikoelt/WhisperAttack | n/a (official link) | — | N/A (free tool — no product card) |
| Elgato Stream Deck XL | Hardware macro panel (the relevant alt) | /space/gear/elgato-stream-deck-xl | Elgato+Stream+Deck+XL | /images/gear/space/elgato-stream-deck-xl.jpg | **YES** |

## Unresolved / for Codex to re-check
- Exact current **USD** price of each HCS pack and the ASTRA 2 starter bundle (store lists GBP; USD depends on FX + active sale) — verify before quoting a hard dollar figure.
- Whether any current HCS pack is now attributable to a genuinely well-known celebrity/sci-fi actor (store did not surface one on the pages checked) — re-check if a future refresh wants to make that claim.
- Current Elgato Stream Deck XL street price ($225 sale vs $250 MSRP) and MK.2 price — confirm before certification.
- WhisperAttack minimum VRAM / current release requirements — re-confirm on GitHub at certification time (fast-moving open-source project).
- This is a deliberately LOW product-density software how-to. Only ONE verified product image exists that is genuinely relevant (Stream Deck XL). Do NOT force additional gear cards. Certification is blocked on visual density unless Codex supplies verified infographics (see image manifest) — do not certify by padding with irrelevant hardware.
</content>
