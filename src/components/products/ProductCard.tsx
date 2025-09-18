import Image from 'next/image';
import { Star } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { Product } from '@/lib/types';
import { Button } from '../ui/button';
import Link from 'next/link';

interface ProductCardProps {
  product: Product & { imageUrl?: string, imageHint?: string };
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="h-full flex flex-col overflow-hidden group transition-shadow hover:shadow-xl">
      <Link href={`/products/${product.id}`} className="block">
        <CardHeader className="p-0 relative aspect-square">
          {product.imageUrl && (
            <Image
              src={product.imageUrl}
              alt={product.name}
              data-ai-hint={product.imageHint}
              width={600}
              height={600}
              className="object-cover w-full h-full transition-transform group-hover:scale-105 duration-300"
            />
          )}
        </CardHeader>
      </Link>
      <CardContent className="p-4 flex-grow flex flex-col">
        <Link href={`/products/${product.id}`} className="block">
          <CardTitle className="text-lg font-headline leading-tight mb-2 min-h-[2.5rem]">{product.name}</CardTitle>
        </Link>
        <div className="flex items-center justify-between text-sm text-muted-foreground mt-auto">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-yellow-500 fill-current" />
            <span>{product.rating}</span>
          </div>
          <Button asChild variant="ghost" size="sm" className="px-2">
            <Link href="/#contact">Get Quote</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
