import qualityReport from '../../reports/ignitionsim-worldclass-quality.json';

export type EditorialQuality = {
  id: string;
  score: number;
  grade: string;
  sourceUrls: number;
  productImages: number;
  humanUseImages: number;
  curatorScenes: number;
  diagrams: number;
  directAmazonLinks: number;
  status: string;
};

const qualityRows = qualityReport.articles as EditorialQuality[];
const qualityById = new Map(qualityRows.map((row) => [row.id, row]));

export const qualityFor = (id: string) => qualityById.get(id);

export const clearsHomepageGate = (id: string) => (qualityFor(id)?.score || 0) >= 85;
export const clearsDiscoveryGate = (id: string) => (qualityFor(id)?.score || 0) >= 70;

export const evidenceLabels = (id: string) => {
  const row = qualityFor(id);
  if (!row) return [];
  const labels: string[] = [];
  if (row.productImages >= 3) labels.push('Real product proof');
  if (row.humanUseImages >= 1) labels.push('Use / install proof');
  if (row.diagrams >= 1) labels.push('Practical diagram');
  if (row.sourceUrls >= 5) labels.push('Current source stack');
  if (row.directAmazonLinks >= 1) labels.push('Direct buy paths');
  return labels.slice(0, 3);
};

export const sortByEditorialStrength = <T extends { id: string; data: { publishDate: Date | string } }>(items: T[]) =>
  [...items].sort((a, b) => {
    const scoreDelta = (qualityFor(b.id)?.score || 0) - (qualityFor(a.id)?.score || 0);
    return scoreDelta || (+new Date(b.data.publishDate) - +new Date(a.data.publishDate));
  });
