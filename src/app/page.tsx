import BrandStory from "@/components/home/BrandStory";
import CategoryGrid from "@/components/home/CategoryGrid";
import CollectionStrip from "@/components/home/CollectionStrip";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import Hero from "@/components/home/Hero";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <CategoryGrid />
      <CollectionStrip />
      <FeaturedProducts />
      <BrandStory />
    </div>
  );
}
