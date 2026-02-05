import { notFound } from 'next/navigation'
import Image from 'next/image'
import { Header } from '@/components/header'
import { WHATSAPP_CONFIG } from '@/lib/config'

// State mapping configuration
const stateMapping: Record<string, { name: string; imageFile: string }> = {
  'sarawak': { name: 'SARAWAK', imageFile: 'SARAWAK-MOUNJARO.jpg' },
  'sabah': { name: 'SABAH', imageFile: 'SABAH-MOUNJARO.jpg' },
  'kl-klang-valley': { name: 'KL-KLANG VALLEY', imageFile: 'KLANG VALLEY-KL-SELANGOR-MOUNJARO.jpg' },
  'selangor': { name: 'SELANGOR', imageFile: 'SELANGOR-MOUNJARO.jpg' },
  'johor': { name: 'JOHOR', imageFile: 'JOHOR-MOUNJARO.jpg' },
  'penang': { name: 'PENANG', imageFile: 'PENANG-MOUNJARO.jpg' },
  'pahang': { name: 'PAHANG', imageFile: 'PAHANG-MOUNJARO.jpg' },
  'kelantan': { name: 'KELANTAN', imageFile: 'KELANTAN-MOUNJARO.jpg' },
  'terengganu': { name: 'TERENGGANU', imageFile: 'TERENGGANU-MOUNJARO.jpg' },
  'perlis': { name: 'PERLIS', imageFile: 'PERLIS-MOUNJARO.jpg' },
  'negeri-sembilan': { name: 'NEGERI SEMBILAN', imageFile: 'NEGERI SEMBILAN-MOUNJARO.jpg' },
  'kedah': { name: 'KEDAH', imageFile: 'KEDAH-MOUNJARO.jpg' },
  'melaka': { name: 'MELAKA', imageFile: 'MELAKA-MOUNJARO.jpg' },
  'perak': { name: 'PERAK', imageFile: 'PERAK-MOUNJARO.jpg' },
  'labuan': { name: 'LABUAN', imageFile: 'LABUAN-MOUNJARO.jpg' },
  'putrajaya': { name: 'PUTRAJAYA', imageFile: 'PUTRA JAYA-MOUNJARO.jpg' }
}

// Generate static params for all states
export function generateStaticParams() {
  return Object.keys(stateMapping).map((state) => ({
    state: state,
  }))
}

// Generate metadata for each state page
export async function generateMetadata({ params }: { params: Promise<{ state: string }> }) {
  const { state: stateSlug } = await params
  const state = stateMapping[stateSlug]
  
  if (!state) {
    return {
      title: 'State Not Found | Malaysia Mounjaro',
      description: 'The requested state page was not found.',
    }
  }

  return {
    title: `${state.name} Mounjaro | Mounjaro KwikPen Weight Loss | Malaysia Mounjaro`,
    description: `Buy Mounjaro KwikPen in ${state.name}, Malaysia. FDA-approved Tirzepatide weight loss injection. Safe, effective, fast results. ${state.name} Mounjaro Malaysia.`,
    openGraph: {
      title: `${state.name} Mounjaro | Mounjaro KwikPen Weight Loss`,
      description: `FDA-approved Mounjaro KwikPen for safe and effective weight loss in ${state.name}, Malaysia.`,
      images: [`/Landmark 13 state/${state.imageFile}`],
    },
  }
}

export default async function StatePage({ params }: { params: Promise<{ state: string }> }) {
  const { state: stateSlug } = await params
  const state = stateMapping[stateSlug]

  if (!state) {
    notFound()
  }

  const whatsappMessage = `Saya ingin bertanya tentang MOUNJARO di ${state.name}.\n我想询问关于在${state.name}获得MOUNJARO的资料。\nI would like to know more about MOUNJARO in ${state.name}.`
  const whatsappUrl = WHATSAPP_CONFIG.getWhatsAppUrl(whatsappMessage)

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-4 py-8">
          {/* Main Image */}
          <div className="flex justify-center mb-12">
            <div className="relative w-full max-w-4xl">
              <Image
                src={`/Landmark 13 state/${state.imageFile}`}
                alt={`${state.name} Mounjaro - FDA Approved Weight Loss Injection`}
                width={1200}
                height={800}
                className="rounded-lg shadow-2xl object-cover"
                priority
              />
            </div>
          </div>

          {/* Multilingual Welcome Content */}
          <section className="max-w-4xl mx-auto space-y-8 mb-12">
            {/* Malay */}
            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-600">
              <h2 className="text-2xl font-bold text-purple-800 mb-4">
                Selamat Datang ke Platform Pengurusan Berat Badan MOUNJARO
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Kami menyediakan kakitangan khidmat pelanggan khas di pelbagai kawasan untuk membantu anda. Jika anda ingin mengetahui lebih lanjut tentang cara mendapatkan MOUNJARO di <strong>{state.name}</strong>, sila klik butang WhatsApp di bawah untuk berhubung dengan kami. Kami sedia membantu anda.
              </p>
            </div>

            {/* Chinese */}
            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-red-600">
              <h2 className="text-2xl font-bold text-red-800 mb-4">
                欢迎来到MOUNJARO 的瘦身世界
              </h2>
              <p className="text-gray-700 leading-relaxed">
                我们提供了不同地区的专有服务人员，若是您想知道更多关于如何在 <strong>{state.name}</strong> 获得 MOUNJARO，请直接按下方的WhatsApp按钮联系我们，我们一定可以帮到你。
              </p>
            </div>

            {/* English */}
            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-600">
              <h2 className="text-2xl font-bold text-blue-800 mb-4">
                Welcome to the World of MOUNJARO Weight Management
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We have dedicated service personnel across various regions to assist you. If you would like to find out more about how to access MOUNJARO in <strong>{state.name}</strong>, please click the WhatsApp button below to connect with us. Our team is ready to provide you with the professional support you need.
              </p>
            </div>
          </section>

          {/* WhatsApp CTA Button */}
          <section className="text-center mb-12">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full text-xl font-semibold shadow-lg transition-all hover:scale-105 cursor-pointer"
            >
              <svg viewBox="0 0 24 24" fill="white" className="w-8 h-8">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              WhatsApp Us Now
            </a>
          </section>

          {/* Back to Home */}
          <footer className="text-center mt-8">
            <a 
              href="/" 
              className="text-purple-600 hover:text-purple-800 underline"
            >
              ← Back to Home
            </a>
          </footer>
        </div>
      </div>
    </>
  )
}
