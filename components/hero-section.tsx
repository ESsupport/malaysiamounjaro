import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2 } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-secondary/30 py-20 md:py-32">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="flex flex-col gap-6">
            <Badge className="w-fit bg-success/10 text-success border-success/20 hover:bg-success/20">
              <CheckCircle2 className="mr-1 h-3 w-3" />
              FDA-Approved Medical Treatment
            </Badge>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
              Transform Your Life with <span className="text-primary">Medical Weight Loss</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground text-pretty leading-relaxed">
              {
                "Clinically proven weight loss injections that help you lose 15-20% of your body weight. FDA-approved, doctor-supervised, and delivered to your door."
              }
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-base">
                Start Your Journey
              </Button>
              <Button size="lg" variant="outline" className="text-base bg-transparent">
                Book Free Consultation
              </Button>
            </div>

            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-success" />
                <span className="text-sm font-medium">No insurance needed</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-success" />
                <span className="text-sm font-medium">Doctor-supervised</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-success" />
                <span className="text-sm font-medium">Cancel anytime</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-square w-full max-w-lg mx-auto">
              <img
                src="/professional-medical-weight-loss-consultation.jpg"
                alt="Medical consultation"
                className="rounded-2xl object-cover shadow-2xl"
              />

              <div className="absolute -bottom-6 -left-6 bg-card border rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-success/10 flex items-center justify-center">
                    <span className="text-2xl font-bold text-success">15%</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Average Weight Loss</p>
                    <p className="text-xs text-muted-foreground">In 12 weeks</p>
                  </div>
                </div>
              </div>

              <div className="absolute -top-6 -right-6 bg-card border rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary">50K+</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Happy Patients</p>
                    <p className="text-xs text-muted-foreground">Transformed lives</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
