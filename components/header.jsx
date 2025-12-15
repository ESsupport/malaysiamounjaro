"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { WHATSAPP_CONFIG } from "@/lib/config"

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 140 // Account for fixed header height
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      })
    }
    // Close mobile menu after clicking
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      {/* Top Header */}
      <header className="w-full py-4 px-6 border-b bg-white">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <img
              src="/WebName/mounjaro-malaysia-logo-kwikpen-Tirzepatide.jpg"
              alt="Malaysia Mounjaro"
              style={{ maxWidth: "200px", width: "100%" }}
            />
          </Link>

          <Link
            href={WHATSAPP_CONFIG.getWhatsAppUrl(WHATSAPP_CONFIG.messages.header)}
            target="_blank"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="white" className="w-10 h-10">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
            </div>
            <div className="text-sm hidden md:block">
              <div className="font-semibold">Contact Us</div>
              <div className="text-muted-foreground">联系我们 Hubungi Kami</div>
            </div>
          </Link>
        </div>
      </header>

      {/* Fixed Navigation Bar */}
      <nav className="w-full bg-purple-700 sticky top-0 z-50 shadow-md">
        <div className="max-w-7xl mx-auto">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center md:justify-between flex-wrap">
            <button
              onClick={() => scrollToSection("products")}
              className="flex-1 md:flex-none px-4 py-4 text-white font-semibold hover:bg-purple-800 transition-colors text-sm md:text-base whitespace-nowrap capitalize"
            >
              Product Types
            </button>
            <button
              onClick={() => scrollToSection("before-after")}
              className="flex-1 md:flex-none px-4 py-4 text-white font-semibold hover:bg-purple-800 transition-colors text-sm md:text-base whitespace-nowrap capitalize"
            >
              Results
            </button>
            <button
              onClick={() => scrollToSection("about-product")}
              className="flex-1 md:flex-none px-4 py-4 text-white font-semibold hover:bg-purple-800 transition-colors text-sm md:text-base whitespace-nowrap capitalize"
            >
              About Mounjaro
            </button>
            <button
              onClick={() => scrollToSection("videos")}
              className="flex-1 md:flex-none px-4 py-4 text-white font-semibold hover:bg-purple-800 transition-colors text-sm md:text-base whitespace-nowrap capitalize"
            >
              Tutorial Video
            </button>
            <button
              onClick={() => scrollToSection("consultation")}
              className="flex-1 md:flex-none px-4 py-4 text-white font-semibold hover:bg-purple-800 transition-colors text-sm md:text-base whitespace-nowrap capitalize"
            >
              Get Consultation
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden flex justify-between items-center px-4 py-3">
            <span className="text-white font-semibold">Menu</span>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white p-2 hover:bg-purple-600 rounded-md transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                // Close icon
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                // Hamburger icon
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile Menu Dropdown */}
          {isMobileMenuOpen && (
            <div className="md:hidden bg-purple-800 overflow-hidden">
              <button
                onClick={() => scrollToSection("products")}
                className="w-full text-left text-white hover:bg-purple-600 px-4 py-3 transition-colors border-b border-purple-600 uppercase"
              >
                Product Types
              </button>
              <button
                onClick={() => scrollToSection("before-after")}
                className="w-full text-left text-white hover:bg-purple-600 px-4 py-3 transition-colors border-b border-purple-600 uppercase"
              >
                Results
              </button>
              <button
                onClick={() => scrollToSection("about-product")}
                className="w-full text-left text-white hover:bg-purple-600 px-4 py-3 transition-colors border-b border-purple-600 uppercase"
              >
                About Mounjaro
              </button>
              <button
                onClick={() => scrollToSection("videos")}
                className="w-full text-left text-white hover:bg-purple-600 px-4 py-3 transition-colors border-b border-purple-600 uppercase"
              >
                Tutorial Video
              </button>
              <button
                onClick={() => scrollToSection("consultation")}
                className="w-full text-left text-white hover:bg-purple-600 px-4 py-3 transition-colors uppercase"
              >
                Get Consultation
              </button>
            </div>
          )}
        </div>
      </nav>
    </>
  )
}
