import { mockProducts } from "./mock-products";
import type { Product } from "./types";

export async function getProducts(category?: string): Promise<Product[]> {
  return category
    ? mockProducts.filter((product) => product.category === category)
    : mockProducts;
}

export async function getProduct(slug: string): Promise<Product | undefined> {
  return mockProducts.find((product) => product.slug === slug);
}
