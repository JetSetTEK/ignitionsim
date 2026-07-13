import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { articleSlug, isCertifiedArticle } from '../lib/content';

const SITE = 'https://ignitionsim.com';
const escapeXml = (value = '') => value
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')
  .replaceAll("'", '&apos;');

function localImages(source: string, hero?: string): string[] {
  const found = [
    hero,
    ...[...source.matchAll(/!\[[^\]]*]\((\/[^)\s]+)(?:\s+['"][^'"]*['"])?\)/g)].map((match) => match[1]),
    ...[...source.matchAll(/<img\s+[^>]*src=["'](\/[^"']+)["']/gi)].map((match) => match[1]),
  ].filter((value): value is string => Boolean(value && value.startsWith('/')));
  return [...new Set(found)].slice(0, 30);
}

export const GET: APIRoute = async () => {
  const articles = await getCollection('articles', ({ data }) => isCertifiedArticle(data));
  const urls = articles.map((entry) => {
    const images = localImages(entry.body || '', entry.data.heroImage);
    if (!images.length) return '';
    const imageNodes = images.map((src) => [
      '    <image:image>',
      `      <image:loc>${escapeXml(new URL(src, SITE).href)}</image:loc>`,
      `      <image:title>${escapeXml(entry.data.title)}</image:title>`,
      '    </image:image>',
    ].join('\n')).join('\n');
    return [
      '  <url>',
      `    <loc>${SITE}/${entry.data.bay}/${articleSlug(entry)}/</loc>`,
      imageNodes,
      '  </url>',
    ].join('\n');
  }).filter(Boolean).join('\n');

  const body = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">',
    urls,
    '</urlset>',
  ].join('\n');

  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
