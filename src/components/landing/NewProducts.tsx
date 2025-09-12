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
    let imageUrl;
    if (product.id === 'prod_4') {
      imageUrl = "https://images.unsplash.com/photo-1487015307662-6ce6210680f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHx3b29kZW4lMjBmdXJuaXR1cmV8ZW58MHx8fHwxNzU3Njk1NzUzfDA&ixlib=rb-4.1.0&q=80&w=1080";
    } else if (product.id === 'prod_5') {
      imageUrl = "https://images.unsplash.com/photo-1721222204755-669d8056cdb4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHx3b29kZW4lMjBmdXJuaXR1cmV8ZW58MHx8fHwxNzU3Njk1NzUzfDA&ixlib=rb-4.1.0&q=80&w=1080"
    } else if (product.id === 'prod_6') {
      imageUrl = "https://images.unsplash.com/photo-1665005255783-3298cabef5aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHwlMjByb3VuZCUyMGRpbmluZyUyMHRhYmxlfGVufDB8fHx8MTc1NzY5NTkxMHww&ixlib=rb-4.1.0&q=80&w=1080"
    } else if (product.id === 'prod_7') {
        imageUrl = "https://images.unsplash.com/photo-1721989516639-e051c83c2bd9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxNXx8d29vZGVuJTIwZnVybml0dXJlfGVufDB8fHx8MTc1NzY5NTc1M3ww&ixlib=rb-4.1.0&q=80&w=1080"
    }
    else {
      imageUrl = `https://picsum.photos/seed/${product.id}/600/800`;
    }

    return {
      ...product,
      imageUrl: imageUrl,
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
