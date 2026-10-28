import { brand } from "@/config/brand";

export function formatPrice(amount: number) {
  return new Intl.NumberFormat(brand.locale, {
    style: "currency",
    currency: brand.currency,
    maximumFractionDigits: 0,
  }).format(amount);
}
