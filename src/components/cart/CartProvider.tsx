"use client";

import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
  type ReactNode,
} from "react";
import {
  cartCount,
  cartReducer,
  cartSubtotal,
  type CartItem,
} from "@/lib/cart";

const STORAGE_KEY = "brand-store-cart";

type CartContextValue = {
  items: CartItem[];
  count: number;
  subtotal: number;
  isOpen: boolean;
  addItem: (item: Omit<CartItem, "quantity">) => void;
  setQuantity: (key: string, quantity: number) => void;
  removeItem: (key: string) => void;
  clear: () => void;
  openCart: () => void;
  closeCart: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });
  const [isOpen, setIsOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      const parsed = raw ? JSON.parse(raw) : null;

      if (Array.isArray(parsed)) {
        dispatch({ type: "hydrate", items: parsed });
      }
    } catch {
      // Corrupted or unavailable storage leaves the cart empty.
    }

    // Loading external browser state after mount is intentional.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state.items));
    } catch {
      // Storage may be full or blocked by the browser.
    }
  }, [state.items, hydrated]);

  const value: CartContextValue = {
    items: state.items,
    count: cartCount(state.items),
    subtotal: cartSubtotal(state.items),
    isOpen,
    addItem: (item) => dispatch({ type: "add", item }),
    setQuantity: (key, quantity) =>
      dispatch({ type: "setQuantity", key, quantity }),
    removeItem: (key) => dispatch({ type: "remove", key }),
    clear: () => dispatch({ type: "clear" }),
    openCart: () => setIsOpen(true),
    closeCart: () => setIsOpen(false),
  };

  return (
    <CartContext.Provider value={value}>{children}</CartContext.Provider>
  );
}

export function useCart(): CartContextValue {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used inside <CartProvider>");
  }

  return context;
}
