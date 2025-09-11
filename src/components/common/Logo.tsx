import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";

type LogoProps = {
  isScrolled?: boolean;
};

export default function Logo({ isScrolled = false }: LogoProps) {
  return (
    <Link href="/" className="relative transition-all duration-300">
       <Image 
        src="/logo_pin.png" 
        alt="Wooden Manufacture Logo"
        width={isScrolled ? 120 : 180}
        height={isScrolled ? 32 : 48}
        className="transition-all duration-300"
        priority
       />
    </Link>
  );
}
