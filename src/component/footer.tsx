'use client';

import Link from 'next/link';

interface SimpleFooterProps {
    dict: {
        headline: string;
        company: string;
        email: string;
        phone: string;
        note?: string;
    };
    lang: 'en' | 'id';
}

function buildWaLink(phone: string, lang: 'en' | 'id') {
    let digits = (phone || '').replace(/\D/g, '');
    if (digits.startsWith('0')) digits = '62' + digits.slice(1);
    if (digits.startsWith('620')) digits = '62' + digits.slice(2);
    const msg =
        lang === 'id'
            ? 'Halo, saya tertarik dengan produk Anda.'
            : 'Hello, I am interested in your products.';
    return `https://wa.me/${digits}?text=${encodeURIComponent(msg)}`;
}

export default function SimpleContactFooter({ dict, lang }: SimpleFooterProps) {
    const waHref = buildWaLink(dict.phone, lang);
    const ctaText = lang === 'id' ? 'Chat via WhatsApp' : 'Chat via WhatsApp';

    return (
        <section
            id="contact"
            className="relative w-full bg-background text-foreground border-t border-secondary"
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10 md:py-14">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
                    {/* Kiri: info */}
                    <div className="md:col-span-5">
                        <div className="border border-secondary p-5 sm:p-6">
                            <h3 className="text-base sm:text-lg font-semibold">{dict.company}</h3>

                            <div className="mt-2 text-sm">
                                <p className="text-foreground/80">
                                    <span className="font-medium">Email:</span>{' '}
                                    <a
                                        href={`mailto:${dict.email}`}
                                        className="underline hover:text-primary"
                                    >
                                        {dict.email}
                                    </a>
                                </p>
                                <p className="text-foreground/80 mt-1">
                                    <span className="font-medium">Phone/WA:</span>{' '}
                                    <a
                                        href={`tel:${dict.phone.replace(/\D/g, '')}`}
                                        className="underline hover:text-primary"
                                    >
                                        {dict.phone}
                                    </a>
                                </p>
                                {dict.note && (
                                    <p className="mt-2 text-xs text-foreground/60">{dict.note}</p>
                                )}
                            </div>

                            <a
                                href={waHref}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-5 inline-flex items-center justify-center rounded-full border border-secondary bg-background px-5 py-3 font-semibold hover:bg-primary hover:text-background transition"
                            >
                                {ctaText} ↗
                            </a>
                        </div>
                    </div>

                    {/* Kanan: headline */}
                    <div className="md:col-span-7 md:border-l md:border-secondary md:pl-8">
                        <h2
                            className="leading-none tracking-tight font-extrabold text-[14vw] sm:text-[10vw] md:text-[8vw] lg:text-[6.5vw] select-none"
                            style={{ letterSpacing: '-0.02em' }}
                        >
                            {dict.headline}
                        </h2>
                    </div>
                </div>
            </div>
        </section>
    );
}
