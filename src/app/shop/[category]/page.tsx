import { notFound } from "next/navigation";
import { brand } from "@/config/brand";
import { ProductGrid } from "@/components/product/ProductGrid";
import Container from "@/components/ui/Container";
import { getProducts } from "@/lib/products";

type CategoryPageProps = {
  params: Promise<{ category: string }>;
};

export function generateStaticParams() {
  return brand.categories.map((category) => ({ category: category.slug }));
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category: categorySlug } = await params;
  const category = brand.categories.find(
    (item) => item.slug === categorySlug,
  );

  if (!category) {
    notFound();
  }

  const products = await getProducts(category.slug);

  return (
    <div className="bg-background py-16 text-foreground">
      <Container>
        <p className="text-sm uppercase tracking-[0.3em] text-accent">
          Shop
        </p>
        <h1 className="mt-4 font-heading text-6xl">{category.label}</h1>
        <div className="mt-12">
          <ProductGrid products={products} />
        </div>
      </Container>
    </div>
  );
}
