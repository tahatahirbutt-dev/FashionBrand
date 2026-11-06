"use client";

import { useCart } from "./CartProvider";

export default function CartButton() {
  const { count, openCart } = useCart();

  return (
    <button
      type="button"
      onClick={openCart}
      className="text-xs uppercase tracking-widest hover:text-accent"
    >
      Cart ({count})
    </button>
  );
}
