import { ShieldCheck, Leaf, Hammer } from "lucide-react";
import ScrollAnimationWrapper from "../animations/ScrollAnimationWrapper";

const badges = [
    {
        icon: <ShieldCheck className="w-10 h-10 text-primary" />,
        title: "Quality Guaranteed",
        description: "Every piece is rigorously inspected to meet our highest standards of quality and durability."
    },
    {
        icon: <Leaf className="w-10 h-10 text-primary" />,
        title: "Sustainable Sourcing",
        description: "We use responsibly sourced materials to create beautiful furniture that's kind to the planet."
    },
    {
        icon: <Hammer className="w-10 h-10 text-primary" />,
        title: "Artisanal Craftsmanship",
        description: "Our skilled artisans blend traditional techniques with modern design for timeless results."
    }
]

export default function TrustBadges() {
    return (
        <section className="bg-background py-16 md:py-24">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                    {badges.map((badge, index) => (
                        <ScrollAnimationWrapper key={badge.title} delay={index * 150}>
                            <div className="flex flex-col items-center">
                                <div className="mb-4 bg-accent/50 p-4 rounded-full">
                                    {badge.icon}
                                </div>
                                <h3 className="text-xl font-headline font-semibold text-primary mb-2">{badge.title}</h3>
                                <p className="text-muted-foreground">{badge.description}</p>
                            </div>
                        </ScrollAnimationWrapper>
                    ))}
                </div>
            </div>
        </section>
    );
}
