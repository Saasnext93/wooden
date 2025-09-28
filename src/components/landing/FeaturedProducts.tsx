

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
    name: 'Sliding Wardrobe',
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
  {
    id: 'prod_11',
    name: 'Modern Sofa',
    description: 'A comfortable and stylish sofa for your living room.',
    price: 950,
    imageId: 'product11',
    category: 'Modular Furniture',
    material: 'Fabric',
    rating: 4.8,
    status: 'In Stock',
  },
  {
    id: 'prod_12',
    name: 'Wooden TV Unit',
    description: 'A sleek and modern TV unit to organize your entertainment space.',
    price: 350,
    imageId: 'product12',
    category: 'Modular Furniture',
    material: 'Wood',
    rating: 4.7,
    status: 'In Stock',
  },
  {
    id: 'prod_13',
    name: 'Modern Bookshelf',
    description: 'A stylish and functional bookshelf to display your favorite reads.',
    price: 450,
    imageId: 'product13',
    category: 'Modular Furniture',
    material: 'Wood',
    rating: 4.8,
    status: 'In Stock',
  },
  {
    id: 'prod_14',
    name: 'Ergonomic Study Table',
    description: 'A comfortable and ergonomic table for your study or home office.',
    price: 550,
    imageId: 'product14',
    category: 'Modular Furniture',
    material: 'Wood',
    rating: 4.9,
    status: 'New Arrival',
  },
  {
    id: 'prod_15',
    name: 'Modern TV Unit',
    description: 'A comfortable and ergonomic table for your study or home office.',
    price: 550,
    imageId: 'product15',
    category: 'Modular Furniture',
    material: 'Wood',
    rating: 4.9,
    status: 'New Arrival',
  },
  {
    id: 'prod_16',
    name: 'Floating TV Unit',
    description: 'A comfortable and ergonomic table for your study or home office.',
    price: 550,
    imageId: 'product16',
    category: 'Modular Furniture',
    material: 'Wood',
    rating: 4.9,
    status: 'New Arrival',
  },
  {
    id: 'prod_17',
    name: 'Classic TV Unit',
    description: 'A comfortable and ergonomic table for your study or home office.',
    price: 550,
    imageId: 'product17',
    category: 'Modular Furniture',
    material: 'Wood',
    rating: 4.9,
    status: 'New Arrival',
  },
  {
    id: 'prod_18',
    name: 'Minimalist TV Unit',
    description: 'A comfortable and ergonomic table for your study or home office.',
    price: 550,
    imageId: 'product18',
    category: 'Modular Furniture',
    material: 'Wood',
    rating: 4.9,
    status: 'New Arrival',
  },
  {
    id: 'prod_19',
    name: 'L-Shaped Sofa',
    description: 'A comfortable and stylish sofa for your living room.',
    price: 550,
    imageId: 'product19',
    category: 'Modular Furniture',
    material: 'Fabric',
    rating: 4.9,
    status: 'New Arrival',
  },
  {
    id: 'prod_20',
    name: 'Sofa Cum Bed',
    description: 'A comfortable and ergonomic table for your study or home office.',
    price: 550,
    imageId: 'product20',
    category: 'Modular Furniture',
    material: 'Fabric',
    rating: 4.9,
    status: 'New Arrival',
  },
  {
    id: 'prod_21',
    name: 'Stylish Bunk Bed',
    description: 'A comfortable and stylish 3-seater sofa upholstered in a premium linen blend fabric.',
    price: 1250,
    imageId: 'product21',
    category: 'Master bedroom design',
    material: 'Linen',
    rating: 4.7,
    status: 'In Stock',
  },
  {
    id: 'prod_22',
    name: 'Kids Bunk Bed',
    description: 'A comfortable and stylish 3-seater sofa upholstered in a premium linen blend fabric.',
    price: 1250,
    imageId: 'product22',
    category: 'Master bedroom design',
    material: 'Linen',
    rating: 4.7,
    status: 'In Stock',
  },
  {
    id: 'prod_23',
    name: 'Modern Kids Bedroom',
    description: 'A comfortable and stylish 3-seater sofa upholstered in a premium linen blend fabric.',
    price: 1250,
    imageId: 'product23',
    category: 'Master bedroom design',
    material: 'Linen',
    rating: 4.7,
    status: 'In Stock',
  },
  {
    id: 'prod_24',
    name: 'King Size Bed Design',
    description: 'A comfortable and stylish 3-seater sofa upholstered in a premium linen blend fabric.',
    price: 1250,
    imageId: 'product24',
    category: 'Master bedroom design',
    material: 'Linen',
    rating: 4.7,
    status: 'In Stock',
  },
  {
    id: 'prod_25',
    name: 'Queen Size Bed Design',
    description: 'A comfortable and stylish 3-seater sofa upholstered in a premium linen blend fabric.',
    price: 1250,
    imageId: 'product25',
    category: 'Master bedroom design',
    material: 'Linen',
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
    'Modular Furniture',
  ];
  const [activeTab, setActiveTab] = useState(categories[0]);

  const productsWithImages = useMemo(() => allProducts.map(product => {
    let imageUrl;
    switch(product.id) {
        case 'prod_1':
            imageUrl = "/MODULERKITCHEN/LShape/image1.jpg";
            break;
        case 'prod_2':
            imageUrl = "/modern-3-door-swing-wardrobe-design-with-integrated-study-table.jpg";
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
        case 'prod_11':
            imageUrl = "/sofa.jpg";
            break;
        case 'prod_12':
            imageUrl = "/tv-unit.jpg";
            break;
        case 'prod_13':
            imageUrl = "/bookshelf.jpg";
            break;
        case 'prod_14':
            imageUrl = "/study-table.jpg";
            break;
        case 'prod_15':
            imageUrl = "/MODULERFURNITURE/TVUNITS/img1.jpg";
            break;  
        case 'prod_16':
              imageUrl = "/MODULERFURNITURE/TVUNITS/img4.jpg";
              break;   
              
        case 'prod_17':
            imageUrl = "/MODULERFURNITURE/TVUNITS/img2.jpg";
            break;
        case 'prod_18':
            imageUrl = "/MODULERFURNITURE/TVUNITS/img3.jpg";
            break;
        case 'prod_19':
              imageUrl = "/MODULERFURNITURE/SOFAS/img3.jpg";
              break;
        case 'prod_20':
                imageUrl = "/MODULERFURNITURE/SOFAS/img4.jpg";
                break;

        case 'prod_21':
                  imageUrl = "/BEDROOMS/BUNKBEDS/img4.jpg";
                  break;
        case 'prod_22':
                imageUrl = "/BEDROOMS/BUNKBEDS/img2.jpg";
                    break;
        case 'prod_23':
                      imageUrl = "/BEDROOMS/KIDS/img2.jpg";
                      break;
        case 'prod_24':
                        imageUrl = "/BEDROOMS/MASTERBEDROOM/img2.jpg";
                        break;
        case 'prod_25':
                          imageUrl = "/BEDROOMS/MASTERBEDROOM/img1.jpg";
                          break;
        default:
            imageUrl = "/modern-parallel-kitchen-design-with-open-shelves-and-backsplash-tiles.jpg";
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
                  <ScrollArea className="w-full whitespace-nowrap rounded-lg md:w-auto">
                    <TabsList className="h-auto bg-transparent p-0 flex-wrap md:flex-nowrap md:h-10">
                        {categories.map(category => (
                             <TabsTrigger key={category} value={category} className="text-base mx-2 my-1 md:my-0 first:ml-0 last:mr-0 data-[state=active]:shadow-none data-[state=active]:bg-accent data-[state=active]:text-primary">{category}</TabsTrigger>
                        ))}
                    </TabsList>
                    <ScrollBar orientation="horizontal" className="hidden md:flex" />
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
