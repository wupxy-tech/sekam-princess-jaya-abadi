'use client';

import { useEffect, useRef, forwardRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface ProductItem {
    title: string;
    description: string;
    badge?: 'Exclusive' | 'New';
}

interface ProductProps {
    dict: {
        label: string;
        heading: string;
        description: string;
        cta: string;
        items: ProductItem[];
        filters?: string[];
    };
    lang: 'en' | 'id';
}

const imageSources = [
    '/product/cube.avif',
    '/product/cube-hole.avif',
    '/product/stix.avif',
    '/product/hexagon.avif',
    '/product/octagon.avif',
    '/product/cube.avif',
    '/product/cube-hole.avif',
    '/product/stix.avif',
];

const Product = forwardRef<HTMLDivElement, ProductProps>(({ dict, lang }, ref) => {
    const headerRef = useRef<HTMLDivElement>(null);
    const gridMdUpRef = useRef<HTMLDivElement>(null);
    const gridMobileRef = useRef<HTMLDivElement>(null);

    const {
        label,
        heading,
        description,
        cta,
        items,
    } = dict;

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
        if (headerRef.current) {
            tl.from(headerRef.current.children, { opacity: 0, y: 24, stagger: 0.08, duration: 0.7 });
        }
        const animateGrid = (el?: HTMLDivElement | null) => {
            if (!el) return;
            gsap.from(el.children, {
                opacity: 0,
                y: 30,
                stagger: 0.12,
                duration: 0.8,
                ease: 'power3.out',
                scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none none' },
            });
        };
        animateGrid(gridMobileRef.current);
        animateGrid(gridMdUpRef.current);
    }, []);

    // peta area desktop + CTA
    const areas = [
        'item1 item2 item3',
        'item4 item5 item5',
        // 'item6 item7 item8',
        'cta cta cta',
    ];

    const renderBadge = (badge?: 'Exclusive' | 'New') =>
        badge ? (
            <span
                className={`absolute left-3 top-3 z-20 rounded-sm px-2 py-1 text-[10px] font-semibold tracking-wide
        ${badge === 'Exclusive'
                        ? 'bg-[#BEBDB2] text-[#1D252A]'
                        : 'bg-[#B7A458] text-[#FFFFF2]'
                    }`}
            >
                {badge}
            </span>
        ) : null;

    return (
        <section ref={ref} id="product" className="relative bg-[#FFFFF2] py-12">
            {/* header: kiri judul jumbo, kanan filter/desc */}
            <div
                ref={headerRef}
                className="mx-auto grid grid-cols-1 gap-6 px-4 sm:px-6 md:grid-cols-5 md:items-end"
            >
                <div className="md:col-span-3">
                    <p className="text-xs uppercase tracking-[0.2em] text-[#1D252A]/60">{label}</p>
                    <h2
                        className="mt-1 font-extrabold leading-22 text-[#1D252A]
                         text-[56px] sm:text-[72px] md:text-[96px] lg:text-[112px]"
                    >
                        {heading}
                    </h2>
                    <div className="mt-10 h-[0.5px] w-full bg-[#BEBDB2]" />
                </div>

                <div className="md:col-span-2 md:pl-6">
                    <h3 className="text-2xl font-light text-[#1D252A]">{description}</h3>
                </div>
            </div>

            {/* GRID MOBILE (2 kolom) */}
            <div
                ref={gridMobileRef}
                className="mx-auto mt-8 grid grid-cols-1 gap-4 px-4 sm:grid-cols-2 md:hidden"
            >
                {items.map((product, idx) => (
                    <figure
                        key={idx}
                        className="relative overflow-hidden rounded-md border border-[#BEBDB2] bg-white"
                    >
                        {renderBadge(product.badge)}
                        <img
                            src={imageSources[idx % imageSources.length]}
                            alt={product.title}
                            className="h-60 w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
                        />
                        <figcaption className="p-4">
                            <h3 className="text-sm font-semibold text-[#1D252A]">{product.title}</h3>
                            <p className="mt-1 text-xs text-[#1D252A]/70">{product.description}</p>
                        </figcaption>
                    </figure>
                ))}
            </div>

            {/* GRID ≥ md (3 kolom + CTA di grid-area terakhir) */}
            <div
                ref={gridMdUpRef}
                className="mx-auto hidden grid-cols-3 gap-5 px-4 sm:px-6 md:mt-8 md:grid"
                style={{
                    display: 'grid',
                    gridTemplateAreas: areas.map((r) => `"${r}"`).join(' '),
                    gridTemplateColumns: '1fr 1fr 1fr',
                    gridAutoRows: 'minmax(240px, auto)',
                }}
            >
                {items.slice(0, 8).map((product, idx) => {
                    const area = `item${idx + 1}`;
                    const isWide = area === 'item5';
                    return (
                        <figure
                            key={idx}
                            style={{ gridArea: area }}
                            className="relative overflow-hidden border border-[#BEBDB2] bg-transparent"
                        >
                            {renderBadge(product.badge)}
                            <img
                                src={imageSources[idx % imageSources.length]}
                                alt={product.title}
                                className={`w-full object-cover transition-transform duration-500 hover:scale-[1.02]
                  ${isWide ? 'h-[300px] md:h-[500px]' : 'h-[240px] md:h-[260px]'}`}
                            />
                            <figcaption className="sr-only">
                                <h3>{product.title}</h3>
                                <p>{product.description}</p>
                            </figcaption>
                        </figure>
                    );
                })}

                {/* CTA di dalam grid */}
                <div style={{ gridArea: 'cta' }} className="pt-6 text-center">
                    <Link
                        href={`/${lang}/product#products`}
                        className="group inline-flex items-center gap-2 rounded-full border border-[#BEBDB2] px-6 py-3 font-semibold text-[#1D252A]
                     transition hover:bg-[#B7A458] hover:text-[#FFFFF2]"
                    >
                        {cta}
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                </div>
            </div>
        </section>
    );
});

Product.displayName = 'Product';
export default Product;
