import Link from "next/link";
import {
  buildHref,
  PRICE_BUCKETS,
  SORTS,
  type ShopParams,
} from "@/lib/shop-query";

type ShopControlsProps = {
  basePath: string;
  params: ShopParams;
  facetLabel?: string;
  facetValues?: string[];
};

export default function ShopControls({
  basePath,
  params,
  facetLabel,
  facetValues = [],
}: ShopControlsProps) {
  const activeCount = [params.sort, params.price, params.facet].filter(Boolean).length;
  const optionClass =
    "block py-1 text-sm hover:text-accent";

  return (
    <details className="mt-8 border-y border-surface py-4">
      <summary className="cursor-pointer list-none text-xs uppercase tracking-widest [&::-webkit-details-marker]:hidden">
        Filter &amp; sort
        {activeCount > 0 && ` (${activeCount} active)`}
      </summary>
      <div className="grid gap-8 pt-6 sm:grid-cols-3">
        <OptionList
          title="Sort"
          options={SORTS}
          active={params.sort}
          href={(key) => buildHref(basePath, params, { sort: key === params.sort ? undefined : key })}
          className={optionClass}
        />
        <OptionList
          title="Price"
          options={PRICE_BUCKETS}
          active={params.price}
          href={(key) => buildHref(basePath, params, { price: key === params.price ? undefined : key })}
          className={optionClass}
        />
        {facetLabel && (
          <OptionList
            title={facetLabel}
            options={facetValues.map((value) => ({ key: value, label: value }))}
            active={params.facet}
            href={(key) => buildHref(basePath, params, { facet: key === params.facet ? undefined : key })}
            className={optionClass}
          />
        )}
      </div>
      {activeCount > 0 && (
        <Link
          href={basePath}
          className="mt-6 inline-block text-xs uppercase tracking-widest underline underline-offset-4 hover:text-accent"
        >
          Clear all
        </Link>
      )}
    </details>
  );
}

type OptionListProps = {
  title: string;
  options: readonly { key: string; label: string }[];
  active?: string;
  href: (key: string) => string;
  className: string;
};

function OptionList({ title, options, active, href, className }: OptionListProps) {
  return (
    <div>
      <p className="text-xs uppercase tracking-widest text-accent">{title}</p>
      <ul className="mt-2">
        {options.map((option) => (
          <li key={option.key}>
            <Link
              href={href(option.key)}
              aria-current={active === option.key ? "true" : undefined}
              className={`${className} ${active === option.key ? "underline underline-offset-4" : ""}`}
            >
              {option.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
