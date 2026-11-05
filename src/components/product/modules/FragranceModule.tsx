import type { FragranceProduct } from "@/lib/types";
import ProductSection from "../ProductSection";

export default function FragranceModule({
  product,
}: {
  product: FragranceProduct;
}) {
  const layers = [
    { label: "Top", notes: product.notes.top },
    { label: "Heart", notes: product.notes.heart },
    { label: "Base", notes: product.notes.base },
  ];

  return (
    <>
      <ProductSection title="Fragrance notes" defaultOpen>
        <dl className="grid grid-cols-3 gap-4">
          {layers.map((layer) => (
            <div key={layer.label}>
              <dt className="text-xs uppercase tracking-widest text-accent">
                {layer.label}
              </dt>
              <dd className="mt-1">{layer.notes.join(", ")}</dd>
            </div>
          ))}
        </dl>
      </ProductSection>

      <ProductSection title="Longevity">
        <div
          role="img"
          aria-label={`Longevity ${product.longevity} out of 5`}
          className="flex gap-1"
        >
          {Array.from({ length: 5 }, (_, index) => (
            <span
              key={index}
              className={`h-2 w-8 ${
                index < product.longevity ? "bg-brand" : "bg-surface"
              }`}
            />
          ))}
        </div>
      </ProductSection>
    </>
  );
}
