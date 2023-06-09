"use client";
import React from "react";
import HeroSection from "./components/hero/HeroSection";
import ServicesSection from "./components/services/ServicesSection";
import PricesSection from "./components/prices/PricesSection";
import CourseSection from "./components/course/CourseSection";
import ReviewSection from "./components/reviews/ReviewSection";
import Footer from "./components/footer/Footer";
import ContactContextProvider from "./store/contact-context";
import Modal, { Backdrop } from "./components/modal/Modal";
import ServiceContextProvider from "./store/service-context";
import PricesContextProvider from "./store/prices-context";
import Header from "./components/header/Header";
import { AnimatePresence } from "framer-motion";
import Head from "next/head";
import Script from "next/script";
/**
 * SECTIONS
 * 1. Header: logo, nav, hamburger, menu modal
 * 2. Hero section: logo, title, paragraph, link to contact modal, hexagonal links
 * 3. Service section: title, paragraph, hexagonal links
 * 4. Prices: title, paragraph, links to modals
 * 5. Course: title, paragraph, video, products
 * 6. Reviews: list of reviews
 * 7. Footer: paragraph, logo, social links, link to contact
 *
 * MODALS
 * 1. Contact: form, phone, email, address, map
 * 2. Service: title, paragraph, image
 * 3. Prices: title, image
 *
 */

const HomePage = () => {
    return (
        <>
            <ContactContextProvider>
                <ServiceContextProvider>
                    <PricesContextProvider>
                        <Header />
                        <Modal />
                        <HeroSection />
                        <ServicesSection />
                        <PricesSection />
                        <CourseSection />
                        {/* <ReviewSection /> */}
                        <Footer />
                    </PricesContextProvider>
                </ServiceContextProvider>
            </ContactContextProvider>
        </>
    );
};

export default HomePage;
