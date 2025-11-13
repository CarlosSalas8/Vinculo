import { Card } from "@/components/ui/card"
import { Clock, DollarSign, Users, Sparkles } from "lucide-react"

export function SessionInfo() {
  const details = [
    {
      icon: Clock,
      label: "Duración",
      value: "1 hora por sesión",
    },
    {
      icon: DollarSign,
      label: "Inversión",
      value: "$25 por consulta",
    },
    {
      icon: Users,
      label: "Modalidad",
      value: "Presencial u Online",
    },
    {
      icon: Sparkles,
      label: "Enfoque",
      value: "Cognitivo-Conductual y Contextual",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light mb-4 tracking-tight">Información de las Sesiones</h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Sesiones diseñadas para adaptarse a tus necesidades y ritmo de vida
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {details.map((detail, index) => {
              const Icon = detail.icon
              return (
                <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-1">{detail.label}</h3>
                  <p className="font-semibold text-base">{detail.value}</p>
                </Card>
              )
            })}
          </div>

          <Card className="p-8 bg-secondary/50">
            <h3 className="text-2xl font-light mb-4 text-center">¿Cómo trabajamos?</h3>
            <div className="space-y-4 max-w-3xl mx-auto">
              <p className="text-base leading-relaxed text-muted-foreground">
                Combinamos herramientas prácticas con reflexiones profundas. Exploramos tanto lo que te duele como lo
                que te impulsa a seguir adelante. No hay una fórmula única, cada sesión se adapta a lo que necesitas en
                ese momento.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                A veces reflexionamos, otras reímos o simplemente respiramos. Y sí, según cómo te sientas, nos tomamos
                un tecito que acompañe tu emoción, porque{" "}
                <span className="font-medium text-foreground">sanar también tiene aroma a calma</span>.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
