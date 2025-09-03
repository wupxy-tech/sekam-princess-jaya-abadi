'use client';

import { forwardRef, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface AboutUsProps {
    dict: {
        label: string;
        heading: string;
        description: string;
        features: {
            title: string;
            description: string;
        }[];
    };
}

const imageSources = [
    'https://www.charcoalproject.org/wp-content/uploads/2020/12/WhatsApp-Image-2021-08-24-at-10.23.26-AM-768x1024.jpeg',
    'https://static.wixstatic.com/media/nsplsh_ac19a73c5e804d0f8d571cd27aaa7349~mv2.jpg/v1/fill/w_568,h_378,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/nsplsh_ac19a73c5e804d0f8d571cd27aaa7349~mv2.jpg',
    '/eco-friendly.jpg',
    '/assets_task_01k0kxma90ekgszv8r95fqecn3_1753015349_img_0.webp',
    '/assets_task_01k0kxsch4fqz8znv17hc64qpk_1753015524_img_1.webp'
];

const AboutUs = forwardRef<HTMLDivElement, AboutUsProps>(({ dict }, ref) => {
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

    const { label, heading, description, features } = dict;

    useEffect(() => {
        ScrollTrigger.batch(cardRefs.current, {
            onEnter: batch => {
                gsap.from(batch, {
                    opacity: 0,
                    y: 50,
                    stagger: 0.2,
                    duration: 0.8,
                    ease: 'power3.out',
                });
            },
            once: true,
        });
    }, []);

    return (
        <section
            ref={ref}
            id='about-us'
            className="py-20 px-6 lg:px-12 max-w-7xl mx-auto"
        >
            <div className="max-w-6xl mx-auto text-center mb-12">
                <p className="text-sm uppercase text-primary tracking-widest font-semibold mb-2">
                    {label}
                </p>
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-2 leading-none md:leading-12">
                    {heading}
                </h2>
                <p className="text-gray-600 mx-auto mt-10 md:mt-5 text-sm md:text-base max-w-xl lg:max-w-4xl">
                    {description}
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {features.map((item, index) => (
                    <div
                        key={`${item.title}-${index}`}
                        ref={(el) => {
                            cardRefs.current[index] = el;
                        }}
                        className="relative h-[380px] rounded-xl overflow-hidden group shadow-lg"
                    >
                        <img
                            src={imageSources[index] ?? imageSources[0]}
                            alt={`Feature ${item.title}`}
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />

                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-6 z-10 bg-black/40">
                            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                            <p className="text-sm">{item.description}</p>
                        </div>

                        <div className="absolute inset-0 z-20 pointer-events-none">
                            <div className="absolute top-3 left-3 border-t-4 border-l-4 border-white w-6 h-6" />
                            <div className="absolute top-3 right-3 border-t-4 border-r-4 border-white w-6 h-6" />
                            <div className="absolute bottom-3 left-3 border-b-4 border-l-4 border-white w-6 h-6" />
                            <div className="absolute bottom-3 right-3 border-b-4 border-r-4 border-white w-6 h-6" />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
});

AboutUs.displayName = 'AboutUs';
export default AboutUs;