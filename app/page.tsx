import React from 'react'
import HeroSection from './components/hero/HeroSection'
import ServicesSection from './components/services/ServicesSection'
import PricesSection from './components/prices/PricesSection'
import CourseSection from './components/course/CourseSection'
import ReviewSection from './components/reviews/ReviewSection'
import Footer from './components/footer/Footer'

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
      <HeroSection />
      <ServicesSection />
      <PricesSection />
      <CourseSection />
      <ReviewSection />
      <Footer />
    </>
  )
}

export default HomePage