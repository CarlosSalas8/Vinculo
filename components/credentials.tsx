import { Card } from "@/components/ui/card"
import { GraduationCap, Award, BookOpen } from "lucide-react"

export function Credentials() {
  const credentials = [
    {
      icon: GraduationCap,
      title: "Psicóloga Clínica",
      institution: "Universidad Técnica Particular de Loja",
      description: "Formación especializada en atención psicológica clínica",
    },
    {
      icon: Award,
      title: "Máster en Psicología Forense",
      institution: "Universidad Internacional de la Rioja (UNIR)",
      description: "Especialización en evaluación pericial y contextos legales",
    },
    {
      icon: BookOpen,
      title: "Especialista en Terapia Cognitivo Conductual y Contextual",
      institution: "Universidad Nacional de Tumbes",
      description: "Enfoque basado en evidencia científica y calidez humana",
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-light mb-4 tracking-tight">Formación Académica</h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Respaldo profesional con formación continua y especializada
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {credentials.map((credential, index) => {
              const Icon = credential.icon
              return (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow bg-background">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
                      <Icon className="w-8 h-8 text-accent" />
                    </div>
                    <h3 className="text-xl font-semibold">{credential.title}</h3>
                    <p className="text-sm font-medium text-accent">{credential.institution}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{credential.description}</p>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
