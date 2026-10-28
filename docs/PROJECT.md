# PROJECT.md: Project Memory (read this first)

> Paste this file (plus STRUCTURE.md and DESIGN.md) at the start of a new Claude chat to restore context.
> Update the "Status" and "Decisions log" sections whenever something changes.

## 1. Overview
- **Developer:** Taha (BSIT). Experience: Flutter, Blazor, n8n automation, VS Code + Git + Copilot. New to React; learns by building.
- **Client:** a friend launching a multi-category fashion & lifestyle brand.
- **Categories at launch:** Fragrances, Apparel, Men's Jewellery, Accessories. More lines expected later.
- **Goal:** professional, modern, premium-yet-accessible e-commerce site with one cohesive identity that scales as products and collections are added.
- **Constraint:** Taha has limited time, so the workflow is "vibe coding with intellect": small tasks, Copilot generates, Claude reviews and explains.

## 2. Stack
| Layer | Choice | Status |
|---|---|---|
| Framework | Next.js (App Router) | Decided |
| Language | TypeScript | Decided |
| Styling | Tailwind CSS v4 + shadcn/ui | Decided |
| Commerce backend | Medusa.js (Node/TS, open source) | Proposed, pending payment/shipping answers |
| Database | PostgreSQL | Follows backend choice |
| Images | Cloudinary | Proposed |
| Automation | n8n (order alerts, WhatsApp/email, inventory alerts, Sheets sync) | Proposed |
| Hosting | Vercel (storefront) + Railway/VPS (Medusa + Postgres) | Proposed |

**Safety net:** the storefront is headless, so the backend can be swapped (e.g. to Shopify) without redoing the front end.
**Why Medusa over Shopify:** full control over payment gateways, cash on delivery and local couriers (Shopify payment options are limited in some markets, Pakistan included). Confirm with the client before committing.

## 3. Core principles
1. **Replaceable design:** components use semantic tokens only (no hex codes, no hardcoded fonts). Theme lives in `src/app/globals.css`. See DESIGN.md.
2. **Config-driven structure:** brand name, categories and nav come from `src/config/brand.ts`. A new category = one new entry. See STRUCTURE.md.
3. **Server components by default**; `"use client"` only when needed (state, effects, browser APIs).
4. **Mobile-first.**
5. **Small single-purpose components**, one task per Copilot prompt.

## 4. Working agreements (Claude + Taha)
- Taha wants answers and the full picture, not long tutorials. Explain concepts when they come up, concisely.
- Map React concepts to Blazor/Flutter equivalents where helpful.
- Claude reviews pasted code and makes architecture decisions; Copilot does bulk generation.
- Don't accept generated code blindly; Taha maintains it.

## 5. Open questions (ask the client)
- [ ] Brand name, tagline, target age range
- [ ] Selling market(s), payment methods (COD, cards, local wallets), shipping/couriers
- [ ] Budget and launch deadline
- [ ] Number of products at launch
- [ ] Product photography: exists or still to be shot?
- [ ] Three websites he likes and three he dislikes
- [ ] Final palette (default below is a starting point)

## 6. Status / roadmap
- [x] Requirements gathered, design direction proposed
- [x] Stack discussed, React/Next.js chosen
- [x] Documentation (these files) created
- [x] Dev environment set up (Node LTS, VS Code extensions)
- [x] Next.js project created and running
- [x] Theme tokens + fonts in place
- [x] Layout shell: Header (nav from config), Footer, placeholder Home
- [ ] ProductCard + ProductGrid with mock data
- [ ] Category and product pages
- [ ] Medusa running locally, real data
- [ ] Cart, checkout, payments
- [ ] n8n automations
- [ ] SEO, performance, mobile polish, launch

## 7. Decisions log
| Date | Decision | Reason |
|---|---|---|
| 2026-10-28 | Next.js + TypeScript + Tailwind | SEO, typed code works well with Copilot, fast styling |
| 2026-10-28 | Theme via CSS variable tokens | Design must be replaceable without touching components |
| 2026-10-28 | Navigation/categories from config file | New product lines without redesign |
| 2026-10-28 | Backend (Medusa vs Shopify) deferred until payment/market answers | Avoid lock-in to wrong gateway |
