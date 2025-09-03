'use client';

import { forwardRef, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface CTAProps {
  dict: {
    heading: string;
    description: string;
    button: string;
  };
}

const CTA = forwardRef<HTMLDivElement, CTAProps>(({ dict }, ref) => {
  const contentRef = useRef<HTMLDivElement>(null);

  const { heading, description, button: buttonText } = dict;

  useEffect(() => {
    if (contentRef.current) {
      gsap.from(contentRef.current, {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: contentRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });
    }
  }, []);

  return (
    <section className="relative py-36 text-white bg-gradient-to-b from-primary to-transparent overflow-hidden">
      <div ref={contentRef} className="relative z-10 text-center max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 whitespace-pre-line leading-none md:leading-12">
          {heading}
        </h2>
        <p className="mb-8 text-sm md:text-base text-white/90 whitespace-pre-line">
          {description}
        </p>
        <a
          href="https://wa.me/62817801588"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-primary font-semibold py-3 px-6 rounded-full shadow hover:bg-gray-100 transition"
        >
          {buttonText}
        </a>
      </div>

      <div className="absolute inset-0 opacity-10 bg-[url('/natural.avif')] bg-cover bg-center" />
    </section>
  );
});

CTA.displayName = 'CTA';
export default CTA;