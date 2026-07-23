import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { articleMeta, articleSlug, isCertifiedArticle } from '../lib/content';

const SITE = 'https://ignitionsim.com';
const escapeXml = (value = '') => value
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')
  .replaceAll("'", '&apos;');

export const GET: APIRoute = async () => {
  const articles = (await getCollection('articles', ({ data }) => isCertifiedArticle(data)))
    .sort((a, b) => {
      const bDate = b.data.updatedDate || b.data.publishDate;
      const aDate = a.data.updatedDate || a.data.publishDate;
      return +new Date(bDate) - +new Date(aDate);
    })
    .slice(0, 60);
  const items = articles.map((entry) => {
    const data = entry.data;
    const url = `${SITE}/${data.bay}/${articleSlug(entry)}/`;
    const feedDate = data.updatedDate || data.publishDate;
    return [
      '    <item>',
      `      <title>${escapeXml(data.title)}</title>`,
      `      <link>${escapeXml(url)}</link>`,
      `      <guid isPermaLink="true">${escapeXml(url)}</guid>`,
      `      <dc:creator>Robert Pruitt</dc:creator>`,
      `      <category>${escapeXml(data.bay)}</category>`,
      `      <pubDate>${new Date(feedDate).toUTCString()}</pubDate>`,
      `      <description>${escapeXml(`${data.excerpt || data.description} ${articleMeta(data)}`)}</description>`,
      '    </item>',
    ].join('\n');
  }).join('\n');

  const body = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<rss version="2.0" xmlns:dc="http://purl.org/dc/elements/1.1/">',
    '  <channel>',
    '    <title>IgnitionSim — New Simulator Buyer Guides</title>',
    `    <link>${SITE}/build-stream/</link>`,
    '    <description>Certified racing, golf, flight, space, and marine simulator buyer guides, comparisons, and setup warnings.</description>',
    '    <language>en-us</language>',
    `    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>`,
    items,
    '  </channel>',
    '</rss>',
  ].join('\n');

  return new Response(body, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } });
};
