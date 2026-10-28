# DESIGN.md: Design System ("quiet luxury, modern and accessible")

## 1. Direction
- **Style:** editorial minimalism: generous white space, large photography, restrained UI.
- **Tone:** premium but approachable.
- **Cohesion rule:** a strong neutral system; the products supply the colour and personality.

## 2. Palette (starting point, swappable)
| Role | Token | Hex |
|---|---|---|
| Background (warm ivory) | `background` | `#F7F4EE` |
| Text (soft charcoal) | `foreground` | `#1C1B1A` |
| Brand (deep forest) | `brand` | `#2F3A32` |
| Accent (muted brass), use sparingly | `accent` | `#B08D57` |
| Surface (stone) | `surface` | `#D9D3C7` |

**Alternative theme "midnight":** navy `#14213D`, cream `#F5F1E8`, silver `#A8A9AD`.
**Optional category tints** (subtle section backgrounds): amber = fragrance, sand = apparel, graphite = jewellery.

## 3. Typography
- **Headings:** Cormorant Garamond (alternatives: Playfair Display, Fraunces)
- **Body/UI:** Inter (alternatives: DM Sans, Manrope)
- Uppercase, letter-spaced small text for nav and category labels.
- Max two font families.

## 4. Theme file (`src/app/globals.css`, Tailwind v4)
```css
@import "tailwindcss";

:root {
  --background: #F7F4EE;
  --foreground: #1C1B1A;
  --brand: #2F3A32;
  --accent: #B08D57;
  --surface: #D9D3C7;
  --radius: 2px;
}

[data-theme="midnight"] {
  --background: #F5F1E8;
  --foreground: #14213D;
  --brand: #14213D;
  --accent: #A8A9AD;
  --surface: #E2DDD0;
}

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-brand: var(--brand);
  --color-accent: var(--accent);
  --color-surface: var(--surface);
  --radius-base: var(--radius);
  --font-heading: var(--font-cormorant);
  --font-sans: var(--font-inter);
}

body {
  background: var(--background);
  color: var(--foreground);
}
```

## 5. Fonts (`src/app/layout.tsx`)
```tsx
import { Cormorant_Garamond, Inter } from "next/font/google";

const cormorant = Cormorant_Garamond({ subsets: ["latin"], variable: "--font-cormorant" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

// <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
```

## 6. Visual rules
- Monogram-capable logo (works as favicon, packaging, engraving).
- 1px lines and dividers instead of heavy boxes.
- Same lighting, background tone and crop across all product photos.
- Subtle motion only: fade-ins, hover image swap, smooth cart drawer.
- Corners square or 2 to 4px. No bubbly UI.
- Use only token classes: `bg-background`, `text-foreground`, `bg-brand`, `text-accent`, `bg-surface`, `font-heading`.
