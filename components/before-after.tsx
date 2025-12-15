"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"

const results = [
  {
    name: "Sarah M.",
    age: 34,
    weightLost: "42 lbs",
    timeframe: "4 months",
    beforeImage: "/before-weight-loss-woman-standing.jpg",
    afterImage: "/after-weight-loss-woman-standing-confident.jpg",
    quote: "I finally feel like myself again. The support and medication changed everything.",
  },
  {
    name: "Michael T.",
    age: 45,
    weightLost: "55 lbs",
    timeframe: "5 months",
    beforeImage: "/before-weight-loss-man-standing.jpg",
    afterImage: "/after-weight-loss-man-standing-confident.jpg",
    quote: "This program gave me my energy back. I can play with my kids again without getting tired.",
  },
  {
    name: "Jessica L.",
    age: 29,
    weightLost: "38 lbs",
    timeframe: "3 months",
    beforeImage: "/before-weight-loss-woman-portrait.jpg",
    afterImage: "/after-weight-loss-woman-portrait-confident.jpg",
    quote: "The easiest weight loss journey I've ever experienced. No restrictive diets, just results.",
  },
  {
    name: "David R.",
    age: 52,
    weightLost: "60 lbs",
    timeframe: "6 months",
    beforeImage: "/before-weight-loss-man-portrait.jpg",
    afterImage: "/after-weight-loss-man-portrait-confident.jpg",
    quote: "My doctor is amazed at my progress. Blood pressure is normal and I feel 20 years younger.",
  },
]

export function BeforeAfter() {
  const [activeCard, setActiveCard] = useState<number | null>(null)

  return (
    <section id="results" className="py-20 md:py-32 bg-secondary/30">
      <div className="container">
        <div className="flex flex-col items-center gap-4 text-center mb-12">
          <Badge className="bg-success/10 text-success border-success/20">Real Results</Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-balance">
            Transformations That Inspire
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl text-pretty">
            {"See real before and after results from our patients. Their success stories could be your story too."}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {results.map((result, index) => (
            <Card
              key={index}
              className="group overflow-hidden hover:shadow-xl transition-all cursor-pointer"
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}
            >
              <CardContent className="p-0">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={result.beforeImage || "/placeholder.svg"}
                    alt={`${result.name} before`}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                      activeCard === index ? "opacity-0" : "opacity-100"
                    }`}
                  />
                  <img
                    src={result.afterImage || "/placeholder.svg"}
                    alt={`${result.name} after`}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                      activeCard === index ? "opacity-100" : "opacity-0"
                    }`}
                  />

                  <div className="absolute top-4 left-4">
                    <Badge className="bg-background/90 text-foreground">
                      {activeCard === index ? "After" : "Before"}
                    </Badge>
                  </div>

                  <div className="absolute top-4 right-4 bg-success text-success-foreground px-3 py-1 rounded-full text-sm font-bold">
                    -{result.weightLost}
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-lg">{result.name}</h3>
                      <p className="text-sm text-muted-foreground">Age {result.age}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-primary">{result.timeframe}</p>
                      <p className="text-xs text-muted-foreground">timeframe</p>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground italic leading-relaxed">{`"${result.quote}"`}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            {"*Results may vary. Individual results depend on many factors including adherence to program."}
          </p>
        </div>
      </div>
    </section>
  )
}
