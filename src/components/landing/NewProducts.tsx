import { products as allProducts } from '@/lib/placeholder-data';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import ScrollAnimationWrapper from '../animations/ScrollAnimationWrapper';
import NewProductCard from '../products/NewProductCard';

export default function NewProducts() {
  const newProducts = allProducts.filter(p => p.status !== 'In Stock').map(product => {
    return {
      ...product,
      imageUrl: `https://picsum.photos/seed/${product.id}/600/800`,
      imageHint: 'furniture piece'
    }
  });

  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4">
        <ScrollAnimationWrapper className="mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">Take a look at what's new right now.</h2>
        </ScrollAnimationWrapper>
        
        <ScrollAnimationWrapper delay={200}>
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full relative"
          >
            <CarouselContent>
              {newProducts.map((product) => (
                <CarouselItem key={product.id} className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <div className="p-1">
                    <NewProductCard product={product} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute -left-4 top-1/2 -translate-y-1/2" />
            <CarouselNext className="absolute -right-4 top-1/2 -translate-y-1/2" />
          </Carousel>
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
}
