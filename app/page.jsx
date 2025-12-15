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
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { ScrollToTop } from "@/components/scroll-to-top"

export default function HomePage() {
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

      {/* Floating Buttons */}
      <ScrollToTop />
      <WhatsAppFloat />
    </div>
  )
}
