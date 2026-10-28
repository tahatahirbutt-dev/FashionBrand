import Link from "next/link";
import { brand } from "@/config/brand";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-surface bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
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
        </nav>

        <span className="text-xs uppercase tracking-[0.2em]">Cart (0)</span>
      </div>

      <nav className="border-t border-surface md:hidden" aria-label="Mobile">
        <details>
          <summary className="cursor-pointer px-6 py-3 text-xs uppercase tracking-[0.2em]">
            Menu
          </summary>
          <ul className="border-t border-surface">
            {brand.categories.map((category) => (
              <li key={category.slug}>
                <Link
                  href={`/shop/${category.slug}`}
                  className="block px-6 py-3 text-xs uppercase tracking-[0.2em] hover:bg-surface"
                >
                  {category.label}
                </Link>
              </li>
            ))}
          </ul>
        </details>
      </nav>
    </header>
  );
}
