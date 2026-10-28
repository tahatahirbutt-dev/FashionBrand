# Project rules
- Next.js App Router, TypeScript, Tailwind v4. Server components by default; add "use client" only when needed.
- NEVER use hex colours or hardcoded fonts. Use theme tokens only: bg-background, text-foreground, bg-brand, text-accent, bg-surface, font-heading.
- Nav and categories come from src/config/brand.ts.
- Product images use a 4:5 aspect ratio (aspect-[4/5]).
- Small, single-purpose components in src/components.
- Mobile-first styling.
- Full project context is in docs/PROJECT.md, docs/STRUCTURE.md and docs/DESIGN.md.
