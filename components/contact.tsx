import { Card } from "@/components/ui/card"
import { Phone, Mail, Instagram, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Contact() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-light mb-4 tracking-tight">Contacto</h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-6" />
            <p className="text-xl text-muted-foreground italic font-light max-w-2xl mx-auto">
              Pedir ayuda también es un acto de valentía y amor propio
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Teléfono</h3>
                  <a href="tel:+593981445625" className="text-muted-foreground hover:text-accent transition-colors">
                    098 1445 625
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Email</h3>
                  <a
                    href="mailto:salasitziara@gmail.com"
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    salasitziara@gmail.com
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Instagram className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Instagram</h3>
                  <a
                    href="https://instagram.com/ainarasalaspsi.cli.fo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    @ainarasalaspsi.cli.fo
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Ubicación</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Lauro Guerrero y 10 de Agosto
                    <br />
                    Edificio Neurológico Sánchez, 1er piso
                  </p>
                </div>
              </div>
            </Card>
          </div>

          <div className="text-center">
            <Button size="lg" asChild>
              <a href="https://wa.me/593981445625" target="_blank" rel="noopener noreferrer">
                Agenda tu cita por WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
