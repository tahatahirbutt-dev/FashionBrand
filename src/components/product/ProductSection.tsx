import type { ReactNode } from "react";

type ProductSectionProps = {
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
};

export default function ProductSection({
  title,
  children,
  defaultOpen = false,
}: ProductSectionProps) {
  return (
    <details
      open={defaultOpen}
      className="group border-t border-surface py-4 last:border-b"
    >
      <summary className="flex cursor-pointer list-none items-center justify-between text-xs uppercase tracking-widest [&::-webkit-details-marker]:hidden">
        {title}
        <span
          aria-hidden
          className="text-lg transition-transform group-open:rotate-45"
        >
          +
        </span>
      </summary>
      <div className="pt-4 text-sm leading-relaxed">{children}</div>
    </details>
  );
}
