import type { Product } from "./types";

export type ProductOptions = {
  label: string;
  values: string[];
};

export function getProductOptions(product: Product): ProductOptions | null {
  switch (product.category) {
    case "fragrances":
      return {
        label: "Size",
        values: product.sizesMl.map((size) => `${size} ml`),
      };
    case "apparel":
      return { label: "Size", values: product.sizes };
    case "jewellery":
      return product.sizes?.length
        ? { label: "Size", values: product.sizes }
        : null;
    case "accessories":
      return null;
  }
}
