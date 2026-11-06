import Image from "next/image";
import Link from "next/link";
import { collections } from "@/config/collections";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export default function CollectionsPage() {
  return (
    <main className="bg-background py-16 text-foreground md:py-24">
      <Container>
        <SectionHeading eyebrow="Explore" title="Collections" />
        <ul className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          {collections.map((collection) => (
            <li key={collection.slug}>
              <Link href={`/collections/${collection.slug}`} className="group block">
                <div className="relative aspect-[4/5] overflow-hidden bg-surface">
                  {collection.image && (
                    <Image
                      src={collection.image}
                      alt=""
                      fill
                      sizes="(min-width: 768px) 25vw, 50vw"
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
    </main>
  );
}
