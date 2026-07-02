import events from '../data/events.json';
import site from '../data/site.json';

// Stowed from public routing until drops are backed by live, verified product data.
const esc = (s: string) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

export async function GET() {
  const sorted = [...(events as any[])].sort((a, b) => +new Date(b.date) - +new Date(a.date)).slice(0, 30);
  const items = sorted.map((e) => {
    const link = e.productId ? `${site.url}/${e.bay}/gear/${e.productId}` : `${site.url}/drops`;
    return `    <item>
      <title>${esc(`[${e.type}] ${e.title}`)}</title>
      <link>${link}</link>
      <guid isPermaLink="false">${e.id}</guid>
      <category>${esc(e.bay)}</category>
      <pubDate>${new Date(e.date).toUTCString()}</pubDate>
      <description>${esc(e.note || '')}</description>
    </item>`;
  }).join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>IgnitionSim — Drops &amp; Deals</title>
    <link>${site.url}/drops</link>
    <description>New releases, price drops and restocks across sim racing, flight, space, marine and golf hardware.</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
${items}
  </channel>
</rss>`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
