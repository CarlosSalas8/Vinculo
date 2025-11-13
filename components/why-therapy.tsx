import { Card } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"

export function WhyTherapy() {
  const reasons = [
    "Sientes que la ansiedad o el estrés no te dejan vivir tranquilo/a",
    "Estás pasando por una ruptura o conflictos en tus relaciones",
    "La tristeza es constante y no encuentras motivación",
    "Necesitas orientación para tomar decisiones importantes",
    "Quieres fortalecer tu autoestima y amor propio",
    "Estás en un proceso legal y necesitas acompañamiento emocional",
  ]

  return (
    <section id="cuando-buscar-ayuda" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light mb-4 tracking-tight">¿Cuándo buscar ayuda?</h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-6" />
            <p className="text-lg text-muted-foreground italic font-light max-w-2xl mx-auto">
              Pedir ayuda también es un acto de valentía y amor propio
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {reasons.map((reason, index) => (
              <Card key={index} className="p-5 hover:shadow-md transition-shadow bg-background">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <p className="text-base leading-relaxed">{reason}</p>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Card className="p-6 bg-accent/5 border-accent/20 inline-block">
              <p className="text-lg font-medium">
                Si te identificas con alguna de estas situaciones,{" "}
                <span className="text-accent">estás en el lugar correcto</span>
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
