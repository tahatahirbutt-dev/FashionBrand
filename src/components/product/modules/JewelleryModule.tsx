import type { JewelleryProduct } from "@/lib/types";
import ProductSection from "../ProductSection";

export default function JewelleryModule({
  product,
}: {
  product: JewelleryProduct;
}) {
  return (
    <ProductSection title="Details" defaultOpen>
      <dl className="space-y-3">
        <div>
          <dt className="text-xs uppercase tracking-widest text-accent">
            Material
          </dt>
          <dd>{product.material}</dd>
        </div>
        <div>
          <dt className="text-xs uppercase tracking-widest text-accent">
            Dimensions
          </dt>
          <dd>{product.dimensions}</dd>
        </div>
        <div>
          <dt className="text-xs uppercase tracking-widest text-accent">
            Gift packaging
          </dt>
          <dd>{product.giftPackaging ? "Available" : "Not available"}</dd>
        </div>
      </dl>
    </ProductSection>
  );
}
