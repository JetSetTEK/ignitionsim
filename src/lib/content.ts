export const isCertifiedArticle = (data: { draft?: boolean; goldStatus?: string }) =>
  data.goldStatus === 'certified' && data.draft !== true;

export const articleSlug = (entry: { id: string }) => entry.id.split('/').pop() || entry.id;

export const sortNewestArticles = <T extends { data: { publishDate: Date | string } }>(items: T[]) =>
  [...items].sort((a, b) => +new Date(b.data.publishDate) - +new Date(a.data.publishDate));
