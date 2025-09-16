'use client';

import { products as allProducts } from '@/lib/placeholder-data';
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
import Image from 'next/image';

export default function FeaturedSlider() {
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
    Autoplay({ delay: 3000, stopOnInteraction: true })
  )

  return (
    <section className="bg-accent/50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollAnimationWrapper>
                <div className="text-center md:text-left">
                    <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary mb-4">Masterfully Crafted, Exclusively Yours</h2>
                    <p className="text-lg text-muted-foreground mb-6">
                        Explore a curated selection of our finest modular furniture. Each piece is a testament to our dedication to quality, designed to bring both beauty and function to your space.
                    </p>
                    <Button asChild>
                        <Link href="/products">Explore the Collection</Link>
                    </Button>
                </div>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper delay={200}>
                <Carousel
                    plugins={[plugin.current]}
                    opts={{
                    align: "start",
                    loop: true,
                    }}
                    className="w-full max-w-md mx-auto"
                    onMouseEnter={plugin.current.stop}
                    onMouseLeave={plugin.current.reset}
                >
                    <CarouselContent>
                    {featuredProducts.map((product) => (
                        <CarouselItem key={product.id}>
                            <div className="p-1">
                                <div className="relative aspect-square w-full overflow-hidden rounded-lg">
                                    <Image 
                                        src={product.imageUrl}
                                        alt={product.name}
                                        data-ai-hint={product.imageHint}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-2" />
                    <CarouselNext className="right-2" />
                </Carousel>
            </ScrollAnimationWrapper>
        </div>
      </div>
    </section>
  );
}
