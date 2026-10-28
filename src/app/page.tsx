import Link from "next/link";
import { brand } from "@/config/brand";

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="flex flex-1 items-center justify-center bg-brand px-6 py-24 text-background">
        <div className="max-w-3xl text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-accent">
            {brand.name}
          </p>
          <h1 className="font-heading text-6xl leading-none sm:text-8xl">
            {brand.tagline}
          </h1>
          <p className="mx-auto mt-8 max-w-xl text-background/80">
            Discover a considered collection of products designed for everyday
            living.
          </p>
          <Link
            href="/shop"
            className="mt-10 inline-flex bg-accent px-6 py-3 text-sm font-medium text-foreground transition-opacity hover:opacity-80"
          >
            Shop collection
          </Link>
        </div>
      </section>
    </div>
  );
}
