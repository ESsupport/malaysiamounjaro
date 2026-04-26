"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { WHATSAPP_CONFIG } from "@/lib/config"

const STATES = [
  { slug: 'sarawak', name: 'SARAWAK' },
  { slug: 'sabah', name: 'SABAH' },
  { slug: 'kl-klang-valley', name: 'KL-KLANG VALLEY' },
  { slug: 'selangor', name: 'SELANGOR' },
  { slug: 'johor', name: 'JOHOR' },
  { slug: 'penang', name: 'PENANG' },
  { slug: 'pahang', name: 'PAHANG' },
  { slug: 'kelantan', name: 'KELANTAN' },
  { slug: 'terengganu', name: 'TERENGGANU' },
  { slug: 'perlis', name: 'PERLIS' },
  { slug: 'negeri-sembilan', name: 'NEGERI SEMBILAN' },
  { slug: 'kedah', name: 'KEDAH' },
  { slug: 'melaka', name: 'MELAKA' },
  { slug: 'perak', name: 'PERAK' },
  { slug: 'labuan', name: 'LABUAN' },
  { slug: 'putrajaya', name: 'PUTRAJAYA' }
]

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isStateDropdownOpen, setIsStateDropdownOpen] = useState(false)
  const router = useRouter()

  const scrollToSection = (sectionId) => {
    // Check if we're on the home page
    if (window.location.pathname === '/') {
      // On home page, scroll directly to section
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
    } else {
      // On other pages, navigate to home page with hash
      router.push(`/#${sectionId}`)
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
            <button
              onClick={() => router.push("/foundayo")}
              className="flex-1 md:flex-none px-4 py-4 text-white font-semibold hover:bg-purple-800 transition-colors text-sm md:text-base whitespace-nowrap capitalize"
            >
              Foundayo
            </button>
            {/* State Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsStateDropdownOpen(!isStateDropdownOpen)}
                className="flex-1 md:flex-none px-4 py-4 text-white font-semibold hover:bg-purple-800 transition-colors text-sm md:text-base whitespace-nowrap capitalize flex items-center gap-1"
              >
                Choose Location
                <svg className={`w-4 h-4 transition-transform ${isStateDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isStateDropdownOpen && (
                <div className="absolute top-full left-0 bg-white shadow-lg rounded-b-lg z-50 min-w-[200px] max-h-[400px] overflow-y-auto">
                  {STATES.map((state) => (
                    <Link
                      key={state.slug}
                      href={`/${state.slug}`}
                      className="block px-4 py-2 text-gray-700 hover:bg-purple-100 hover:text-purple-800 transition-colors text-sm"
                      onClick={() => setIsStateDropdownOpen(false)}
                    >
                      {state.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
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
                className="w-full text-left text-white hover:bg-purple-600 px-4 py-3 transition-colors border-b border-purple-600 uppercase"
              >
                Get Consultation
              </button>
              {/* Mobile State Links */}
              <div className="border-t border-purple-500 pt-2">
                <div className="px-4 py-2 text-purple-300 text-sm font-semibold">Choose Location:</div>
                {STATES.map((state) => (
                  <Link
                    key={state.slug}
                    href={`/${state.slug}`}
                    className="block w-full text-left text-white hover:bg-purple-600 px-4 py-2 transition-colors text-sm"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {state.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  )
}
