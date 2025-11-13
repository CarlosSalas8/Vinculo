export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Itziar Ainara Salas Churo</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Psicóloga Clínica & Forense
              <br />
              Tu bienestar merece espacio
            </p>
          </div>
          <div>
            <h4 className="font-medium mb-4">Navegación</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#inicio" className="hover:text-foreground transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#sobre-mi" className="hover:text-foreground transition-colors">
                  Sobre mí
                </a>
              </li>
              <li>
                <a href="#credenciales" className="hover:text-foreground transition-colors">
                  Credenciales
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-foreground transition-colors">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-foreground transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-4">Contacto</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="tel:+593981445625" className="hover:text-foreground transition-colors">
                  098 1445 625
                </a>
              </li>
              <li>
                <a href="mailto:salasitziara@gmail.com" className="hover:text-foreground transition-colors">
                  salasitziara@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/ainarasalaspsi.cli.fo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  @ainarasalaspsi.cli.fo
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; 2025 Itziar Ainara Salas Churo - Psicóloga Clínica & Forense. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
