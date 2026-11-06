import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { collections } from "@/config/collections";
import { ProductGrid } from "@/components/product/ProductGrid";
import Container from "@/components/ui/Container";
import { getCollectionProducts } from "@/lib/products";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return collections.map((collection) => ({ slug: collection.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const collection = collections.find((item) => item.slug === slug);
  return collection
    ? { title: collection.title, description: collection.description }
    : {};
}

export default async function CollectionPage({ params }: Props) {
  const { slug } = await params;
  const collection = collections.find((item) => item.slug === slug);
  if (!collection) notFound();

  const products = await getCollectionProducts(slug);

  return (
    <main className="bg-background py-16 text-foreground md:py-24">
      <Container>
        <p className="text-sm uppercase tracking-[0.3em] text-accent">Collection</p>
        <h1 className="mt-4 font-heading text-5xl md:text-6xl">{collection.title}</h1>
        <p className="mt-4 max-w-xl leading-relaxed">{collection.description}</p>
        <div className="mt-12">
          <ProductGrid products={products} />
        </div>
      </Container>
    </main>
  );
}
