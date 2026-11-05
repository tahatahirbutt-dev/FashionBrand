import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import CategoryModules from "@/components/product/CategoryModules";
import ProductGallery from "@/components/product/ProductGallery";
import ProductPurchase from "@/components/product/ProductPurchase";
import Container from "@/components/ui/Container";
import { brand } from "@/config/brand";
import { formatPrice } from "@/lib/format";
import { getProductOptions } from "@/lib/product-options";
import { getAllProducts, getProductBySlug } from "@/lib/products";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const products = await getAllProducts();
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    return {};
  }

  return {
    title: product.name,
    description: product.description,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const categoryLabel =
    brand.categories.find((category) => category.slug === product.category)
      ?.label ?? "Shop";

  return (
    <main>
      <Container className="py-8 md:py-16">
        <nav
          aria-label="Breadcrumb"
          className="mb-8 text-xs uppercase tracking-widest"
        >
          <Link href="/" className="hover:text-accent">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link
            href={`/shop/${product.category}`}
            className="hover:text-accent"
          >
            {categoryLabel}
          </Link>
          <span className="mx-2">/</span>
          <span aria-current="page">{product.name}</span>
        </nav>

        <div className="grid gap-8 md:grid-cols-2 md:gap-16">
          <ProductGallery images={product.images} name={product.name} />

          <div>
            {product.badge && (
              <span className="text-xs uppercase tracking-widest text-accent">
                {product.badge}
              </span>
            )}
            <h1 className="mt-2 font-heading text-4xl md:text-5xl">
              {product.name}
            </h1>
            <p className="mt-3 text-lg">{formatPrice(product.price)}</p>
            <p className="mt-6 leading-relaxed">{product.description}</p>

            <ProductPurchase options={getProductOptions(product)} />
            <div className="mt-10">
              <CategoryModules product={product} />
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
