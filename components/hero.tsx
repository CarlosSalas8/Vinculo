import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section id="inicio" className="relative h-[600px] flex items-center justify-center overflow-hidden">
      <img
        src="/serene-therapy-office-with-natural-light-and-plant.jpg"
        alt="Espacio terapéutico"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/30" />
      <div className="relative z-10 text-center space-y-6 px-4 max-w-3xl">
        <h1 className="text-5xl md:text-7xl font-light tracking-tight text-white text-balance">
          Tu bienestar merece espacio
        </h1>
        <p className="text-lg md:text-xl text-white/90 font-light text-pretty">
          Atención psicológica presencial y online para niños, jóvenes y adultos. Un enfoque clínico y forense para
          ayudarte a sanar.
        </p>
        <div className="flex gap-4 justify-center">
          <Button size="lg" className="bg-white text-foreground hover:bg-white/90" asChild>
            <a href="/contacto">Agenda tu cita</a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white/10 bg-transparent"
            asChild
          >
            <a href="#cuando-buscar-ayuda">Conoce más</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
