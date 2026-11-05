import { getFeaturedProducts } from "@/lib/products";
import { ProductGrid } from "@/components/product/ProductGrid";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export default async function FeaturedProducts() {
  const products = await getFeaturedProducts(4);
  if (products.length === 0) return null;

  return (
    <section className="pb-16 md:pb-24">
      <Container>
        <SectionHeading eyebrow="Selected" title="Featured pieces" />
        <div className="mt-10">
          <ProductGrid products={products} />
        </div>
      </Container>
    </section>
  );
}
