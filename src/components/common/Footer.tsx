import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-accent text-accent-foreground border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 text-center md:text-left">
          {/* Logo & Brand */}
          <div className="md:col-span-2 flex flex-col items-center md:items-start">
            <Logo />
            <p className="mt-4 text-muted-foreground max-w-xs">
              Crafting timeless furniture with sustainable practices and artisanal passion.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-headline font-semibold text-primary mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/products" className="hover:text-primary transition-colors">Products</Link></li>
              <li><Link href="/#contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
              <li><Link href="/#about" className="hover:text-primary transition-colors">About Us</Link></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-headline font-semibold text-primary mb-4">Follow Us</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>
            {/* Visit Us */}
            <div>
            <h3 className="font-headline font-semibold text-primary mb-4">Visit Us</h3>
            <address className="text-muted-foreground not-italic">
                <p>123 Furniture Lane</p>
                <p>Design District, Mumbai</p>
                <p>India, 400051</p>
            </address>
            </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary/20 text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} Pinnacle Modular Furniture. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
