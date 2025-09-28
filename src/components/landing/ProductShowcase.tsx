
'use client';

import { useState } from 'react';
import Image from 'next/image';
import ScrollAnimationWrapper from '../animations/ScrollAnimationWrapper';
import { cn } from '@/lib/utils';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const categories = [
  {
    name: 'Modular Kitchens',
    items: [
      { name: 'Straight', imageUrl: 'https://images.unsplash.com/photo-1588854337236-6889d631faa8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxtb2R1bGFyJTIwa2l0Y2hlbnxlbnwwfHx8fDE3NTg1NjYzODh8MA&ixlib=rb-4.1.0&q=80&w=1080', imageHint: 'straight kitchen layout' },
      { name: 'L-shape', imageUrl: 'https://images.unsplash.com/photo-1662454419716-c4c504728811?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHwlMjBtb2R1bGFyJTIwYmVkcm9vbXxlbnwwfHx8fDE3NTg1NjY0ODl8MA&ixlib=rb-4.1.0&q=80&w=1080', imageHint: 'L-shaped kitchen layout' },
      { name: 'U-shape', imageUrl: 'https://images.unsplash.com/photo-1721825176413-eea9d1e8ae8d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxOHx8bW9kdWxhciUyMGJlZHJvb218ZW58MHx8fHwxNzU4NTY2NTgzfDA&ixlib=rb-4.1.0&q=80&w=1080', imageHint: 'U-shaped kitchen layout' },
      { name: 'Parallel', imageUrl: 'https://images.unsplash.com/photo-1559554704-0f74b35a8718?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxtb2R1bGFyJTIwa2l0Y2hlbnxlbnwwfHx8fDE3NTg1NjYzODh8MA&ixlib=rb-4.1.0&q=80&w=1080', imageHint: 'parallel kitchen layout' },
      { name: 'Island', imageUrl: 'https://images.unsplash.com/photo-1586208958839-06c17cacdf08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxM3x8bW9kdWxhciUyMGtpdGNoZW58ZW58MHx8fHwxNzU4NTY2Mzg4fDA&ixlib=rb-4.1.0&q=80&w=1080', imageHint: 'island kitchen layout' },
    ],
  },
  {
    name: 'Wardrobes',
    items: [
      { name: 'Swing', imageUrl: '/white-modern-2-door-swing-wardrobe-design-with-integrated-study-table.jpg', imageHint: 'swing wardrobe' },
      { name: 'Sliding', imageUrl: '/modern-3-door-swing-wardrobe-design-with-integrated-study-table.jpg', imageHint: 'sliding wardrobe' },
    ]
  },
  {
    name: 'Bedrooms',
    items: [
      { name: 'Master', imageUrl: '/contemporary-boys-room-design-with-glossy-beige-wardrobe.jpg', imageHint: 'master bedroom' },
      { name: 'Kids', imageUrl: '/art-deco-kids-bedroom-design-with-arc-pink-panels-and-white-frame.jpg', imageHint: 'kids bedroom' },
      { name: 'Bunk Beds', imageUrl: '/modern-bedroom-design-with-a-double-bed-and-an-ottoman-bench.jpg', imageHint: 'bunk beds' },
    ]
  }
];

type ShowcaseItem = {
  name: string;
  imageUrl: string;
  imageHint: string;
};

export default function ProductShowcase() {
  const [activeCategory, setActiveCategory] = useState(categories[0].name);
  const [activeItem, setActiveItem] = useState<ShowcaseItem>(categories[0].items[0]);

  const handleCategoryChange = (categoryName: string) => {
    const newCategory = categories.find(c => c.name === categoryName);
    if (newCategory && newCategory.items.length > 0) {
      setActiveCategory(categoryName);
      setActiveItem(newCategory.items[0]);
    }
  };

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <ScrollAnimationWrapper className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary mb-2">
            Explore Our Designs
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We've created a range of layouts that offer functional, stylish solutions to perfectly suit your needs.
          </p>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper delay={200}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Main Image */}
            <div className="relative min-h-[400px] md:min-h-[600px] w-full lg:sticky top-24">
              <div className="relative h-full w-full overflow-hidden rounded-lg shadow-2xl aspect-square">
                <Image
                  src={activeItem.imageUrl}
                  alt={activeItem.name}
                  data-ai-hint={activeItem.imageHint}
                  fill
                  className="object-cover transition-all duration-500 ease-in-out"
                  key={activeItem.name}
                  priority
                />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                 <h3 className="absolute bottom-4 left-4 text-white text-2xl font-headline font-bold">{activeItem.name}</h3>
              </div>
            </div>

            {/* Categories & Sub-items */}
            <div className="space-y-8">
              <Tabs value={activeCategory} onValueChange={handleCategoryChange} className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  {categories.map((category) => (
                    <TabsTrigger key={category.name} value={category.name} className="text-base font-headline">
                      {category.name}
                    </TabsTrigger>
                  ))}
                </TabsList>
                {categories.map((category) => (
                  <TabsContent key={category.name} value={category.name}>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4">
                      {category.items.map((item) => (
                        <button
                          key={item.name}
                          onClick={() => setActiveItem(item)}
                          className={cn(
                            "relative aspect-square w-full overflow-hidden rounded-md border-2 transition-all duration-300 group",
                            activeItem.name === item.name ? "border-primary shadow-lg" : "border-transparent hover:border-primary/50 hover:scale-105"
                          )}
                        >
                          <Image
                            src={item.imageUrl}
                            alt={item.name}
                            data-ai-hint={item.imageHint}
                            fill
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <span className="text-white text-sm font-bold text-center p-1">{item.name}</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </div>
          </div>
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
}
