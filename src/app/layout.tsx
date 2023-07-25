import { Footer } from "@/modules/footer";
import { SideSocialLinks } from "@/modules/side-social-links";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ReduxProvider } from "./provider";

const font = Poppins({
    subsets: ["latin"],
    weight: ["100", "400", "700"],
});

export const metadata: Metadata = {
    title: "Nanodetailing | Trondheim",
    description:
        "Vi i NanoDetailing spesialiserer oss på kosmetisk behandling av bil. Vår målsetning er å tilby deg innsyn i våre tekniske løsninger og kompetanse for at du skal kunne oppnå de beste resultatene så trygt og effektivt som mulig.",
    keywords: [
        "nanodetailing",
        "detailing trondheim",
        "bilpleie trondheim",
        "keramisk lakkforsegling trondheim",
    ],
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="no">
            <body className={font.className}>
                <ReduxProvider>
                    <div id="backdrop"></div>
                    <div id="modal"></div>
                    <SideSocialLinks />
                    {children}
                </ReduxProvider>
                <Footer />
            </body>
        </html>
    );
}
