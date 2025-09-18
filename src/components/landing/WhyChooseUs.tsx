import { Award, BadgePercent, ClipboardCheck, Clock, Tags } from "lucide-react";
import ScrollAnimationWrapper from "../animations/ScrollAnimationWrapper";

const features = [
    {
        icon: <Tags className="w-10 h-10 text-primary" />,
        title: "Made to Order",
        description: "We create personalised modular kitchens, wardrobes and bedrooms that cater to your every requirement.",
    },
    {
        icon: <BadgePercent className="w-10 h-10 text-primary" />,
        title: "Lowest Prices Guaranteed",
        description: "We provide the best possible modular solutions that suit your finances.",
    },
    {
        icon: <ClipboardCheck className="w-10 h-10 text-primary" />,
        title: "Quality Checks At Every Step",
        description: "We guarantee thorough quality checks till project completion.",
    },
    {
        icon: <Clock className="w-10 h-10 text-primary" />,
        title: "Timely Delivery Assurance",
        description: "We proactively work on commitments to maintain our benchmark of on-time delivery.",
    },
    {
        icon: <Award className="w-10 h-10 text-primary" />,
        title: "11-Year Warranty",
        description: "We invigorate client relationships by offering warranties that last a decade.",
    },
];

export default function WhyChooseUs() {
    return (
        <section className="bg-background py-16 md:py-24">
            <div className="container mx-auto px-4">
                 <ScrollAnimationWrapper className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary mb-2">Why Choose Us</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        With us, you experience the power of ideas, design and craftsmanship come alive.
                    </p>
                </ScrollAnimationWrapper>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-12 text-center">
                    {features.map((feature, index) => (
                        <ScrollAnimationWrapper key={feature.title} delay={index * 150}>
                            <div className="flex flex-col items-center">
                                <div className="mb-4 bg-accent/50 p-4 rounded-full">
                                    {feature.icon}
                                </div>
                                <h3 className="text-lg font-headline font-semibold text-primary mb-2">{feature.title}</h3>
                                <p className="text-muted-foreground text-sm">{feature.description}</p>
                            </div>
                        </ScrollAnimationWrapper>
                    ))}
                </div>
            </div>
        </section>
    );
}
