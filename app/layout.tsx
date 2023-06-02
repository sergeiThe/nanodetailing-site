import { Suspense } from "react";
import "../styles/index.scss";
import Header from "./components/header/Header";
import { Secular_One, Roboto, Poppins } from "next/font/google";
import Analytics from "./components/analytics/Analytics";

export const metadata = {
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

const secular = Secular_One({
    subsets: ["latin"],
    weight: "400",
});
const roboto = Roboto({
    subsets: ["latin"],
    weight: ["400", "700"],
});
const font = Poppins({
    subsets: ["latin"],
    weight: ["100", "400", "700"],
});

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="no">
            <body className={font.className}>
                <Suspense>
                    <Analytics />
                </Suspense>
                <div id="backdrop"></div>
                <div id="modal"></div>

                <main>{children}</main>
            </body>
        </html>
    );
}
