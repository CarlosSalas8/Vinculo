import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Phone, Mail, Instagram, MapPin } from "lucide-react"

export function CTA() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light mb-4 tracking-tight">Da el Primer Paso</h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-6" />
            <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto">
              Tu bienestar merece espacio. Agenda tu primera sesión y comienza tu proceso de transformación.
            </p>
          </div>

          <div className="text-center mb-10">
            <Button size="lg" className="text-lg px-8 py-6" asChild>
              <a href="https://wa.me/593981445625" target="_blank" rel="noopener noreferrer">
                Agenda tu Cita por WhatsApp
              </a>
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <Card className="p-5 hover:shadow-md transition-shadow bg-background">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">Teléfono</h3>
                  <a href="tel:+593981445625" className="font-semibold hover:text-accent transition-colors">
                    098 1445 625
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-5 hover:shadow-md transition-shadow bg-background">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">Email</h3>
                  <a href="mailto:salasitziara@gmail.com" className="font-semibold hover:text-accent transition-colors">
                    salasitziara@gmail.com
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-5 hover:shadow-md transition-shadow bg-background">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Instagram className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">Instagram</h3>
                  <a
                    href="https://instagram.com/ainarasalaspsi.cli.fo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold hover:text-accent transition-colors"
                  >
                    @ainarasalaspsi.cli.fo
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-5 hover:shadow-md transition-shadow bg-background">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">Ubicación</h3>
                  <p className="font-semibold text-sm">Lauro Guerrero y 10 de Agosto, 1er piso</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
