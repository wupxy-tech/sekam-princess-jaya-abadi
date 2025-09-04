'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { Phone, Menu, X } from 'lucide-react';

interface Dict {
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
}

interface NavbarProps {
    dict: Dict;
    lang: 'en' | 'id';
}

const navItems = [
    { key: 'productsLink', href: '/#product' },
    { key: 'exportDestinationLink', href: '/#export-destination' },
    { key: 'locationLink', href: '/#location' },
    { key: 'contact', href: '/#contact' },
] as const;

export default function Navbar({ dict, lang }: NavbarProps) {
    const router = useRouter();
    const pathname = usePathname();

    // base path tanpa prefix bahasa
    const currentBase = pathname.startsWith(`/${lang}`)
        ? pathname.slice(`/${lang}`.length) || '/'
        : pathname;

    const [open, setOpen] = useState(false);

    const isActive = (href: string) => {
        // untuk anchor (#...), anggap active saat di halaman home
        if (href.startsWith('/#')) return currentBase === '/';
        // untuk path biasa (kalau nanti ada)
        return currentBase === href || currentBase.startsWith(`${href}/`);
    };

    const linkCls = (href: string) =>
        `px-3 py-2 rounded-md transition-colors text-secondary hover:text-primary`;

    const toggleLanguage = () => {
        const newLang = lang === 'en' ? 'id' : 'en';
        router.push(`/${newLang}${currentBase}`);
    };

    return (
        <header className="sticky top-0 z-50 w-full bg-background border-b border-secondary/60">
            <div className="mx-auto px-3 sm:px-4 lg:px-6">
                {/* Desktop */}
                <div className="hidden md:flex justify-between items-center h-16">
                    {/* Left: Logo */}
                    <div className="flex items-center gap-2">
                        <Link href={`/${lang}/`} className="flex items-center gap-2">
                            <img
                                src="/logo/Logo CV.PJA Type 1 orange.avif"
                                alt="Logo CV. Princess Jaya Abadi"
                                className="h-8 w-8"
                            />
                            <span className="font-semibold text-sm lg:text-base text-foreground">
                                Princess Jaya Abadi
                            </span>
                        </Link>
                    </div>

                    {/* Center: Nav */}
                    <nav aria-label="Main">
                        <ul className="flex items-center gap-2 lg:gap-6 text-sm lg:text-base font-light">
                            {navItems.map((item) => (
                                <li key={item.href}>
                                    <Link href={`/${lang}${item.href}`} className={linkCls(item.href)}>
                                        {dict[item.key]}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Right: Actions */}
                    <div className="flex items-center gap-3">
                        <a
                            href="https://wa.me/62817801588"
                            aria-label="Contact via WhatsApp"
                            className="p-2 rounded-md text-foreground hover:text-primary transition"
                        >
                            <Phone className="h-5 w-5" strokeWidth={1.5} />
                        </a>

                        <button
                            onClick={toggleLanguage}
                            className="text-xs px-3 py-1 rounded-full border border-secondary text-foreground hover:border-primary hover:text-primary transition"
                        >
                            {lang.toUpperCase()}
                        </button>
                    </div>
                </div>

                {/* Mobile: bar */}
                <div className="md:hidden flex items-center justify-between h-14">
                    <Link href={`/${lang}/`} className="flex items-center gap-2">
                        <img
                            src="/logo/Logo CV.PJA Type 1 orange.avif"
                            alt="Logo CV. Princess Jaya Abadi"
                            className="h-7 w-auto"
                        />
                        <span className="font-semibold text-sm text-foreground">PJA</span>
                    </Link>

                    <div className="flex items-center gap-2">
                        <a
                            href="https://wa.me/62817801588"
                            aria-label="Contact via WhatsApp"
                            className="p-2 rounded-md text-foreground"
                        >
                            <Phone className="h-5 w-5" strokeWidth={1.5} />
                        </a>

                        <button
                            onClick={toggleLanguage}
                            className="text-[11px] px-2 py-1 rounded-full border border-secondary text-foreground"
                            aria-label="Switch language"
                        >
                            {lang.toUpperCase()}
                        </button>

                        <button
                            onClick={() => setOpen((v) => !v)}
                            aria-label="Toggle menu"
                            className="p-2 rounded-md text-foreground hover:text-primary transition"
                        >
                            {open ? (
                                <X className="h-6 w-6" strokeWidth={1.5} />
                            ) : (
                                <Menu className="h-6 w-6" strokeWidth={1.5} />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile menu */}
                <div
                    className={`md:hidden overflow-hidden transition-[max-height] duration-300 ${open ? 'max-h-96' : 'max-h-0'
                        }`}
                >
                    <nav aria-label="Mobile" className="pb-3">
                        <ul className="flex flex-col gap-1 bg-background">
                            {navItems.map((item) => (
                                <li key={item.href}>
                                    <Link
                                        href={`/${lang}${item.href}`}
                                        className={`block px-3 py-2 border-b border-secondary/40 ${linkCls(
                                            item.href
                                        )}`}
                                        onClick={() => setOpen(false)}
                                    >
                                        {dict[item.key]}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}
