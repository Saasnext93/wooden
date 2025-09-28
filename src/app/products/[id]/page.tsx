

'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Star, Truck, ShieldCheck, Phone } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import type { Product } from '@/lib/types';
import QuoteModal from '@/components/products/QuoteModal';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import RelatedProducts from '@/components/products/RelatedProducts';
import { cn } from '@/lib/utils';
import WhyChooseUs from '@/components/landing/WhyChooseUs';

const allProducts: (Product & { gallery?: {url: string; hint: string}[], specifications?: {name: string; value: string}[] })[] = [
  {
    id: 'prod_1',
    name: 'L-Shaped Kitchen Design',
    description: 'A timeless, ergonomic kitchen layout that maximizes corner space, offering ample storage and a seamless workflow for a modern culinary experience.',
    price: 450,
    imageId: 'product1',
    category: 'Modular Kitchen Design',
    material: 'Oak',
    rating: 4.8,
    status: 'In Stock',
    imageUrl: "/l-shaped-contemporary-kitchen-design-with-full-height-cabinets-and-granite-countertop.jpg",
    imageHint: 'l-shaped kitchen',
    gallery: [
        { url: '/l-shaped-contemporary-kitchen-design-with-full-height-cabinets-and-granite-countertop.jpg', hint: 'kitchen overview' },
        { url: '/kitchen_close_up.jpg', hint: 'kitchen detail' },
        { url: '/kitchen_storage.jpg', hint: 'kitchen storage' },
        { url: '/kitchen_angle.jpg', hint: 'kitchen angle' },
    ],
    specifications: [
        { name: 'Primary Material', value: 'HDHMR' },
        { name: 'Finish', value: 'Glossy Laminate' },
        { name: 'Countertop', value: 'Granite' },
        { name: 'Warranty', value: '10 Years' }
    ]
  },
  {
    id: 'prod_2',
    name: 'Sliding Wardrobe',
    description: 'A sleek and spacious sliding wardrobe with a minimalist aesthetic, featuring smart organizational solutions to keep your space tidy and stylish.',
    price: 620,
    imageId: 'product2',
    category: 'Wardrobe Design',
    material: 'Walnut',
    rating: 4.9,
    status: 'In Stock',
    imageUrl: "/modern-3-door-swing-wardrobe-design-with-integrated-study-table.jpg",
    imageHint: 'modern wardrobe',
    gallery: [
        { url: '/modern-3-door-swing-wardrobe-design-with-integrated-study-table.jpg', hint: 'wardrobe front' },
        { url: 'https://images.unsplash.com/photo-1662454419716-c4c504728811?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHxtb2R1bGFyJTIwYmVkcm9vbXxlbnwwfHx8fDE3NTgzNDcwMDZ8MA&ixlib=rb-4.1.0&q=80&w=1080', hint: 'wardrobe open' },
        { url: '/wardrobe_detail.jpg', hint: 'wardrobe detail' },
        { url: '/wardrobe_side.jpg', hint: 'wardrobe side' },
    ],
    specifications: [
        { name: 'Primary Material', value: 'Plywood' },
        { name: 'Finish', value: 'Matte Laminate' },
        { name: 'Doors', value: '2 Sliding Doors' },
        { name: 'Warranty', value: '11 Years' }
    ]
  },
  {
    id: 'prod_3',
    name: 'Master Bedroom Design',
    description: 'A luxurious and comfortable master bedroom set, designed to be a serene retreat for ultimate relaxation and peaceful nights.',
    price: 1250,
    imageId: 'product3',
    category: 'Master bedroom design',
    material: 'Linen',
    rating: 4.7,
    status: 'In Stock',
    imageUrl: "/contemporary-boys-room-design-with-glossy-beige-wardrobe.jpg",
    imageHint: 'master bedroom',
     gallery: [
        { url: '/contemporary-boys-room-design-with-glossy-beige-wardrobe.jpg', hint: 'bedroom overview' },
        { url: '/bedroom_bed.jpg', hint: 'bedroom bed' },
        { url: '/bedroom_storage.jpg', hint: 'bedroom storage' },
        { url: '/bedroom_detail.jpg', hint: 'bedroom decor' },
    ],
    specifications: [
        { name: 'Bed Size', value: 'Queen' },
        { name: 'Headboard Material', value: 'Upholstered Fabric' },
        { name: 'Wardrobe Finish', value: 'Glossy Laminate' },
        { name: 'Warranty', value: '10 Years' }
    ]
  },
  {
    id: 'prod_4',
    name: 'Art Deco Kids Bedroom',
    description: 'A playful and stylish bedroom design that sparks creativity, featuring bold geometric patterns and vibrant colors for the modern kid.',
    price: 780,
    imageId: 'product4',
    category: 'Kids Room Design',
    material: 'Pine',
    rating: 4.6,
    status: 'Pre-Order',
    status_label: ' arriving soon',
    imageUrl: "/art-deco-kids-bedroom-design-with-arc-pink-panels-and-white-frame.jpg",
    imageHint: 'kids bedroom'
  },
  {
    id: 'prod_5',
    name: 'Parallel Kitchen Design',
    description: 'An efficient and compact galley-style kitchen, perfect for smaller spaces while providing an excellent and ergonomic workflow.',
    price: 530,
    imageId: 'product5',
    category: 'Modular Kitchen Design',
    material: 'Ash',
    rating: 4.8,
    status: 'Pre-Order',
    status_label: ' new design',
    imageUrl: "/modern-parallel-kitchen-design-with-open-shelves-and-backsplash-tiles.jpg",
    imageHint: 'parallel kitchen'
  },
  {
    id: 'prod_6',
    name: 'U-Shaped Kitchen Design',
    description: 'A spacious and versatile U-shaped kitchen layout that offers abundant counter space and storage, perfect for busy family kitchens.',
    price: 1400,
    imageId: 'product6',
    category: 'Modular Kitchen Design',
    material: 'Walnut',
    rating: 4.9,
    status: 'New Arrival',
    imageUrl: "/u-shaped-contemporary-kitchen-design-with-led-lights-and-quartz-countertops.jpg",
    imageHint: 'u-shaped kitchen'
  },
  {
    id: 'prod_7',
    name: 'Kids Bedroom with Bunk Bed',
    description: 'A space-saving and fun bunk bed design that maximizes floor space, making it ideal for shared kids\' rooms and sleepovers.',
    price: 320,
    imageId: 'product7',
    category: 'Kids Room Design',
    material: 'Velvet',
    rating: 4.5,
    status: 'New Arrival',
    imageUrl: "/modern-bedroom-design-with-a-double-bed-and-an-ottoman-bench.jpg",
    imageHint: 'bunk bed'
  },
  {
    id: 'prod_8',
    name: 'Swing Wardrobe with Study Table',
    description: 'A multifunctional and space-efficient swing wardrobe that includes an integrated study table, perfect for bedrooms or home offices.',
    price: 180,
    imageId: 'product8',
    category: 'Wardrobe Design',
    material: 'Oak',
    rating: 4.7,
    status: 'In Stock',
    imageUrl: "/white-modern-2-door-swing-wardrobe-design-with-integrated-study-table.jpg",
    imageHint: 'swing wardrobe'
  },
  {
    id: 'prod_9',
    name: 'Straight Kitchen Design',
    description: 'A sleek and simple straight-line kitchen, perfect for minimalist and modern homes with limited space.',
    price: 400,
    imageId: 'product9',
    category: 'Modular Kitchen Design',
    material: 'MDF',
    rating: 4.6,
    status: 'In Stock',
    imageUrl: "/straight-kitchen-design.jpg",
    imageHint: 'straight kitchen'
  },
  {
    id: 'prod_10',
    name: 'Island Kitchen Design',
    description: 'A contemporary kitchen featuring a central island, providing extra workspace and a social hub for the home.',
    price: 1600,
    imageId: 'product10',
    category: 'Modular Kitchen Design',
    material: 'Quartz',
    rating: 4.9,
    status: 'New Arrival',
    imageUrl: "/island-kitchen-design.jpg",
    imageHint: 'island kitchen'
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
    imageUrl: "/sofa.jpg",
    imageHint: 'modern sofa'
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
    imageUrl: "/tv-unit.jpg",
    imageHint: 'tv unit'
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
    imageUrl: "/bookshelf.jpg",
    imageHint: 'bookshelf'
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
    imageUrl: "/study-table.jpg",
    imageHint: 'study table'
  },
];


