import { DraftingCompass, Gem, Hand, PackageCheck, Trees, Sofa, Armchair } from "lucide-react";
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
        icon: <Armchair className="w-8 h-8 text-primary" />,
        title: "Artisanal Craftsmanship",
        description: "Our skilled artisans use traditional woodworking techniques to shape, join, and construct each component with precision and care.",
    },
    {
        icon: <Sofa className="w-8 h-8 text-primary" />,
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
        <section id="manufacturing" className="bg-accent py-16 md:py-24 scroll-mt-20">
            <div className="container mx-auto px-4">
                <ScrollAnimationWrapper className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary mb-2">From Forest to Furniture</h2>
                    <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                        Discover the journey of craftsmanship that brings our pieces to life.
                    </p>
                </ScrollAnimationWrapper>

                <div className="relative">
                    <div className="absolute left-1/2 top-0 h-full w-0.5 bg-primary/20 -translate-x-1/2 hidden md:block" aria-hidden="true" />

                    <div className="space-y-16">
                        {processSteps.map((step, index) => {
                            const isEven = index % 2 === 0;
                            return (
                                <div key={index} className="relative flex items-center">
                                    <div className={`w-full flex ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col md:items-center`}>
                                        
                                        {/* Content Block */}
                                        <div className="w-full md:w-5/12">
                                            <ScrollAnimationWrapper 
                                                className={`transform ${isEven ? 'md:translate-x-[-2rem]' : 'md:translate-x-[2rem]'} [&.is-visible]:translate-x-0 transition-transform duration-1000 ease-out`}
                                            >
                                                <div className={`p-6 bg-background rounded-lg shadow-lg ${isEven ? 'md:text-right' : 'md:text-left'} text-center`}>
                                                    <h3 className="text-2xl font-headline font-bold text-primary mb-2">{step.title}</h3>
                                                    <p className="text-muted-foreground">{step.description}</p>
                                                </div>
                                            </ScrollAnimationWrapper>
                                        </div>

                                        {/* Icon */}
                                        <div className="w-full md:w-2/12 flex justify-center">
                                            <ScrollAnimationWrapper 
                                                delay={200}
                                                className="transform scale-50 [&.is-visible]:scale-100 transition-transform duration-700 ease-in-out"
                                            >
                                                <div className="w-20 h-20 my-4 md:my-0 bg-background rounded-full flex items-center justify-center shadow-lg border-4 border-primary/20 z-10 relative">
                                                    {step.icon}
                                                </div>
                                            </ScrollAnimationWrapper>
                                        </div>

                                        {/* Spacer */}
                                        <div className="hidden md:block md:w-5/12" />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
