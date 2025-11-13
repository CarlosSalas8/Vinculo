"use client"

import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useState } from "react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-6">
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
          <Link href="/" className="text-2xl font-semibold tracking-tight">
            Itziar Ainara Salas
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="text-sm hover:text-accent transition-colors">
              Inicio
            </Link>
            <Link href="/sobre-mi" className="text-sm hover:text-accent transition-colors">
              Sobre mí
            </Link>
            <Link href="/credenciales" className="text-sm hover:text-accent transition-colors">
              Credenciales
            </Link>
            <Link href="/servicios" className="text-sm hover:text-accent transition-colors">
              Servicios
            </Link>
            <Link href="/contacto" className="text-sm hover:text-accent transition-colors">
              Contacto
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <Button asChild className="hidden md:inline-flex">
            <Link href="/contacto">Agenda tu cita</Link>
          </Button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border/40 bg-background">
          <nav className="flex flex-col p-4 gap-2">
            <Link
              href="/"
              className="text-sm hover:text-accent transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Inicio
            </Link>
            <Link
              href="/sobre-mi"
              className="text-sm hover:text-accent transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Sobre mí
            </Link>
            <Link
              href="/credenciales"
              className="text-sm hover:text-accent transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Credenciales
            </Link>
            <Link
              href="/servicios"
              className="text-sm hover:text-accent transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Servicios
            </Link>
            <Link
              href="/contacto"
              className="text-sm hover:text-accent transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contacto
            </Link>
            <Button asChild className="mt-2">
              <Link href="/contacto">Agenda tu cita</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
