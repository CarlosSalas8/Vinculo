import { Card } from "@/components/ui/card"
import { Heart, BookOpen, Users } from "lucide-react"

export function About() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-light mb-4 tracking-tight">Sobre mí</h2>
            <div className="w-20 h-1 bg-accent mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
            <div className="space-y-6">
              <img
                src="/ainara.jpeg"
                alt="Itziar Ainara Salas Churo"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>

            <div className="space-y-6">
              <Card className="p-6 bg-secondary/50">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Más que una terapia, es un encuentro contigo misma/o. Te ofrezco un espacio seguro donde exploramos lo
                  que te duele y lo que te impulsa.
                </p>
              </Card>

              <p className="text-lg leading-relaxed">
                A veces reflexionamos, otras reímos o simplemente respiramos. Y sí, según cómo te sientas, nos tomamos
                un tecito que acompañe tu emoción, porque sanar también tiene aroma a calma.
              </p>

              <Card className="p-6 border-accent/30">
                <p className="text-base leading-relaxed font-medium">
                  Las sesiones duran <span className="text-accent">1 hora</span> y son espacios libres de juicios, donde
                  tu bienestar es la prioridad.
                </p>
              </Card>
            </div>
          </div>

          <div className="space-y-8 mt-12">
            <Card className="p-8 bg-secondary/30">
              <h3 className="text-2xl font-light mb-4 text-center">¿Quién soy realmente?</h3>
              <div className="space-y-4 text-lg leading-relaxed">
                <p>
                  Soy Itziar Ainara, y llegué a la psicología no solo por vocación académica, sino por una profunda
                  necesidad de entender el alma humana. Crecí creyendo que ayudar a los demás era el mejor camino para
                  darle sentido a la vida, y aquí estoy, acompañando procesos de sanación con la misma calidez con la
                  que me gustaría ser acompañada.
                </p>
                <p>
                  Creo firmemente que la terapia no debe sentirse como una carga, sino como un refugio. Por eso, mi
                  enfoque es cercano, humano y sin etiquetas. Me gusta trabajar desde la empatía real, no desde el
                  manual. Porque al final, todos necesitamos ser escuchados sin miedo al juicio.
                </p>
                <p className="font-medium text-accent italic">
                  "No se trata solo de resolver problemas, sino de acompañarte mientras descubres tu propia luz."
                </p>
              </div>
            </Card>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6 text-center bg-background hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-7 h-7 text-accent" />
                </div>
                <h4 className="text-lg font-semibold mb-2">Mi enfoque</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Trabajo desde la psicología clínica con herramientas cognitivo-conductuales, pero siempre adaptadas a
                  tu ritmo y necesidad.
                </p>
              </Card>

              <Card className="p-6 text-center bg-background hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-7 h-7 text-accent" />
                </div>
                <h4 className="text-lg font-semibold mb-2">Mi filosofía</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Cada persona lleva su propio tiempo. No hay prisa. Aquí avanzamos juntos, con paciencia y respeto por
                  tu proceso.
                </p>
              </Card>

              <Card className="p-6 text-center bg-background hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <Users className="w-7 h-7 text-accent" />
                </div>
                <h4 className="text-lg font-semibold mb-2">Mi compromiso</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Ofrecerte un espacio donde te sientas seguro/a para ser vulnerable, porque ahí es donde comienza la
                  verdadera transformación.
                </p>
              </Card>
            </div>

            <Card className="p-8 bg-accent/5 border-accent/20">
              <p className="text-lg leading-relaxed text-center">
                Más allá de los títulos y las técnicas, soy una persona que cree en el poder de la escucha, la compasión
                y el respeto. Si buscas un espacio donde ser tú mismo/a sin máscaras,{" "}
                <span className="font-semibold text-accent">estás en el lugar correcto</span>.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
