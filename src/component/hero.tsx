'use client';

import { forwardRef } from 'react';
import Link from 'next/link';

interface HeroProps {
    dict: {
        title: string;
        subtitle: string;
        cta: string;
    };
    lang: 'en' | 'id';
    images?: {
        main: string;
        small: string;
        banner: string;
    };
}

const Hero = forwardRef<HTMLDivElement, HeroProps>(
    ({ dict, lang, images }, ref) => {
        const img = {
            main: images?.main ?? '/hero-main.avif',
            small: images?.small ?? '/hero-small.avif',
            banner: images?.banner ?? '/hero-banner.avif',
        };

        const ctaLink = `/${lang}#product`;

        return (
            <section
                ref={ref}
                className="relative w-full bg-background text-foreground"
            >
                {/* Headline */}
                <div className="mx-auto px-4 sm:px-6">
                    <h1
                        className="select-none leading-none tracking-tight font-extrabold text-[16vw] sm:text-[12vw] md:text-[10vw] lg:text-[8.5vw]"
                        style={{ letterSpacing: '-0.02em' }}
                    >
                        {dict.title}
                    </h1>
                </div>

                {/* Grid konten */}
                <div className="mx-auto py-6 md:py-8 lg:py-10">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-0 relative border-y border-secondary">
                        {/* Kolom kiri */}
                        <div className="md:col-span-5 flex flex-col divide-y divide-secondary">
                            {/* Card teks + gambar kecil */}
                            <div className="p-5 flex gap-4">
                                <div className="shrink-0 w-24 h-24 sm:w-28 sm:h-28 bg-background overflow-hidden">
                                    <img
                                        src={img.small}
                                        alt="Small promo"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="min-w-0">
                                    <h3 className="font-semibold text-base sm:text-lg">
                                        Eco Friendly Product & Packaging
                                    </h3>
                                    <p className="mt-1 text-sm opacity-90">{dict.subtitle}</p>
                                    <Link
                                        href={ctaLink}
                                        className="group inline-flex items-center gap-2 mt-3 text-sm font-medium border-b border-foreground hover:text-primary hover:border-primary"
                                    >
                                        {dict.cta}
                                        <span
                                            className="translate-y-[1px] transition-transform group-hover:translate-x-0.5"
                                            aria-hidden
                                        >
                                            ↗
                                        </span>
                                    </Link>
                                </div>
                            </div>

                            {/* Banner */}
                            <div className="relative">
                                <span className="absolute left-3 top-3 z-10 text-xs font-medium px-2 py-1 rounded bg-secondary/10 text-foreground">
                                    Exclusive
                                </span>
                                <img
                                    src={img.banner}
                                    alt="Banner"
                                    className="w-full h-52 sm:h-64 md:h-full object-cover"
                                />
                            </div>
                        </div>

                        {/* Kolom kanan */}
                        <div className="md:col-span-7 relative border-l border-secondary">
                            <img
                                src={img.main}
                                alt="Hero main"
                                className="w-full h-[360px] sm:h-[420px] md:h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
);

Hero.displayName = 'Hero';
export default Hero;
