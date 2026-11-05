export type Category =
  | "fragrances"
  | "apparel"
  | "jewellery"
  | "accessories";

export type ProductImage = {
  src: string;
  alt: string;
};

type ProductBase = {
  id: string;
  slug: string;
  name: string;
  description: string;
  category: Category;
  price: number;
  images: ProductImage[];
  badge?: "New" | "Bestseller";
};

export type FragranceProduct = ProductBase & {
  category: "fragrances";
  notes: {
    top: string[];
    heart: string[];
    base: string[];
  };
  sizesMl: number[];
  longevity: 1 | 2 | 3 | 4 | 5;
};

export type ApparelProduct = ProductBase & {
  category: "apparel";
  sizes: string[];
  fit: string;
  fabric: string;
  care: string[];
  modelHeight: string;
  sizeGuide: {
    size: string;
    chest: number;
    length: number;
  }[];
};

export type JewelleryProduct = ProductBase & {
  category: "jewellery";
  material: string;
  dimensions: string;
  sizes?: string[];
  giftPackaging: boolean;
};

export type AccessoryProduct = ProductBase & {
  category: "accessories";
  details?: string[];
};

export type Product =
  | FragranceProduct
  | ApparelProduct
  | JewelleryProduct
  | AccessoryProduct;
