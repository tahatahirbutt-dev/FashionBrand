import type { Product } from "@/lib/types";
import ApparelModule from "./modules/ApparelModule";
import FragranceModule from "./modules/FragranceModule";
import JewelleryModule from "./modules/JewelleryModule";

export default function CategoryModules({ product }: { product: Product }) {
  switch (product.category) {
    case "fragrances":
      return <FragranceModule product={product} />;
    case "apparel":
      return <ApparelModule product={product} />;
    case "jewellery":
      return <JewelleryModule product={product} />;
    case "accessories":
      return null;
    default: {
      const unhandled: never = product;
      return unhandled;
    }
  }
}
