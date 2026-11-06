import type { ProductImage } from "./types";

export type CartItem = {
  productId: string;
  slug: string;
  name: string;
  price: number;
  image?: ProductImage;
  option?: string;
  quantity: number;
};

export type CartState = { items: CartItem[] };

export type CartAction =
  | { type: "hydrate"; items: CartItem[] }
  | { type: "add"; item: Omit<CartItem, "quantity"> }
  | { type: "setQuantity"; key: string; quantity: number }
  | { type: "remove"; key: string }
  | { type: "clear" };

export const lineKey = (item: Pick<CartItem, "productId" | "option">) =>
  `${item.productId}::${item.option ?? ""}`;

export function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "hydrate":
      return { items: action.items };
    case "add": {
      const key = lineKey(action.item);
      const exists = state.items.some((item) => lineKey(item) === key);

      return {
        items: exists
          ? state.items.map((item) =>
              lineKey(item) === key
                ? { ...item, quantity: item.quantity + 1 }
                : item,
            )
          : [...state.items, { ...action.item, quantity: 1 }],
      };
    }
    case "setQuantity":
      return {
        items: state.items
          .map((item) =>
            lineKey(item) === action.key
              ? { ...item, quantity: action.quantity }
              : item,
          )
          .filter((item) => item.quantity > 0),
      };
    case "remove":
      return {
        items: state.items.filter((item) => lineKey(item) !== action.key),
      };
    case "clear":
      return { items: [] };
  }
}

export const cartCount = (items: CartItem[]) =>
  items.reduce((count, item) => count + item.quantity, 0);

export const cartSubtotal = (items: CartItem[]) =>
  items.reduce((subtotal, item) => subtotal + item.price * item.quantity, 0);
