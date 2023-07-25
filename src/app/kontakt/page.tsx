"use client";
import { ContactForm } from "@/components/contact-form";
import { Header } from "@/modules/header";
import { SecondaryPageMainSection } from "@/modules/secondary-page-main-section";

const ContactPage = () => {
    return (
        <>
            <Header offsetBeforeShow={0} />
            <main className="min-h-screen">
                <SecondaryPageMainSection title="Kontakt" image="hexbg.jpg" />
                <div className="px-4">
                    <ContactForm />
                </div>
            </main>
        </>
    );
};

export default ContactPage;
