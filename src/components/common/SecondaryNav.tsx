
'use client';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import type { NavigationLink } from '@/lib/types';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

const secondaryNavigationLinks: NavigationLink[] = [
  {
    title: 'Upholstered Furniture',
    href: '/products?categories=Sofas&categories=Chairs',
    description: 'Comfortable and stylish seating solutions.',
    items: [
      { title: 'Stationary Sofas', href: '/products?categories=Sofas', imageId: 'category-sofas' },
      { title: 'Motion Sofas', href: '/products?categories=Sofas', imageId: 'category-sofas' },
      { title: 'Home Theatre', href: '/products?categories=Sofas', imageId: 'category-sofas' },
      { title: 'Armchairs', href: '/products?categories=Chairs', imageId: 'category-chairs' },
      { title: 'Day Bed', href: '/products?categories=Sofas', imageId: 'product1' },
      { title: 'Sofa Cum Bed', href: '/products?categories=Sofas', imageId: 'product3' },
      { title: 'Recliners', href: '/products?categories=Chairs', imageId: 'product5' },
      { title: 'Beds', href: '/products?categories=Sofas', imageId: 'product1' },
      { title: 'Mattress', href: '/products?categories=Sofas', imageId: 'product1' },
      { title: 'Pillows', href: '/products?categories=Sofas', imageId: 'product1' },
      { title: 'Puffee', href: '/products?categories=Sofas', imageId: 'product7' },
    ],
  },
    {
    title: 'Case Goods',
    href: '/products?categories=Tables',
    description: 'Explore our collection of case goods.',
    items: [
      { title: 'Coffee Tables', href: '/products?categories=Tables', imageId: 'category-tables' },
      { title: 'Side Tables', href: '/products?categories=Tables', imageId: 'category-tables' },
      { title: 'Consoles', href: '/products?categories=Tables', imageId: 'category-tables' },
    ],
  },
  {
    title: 'Fixed Cabinets',
    href: '/products?categories=Storage',
    description: 'Explore our collection of fixed cabinets.',
    items: [
      { title: 'Entertainment Units', href: '/products?categories=Storage', imageId: 'category-storage' },
      { title: 'Sideboards', href: '/products?categories=Storage', imageId: 'category-storage' },
      { title: 'Bookshelves', href: '/products?categories=Storage', imageId: 'category-storage' },
    ],
  },
  {
    title: 'Loose Cabinets',
    href: '/products?categories=Storage',
    description: 'Explore our collection of loose cabinets.',
    items: [
      { title: 'Night Stands', href: '/products?categories=Storage', imageId: 'category-storage' },
      { title: 'Chest of Drawers', href: '/products?categories=Storage', imageId: 'category-storage' },
    ],
  },
];


export default function SecondaryNav() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const categories = searchParams.getAll('categories');

  return (
    <div className="hidden md:flex justify-center items-center py-2 bg-background border-b z-40 relative">
      <NavigationMenu>
        <NavigationMenuList>
          {secondaryNavigationLinks.map(link => {
            const categoryImageId = link.items?.[0]?.imageId;

            // A menu is active if the current path starts with its href
            // or if one of its category filters is active
            const isActive = pathname.startsWith(link.href ?? '#') || (link.href?.includes('?categories=') && (link.href.split('?categories=')[1].split('&').some(cat => categories.includes(cat))));


            return (
              <NavigationMenuItem key={link.title}>
                <NavigationMenuTrigger
                  className={cn(
                    'text-base font-headline tracking-wider uppercase',
                     isActive
                      ? 'text-primary font-bold'
                      : 'text-muted-foreground'
                  )}
                >
                   <Link href={link.href ?? '#'}>{link.title}</Link>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="flex">
                    <ul className="grid grid-cols-2 gap-x-4 p-6 w-[500px]">
                      {link.items?.map(item => (
                        <ListItem key={item.title} href={item.href} title={item.title} />
                      ))}
                    </ul>
                     {categoryImageId && (
                        <div className="p-4 w-[300px] bg-muted/50 flex flex-col justify-between">
                            <div>
                                <div className="relative h-40 w-full mb-4 rounded-md overflow-hidden">
                                    <Image
                                    src={`https://picsum.photos/seed/${categoryImageId}/400/400`}
                                    alt={link.title}
                                    data-ai-hint="furniture category"
                                    fill
                                    className="object-cover"
                                    />
                                </div>
                                <h3 className="font-headline text-lg font-semibold">{link.title}</h3>
                                <p className="text-sm text-muted-foreground mt-2 mb-4">{link.description}</p>
                            </div>
                            <Link href={link.href ?? '#'} className="text-sm font-bold text-primary hover:underline self-start">
                                Shop All {link.title} &rarr;
                            </Link>
                        </div>
                    )}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            );
          })}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

const ListItem = ({ href, title }: { href: string; title: string }) => {
  return (
    <li>
      <Link
        href={href}
        className="block select-none rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
      >
        <div className="text-sm font-medium leading-none">{title}</div>
      </Link>
    </li>
  );
};
