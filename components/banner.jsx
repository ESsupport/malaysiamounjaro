"use client"

import Image from "next/image"
import Link from "next/link"
import { WHATSAPP_CONFIG } from "@/lib/config"

export function Banner() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 140
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset
      window.scrollTo({ top: offsetPosition, behavior: "smooth" })
    }
  }

  return (
    <section className="relative bg-gradient-to-br from-purple-600 via-purple-700 to-blue-600 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20 md:py-20">
        <div className="grid md:grid-cols-2 gap-2 items-center">
          {/* Left Side - Main Content */}
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                Kurus, Selamat, Berkesan, Cepat
                {/* <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-100">
                  Mounjaro
                </span> */}
              </h1>
              <h1 className="text-3xl md:text-5xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-100">
                享瘦，安全，有效，快速
              </h1>
              <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                Slim, Safe, Effective, Fast.
              </h1>

              <p className="text-lg md:text-xl text-purple-100 leading-relaxed">
                Alami kuasa agonis reseptor dwi-tindakan GIP/GLP-1. Capai hasil penurunan berat badan yang unggul dengan hanya satu suntikan mingguan.
              </p>
              <p className="text-lg md:text-xl text-purple-100 leading-relaxed text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-100">
                体验双重作用 GIP/GLP-1 受体激动剂的强大功效。只需每周注射一次，即可实现卓越的减重效果。
              </p>
              <p className="text-lg md:text-xl text-purple-100 leading-relaxed">
                Experience the power of dual-action GIP/GLP-1 receptor agonist. Achieve superior weight loss results with just one weekly injection.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={WHATSAPP_CONFIG.getWhatsAppUrl(WHATSAPP_CONFIG.messages.consultation)}
                target="_blank"
                className="bg-white text-purple-700 hover:bg-purple-50 px-8 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-2xl text-center"
              >
                Get Started Now
              </Link>
              <button
                onClick={() => scrollToSection("about-product")}
                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all border-2 border-white/30 hover:border-white/50 text-center"
              >
                Learn More
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center space-y-2">
                <div className="text-4xl md:text-5xl font-bold text-white">15%+</div>
                <div className="text-sm md:text-base text-purple-200">Weight Loss</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-4xl md:text-5xl font-bold text-white">FDA</div>
                <div className="text-sm md:text-base text-purple-200">Approved</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-4xl md:text-5xl font-bold text-white">1x</div>
                <div className="text-sm md:text-base text-purple-200">Weekly Dose</div>
              </div>
            </div>
          </div>

          {/* Right Side - Product Image */}
          <div className="relative">
            <div className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl">
              <Image
                src="/banner/malaysia_mounjarro_banner.png"
                alt="Mounjaro Product"
                width={600}
                height={600}
                className="w-full h-auto rounded-2xl"
                priority
                unoptimized
              />

              {/* Floating Badge */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-br from-yellow-400 to-orange-500 text-white px-6 py-3 rounded-full font-bold shadow-xl transform rotate-12">
                ✨ Clinically Proven
              </div>
            </div>

            {/* Feature Pills */}
            <div className="mt-6 flex flex-wrap gap-3">
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-semibold border border-white/30">
                ✓ Dual-Action Formula
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-semibold border border-white/30">
                ✓ Easy Weekly Injection
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-semibold border border-white/30">
                ✓ Superior Results
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
