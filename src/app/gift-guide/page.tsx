import Link from "next/link";
import { collections } from "@/config/collections";
import Container from "@/components/ui/Container";
import { ProductGrid } from "@/components/product/ProductGrid";
import { getAllProducts } from "@/lib/products";
import { applyShopQuery, PRICE_BUCKETS } from "@/lib/shop-query";

export default async function GiftGuidePage() {
  const products = await getAllProducts();
  const giftSets = collections.find((collection) => collection.slug === "gift-sets");

  return (
    <main className="bg-background py-16 text-foreground md:py-24">
      <Container>
        <p className="text-sm uppercase tracking-[0.3em] text-accent">Gifting</p>
        <h1 className="mt-4 font-heading text-5xl md:text-6xl">Gift guide</h1>
        <p className="mt-4 max-w-xl leading-relaxed">
          Thoughtful pieces, grouped by price to make gifting easy.
        </p>
        {giftSets && (
          <Link
            href="/collections/gift-sets"
            className="mt-6 inline-block text-xs uppercase tracking-widest underline underline-offset-4 hover:text-accent"
          >
            Shop gift sets
          </Link>
        )}
        <div className="mt-16 space-y-16">
          {PRICE_BUCKETS.map((bucket) => {
            const bucketProducts = applyShopQuery(products, { price: bucket.key });
            if (bucketProducts.length === 0) return null;

            return (
              <section key={bucket.key}>
                <h2 className="font-heading text-3xl">{bucket.label}</h2>
                <div className="mt-8">
                  <ProductGrid products={bucketProducts} />
                </div>
              </section>
            );
          })}
        </div>
      </Container>
    </main>
  );
}
