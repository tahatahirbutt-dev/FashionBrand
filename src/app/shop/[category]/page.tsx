import { notFound } from "next/navigation";
import { brand } from "@/config/brand";

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

  return (
    <div className="bg-background px-6 py-16 text-foreground">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm uppercase tracking-[0.3em] text-accent">
          Shop
        </p>
        <h1 className="mt-4 font-heading text-6xl">{category.label}</h1>
        <p className="mt-6 max-w-xl text-foreground/70">
          Products in this collection will appear here as the catalogue grows.
        </p>
      </div>
    </div>
  );
}
