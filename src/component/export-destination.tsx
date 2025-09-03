'use client';

import { forwardRef } from 'react';

interface ExportDestinationProps {
  dict: {
    title: string;
    regions: string;
    paragraph1: string;
    paragraph2: string;
  };
}

const ExportDestination = forwardRef<HTMLDivElement, ExportDestinationProps>(({ dict }, ref) => {
  const { title, regions, paragraph1, paragraph2 } = dict;

  return (
    <section
      ref={ref}
      id='export-destination'
      className="relative text-gray-800 py-24 px-6 lg:px-12 overflow-hidden"
    >
      <div className="absolute top-0 left-0 pointer-events-none opacity-10 z-0">
        <img
          src="/logo/Logo CV.PJA Type 1 blue.avif"
          alt="Decorative Logo"
          className="w-[380px] lg:w-[480px] xl:w-[560px] object-contain"
        />
      </div>

      <div className="max-w-5xl mx-auto text-center mb-12 z-10 relative">
        <h2 className="text-3xl md:text-5xl font-extrabold text-orange-600 mb-2 tracking-wide">
          {title}
        </h2>
        <p className="text-lg font-semibold text-orange-500 uppercase tracking-wide">
          {regions}
        </p>
      </div>

      <div className="flex justify-center z-0 relative">
        <img
          src="/map pt pja.avif"
          alt="Export Map"
          className="w-full max-w-5xl h-auto object-contain"
        />
      </div>

      <div className="md:max-w-6xl mx-auto text-center mt-12 text-gray-600 text-sm md:text-base leading-7 md:leading-7 max-w-2xl">
        <p>{paragraph1}</p>
        <p className="mt-4">{paragraph2}</p>
      </div>
    </section>
  );
});

ExportDestination.displayName = 'ExportDestination';
export default ExportDestination;