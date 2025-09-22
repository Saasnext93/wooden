
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ScrollAnimationWrapper from '../animations/ScrollAnimationWrapper';
import { cn } from '@/lib/utils';

const layouts = [
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
];

export default function KitchenLayouts() {
  const [activeTab, setActiveTab] = useState(layouts[3].name);

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <ScrollAnimationWrapper className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary mb-2">
            Our range of modular kitchen layouts
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We've created a range of layouts that offer functional, stylish solutions to perfectly suit your needs.
          </p>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper delay={200}>
          <Tabs value={activeTab} onValueChange={setActiveTab} orientation="vertical" className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <TabsList className="flex flex-col h-auto justify-start items-stretch bg-transparent p-0 space-y-2">
              {layouts.map((layout) => (
                <TabsTrigger
                  key={layout.name}
                  value={layout.name}
                  className={cn(
                    "w-full text-left justify-start p-4 rounded-lg text-lg font-medium transition-all duration-300",
                    "data-[state=active]:bg-red-500 data-[state=active]:text-white data-[state=active]:shadow-lg",
                    "hover:bg-accent hover:text-primary"
                  )}
                >
                  {layout.name}
                </TabsTrigger>
              ))}
            </TabsList>

            <div className="md:col-span-3 relative min-h-[400px] md:min-h-[500px]">
              {layouts.map((layout) => (
                <TabsContent key={layout.name} value={layout.name} className="absolute inset-0 m-0 p-0 h-full w-full">
                   <div className="relative h-full w-full overflow-hidden rounded-lg shadow-2xl">
                     <Image
                        src={layout.imageUrl}
                        alt={layout.name}
                        data-ai-hint={layout.imageHint}
                        fill
                        className={cn(
                            "object-cover transition-opacity duration-500",
                            activeTab === layout.name ? "opacity-100" : "opacity-0"
                        )}
                        priority={layout.name === 'Parallel'}
                      />
                   </div>
                </TabsContent>
              ))}
            </div>
          </Tabs>
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
}
