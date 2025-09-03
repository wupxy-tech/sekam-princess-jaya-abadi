export default function FloatWhatsapp() {
    const message = encodeURIComponent(
        `Hello, I am interested in the charcoal briquette export products from PT. Princess Jaya Abadi.\n\nPlease provide more detailed information regarding:\n- Available types and shapes of briquettes (Cube, Hexa, Stix, etc.)\n- Composition and technical specifications\n- Minimum Order Quantity (MOQ)\n- Pricing and packaging options\n- Estimated shipping time and export methods\n\nThank you.`
    );


    return (
        <a
            href={`https://wa.me/62817801588?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat via WhatsApp"
            className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-colors duration-300"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                fill="currentColor"
                className="w-6 h-6"
            >
                <path d="M16 .395C7.168.395 0 7.563 0 16.395c0 2.929.768 5.773 2.234 8.273L0 32l7.594-2.191a15.863 15.863 0 008.406 2.242h.001c8.832 0 16-7.168 16-16S24.832.395 16 .395zm0 29.082c-2.623 0-5.195-.705-7.438-2.047l-.531-.316-4.508 1.303 1.422-4.391-.348-.566C3.57 21.324 2.75 18.91 2.75 16.395c0-7.29 5.96-13.25 13.25-13.25s13.25 5.96 13.25 13.25-5.96 13.25-13.25 13.25zm7.547-9.684c-.414-.207-2.461-1.219-2.844-1.359-.383-.14-.66-.207-.938.207-.277.414-1.078 1.359-1.32 1.641-.242.277-.484.312-.898.104-.414-.207-1.75-.645-3.332-2.055-1.231-1.094-2.063-2.445-2.305-2.859-.242-.414-.026-.637.182-.844.187-.186.414-.484.621-.726.207-.242.276-.414.414-.691.138-.277.07-.52-.035-.726-.104-.207-.938-2.266-1.285-3.101-.34-.82-.683-.71-.938-.726l-.801-.014c-.276 0-.725.104-1.102.52-.383.414-1.461 1.426-1.461 3.477 0 2.05 1.496 4.023 1.703 4.297.207.277 2.948 4.5 7.14 6.195 1 .43 1.781.688 2.391.879 1.004.317 1.914.272 2.637.165.805-.12 2.461-1.004 2.812-1.972.35-.968.35-1.797.242-1.972-.104-.172-.378-.277-.793-.484z" />
            </svg>
        </a>
    );
}
