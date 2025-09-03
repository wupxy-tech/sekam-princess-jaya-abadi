'use client';

import { forwardRef, useState } from 'react';
import { PackageCheck, CheckCircle, Truck, Users } from 'lucide-react';

type IconType = 'PackageCheck' | 'CheckCircle' | 'Truck' | 'Users';

interface USPItem {
    title: string;
    description: string;
    image: string;
}

interface USPProps {
    dict: {
        heading: string;
        items: USPItem[];
    };
}

const iconMapping: Record<IconType, React.ComponentType<any>> = {
    PackageCheck,
    CheckCircle,
    Truck,
    Users,
};

const USP = forwardRef<HTMLDivElement, USPProps>(({ dict }, ref) => {
    const [imgErrors, setImgErrors] = useState<Record<number, boolean>>({});

    const uspItems: USPItem[] = dict.items;

    const getIconForItem = (title: string): IconType => {
        switch (title) {
            case 'Premium Packaging':
                return 'PackageCheck';
            case 'Strict Sorting':
                return 'CheckCircle';
            case 'Efficient Logistics':
                return 'Truck';
            case 'Local Contribution':
                return 'Users';
            default:
                return 'PackageCheck';
        }
    };

    return (
        <section ref={ref} className="relative py-24 px-6 text-white overflow-hidden bg-primary">
            <div className="absolute inset-0 z-0">
                <img
                    src="/assets_task_01k0m0s5nmetrv4cxvjtkfj8g8_1753018663_img_0.webp"
                    alt="Background USP"
                    className="w-full h-full object-cover opacity-20"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/90 to-transparent" />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12">
                    {dict.heading}
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                    {uspItems.map(({ title, description, image }, index) => {
                        const icon: IconType = getIconForItem(title);
                        const IconComponent = iconMapping[icon];

                        return (
                            <div
                                key={index}
                                className="relative rounded-xl overflow-hidden shadow-md group aspect-square"
                            >
                                <img
                                    src={image}
                                    alt={title}
                                    className="absolute inset-0 w-full h-full object-cover brightness-75 transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-br from-secondary/70 to-transparent" />

                                <div className="relative z-10 p-6 flex flex-col gap-3">
                                    <div className="p-3 bg-white/10 rounded-full w-fit">
                                        <IconComponent className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-lg font-semibold">{title}</h3>
                                    <p className="text-sm text-white/90 leading-relaxed">{description}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
});

USP.displayName = 'USP';
export default USP;