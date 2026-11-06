"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { brand } from "@/config/brand";

export default function MobileNav() {
  const pathname = usePathname();

  return (
    <nav className="border-t border-surface md:hidden" aria-label="Mobile">
      <details key={pathname}>
        <summary className="group flex cursor-pointer list-none items-center justify-between px-6 py-3 text-xs uppercase tracking-[0.2em] [&::-webkit-details-marker]:hidden">
          Menu
          <span
            aria-hidden
            className="text-lg transition-transform group-open:rotate-45"
          >
            +
          </span>
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
          {brand.utilityLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="block px-6 py-3 text-xs uppercase tracking-[0.2em] hover:bg-surface"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </details>
    </nav>
  );
}
