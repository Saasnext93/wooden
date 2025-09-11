'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';
import Logo from '@/components/common/Logo';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { useState, useEffect } from 'react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'Products' },
];

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-300 ease-in-out",
      isScrolled ? "border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60" : "bg-transparent",
    )}>
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Logo />
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'text-sm font-medium transition-colors hover:text-primary',
                isScrolled ? (pathname === link.href ? 'text-primary' : 'text-muted-foreground') : 'text-white/90 hover:text-white',
                !isScrolled && pathname === link.href ? 'text-white font-bold' : ''
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
              <Button variant="ghost" size="icon" className={cn(!isScrolled && 'text-white hover:text-white hover:bg-white/10')}>
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <div className="flex flex-col p-6">
                <Logo />
                <nav className="mt-8 flex flex-col space-y-4">
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
      </div>
    </header>
  );
}
