
import Image from "next/image";
import ScrollAnimationWrapper from "../animations/ScrollAnimationWrapper";

const partners = [
    { name: "iPaints", logo: "/brand/b1.png", width: 100, height: 50 },
    { name: "Berger", logo: "/brand/b2.png", width: 120, height: 60 },
    { name: "Ebco", logo: "/brand/b3.png", width: 110, height: 55 },
    { name: "Elica", logo: "/brand/b4.png", width: 100, height: 50 },
    { name: "Hettich", logo: "/brand/b5.png", width: 130, height: 65 },
    { name: "eGlu", logo: "/brand/b6.png", width: 100, height: 50 },
    
];

export default function BrandPartners() {
    const allPartners = [...partners, ...partners]; // Duplicate for seamless scroll

    return (
        <section className="bg-background py-16 md:py-24">
            <div className="container mx-auto px-4">
                <ScrollAnimationWrapper className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary mb-2">Our Brand Partners</h2>
                    <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                        An elite list of partners who strengthen our brand promise
                    </p>
                </ScrollAnimationWrapper>
                <div className="relative overflow-hidden group">
                     <div className="flex scrolling-wrapper group-hover:[animation-play-state:paused]">
                        {allPartners.map((partner, index) => (
                            <div key={index} className="flex-shrink-0 w-48 h-24 flex items-center justify-center mx-4">
                                <Image
                                    src={partner.logo}
                                    alt={partner.name}
                                    width={partner.width}
                                    height={partner.height}
                                    className="object-contain"
                                    data-ai-hint={`${partner.name.toLowerCase()} logo`}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
