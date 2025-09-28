
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

const bedroomProducts = [
  {
    id: 'bedroom_1',
    name: 'Modern Master Bedroom',
    category: 'Master Bedrooms',
    images: [
      { url: '/BEDROOMS/MASTERBEDROOM/img1.jpg', hint: 'modern master bedroom' },
      { url: '/BEDROOMS/MASTERBEDROOM/img2.jpg', hint: 'bedroom side table' },
      { url: '/BEDROOMS/MASTERBEDROOM/img3.jpg', hint: 'bedroom wardrobe' },
    ]
  },
  {
    id: 'bedroom_2',
    name: 'Creative Kids Room',
    category: 'Kids Rooms',
    images: [
      { url: '/BEDROOMS/KIDS/img1.jpg', hint: 'creative kids room' },
      { url: '/BEDROOMS/KIDS/img2.jpg', hint: 'kids study area' },
      { url: '/BEDROOMS/KIDS/img3.jpg', hint: 'kids bed detail' },
    ]
  },
  {
    id: 'bedroom_3',
    name: 'Space-Saving Bunk Bed',
    category: 'Bunk Beds',
    images: [
      { url: '/BEDROOMS/BUNKBEDS/img1.jpg', hint: 'bunk bed for kids' },
      { url: '/BEDROOMS/BUNKBEDS/img2.jpg', hint: 'bunk bed stairs' },
      { url: '/BEDROOMS/BUNKBEDS/img3.jpg', hint: 'bunk bed setup' },
    ]
  },
  {
    id: 'bedroom_4',
    name: 'Elegant Queen Bedroom',
    category: 'Master Bedrooms',
    images: [
      { url: '/BEDROOMS/MASTERBEDROOM/img4.jpg', hint: 'elegant queen bed' },
      { url: '/BEDROOMS/MASTERBEDROOM/img1.jpg', hint: 'bedroom vanity' },
      { url: '/BEDROOMS/MASTERBEDROOM/img2.jpg', hint: 'bedroom lighting' },
    ]
  },
  {
    id: 'bedroom_5',
    name: 'Playful Bunk Room',
    category: 'Bunk Beds',
    images: [
      { url: '/BEDROOMS/BUNKBEDS/img4.jpg', hint: 'playful bunk room' },
      { url: '/BEDROOMS/BUNKBEDS/img1.jpg', hint: 'bunk bed storage' },
      { url: '/BEDROOMS/BUNKBEDS/img2.jpg', hint: 'bunk bed decor' },
    ]
  },
];

const bedroomCategories = [
  'All', 'Master Bedrooms', 'Kids Rooms', 'Bunk Beds'
];

export default function BedroomShowcase() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState('');

  const filteredBedrooms = useMemo(() => {
    if (activeCategory === 'All') {
      return bedroomProducts;
    }
    return bedroomProducts.filter(f => f.category === activeCategory);
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
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary mb-2">Our Bedroom Designs</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Create your personal sanctuary with our elegant and functional bedroom solutions.
            </p>
          </ScrollAnimationWrapper>

          <ScrollAnimationWrapper delay={200}>
            <div className="flex justify-center mb-8">
              <ScrollArea className="w-full whitespace-nowrap">
                <div className="flex justify-center space-x-2 pb-4">
                  {bedroomCategories.map(category => (
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
              {filteredBedrooms.map(item => (
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
