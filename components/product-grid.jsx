import Image from "next/image"
import Link from "next/link"
import { WHATSAPP_CONFIG } from "@/lib/config"

const products = [
  {
    id: 1,
    name: "Mounjaro 2.5mg",
    dosage: "2.5mg",
    description: "Starting dose",
    image: "/Porduct Photo/Mounjaro-KWIKPEN-2.5mg-MALAYSIA.jpg"
  },
  {
    id: 2,
    name: "Mounjaro 5mg",
    dosage: "5mg",
    description: "Foundation dose",
    image: "/Porduct Photo/Mounjaro-KWIKPEN-5mg-MALAYSIA.jpg"
  },
  {
    id: 3,
    name: "Mounjaro 7.5mg",
    dosage: "7.5mg",
    description: "Enhanced dose",
    image: "/Porduct Photo/Mounjaro-KWIKPEN-7.5mg-MALAYSIA.jpg"
  },
  {
    id: 4,
    name: "Mounjaro 10mg",
    dosage: "10mg",
    description: "Advanced dose",
    image: "/Porduct Photo/Mounjaro-KWIKPEN-10mg-MALAYSIA.jpg"
  },
  {
    id: 5,
    name: "Mounjaro 12.5mg",
    dosage: "12.5mg",
    description: "High-efficacy dose",
    image: "/Porduct Photo/Mounjaro-KWIKPEN-12.5mg-MALAYSIA.jpg"
  },
  {
    id: 6,
    name: "Mounjaro 15mg",
    dosage: "15mg",
    description: "Maximum dose",
    image: "/Porduct Photo/Mounjaro-KWIKPEN-15mg-MALAYSIA.jpg"
  },
]

export function ProductGrid() {
  return (
    <section className="w-full py-12 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4">
              <svg
                className="w-8 h-8 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Product Types/Mounjaro Doses
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Choose the right dosage for your weight loss journey
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {products.map((product) => (
            <Link
              key={product.id}
              href={WHATSAPP_CONFIG.getWhatsAppUrl(WHATSAPP_CONFIG.messages.product(product.name))}
              target="_blank"
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:scale-105 cursor-pointer group flex flex-col"
            >
              <div className="relative aspect-[3/4] w-full">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={400}
                  height={533}
                  className="w-full h-full object-cover"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white px-4 py-2 rounded-lg shadow-lg">
                    <p className="text-sm font-semibold text-primary">Order Now</p>
                  </div>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-4 bg-gradient-to-b from-white to-gray-50">
                <h3 className="text-xl font-bold text-primary mb-1 text-center">
                  {product.dosage}
                </h3>
                <p className="text-sm text-gray-600 text-center">
                  {product.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
