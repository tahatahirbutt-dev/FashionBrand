import Link from "next/link";
import { brand } from "@/config/brand";
import CartButton from "@/components/cart/CartButton";
import MobileNav from "@/components/layout/MobileNav";
import Container from "@/components/ui/Container";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-surface bg-background">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="font-heading text-2xl tracking-wide">
          {brand.name}
        </Link>

        <nav className="hidden gap-8 md:flex" aria-label="Main">
          {brand.categories.map((category) => (
            <Link
              key={category.slug}
              href={`/shop/${category.slug}`}
              className="text-xs uppercase tracking-[0.2em] transition-colors hover:text-accent"
            >
              {category.label}
            </Link>
          ))}
          {brand.utilityLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs uppercase tracking-[0.2em] transition-colors hover:text-accent"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <CartButton />
      </Container>

      <MobileNav />
    </header>
  );
}
