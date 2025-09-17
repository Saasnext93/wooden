import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import ScrollAnimationWrapper from '../animations/ScrollAnimationWrapper';
import NewProductCard from '../products/NewProductCard';

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
    status_label: ' arriving soon'
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
    status_label: ' new design'
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
  },
];


export default function NewProducts() {
  const newProducts = allProducts.filter(p => p.status !== 'In Stock').map(product => {
    let imageUrl;
    if (product.id === 'prod_4') {
      imageUrl = "https://images.unsplash.com/photo-1487015307662-6ce6210680f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHx3b29kZW4lMjBmdXJuaXR1cmV8ZW58MHx8fHwxNzU3Njk1NzUzfDA&ixlib=rb-4.1.0&q=80&w=1080";
    } else if (product.id === 'prod_5') {
      imageUrl = "https://images.unsplash.com/photo-1721222204755-669d8056cdb4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHx3b29kZW4lMjBmdXJuaXR1cmV8ZW58MHx8fHwxNzU3Njk1NzUzfDA&ixlib=rb-4.1.0&q=80&w=1080"
    } else if (product.id === 'prod_6') {
      imageUrl = "https://images.unsplash.com/photo-1665005255783-3298cabef5aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHwlMjByb3VuZCUyMGRpbmluZyUyMHRhYmxlfGVufDB8fHx8MTc1NzY5NTkxMHww&ixlib=rb-4.1.0&q=80&w=1080"
    } else if (product.id === 'prod_7') {
        imageUrl = "https://images.unsplash.com/photo-1721989516639-e051c83c2bd9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxNXx8d29vZGVuJTIwZnVybml0dXJlfGVufDB8fHx8MTc1NzY5NTc1M3ww&ixlib=rb-4.1.0&q=80&w=1080"
    }
    else {
      imageUrl = `https://picsum.photos/seed/${product.id}/600/800`;
    }

    return {
      ...product,
      imageUrl: imageUrl,
      imageHint: 'furniture piece'
    }
  });

  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4">
        <ScrollAnimationWrapper className="mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">Take a look at what's new right now.</h2>
        </ScrollAnimationWrapper>
        
        <ScrollAnimationWrapper delay={200}>
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full relative"
          >
            <CarouselContent>
              {newProducts.map((product) => (
                <CarouselItem key={product.id} className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <div className="p-1">
                    <NewProductCard product={product} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute -left-4 top-1/2 -translate-y-1/2" />
            <CarouselNext className="absolute -right-4 top-1/2 -translate-y-1/2" />
          </Carousel>
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
}
