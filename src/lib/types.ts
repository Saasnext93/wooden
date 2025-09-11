export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  imageId: string;
  category: string; // e.g., 'Chairs', 'Tables', 'Sofas'
  material: string; // e.g., 'Oak', 'Walnut', 'Linen'
  rating: number; // 1-5
  status?: 'New Arrival' | 'Pre-Order' | 'In Stock';
  status_label?: string;
};

export type Testimonial = {
  id: string;
  quote: string;
  customerName: string;
  customerTitle: string;
  imageId: string;
};

export type NavigationLink = {
  title: string;
  href?: string;
  description?: string;
  items?: NavigationSubItem[];
}

export type NavigationSubItem = {
  title: string;
  href: string;
  description: string;
  imageId: string;
}
