import { Card } from "@/components/ui/card"
import { Heart, Shield, Coffee } from 'lucide-react'

export function HomeIntro() {
  const values = [
    {
      icon: Shield,
      title: "Espacio Seguro",
      description: "Un lugar libre de juicios donde puedes ser tú mismo/a sin filtros ni máscaras",
    },
    {
      icon: Heart,
      title: "Acompañamiento Humano",
      description: "Más que técnicas, ofrezco una conexión genuina y cercana en tu proceso",
    },
    {
      icon: Coffee,
      title: "Con Calidez",
      description: "Nos tomamos un tecito que acompañe tu emoción, porque sanar también tiene aroma a calma",
    },
  ]

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto mb-12">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/3">
              <img
                src="/ainara2.jpeg"
                alt="Psicóloga Itziar Ainara Salas Churo"
                className="w-full rounded-lg shadow-lg object-cover aspect-[3/4]"
              />
            </div>
            <div className="w-full md:w-2/3">
              <p className="text-xl md:text-2xl font-light leading-relaxed text-muted-foreground">
                La terapia no es solo hablar. Es permitirte sentir, reflexionar y construir herramientas reales para
                transformar tu vida. Aquí encontrarás un espacio donde{" "}
                <span className="text-accent font-medium">tu bienestar es prioridad</span>.
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow bg-secondary/30">
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
