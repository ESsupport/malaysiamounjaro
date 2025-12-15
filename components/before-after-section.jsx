import Image from "next/image"

const beforeAfterImages = [
  {
    id: 1,
    image: "/Before & After/Mounjaro-Malaysia-Kwikpen-Before-After1.jpg",
    alt: "Mounjaro Weight Loss Transformation 1",
    badge: "Real Results"
  },
  {
    id: 2,
    image: "/Before & After/Mounjaro-Malaysia-Kwikpen-Before-After2.jpg",
    alt: "Mounjaro Weight Loss Transformation 2",
    badge: "Verified"
  },
  {
    id: 3,
    image: "/Before & After/Mounjaro-Malaysia-Kwikpen-Before-After3.jpg",
    alt: "Mounjaro Weight Loss Transformation 3",
    badge: "Inspiring"
  },
]

export function BeforeAfterSection() {
  return (
    <section className="w-full py-16 px-6 bg-gradient-to-b from-white to-gray-50">
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
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Results
          </h2>
          {/* <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            See the incredible transformations achieved by our customers using Mounjaro. These are real success stories from people just like you.
          </p> */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {beforeAfterImages.map((item) => (
            <div
              key={item.id}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Badge */}
              {/* <div className="absolute top-4 left-4 z-10">
                <span className="bg-primary text-white text-sm font-semibold px-4 py-2 rounded-full shadow-lg">
                  {item.badge}
                </span>
              </div> */}

              {/* Image */}
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={800}
                  height={1000}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Info overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white font-semibold text-center">
                  Amazing Transformation ✨
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto] animate-[gradient_3s_ease-in-out_infinite,pulse_2s_ease-in-out_infinite] bg-clip-text text-transparent">
            Mulakan Transformasi Anda Sekarang! 现在开始，马上蜕变！Start Your Transformation Now!
          </p>
        </div>
      </div>
    </section>
  )
}
