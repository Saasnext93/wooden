
'use client';

import { useState } from 'react';
import Image from 'next/image';
import ScrollAnimationWrapper from '../animations/ScrollAnimationWrapper';
import { cn } from '@/lib/utils';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';

const categories = [
  {
    name: 'Modular Kitchens',
    items: [
        {
            name: 'Straight',
            imageUrl: 'https://images.unsplash.com/photo-1588854337236-6889d631faa8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxtb2R1bGFyJTIwa2l0Y2hlbnxlbnwwfHx8fDE3NTg1NjYzODh8MA&ixlib=rb-4.1.0&q=80&w=1080',
            imageHint: 'straight kitchen layout',
        },
        {
            name: 'L-shape',
            imageUrl: 'https://images.unsplash.com/photo-1662454419716-c4c504728811?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHwlMjBtb2R1bGFyJTIwYmVkcm9vbXxlbnwwfHx8fDE3NTg1NjY0ODl8MA&ixlib=rb-4.1.0&q=80&w=1080',
            imageHint: 'L-shaped kitchen layout',
        },
        {
            name: 'U-shape',
            imageUrl: 'https://images.unsplash.com/photo-1721825176413-eea9d1e8ae8d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxOHx8bW9kdWxhciUyMGJlZHJvb218ZW58MHx8fHwxNzU4NTY2NTgzfDA&ixlib=rb-4.1.0&q=80&w=1080',
            imageHint: 'U-shaped kitchen layout',
        },
        {
            name: 'Parallel',
            imageUrl: 'https://images.unsplash.com/photo-1559554704-0f74b35a8718?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxtb2R1bGFyJTIwa2l0Y2hlbnxlbnwwfHx8fDE3NTg1NjYzODh8MA&ixlib=rb-4.1.0&q=80&w=1080',
            imageHint: 'parallel kitchen layout',
        },
        {
            name: 'Island',
            imageUrl: 'https://images.unsplash.com/photo-1586208958839-06c17cacdf08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxM3x8bW9kdWxhciUyMGtpdGNoZW58ZW58MHx8fHwxNzU4NTY2Mzg4fDA&ixlib=rb-4.1.0&q=80&w=1080',
            imageHint: 'island kitchen layout',
        },
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

const allItems = categories.flatMap(c => c.items);

export default function ProductShowcase() {
  const [activeItem, setActiveItem] = useState(allItems[3]);

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
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <Accordion type="multiple" defaultValue={['Modular Kitchens', 'Wardrobes', 'Bedrooms']} className="w-full md:col-span-1">
              {categories.map((category) => (
                <AccordionItem value={category.name} key={category.name}>
                  <AccordionTrigger className="text-xl font-headline hover:no-underline">
                    {category.name}
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="flex flex-col items-start space-y-1 pl-2">
                        {category.items.map((item) => (
                        <button
                            key={item.name}
                            onClick={() => setActiveItem(item)}
                            className={cn(
                            "w-full text-left p-2 rounded-md text-base transition-colors duration-200",
                            activeItem.name === item.name ? "bg-accent text-primary font-semibold" : "hover:bg-accent/50"
                            )}
                        >
                            {item.name}
                        </button>
                        ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="md:col-span-3 relative min-h-[400px] md:min-h-[500px]">
                <div className="relative h-full w-full overflow-hidden rounded-lg shadow-2xl">
                    <Image
                    src={activeItem.imageUrl}
                    alt={activeItem.name}
                    data-ai-hint={activeItem.imageHint}
                    fill
                    className="object-cover transition-all duration-500"
                    key={activeItem.name}
                    priority
                    />
                </div>
            </div>
          </div>
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
}
