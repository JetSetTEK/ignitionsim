# IgnitionSim

**The engineer's guide to sim hardware** — racing, flight, space, marine and golf. Compatibility-checked builds, honest gear reviews, and restock alerts. Built ground-up for SEO/GEO/AISEO.

→ Live: **https://ignitionsim.com**

## Stack
Astro 5 (static SSG) · @astrojs/sitemap · Sharp · deployed on Netlify (`ignitionrig`). No backend.

## Develop
```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # → dist/
```

## Structure
- `src/pages/` — hub (`index.astro`), bays (`[bay]/index.astro`), articles (`[bay]/[slug].astro`), configurator, about, drops, alerts, legal.
- `src/components/` — Logo, Header, Footer, Configurator (the centerpiece), PanoSlider, ArticleCard, FAQ.
- `src/content/articles/<bay>/*.md` — editorial (schema in `src/content.config.ts`).
- `src/data/` — `site.json`, `bays.json`, `catalog-racing.json` (configurator rules).
- `src/styles/themes.css` — master Blade-Runner shell + per-bay `[data-bay]` tokens + `--ember` brand spark.
- `pipeline/research/<bay>.json` — research briefs that seed editorial.
- `scripts/` — image fetch (Pollinations), OG generator, manifest builder.

See `CLAUDE.md` for the full operating brief, non-negotiables, and the isolation rule.

## License
© 2026 IgnitionSim. All rights reserved.
