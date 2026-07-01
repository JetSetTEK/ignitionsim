# IgnitionSim Gold Standard

IgnitionSim is an authority site for people who want to buy real simulator hardware, install it cleanly, and start playing without losing a weekend to bad fit, weak mounting, driver weirdness, or forum haze.

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

## Visual Standard
- Use real licensed product, manufacturer, affiliate-feed, Amazon Associates, or owned photos for physical products and rigs.
- Use Pexels/Unsplash only for lifestyle or rig atmosphere, with visible credit where required.
- Do not use AI-generated imagery to represent an actual component, cockpit, launch monitor, wheelbase, pedal set, stick, yoke, enclosure, or rig.
- Do not use procedural/abstract placeholder art for certified article covers, related cards, gear cards, product benches, or money-page thumbnails. If a public card cannot show real product/use/parts imagery, the page stays `refresh` until it can.
- Product thumbnails and gear cards should center the product, use `object-fit: contain`, and avoid aggressive cropping.
- AI imagery is allowed for abstract backdrops, editorial textures, characters, retro UI flavor, or diagrams that cannot be mistaken for real hardware.
- Diagrams must be useful: wiring paths, room measurements, cockpit mounting points, cable management, display geometry, pedal/load-cell forces, throw-ratio math, or decision trees.
- Certified cornerstone articles need visual density: real product shots, official install/use photos, part closeups, comparison benches, and practical diagrams. The goal is a page a builder can scan with coffee in hand and immediately understand what goes in the cart and what goes on the desk/rig/wall.

## Article Requirements
Every cornerstone article should include:
- A fast verdict near the top: buy now, buy with caveats, wait, or skip.
- A "what to buy first" path for different budgets and seriousness levels.
- Verified product photos, use photos, diagrams, or manufacturer/store images for every recommended product.
- At least one article-cover/product-bench image made from real products, not decorative geometry.
- At least 8 useful visuals for a normal certified buyer guide, and 12+ visuals for high-ROI cornerstone guides.
- Practical warnings: setup tax, weekend killers, compatibility traps, room/desk/mount limits, software gotchas, and return-window advice.
- Official sources for hard specs and compatibility claims.
- Community pattern reads paraphrased in our own voice, linked to Reddit/forum searches or specific threads when useful.
- Live seller-review check links instead of stale marketplace star claims unless the rating is captured with a date.
- Internal links to the bay hub, gear pages, adjacent buyer maps, and relevant best-of rankings.
- FAQ blocks written as direct answer-engine bait: short, specific, accurate, and useful.
- Product schema, article schema, FAQ schema, descriptive image alt text, and a clear updated date when refreshed.

## Product Review Standard
- Never fabricate prices, review counts, star ratings, stock status, dimensions, compatibility, or firmware claims.
- If a product has credible low-star patterns, name the risk in plain English and link readers to live reviews or a sourced discussion.
- If a product is good but annoying, say so: "buy it, but know this will take an extra Saturday."
- If the best advice is to wait for a revision, say that even if the affiliate link would convert today.
- Use Amazon links for now, but prefer official/vendor links when Amazon does not show the right product or the product is ecosystem/direct-only.

## Homepage And Hub Standard
The public path should prioritize:
- Sim type lanes: racing, flight, space, marine, golf.
- Current cornerstone buyer maps.
- High-intent product comparisons and gear benches.
- Real build/community research summarized in our voice.
- Brands and best-of rankings.
- Tool pages only when they are accurate enough to reduce purchase uncertainty.

## Tool Policy
- Backburner pages: configurators, garage, drops, and alerts stay in the repo but should not be primary navigation or indexed until the data is real.
- Bring a tool back to the front only when it has real product photos, clear disclaimers, current data, and a user flow that beats reading a guide.
- A tool that is fun but incomplete is a lab asset. A tool that helps someone avoid a $500 mistake is a homepage asset.

## Publishing Checklist
Before publishing or pushing a major update:
- Confirm the frontmatter includes `goldStatus: "certified"` only after the checks below pass.
- Run `npm run gold-audit`; it must pass before build, deploy, or push. The build now runs this automatically, but run it directly while editing so failures are caught early.
- Check that the article has a buyer verdict, warnings, product bench, source shelf, FAQ, internal links, and affiliate links that land on the intended product.
- Check images for real-photo compliance, uncropped product visibility, correct alt text, and no fake product render confusion.
- Search the output for placeholder markers, `PHOTO SLOT READY`, `cimg-fallback`, procedural hero art, missing images, and product pages that are only spec cards. Fix or demote before deploy.
- Check mobile and desktop layouts for overflow, tiny infographic text, unreadable contrast, and cropped important content.
- Run `npm run art` only after verifying it uses the real-product collage pipeline. Then run `npm run build`.
- If a page relies on current prices, release dates, firmware, ratings, product availability, or active community sentiment, verify with current sources before publishing.
- Update the relevant hub/homepage/gear/best-of surfaces when the article is strategically important.

## Revenue Horizon
- The site is being built toward a $10,000/month revenue horizon within a year. Every certified article should move the site toward that with high-intent topics, buyer confidence, product-photo trust, internal links to gear pages, and monetizable next steps.
- Revenue never outranks trust. The editorial stance remains blunt: buy now, buy with caveats, wait, or skip.
- When a content cluster has enough certified depth, look for tools that reduce purchase uncertainty: compatibility checkers, room/rig calculators, build ladders, cable/power planners, and cart-ready buyer paths.
