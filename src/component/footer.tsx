'use client';

import Link from 'next/link';

interface SimpleFooterProps {
    dict: {
        headline: string;        // tulisan besar di kanan
        company: string;         // nama PT
        email: string;           // email kontak
        phone: string;           // nomor telepon/WA (boleh dengan +62 / 0)
        note?: string;           // optional subtext kiri (mis. jam operasional)
    };
    lang: 'en' | 'id';
}

function buildWaLink(phone: string, lang: 'en' | 'id') {
    let digits = (phone || '').replace(/\D/g, '');
    if (digits.startsWith('0')) digits = '62' + digits.slice(1);
    if (digits.startsWith('620')) digits = '62' + digits.slice(2); // normalisasi 6208...
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
        <section id="contact" className="relative w-full bg-[#FFFFF2] text-[#1D252A] border-t border-[#BEBDB2]">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10 md:py-14">
                {/* GRID: kiri info + tombol, kanan headline besar */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
                    {/* KIRI */}
                    <div className="md:col-span-5">
                        <div className="border border-[#BEBDB2] p-5 sm:p-6">
                            <h3 className="text-base sm:text-lg font-semibold">{dict.company}</h3>

                            <div className="mt-2 text-sm">
                                <p className="text-[#1D252A]/80">
                                    <span className="font-medium">Email:</span>{' '}
                                    <a href={`mailto:${dict.email}`} className="underline hover:text-[#B7A458]">
                                        {dict.email}
                                    </a>
                                </p>
                                <p className="text-[#1D252A]/80 mt-1">
                                    <span className="font-medium">Phone/WA:</span>{' '}
                                    <a href={`tel:${dict.phone.replace(/\D/g, '')}`} className="underline hover:text-[#B7A458]">
                                        {dict.phone}
                                    </a>
                                </p>
                                {dict.note && <p className="mt-2 text-xs text-[#1D252A]/60">{dict.note}</p>}
                            </div>

                            <a
                                href={waHref}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-5 inline-flex items-center justify-center rounded-full border border-[#BEBDB2] bg-[#FFFFF2] px-5 py-3 font-semibold hover:bg-[#B7A458] hover:text-[#FFFFF2] transition"
                            >
                                {ctaText} ↗
                            </a>
                        </div>
                    </div>

                    {/* KANAN: headline besar ala hero */}
                    <div className="md:col-span-7 md:border-l md:border-[#BEBDB2] md:pl-8">
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
