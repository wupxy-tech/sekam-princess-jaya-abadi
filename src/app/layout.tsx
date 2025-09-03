import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Rice Husk Exporter | PT. Princess Jaya Abadi Indonesia",
    description:
        "PT. Princess Jaya Abadi is an Indonesian exporter of premium rice husk products: raw rice husk, rice husk charcoal, and rice husk ash (silica). Consistent quality, sustainable sourcing, and trusted global logistics from Indonesia.",
    keywords: [
        "rice husk exporter",
        "rice husk supplier Indonesia",
        "raw rice husk bulk",
        "rice husk charcoal",
        "rice husk ash",
        "RHA silica",
        "mulch rice husk",
        "animal bedding rice husk",
        "biomass husk fuel",
        "soil amendment husk",
        "export rice husk Asia",
        "import rice husk",
        "rice husk for agriculture",
        "construction grade rice husk ash",
        "silica ash supplier",
        "Lampung rice husk exporter",
        "Indonesia rice byproduct export",
        "bulk husk packaging jumbo bag",
        "trusted rice husk manufacturer",
        "rice husk logistics"
    ],
    metadataBase: new URL("https://princessjayaabadi.com"),
    alternates: {
        canonical: "/",
        languages: {
            en: "/en",
            id: "/id"
        }
    },
    openGraph: {
        title: "Premium Rice Husk & Derivatives | PT. Princess Jaya Abadi",
        description:
            "Export-quality rice husk from Indonesia: raw husk, husk charcoal, and husk ash (silica). Sustainable sourcing, consistent specs, and reliable global shipping.",
        url: "https://princessjayaabadi.com",
        siteName: "Princess Jaya Abadi",
        images: [
            {
                url: "/og-thumbnail.jpg",
                width: 1200,
                height: 630,
                alt: "PT. Princess Jaya Abadi — Rice Husk Exporter"
            }
        ],
        locale: "en_US",
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Buy Premium Rice Husk from Indonesia | Princess Jaya Abadi",
        description:
            "Your trusted partner for raw rice husk, husk charcoal, and husk ash (silica). Verified quality and export-ready packaging.",
        images: ["/og-thumbnail.jpg"]
    }
};

export default async function RootLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
