import { Card, CardContent } from "@/components/ui/card"
import { MessageSquare, FileText, Package, TrendingDown } from "lucide-react"

const steps = [
  {
    icon: MessageSquare,
    title: "Free Consultation",
    description: "Complete a quick online assessment and speak with a licensed physician about your weight loss goals.",
    step: "01",
  },
  {
    icon: FileText,
    title: "Get Prescribed",
    description:
      "Our doctors review your health profile and create a personalized treatment plan tailored to your needs.",
    step: "02",
  },
  {
    icon: Package,
    title: "Receive Treatment",
    description: "Your FDA-approved medication ships directly to your door with everything you need to get started.",
    step: "03",
  },
  {
    icon: TrendingDown,
    title: "Track Progress",
    description: "Monitor your weight loss journey with ongoing support from your care team and regular check-ins.",
    step: "04",
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-32">
      <div className="container">
        <div className="flex flex-col items-center gap-4 text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-balance">How It Works</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl text-pretty">
            {
              "Start your weight loss journey in 4 simple steps. From consultation to results, we're with you every step of the way."
            }
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <Card key={index} className="relative border-2 hover:border-primary transition-colors">
                <CardContent className="pt-12 pb-6 px-6">
                  <div className="absolute -top-6 left-6">
                    <div className="h-12 w-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg">
                      <Icon className="h-6 w-6" />
                    </div>
                  </div>

                  <div className="absolute top-4 right-4">
                    <span className="text-6xl font-bold text-muted/10">{step.step}</span>
                  </div>

                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
