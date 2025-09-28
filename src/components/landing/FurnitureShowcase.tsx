
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

const furnitureProducts = [
  {
    id: 'furniture_1',
    name: 'Plush Velvet Sofa',
    category: 'Sofas',
    images: [
      { url: '/MODULERFURNITURE/SOFAS/img1.jpg', hint: 'plush velvet sofa' },
      { url: '/MODULERFURNITURE/SOFAS/img3.jpg', hint: 'sofa side view' },
      { url: '/MODULERFURNITURE/SOFAS/img4.jpg', hint: 'sofa detail' },
    ]
  },
  {
    id: 'furniture_2',
    name: 'Modern Minimalist TV Unit',
    category: 'TV Units',
    images: [
      { url: '/MODULERFURNITURE/TVUNITS/img1.jpg', hint: 'minimalist tv unit' },
      { url: '/MODULERFURNITURE/TVUNITS/img2.jpg', hint: 'tv unit storage' },
      { url: '/MODULERFURNITURE/TVUNITS/img3.jpg', hint: 'tv unit on wall' },
    ]
  },
  {
    id: 'furniture_3',
    name: 'Industrial Bookshelf',
    category: 'Bookshelves',
    images: [
      { url: '/MODULERFURNITURE/BOOKSHELVES/img1.jpg', hint: 'industrial bookshelf' },
      { url: '/MODULERFURNITURE/BOOKSHELVES/img2.jpg', hint: 'bookshelf decor' },
      { url: '/MODULERFURNITURE/BOOKSHELVES/img3.jpg', hint: 'bookshelf detail' },
    ]
  },
  {
    id: 'furniture_4',
    name: 'Classic Wooden Study Table',
    category: 'Study Tables',
    images: [
      { url: '/MODULERFURNITURE/STUDYTABLE/img1.jpg', hint: 'classic study table' },
      { url: '/MODULERFURNITURE/STUDYTABLE/img2.jpg', hint: 'study table setup' },
      { url: '/MODULERFURNITURE/STUDYTABLE/img3.jpg', hint: 'study table detail' },
    ]
  },
   {
    id: 'furniture_5',
    name: 'Elegant Crockery Unit',
    category: 'Crockery Units',
    images: [
      { url: '/crockery-unit.jpg', hint: 'elegant crockery unit' },
      { url: '/MODULERFURNITURE/CROCKERYUNITS/img2.jpg', hint: 'crockery unit display' },
      { url: '/MODULERFURNITURE/CROCKERYUNITS/img3.jpg', hint: 'crockery unit items' },
    ]
  },
  {
    id: 'furniture_6',
    name: 'Floating Wall TV Unit',
    category: 'TV Units',
    images: [
      { url: '/MODULERFURNITURE/TVUNITS/img4.jpg', hint: 'floating tv unit' },
      { url: '/MODULERFURNITURE/TVUNITS/img1.jpg', hint: 'tv unit perspective' },
      { url: '/MODULERFURNITURE/TVUNITS/img2.jpg', hint: 'tv unit with decor' },
    ]
  },
];

const furnitureCategories = [
  'All', 'Sofas', 'TV Units', 'Bookshelves', 'Crockery Units', 'Study Tables'
];

export default function FurnitureShowcase() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState('');

  const filteredFurniture = useMemo(() => {
    if (activeCategory === 'All') {
      return furnitureProducts;
    }
    return furnitureProducts.filter(f => f.category === activeCategory);
  }, [activeCategory]);

  const openQuoteModal = (productName: string) => {
    setSelectedProduct(productName);
    setIsModalOpen(true);
  }

  return (
    <>
      <section className="bg-background py-16 md:py-24">
        <div className="container mx-auto px-4">
          <ScrollAnimationWrapper className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary mb-2">Our Modular Furniture</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our collection of stylish and functional furniture, designed for modern living.
            </p>
          </ScrollAnimationWrapper>

          <ScrollAnimationWrapper delay={200}>
            <div className="flex justify-center mb-8">
              <ScrollArea className="w-full whitespace-nowrap">
                <div className="flex justify-center space-x-2 pb-4">
                  {furnitureCategories.map(category => (
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
              {filteredFurniture.map(item => (
                <Card key={item.id} className="overflow-hidden group">
                  <CardContent className="p-0">
                    <Carousel className="w-full">
                      <CarouselContent>
                        {item.images.map((image, index) => (
                          <CarouselItem key={index}>
                            <div className="relative aspect-[4/3] w-full">
                              <Image
                                src={image.url}
                                alt={`${item.name} - view ${index + 1}`}
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
                      <h3 className="text-lg font-headline font-semibold text-primary truncate">{item.name}</h3>
                      <div className="flex justify-between items-center mt-2">
                        <p className="text-sm text-muted-foreground">{item.category}</p>
                        <Button variant="outline" size="sm" onClick={() => openQuoteModal(item.name)}>Get Quote</Button>
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
