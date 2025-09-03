'use client';

import { forwardRef, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface MissionProps {
    dict: {
        label: string;
        heading: string;
        quote: string;
        points: string[];
    };
}

const Mission = forwardRef<HTMLDivElement, MissionProps>(({ dict }, ref) => {
    const textRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        if (textRef.current) {
            gsap.from(textRef.current, {
                opacity: 0,
                x: -40,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: textRef.current,
                    start: 'top 80%',
                    toggleActions: 'play none none none',
                },
            });
        }

        if (imageRef.current) {
            gsap.from(imageRef.current, {
                opacity: 0,
                x: 40,
                duration: 1,
                delay: 0.2,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: imageRef.current,
                    start: 'top 80%',
                    toggleActions: 'play none none none',
                },
            });
        }
    }, []);

    const { heading, quote, points, label } = dict;

    return (
        <section ref={ref} className="py-24 px-6 lg:px-12 relative overflow-hidden">
            <div className="absolute inset-0 flex items-start justify-end pointer-events-none z-0">
                <img
                    src="/logo/Logo CV.PJA Type 1 black.avif"
                    alt="Decorative Logo"
                    className="w-[300px] md:w-[400px] lg:w-[500px] xl:w-[600px] opacity-5 object-contain"
                />
            </div>

            <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-16 relative z-10">
                <div ref={textRef} className="w-full lg:w-1/2 space-y-10">
                    <div>
                        <p className="text-sm uppercase text-orange-600 tracking-widest font-semibold mb-2 leading-12">
                            {label}
                        </p>
                        <h2 className="text-3xl leading-none lg:text-5xl font-bold text-primary md:leading-12 whitespace-pre-line">
                            {heading}
                        </h2>
                    </div>

                    <div className="bg-primary/10 border-l-4 border-primary p-5 rounded-lg shadow-sm">
                        <p className="text-lg italic font-medium">
                            "{quote}"
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {points.map((text, i) => (
                            <div
                                key={i}
                                className="flex items-start gap-3 bg-white/80 p-4 rounded-md shadow-sm border border-gray-200"
                            >
                                <div className="flex-shrink-0">
                                    <span className="w-6 h-6 rounded-full bg-primary text-white font-bold text-sm flex items-center justify-center">
                                        {i + 1}
                                    </span>
                                </div>
                                <p className="text-sm text-gray-700">{text}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="w-full lg:w-1/2">
                    <img
                        ref={imageRef}
                        src="/mission.avif"
                        alt="Export activity illustration"
                        className="rounded-xl w-full aspect-4/5 object-cover shadow-xl"
                    />
                </div>
            </div>
        </section>
    );
});

Mission.displayName = 'Mission';
export default Mission;