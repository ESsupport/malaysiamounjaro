"use client"

import { useState } from "react"

export function AboutProductMalay() {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <section className="w-full py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header with Icon */}
        <div className="text-center mb-8">
          <div className="inline-block mb-4">
            <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4">
              <svg
                className="w-8 h-8 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-primary">
            【Terobosan Berat Badan】Mounjaro Kwikpen: Pilihan Kurang Berat Badan & Kawalan Gula Generasi Baharu di
            Malaysia
          </h2>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="ml-4 px-6 py-2 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors whitespace-nowrap"
          >
            {isExpanded ? "Tutup" : "Baca Lagi"}
          </button>
        </div>

        {!isExpanded && (
          <p className="text-gray-700 leading-relaxed">
            Adakah anda sedang mencari penyelesaian kurang berat badan yang lebih berkesan dan mudah? Mounjaro
            (Tirzepatide) dari Eli Lilly ialah agonis reseptor inkretin dwi (GIP/GLP-1) yang revolusioner, menawarkan
            harapan baharu kepada pesakit pengurusan berat badan dan diabetes jenis 2 di Malaysia. Mounjaro Kwikpen
            berfungsi sebagai peranti suntikan yang telah diisi, menjadikan proses suntikan sendiri mudah dan
            intuitif.
          </p>
        )}

        {isExpanded && (

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Column 1 */}
          <div className="space-y-6">
            <p className="text-base text-gray-700 leading-relaxed">
              Adakah anda sedang mencari penyelesaian kurang berat badan yang lebih berkesan dan mudah? Mounjaro
              (Tirzepatide) dari Eli Lilly ialah agonis reseptor inkretin dwi (GIP/GLP-1) yang revolusioner, menawarkan
              harapan baharu kepada pesakit pengurusan berat badan dan diabetes jenis 2 di Malaysia. Mounjaro Kwikpen
              berfungsi sebagai peranti suntikan yang telah diisi, menjadikan proses suntikan sendiri mudah dan
              intuitif.
            </p>

            <div className="pt-2">
              <h3 className="text-xl font-bold text-primary mb-3">
                Apakah Mounjaro Kwikpen? Mengapa Ia Menjadi Pilihan Popular untuk Mengurangkan Berat Badan?
              </h3>
              <p className="text-base text-gray-700 leading-relaxed">
                Bahan aktif Mounjaro, Tirzepatide, adalah ubat dwi-tindakan pertama di dunia yang menggabungkan GIP
                (Polipeptida Insulinotropik Bergantung Glukosa) dan GLP-1 (Peptida-1 Seumpama Glukagon).
              </p>

              <h4 className="text-lg font-bold text-primary mb-3 mt-4">
                Mekanisme Dwi untuk Kesan Kurang Berat Badan yang Kuat:
              </h4>
              <ul className="space-y-3 text-base">
                <li className="flex gap-3 leading-relaxed">
                  <span className="text-primary mt-1.5 flex-shrink-0">•</span>
                  <span>
                    <strong>Menyekat Selera Makan & Melambatkan Pengosongan Perut:</strong> GIP dan GLP-1 bertindak
                    bersama pada otak untuk meningkatkan rasa kenyang, mengurangkan kelaparan dan keinginan makan dengan
                    ketara.
                  </span>
                </li>
                <li className="flex gap-3 leading-relaxed">
                  <span className="text-primary mt-1.5 flex-shrink-0">•</span>
                  <span>
                    <strong>Meningkatkan Metabolisme:</strong> Membantu meningkatkan sensitiviti insulin, mengawal gula
                    dalam darah dengan lebih berkesan, dan menggalakkan metabolisme lemak.
                  </span>
                </li>
                <li className="flex gap-3 leading-relaxed">
                  <span className="text-primary mt-1.5 flex-shrink-0">•</span>
                  <span>
                    <strong>Bukti Klinikal:</strong> Ujian klinikal menunjukkan Mounjaro memberikan hasil kurang berat
                    badan yang unggul berbanding ubat mekanisma tunggal tradisional, mencapai peratusan penurunan berat
                    badan yang ketara secara purata.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 2 */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-primary mb-3">
                Reka Bentuk Kwikpen: Mencapai Suntikan Sendiri dengan Mudah
              </h3>
              <p className="text-base text-gray-700 leading-relaxed">
                Mounjaro Kwikpen ialah pen suntikan pre-filled (pra-isi) yang direka untuk memudahkan proses suntikan
                subkutaneus mingguan. Reka bentuk "suntikan satu klik" membolehkan pesakit menguasai teknik suntikan
                sendiri dengan mudah, tanpa memerlukan prosedur atau penyediaan ubat yang rumit, sangat meningkatkan
                kemudahan dan kepatuhan rawatan.
              </p>
            </div>

            <div className="pt-2">
              <h3 className="text-xl font-bold text-primary mb-3">Dos Mounjaro di Malaysia</h3>
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                Terapi Mounjaro biasanya dimulakan pada dos yang rendah dan ditingkatkan secara beransur-ansur untuk
                membantu badan menyesuaikan diri dan meminimumkan kesan sampingan gastrousus.
              </p>
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                Mounjaro Kwikpen menawarkan pelbagai pilihan dos, dengan setiap pen lazimnya mengandungi empat dos
                mingguan:
              </p>

              <div className="overflow-x-auto rounded-lg shadow-sm">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="bg-primary text-white">
                      <th className="px-4 py-3 text-left font-semibold">
                        Dos (Seminggu Sekali)
                      </th>
                      <th className="px-4 py-3 text-left font-semibold">Fungsi</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                      <td className="px-4 py-3 font-bold text-primary">2.5mg</td>
                      <td className="px-4 py-3 text-gray-700">
                        Dos permulaan, digunakan untuk membina toleransi badan.
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                      <td className="px-4 py-3 font-bold text-primary">5mg</td>
                      <td className="px-4 py-3 text-gray-700">
                        Dos rawatan asas, mula menunjukkan kesan kurang berat badan yang stabil dan peningkatan
                        metabolik.
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                      <td className="px-4 py-3 font-bold text-primary">7.5mg</td>
                      <td className="px-4 py-3 text-gray-700">
                        Dos yang ditingkatkan, menguatkan kesan kurang berat badan.
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                      <td className="px-4 py-3 font-bold text-primary">10mg</td>
                      <td className="px-4 py-3 text-gray-700">Dos rawatan lanjutan.</td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                      <td className="px-4 py-3 font-bold text-primary">12.5mg</td>
                      <td className="px-4 py-3 text-gray-700">Dos rawatan kecekapan tinggi.</td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-4 py-3 font-bold text-primary">15mg</td>
                      <td className="px-4 py-3 text-gray-700">
                        Dos maksimum, digunakan untuk hasil kurang berat badan yang optimum.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Column 3 */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-primary mb-3">
                Mulakan Perjalanan Kurang Berat Badan Mounjaro Anda
              </h3>
              <p className="text-base text-gray-700 leading-relaxed">
                Kemunculan Mounjaro Kwikpen menyediakan alat yang hebat dan mudah untuk pesakit di Malaysia yang mencari
                kurang berat badan yang berkesan dan peningkatan metabolik. Dengan mekanisme dwi-tindakannya dan reka
                bentuk suntikan sendiri yang mudah digunakan, ia telah menjadi kunci kepada ramai orang untuk mencapai
                matlamat kesihatan mereka.
              </p>
            </div>

            <div className="bg-gradient-to-br from-primary/5 to-primary/10 p-6 rounded-xl border border-primary/20">
              <p className="text-base text-gray-800 leading-relaxed font-medium">
                Ingin tahu sama ada Mounjaro Kwikpen sesuai untuk anda? Tempah perundingan profesional di Malaysia
                segera, dan biarkan kami menyesuaikan dos yang paling sesuai untuk anda (daripada 2.5mg meningkat kepada
                15mg), dan mulakan babak baharu kurang berat badan yang sihat!
              </p>
            </div>
          </div>
        </div>
        )}
      </div>
    </section>
  )
}
