export type Collection = {
  slug: string;
  title: string;
  description: string;
  image?: string;
};

export const collections: Collection[] = [
  {
    slug: "new-arrivals",
    title: "New arrivals",
    description: "The latest pieces to join the collection.",
    image: "/home/category-apparel.jpg",
  },
  {
    slug: "bestsellers",
    title: "Bestsellers",
    description: "Considered pieces our customers return to.",
    image: "/home/category-fragrances.jpg",
  },
  {
    slug: "gift-sets",
    title: "Gift sets",
    description: "Thoughtful gifts for every occasion.",
    image: "/home/category-jewellery.jpg",
  },
  {
    slug: "seasonal",
    title: "Seasonal",
    description: "A seasonal edit for the way you live now.",
    image: "/home/category-accessories.jpg",
  },
];
