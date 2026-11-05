import type { ApparelProduct } from "@/lib/types";
import ProductSection from "../ProductSection";

export default function ApparelModule({
  product,
}: {
  product: ApparelProduct;
}) {
  return (
    <>
      <ProductSection title="Fit & model" defaultOpen>
        <p>{product.fit}</p>
        <p className="mt-2">Model is {product.modelHeight} tall.</p>
      </ProductSection>

      <ProductSection title="Size guide">
        <table className="w-full text-left">
          <caption className="sr-only">Size guide in centimetres</caption>
          <thead>
            <tr className="text-xs uppercase tracking-widest">
              <th className="pb-2 font-normal">Size</th>
              <th className="pb-2 font-normal">Chest (cm)</th>
              <th className="pb-2 font-normal">Length (cm)</th>
            </tr>
          </thead>
          <tbody>
            {product.sizeGuide.map((row) => (
              <tr key={row.size} className="border-t border-surface">
                <td className="py-2">{row.size}</td>
                <td className="py-2">{row.chest}</td>
                <td className="py-2">{row.length}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </ProductSection>

      <ProductSection title="Fabric & care">
        <p>{product.fabric}</p>
        <ul className="mt-2 list-disc pl-5">
          {product.care.map((careInstruction) => (
            <li key={careInstruction}>{careInstruction}</li>
          ))}
        </ul>
      </ProductSection>
    </>
  );
}
