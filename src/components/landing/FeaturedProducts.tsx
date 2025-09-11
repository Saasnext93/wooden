import { products as allProducts } from '@/lib/placeholder-data';
import ProductCard from '../products/ProductCard';
import { Button } from '../ui/button';
import Link from 'next/link';
import ScrollAnimationWrapper from '../animations/ScrollAnimationWrapper';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function FeaturedProducts() {
  const featuredProducts = allProducts.slice(0, 5).map(product => {
    const placeholderImage = PlaceHolderImages.find(p => p.id === product.imageId);
    return {
      ...product,
      imageUrl: placeholderImage?.imageUrl ?? `https://picsum.photos/seed/${product.id}/600/600`,
      imageHint: placeholderImage?.imageHint ?? 'furniture piece'
    }
  });

  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4">
        <ScrollAnimationWrapper className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary mb-2">Featured Pieces</h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Discover our most popular items, loved by connoisseurs of fine living.
          </p>
        </ScrollAnimationWrapper>
        
        <ScrollAnimationWrapper delay={200}>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {featuredProducts.map((product) => (
                <CarouselItem key={product.id} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <ProductCard product={product} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper className="text-center mt-12" delay={400}>
          <Button asChild size="lg">
            <Link href="/products">View All Products</Link>
          </Button>
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
}
