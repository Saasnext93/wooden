import { cn } from "@/lib/utils";

type AnimatedHamburgerIconProps = {
    isOpen: boolean;
};

export default function AnimatedHamburgerIcon({ isOpen }: AnimatedHamburgerIconProps) {
    return (
        <div className="hamburger-icon">
            <div className={cn('hamburger-line', isOpen && 'hamburger-line-1-open')} />
            <div className={cn('hamburger-line', isOpen && 'hamburger-line-2-open')} />
            <div className={cn('hamburger-line', isOpen && 'hamburger-line-3-open')} />
        </div>
    );
}
