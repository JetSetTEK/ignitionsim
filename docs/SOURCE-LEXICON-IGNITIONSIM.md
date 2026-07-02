# IgnitionSim Source Lexicon

This is the starting source registry for product-photo hunting, source review, and curator research. The rule is simple: real hardware gets real images. AI can build atmosphere, curator scenes, and diagrams, but it cannot impersonate a product, game UI, dashboard, launch monitor, wheelbase, pedal set, cockpit, yoke, stick, throttle, screen, or enclosure.

## Product Media Priority

1. Official manufacturer product pages, press rooms, manuals, and setup docs.
2. Specialty retailer product pages when they publish clean store media and the official page is blocked or incomplete.
3. Amazon Associates links and Amazon product pages for broad catalog items, with title/ASIN checks before linking.
4. Owned screenshots, owned photos, original diagrams, and explicitly permitted community photos.

Do not hotlink. Save verified product media into `public/images/gear/...`, keep the product source URL in the product registry or fetch script, and verify the local file before it can appear on public product benches.

## Racing Sources

- MOZA Racing product pages: wheelbases, pedals, bundles, and flight crossover gear.
- Fanatec, Logitech G, Thrustmaster, Simagic, Simucube, Asetek SimSports, Heusinkveld, Sim-Lab, Trak Racer, Next Level Racing, GT Omega.
- Display and immersion products: Samsung, ASUS, Meta Quest, Pimax, ButtKicker.
- Research voices: Boosted Media, Sim Racing Cockpit, Sim Racing Setup, Dan Suzuki, GamerMuscle, Sim Racing Garage, OverTake/RaceDepartment, and `r/simracing`.

## Golf Sources

- Garmin, SkyTrak, Bushnell/Foresight Sports, Uneekor, FlightScope, Rapsodo, Full Swing, Square Golf.
- BenQ and Optoma projector pages; Shop Indoor Golf, Rain or Shine Golf, Carl's Place, Fiberbuilt, SIGPRO.
- Research voices: Golf Simulator Forum, `r/Golfsimulator`, Golf Monthly, Breaking Eighty, PlayBetter, Rain or Shine Golf guides, Shop Indoor Golf guides.

## Flight Sources

- Honeycomb, Thrustmaster, Logitech G/Saitek, MOZA Flight, WinWing/WinCTRL, Turtle Beach, VKB, NaturalPoint TrackIR, Tobii.
- Research voices: MSFS forums, AVSIM, FSElite, FlightSimExpo coverage, Windows Central, flightsim.to, and hardware-focused YouTube walkthroughs.

## Space / HOTAS Sources

- VKB, Virpil, WinWing, Thrustmaster, Logitech, Monstertech, Elgato, Tobii, TrackIR.
- Research voices: `r/hotas`, `r/starcitizen`, Star Citizen Spectrum discussions, Elite Dangerous forums, DCS control threads, HOTAS Discord/forum writeups when publicly linkable.

## Marine Sources

- Bridge Command, MarineVerse, Sailaway, eSail, Professional Ship Simulator, Leo Bodnar, Arduino, RailDriver, Logitech/Saitek panels, generic button-box makers.
- Research voices: Bridge Command docs, sailing-sim forums, Steam discussions, DIY control-builder threads, and marine sim YouTube build logs.

## Game / Software Media Sources

- Official game sites, press kits, Steam pages, developer news posts, official YouTube screenshots, and owned screenshots.
- Never AI-generate fake telemetry, fake game menus, fake cockpit displays, fake maps, fake scorecards, or fake setup screens.
- For game review cards, use official/owned screenshots plus real hardware photos of the gear that changes the experience.

## Community Research Rules

- Reddit/forum quotes are paraphrased by default and linked to source discussions or search pages.
- Use direct quotes sparingly and only when they add authority.
- Look for patterns: repeated complaints, upgrade regrets, installation traps, compatibility surprises, return-window warnings, and "I wish I bought X first" comments.
- Curator voices translate the research into plain advice. They do not invent claims, ratings, stock status, or prices.

## Verification Checklist

- `curl`/fetch returns HTTP 200 and image content.
- Local image is not a logo, icon, placeholder, tracking pixel, or tiny thumbnail.
- Product is centered, recognizable, and not aggressively cropped.
- If the image is an AI scene, label it as editorial/AI and keep real product proof nearby.
- If the product is unavailable or direct-only, use official/vendor links instead of forcing a bad Amazon search.
