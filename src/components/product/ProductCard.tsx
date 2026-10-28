import Image from "next/image";
import Link from "next/link";
import { formatPrice } from "@/lib/format";
import type { Product } from "@/lib/types";

export function ProductCard({ product }: { product: Product }) {
  const [main, hover] = product.images;

  return (
    <Link href={`/product/${product.slug}`} className="group block">
      <div className="relative aspect-[4/5] overflow-hidden bg-surface">
        {main ? (
          <>
            <Image
              src={main}
              alt={product.name}
              fill
              sizes="(min-width: 1024px) 25vw, 50vw"
              className="object-cover"
            />
            {hover && (
              <Image
                src={hover}
                alt=""
                fill
                sizes="(min-width: 1024px) 25vw, 50vw"
                className="object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              />
            )}
          </>
        ) : (
          <div className="flex h-full items-center justify-center text-xs uppercase tracking-[0.2em] text-foreground/40">
            Photo coming soon
          </div>
        )}
        {product.badge && (
          <span className="absolute left-3 top-3 bg-background px-2 py-1 text-[10px] uppercase tracking-[0.2em]">
            {product.badge}
          </span>
        )}
      </div>
      <div className="mt-3 flex items-baseline justify-between gap-4">
        <h3 className="text-sm">{product.name}</h3>
        <p className="text-sm text-foreground/70">
          {formatPrice(product.price)}
        </p>
      </div>
    </Link>
  );
}
