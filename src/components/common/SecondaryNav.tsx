'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { secondaryNavigationLinks } from '@/lib/placeholder-data';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import React from 'react';

export default function SecondaryNav() {
  const pathname = usePathname();

  return (
    <div className="hidden md:flex w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 justify-center">
      <NavigationMenu>
        <NavigationMenuList>
          {secondaryNavigationLinks.map((link) => (
            <NavigationMenuItem key={link.title}>
              <NavigationMenuTrigger className="text-sm font-headline tracking-wider uppercase">
                {link.title}
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="flex">
                  <ul className="p-6 w-[250px]">
                    {link.items?.map((item) => (
                      <ListItem
                        key={item.title}
                        href={item.href}
                        title={item.title}
                      />
                    ))}
                  </ul>
                  <div className="p-6 w-[400px] bg-muted/50">
                    <h3 className="font-headline text-lg font-semibold">{link.title}</h3>
                    <p className="text-sm text-muted-foreground mt-2 mb-4">{link.description}</p>
                    <Link href={link.href ?? '#'} className="text-sm font-bold text-primary hover:underline">
                      Shop All {link.title} &rarr;
                    </Link>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
        </a>
      </NavigationMenuLink>
    </li>
  )
});
ListItem.displayName = "ListItem";
