import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-20 md:py-32">
      <div className="container">
        <Card className="relative overflow-hidden border-2 bg-gradient-to-br from-primary/10 via-background to-accent/10">
          <CardContent className="p-8 md:p-12 lg:p-16">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-balance">
                  {"Ready to Start Your Transformation?"}
                </h2>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  {
                    "Take the first step towards a healthier, more confident you. Our medical team is ready to create your personalized weight loss plan today."
                  }
                </p>

                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-success" />
                    <span>{"Free consultation with licensed physician"}</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-success" />
                    <span>{"Get prescribed in as little as 24 hours"}</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-success" />
                    <span>{"Free shipping on all orders"}</span>
                  </li>
                </ul>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-base">
                    {"Get Started Today"}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline" className="text-base bg-transparent">
                    {"Schedule Free Call"}
                  </Button>
                </div>

                <p className="text-sm text-muted-foreground pt-2">{"✓ No commitment required • Cancel anytime"}</p>
              </div>

              <div className="relative">
                <img src="/happy-person-celebrating-weight-loss-success.jpg" alt="Success celebration" className="rounded-xl shadow-2xl" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
