'use client';

import { useState, useMemo } from 'react';
import type { Product } from '@/lib/types';
import { products as allProducts } from '@/lib/placeholder-data';
import ProductFilters from '@/components/products/ProductFilters';
import ProductGrid from '@/components/products/ProductGrid';

const productsWithImages = allProducts.map(product => {
  return {
    ...product,
    imageUrl: `https://picsum.photos/seed/${product.id}/600/600`,
    imageHint: 'furniture piece'
  }
});


export default function ProductsPage() {
  const [filters, setFilters] = useState({
    categories: [] as string[],
    materials: [] as string[],
  });
  const [sort, setSort] = useState('rating-desc');
  const [searchQuery, setSearchQuery] = useState('');

  const availableCategories = useMemo(() => Array.from(new Set(productsWithImages.map(p => p.category))), []);
  const availableMaterials = useMemo(() => Array.from(new Set(productsWithImages.map(p => p.material))), []);

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = [...productsWithImages];

    if (searchQuery) {
      filtered = filtered.filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase()));
    }

    if (filters.categories.length > 0) {
      filtered = filtered.filter(p => filters.categories.includes(p.category));
    }

    if (filters.materials.length > 0) {
      filtered = filtered.filter(p => filters.materials.includes(p.material));
    }

    switch (sort) {
      case 'rating-desc':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'name-asc':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'name-desc':
        filtered.sort((a, b) => b.name.localeCompare(a.name));
        break;
    }

    return filtered;
  }, [filters, sort, searchQuery]);

  return (
    <div className="container mx-auto px-4 py-8 md:py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary mb-2">Our Collection</h1>
        <p className="text-lg text-muted-foreground">
          Discover handcrafted pieces that bring warmth and elegance to your home.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-1">
          <ProductFilters
            categories={availableCategories}
            materials={availableMaterials}
            filters={filters}
            setFilters={setFilters}
            sort={sort}
            setSort={setSort}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
        </div>
        <div className="md:col-span-3">
          <ProductGrid products={filteredAndSortedProducts} />
        </div>
      </div>
    </div>
  );
}
