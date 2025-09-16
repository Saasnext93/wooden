import type { Metadata } from 'next';
import { Toaster } from "@/components/ui/toaster"
import Header from "@/components/common/Header"
import Footer from "@/components/common/Footer"
import './globals.css';
import { Suspense } from 'react';
import Loader from '@/components/common/Loader';

export const metadata: Metadata = {
  title: 'Pinnacle Modular Furniture',
  description: 'Premium modular furniture for modern living.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=PT+Sans:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-background text-foreground">
        <Suspense fallback={<Loader />}>
            <div className="flex flex-col min-h-screen">
            <div className="sticky top-0 z-50">
                <Header />
            </div>
            <div className="flex-1">{children}</div>
            <Footer />
            </div>
            <Toaster />
        </Suspense>
      </body>
    </html>
  );
}
