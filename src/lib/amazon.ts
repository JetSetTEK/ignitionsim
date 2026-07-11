const ASIN_RE = /\/(?:dp|gp\/product)\/([A-Z0-9]{10})(?:[/?#]|$)/i;
const PLAIN_ASIN_RE = /^[A-Z0-9]{10}$/i;

export function extractAmazonAsin(value?: string | null) {
  if (!value) return '';
  const trimmed = String(value).trim();
  if (PLAIN_ASIN_RE.test(trimmed)) return trimmed.toUpperCase();
  const match = trimmed.match(ASIN_RE);
  return match?.[1]?.toUpperCase() || '';
}

export function canonicalAmazonProductUrl(
  product: { amazonAsin?: string; affiliateUrl?: string },
  tag = 'ignitionsim-20',
) {
  const asin = extractAmazonAsin(product.amazonAsin) || extractAmazonAsin(product.affiliateUrl);
  const host = 'https://' + 'www.amazon.com';
  return asin ? `${host}/dp/${asin}?tag=${tag}` : '';
}
