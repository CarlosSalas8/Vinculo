import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section 
      id="inicio" 
      className="relative h-[600px] flex items-center justify-center overflow-hidden bg-pink-50" 
    >
      <img
        src="/ImageLogo.png"
        alt="Espacio terapéutico"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/10" /> 
    </section>
  )
}