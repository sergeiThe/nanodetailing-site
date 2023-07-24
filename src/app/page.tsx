import { Footer } from "@/modules/footer";
import { Header } from "@/modules/header";
import { HeroSection } from "@/modules/hero-section";
import { ServicesSection } from "@/modules/services-section";

export default function Home() {
    return (
        <>
            <Header />
            <main className="min-h-screen">
                <HeroSection />
                <ServicesSection />
            </main>
            <Footer />
        </>
    );
}
