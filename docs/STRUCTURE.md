# STRUCTURE.md: Website Structure and Code Layout

## 1. Sitemap
```
Home
Shop
 ├─ Fragrances
 ├─ Apparel
 ├─ Men's Jewellery
 ├─ Accessories
 └─ (future categories slot in here)
Collections (Seasonal / Gift Sets / New Arrivals / Bestsellers)
Gift Guide
Our Story
Journal (optional, SEO)
Contact / FAQ / Shipping & Returns
Cart · Checkout · Account · Wishlist
```
- Shop uses a **mega-menu** so new categories drop in without redesigning navigation.
- Filters: price, size, material, scent family. Search bar with suggestions.

## 2. Home page sections (top to bottom)
1. Full-bleed hero
2. Category grid
3. "Shop by collection" strip
4. Featured products
5. Brand story block
6. Instagram/UGC row

## 3. Product presentation
- **One image ratio everywhere:** 4:5 (`aspect-[4/5]`), second image on hover (lifestyle/detail).
- **Product card:** image, name, price, badge (New/Bestseller), quick-add.
- **Product page layout is constant; modules vary by category:**
  - **Fragrance:** notes pyramid (top/heart/base), size (30/50/100ml), longevity indicator
  - **Apparel:** size guide, fit notes, fabric and care, model height
  - **Jewellery:** material, dimensions, size selector, gift packaging option
- Always show "You may also like" and "Complete the look" (cross-category) for upsell.

## 4. Folder structure
```
src/
 ├─ app/                      # routing = folders
 │   ├─ layout.tsx            # fonts, <html>, shell
 │   ├─ page.tsx              # Home
 │   ├─ globals.css           # THE THEME FILE
 │   ├─ shop/[category]/page.tsx
 │   └─ product/[slug]/page.tsx
 ├─ components/
 │   ├─ ui/                   # Button, Badge, Input
 │   ├─ layout/               # Header, Footer, MegaMenu
 │   └─ product/              # ProductCard, ProductGrid
 ├─ config/
 │   └─ brand.ts              # name, tagline, nav, categories
 └─ lib/                      # helpers, API calls (Medusa later)
```

## 5. Brand config (`src/config/brand.ts`)
```ts
export const brand = {
  name: "Your Brand",
  tagline: "Tagline here",
  categories: [
    { slug: "fragrances", label: "Fragrances" },
    { slug: "apparel", label: "Apparel" },
    { slug: "jewellery", label: "Men's Jewellery" },
    { slug: "accessories", label: "Accessories" },
  ],
};
```
Header, footer, mega-menu and category pages all read from this file.

## 6. React to Blazor/Flutter cheat sheet
| You know | React/Next.js |
|---|---|
| Blazor `.razor` component | Function returning JSX in `.tsx` |
| `[Parameter]` | Props: `function Card({ title }: { title: string })` |
| `@code` state / Flutter `setState` | `const [x, setX] = useState(0)` |
| Flutter widget tree | JSX tree |
| Flutter `Navigator` | Folder-based routing in `app/` |
