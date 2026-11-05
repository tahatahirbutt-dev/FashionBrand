"use client";

import Image from "next/image";
import { useState } from "react";
import type { ProductImage } from "@/lib/types";

type ProductGalleryProps = {
  images: ProductImage[];
  name: string;
};

export default function ProductGallery({
  images,
  name,
}: ProductGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeImage = images[activeIndex] ?? images[0];

  if (!activeImage) {
    return (
      <div className="flex aspect-[4/5] items-center justify-center bg-surface text-xs uppercase tracking-widest">
        Photo coming soon
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-3">
      <div className="relative aspect-[4/5] overflow-hidden bg-surface">
        <Image
          src={activeImage.src}
          alt={activeImage.alt}
          fill
          priority
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover"
        />
      </div>

      {images.length > 1 && (
        <ul className="grid grid-cols-4 gap-3">
          {images.map((image, index) => (
            <li key={image.src}>
              <button
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Show image ${index + 1} of ${name}`}
                aria-current={index === activeIndex}
                className={`relative block aspect-[4/5] w-full overflow-hidden border bg-surface ${
                  index === activeIndex
                    ? "border-foreground"
                    : "border-transparent"
                }`}
              >
                <Image
                  src={image.src}
                  alt=""
                  fill
                  sizes="12vw"
                  className="object-cover"
                />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
