import type { Product, Testimonial, NavigationLink } from './types';

export const products: Product[] = [
  {
    id: 'prod_1',
    name: 'Classic Oak Armchair',
    description: 'A timeless piece, handcrafted from solid oak with a natural finish. Perfect for any living room.',
    price: 450,
    imageId: 'product1',
    category: 'Chairs',
    material: 'Oak',
    rating: 4.8,
    status: 'In Stock',
  },
  {
    id: 'prod_2',
    name: 'Walnut Coffee Table',
    description: 'Minimalist design meets rich walnut wood. This coffee table is a statement of elegance.',
    price: 620,
    imageId: 'product2',
    category: 'Tables',
    material: 'Walnut',
    rating: 4.9,
    status: 'In Stock',
  },
  {
    id: 'prod_3',
    name: 'Linen Blend Sofa',
    description: 'A comfortable and stylish 3-seater sofa upholstered in a premium linen blend fabric.',
    price: 1250,
    imageId: 'product3',
    category: 'Sofas',
    material: 'Linen',
    rating: 4.7,
    status: 'In Stock',
  },
  {
    id: 'prod_4',
    name: 'Modern Bookshelf',
    description: 'Display your collection in style with this sleek and sturdy bookshelf, made from reclaimed pine.',
    price: 780,
    imageId: 'product4',
    category: 'Storage',
    material: 'Pine',
    rating: 4.6,
    status: 'Pre-Order',
    status_label: ' arriving soon'
  },
  {
    id: 'prod_5',
    name: 'Ergonomic Desk Chair',
    description: 'Designed for comfort and style, this chair features a beautiful ash wood frame and leather seat.',
    price: 530,
    imageId: 'product5',
    category: 'Chairs',
    material: 'Ash',
    rating: 4.8,
    status: 'Pre-Order',
    status_label: ' new design'
  },
  {
    id: 'prod_6',
    name: 'Round Dining Table',
    description: 'Gather your family around this stunning round dining table, crafted from dark walnut for a dramatic effect.',
    price: 1400,
    imageId: 'product6',
    category: 'Tables',
    material: 'Walnut',
    rating: 4.9,
    status: 'New Arrival',
  },
  {
    id: 'prod_7',
    name: 'Velvet Ottoman',
    description: 'A touch of luxury for any room. This plush velvet ottoman comes in a variety of rich colors.',
    price: 320,
    imageId: 'product7',
    category: 'Sofas',
    material: 'Velvet',
    rating: 4.5,
    status: 'New Arrival',
  },
  {
    id: 'prod_8',
    name: 'Floating Wall Shelves',
    description: 'Solid oak floating shelves that provide a clean, modern way to display decor.',
    price: 180,
    imageId: 'product8',
    category: 'Storage',
    material: 'Oak',
    rating: 4.7,
    status: 'In Stock',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 'test_1',
    quote: "The quality of our new dining table is simply outstanding. You can feel the craftsmanship. It's the centerpiece of our home now.",
    customerName: 'Priya Sharma',
    customerTitle: 'Homeowner, Mumbai',
    imageId: 'avatar1',
  },
  {
    id: 'test_2',
    quote: "Wooden Manufacture transformed our living space. The sofa is not only beautiful but incredibly comfortable. The whole process was seamless.",
    customerName: 'Mahesh Kumar',
    customerTitle: 'Interior Designer, Delhi',
    imageId: 'avatar2',
  },
  {
    id: 'test_3',
    quote: "I was looking for a unique bookshelf and found the perfect one here. It's a true work of art. I get compliments on it all the time!",
    customerName: 'Anika Reddy',
    customerTitle: 'Architect, Bangalore',
    imageId: 'avatar3',
  },
   {
    id: 'test_4',
    quote: "From the wood grain on my armchair to the soft-close drawers on my sideboard, every detail is perfect. Highly recommended.",
    customerName: 'Rohan Mehta',
    customerTitle: 'Art Director, Pune',
    imageId: 'avatar4',
  },
];

export const mainNavigationLinks: NavigationLink[] = [
  {
    title: 'Legacy',
    href: '#',
  },
  {
    title: 'Products',
    href: '/products',
  },
  {
    title: 'Contact',
    href: '/#contact',
  },
];


export const secondaryNavigationLinks: NavigationLink[] = [
  {
    title: 'Upholstered Furniture',
    href: '/products?category=Sofas',
    description: 'Comfortable and stylish seating solutions.',
    items: [
      { title: 'Stationary Sofas', href: '#', imageId: 'category-sofas' },
      { title: 'Motion Sofas', href: '#', imageId: 'category-sofas' },
      { title: 'Home Theatre', href: '#', imageId: 'category-sofas' },
      { title: 'Armchairs', href: '/products?category=Chairs', imageId: 'category-chairs' },
      { title: 'Day Bed', href: '#', imageId: 'product1' },
      { title: 'Sofa Cum Bed', href: '#', imageId: 'product3' },
      { title: 'Recliners', href: '#', imageId: 'product5' },
      { title: 'Beds', href: '#', imageId: 'product1' },
      { title: 'Mattress', href: '#', imageId: 'product1' },
      { title: 'Pillows', href: '#', imageId: 'product1' },
      { title: 'Puffee', href: '#', imageId: 'product7' },
    ],
  },
    {
    title: 'Case Goods',
    href: '/products?category=Tables',
    description: 'Explore our collection of case goods.',
    items: [
      { title: 'Coffee Tables', href: '/products?category=Tables', imageId: 'category-tables' },
      { title: 'Side Tables', href: '/products?category=Tables', imageId: 'category-tables' },
      { title: 'Consoles', href: '/products?category=Tables', imageId: 'category-tables' },
    ],
  },
  {
    title: 'Fixed Cabinets',
    href: '/products?category=Storage',
    description: 'Explore our collection of fixed cabinets.',
    items: [
      { title: 'Entertainment Units', href: '/products?category=Storage', imageId: 'category-storage' },
      { title: 'Sideboards', href: '/products?category=Storage', imageId: 'category-storage' },
      { title: 'Bookshelves', href: '/products?category=Storage', imageId: 'category-storage' },
    ],
  },
  {
    title: 'Loose Cabinets',
    href: '/products?category=Storage',
    description: 'Explore our collection of loose cabinets.',
    items: [
      { title: 'Night Stands', href: '/products?category=Storage', imageId: 'category-storage' },
      { title: 'Chest of Drawers', href: '/products?category=Storage', imageId: 'category-storage' },
    ],
  },
];
