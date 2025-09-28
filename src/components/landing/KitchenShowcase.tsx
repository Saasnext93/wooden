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
      { url: '/kitchens/kitchen1-1.jpg', hint: 'blue kitchen island' },
      { url: '/kitchens/kitchen1-2.jpg', hint: 'kitchen dining area' },
      { url: '/kitchens/kitchen1-3.jpg', hint: 'kitchen countertop' },
    ]
  },
  {
    id: 'kitchen_2',
    name: 'Stylish Green & Grey Kitchen',
    category: 'Straight',
    images: [
      { url: '/kitchens/kitchen2-1.jpg', hint: 'green kitchen cabinets' },
      { url: '/kitchens/kitchen2-2.jpg', hint: 'modern kitchen appliances' },
      { url: '/kitchens/kitchen2-3.jpg', hint: 'kitchen sink detail' },
    ]
  },
  {
    id: 'kitchen_3',
    name: 'Sleek Serenity Modern Kitchen',
    category: 'Parallel',
    images: [
      { url: '/kitchens/kitchen3-1.jpg', hint: 'minimalist kitchen' },
      { url: '/kitchens/kitchen3-2.jpg', hint: 'glossy kitchen cabinets' },
      { url: '/kitchens/kitchen3-3.jpg', hint: 'kitchen lighting' },
    ]
  },
  {
    id: 'kitchen_4',
    name: 'Classic U-Shaped Kitchen',
    category: 'U-Shaped',
    images: [
      { url: '/u-shaped-contemporary-kitchen-design-with-led-lights-and-quartz-countertops.jpg', hint: 'u-shaped kitchen' },
      { url: 'https://images.unsplash.com/photo-1586208958839-06c17cacdf08?w=800', hint: 'kitchen appliances' },
      { url: 'https://images.unsplash.com/photo-1588854337236-6889d631faa8?w=800', hint: 'kitchen counter' },
    ]
  },
  {
    id: 'kitchen_5',
    name: 'Compact L-Shaped Kitchen',
    category: 'L-Shaped',
    images: [
      { url: '/l-shaped-contemporary-kitchen-design-with-full-height-cabinets-and-granite-countertop.jpg', hint: 'l-shaped kitchen' },
      { url: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800', hint: 'kitchen cooking' },
      { url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800', hint: 'kitchen interior' },
    ]
  },
  {
    id: 'kitchen_6',
    name: 'Minimalist Straight Island Kitchen',
    category: 'Straight Island',
    images: [
      { url: '/island-kitchen-design.jpg', hint: 'straight island kitchen' },
      { url: 'https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?w=800', hint: 'kitchen chairs' },
      { url: 'https://images.unsplash.com/photo-1558611848-73f7eb4001a1?w=800', hint: 'kitchen details' },
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
    return kitchenProducts.filter(k => k.category === activeCategory);
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
