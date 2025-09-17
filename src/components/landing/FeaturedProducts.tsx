
'use client';

import { products as allProducts } from '@/lib/placeholder-data';
import ProductCard from '../products/ProductCard';
import { Button } from '../ui/button';
import Link from 'next/link';
import ScrollAnimationWrapper from '../animations/ScrollAnimationWrapper';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState, useMemo } from 'react';
import { ScrollArea } from '../ui/scroll-area';

export default function FeaturedProducts() {
  const categories = [
    'All',
    'Modular Kitchen Design',
    'Wardrobe Design',
    'Master bedroom design',
    'Kids Room Design',
    'Kitchen wall design'
  ];
  const [activeTab, setActiveTab] = useState(categories[0]);

  const productsWithImages = useMemo(() => allProducts.map(product => {
    let imageUrl;
    switch(product.id) {
        case 'prod_1':
            imageUrl = "/l-shaped-contemporary-kitchen-design-with-full-height-cabinets-and-granite-countertop.jpg";
            break;
        case 'prod_2':
            imageUrl = "/white-modern-2-door-swing-wardrobe-design-with-integrated-study-table.jpg";
            break;
        case 'prod_3':
            imageUrl = "/modern-master-bedroom-design-with-a-brown-tufted-headboard.jpg";
            break;
        case 'prod_4':
            imageUrl = "/art-deco-kids-bedroom-design-with-arc-pink-panels-and-white-frame.jpg";
            break;
        case 'prod_5':
            imageUrl = "/modern-parallel-kitchen-design-with-open-shelves-and-backsplash-tiles.jpg";
            break;
        default:
            imageUrl = `https://picsum.photos/seed/${product.id}/600/600`;
    }

    return {
      ...product,
      imageUrl,
      imageHint: 'furniture piece'
    }
  }), []);

  const filteredProducts = useMemo(() => {
    if (activeTab === 'All') {
      return productsWithImages.slice(0, 16);
    }
    const productsForCategory = productsWithImages.filter(p => p.category === activeTab);
    return productsForCategory.slice(0, 16);
  }, [activeTab, productsWithImages]);


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
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <div className="flex justify-center mb-8">
                  <ScrollArea className="w-full whitespace-nowrap rounded-lg">
                    <TabsList className="h-auto bg-transparent p-0">
                        {categories.map(category => (
                             <TabsTrigger key={category} value={category} className="text-base mx-2 first:ml-0 last:mr-0 data-[state=active]:shadow-none data-[state=active]:bg-accent data-[state=active]:text-primary">{category}</TabsTrigger>
                        ))}
                    </TabsList>
                  </ScrollArea>
                </div>
                {categories.map(category => (
                  <TabsContent key={category} value={category}>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                          {filteredProducts.map((product) => (
                              <div key={product.id}>
                                  <ProductCard product={product} />
                              </div>
                          ))}
                      </div>
                  </TabsContent>
                ))}
            </Tabs>
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
