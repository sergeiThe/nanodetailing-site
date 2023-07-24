"use client";
import { Footer } from "@/modules/footer";
import { Header } from "@/modules/header";
import { SecondaryPageMainSection } from "@/modules/secondary-page-main-section";
import ContactForm from "@/modules/secondary-page-main-section/ui/ContactForm";

const ContactPage = () => {
    return (
        <>
            <Header offsetBeforeShow={0} />
            <main className="min-h-screen">
                <SecondaryPageMainSection title="Kontakt" image="hexbg.jpg" />
                <ContactForm />
            </main>
            <Footer />
        </>
    );
};

export default ContactPage;
