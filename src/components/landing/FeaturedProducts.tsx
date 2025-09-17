'use client';

import { products as allProducts } from '@/lib/placeholder-data';
import ProductCard from '../products/ProductCard';
import { Button } from '../ui/button';
import Link from 'next/link';
import ScrollAnimationWrapper from '../animations/ScrollAnimationWrapper';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState, useMemo } from 'react';

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
  }), []);

  const filteredProducts = useMemo(() => {
    // Since the new categories don't match product data, we'll show a selection for all tabs.
    // This can be updated later when product data matches the new categories.
    if (activeTab === 'All') {
      return productsWithImages.slice(0, 16);
    }
    // For other tabs, we'll show a different slice of products as a placeholder.
    // This logic should be updated when products have the new categories.
    const productsForCategory = productsWithImages.filter(p => {
        // A real implementation would filter by the activeTab
        // For now, we'll just cycle through products.
        return true;
    });
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
                    <TabsList className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 h-auto">
                        {categories.map(category => (
                             <TabsTrigger key={category} value={category} className="text-xs sm:text-sm">{category}</TabsTrigger>
                        ))}
                    </TabsList>
                </div>
                <TabsContent value={activeTab}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {filteredProducts.map((product) => (
                            <div key={product.id}>
                                <ProductCard product={product} />
                            </div>
                        ))}
                    </div>
                </TabsContent>
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
