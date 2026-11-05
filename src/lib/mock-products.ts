import type { Product } from "./types";

const image = (src: string, alt: string) => ({ src, alt });

export const mockProducts: Product[] = [
  {
    id: "f-001",
    slug: "oud-noir-50ml",
    name: "Oud Noir 50ml",
    category: "fragrances",
    price: 8500,
    description: "A smoky, resinous signature scent with a warm finish.",
    badge: "Bestseller",
    images: [
      image(
        "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=1200&q=85",
        "Oud Noir fragrance bottle",
      ),
      image(
        "https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=1200&q=85",
        "Oud Noir fragrance styled with botanicals",
      ),
    ],
    notes: {
      top: ["Saffron", "Bergamot"],
      heart: ["Rose", "Oud"],
      base: ["Amber", "Musk"],
    },
    sizesMl: [30, 50, 100],
    longevity: 4,
  },
  {
    id: "f-002",
    slug: "amber-veil-100ml",
    name: "Amber Veil 100ml",
    category: "fragrances",
    price: 12000,
    description: "Soft amber and vanilla wrapped in a veil of quiet spice.",
    badge: "New",
    images: [
      image(
        "https://images.unsplash.com/photo-1541643600914-78b084683601?w=1200&q=85",
        "Amber Veil fragrance bottle",
      ),
      image(
        "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=1200&q=85",
        "Amber Veil fragrance on a stone surface",
      ),
    ],
    notes: {
      top: ["Mandarin", "Pink Pepper"],
      heart: ["Iris", "Jasmine"],
      base: ["Amber", "Vanilla", "Sandalwood"],
    },
    sizesMl: [50, 100],
    longevity: 5,
  },
  {
    id: "a-001",
    slug: "linen-overshirt",
    name: "Linen Overshirt",
    category: "apparel",
    price: 6500,
    description: "A relaxed linen layer designed for warm, easy days.",
    images: [
      image(
        "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=1200&q=85",
        "Natural linen overshirt",
      ),
      image(
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1200&q=85",
        "Linen overshirt styled for everyday wear",
      ),
    ],
    sizes: ["S", "M", "L", "XL"],
    fit: "Relaxed fit with a straight hem.",
    fabric: "100% European linen.",
    care: ["Machine wash cold", "Line dry", "Warm iron if needed"],
    modelHeight: "185 cm",
    sizeGuide: [
      { size: "S", chest: 104, length: 72 },
      { size: "M", chest: 110, length: 74 },
      { size: "L", chest: 116, length: 76 },
      { size: "XL", chest: 122, length: 78 },
    ],
  },
  {
    id: "a-002",
    slug: "heavy-cotton-tee",
    name: "Heavy Cotton Tee",
    category: "apparel",
    price: 3200,
    description: "A substantial everyday tee with a clean, considered shape.",
    badge: "New",
    images: [
      image(
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=1200&q=85",
        "Heavy cotton tee",
      ),
      image(
        "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=1200&q=85",
        "Heavy cotton tee styled on a model",
      ),
    ],
    sizes: ["S", "M", "L", "XL"],
    fit: "Regular fit with a slightly dropped shoulder.",
    fabric: "260 gsm organic cotton jersey.",
    care: ["Machine wash cold", "Wash inside out", "Do not tumble dry"],
    modelHeight: "183 cm",
    sizeGuide: [
      { size: "S", chest: 100, length: 68 },
      { size: "M", chest: 106, length: 70 },
      { size: "L", chest: 112, length: 72 },
      { size: "XL", chest: 118, length: 74 },
    ],
  },
  {
    id: "j-001",
    slug: "steel-chain-bracelet",
    name: "Steel Chain Bracelet",
    category: "jewellery",
    price: 4800,
    description: "A weighty stainless-steel chain with a polished finish.",
    images: [
      image(
        "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=1200&q=85",
        "Stainless steel chain bracelet",
      ),
      image(
        "https://images.unsplash.com/photo-1573408301185-9146fe634dcb?w=1200&q=85",
        "Steel chain bracelet detail",
      ),
    ],
    material: "316L stainless steel.",
    dimensions: "20 cm length, 8 mm width.",
    sizes: ["18 cm", "20 cm", "22 cm"],
    giftPackaging: true,
  },
  {
    id: "j-002",
    slug: "signet-ring",
    name: "Signet Ring",
    category: "jewellery",
    price: 7200,
    description: "A solid signet silhouette softened by a satin brushed face.",
    badge: "Bestseller",
    images: [
      image(
        "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=1200&q=85",
        "Brushed metal signet ring",
      ),
      image(
        "https://images.unsplash.com/photo-1598560917807-1bae44bd2be8?w=1200&q=85",
        "Signet ring worn on a hand",
      ),
    ],
    material: "925 sterling silver.",
    dimensions: "12 mm face, 3 mm band.",
    sizes: ["S", "M", "L", "XL"],
    giftPackaging: true,
  },
  {
    id: "ac-001",
    slug: "leather-cardholder",
    name: "Leather Cardholder",
    category: "accessories",
    price: 3900,
    description: "A slim leather cardholder made for the essentials.",
    images: [
      image(
        "https://images.unsplash.com/photo-1627123424574-724758594e93?w=1200&q=85",
        "Leather cardholder",
      ),
      image(
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=1200&q=85",
        "Leather cardholder with everyday accessories",
      ),
    ],
    details: ["Vegetable-tanned leather", "Four card slots", "Central cash slot"],
  },
  {
    id: "ac-002",
    slug: "canvas-tote",
    name: "Canvas Tote",
    category: "accessories",
    price: 2800,
    description: "A durable everyday tote with room for the things you carry.",
    images: [
      image(
        "https://images.unsplash.com/photo-1544816155-12df9643f363?w=1200&q=85",
        "Natural canvas tote bag",
      ),
      image(
        "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=1200&q=85",
        "Canvas tote carried outdoors",
      ),
    ],
    details: ["Heavyweight cotton canvas", "Internal pocket", "Reinforced handles"],
  },
];
