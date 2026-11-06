import Image from "next/image";
import Link from "next/link";
import { collections } from "@/config/collections";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export default function CollectionStrip() {
  return (
    <section className="pb-16 md:pb-24">
      <Container>
        <SectionHeading eyebrow="Explore" title="Shop by collection" />
        <ul className="mt-10 flex snap-x gap-4 overflow-x-auto pb-2 md:grid md:grid-cols-4 md:overflow-visible">
          {collections.map((collection) => (
            <li key={collection.slug} className="min-w-[72vw] snap-start md:min-w-0">
              <Link href={`/collections/${collection.slug}`} className="group block">
                <div className="relative aspect-[4/5] overflow-hidden bg-surface">
                  {collection.image && (
                    <Image
                      src={collection.image}
                      alt=""
                      fill
                      sizes="(min-width: 768px) 25vw, 72vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  )}
                </div>
                <span className="mt-3 block text-xs uppercase tracking-widest">
                  {collection.title}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
