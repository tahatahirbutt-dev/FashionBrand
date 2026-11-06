import { Suspense } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { brand } from "@/config/brand";
import ShopControls from "@/components/shop/ShopControls";
import { ProductGrid } from "@/components/product/ProductGrid";
import Container from "@/components/ui/Container";
import {
  applyShopQuery,
  getFacetLabel,
  getFacetOptions,
  parseShopParams,
} from "@/lib/shop-query";
import { getProductsByCategory } from "@/lib/products";
import type { Category } from "@/lib/types";

type Props = {
  params: Promise<{ category: string }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export function generateStaticParams() {
  return brand.categories.map((category) => ({ category: category.slug }));
}

export default function CategoryPage({ params, searchParams }: Props) {
  return (
    <main className="bg-background py-12 text-foreground md:py-16">
      <Container>
        <Suspense fallback={<p className="text-sm">Loading...</p>}>
          <CategoryResults params={params} searchParams={searchParams} />
        </Suspense>
      </Container>
    </main>
  );
}

async function CategoryResults({ params, searchParams }: Props) {
  const { category } = await params;
  const query = parseShopParams(await searchParams);
  const categoryConfig = brand.categories.find((item) => item.slug === category);

  if (!categoryConfig) notFound();

  const all = await getProductsByCategory(category as Category);
  const products = applyShopQuery(all, query);

  return (
    <>
      <p className="text-sm uppercase tracking-[0.3em] text-accent">Shop</p>
      <h1 className="mt-4 font-heading text-5xl md:text-6xl">
        {categoryConfig.label}
      </h1>
      <ShopControls
        basePath={`/shop/${category}`}
        params={query}
        facetLabel={getFacetLabel(category) ?? undefined}
        facetValues={getFacetOptions(all)}
      />
      <p className="mt-6 text-xs uppercase tracking-widest">
        {products.length} pieces
      </p>
      {products.length === 0 ? (
        <p className="mt-6">
          No products match.{" "}
          <Link href={`/shop/${category}`} className="underline">
            Clear filters
          </Link>
        </p>
      ) : (
        <div className="mt-6">
          <ProductGrid products={products} />
        </div>
      )}
    </>
  );
}
