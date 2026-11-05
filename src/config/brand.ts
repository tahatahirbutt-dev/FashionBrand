export type BrandCategory = {
  slug: string;
  label: string;
  image?: string;
};

export const brand = {
  name: "Your Brand",
  tagline: "Thoughtfully made essentials",
  currency: "PKR",
  locale: "en-PK",
  hero: {
    heading: "Thoughtfully made essentials",
    subheading:
      "Discover a considered collection of products designed for everyday living.",
    image: "/home/hero.jpg",
    cta: { label: "Shop collection", href: "/shop/fragrances" },
  },
  story: {
    eyebrow: "Our story",
    heading: "Made slowly, worn for years",
    body: [
      "Placeholder paragraph about where the brand started and what it stands for.",
      "A second short paragraph about materials, craft and care.",
    ],
    image: "/home/story.jpg",
    cta: { label: "Read our story", href: "/shop" },
  },
  categories: [
    {
      slug: "fragrances",
      label: "Fragrances",
      image: "/home/category-fragrances.jpg",
    },
    {
      slug: "apparel",
      label: "Apparel",
      image: "/home/category-apparel.jpg",
    },
    {
      slug: "jewellery",
      label: "Men's Jewellery",
      image: "/home/category-jewellery.jpg",
    },
    {
      slug: "accessories",
      label: "Accessories",
      image: "/home/category-accessories.jpg",
    },
  ] as const satisfies readonly BrandCategory[],
} as const;
