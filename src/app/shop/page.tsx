import Link from "next/link";
import { brand } from "@/config/brand";

export default function ShopPage() {
  return (
    <div className="bg-background px-6 py-16 text-foreground">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm uppercase tracking-[0.3em] text-accent">
          Collection
        </p>
        <h1 className="mt-4 font-heading text-6xl">{brand.name} Shop</h1>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {brand.categories.map((category) => (
            <Link
              key={category.slug}
              href={`/shop/${category.slug}`}
              className="border border-surface p-6 transition-colors hover:bg-surface"
            >
              <h2 className="font-heading text-3xl">{category.label}</h2>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
