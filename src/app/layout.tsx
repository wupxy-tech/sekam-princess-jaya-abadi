import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Charcoal Briquette Exporter | PT. Princess Jaya Abadi Indonesia",
    description:
        "PT. Princess Jaya Abadi is a leading Indonesian manufacturer and global exporter of premium coconut charcoal briquettes for BBQ, shisha, and industrial use. Offering sustainable, high-quality, and verified briquettes with low ash content, high calorific value, and trusted international shipping.",
    keywords: [
        "charcoal briquette exporter",
        "coconut charcoal briquette",
        "shisha charcoal supplier",
        "BBQ briquette manufacturer",
        "briquette factory Indonesia",
        "export briquette bulk",
        "buy briquette overseas",
        "sustainable charcoal exporter",
        "eco friendly briquettes",
        "briquette supplier Asia",
        "briquette distributor Europe",
        "trusted charcoal manufacturer",
        "charcoal briquette for wholesale",
        "charcoal briquette for importers",
        "high quality charcoal Indonesia",
        "low ash charcoal briquette",
        "bulk order briquette for BBQ",
        "verified exporter charcoal",
        "export charcoal company Lampung",
        "Indonesian charcoal producer"
    ],
    metadataBase: new URL("https://princessjayaabadi.com"),
    alternates: {
        canonical: "/",
        languages: {
            en: "/en",
            id: "/id",
        },
    },
    openGraph: {
        title: "Premium Coconut Charcoal Briquettes | PT. Princess Jaya Abadi",
        description:
            "Export-quality coconut charcoal briquettes made in Indonesia. Ideal for BBQ, shisha, and commercial use. Sustainable, efficient, clean-burning.",
        url: "https://princessjayaabadi.com",
        siteName: "Princess Jaya Abadi",
        images: [
            {
                url: "/og-thumbnail.jpg",
                width: 1200,
                height: 630,
                alt: "PT. Princess Jaya Abadi - Charcoal Briquette Exporter",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Buy Premium Briquettes from Indonesia | Princess Jaya Abadi",
        description:
            "Your trusted global partner for coconut charcoal briquettes. Secure logistics, eco-friendly production, and verified quality.",
        images: ["/og-thumbnail.jpg"],
    },
};

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            {children}
        </>
    );
}
