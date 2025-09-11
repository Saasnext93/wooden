import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import type { Product } from '@/lib/types';
import Link from 'next/link';

interface NewProductCardProps {
  product: Product & { imageUrl?: string, imageHint?: string };
}

export default function NewProductCard({ product }: NewProductCardProps) {
  const isDark = product.id === 'prod_4';

  return (
    <Link href={`/products/${product.id}`} className="block h-full">
      <Card className={`h-full flex flex-col overflow-hidden group transition-shadow hover:shadow-xl rounded-2xl ${isDark ? 'bg-black text-white' : 'bg-neutral-100'}`}>
        <CardContent className="p-4 flex-grow flex flex-col">
          <div className="text-sm font-medium uppercase text-muted-foreground">{product.status}{product.status_label}</div>
          <h3 className="text-xl font-bold my-1 flex-grow">{product.name}</h3>
          <div className="relative flex-grow flex items-center justify-center mt-4 h-64">
            {product.imageUrl && (
              <Image
                src={product.imageUrl}
                alt={product.name}
                data-ai-hint={product.imageHint}
                fill
                className="object-cover transition-transform group-hover:scale-105 duration-300 rounded-lg"
              />
            )}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
