import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Emily Rodriguez",
    role: "Lost 45 lbs in 5 months",
    avatar: "/professional-woman-smiling.png",
    content:
      "This program changed my life. The medical team was incredibly supportive, and the results speak for themselves. I have more energy, confidence, and my health markers have improved dramatically.",
    rating: 5,
  },
  {
    name: "James Wilson",
    role: "Lost 52 lbs in 6 months",
    avatar: "/man-smiling-professional.jpg",
    content:
      "I've tried every diet out there with no lasting success. This medical approach finally worked. The injections combined with the support system made all the difference.",
    rating: 5,
  },
  {
    name: "Amanda Chen",
    role: "Lost 38 lbs in 4 months",
    avatar: "/asian-woman-smiling-professional.jpg",
    content:
      "As someone with a busy career and family, I needed something that fit my lifestyle. The convenience and effectiveness of this program exceeded my expectations.",
    rating: 5,
  },
  {
    name: "Robert Martinez",
    role: "Lost 48 lbs in 5 months",
    avatar: "/man-smiling-hispanic-professional.jpg",
    content:
      "My doctor recommended this program, and I'm so glad I listened. Not only did I lose weight, but my blood pressure and cholesterol levels have normalized.",
    rating: 5,
  },
  {
    name: "Lisa Thompson",
    role: "Lost 41 lbs in 4 months",
    avatar: "/woman-smiling-blonde-professional.jpg",
    content:
      "The before and after photos don't lie, but what really matters is how I feel. I have my confidence back and I'm living my best life.",
    rating: 5,
  },
  {
    name: "Carlos Hernandez",
    role: "Lost 58 lbs in 6 months",
    avatar: "/man-smiling-beard-professional.jpg",
    content:
      "I was skeptical at first, but the science-backed approach and professional medical team won me over. Best decision I've made for my health.",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section className="py-20 md:py-32 bg-secondary/30">
      <div className="container">
        <div className="flex flex-col items-center gap-4 text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-balance">
            What Our Patients Say
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl text-pretty">
            {
              "Join thousands of satisfied patients who have transformed their lives with our medical weight loss program."
            }
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-2">
              <CardContent className="pt-6 space-y-4">
                <div className="flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>

                <p className="text-sm leading-relaxed text-muted-foreground">{`"${testimonial.content}"`}</p>

                <div className="flex items-center gap-3 pt-2">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-sm">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-card border rounded-lg px-6 py-4">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <Avatar key={i} className="border-2 border-background">
                  <AvatarImage src={`/diverse-group.png?height=40&width=40&query=person ${i}`} />
                  <AvatarFallback>U{i}</AvatarFallback>
                </Avatar>
              ))}
            </div>
            <div className="text-left">
              <p className="font-semibold">{"Join 50,000+ happy patients"}</p>
              <p className="text-sm text-muted-foreground">{"4.9/5 average rating from verified patients"}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
