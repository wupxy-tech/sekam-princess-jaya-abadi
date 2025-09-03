'use client';

import { forwardRef } from 'react';
import Link from 'next/link';

interface LocationShowcaseProps {
    dict: {
        label: string;
        heading: string;
        description: string;
        ctaLabel: string;
        ctaHref: string; // contoh: "/id/#contact" atau link WA
    };
    images?: {
        small?: string; // gambar kecil di kanan bawah
    };
}

const LocationShowcase = forwardRef<HTMLDivElement, LocationShowcaseProps>(
    ({ dict, images }, ref) => {
        const { label, heading, description, ctaLabel, ctaHref } = dict;
        const smallImg = images?.small ?? '/map pt pja.avif';

        return (
            <section ref={ref} id="location" className="relative bg-[#FFFFF2] text-[#1D252A]">

                <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10 md:py-12">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
                        {/* Kiri: media besar (pakai Maps) */}
                        <div className="lg:col-span-6">
                            <div className="relative overflow-hidden rounded-md border border-[#D6D4C8] bg-white">
                                <iframe
                                    title="Lokasi PT. Princess Jaya Abadi"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.148171132106!2d105.31006029999999!3d-5.394380699999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e40db6366f4b0a3%3A0x92e0e5e87bac595!2sJl.%20Pulau%20Singkep%20No.7%2C%20Sukarame%2C%20Kec.%20Sukarame%2C%20Kota%20Bandar%20Lampung%2C%20Lampung%2035131!5e0!3m2!1sen!2sid!4v1752975410890!5m2!1sen!2sid"
                                    width="100%"
                                    height="560"
                                    loading="lazy"
                                    allowFullScreen
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="block"
                                />
                                {/* sudut aksen kiri atas */}
                                <span className="pointer-events-none absolute -left-1 -top-1 h-8 w-8 border-t-8 border-l-8 border-[#E7E5DC] rounded-tl-sm" />
                            </div>
                        </div>

                        {/* Kanan: headline + copy + CTA + gambar kecil */}
                        <div className="lg:col-span-6 flex flex-col">
                            <div className="border-b border-[#D6D4C8] pb-6">
                                <p className="uppercase tracking-wide text-xs text-[#6E6B5E] font-semibold">
                                    {label}
                                </p>
                                <h2
                                    className="mt-2 font-extrabold leading-18 text-[14vw] sm:text-[11vw] md:text-[8vw] lg:text-[5.8vw]"
                                    style={{ letterSpacing: '-0.02em' }}
                                >
                                    {heading}
                                </h2>
                            </div>

                            <div className="pt-6">
                                <p className="max-w-2xl text-sm md:text-base text-[#3A3A32]">
                                    {description}
                                </p>

                                {/* CTA smooth */}
                                <div className="mt-6">
                                    <Link
                                        href={ctaHref}
                                        className="group inline-flex items-center gap-3 text-sm font-medium"
                                    >
                                        <span className="border-b border-[#1D252A] group-hover:border-transparent transition-colors">
                                            {ctaLabel}
                                        </span>
                                        <span
                                            aria-hidden
                                            className="inline-block translate-y-[1px] transition-transform group-hover:translate-x-1"
                                        >
                                            ↗
                                        </span>
                                    </Link>
                                </div>
                            </div>

                            {/* Gambar kecil di kanan bawah */}
                            <div className="mt-6" id='export-destination'>
                                <p className="uppercase tracking-wide text-xs text-[#6E6B5E] font-semibold">
                                    Our Export Destionation
                                </p>
                                <br />
                                <p>
                                    Asia, Europe, America, Middle East, Australia
                                </p>
                                <div className="overflow-hidden border border-[#D6D4C8] mt-2">
                                    <img
                                        src={smallImg}
                                        alt="Detail"
                                        className="w-full h-52 md:h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
);

LocationShowcase.displayName = 'LocationShowcase';
export default LocationShowcase;
