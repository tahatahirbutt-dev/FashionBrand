import { mockProducts } from "./mock-products";
import type { Category, Product } from "./types";

export async function getProducts(category?: Category): Promise<Product[]> {
  return category
    ? mockProducts.filter((product) => product.category === category)
    : mockProducts;
}

export async function getProductsByCategory(category: Category): Promise<Product[]> {
  return getProducts(category);
}

export async function getAllProducts(): Promise<Product[]> {
  return mockProducts;
}

export async function getFeaturedProducts(limit = 4): Promise<Product[]> {
  const all = await getAllProducts();
  return all.filter((product) => product.featured).slice(0, limit);
}

export async function getCollectionProducts(slug: string): Promise<Product[]> {
  const all = await getAllProducts();

  if (slug === "new-arrivals") {
    return all.filter((product) => product.badge === "New");
  }
  if (slug === "bestsellers") {
    return all.filter((product) => product.badge === "Bestseller");
  }

  return all.filter((product) => product.collections?.includes(slug));
}

export async function getProductBySlug(
  slug: string,
): Promise<Product | undefined> {
  return mockProducts.find((product) => product.slug === slug);
}

export const getProduct = getProductBySlug;
