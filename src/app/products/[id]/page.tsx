'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';
import { products as allProducts } from '@/lib/placeholder-data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Star, Truck, ShieldCheck, Phone } from 'lucide-react';
import Link from 'next/link';

export default function ProductDetailPage() {
  const params = useParams();
  const { id } = params;

  const product = allProducts.find(p => p.id === id);
  const placeholderImage = product ? PlaceHolderImages.find(p => p.id === product.imageId) : undefined;

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

  const imageUrl = placeholderImage?.imageUrl ?? `https://picsum.photos/seed/${product.id}/800/800`;
  const imageHint = placeholderImage?.imageHint ?? 'furniture piece';

  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Product Image */}
        <div className="relative aspect-square rounded-lg shadow-lg overflow-hidden">
          <Image
            src={imageUrl}
            alt={product.name}
            data-ai-hint={imageHint}
            fill
            className="object-cover"
          />
        </div>

        {/* Product Details */}
        <div className="flex flex-col h-full">
          <h1 className="text-3xl md:text-4xl font-headline font-bold text-primary mb-2">{product.name}</h1>
          
          <div className="flex items-center gap-4 mb-4">
            <div className="flex items-center gap-1 text-yellow-500">
              <Star className="w-5 h-5 fill-current" />
              <span className="font-bold text-lg text-foreground">{product.rating}</span>
            </div>
            <span className="text-sm text-muted-foreground">({Math.floor(Math.random() * 50) + 10} reviews)</span>
          </div>
          
          <p className="text-lg text-muted-foreground mb-6">{product.description}</p>
          
          <div className="text-4xl font-bold text-primary mb-6">${product.price.toFixed(2)}</div>

          <div className="mt-auto space-y-6">
             <Button size="lg" className="w-full text-lg">
                Add to Quote
            </Button>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center mt-6">
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
      </div>
    </div>
  );
}
