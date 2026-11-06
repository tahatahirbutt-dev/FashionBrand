"use client";

import { useState } from "react";
import { useCart } from "@/components/cart/CartProvider";
import type { CartItem } from "@/lib/cart";
import type { ProductOptions } from "@/lib/product-options";

export default function ProductPurchase({
  item,
  options,
}: {
  item: Omit<CartItem, "quantity" | "option">;
  options: ProductOptions | null;
}) {
  const [selected, setSelected] = useState<string | null>(null);
  const { addItem, openCart } = useCart();
  const needsSelection = options !== null && selected === null;

  return (
    <div className="mt-8 space-y-6">
      {options && (
        <fieldset>
          <legend className="mb-3 text-xs uppercase tracking-widest">
            {options.label}
          </legend>
          <div className="flex flex-wrap gap-2">
            {options.values.map((value) => (
              <label key={value} className="cursor-pointer">
                <input
                  type="radio"
                  name="product-option"
                  value={value}
                  checked={selected === value}
                  onChange={() => setSelected(value)}
                  className="peer sr-only"
                />
                <span className="block border border-surface px-4 py-2 text-sm transition-colors hover:border-foreground peer-checked:border-brand peer-checked:bg-brand peer-checked:text-background peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-accent">
                  {value}
                </span>
              </label>
            ))}
          </div>
        </fieldset>
      )}

      <button
        type="button"
        disabled={needsSelection}
        onClick={() => {
          addItem({ ...item, option: selected ?? undefined });
          openCart();
        }}
        className="w-full bg-brand px-6 py-4 text-xs uppercase tracking-widest text-background transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
      >
        {needsSelection ? `Select ${options.label.toLowerCase()}` : "Add to cart"}
      </button>
    </div>
  );
}
