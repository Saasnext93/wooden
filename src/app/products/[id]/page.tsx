'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Star, Truck, ShieldCheck, Phone } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

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
    imageUrl: "/l-shaped-contemporary-kitchen-design-with-full-height-cabinets-and-granite-countertop.jpg",
    imageHint: 'l-shaped kitchen'
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
    imageUrl: "/white-modern-2-door-swing-wardrobe-design-with-integrated-study-table.jpg",
    imageHint: 'modern wardrobe'
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
    imageUrl: "/contemporary-boys-room-design-with-glossy-beige-wardrobe.jpg",
    imageHint: 'master bedroom'
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
    status_label: ' arriving soon',
    imageUrl: "/art-deco-kids-bedroom-design-with-arc-pink-panels-and-white-frame.jpg",
    imageHint: 'kids bedroom'
  },
  {
    id: 'prod_5',
    name: 'Parallel Kitchen Design',
    description: 'Designed for comfort and style, this chair features a beautiful ash wood frame and leather seat.',
    price: 530,
    imageId: 'product5',
    category: 'Kitchen wall design',
    material: 'Ash',
    rating: 4.8,
    status: 'Pre-Order',
    status_label: ' new design',
    imageUrl: "/modern-parallel-kitchen-design-with-open-shelves-and-backsplash-tiles.jpg",
    imageHint: 'parallel kitchen'
  },
  {
    id: 'prod_6',
    name: 'Modern Kitchen Wall Design',
    description: 'Gather your family around this stunning round dining table, crafted from dark walnut for a dramatic effect.',
    price: 1400,
    imageId: 'product6',
    category: 'Kitchen wall design',
    material: 'Walnut',
    rating: 4.9,
    status: 'New Arrival',
    imageUrl: "/u-shaped-contemporary-kitchen-design-with-led-lights-and-quartz-countertops.jpg",
    imageHint: 'kitchen wall design'
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
    imageUrl: "/modern-bedroom-design-with-a-double-bed-and-an-ottoman-bench.jpg",
    imageHint: 'bunk bed'
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
    imageUrl: "/white-modern-2-door-swing-wardrobe-design-with-integrated-study-table.jpg",
    imageHint: 'swing wardrobe'
  },
];


export default function ProductDetailPage() {
  const params = useParams();
  const { id } = params;
  const [reviewCount, setReviewCount] = useState<number | null>(null);

  useEffect(() => {
    // Generate random number only on the client-side after mounting
    setReviewCount(Math.floor(Math.random() * 50) + 10);
  }, []);

  const product = allProducts.find(p => p.id === id);

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

  const { name, description, rating, imageUrl, imageHint, category } = product;

  return (
    <div>
        {/* Hero Section */}
        <section className="relative h-[60vh] md:h-[70vh] w-full flex items-center justify-center text-white">
            {imageUrl &&
              <Image
                  src={imageUrl}
                  alt={name}
                  data-ai-hint={imageHint}
                  fill
                  className="object-cover"
                  priority
              />
            }
            <div className="absolute inset-0 bg-black/40" />
            <div className="relative z-10 text-center p-4">
                <p className="text-lg md:text-xl font-body uppercase tracking-widest">{category}</p>
                <h1 className="text-4xl md:text-6xl font-headline font-bold mb-4 drop-shadow-md">
                    {name}
                </h1>
            </div>
        </section>

        {/* Product Details Section */}
        <section className="container mx-auto px-4 py-16 md:py-24">
            <div className="grid md:grid-cols-2 gap-12">
                {/* Left Column: Description & Rating */}
                <div>
                    <h2 className="text-2xl font-headline font-bold text-primary mb-4">Product Details</h2>
                    <p className="text-lg text-muted-foreground mb-6">{description}</p>
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1 text-yellow-500">
                        <Star className="w-5 h-5 fill-current" />
                        <span className="font-bold text-lg text-foreground">{rating}</span>
                        </div>
                        {reviewCount !== null && (
                          <span className="text-sm text-muted-foreground">({reviewCount} reviews)</span>
                        )}
                    </div>
                </div>

                {/* Right Column: Actions & Features */}
                <div className="space-y-8">
                    <div>
                        <h2 className="text-2xl font-headline font-bold text-primary mb-4">Request a Quote</h2>
                        <p className="text-muted-foreground mb-6">Interested in this piece? Add it to your quote request, and our team will get in touch with you.</p>
                        <Button size="lg" className="w-full text-lg">
                            Add to Quote
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
  );
}
