import Image from 'next/image'
import { Header } from '@/components/header'
import { WHATSAPP_CONFIG } from '@/lib/config'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Foundayo (Orforglipron) - Oral GLP-1 Weight Loss | Malaysia Tirzepatide',
  description: 'Foundayo (orforglipron) is an oral GLP-1 receptor agonist by Eli Lilly for obesity treatment. FDA approved April 2026. No fasting required.',
  openGraph: {
    title: 'Foundayo (Orforglipron) - Oral GLP-1 Weight Loss',
    description: 'Foundayo is an oral GLP-1 medication for weight loss. No fasting required, daily oral dose.',
    images: ['/foundayo/FOUNDAYO-BOTTLE-0.8MG.jpg'],
  },
}

export default function FoundayoPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-4 py-16">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-purple-800 mb-4">
              Foundayo
            </h1>
            <p className="text-xl text-gray-600">
              Oral GLP-1 Receptor Agonist (Orforglipron)
            </p>
          </div>

          {/* Main Image */}
          <div className="flex justify-center mb-12">
            <div className="relative w-full max-w-md">
              <Image
                src="/foundayo/FOUNDAYO-BOTTLE-0.8MG.jpg"
                alt="Foundayo 0.8mg Bottle"
                width={600}
                height={800}
                className="rounded-lg shadow-2xl object-cover"
                priority
              />
            </div>
          </div>

          {/* English Content */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-purple-800 mb-6">About Foundayo</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Foundayo (Generic name: orforglipron) is an oral, small-molecule, non-peptide GLP-1 receptor agonist developed by Eli Lilly. It is primarily used to treat obesity and adult patients with weight-related comorbidities. Approved by the US FDA in April 2026, it marks a significant shift in the weight loss market from injectables to more convenient oral medications.
              </p>

              <h3 className="text-2xl font-bold text-purple-700 mb-4">1. Core Advantages and Features</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span><strong>No Fasting Required:</strong> Foundayo is currently the only oral GLP-1 medication that does not require fasting and is not restricted by food or water intake; patients can take it flexibly at any time of the day.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span><strong>Daily Oral Dose:</strong> Its small-molecule structure removes the limitations of traditional peptide GLP-1s, which require injections or strict fasting protocols.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span><strong>Significant Efficacy:</strong> Clinical trial data showed that over a 72-week period, patients taking Foundayo achieved an average weight loss of 12.4% (approximately 27.3 lbs).</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span><strong>Cardiovascular Benefits:</strong> Research indicates the drug helps improve cardiovascular data, reducing the risk of cardiovascular events by 16%.</span>
                </li>
              </ul>

              <h3 className="text-2xl font-bold text-purple-700 mb-4">2. Mechanism of Action and Background</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                The active ingredient, orforglipron, was originally developed by Japan's Chugai Pharmaceutical, with Eli Lilly acquiring the development and marketing rights. As a non-peptide small molecule, it suppresses appetite and increases satiety by directly activating GLP-1 receptors, while its unique chemical structure offers superior convenience.
              </p>

              <h3 className="text-2xl font-bold text-purple-700 mb-4">3. Market Launch</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                <strong>Launch Date:</strong> Received US FDA approval in early April 2026.
              </p>

              <h3 className="text-2xl font-bold text-purple-700 mb-4">4. Market Position and Competition</h3>
              <p className="text-gray-700 leading-relaxed">
                The launch of Foundayo is seen as Eli Lilly's heavy-hitting weapon in the obesity sector to compete with Novo Nordisk, directly rivaling the oral version of Wegovy (semaglutide).
              </p>
            </div>
          </div>

          {/* Chinese Content */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-purple-800 mb-6">关于 Foundayo</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Foundayo（通用名：orforglipron）是礼来公司（Eli Lilly）研发的一款口服、小分子、非肽类GLP-1受体激动剂，主要用于治疗肥胖症及伴有体重相关合并症的成人患者。该药物于2026年4月获得美国FDA批准上市，标志着减肥药市场从注射剂向更便捷的口服药转型。
              </p>

              <h3 className="text-2xl font-bold text-purple-700 mb-4">1. 核心优势与特点</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span><strong>无需空腹，不受饮食/水分限制：</strong> Foundayo是目前唯一一款无需空腹服用、且不受饮食或水分限制的口服GLP-1药物，患者可在一天中任何时间灵活服药。</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span><strong>每日一次口服：</strong> 小分子结构使其摆脱了传统肽类GLP-1需要注射或严格空腹服用的限制。</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span><strong>疗效显著：</strong> 临床试验数据显示，在为期72周的临床试验中，服用Foundayo的患者平均减重12.4%（约27.3磅）。</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span><strong>心血管益处：</strong> 研究显示，该药物有助于改善心血管数据，能将心血管事件风险降低16%。</span>
                </li>
              </ul>

              <h3 className="text-2xl font-bold text-purple-700 mb-4">2. 作用机理与研发背景</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Foundayo的活性成分orforglipron最初由日本中外制药研发，礼来通过合作获得该药物的开发和销售权。它是一种非肽类小分子，通过直接激活GLP-1受体来抑制食欲和增加饱腹感，但其独特的化学结构提供了更高的便利性。
              </p>

              <h3 className="text-2xl font-bold text-purple-700 mb-4">3. 上市</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                <strong>上市时间：</strong> 2026年4月初获得美国FDA批准。
              </p>

              <h3 className="text-2xl font-bold text-purple-700 mb-4">4. 市场地位与竞争</h3>
              <p className="text-gray-700 leading-relaxed">
                Foundayo的上市被视为礼来在肥胖症领域应对诺和诺德（Novo Nordisk）竞争的重磅武器，直接对标口服版Wegovy（司美格鲁肽）。
              </p>
            </div>
          </div>

          {/* Malay Content */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-purple-800 mb-6">Mengenai Foundayo</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Foundayo (Nama generik: orforglipron) adalah perangsang reseptor GLP-1 jenis molekul kecil, bukan peptida, dan diambil secara oral yang dibangunkan oleh Eli Lilly. Ia digunakan terutamanya untuk merawat obesiti serta pesakit dewasa yang mempunyai komorbiditi berkaitan berat badan. Kelulusan daripada FDA Amerika Syarikat pada April 2026 menandakan transformasi pasaran ubat kurus daripada jenis suntikan kepada ubat oral yang lebih mudah.
              </p>

              <h3 className="text-2xl font-bold text-purple-700 mb-4">1. Kelebihan Utama dan Ciri-ciri</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span><strong>Tanpa Perlu Puasa:</strong> Foundayo merupakan satu-satunya ubat GLP-1 oral setakat ini yang tidak memerlukan perut kosong dan tidak terikat dengan sekatan makanan atau air; pesakit boleh mengambilnya secara fleksibel pada bila-bila masa sepanjang hari.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span><strong>Pengambilan Oral Sekali Sehari:</strong> Struktur molekul kecilnya membolehkan ia mengatasi had ubat GLP-1 peptida tradisional yang memerlukan suntikan atau protokol puasa yang ketat.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span><strong>Keberkesanan Ketara:</strong> Data ujian klinikal menunjukkan bahawa dalam tempoh ujian 72 minggu, pesakit yang mengambil Foundayo mencapai purata penurunan berat badan sebanyak 12.4% (kira-kira 27.3 paun).</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span><strong>Manfaat Kardiovaskular:</strong> Kajian menunjukkan ubat ini membantu meningkatkan data kardiovaskular dan mampu mengurangkan risiko kejadian kardiovaskular sebanyak 16%.</span>
                </li>
              </ul>

              <h3 className="text-2xl font-bold text-purple-700 mb-4">2. Mekanisme Bertindak dan Latar Belakang</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Bahan aktif orforglipron pada asalnya dibangunkan oleh Chugai Pharmaceutical dari Jepun, manakala Eli Lilly memperoleh hak pembangunan dan jualan melalui kerjasama. Ia merupakan molekul kecil bukan peptida yang menyekat selera makan dan meningkatkan rasa kenyang dengan mengaktifkan reseptor GLP-1 secara langsung, di mana struktur kimianya yang unik memberikan kemudahan yang lebih tinggi.
              </p>

              <h3 className="text-2xl font-bold text-purple-700 mb-4">3. Pelancaran Pasaran</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                <strong>Masa Pelancaran:</strong> Mendapat kelulusan FDA AS pada awal April 2026.
              </p>

              <h3 className="text-2xl font-bold text-purple-700 mb-4">4. Kedudukan Pasaran dan Persaingan</h3>
              <p className="text-gray-700 leading-relaxed">
                Pelancaran Foundayo dilihat sebagai senjata utama Eli Lilly dalam bidang obesiti untuk bersaing dengan Novo Nordisk, secara langsung mencabar Wegovy (semaglutide) versi oral.
              </p>
            </div>
          </div>

          {/* WhatsApp CTA Button */}
          <section className="text-center mb-12">
            <a
              href={WHATSAPP_CONFIG.getWhatsAppUrl("Hi, I'm interested in Foundayo (orforglipron). Can you provide more information?")}
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
