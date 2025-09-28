

'use client';

import { useState, useMemo } from 'react';
import type { Product } from '@/lib/types';
import ProductFilters from '@/components/products/ProductFilters';
import ProductGrid from '@/components/products/ProductGrid';
import { useSearchParams } from 'next/navigation';

const allProducts: Product[] = [
  {
    id: 'prod_1',
    name: 'L-Shaped Kitchen Design',
    description: 'A timeless, ergonomic kitchen layout that maximizes corner space.',
    price: 450,
    imageId: 'product1',
    category: 'Modular Kitchen Design',
    material: 'Oak',
    rating: 4.8,
    status: 'In Stock',
  },
  {
    id: 'prod_2',
    name: 'Sliding Wardrobe',
    description: 'A sleek wardrobe with ample storage and a contemporary finish.',
    price: 620,
    imageId: 'product2',
    category: 'Wardrobe Design',
    material: 'Walnut',
    rating: 4.9,
    status: 'In Stock',
  },
  {
    id: 'prod_3',
    name: 'Master Bedroom Design',
    description: 'A luxurious and comfortable master bedroom set for ultimate relaxation.',
    price: 1250,
    imageId: 'product3',
    category: 'Master bedroom design',
    material: 'Linen',
    rating: 4.7,
    status: 'In Stock',
  },
  {
    id: 'prod_4',
    name: 'Art Deco Kids Bedroom',
    description: 'A playful and stylish bedroom design for the modern kid.',
    price: 780,
    imageId: 'product4',
    category: 'Kids Room Design',
    material: 'Pine',
    rating: 4.6,
    status: 'Pre-Order',
    status_label: ' arriving soon'
  },
  {
    id: 'prod_5',
    name: 'Parallel Kitchen Design',
    description: 'An efficient kitchen layout ideal for compact spaces, offering great workflow.',
    price: 530,
    imageId: 'product5',
    category: 'Modular Kitchen Design',
    material: 'Ash',
    rating: 4.8,
    status: 'Pre-Order',
    status_label: ' new design'
  },
  {
    id: 'prod_6',
    name: 'U-Shaped Kitchen Design',
    description: 'A spacious kitchen design with extensive counter space and storage.',
    price: 1400,
    imageId: 'product6',
    category: 'Modular Kitchen Design',
    material: 'Walnut',
    rating: 4.9,
    status: 'New Arrival',
  },
  {
    id: 'prod_7',
    name: 'Kids Bedroom with Bunk Bed',
    description: 'A space-saving and fun bunk bed design for kids\' rooms.',
    price: 320,
    imageId: 'product7',
    category: 'Kids Room Design',
    material: 'Velvet',
    rating: 4.5,
    status: 'New Arrival',
  },
  {
    id: 'prod_8',
    name: 'Swing Wardrobe with Study Table',
    description: 'A multifunctional wardrobe with an integrated study table.',
    price: 180,
    imageId: 'product8',
    category: 'Wardrobe Design',
    material: 'Oak',
    rating: 4.7,
    status: 'In Stock',
  },
  {
    id: 'prod_9',
    name: 'Straight Kitchen Design',
    description: 'A sleek and simple straight-line kitchen, perfect for minimalist and modern homes.',
    price: 400,
    imageId: 'product9',
    category: 'Modular Kitchen Design',
    material: 'MDF',
    rating: 4.6,
    status: 'In Stock',
  },
  {
    id: 'prod_10',
    name: 'Island Kitchen Design',
    description: 'A contemporary kitchen featuring a central island for extra workspace.',
    price: 1600,
    imageId: 'product10',
    category: 'Modular Kitchen Design',
    material: 'Quartz',
    rating: 4.9,
    status: 'New Arrival',
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
  },
];


const productsWithImages = allProducts.map(product => {
  let imageUrl;
  switch(product.id) {
    case 'prod_1':
      imageUrl = "/l-shaped-contemporary-kitchen-design-with-full-height-cabinets-and-granite-countertop.jpg";
      break;
    case 'prod_2':
      imageUrl = "/modern-3-door-swing-wardrobe-design-with-integrated-study-table.jpg";
      break;
    case 'prod_3':
      imageUrl = "/contemporary-boys-room-design-with-glossy-beige-wardrobe.jpg";
      break;
    case 'prod_4':
      imageUrl = "/art-deco-kids-bedroom-design-with-arc-pink-panels-and-white-frame.jpg";
      break;
    case 'prod_5':
      imageUrl = "/modern-parallel-kitchen-design-with-open-shelves-and-backsplash-tiles.jpg";
      break;
    case 'prod_6':
      imageUrl = "/u-shaped-contemporary-kitchen-design-with-led-lights-and-quartz-countertops.jpg";
      break;
    case 'prod_7':
      imageUrl = "/modern-bedroom-design-with-a-double-bed-and-an-ottoman-bench.jpg";
      break;
    case 'prod_8':
      imageUrl = "/white-modern-2-door-swing-wardrobe-design-with-integrated-study-table.jpg";
      break;
    case 'prod_9':
      imageUrl = "/straight-kitchen-design.jpg";
      break;
    case 'prod_10':
      imageUrl = "/island-kitchen-design.jpg";
      break;
    case 'prod_11':
      imageUrl = "/sofa.jpg";
      break;
    case 'prod_12':
      imageUrl = "/tv-unit.jpg";
      break;
    case 'prod_13':
        imageUrl = "/bookshelf.jpg";
        break;
    case 'prod_14':
        imageUrl = "/study-table.jpg";
        break;
    default:
      imageUrl = "/modern-parallel-kitchen-design-with-open-shelves-and-backsplash-tiles.jpg";
  }

  return {
    ...product,
    imageUrl: imageUrl,
    imageHint: 'furniture piece'
  }
});


export default function ProductPageContent() {
  const searchParams = useSearchParams();
  const initialCategories = searchParams.getAll('categories');

  const [filters, setFilters] = useState({
    categories: initialCategories.length > 0 ? initialCategories.map(c => c.split('%20').join(' ')) : ([] as string[]),
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
          Discover handcrafted modular pieces that bring warmth and elegance to your home.
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
