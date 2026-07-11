# IgnitionSim Source Lexicon

This is the starting source registry for product-photo hunting, source review, and curator research. The rule is simple: real hardware gets real images. AI can build atmosphere, curator scenes, and diagrams, but it cannot impersonate a product, game UI, dashboard, launch monitor, wheelbase, pedal set, cockpit, yoke, stick, throttle, screen, or enclosure.

## Product Media Priority

1. Official manufacturer product pages, press rooms, manuals, and setup docs.
2. Specialty retailer product pages when they publish clean store media and the official page is blocked or incomplete.
3. Amazon Associates links and Amazon product pages for broad catalog items, with title/ASIN checks before linking. Amazon CTAs must be exact direct product URLs, never search-result pages.
4. Owned screenshots, owned photos, original diagrams, and explicitly permitted community photos.

Do not hotlink. Save verified product media into `public/images/gear/...`, keep the product source URL in the product registry or fetch script, and verify the local file before it can appear on public product benches.

## Reusable Image Source Pools

Use this order when filling article visuals, thumbnails, and product benches. The goal is product-photo porn with receipts: real gear, real rooms, real setup friction, then curated atmosphere.

1. Official product media: manufacturer product pages, manuals, installation PDFs, press kits, and official setup photos. Best for product proof, box art, rear-port shots, scale, mount compatibility, and diagrams.
2. Specialty retailers: B&H, Micro Center, PlayBetter, Shop Indoor Golf, Rain or Shine Golf, Carl's Place, Trak Racer, Sim-Lab, Next Level Racing, and distributor pages with clear product galleries. Use when official pages are thin or missing setup angles.
3. Licensed context images: Pexels, Unsplash, Wikimedia Commons, NASA media, and other clearly licensed sources. Use for room mood, cockpit/garage/bridge atmosphere, category backgrounds, and non-product lifestyle context.
4. Community rigs and build photos: Reddit, forums, Discord-posted galleries, YouTube thumbnails, and personal blogs are inspiration, research evidence, and outbound links unless we have explicit permission to embed or a compatible license. Build "community evidence" cards with our takeaways and source links rather than copying photos into the repo.
5. Real human/use images: prioritize licensed photos and official use/install media showing hands on controls, people seated in rigs, products installed, cables routed, boxes opened, or rooms being measured. These are not decoration; they provide scale and trust.
6. AI/editorial scenes: allowed for curators, diagrams, vibe, and hypothetical room layouts only. Curators must be doing useful work in the correct universe: simming, installing, testing, tuning, driving, flying, comparing, or annotating. Do not use AI to impersonate a real joystick, wheelbase, launch monitor, projector, game UI, box, review screenshot, or installed rig.

Every new article pass should save a small local background/context pool under `public/images/source-backgrounds/{category}/` when useful. These images can support varied thumbnails, but the article body still needs real product photos, setup photos, diagrams, and screenshots close to the buying decision. Keep the original attribution and source URL in `src/data/photography.json` or the product registry when a local source-background file is added.

## Fast Image Hunt List

- Space / HOTAS / HOSAS: VKB, Virpil, WinWing/WINCTRL, Thrustmaster, Logitech G/Saitek, Monstertech, Foxx Mount, Predator Mounts, Elgato, Tobii, TrackIR, Star Citizen official media, Elite Dangerous official/Steam media, NASA media, Pexels SpaceX images.
- Racing: MOZA, Fanatec, Logitech G, Thrustmaster, Simagic, Simucube, Asetek SimSports, Heusinkveld, Sim-Lab, Trak Racer, Next Level Racing, GT Omega, ButtKicker, Samsung/ASUS display pages, Boosted Media and Sim Racing Cockpit for review-source context.
- Golf: Garmin, SkyTrak, Bushnell/Foresight, Uneekor, FlightScope, Rapsodo, Full Swing, Square Golf, BenQ, Optoma, Fiberbuilt, SIGPRO, Carl's Place, Shop Indoor Golf, Rain or Shine Golf, PlayBetter, Breaking Eighty.
- Flight: Honeycomb, Thrustmaster, Logitech G/Saitek, MOZA Flight, WinWing/WINCTRL, Turtle Beach, VKB, Virpil, NaturalPoint TrackIR, Tobii, FlightSimExpo exhibitors, MSFS official/Marketplace screenshots.
- Marine: Bridge Command, MarineVerse, Sailaway, eSail, Professional Ship Simulator, Leo Bodnar, Arduino/DIY throttle documentation, RailDriver, Logitech/Saitek panels, generic USB button-box makers, ship bridge/helm stock libraries.

## Image Source URLs

- Licensed context/photo pools: [Pexels license](https://www.pexels.com/license/), [Unsplash license](https://unsplash.com/license), [NASA Image and Video Library](https://images.nasa.gov/), [NASA image use policy](https://gpm.nasa.gov/image-use-policy), [Wikimedia Commons](https://commons.wikimedia.org/).
- Space / HOTAS product media: [VKB](https://vkbsimcontrollers.com/), [VIRPIL](https://virpil-controls.us.com/), [WINWING](https://winwingsim.com/), [Thrustmaster](https://www.thrustmaster.com/), [Monstertech](https://www.monster.tech/), [Elgato](https://www.elgato.com/), [Tobii](https://gaming.tobii.com/), [TrackIR](https://www.trackir.com/).
- Racing product media: [MOZA Racing](https://mozaracing.com/), [Fanatec](https://fanatec.com/), [Simagic](https://en.simagic.com/), [Simucube](https://simucube.com/), [Asetek SimSports](https://www.asetek.com/simsports/), [Sim-Lab](https://sim-lab.eu/), [Trak Racer](https://trakracer.com/), [Next Level Racing](https://nextlevelracing.com/).
- Golf product media: [Garmin Golf](https://www.garmin.com/en-US/c/sports-fitness/golf-gps-devices/), [SkyTrak](https://skytrakgolf.com/), [Foresight Sports](https://www.foresightsports.com/), [Uneekor](https://uneekor.com/), [FlightScope](https://flightscope.com/), [Rapsodo](https://rapsodo.com/), [BenQ Golf Simulator Projectors](https://www.benq.com/en-us/projector/golf-simulator.html), [Carl's Place](https://www.carlofet.com/).
- Flight product media: [Honeycomb Aeronautical](https://flyhoneycomb.com/), [Turtle Beach VelocityOne](https://www.turtlebeach.com/), [Logitech G Flight](https://www.logitechg.com/en-us/products/flight.html), [FlightSimExpo](https://flightsimexpo.com/), [Microsoft Flight Simulator](https://www.flightsimulator.com/).
- Marine/DIY media: [Bridge Command](https://www.bridgecommand.co.uk/), [Bridge Command throttle docs](https://www.bridgecommand.co.uk/Doc/makethrottle.php), [MarineVerse](https://www.marineverse.com/), [Sailaway](https://sailaway.world/home), [eSail](https://www.esailyachtsimulator.com/), [Leo Bodnar](http://www.leobodnar.com/).

Useful search patterns:

- `site:manufacturer.com product-name manual pdf`
- `site:manufacturer.com product-name press kit`
- `site:retailer.com product-name rear ports`
- `site:reddit.com/r/simracing full rig setup photo product-name`
- `site:reddit.com/r/hotas HOSAS desk mount setup`
- `site:golfsimulatorforum.com launch monitor room setup photos`
- `product-name installation guide`
- `product-name box contents`
- `product-name low star review issue`

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
- If the product is unavailable, direct-only, or cannot be matched to an exact ASIN, use official/vendor links instead of forcing a bad Amazon CTA.
