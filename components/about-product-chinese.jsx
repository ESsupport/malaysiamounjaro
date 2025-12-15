"use client"

import { useState } from "react"

export function AboutProductChinese() {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <section className="py-16 px-4 bg-gray-50">
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
            【减重突破】Mounjaro Kwikpen：马来西亚市场的新一代减肥与控糖选择
          </h2>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="ml-4 px-6 py-2 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors whitespace-nowrap"
          >
            {isExpanded ? "收起" : "阅读更多"}
          </button>
        </div>

        {!isExpanded && (
          <p className="text-gray-700 leading-relaxed">
            您是否正在寻找更高效、更方便的减重解决方案？来自礼来药厂的
              Mounjaro（Tirzepatide）是一种革命性的双重肠泌素（GIP/GLP-1
              受体激动剂），正为马来西亚的体重管理和第二型糖尿病患者带来新的希望。其中，Mounjaro Kwikpen
              作为预充式注射装置，让自己注射变得简单又直觉。
          </p>
        )}

        {isExpanded && (

        <div className="grid md:grid-cols-3 gap-8">
          {/* Column 1 */}
          <div className="space-y-6">
            <p className="text-base text-gray-700 leading-relaxed">
              您是否正在寻找更高效、更方便的减重解决方案？来自礼来药厂的
              Mounjaro（Tirzepatide）是一种革命性的双重肠泌素（GIP/GLP-1
              受体激动剂），正为马来西亚的体重管理和第二型糖尿病患者带来新的希望。其中，Mounjaro Kwikpen
              作为预充式注射装置，让自己注射变得简单又直觉。
            </p>

            <div className="pt-2">
              <h3 className="text-xl font-bold text-primary mb-3">Mounjaro Kwikpen 是什么？为何成为减重新宠？</h3>
              <p className="text-base text-gray-700 leading-relaxed">
                Mounjaro 的活性成分 Tirzepatide，是全球首个结合 GIP（葡萄糖依赖性促胰岛素多肽）和
                GLP-1（类升糖素肽-1）的双重作用药物。
              </p>
            </div>

            <div className="pt-2">
              <h4 className="text-lg font-semibold text-primary mb-3">双重机制带来强效减肥效果：</h4>
              <ul className="space-y-3 text-base text-gray-700">
                <li className="flex gap-3 leading-relaxed">
                  <span className="text-primary mt-1.5 flex-shrink-0">•</span>
                  <span>
                    <strong>抑制食欲与延缓胃排空：</strong> GIP 和 GLP-1
                    共同作用于大脑，增加饱足感，显著降低饥饿感和食物渴望。
                  </span>
                </li>
                <li className="flex gap-3 leading-relaxed">
                  <span className="text-primary mt-1.5 flex-shrink-0">•</span>
                  <span>
                    <strong>改善代谢：</strong> 有助于提升胰岛素敏感度，更有效地控制血糖，同时促进脂肪代谢。
                  </span>
                </li>
                <li className="flex gap-3 leading-relaxed">
                  <span className="text-primary mt-1.5 flex-shrink-0">•</span>
                  <span>
                    <strong>临床实证：</strong> 临床试验显示，Mounjaro
                    在体重管理方面展现出优于传统单一机制药物的效果，平均可实现显著的减重百分比。
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 2 */}
          <div className="space-y-6">
            <div>
              <h4 className="text-xl font-semibold text-primary mb-3">Kwikpen 设计：轻松实现自己注射</h4>
              <p className="text-base text-gray-700 leading-relaxed">
                Mounjaro Kwikpen
                是一种预充式注射笔，旨在简化每周一次的皮下注射流程。其"一键注射"的设计，使患者可以轻松掌握自己注射的技巧，无需复杂的操作或抽药步骤，大大提升了治疗的便利性与依从性。
              </p>
            </div>

            <div className="pt-2">
              <h3 className="text-xl font-bold text-primary mb-3">Mounjaro 在马来西亚的剂量与线上购买指南</h3>
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                Mounjaro 疗程通常从低剂量开始，然后逐步增加，以帮助身体适应，并最大限度地减少肠胃道副作用。
              </p>
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                Mounjaro Kwikpen 提供多种剂量选择，每支笔通常包含四次每周剂量：
              </p>

              <div className="overflow-x-auto rounded-lg shadow-sm">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="bg-primary text-white">
                      <th className="px-4 py-3 text-left font-semibold">剂量 (每周一次)</th>
                      <th className="px-4 py-3 text-left font-semibold">作用</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                      <td className="px-4 py-3 font-bold text-primary">2.5mg</td>
                      <td className="px-4 py-3 text-gray-700">起始剂量，用于建立身体耐受性。</td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                      <td className="px-4 py-3 font-bold text-primary">5mg</td>
                      <td className="px-4 py-3 text-gray-700">
                        基础治疗剂量，开始发挥稳定的减重与代谢改善效果。
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                      <td className="px-4 py-3 font-bold text-primary">7.5mg</td>
                      <td className="px-4 py-3 text-gray-700">提升剂量，增强减肥效果。</td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                      <td className="px-4 py-3 font-bold text-primary">10mg</td>
                      <td className="px-4 py-3 text-gray-700">进阶治疗剂量。</td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                      <td className="px-4 py-3 font-bold text-primary">12.5mg</td>
                      <td className="px-4 py-3 text-gray-700">高效治疗剂量。</td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-4 py-3 font-bold text-primary">15mg</td>
                      <td className="px-4 py-3 text-gray-700">最高剂量，用于获得最佳减重效果。</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Column 3 */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-primary mb-3">开始您的 Mounjaro 减重之旅</h3>
              <p className="text-base text-gray-700 leading-relaxed">
                Mounjaro Kwikpen
                的出现，为马来西亚寻求有效减重和代谢改善的患者，提供了一个强大且方便的工具。凭借其双重作用机制和简单易用的自己注射设计，它已成为许多人实现健康目标的关键。
              </p>
            </div>

            <div className="bg-gradient-to-br from-primary/5 to-primary/10 p-6 rounded-xl border border-primary/20">
              <p className="text-base text-gray-800 leading-relaxed font-medium">
                想知道 Mounjaro Kwikpen 是否适合您？立即预约马来西亚的专业咨询，让我们为您量身定制最适合的剂量（从 2.5mg
                递增至 15mg），开启您的健康减肥新篇章！
              </p>
            </div>
          </div>
        </div>
        )}
      </div>
    </section>
  )
}
