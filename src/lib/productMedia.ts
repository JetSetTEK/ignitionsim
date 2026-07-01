import verifiedImages from '../data/verified-product-images.json';

const verified = new Set<string>(verifiedImages as string[]);

export const displayProductImage = (product: { image?: string; images?: string[] }) =>
  Array.isArray(product.images) && product.images.length ? product.images[0] : product.image;

export const hasVerifiedProductImage = (product: { image?: string; images?: string[] }) => {
  const image = displayProductImage(product);
  return Boolean(image && verified.has(image));
};

export const verifiedProductImageCount = () => verified.size;
