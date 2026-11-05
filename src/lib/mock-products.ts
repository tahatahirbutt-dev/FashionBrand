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
    featured: true,
    images: [
      image(
        "/products/oud-noir-1.jpg",
        "Oud Noir fragrance bottle",
      ),
      image(
        "/products/oud-noir-2.jpg",
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
        "/products/amber-veil-1.jpg",
        "Amber Veil fragrance bottle",
      ),
      image(
        "/products/amber-veil-2.jpg",
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
    featured: true,
    images: [
      image(
        "/products/linen-overshirt-1.jpg",
        "Natural linen overshirt",
      ),
      image(
        "/products/linen-overshirt-2.jpg",
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
        "/products/heavy-cotton-tee-1.jpg",
        "Heavy cotton tee",
      ),
      image(
        "/products/heavy-cotton-tee-2.jpg",
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
    featured: true,
    images: [
      image(
        "/products/steel-chain-bracelet-1.jpg",
        "Stainless steel chain bracelet",
      ),
      image(
        "/products/steel-chain-bracelet-2.jpg",
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
        "/products/signet-ring-1.jpg",
        "Brushed metal signet ring",
      ),
      image(
        "/products/signet-ring-2.jpg",
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
    featured: true,
    images: [
      image(
        "/products/leather-cardholder-1.jpg",
        "Leather cardholder",
      ),
      image(
        "/products/leather-cardholder-2.jpg",
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
        "/products/canvas-tote-1.jpg",
        "Natural canvas tote bag",
      ),
      image(
        "/products/canvas-tote-2.jpg",
        "Canvas tote carried outdoors",
      ),
    ],
    details: ["Heavyweight cotton canvas", "Internal pocket", "Reinforced handles"],
  },
];
