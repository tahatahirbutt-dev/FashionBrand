import Link from "next/link";
import { cacheLife } from "next/cache";
import { brand } from "@/config/brand";

async function getCopyrightYear() {
  "use cache";

  cacheLife("days");
  return new Date().getFullYear();
}

export async function Footer() {
  const copyrightYear = await getCopyrightYear();

  return (
    <footer className="mt-24 bg-brand text-background">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 sm:grid-cols-3">
        <div>
          <p className="font-heading text-3xl">{brand.name}</p>
          <p className="mt-3 text-sm text-background/70">{brand.tagline}</p>
        </div>

        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.2em] text-accent">
            Shop
          </p>
          <ul className="space-y-2 text-sm">
            {brand.categories.map((category) => (
              <li key={category.slug}>
                <Link
                  href={`/shop/${category.slug}`}
                  className="hover:text-accent"
                >
                  {category.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.2em] text-accent">
            Help
          </p>
          <ul className="space-y-2 text-sm text-background/80">
            <li>Shipping &amp; Returns</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-background/20 py-6 text-center text-xs text-background/60">
        © {copyrightYear} {brand.name}
      </div>
    </footer>
  );
}
