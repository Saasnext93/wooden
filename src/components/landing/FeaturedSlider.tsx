'use client';

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

const allProducts = [
  {
    id: 'prod_1',
    name: 'L-Shaped Kitchen Design',
    description: 'A timeless piece, handcrafted from solid oak with a natural finish. Perfect for any living room.',
    price: 450,
    imageId: 'product1',
    category: 'Modular Kitchen Design',
    material: 'Oak',
    rating: 4.8,
    status: 'In Stock',
  },
  {
    id: 'prod_2',
    name: 'Modern Wardrobe Design',
    description: 'Minimalist design meets rich walnut wood. This coffee table is a statement of elegance.',
    price: 620,
    imageId: 'product2',
    category: 'Wardrobe Design',
    material: 'Walnut',
    rating: 4.9,
    status: 'In Stock',
  },
  {
    id: 'prod_3',
    name: 'Master Bedroom Design',
    description: 'A comfortable and stylish 3-seater sofa upholstered in a premium linen blend fabric.',
    price: 1250,
    imageId: 'product3',
    category: 'Master bedroom design',
    material: 'Linen',
    rating: 4.7,
    status: 'In Stock',
  },
  {
    id: 'prod_4',
    name: 'Art Deco Kids Bedroom',
    description: 'Display your collection in style with this sleek and sturdy bookshelf, made from reclaimed pine.',
    price: 780,
    imageId: 'product4',
    category: 'Kids Room Design',
    material: 'Pine',
    rating: 4.6,
    status: 'Pre-Order',
    status_label: ' arriving soon'
  },
  {
    id: 'prod_5',
    name: 'Parallel Kitchen Design',
    description: 'Designed for comfort and style, this chair features a beautiful ash wood frame and leather seat.',
    price: 530,
    imageId: 'product5',
    category: 'Kitchen wall design',
    material: 'Ash',
    rating: 4.8,
    status: 'Pre-Order',
    status_label: ' new design'
  },
];


export default function FeaturedSlider() {
  const featuredProducts = allProducts.slice(0, 5).map(product => {
    let imageUrl;
    switch(product.id) {
      case 'prod_1':
        imageUrl = "/l-shaped-contemporary-kitchen-design-with-full-height-cabinets-and-granite-countertop.jpg";
        break;
      case 'prod_2':
        imageUrl = "/modern-parallel-kitchen-design-with-open-shelves-and-backsplash-tiles.jpg";
        break;
      case 'prod_3':
        imageUrl = "/white-modern-2-door-swing-wardrobe-design-with-integrated-study-table.jpg";
        break;
      case 'prod_4':
        imageUrl = "/u-shaped-contemporary-kitchen-design-with-led-lights-and-quartz-countertops.jpg";
        break;
      case 'prod_5':
        imageUrl = "/modern-3-door-swing-wardrobe-design-with-integrated-study-table.jpg";
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
                        Explore a curated selection of our finest modular kitchens, wardrobes and beds. Each piece is a testament to our dedication to quality, designed to bring both beauty and function to your space.
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
