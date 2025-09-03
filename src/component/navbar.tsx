'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';

interface NavbarProps {
    dict: {
        home: string;
        productsLink: string;
        articles: string;
        contact: string;
        missionLink: string;
        aboutUsLink: string;
        qualityLink: string;
        uspLink: string;
        exportDestinationLink: string;
        newsLink: string;
        locationLink: string;
    };
    lang: 'en' | 'id';
}

const navItems = [
    { key: 'aboutUsLink', href: '/#about-us' },
    { key: 'productsLink', href: '/#product' },
    { key: 'missionLink', href: '/#mission' },
    { key: 'exportDestinationLink', href: '/#export-destination' },
    { key: 'locationLink', href: '/#location' },
    { key: 'contact', href: '/#contact' },
];

export default function Navbar({ dict, lang }: NavbarProps) {
    const router = useRouter();
    const pathname = usePathname();
    const currentBaseUrl = pathname.startsWith(`/${lang}`)
        ? pathname.substring(`/${lang}`.length)
        : pathname;

    const [open, setOpen] = useState(false);

    const isActive = (href: string) => {
        const isAnchor = href.startsWith('/#');
        return isAnchor
            ? currentBaseUrl === '/' && pathname.endsWith(href)
            : currentBaseUrl === href || currentBaseUrl.startsWith(href + '/');
    };

    const linkCls = (href: string) =>
        `px-3 py-2 rounded-md transition-colors
     ${isActive(href)
            ? 'text-[#B7A458]'
            : 'text-[#1D252A] hover:text-[#B7A458]'}
    `;

    const toggleLanguage = () => {
        const newLang = lang === 'en' ? 'id' : 'en';
        router.push(`/${newLang}${currentBaseUrl}`);
    };

    return (
        <header className="sticky top-0 z-50 w-full bg-[#FFFFF2] border-b border-[#BEBDB2]/60">
            <div className="mx-auto px-3 sm:px-4 lg:px-6">
                {/* Desktop layout: three columns -> left logo, center nav, right actions */}
                <div className="hidden md:flex justify-between items-center h-16">
                    {/* Left: Logo */}
                    <div className="flex items-center gap-2">
                        <Link href={`/${lang}/`} className="flex items-center gap-2">
                            <img
                                src="/logo/Logo CV.PJA Type 1 orange.avif"
                                alt="Logo CV. Princess Jaya Abadi"
                                className="h-8 w-8"
                            />
                            <span className="font-semibold text-sm lg:text-base text-[#1D252A]">
                                Princess Jaya Abadi
                            </span>
                        </Link>
                    </div>

                    {/* Center: Nav items */}
                    <nav aria-label="Main" className="justify-self-center">
                        <ul className="flex items-center gap-2 lg:gap-6 text-sm lg:text-base">
                            {navItems.map((item) => (
                                <li key={item.href}>
                                    <Link href={`/${lang}${item.href}`} className={linkCls(item.href)}>
                                        {dict[item.key as keyof typeof dict]}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Right: Actions (phone, cart, lang) */}
                    <div className="justify-self-end flex items-center gap-3">
                        {/* Phone */}
                        <a
                            href="https://wa.me/62817801588"
                            aria-label="Contact"
                            className="p-2 rounded-md text-[#1D252A] hover:text-[#B7A458] transition"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
                                    d="M2.25 6.75c0-1.243 1.007-2.25 2.25-2.25h2.1c.9 0 1.692.6 1.931 1.47l.63 2.25c.192.69-.108 1.434-.744 1.8l-1.26.72a12.06 12.06 0 005.58 5.58l.72-1.26c.366-.636 1.11-.936 1.8-.744l2.25.63c.87.239 1.47 1.031 1.47 1.931v2.1c0 1.243-1.007 2.25-2.25 2.25H17.25C9.596 21.75 2.25 14.404 2.25 6.75V6.75z" />
                            </svg>
                        </a>
                        {/* Cart (placeholder) */}
                        <button
                            aria-label="Cart"
                            className="p-2 rounded-md text-[#1D252A] hover:text-[#B7A458] transition"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
                                    d="M2.25 3.75h2.386c.424 0 .8.27.94.669l.548 1.606m0 0L8.25 14.25h8.69a1.5 1.5 0 001.463-1.175l1.348-6.075a.75.75 0 00-.732-.9H6.124m.0 0L5.04 4.419M8.25 20.25a.75.75 0 100-1.5.75.75 0 000 1.5zm8.25 0a.75.75 0 100-1.5.75.75 0 000 1.5z" />
                            </svg>
                        </button>
                        {/* Lang switch */}
                        <button
                            onClick={toggleLanguage}
                            className="text-xs px-3 py-1 rounded-full border border-[#BEBDB2] text-[#1D252A] hover:border-[#B7A458] hover:text-[#B7A458] transition"
                        >
                            {lang.toUpperCase()}
                        </button>
                    </div>
                </div>

                {/* Mobile: compact bar */}
                <div className="md:hidden flex items-center justify-between h-14">
                    {/* Left: logo */}
                    <Link href={`/${lang}/`} className="flex items-center gap-2">
                        <img
                            src="/logo/Logo CV.PJA Type 1 orange.avif"
                            alt="Logo CV. Princess Jaya Abadi"
                            className="h-7 w-auto"
                        />
                        <span className="font-semibold text-sm text-[#1D252A]">PJA</span>
                    </Link>

                    {/* Right: icons */}
                    <div className="flex items-center gap-2">
                        <button
                            onClick={toggleLanguage}
                            className="text-[11px] px-2 py-1 rounded-full border border-[#BEBDB2] text-[#1D252A]"
                            aria-label="Switch language"
                        >
                            {lang.toUpperCase()}
                        </button>

                        <button
                            onClick={() => setOpen((v) => !v)}
                            aria-label="Toggle menu"
                            className="p-2 rounded-md text-[#1D252A] hover:text-[#B7A458] transition"
                        >
                            {open ? (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile menu panel */}
                <div
                    className={`md:hidden overflow-hidden transition-[max-height] duration-300
            ${open ? 'max-h-96' : 'max-h-0'}`}
                >
                    <nav aria-label="Mobile" className="pb-3">
                        <ul className="flex flex-col gap-1 bg-[#FFFFF2]">
                            {navItems.map((item) => (
                                <li key={item.href}>
                                    <Link
                                        href={`/${lang}${item.href}`}
                                        className={`block px-3 py-2 border-b border-[#BEBDB2]/40 ${linkCls(item.href)} `}
                                        onClick={() => setOpen(false)}
                                    >
                                        {dict[item.key as keyof typeof dict]}
                                    </Link>
                                </li>
                            ))}
                            <li className="flex gap-3 px-3 py-2">
                                <a
                                    href="https://wa.me/62817801588"
                                    className="inline-flex items-center gap-2 text-[#1D252A] hover:text-[#B7A458] transition"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
                                            d="M2.25 6.75c0-1.243 1.007-2.25 2.25-2.25h2.1c.9 0 1.692.6 1.931 1.47l.63 2.25c.192.69-.108 1.434-.744 1.8l-1.26.72a12.06 12.06 0 005.58 5.58l.72-1.26c.366-.636 1.11-.936 1.8-.744l2.25.63c.87.239 1.47 1.031 1.47 1.931v2.1c0 1.243-1.007 2.25-2.25 2.25H17.25C9.596 21.75 2.25 14.404 2.25 6.75V6.75z" />
                                    </svg>
                                    WhatsApp
                                </a>
                                <button
                                    className="inline-flex items-center gap-2 text-[#1D252A] hover:text-[#B7A458] transition"
                                    aria-label="Cart"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
                                            d="M2.25 3.75h2.386c.424 0 .8.27.94.669l.548 1.606m0 0L8.25 14.25h8.69a1.5 1.5 0 001.463-1.175l1.348-6.075a.75.75 0 00-.732-.9H6.124m.0 0L5.04 4.419M8.25 20.25a.75.75 0 100-1.5.75.75 0 000 1.5zm8.25 0a.75.75 0 100-1.5.75.75 0 000 1.5z" />
                                    </svg>
                                    Cart
                                </button>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}
