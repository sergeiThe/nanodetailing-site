"use client";
import { CourseSection } from "@/modules/course-section";
import { Footer } from "@/modules/footer";
import { Header } from "@/modules/header";
import { HeroSection } from "@/modules/hero-section";
import { PricesSection } from "@/modules/prices-section";
import ServiceModal from "@/modules/service-modal/ui/ServiceModal";
import { ServicesSection } from "@/modules/services-section";

export default function Home() {
    return (
        <>
            <Header offsetBeforeShow={300} />
            <main className="min-h-screen">
                <ServiceModal />
                <HeroSection />
                <ServicesSection />
                <PricesSection />
                <CourseSection />
            </main>
            <Footer />
        </>
    );
}
