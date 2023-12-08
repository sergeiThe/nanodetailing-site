"use client";

import {Modal} from "@/components/modal";
import {CourseSection} from "@/modules/course-section";
import {Header} from "@/modules/header";
import {HeroSection} from "@/modules/hero-section";
import {PricesSection} from "@/modules/prices-section";
import {ServicesSection} from "@/modules/services-section";
import ReviewSection from "@/modules/review-section";
import OfferSection from "@/modules/offer-section/OfferSection";

export default function Home() {
  return (
    <>
      <Header offsetBeforeShow={300}/>
      <Modal/>
      <main className="min-h-screen">
        <HeroSection/>
        <OfferSection/>
        <ServicesSection/>
        {/*<PricesSection />*/}
        <ReviewSection/>
        <CourseSection/>
      </main>
    </>
  );
}
