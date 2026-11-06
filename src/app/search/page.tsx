import { Suspense } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ProductGrid } from "@/components/product/ProductGrid";
import Container from "@/components/ui/Container";
import { applyShopQuery, parseShopParams } from "@/lib/shop-query";
import { getAllProducts } from "@/lib/products";

export const metadata: Metadata = {
  title: "Search",
  robots: { index: false },
};

type SearchPageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export default function SearchPage({ searchParams }: SearchPageProps) {
  return (
    <main className="bg-background py-12 text-foreground md:py-16">
      <Container>
        <Suspense fallback={<p className="text-sm">Loading...</p>}>
          <SearchResults searchParams={searchParams} />
        </Suspense>
      </Container>
    </main>
  );
}

async function SearchResults({ searchParams }: SearchPageProps) {
  const query = parseShopParams(await searchParams);
  const all = await getAllProducts();
  const products = query.q ? applyShopQuery(all, { q: query.q }) : [];

  return (
    <>
      <p className="text-sm uppercase tracking-[0.3em] text-accent">Search</p>
      <h1 className="mt-4 font-heading text-5xl md:text-6xl">Find a piece</h1>
      <form action="/search" role="search" className="mt-8 flex max-w-xl gap-3">
        <input
          type="search"
          name="q"
          defaultValue={query.q}
          placeholder="Search products"
          className="min-w-0 flex-1 border border-surface bg-background px-4 py-3 text-sm outline-none focus:border-brand"
        />
        <button
          type="submit"
          className="bg-brand px-5 py-3 text-xs uppercase tracking-widest text-background hover:opacity-90"
        >
          Search
        </button>
      </form>
      {!query.q ? (
        <p className="mt-10 text-sm">Search by product name or description.</p>
      ) : products.length === 0 ? (
        <p className="mt-10">
          No results for &ldquo;{query.q}&rdquo;.{" "}
          <Link href="/search" className="underline">
            Clear search
          </Link>
        </p>
      ) : (
        <div className="mt-10">
          <ProductGrid products={products} />
        </div>
      )}
    </>
  );
}
