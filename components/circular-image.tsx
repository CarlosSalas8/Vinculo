import Image from "next/image"

export function CircularImage() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-6">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-accent shadow-2xl">
            <Image
              src="/ainara3.jpeg"
              alt="Itziar Ainara Salas Churo - Psicóloga Clínica"
              fill
              className="object-cover"
              priority
            />
          </div>
          <p className="text-xl md:text-2xl text-center text-muted-foreground italic max-w-2xl px-4">
            "El primer paso hacia el cambio es la valentía de buscar apoyo"
          </p>
        </div>
      </div>
    </section>
  )
}
