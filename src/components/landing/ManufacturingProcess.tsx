import { DraftingCompass, Gem, Hand, PackageCheck, Trees } from "lucide-react";
import ScrollAnimationWrapper from "../animations/ScrollAnimationWrapper";

const processSteps = [
    {
        icon: <DraftingCompass className="w-8 h-8 text-primary" />,
        title: "Design & Conception",
        description: "Every piece begins as a spark of an idea, sketched and refined by our designers to blend timeless aesthetics with modern functionality.",
    },
    {
        icon: <Trees className="w-8 h-8 text-primary" />,
        title: "Sustainable Sourcing",
        description: "We hand-select the finest, sustainably-harvested hardwoods, ensuring each piece has a beautiful origin story and minimal environmental impact.",
    },
    {
        icon: <Hand className="w-8 h-8 text-primary" />,
        title: "Artisanal Craftsmanship",
        description: "Our skilled artisans use traditional woodworking techniques to shape, join, and construct each component with precision and care.",
    },
    {
        icon: <Gem className="w-8 h-8 text-primary" />,
        title: "Finishing & Detailing",
        description: "The furniture is meticulously sanded, and layers of natural oils or lacquers are applied to protect the wood and enhance its natural grain.",
    },
    {
        icon: <PackageCheck className="w-8 h-8 text-primary" />,
        title: "Quality Assurance",
        description: "Before leaving our workshop, every item undergoes a rigorous final inspection to ensure it meets our exacting standards of quality and durability.",
    },
];

export default function ManufacturingProcess() {
    return (
        <section className="bg-accent py-16 md:py-24">
            <div className="container mx-auto px-4">
                <ScrollAnimationWrapper className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary mb-2">From Forest to Furniture</h2>
                    <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                        Discover the journey of craftsmanship that brings our pieces to life.
                    </p>
                </ScrollAnimationWrapper>

                <div className="relative">
                    {/* The timeline line */}
                    <div className="absolute left-1/2 top-0 h-full w-0.5 bg-primary/20 -translate-x-1/2 hidden md:block" />

                    <div className="space-y-16">
                        {processSteps.map((step, index) => (
                            <ScrollAnimationWrapper key={index} delay={index * 150}>
                                <div className="flex flex-col md:flex-row items-center">
                                    {/* Left Side (or Top on Mobile) */}
                                    <div className={`flex-1 flex md:justify-center ${index % 2 === 0 ? 'md:order-1' : 'md:order-3'}`}>
                                        <div className="max-w-md p-6 text-center md:text-left">
                                            <h3 className="text-2xl font-headline font-bold text-primary mb-2">{step.title}</h3>
                                            <p className="text-muted-foreground">{step.description}</p>
                                        </div>
                                    </div>

                                    {/* Center Icon */}
                                    <div className="flex-shrink-0 md:order-2">
                                        <div className="w-20 h-20 bg-background rounded-full flex items-center justify-center shadow-lg border-4 border-primary/20 z-10 relative">
                                            {step.icon}
                                        </div>
                                    </div>
                                    
                                    {/* Right Side (Placeholder) */}
                                    <div className="flex-1 hidden md:block md:order-1" />
                                </div>
                            </ScrollAnimationWrapper>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
