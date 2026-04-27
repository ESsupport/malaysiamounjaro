"use client"

import { useEffect } from "react"
import { Header } from "@/components/header"
import { Banner } from "@/components/banner"
import { ProductGrid } from "@/components/product-grid"
import { Disclaimer } from "@/components/disclaimer"
import { BeforeAfterSection } from "@/components/before-after-section"
import { AboutProduct } from "@/components/about-product"
import { VideoSection } from "@/components/video-section"
import { ConsultationCTA } from "@/components/consultation-cta"
import { Footer } from "@/components/footer"
import { AboutProductChinese } from "@/components/about-product-chinese"
import { AboutProductMalay } from "@/components/about-product-malay"

export default function HomePage() {
  useEffect(() => {
    // Handle hash scrolling on page load
    const hash = window.location.hash.slice(1)
    if (hash) {
      // Small delay to ensure page is rendered
      setTimeout(() => {
        const element = document.getElementById(hash)
        if (element) {
          const offset = 140 // Account for fixed header height
          const elementPosition = element.getBoundingClientRect().top
          const offsetPosition = elementPosition + window.pageYOffset - offset

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          })
        }
      }, 100)
    }
  }, [])

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Banner */}
        <Banner />

        {/* Products Section */}
        <div id="products">
          <ProductGrid />
          <Disclaimer />
        </div>

        {/* Before & After Section */}
        <div id="before-after">
          <BeforeAfterSection />
        </div>

        {/* About Product Sections */}
        <div id="about-product">
          <AboutProductMalay />
          <AboutProductChinese />
          <AboutProduct />
        </div>

        {/* Videos Section */}
        <div id="videos">
          <VideoSection />
        </div>

        {/* Get Consultation Section */}
        <div id="consultation">
          <ConsultationCTA />
        </div>

        {/* Footer */}
        <Footer />
      </main>
    </div>
  )
}
