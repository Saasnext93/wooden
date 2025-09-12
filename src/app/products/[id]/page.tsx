'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';
import { products as allProducts } from '@/lib/placeholder-data';
import { Button } from '@/components/ui/button';
import { Star, Truck, ShieldCheck, Phone } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

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

  const imageUrl = `https://picsum.photos/seed/${product.id}/1600/900`;
  const imageHint = 'furniture piece';

  return (
    <div>
        {/* Hero Section */}
        <section className="relative h-[60vh] md:h-[70vh] w-full flex items-center justify-center text-white">
            <Image
                src={imageUrl}
                alt={product.name}
                data-ai-hint={imageHint}
                fill
                className="object-cover"
                priority
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="relative z-10 text-center p-4">
                <h1 className="text-4xl md:text-6xl font-headline font-bold mb-4 drop-shadow-md">
                    {product.name}
                </h1>
            </div>
        </section>

        {/* Product Details Section */}
        <section className="container mx-auto px-4 py-16 md:py-24">
            <div className="grid md:grid-cols-2 gap-12">
                {/* Left Column: Description & Rating */}
                <div>
                    <h2 className="text-2xl font-headline font-bold text-primary mb-4">Product Details</h2>
                    <p className="text-lg text-muted-foreground mb-6">{product.description}</p>
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1 text-yellow-500">
                        <Star className="w-5 h-5 fill-current" />
                        <span className="font-bold text-lg text-foreground">{product.rating}</span>
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
