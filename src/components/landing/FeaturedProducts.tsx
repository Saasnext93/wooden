
'use client';

import ProductCard from '../products/ProductCard';
import { Button } from '../ui/button';
import Link from 'next/link';
import ScrollAnimationWrapper from '../animations/ScrollAnimationWrapper';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState, useMemo } from 'react';
import { ScrollArea, ScrollBar } from '../ui/scroll-area';

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
    category: 'Modular Kitchen Design',
    material: 'Ash',
    rating: 4.8,
    status: 'Pre-Order',
    status_label: ' new design'
  },
  {
    id: 'prod_6',
    name: 'U-Shaped Kitchen Design',
    description: 'Gather your family around this stunning round dining table, crafted from dark walnut for a dramatic effect.',
    price: 1400,
    imageId: 'product6',
    category: 'Modular Kitchen Design',
    material: 'Walnut',
    rating: 4.9,
    status: 'New Arrival',
  },
  {
    id: 'prod_7',
    name: 'Kids Bedroom with Bunk Bed',
    description: 'A touch of luxury for any room. This plush velvet ottoman comes in a variety of rich colors.',
    price: 320,
    imageId: 'product7',
    category: 'Kids Room Design',
    material: 'Velvet',
    rating: 4.5,
    status: 'New Arrival',
  },
  {
    id: 'prod_8',
    name: 'Swing Wardrobe with Study Table',
    description: 'Solid oak floating shelves that provide a clean, modern way to display decor.',
    price: 180,
    imageId: 'product8',
    category: 'Wardrobe Design',
    material: 'Oak',
    rating: 4.7,
    status: 'In Stock',
  },
];


export default function FeaturedProducts() {
  const categories = [
    'All',
    'Modular Kitchen Design',
    'Wardrobe Design',
    'Master bedroom design',
    'Kids Room Design',
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
            imageUrl = "/contemporary-boys-room-design-with-glossy-beige-wardrobe.jpg";
            break;
        case 'prod_4':
            imageUrl = "/art-deco-kids-bedroom-design-with-arc-pink-panels-and-white-frame.jpg";
            break;
        case 'prod_5':
            imageUrl = "/modern-parallel-kitchen-design-with-open-shelves-and-backsplash-tiles.jpg";
            break;
        case 'prod_6':
            imageUrl = "/u-shaped-contemporary-kitchen-design-with-led-lights-and-quartz-countertops.jpg";
            break;
        case 'prod_7':
            imageUrl = "/modern-bedroom-design-with-a-double-bed-and-an-ottoman-bench.jpg";
            break;
        case 'prod_8':
            imageUrl = "/white-modern-2-door-swing-wardrobe-design-with-integrated-study-table.jpg";
            break;
        default:
            imageUrl = `/modern-parallel-kitchen-design-with-open-shelves-and-backsplash-tiles.jpg`;
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
                    <ScrollBar orientation="horizontal" />
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
