"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { lineKey } from "@/lib/cart";
import { formatPrice } from "@/lib/format";
import { useCart } from "./CartProvider";

export default function CartDrawer() {
  const { items, subtotal, isOpen, closeCart, setQuantity, removeItem } =
    useCart();
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen && !dialog.open) dialog.showModal();
    if (!isOpen && dialog.open) dialog.close();
  }, [isOpen]);

  return (
    <dialog
      ref={dialogRef}
      onClose={closeCart}
      onClick={(event) => {
        if (event.target === event.currentTarget) closeCart();
      }}
      aria-label="Shopping cart"
      className="m-0 ml-auto h-dvh max-h-none w-full max-w-md bg-background p-0 text-foreground backdrop:bg-foreground/40 open:flex open:flex-col"
    >
      <div className="flex items-center justify-between border-b border-surface px-6 py-4">
        <h2 className="font-heading text-2xl">Your cart</h2>
        <button
          type="button"
          onClick={closeCart}
          className="text-xs uppercase tracking-widest hover:text-accent"
        >
          Close
        </button>
      </div>

      {items.length === 0 ? (
        <p className="flex-1 px-6 py-10 text-sm">Your cart is empty.</p>
      ) : (
        <ul className="flex-1 divide-y divide-surface overflow-y-auto px-6">
          {items.map((item) => {
            const key = lineKey(item);

            return (
              <li key={key} className="flex gap-4 py-5">
                <div className="relative aspect-[4/5] w-20 shrink-0 bg-surface">
                  {item.image && (
                    <Image
                      src={item.image.src}
                      alt={item.image.alt}
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                  )}
                </div>

                <div className="flex flex-1 flex-col text-sm">
                  <Link
                    href={`/product/${item.slug}`}
                    onClick={closeCart}
                    className="hover:text-accent"
                  >
                    {item.name}
                  </Link>
                  {item.option && (
                    <span className="text-xs">{item.option}</span>
                  )}

                  <div className="mt-auto flex items-center justify-between">
                    <div className="flex items-center border border-surface">
                      <button
                        type="button"
                        aria-label={`Decrease quantity of ${item.name}`}
                        onClick={() => setQuantity(key, item.quantity - 1)}
                        className="px-3 py-1"
                      >
                        -
                      </button>
                      <span className="px-2" aria-live="polite">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        aria-label={`Increase quantity of ${item.name}`}
                        onClick={() => setQuantity(key, item.quantity + 1)}
                        className="px-3 py-1"
                      >
                        +
                      </button>
                    </div>
                    <span>{formatPrice(item.price * item.quantity)}</span>
                  </div>

                  <button
                    type="button"
                    onClick={() => removeItem(key)}
                    className="mt-2 self-start text-xs uppercase tracking-widest underline hover:text-accent"
                  >
                    Remove
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      )}

      <div className="border-t border-surface px-6 py-5">
        <div className="flex justify-between text-sm">
          <span>Subtotal</span>
          <span>{formatPrice(subtotal)}</span>
        </div>
        <button
          type="button"
          disabled
          className="mt-4 w-full bg-brand px-6 py-4 text-xs uppercase tracking-widest text-background disabled:cursor-not-allowed disabled:opacity-40"
        >
          Checkout (coming soon)
        </button>
      </div>
    </dialog>
  );
}
