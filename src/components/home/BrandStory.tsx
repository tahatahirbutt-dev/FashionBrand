import Image from "next/image";
import Link from "next/link";
import { brand } from "@/config/brand";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export default function BrandStory() {
  const { story } = brand;

  return (
    <section className="border-t border-surface">
      <Container className="grid items-center gap-10 py-16 md:grid-cols-2 md:gap-16 md:py-24">
        <div className="relative aspect-[4/5] overflow-hidden bg-surface">
          {story.image && (
            <Image
              src={story.image}
              alt=""
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          )}
        </div>

        <div>
          <SectionHeading eyebrow={story.eyebrow} title={story.heading} />
          <div className="mt-6 space-y-4 leading-relaxed">
            {story.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <Link
            href={story.cta.href}
            className="mt-8 inline-block border border-foreground px-8 py-4 text-xs uppercase tracking-widest transition-colors hover:bg-foreground hover:text-background"
          >
            {story.cta.label}
          </Link>
        </div>
      </Container>
    </section>
  );
}
