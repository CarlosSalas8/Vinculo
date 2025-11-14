import { Card } from "@/components/ui/card"
import { Heart, Scale, Users, Brain, Smile, Compass, FileText, Shield } from 'lucide-react'

export function Services() {
  const psychotherapyServices = [
    {
      icon: Brain,
      name: "Ansiedad y Estrés",
      description: "Manejo de síntomas y desarrollo de herramientas de afrontamiento efectivas",
    },
    {
      icon: Heart,
      name: "Depresión y Duelo",
      description: "Acompañamiento en procesos de pérdida y tristeza profunda",
    },
    {
      icon: Users,
      name: "Relaciones de Pareja",
      description: "Terapia para parejas y acompañamiento en procesos de ruptura",
    },
    {
      icon: Smile,
      name: "Problemas de Autoestima",
      description: "Fortalecimiento de la confianza y amor propio",
    },
    {
      icon: Compass,
      name: "Orientación Vocacional",
      description: "Guía para la toma de decisiones profesionales y académicas",
    },
    {
      icon: FileText,
      name: "Emisión de Certificados",
      description: "Documentación profesional para diferentes necesidades",
    },
  ]

  const forensicServices = [
    {
      icon: Scale,
      name: "Peritajes Psicológicos",
      description: "Evaluaciones especializadas para procesos legales con rigor técnico",
    },
    {
      icon: Shield,
      name: "Acompañamiento Emocional",
      description: "Apoyo psicológico durante procedimientos judiciales",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-light mb-4 tracking-tight">Servicios</h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Atención integral para niños, jóvenes y adultos. Modalidad presencial y online.
            </p>
          </div>

          <div className="mb-12 flex justify-center">
            <img
              src="/ainara4.jpeg"
              alt="Psicóloga Itziar Ainara Salas Churo - Servicios"
              className="rounded-lg shadow-lg object-cover aspect-[3/4] max-w-sm"
            />
          </div>

          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-center">Psicoterapia y Bienestar</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {psychotherapyServices.map((service, index) => {
                  const Icon = service.icon
                  return (
                    <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6 text-accent" />
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">{service.name}</h4>
                          <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                        </div>
                      </div>
                    </Card>
                  )
                })}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6 text-center">Área Legal y Forense</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {forensicServices.map((service, index) => {
                  const Icon = service.icon
                  return (
                    <Card key={index} className="p-6 hover:shadow-lg transition-shadow bg-secondary/50">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6 text-accent" />
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">{service.name}</h4>
                          <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                        </div>
                      </div>
                    </Card>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
