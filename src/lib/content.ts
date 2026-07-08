export const isCertifiedArticle = (data: { draft?: boolean; goldStatus?: string }) =>
  data.goldStatus === 'certified' && data.draft !== true;

export const articleSlug = (entry: { id: string }) => entry.id.split('/').pop() || entry.id;

export const sortNewestArticles = <T extends { data: { publishDate: Date | string } }>(items: T[]) =>
  [...items].sort((a, b) => +new Date(b.data.publishDate) - +new Date(a.data.publishDate));

export const formatArticleDate = (value: Date | string) =>
  new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(value));

export const articleMeta = (data: {
  bay?: string;
  publishDate: Date | string;
  updatedDate?: Date | string;
  readingTime?: number;
  type?: string;
}) => {
  const bay = data.bay ? `${data.bay.toUpperCase()} · ` : '';
  const date = data.updatedDate
    ? `Updated ${formatArticleDate(data.updatedDate)}`
    : `Published ${formatArticleDate(data.publishDate)}`;
  return `${bay}${date} · ${data.readingTime || 7} min read`;
};
