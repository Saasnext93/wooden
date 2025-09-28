
'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from '../ui/card';
import { Heart } from 'lucide-react';
import QuoteModal from '../products/QuoteModal';
import { cn } from '@/lib/utils';
import ScrollAnimationWrapper from '../animations/ScrollAnimationWrapper';

const kitchenProducts = [
  {
    id: 'kitchen_1',
    name: 'Coastal Chic Modular Kitchen',
    category: 'L-Shaped Island',
    images: [
      { url: '/MODULERKITCHEN/LShape/image2.jpg', hint: 'blue kitchen island' },
      { url: '/MODULERKITCHEN/LShape/image3.jpg', hint: 'kitchen dining area' },
      { url: '/MODULERKITCHEN/LShape/image1.jpg', hint: 'kitchen countertop' },
    ]
  },
  {
    id: 'kitchen_2',
    name: 'Stylish Green & Grey Kitchen',
    category: 'Straight',
    images: [
      { url: '/MODULERKITCHEN/StraightKitchen/img2.jpg', hint: 'green kitchen cabinets' },
      { url: '/MODULERKITCHEN/StraightKitchen/img1.jpg', hint: 'modern kitchen appliances' },
      { url: '/MODULERKITCHEN/StraightKitchen/img4.jpg', hint: 'kitchen sink detail' },
    ]
  },
  {
    id: 'kitchen_3',
    name: 'Sleek Serenity Modern Kitchen',
    category: 'Parallel',
    images: [
      { url: '/MODULERKITCHEN/ParallalKitchen/m.jpg', hint: 'minimalist kitchen' },
      { url: '/MODULERKITCHEN/ParallalKitchen/M2.jpg', hint: 'glossy kitchen cabinets' },
      { url: '/MODULERKITCHEN/ParallalKitchen/M3.jpg', hint: 'kitchen lighting' },
    ]
  },
  {
    id: 'kitchen_4',
    name: 'Classic U-Shaped Kitchen',
    category: 'U-Shaped',
    images: [
      { url: '/MODULERKITCHEN/UShape/img1.jpg', hint: 'u-shaped kitchen' },
      { url: '/MODULERKITCHEN/UShape/img2.jpg', hint: 'kitchen appliances' },
      { url: '/MODULERKITCHEN/UShape/img3.jpg', hint: 'kitchen counter' },
    ]
  },
  {
    id: 'kitchen_5',
    name: 'Compact L-Shaped Kitchen',
    category: 'L-Shaped',
    images: [
      { url: '/MODULERKITCHEN/Island/img.jpg', hint: 'l-shaped kitchen' },
      { url: '/MODULERKITCHEN/Island/img2.jpg', hint: 'kitchen cooking' },
      { url: '/MODULERKITCHEN/Island/img3.jpg', hint: 'kitchen interior' },
    ]
  },
  {
    id: 'kitchen_6',
    name: 'Minimalist Straight Island Kitchen',
    category: 'Straight Island',
    images: [
      { url: '/MODULERKITCHEN/LShape/img.jpg', hint: 'straight island kitchen' },
      { url: '/MODULERKITCHEN/LShape/image3.jpg', hint: 'kitchen chairs' },
      { url: '/MODULERKITCHEN/LShape/imge4.jpg', hint: 'kitchen details' },
    ]
  }
];

const kitchenCategories = [
  'All', 'L-Shaped', 'Straight', 'Parallel', 'U-Shaped', 'L-Shaped Island', 'U-shaped Island', 'Straight Island'
];

export default function KitchenShowcase() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState('');

  const filteredKitchens = useMemo(() => {
    if (activeCategory === 'All') {
      return kitchenProducts;
    }
    return kitchenProducts.filter(k => k.category.includes(activeCategory.replace(' Island', '')));
  }, [activeCategory]);

  const openQuoteModal = (productName: string) => {
    setSelectedProduct(productName);
    setIsModalOpen(true);
  }

  return (
    <>
      <section className="bg-accent/50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <ScrollAnimationWrapper className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary mb-2">Our Kitchen Designs</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Browse our versatile kitchen layouts, designed for style and functionality.
            </p>
          </ScrollAnimationWrapper>

          <ScrollAnimationWrapper delay={200}>
            <div className="flex justify-center mb-8">
              <ScrollArea className="w-full whitespace-nowrap">
                <div className="flex justify-center space-x-2 pb-4">
                  {kitchenCategories.map(category => (
                    <Button
                      key={category}
                      variant={activeCategory === category ? 'default' : 'outline'}
                      onClick={() => setActiveCategory(category)}
                      className={cn(
                        "transition-colors",
                        activeCategory === category ? 'bg-primary text-primary-foreground' : 'bg-background'
                      )}
                    >
                      {category}
                    </Button>
                  ))}
                </div>
                <ScrollBar orientation="horizontal" />
              </ScrollArea>
            </div>
          </ScrollAnimationWrapper>

          <ScrollAnimationWrapper delay={400}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredKitchens.map(kitchen => (
                <Card key={kitchen.id} className="overflow-hidden group">
                  <CardContent className="p-0">
                    <Carousel className="w-full">
                      <CarouselContent>
                        {kitchen.images.map((image, index) => (
                          <CarouselItem key={index}>
                            <div className="relative aspect-[4/3] w-full">
                              <Image
                                src={image.url}
                                alt={`${kitchen.name} - view ${index + 1}`}
                                data-ai-hint={image.hint}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                              />
                            </div>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
                      <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
                       <Button size="icon" variant="ghost" className="absolute top-2 right-2 z-10 bg-background/50 rounded-full text-foreground hover:bg-background h-8 w-8">
                         <Heart className="w-4 h-4" />
                       </Button>
                    </Carousel>
                    <div className="p-4">
                      <h3 className="text-lg font-headline font-semibold text-primary truncate">{kitchen.name}</h3>
                      <div className="flex justify-between items-center mt-2">
                        <p className="text-sm text-muted-foreground">{kitchen.category} Layout</p>
                        <Button variant="outline" size="sm" onClick={() => openQuoteModal(kitchen.name)}>Get Quote</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </ScrollAnimationWrapper>
        </div>
      </section>
      <QuoteModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        productName={selectedProduct}
      />
    </>
  )
}