export default function ProductDetailPage() {
  const params = useParams();
  const { id } = params;
  const [reviewCount, setReviewCount] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const product = allProducts.find(p => p.id === id);
  const [activeImage, setActiveImage] = useState(product?.gallery?.[0]?.url || product?.imageUrl);

  useEffect(() => {
    setReviewCount(Math.floor(Math.random() * 50) + 10);
  }, []);

  useEffect(() => {
    const currentProduct = allProducts.find(p => p.id === id);
    setActiveImage(currentProduct?.gallery?.[0]?.url || currentProduct?.imageUrl);
  }, [id]);


  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold">Product not found</h1>
        <p className="text-muted-foreground mt-4">We couldn't find the product you're looking for.</p>
        <Button asChild className="mt-8">
            <Link href="/products">Back to Products</Link>
        </Button>
      </div>
    );
  }

  const { name, description, rating, category, gallery, specifications } = product;

  const relatedProducts = allProducts.filter(p => p.category === category && p.id !== id).slice(0, 3);

  return (
    <>
      <div className="container mx-auto px-4 py-12 md:py-16">
          {/* Main Product Section */}
          <section className="grid md:grid-cols-2 gap-8 md:gap-12">
              {/* Image Gallery */}
              <div className="space-y-4">
                  <div className="relative aspect-square w-full overflow-hidden rounded-lg shadow-lg">
                      {activeImage && (
                          <Image
                              src={activeImage}
                              alt={name}
                              data-ai-hint={product.imageHint}
                              fill
                              className="object-cover transition-opacity duration-300"
                              priority
                              key={activeImage}
                          />
                      )}
                  </div>
                  {gallery && gallery.length > 1 && (
                      <div className="grid grid-cols-4 gap-4">
                          {gallery.map((img) => (
                              <button
                                  key={img.url}
                                  onClick={() => setActiveImage(img.url)}
                                  className={cn(
                                      "relative aspect-square w-full overflow-hidden rounded-md border-2 transition-colors",
                                      activeImage === img.url ? "border-primary" : "border-transparent hover:border-primary/50"
                                  )}
                              >
                                  <Image
                                      src={img.url}
                                      alt={name}
                                      data-ai-hint={img.hint}
                                      fill
                                      className="object-cover"
                                  />
                              </button>
                          ))}
                      </div>
                  )}
              </div>

              {/* Product Info */}
              <div>
                  <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">{category}</p>
                  <h1 className="text-3xl md:text-4xl font-headline font-bold text-primary my-2">{name}</h1>
                  <div className="flex items-center gap-4 mb-6">
                      <div className="flex items-center gap-1 text-yellow-500">
                          <Star className="w-5 h-5 fill-current" />
                          <span className="font-bold text-lg text-foreground">{rating}</span>
                      </div>
                      {reviewCount !== null && (
                          <span className="text-sm text-muted-foreground">({reviewCount} reviews)</span>
                      )}
                  </div>
                  
                  <Tabs defaultValue="description" className="w-full">
                        <TabsList>
                            <TabsTrigger value="description">Description</TabsTrigger>
                            {specifications && <TabsTrigger value="specs">Specifications</TabsTrigger>}
                        </TabsList>
                        <TabsContent value="description" className="py-4 text-base text-foreground/80 min-h-[120px]">
                           {description}
                        </TabsContent>
                        {specifications && (
                            <TabsContent value="specs" className="py-4 min-h-[120px]">
                                <ul className="space-y-2 text-foreground/80">
                                    {specifications.map(spec => (
                                        <li key={spec.name} className="flex justify-between">
                                            <span className="font-semibold text-foreground/90">{spec.name}:</span>
                                            <span>{spec.value}</span>
                                        </li>
                                    ))}
                                </ul>
                            </TabsContent>
                        )}
                  </Tabs>

                  <div className="space-y-8 mt-6">
                      <div>
                          <Button size="lg" className="w-full text-lg" onClick={() => setIsModalOpen(true)}>
                              Request a Quote
                          </Button>
                      </div>
                       <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                          <div className="flex flex-col items-center p-4 bg-accent/50 rounded-lg">
                              <Truck className="w-6 h-6 mb-2 text-primary" />
                              <span className="text-sm font-semibold">Fast Delivery</span>
                          </div>
                          <div className="flex flex-col items-center p-4 bg-accent/50 rounded-lg">
                              <ShieldCheck className="w-6 h-6 mb-2 text-primary" />
                              <span className="text-sm font-semibold">Quality Assured</span>
                          </div>
                          <div className="flex flex-col items-center p-4 bg-accent/50 rounded-lg">
                              <Phone className="w-6 h-6 mb-2 text-primary" />
                              <span className="text-sm font-semibold">Expert Support</span>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
      </div>

      {/* Why Choose Us Section */}
      <WhyChooseUs />

       {/* Related Products Section */}
      {relatedProducts.length > 0 && <RelatedProducts products={relatedProducts} />}

      <QuoteModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        productName={product.name} 
      />
    </>
  );
}
