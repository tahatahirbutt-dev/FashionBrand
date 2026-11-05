import Image from "next/image";
import Link from "next/link";
import { brand } from "@/config/brand";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

type Category = (typeof brand.categories)[number];

function getCategoryImage(category: Category) {
  if ("image" in category && typeof category.image === "string") {
    return category.image;
  }

  return undefined;
}

export default function CategoryGrid() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <SectionHeading eyebrow="Shop" title="Shop by category" />
        <ul className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          {brand.categories.map((category) => {
            const image = getCategoryImage(category);

            return (
              <li key={category.slug}>
                <Link href={`/shop/${category.slug}`} className="group block">
                  <div className="relative aspect-[4/5] overflow-hidden bg-surface">
                    {image && (
                      <Image
                        src={image}
                        alt=""
                        fill
                        sizes="(min-width: 768px) 25vw, 50vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    )}
                  </div>
                  <span className="mt-3 block text-xs uppercase tracking-widest">
                    {category.label}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
