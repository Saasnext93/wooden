import Image from "next/image";
import Link from "next/link";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import ScrollAnimationWrapper from "../animations/ScrollAnimationWrapper";
import { Card } from "../ui/card";
import { ArrowRight } from "lucide-react";

const categories = [
  { name: 'Chairs', imageId: 'category-chairs' },
  { name: 'Tables', imageId: 'category-tables' },
  { name: 'Sofas', imageId: 'category-sofas' },
  { name: 'Storage', imageId: 'category-storage' },
];

export default function ShopByCategory() {
  const categoriesWithImages = categories.map(category => {
    const placeholderImage = PlaceHolderImages.find(p => p.id === category.imageId);
    return {
      ...category,
      imageUrl: placeholderImage?.imageUrl ?? `https://picsum.photos/seed/${category.imageId}/400/500`,
      imageHint: placeholderImage?.imageHint ?? 'furniture'
    }
  });

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <ScrollAnimationWrapper className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary mb-2">Shop by Category</h2>
          <p className="text-lg text-muted-foreground">Find the perfect piece for every room.</p>
        </ScrollAnimationWrapper>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categoriesWithImages.map((category, index) => (
            <ScrollAnimationWrapper key={category.name} delay={index * 100}>
              <Link href="/products" className="group block">
                <Card className="overflow-hidden h-full rounded-lg">
                  <div className="relative aspect-[4/5] h-[500px] w-full">
                    <Image
                      src={category.imageUrl}
                      alt={`A collection of ${category.name}`}
                      data-ai-hint={category.imageHint}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-6">
                      <h3 className="text-2xl font-headline font-bold text-white">
                        {category.name}
                      </h3>
                      <div className="flex items-center text-sm font-semibold text-white mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Shop Now <ArrowRight className="ml-2 h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>
            </ScrollAnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
