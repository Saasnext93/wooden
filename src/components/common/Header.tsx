'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';
import Image from 'next/image';
import Logo from '@/components/common/Logo';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import React, { useState } from 'react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { navigationLinks } from '@/lib/placeholder-data';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex flex-col items-center justify-center px-4 py-4">
        {/* Logo */}
        <div className="flex items-center">
          <Logo />
        </div>

        {/* Desktop Navigation & Quote Button */}
        <div className="hidden md:flex items-center justify-center w-full mt-4">
            <nav className="flex items-center">
              <NavigationMenu>
                <NavigationMenuList>
                  {navigationLinks.map((link) => (
                    <NavigationMenuItem key={link.title}>
                      {link.items ? (
                        <>
                          <NavigationMenuTrigger className="text-lg">{link.title}</NavigationMenuTrigger>
                          <NavigationMenuContent>
                            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                              <li className="row-span-3">
                                <NavigationMenuLink asChild>
                                  <a
                                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                    href={link.href ?? "/"}
                                  >
                                    <div className="mb-2 mt-4 text-lg font-medium">
                                      {link.title}
                                    </div>
                                    <p className="text-sm leading-tight text-muted-foreground">
                                      {link.description}
                                    </p>
                                  </a>
                                </NavigationMenuLink>
                              </li>
                              {link.items.map((item) => {
                                const itemImage = PlaceHolderImages.find(p => p.id === item.imageId);
                                return (
                                <ListItem key={item.title} href={item.href} title={item.title} image={itemImage?.imageUrl} />
                              )
                              })}
                            </ul>
                          </NavigationMenuContent>
                        </>
                      ) : (
                        <Link href={link.href ?? "/"} legacyBehavior passHref>
                          <NavigationMenuLink className={cn('text-lg font-medium transition-colors px-4 py-2 rounded-full text-muted-foreground hover:text-primary hover:bg-accent', pathname === link.href ? 'text-primary bg-accent font-semibold' : '')}>
                            {link.title}
                          </NavigationMenuLink>
                        </Link>
                      )}
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </nav>
            <div className="ml-4">
                <Button asChild>
                    <Link href="/#contact">Get Quote</Link>
                </Button>
            </div>
        </div>


        {/* Mobile Navigation */}
        <div className="absolute top-1/2 -translate-y-1/2 right-4 md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-primary hover:bg-transparent focus-visible:bg-transparent">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle className="sr-only">Main Menu</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col p-6">
                <div className="mb-8">
                  <Logo />
                </div>
                <nav className="flex flex-col space-y-4">
                  {navigationLinks.map((link) => (
                    link.items ? (
                      <div key={link.title}>
                        <h3 className="font-semibold text-lg">{link.title}</h3>
                        <div className="flex flex-col space-y-2 mt-2 ml-2">
                        {link.items.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className={cn(
                              'text-muted-foreground transition-colors hover:text-primary',
                              pathname === item.href ? 'text-primary' : ''
                            )}
                          >
                            {item.title}
                          </Link>
                        ))}
                        </div>
                      </div>
                    ) : (
                      <Link
                        key={link.href}
                        href={link.href ?? "/"}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={cn(
                          'text-lg font-medium transition-colors hover:text-primary',
                          pathname === link.href ? 'text-primary' : 'text-muted-foreground'
                        )}
                      >
                        {link.title}
                      </Link>
                    )
                  ))}
                </nav>
                <div className="mt-8">
                    <Button asChild className='w-full'>
                        <Link href="/#contact" onClick={() => setIsMobileMenuOpen(false)}>Get Quote</Link>
                    </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}


const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { image?: string }
>(({ className, title, children, image, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="flex items-center gap-4">
            {image && <Image src={image} alt={title ?? ''} width={40} height={40} className="rounded-md" />}
            <div className="text-sm font-medium leading-none">{title}</div>
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
