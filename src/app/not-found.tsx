import Link from "next/link";
import { brand } from "@/config/brand";
import Container from "@/components/ui/Container";

export default function NotFound() {
  return (
    <main className="bg-background py-24 text-foreground">
      <Container>
        <p className="text-sm uppercase tracking-[0.3em] text-accent">404</p>
        <h1 className="mt-4 font-heading text-5xl">Page not found</h1>
        <p className="mt-4 max-w-md text-sm leading-relaxed">
          The page you are looking for does not exist or may have moved.
        </p>
        <div className="mt-8 flex flex-wrap gap-6 text-xs uppercase tracking-widest">
          <Link href="/" className="underline underline-offset-4 hover:text-accent">
            Back home
          </Link>
          {brand.categories.map((category) => (
            <Link
              key={category.slug}
              href={`/shop/${category.slug}`}
              className="underline underline-offset-4 hover:text-accent"
            >
              {category.label}
            </Link>
          ))}
        </div>
      </Container>
    </main>
  );
}
