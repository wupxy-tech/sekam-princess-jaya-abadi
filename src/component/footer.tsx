'use client';

import Link from 'next/link';
import {
    Package,        // Shipping
    Truck,          // Delivery
    RotateCcw,      // Returns
} from 'lucide-react';

interface FooterProps {
    dict: {
        shipping: string;
        shippingDesc: string;
        delivery: string;
        deliveryDesc: string;
        returns: string;
        returnsDesc: string;
        social: string;
        support: string;
        company: string;
        subscribe: string;
        subscribeDesc: string;
        emailPlaceholder: string;
        copyright: string;
        navLinks: {
            home: string;
            products: string;
            articles: string;
            contact: string;
        };
    };
    lang: 'en' | 'id';
}

export default function Footer({ dict, lang }: FooterProps) {
    const year = new Date().getFullYear();

    const Line = ({ className = '' }: { className?: string }) => (
        <div className={`h-px w-full bg-white/15 ${className}`} />
    );

    const IconWrap = ({ children }: { children: React.ReactNode }) => (
        <div className="mb-3 text-white/90">
            {/* ukuran besar + garis tipis */}
            <div className="inline-flex items-center justify-center">
                <div className="[&>*]:h-9 [&>*]:w-9 md:[&>*]:h-10 md:[&>*]:w-10 [&>*]:stroke-[1.25]" >
                    {children}
                </div>
            </div>
        </div>
    );

    return (
        <footer className="bg-[#1D252A] text-white" id="contact">
            {/* Garis frame atas */}
            <Line />

            {/* Top Info (3 kolom) */}
            <div className="grid grid-cols-1 md:grid-cols-3">
                <div className="p-6 border-b md:border-b-0 md:border-r border-white/15">
                    <IconWrap>
                        <Package />
                    </IconWrap>
                    <h4 className="font-semibold mb-1">{dict.shipping}</h4>
                    <p className="text-sm text-white/80">{dict.shippingDesc}</p>
                </div>

                <div className="p-6 border-b md:border-b-0 md:border-r border-white/15">
                    <IconWrap>
                        <Truck />
                    </IconWrap>
                    <h4 className="font-semibold mb-1">{dict.delivery}</h4>
                    <p className="text-sm text-white/80">{dict.deliveryDesc}</p>
                </div>

                <div className="p-6">
                    <IconWrap>
                        <RotateCcw />
                    </IconWrap>
                    <h4 className="font-semibold mb-1">{dict.returns}</h4>
                    <p className="text-sm text-white/80">{dict.returnsDesc}</p>
                </div>
            </div>

            {/* Garis pemisah besar */}
            <Line />

            {/* Bottom Grid (4 kolom) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6 lg:px-12 py-10">
                {/* Social */}
                <div className="border-t lg:border-t-0 lg:border-r border-white/15 pt-6 lg:pt-0 lg:pr-8">
                    <h5 className="text-sm font-semibold mb-3">{dict.social}</h5>
                    <ul className="space-y-2 text-sm text-white/80">
                        <li><a href="#" className="hover:text-white">Facebook</a></li>
                        <li><a href="#" className="hover:text-white">Instagram</a></li>
                        <li><a href="#" className="hover:text-white">Pinterest</a></li>
                        <li><a href="#" className="hover:text-white">Tiktok</a></li>
                    </ul>
                </div>

                {/* Support */}
                <div className="border-t lg:border-t-0 lg:border-r border-white/15 pt-6 lg:pt-0 lg:px-8">
                    <h5 className="text-sm font-semibold mb-3">{dict.support}</h5>
                    <ul className="space-y-2 text-sm text-white/80">
                        <li><a href="#" className="hover:text-white">Top Questions</a></li>
                        <li><a href="#" className="hover:text-white">Start a Return</a></li>
                        <li><Link href={`/${lang}/articles`} className="hover:text-white">Articles</Link></li>
                    </ul>
                </div>

                {/* Company */}
                <div className="border-t lg:border-t-0 lg:border-r border-white/15 pt-6 lg:pt-0 lg:px-8">
                    <h5 className="text-sm font-semibold mb-3">{dict.company}</h5>
                    <ul className="space-y-2 text-sm text-white/80">
                        <li><a href="#" className="hover:text-white">About Us</a></li>
                        <li><a href="#" className="hover:text-white">Customer Reviews</a></li>
                        <li><Link href={`/${lang}/`} className="hover:text-white">{dict.navLinks.home}</Link></li>
                        <li><Link href={`/${lang}/product`} className="hover:text-white">{dict.navLinks.products}</Link></li>
                    </ul>
                </div>

                {/* Subscribe */}
                <div className="border-t lg:border-t-0 border-white/15 pt-6 lg:pt-0 lg:pl-8">
                    <h5 className="text-sm font-semibold mb-3">{dict.subscribe}</h5>
                    <p className="text-sm text-white/80 mb-3">{dict.subscribeDesc}</p>

                    <form
                        className="flex items-center border-b border-white/40 focus-within:border-white transition"
                        onSubmit={(e) => e.preventDefault()}
                    >
                        <input
                            type="email"
                            placeholder={dict.emailPlaceholder}
                            className="bg-transparent flex-1 px-2 py-2 text-sm placeholder-white/50 focus:outline-none"
                            aria-label="Email"
                        />
                        <button
                            type="submit"
                            className="px-2 font-bold tracking-wide transition-transform hover:translate-x-1"
                            aria-label="Submit email"
                            title="Submit"
                        >
                            ↗
                        </button>
                    </form>
                </div>
            </div>

            {/* Garis frame bawah */}
            <Line />

            {/* Copyright */}
            <div className="py-6 text-center text-xs text-white/60">
                © {year} PT. Princess Jaya Abadi. {dict.copyright}
            </div>
        </footer>
    );
}
