export type Product = {
  slug: string;
  name: string;
  category: string;
  price: number;
  badge?: "New" | "Bestseller";
  images: string[];
};
