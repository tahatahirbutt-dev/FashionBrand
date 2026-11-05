import { mockProducts } from "./mock-products";
import type { Category, Product } from "./types";

export async function getProducts(category?: Category): Promise<Product[]> {
  return category
    ? mockProducts.filter((product) => product.category === category)
    : mockProducts;
}

export async function getAllProducts(): Promise<Product[]> {
  return mockProducts;
}

export async function getProductBySlug(
  slug: string,
): Promise<Product | undefined> {
  return mockProducts.find((product) => product.slug === slug);
}

export const getProduct = getProductBySlug;
