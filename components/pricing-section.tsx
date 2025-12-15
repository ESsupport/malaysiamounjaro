import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, Sparkles } from "lucide-react"

const plans = [
  {
    name: "Starter Plan",
    price: "$297",
    period: "per month",
    description: "Perfect for those beginning their weight loss journey",
    features: [
      "Initial medical consultation",
      "FDA-approved medication (4-week supply)",
      "Basic support via messaging",
      "Monthly progress tracking",
      "Educational resources",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Premium Plan",
    price: "$497",
    period: "per month",
    description: "Our most popular plan with comprehensive support",
    features: [
      "Everything in Starter Plan",
      "Priority medical consultations",
      "Premium medication (4-week supply)",
      "24/7 care team access",
      "Personalized meal plans",
      "Fitness coaching",
      "Monthly video check-ins",
    ],
    cta: "Start Premium",
    popular: true,
    badge: "Most Popular",
    discount: "Save $100 - Limited Time",
  },
  {
    name: "Concierge Plan",
    price: "$797",
    period: "per month",
    description: "White-glove service with maximum results",
    features: [
      "Everything in Premium Plan",
      "Dedicated care coordinator",
      "Weekly doctor consultations",
      "Advanced body composition analysis",
      "Nutritionist consultations",
      "Mental health coaching",
      "VIP priority shipping",
      "Lifetime alumni support",
    ],
    cta: "Go Concierge",
    popular: false,
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="py-20 md:py-32">
      <div className="container">
        <div className="flex flex-col items-center gap-4 text-center mb-12">
          <Badge className="bg-accent/10 text-accent border-accent/20">
            <Sparkles className="mr-1 h-3 w-3" />
            Limited Time Offer
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-balance">Choose Your Plan</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl text-pretty">
            {"All plans include FDA-approved medication, doctor supervision, and ongoing support. Cancel anytime."}
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative ${plan.popular ? "border-2 border-primary shadow-xl scale-105" : "border-2"}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground px-4 py-1">{plan.badge}</Badge>
                </div>
              )}

              <CardHeader className="pb-6">
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription className="text-base">{plan.description}</CardDescription>

                <div className="pt-4">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                  {plan.discount && (
                    <Badge variant="outline" className="mt-2 text-success border-success/20 bg-success/10">
                      {plan.discount}
                    </Badge>
                  )}
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-success shrink-0 mt-0.5" />
                      <span className="text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full ${plan.popular ? "bg-accent text-accent-foreground hover:bg-accent/90" : ""}`}
                  variant={plan.popular ? "default" : "outline"}
                  size="lg"
                >
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center space-y-4">
          <p className="text-muted-foreground">
            {"All plans include free shipping • HSA/FSA accepted • No insurance required"}
          </p>
          <Button variant="link" className="text-primary">
            Compare all plan features →
          </Button>
        </div>
      </div>
    </section>
  )
}
