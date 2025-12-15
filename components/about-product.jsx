"use client"

import { useState } from "react"

export function AboutProduct() {
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
            Mounjaro Kwikpen: The New Generation Weight Loss and Glucose Control Option in Malaysia
          </h2>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="ml-4 px-6 py-2 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors whitespace-nowrap"
          >
            {isExpanded ? "Show Less" : "Read More"}
          </button>
        </div>

        {!isExpanded && (
          <p className="text-gray-700 leading-relaxed">
            Are you looking for a more efficient and convenient weight loss solution?{" "}
            <strong>Mounjaro (Tirzepatide)</strong> from Eli Lilly is a revolutionary dual incretin (GIP/GLP-1
            receptor agonist) that is bringing new hope to patients managing weight and type 2 diabetes in Malaysia.
            The Mounjaro Kwikpen serves as a pre-filled injection device, making self-injection simple and intuitive.
          </p>
        )}

        {isExpanded && (

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Column 1 */}
          <div className="space-y-6">
            <p className="text-base text-gray-700 leading-relaxed">
              Are you looking for a more efficient and convenient weight loss solution?{" "}
              <strong>Mounjaro (Tirzepatide)</strong> from Eli Lilly is a revolutionary dual incretin (GIP/GLP-1
              receptor agonist) that is bringing new hope to patients managing weight and type 2 diabetes in Malaysia.
              The Mounjaro Kwikpen serves as a pre-filled injection device, making self-injection simple and intuitive.
            </p>

            <div className="pt-2">
              <h3 className="text-xl font-bold text-primary mb-3">
                What is Mounjaro Kwikpen? Why is It a New Favorite for Weight Loss?
              </h3>
              <p className="text-base text-gray-700 leading-relaxed">
                The active ingredient in Mounjaro, Tirzepatide, is the world's first dual-acting drug combining GIP
                (Glucose-dependent Insulinotropic Polypeptide) and GLP-1 (Glucagon-like Peptide-1).
              </p>
            </div>

            <div className="pt-2">
              <h4 className="text-lg font-semibold text-primary mb-3">
                Dual Mechanism Delivers Powerful Weight Loss Effects:
              </h4>
              <ul className="space-y-3 text-base text-gray-700 leading-relaxed">
                <li className="flex gap-3">
                  <span className="text-primary mt-1.5 flex-shrink-0">•</span>
                  <span>
                    <strong>Appetite Suppression and Delayed Gastric Emptying:</strong> GIP and GLP-1 work together on the
                    brain to increase satiety, significantly reducing hunger and food cravings.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary mt-1.5 flex-shrink-0">•</span>
                  <span>
                    <strong>Metabolic Improvement:</strong> Helps enhance insulin sensitivity, control blood sugar more
                    effectively, and promote fat metabolism.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary mt-1.5 flex-shrink-0">•</span>
                  <span>
                    <strong>Clinical Evidence:</strong> Clinical trials show that Mounjaro provides superior weight loss
                    results compared to traditional single-mechanism drugs, achieving a significant average percentage of
                    weight reduction.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 2 */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-primary mb-3">Kwikpen Design: Effortless Self-Injection</h3>
              <p className="text-base text-gray-700 leading-relaxed">
                The Mounjaro Kwikpen is a pre-filled injection pen designed to simplify the once-weekly subcutaneous
                injection process. Its "one-click injection" design allows patients to easily master the technique of
                self-injection, eliminating the need for complicated procedures or drug preparation, greatly enhancing
                treatment convenience and adherence.
              </p>
            </div>

            <div className="pt-2">
              <h3 className="text-xl font-bold text-primary mb-3">
                Mounjaro Dosage and Online Purchase Guide in Malaysia
              </h3>
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                Mounjaro therapy typically starts at a low dose and is gradually increased to help the body adapt and
                minimize gastrointestinal side effects. The Mounjaro Kwikpen offers various dose options, with each pen
                usually containing four weekly doses:
              </p>

              <div className="overflow-x-auto mt-4 rounded-lg shadow-sm">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="bg-primary text-white">
                      <th className="px-4 py-3 text-left font-semibold">Dose</th>
                      <th className="px-4 py-3 text-left font-semibold">Function</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                      <td className="px-4 py-3 font-bold text-primary">2.5mg</td>
                      <td className="px-4 py-3 text-gray-700">
                        Starting dose, used to establish body tolerance.
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                      <td className="px-4 py-3 font-bold text-primary">5mg</td>
                      <td className="px-4 py-3 text-gray-700">
                        Foundational treatment dose, begins to show stable weight loss and metabolic improvement effects.
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                      <td className="px-4 py-3 font-bold text-primary">7.5mg</td>
                      <td className="px-4 py-3 text-gray-700">
                        Increased dose, enhancing weight loss efficacy.
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                      <td className="px-4 py-3 font-bold text-primary">10mg</td>
                      <td className="px-4 py-3 text-gray-700">Advanced treatment dose.</td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                      <td className="px-4 py-3 font-bold text-primary">12.5mg</td>
                      <td className="px-4 py-3 text-gray-700">High-efficacy treatment dose.</td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-4 py-3 font-bold text-primary">15mg</td>
                      <td className="px-4 py-3 text-gray-700">
                        Maximum dose, used for optimal weight loss results.
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
              <h3 className="text-xl font-bold text-primary mb-3">Start Your Mounjaro Weight Loss Journey</h3>
              <p className="text-base text-gray-700 leading-relaxed">
                The introduction of the Mounjaro Kwikpen provides a powerful and convenient tool for patients in Malaysia
                seeking effective weight loss and metabolic improvement. With its dual mechanism of action and easy-to-use
                self-injection design, it has become a key for many to achieve their health goals.
              </p>
            </div>

            <div className="bg-gradient-to-br from-primary/5 to-primary/10 p-6 rounded-xl border border-primary/20">
              <p className="text-base text-gray-800 leading-relaxed font-medium">
                Want to know if the Mounjaro Kwikpen is right for you? Book a professional consultation in Malaysia
                immediately, and let us customize the most suitable dosage for you (from 2.5mg increasing to 15mg), and
                start your new chapter of healthy weight loss!
              </p>
            </div>
          </div>
        </div>
        )}
      </div>
    </section>
  )
}
