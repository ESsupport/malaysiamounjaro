import Image from 'next/image'
import { Header } from '@/components/header'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Foundayo - Coming Soon | Malaysia Tirzepatide',
  description: 'Foundayo is coming soon. Stay tuned for exciting updates from Malaysia Tirzepatide.',
  openGraph: {
    title: 'Foundayo - Coming Soon',
    description: 'Foundayo is coming soon. Stay tuned for exciting updates.',
    images: ['/foundayo/foundayo.jpeg'],
  },
}

export default function FoundayoPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-4 py-16">
          {/* Coming Soon Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-purple-800 mb-4">
              Coming Soon
            </h1>
            <p className="text-xl text-gray-600">
              Something exciting is on the way!
            </p>
          </div>

          {/* Main Image */}
          <div className="flex justify-center mb-12">
            <div className="relative w-full max-w-4xl">
              <Image
                src="/foundayo/foundayo.jpeg"
                alt="Foundayo - Coming Soon"
                width={1200}
                height={800}
                className="rounded-lg shadow-2xl object-cover"
                priority
              />
            </div>
          </div>

          {/* Additional Info */}
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-lg text-gray-700 mb-8">
              We're working on something special. Check back soon for updates!
            </p>
          </div>

          {/* Back to Home */}
          <footer className="text-center mt-12">
            <a 
              href="/" 
              className="text-purple-600 hover:text-purple-800 underline text-lg"
            >
              ← Back to Home
            </a>
          </footer>
        </div>
      </div>
    </>
  )
}
