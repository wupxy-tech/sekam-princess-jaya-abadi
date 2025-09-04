'use client';

import { useRef, forwardRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

/* -------------------- Types -------------------- */
interface ProductItem {
    title: string;
    description: string;
    badge?: 'Exclusive' | 'New';
    href?: string;
}
interface ProductProps {
    dict: {
        label: string;
        heading: string;
        description: string;
        cta: string;
        items: ProductItem[];
    };
    lang: 'en' | 'id';
}

/* -------------------- Assets -------------------- */
const imageSources = [
    '/sekam-padi-mentah.png',
    '/arang-sekam.avif',
    '/abu-sekam.png',
];

/* -------------------- Helpers -------------------- */
const isSekamBakar = (title?: string, src?: string) => {
    const t = (title ?? '').toLowerCase();
    const s = (src ?? '').toLowerCase();
    return t.includes('arang') || t.includes('bakar') || s.includes('arang');
};

const badgeEl = (badge?: 'Exclusive' | 'New') =>
    badge ? (
        <span
            className={`absolute left-3 top-3 z-20 rounded-sm px-2 py-1 text-[10px] font-semibold tracking-wide
        ${badge === 'Exclusive'
                    ? 'bg-secondary text-foreground'
                    : 'bg-primary text-background'
                }`}
        >
            {badge}
        </span>
    ) : null;

/* -------------------- Component -------------------- */
const Product = forwardRef<HTMLDivElement, ProductProps>(({ dict, lang }, ref) => {
    const headerRef = useRef<HTMLDivElement>(null);
    const gridMobileRef = useRef<HTMLDivElement>(null);

    const { label, heading, description, cta, items } = dict;
    const orderText = lang === 'id' ? 'Pesan Sekarang' : 'Order Now';

    const Card = ({
        idx,
        product,
        tall = false,
    }: {
        idx: number;
        product: ProductItem;
        tall?: boolean;
    }) => {
        const imgSrc = imageSources[idx % imageSources.length];
        const smallerScale = isSekamBakar(product.title, imgSrc);
        const hoverScaleClass = smallerScale
            ? 'group-hover:scale-[0.8]'
            : 'group-hover:scale-[1.03]';
        const href =
            product.href ??
            `https://wa.me/62817801588?text=${encodeURIComponent(
                (lang === 'id'
                    ? 'Halo, saya ingin memesan '
                    : 'Hello, I want to order ') + product.title
            )}`;

        return (
            <figure
                className={`group relative overflow-hidden rounded-md border border-secondary ${tall ? 'row-span-2' : ''
                    }`}
            >
                {badgeEl(product.badge)}

                {/* Image */}
                <img
                    src={imgSrc}
                    alt={product.title}
                    className={`w-full object-cover transition-all duration-500 ${hoverScaleClass} group-hover:blur-[2px] ${tall ? 'h-full md:h-full' : 'h-full'
                        } ${idx === 1 && 'scale-75'}`}
                />

                {/* Hover overlay CTA */}
                <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <Link
                        href={href}
                        className="pointer-events-auto rounded-full border border-secondary bg-background/90 px-5 py-2 text-sm font-semibold text-foreground backdrop-blur hover:bg-primary hover:text-background transition"
                    >
                        {orderText}
                    </Link>
                </div>

                {/* Caption */}
                <figcaption className="absolute inset-x-0 bottom-0 z-10">
                    <div className="m-3 rounded-md/90 px-3 py-2">
                        <h3 className="text-sm font-semibold text-foreground">
                            {product.title}
                        </h3>
                        <p className="mt-0.5 text-xs text-foreground/70">
                            {product.description}
                        </p>
                    </div>
                </figcaption>
            </figure>
        );
    };

    return (
        <section id="product" ref={ref} className="relative bg-background py-12 border-b border-secondary">
            {/* Header */}
            <div
                ref={headerRef}
                className="mx-auto grid grid-cols-1 gap-6 px-4 sm:px-6 md:grid-cols-5 md:items-end"
            >
                <div className="md:col-span-3">
                    <p className="text-xs uppercase tracking-[0.2em] text-foreground/60">
                        {label}
                    </p>
                    <h2 className="mt-1 font-extrabold text-foreground text-[56px] sm:text-[72px] md:text-[96px] lg:text-[112px] leading-[0.9]">
                        {heading}
                    </h2>
                    <div className="mt-10 h-[0.5px] w-full bg-secondary" />
                </div>

                <div className="md:col-span-2 md:pl-6">
                    <h3 className="text-2xl font-light text-foreground">{description}</h3>
                </div>
            </div>

            {/* Mobile grid */}
            <div
                ref={gridMobileRef}
                className="mx-auto mt-8 grid grid-cols-1 gap-4 px-4 sm:grid-cols-2 md:hidden"
            >
                {items.map((product, idx) => (
                    <Card key={idx} idx={idx} product={product} />
                ))}
            </div>

            {/* Desktop grid */}
            <div className="hidden md:block">
                <div
                    className="mx-auto hidden grid-cols-2 gap-5 px-4 sm:px-6 md:mt-10 md:grid"
                    style={{
                        display: 'grid',
                        gridTemplateColumns: '2fr 1fr',
                        gridTemplateRows: 'repeat(2, minmax(220px, auto))',
                        gap: '20px',
                    }}
                >
                    {items[0] && <Card idx={0} product={items[0]} tall />}
                    {items[1] && <Card idx={1} product={items[1]} />}
                    {items[2] && <Card idx={2} product={items[2]} />}
                </div>
            </div>

            {/* CTA bottom */}
            <div className="mt-10 text-center">
                <Link
                    href={`/${lang}/product`}
                    className="group inline-flex items-center gap-2 rounded-full border border-secondary px-6 py-3 font-semibold text-foreground transition hover:bg-primary hover:text-background"
                >
                    {cta}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
            </div>
        </section>
    );
});

Product.displayName = 'Product';
export default Product;
