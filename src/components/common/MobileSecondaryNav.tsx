

'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import type { NavigationLink } from '@/lib/types';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { cn } from '@/lib/utils';

const secondaryNavigationLinks: NavigationLink[] = [
  {
    title: 'Modular Kitchens',
    href: '/products?categories=Modular%20Kitchen%20Design',
    description: 'Beautiful kitchens for modern living.',
    items: [
      { title: 'L-Shaped Kitchen', href: '/products/prod_1', imageId: 'kitchen-lshape', imageUrl: '/MODULERKITCHEN/LShape/image1.jpg' },
      { title: 'U-Shaped Kitchen', href: '/products/prod_6', imageId: 'kitchen-ushape', imageUrl: '/MODULERKITCHEN/UShape/img1.jpg' },
      { title: 'Parallel Kitchen', href: '/products/prod_5', imageId: 'kitchen-parallel', imageUrl: '/MODULERKITCHEN/ParallalKitchen/m.jpg' },
      { title: 'Straight Kitchen', href: '/products/prod_9', imageId: 'kitchen-straight', imageUrl: '/MODULERKITCHEN/StraightKitchen/img1.jpg' },
      { title: 'Island Kitchen', href: '/products/prod_10', imageId: 'kitchen-island', imageUrl: '/MODULERKITCHEN/Island/img.jpg' },
    ],
  },
  {
    title: 'Wardrobes',
    href: '/products?categories=Wardrobe%20Design',
    description: 'Stylish and functional wardrobe solutions.',
    items: [
      { title: 'Swing Wardrobe', href: '/products/prod_8', imageId: 'wardrobe-swing', imageUrl: '/white-modern-2-door-swing-wardrobe-design-with-integrated-study-table.jpg' },
      { title: 'Sliding Wardrobe', href: '/products/prod_2', imageId: 'wardrobe-modern', imageUrl: '/modern-3-door-swing-wardrobe-design-with-integrated-study-table.jpg' },
    ],
  },
  {
    title: 'Bedroom',
    href: '/products?categories=Master%20bedroom%20design',
    description: 'Create your perfect sanctuary.',
    items: [
      { title: 'Master Bedroom', href: '/products/prod_3', imageId: 'bedroom-master', imageUrl: '/BEDROOMS/MASTERBEDROOM/img1.jpg' },
      { title: 'Kids Bedroom', href: '/products/prod_4', imageId: 'bedroom-kids', imageUrl: '/BEDROOMS/KIDS/img1.jpg' },
      { title: 'Bunk Beds', href: '/products/prod_7', imageId: 'bedroom-bunk', imageUrl: '/BEDROOMS/BUNKBEDS/img1.jpg' },
    ],
  },
  {
    title: 'Modular Furniture',
    href: '/products?categories=Modular%20Furniture',
    description: 'Functional and stylish furniture.',
    items: [
        { title: 'Sofas', href: '/products/prod_11', imageId: 'sofa-modern', imageUrl: '/MODULERFURNITURE/SOFAS/img1.jpg' },
        { title: 'TV Units', href: '/products/prod_12', imageId: 'tv-unit', imageUrl: '/MODULERFURNITURE/TVUNITS/img1.jpg' },
        { title: 'Crockery Units', href: '/products', imageId: 'crockery-unit', imageUrl: '/MODULERFURNITURE/crockery-unit.jpg' },
        { title: 'Bookshelves', href: '/products/prod_13', imageId: 'bookshelf', imageUrl: '/MODULERFURNITURE/BOOKSHELVES/img1.jpg' },
        { title: 'Study Tables', href: '/products/prod_14', imageId: 'study-table', imageUrl: '/MODULERFURNITURE/STUDYTABLE/img1.jpg' },
    ]
  }
];


export default function MobileSecondaryNav() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const categories = searchParams.getAll('categories');

  return (
    <Accordion type="multiple" className="w-full text-left">
      {secondaryNavigationLinks.map(link => {
         const isActive = pathname.startsWith(link.href ?? '#') || (link.href?.includes('?categories=') && (link.href.split('?categories=')[1].split('%20').join(' ').split('&').some(cat => categories.includes(cat))));

        return (
          <AccordionItem value={link.title} key={link.title}>
            <AccordionTrigger
              className={cn(
                'text-xl font-headline no-underline hover:no-underline',
                isActive ? 'text-primary' : 'text-foreground'
              )}
            >
              <Link href={link.href ?? '#'} className="hover:text-primary transition-colors">
                {link.title}
              </Link>
            </AccordionTrigger>
            <AccordionContent>
              <ul className="space-y-3 pl-4">
                {link.items?.map(item => (
                  <li key={item.title}>
                    <Link
                      href={item.href}
                      className="text-base text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}
