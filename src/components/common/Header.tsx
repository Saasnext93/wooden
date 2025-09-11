'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';
import Logo from '@/components/common/Logo';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { useState } from 'react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'Products' },
  { href: '/#contact', label: 'Contact' },
];

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <div className="flex items-center">
            <Logo />
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'text-sm font-medium transition-colors px-4 py-2 rounded-full text-muted-foreground hover:text-primary hover:bg-accent',
                pathname === link.href ? 'text-primary bg-accent font-semibold' : ''
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-primary hover:bg-transparent focus-visible:bg-transparent">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <div className="flex flex-col p-6">
                <div className="mb-8">
                    <Logo />
                </div>
                <nav className="flex flex-col space-y-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={cn(
                        'text-lg font-medium transition-colors hover:text-primary',
                        pathname === link.href ? 'text-primary' : 'text-muted-foreground'
                      )}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
        
        <div className="hidden md:flex items-center">
          <Button asChild>
            <Link href="/#contact">Get Quote</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
