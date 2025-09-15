'use client';

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
import Autoplay from "embla-carousel-autoplay"
import React from 'react';

export default function FeaturedProducts() {
  const featuredProducts = allProducts.slice(0, 5).map(product => {
    let imageUrl;
    switch(product.id) {
      case 'prod_1':
        imageUrl = "/sofa.jpg";
        break;
      case 'prod_2':
        imageUrl = "/wooden1.jpg";
        break;
      case 'prod_3':
        imageUrl = "/wooden2.jpg";
        break;
      case 'prod_4':
        imageUrl = "https://images.unsplash.com/photo-1715160761399-c9fb4d2a5f77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHx3b29kZW5uJTIwZnVybml0dXJlfGVufDB8fHx8MTc1NzkwNjc3NHww&ixlib=rb-4.1.0&q=80&w=1080";
        break;
      case 'prod_5':
        imageUrl = "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxlcmdvbm9taWMlMjBkZXNrJTIwY2hhaXJ8ZW58MHx8fHwxNzU3NzAwNTEzfDA&ixlib=rb-4.1.0&q=80&w=1080";
        break;
      default:
        imageUrl = `https://picsum.photos/seed/${product.id}/600/600`;
    }

    return {
      ...product,
      imageUrl,
      imageHint: 'furniture piece'
    }
  });

  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

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
            plugins={[plugin.current]}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
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
