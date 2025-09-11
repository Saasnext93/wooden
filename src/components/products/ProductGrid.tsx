import type { Product } from '@/lib/types';
import ProductCard from './ProductCard';

interface ProductGridProps {
  products: (Product & { imageUrl?: string, imageHint?: string })[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center text-center h-full min-h-[40vh] border-2 border-dashed rounded-lg p-8">
        <h3 className="text-xl font-semibold text-primary">No Products Found</h3>
        <p className="text-muted-foreground mt-2">
          Try adjusting your search or filter criteria.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
