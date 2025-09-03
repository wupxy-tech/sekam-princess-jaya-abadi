'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ProductQualityProps {
    dict: {
        label: string;
        heading: string;
        intro: string;
        points: string[];
        conclusion: string;
    };
}

const ProductQuality = ({ dict }: ProductQualityProps) => {
    const contentRef = useRef<HTMLDivElement>(null);

    const { label, heading, intro, points, conclusion } = dict;

    useEffect(() => {
        if (contentRef.current) {
            gsap.fromTo(
                contentRef.current,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: contentRef.current,
                        start: 'top 80%',
                    },
                }
            );
        }
    }, []);

    return (
        <section className="relative py-24 px-6 lg:px-12 overflow-hidden bg-white">
            <div className="absolute inset-0 flex items-start justify-start pointer-events-none z-0">
                <img
                    src="/logo/Logo CV.PJA Type 1 black.avif"
                    alt="Decorative Logo"
                    className="w-[300px] md:w-[400px] lg:w-[500px] xl:w-[600px] opacity-5 object-contain"
                />
            </div>

            <div
                ref={contentRef}
                className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
            >
                <div>
                    <img
                        src="/assets_task_01k0m0s5nmetrv4cxvjtkfj8g8_1753018663_img_0.webp"
                        alt="Natural Dry Commodities"
                        className="w-full rounded-xl shadow-xl object-cover aspect-square"
                    />
                </div>

                <div>
                    <p className="text-sm uppercase text-orange-600 tracking-widest font-semibold mb-2">
                        {label}
                    </p>
                    <h2 className="text-4xl font-bold text-primary mb-6 leading-10">
                        {heading}
                    </h2>
                    <p
                        className="text-gray-700 leading-relaxed text-sm md:text-base"
                        dangerouslySetInnerHTML={{ __html: intro }}
                    />
                    <ul className="list-disc list-inside text-gray-700 mt-4 mb-6 space-y-2 text-sm md:text-base">
                        {points.map((point, i) => (
                            <li key={i}>{point}</li>
                        ))}
                    </ul>
                    <p className="text-gray-700 leading-relaxed whitespace-pre-line text-sm md:text-base">
                        {conclusion}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ProductQuality;