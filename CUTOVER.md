# IgnitionSim — Domain Cutover (final step)

The site is **built, deployed, and live** on Netlify production:
- **https://ignitionrig.netlify.app** (fully working — verified)
- Netlify site: **ignitionrig** (`site_id bb77f29f-8827-4318-8a57-eb2d2e9908f0`), isolated/standalone.
- Custom domain **ignitionsim.com** is already attached on the Netlify side (SSL will auto-provision once DNS resolves).

## What's left: 2 DNS records in Cloudflare
The `ignitionsim.com` Cloudflare zone is currently **empty (0 records)**. Add these two,
then Netlify provisions the Let's Encrypt cert automatically (usually within minutes):

| Type  | Name | Content / Target          | Proxy status      | TTL  |
|-------|------|---------------------------|-------------------|------|
| A     | `@`  | `75.2.60.5`               | **DNS only (grey cloud)** | Auto |
| CNAME | `www`| `ignitionrig.netlify.app` | **DNS only (grey cloud)** | Auto |

**Important:** set the proxy to **DNS only (grey cloud)**, not Proxied (orange).
That lets Netlify issue and serve its own SSL cert without a Cloudflare proxy/SSL-mode conflict.
You can flip on the orange proxy later (with Cloudflare SSL set to **Full (strict)**) if you want
Cloudflare's CDN/WAF in front — but launch DNS-only first so the cert provisions cleanly.

`75.2.60.5` is Netlify's documented load-balancer IP for apex/root domains on external DNS.

## Why this wasn't auto-completed
- No Cloudflare API token exists on the machine.
- Driving Cloudflare's dashboard API from the browser session requires reading the session/CSRF
  token, which the agent safety layer (correctly) blocks.
- The DOM-automation browser profile isn't the one signed into Cloudflare, and Cloudflare stalls
  automated browsers on its own dashboard.

So the records are left for a human session. Ask Claude to "finish the IgnitionSim cutover" while
you're at your logged-in Chrome and it can drive the dashboard with you, or paste the two rows above.

## Verify after adding
```
dig +short ignitionsim.com           # → 75.2.60.5
dig +short www.ignitionsim.com        # → ignitionrig.netlify.app
curl -sI https://ignitionsim.com      # → HTTP/2 200 once SSL provisions
```
