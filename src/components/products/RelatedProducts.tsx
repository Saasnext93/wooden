
import type { Product } from "@/lib/types";
import ProductCard from "./ProductCard";

interface RelatedProductsProps {
    products: (Product & { imageUrl?: string; imageHint?: string })[];
}

export default function RelatedProducts({ products }: RelatedProductsProps) {
    return (
        <section className="bg-accent/50 py-16 md:py-24">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-headline font-bold text-primary mb-8 text-center">You Might Also Like</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </section>
    )
}
