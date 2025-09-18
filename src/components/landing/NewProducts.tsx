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
    category: 'Modular Kitchen Design',
    material: 'Ash',
    rating: 4.8,
    status: 'Pre-Order',
    status_label: ' new design'
  },
  {
    id: 'prod_6',
    name: 'U-Shaped Kitchen Design',
    description: 'Gather your family around this stunning round dining table, crafted from dark walnut for a dramatic effect.',
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
    description: 'A touch of luxury for any room. This plush velvet ottoman comes in a variety of rich colors.',
    price: 320,
    imageId: 'product7',
    category: 'Kids Room Design',
    material: 'Velvet',
    rating: 4.5,
    status: 'New Arrival',
  },
];


export default function NewProducts() {
  const newProducts = allProducts.filter(p => p.status !== 'In Stock').map(product => {
    let imageUrl;
    if (product.id === 'prod_4') {
      imageUrl = "/white-modern-2-door-swing-wardrobe-design-with-integrated-study-table.jpg";
    } else if (product.id === 'prod_5') {
      imageUrl = "/contemporary-boys-room-design-with-glossy-beige-wardrobe.jpg"
    } else if (product.id === 'prod_6') {
      imageUrl = "/blue-classic-l-shaped-kitchen-design-with-glossy-acrylic-finish.jpg"
    } else if (product.id === 'prod_7') {
        imageUrl = "/modern-3-door-swing-wardrobe-design-with-integrated-study-table.jpg"
    }
    else {
      imageUrl = `/picsum.photos/seed/${product.id}/600/800`;
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
