import Image from "next/image";
import Link from "next/link";
import { brand } from "@/config/brand";

export default function Hero() {
  const { hero } = brand;

  return (
    <section className="relative isolate flex min-h-[70vh] items-center justify-center overflow-hidden bg-brand text-background">
      {hero.image && (
        <Image
          src={hero.image}
          alt=""
          fill
          priority
          sizes="100vw"
          className="-z-10 object-cover opacity-60"
        />
      )}
      <div className="mx-auto max-w-3xl px-4 py-24 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-accent">
          {brand.name}
        </p>
        <h1 className="mt-6 font-heading text-5xl leading-tight md:text-7xl">
          {hero.heading}
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-sm md:text-base">
          {hero.subheading}
        </p>
        <Link
          href={hero.cta.href}
          className="mt-10 inline-block bg-accent px-8 py-4 text-xs uppercase tracking-widest text-foreground transition-opacity hover:opacity-90"
        >
          {hero.cta.label}
        </Link>
      </div>
    </section>
  );
}
