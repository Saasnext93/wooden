import ProductPageContent from "@/components/products/ProductPageContent";
import { Suspense } from "react";

export default function ProductsPage() {
    return (
        <Suspense fallback={<div className="container mx-auto px-4 py-8 md:py-16 text-center">Loading products...</div>}>
            <ProductPageContent />
        </Suspense>
    )
}
