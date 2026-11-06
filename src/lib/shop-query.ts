import type { Product } from "./types";

export type ShopParams = {
  sort?: string;
  price?: string;
  facet?: string;
  q?: string;
};

export const SORTS = [
  { key: "featured", label: "Featured" },
  { key: "price-asc", label: "Price: low to high" },
  { key: "price-desc", label: "Price: high to low" },
  { key: "name", label: "Name A–Z" },
] as const;

export const PRICE_BUCKETS = [
  { key: "under-5000", label: "Under Rs 5,000", test: (p: number) => p < 5000 },
  {
    key: "5000-10000",
    label: "Rs 5,000 – 10,000",
    test: (p: number) => p >= 5000 && p <= 10000,
  },
  { key: "over-10000", label: "Over Rs 10,000", test: (p: number) => p > 10000 },
] as const;

const first = (value: string | string[] | undefined) =>
  Array.isArray(value) ? value[0] : value;

export function parseShopParams(
  raw: Record<string, string | string[] | undefined>,
): ShopParams {
  return {
    sort: first(raw.sort),
    price: first(raw.price),
    facet: first(raw.facet),
    q: first(raw.q)?.trim() || undefined,
  };
}

export function getFacetLabel(category: string): string | null {
  switch (category) {
    case "fragrances":
      return "Scent family";
    case "apparel":
      return "Size";
    case "jewellery":
      return "Material";
    default:
      return null;
  }
}

export function getFacetValues(product: Product): string[] {
  switch (product.category) {
    case "fragrances":
      return [product.scentFamily];
    case "apparel":
      return product.sizes;
    case "jewellery":
      return [product.material];
    case "accessories":
      return [];
  }
}

export function getFacetOptions(products: Product[]): string[] {
  return [...new Set(products.flatMap(getFacetValues))].sort();
}

export function applyShopQuery(
  products: Product[],
  params: ShopParams,
): Product[] {
  let result = products;

  if (params.q) {
    const query = params.q.toLowerCase();
    result = result.filter((product) =>
      `${product.name} ${product.description}`.toLowerCase().includes(query),
    );
  }

  const bucket = PRICE_BUCKETS.find((item) => item.key === params.price);
  if (bucket) result = result.filter((product) => bucket.test(product.price));
  if (params.facet) {
    result = result.filter((product) => getFacetValues(product).includes(params.facet!));
  }

  switch (params.sort) {
    case "price-asc":
      return [...result].sort((a, b) => a.price - b.price);
    case "price-desc":
      return [...result].sort((a, b) => b.price - a.price);
    case "name":
      return [...result].sort((a, b) => a.name.localeCompare(b.name));
    default:
      return result;
  }
}

export function buildHref(
  base: string,
  current: ShopParams,
  change: Partial<ShopParams>,
) {
  const query = new URLSearchParams();
  for (const [key, value] of Object.entries({ ...current, ...change })) {
    if (value) query.set(key, value);
  }
  const search = query.toString();
  return search ? `${base}?${search}` : base;
}
