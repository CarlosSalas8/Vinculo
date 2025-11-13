# Sitio Web - Itziar Ainara Salas Churo
## Psicóloga Clínica & Forense

Sitio web profesional para servicios de psicología clínica y forense, con diseño elegante y minimalista.

## Características

- Diseño elegante con tipografía Cormorant Garamond
- Paleta de colores cálida y profesional (negro, crema, dorado)
- Secciones completas: Inicio, Sobre mí, Credenciales, Servicios y Contacto
- Totalmente responsive (móvil, tablet y desktop)
- Navegación suave entre secciones
- Optimizado para SEO

## Estructura del Sitio

### 1. Hero Section
- Mensaje principal: "Tu bienestar merece espacio"
- Botones de llamada a la acción para agendar cita

### 2. Sobre Mí
- Presentación personal con enfoque humano
- Descripción del espacio terapéutico
- Información sobre las sesiones (1 hora, libres de juicio)

### 3. Credenciales
- Formación académica completa
- Títulos y especializaciones
- Presentación visual con iconos

### 4. Servicios
Divididos en dos áreas:
- **Psicoterapia y Bienestar**: Ansiedad, depresión, estrés, duelo, relaciones, autoestima, orientación vocacional
- **Área Legal y Forense**: Peritajes, acompañamiento legal, certificados

### 5. Contacto
- Teléfono: 098 1445 625
- Email: salasitziara@gmail.com
- Instagram: @ainarasalaspsi.cli.fo
- Ubicación: Lauro Guerrero y 10 de Agosto, Edificio Neurológico Sánchez, 1er piso

## Instalación

### Opción 1: Usando shadcn CLI (Recomendado)

\`\`\`bash
npx shadcn@latest init
\`\`\`

Sigue las instrucciones y cuando te pregunte si quieres usar un proyecto existente, selecciona este directorio.

### Opción 2: Instalación Manual

1. Instala las dependencias:
\`\`\`bash
npm install
\`\`\`

2. Ejecuta el servidor de desarrollo:
\`\`\`bash
npm run dev
\`\`\`

3. Abre tu navegador en [http://localhost:3000](http://localhost:3000)

## Personalización

### Colores
Los colores están definidos en `app/globals.css`. El diseño utiliza:
- **Primary (Negro)**: `oklch(0.18 0.02 280)` - Headers, botones principales
- **Background (Crema)**: `oklch(0.99 0.005 85)` - Fondo principal
- **Accent (Dorado)**: `oklch(0.72 0.08 25)` - Elementos destacados
- **Secondary (Gris claro)**: `oklch(0.95 0.01 85)` - Fondos de tarjetas
- **Muted (Gris medio)**: `oklch(0.5 0.01 280)` - Textos secundarios

### Tipografía
- **Fuente principal**: Cormorant Garamond (elegante serif de Google Fonts)
- **Pesos disponibles**: 300, 400, 500, 600, 700
- Configurada en `app/layout.tsx`

### Contenido
Puedes editar el contenido en los siguientes archivos:
- `components/hero.tsx` - Sección hero con mensaje principal
- `components/about.tsx` - Sobre mí con descripción personal
- `components/credentials.tsx` - Formación académica
- `components/services.tsx` - Servicios de psicoterapia y forense
- `components/contact.tsx` - Información de contacto
- `components/footer.tsx` - Footer con navegación

### Imágenes
Las imágenes actualmente usan placeholders generados. Para agregar imágenes reales:

1. **Foto profesional** (components/about.tsx):
   - Reemplaza el src en la línea con la imagen de perfil
   - Tamaño recomendado: 600x800px

2. **Imagen hero** (components/hero.tsx):
   - Reemplaza el src con una imagen del espacio terapéutico
   - Tamaño recomendado: 1920x1080px

Ejemplo:
\`\`\`tsx
<img 
  src="/images/foto-perfil.jpg" 
  alt="Itziar Ainara Salas Churo" 
  className="w-full h-auto rounded-lg shadow-lg"
/>
\`\`\`

## Estructura del proyecto

\`\`\`
.
├── app/
│   ├── layout.tsx              # Layout principal con metadata
│   ├── page.tsx                # Homepage con todas las secciones
│   └── globals.css             # Estilos globales y design tokens
├── components/
│   ├── header.tsx              # Header con navegación
│   ├── hero.tsx                # Sección hero
│   ├── about.tsx               # Sobre mí
│   ├── credentials.tsx         # Credenciales académicas
│   ├── services.tsx            # Servicios
│   ├── contact.tsx             # Contacto
│   ├── footer.tsx              # Footer
│   └── ui/                     # Componentes shadcn/ui
├── lib/
│   └── utils.ts                # Funciones de utilidad
└── public/
    └── images/                 # Carpeta para tus imágenes
\`\`\`

## Scripts disponibles

\`\`\`bash
npm run dev      # Desarrollo en localhost:3000
npm run build    # Compilar para producción
npm run start    # Ejecutar en modo producción
npm run lint     # Verificar código
\`\`\`

## Desplegar en Vercel

### Opción 1: Desde v0
1. Haz clic en el botón "Publish" en la parte superior
2. Conecta tu cuenta de GitHub si es necesario
3. El proyecto se desplegará automáticamente

### Opción 2: Manualmente
1. Sube tu código a GitHub
2. Ve a [vercel.com](https://vercel.com)
3. Click en "Import Project"
4. Selecciona tu repositorio
5. Vercel detectará automáticamente Next.js
6. Click en "Deploy"

Tu sitio estará en línea en minutos con un dominio como `tu-proyecto.vercel.app`

## Compartir con otro desarrollador

### Instrucciones para el desarrollador que recibe el proyecto:

1. **Clonar el repositorio:**
   \`\`\`bash
   git clone [URL_DEL_REPOSITORIO]
   cd [NOMBRE_DEL_PROYECTO]
   \`\`\`

2. **Instalar dependencias:**
   \`\`\`bash
   npm install
   \`\`\`

3. **Ejecutar el proyecto:**
   \`\`\`bash
   npm run dev
   \`\`\`

4. **Abrir en el navegador:**
   `http://localhost:3000`

¡Listo! El proyecto estará funcionando completamente.

## Agregar dominio personalizado

1. Compra un dominio (GoDaddy, Namecheap, etc.)
2. En Vercel, ve a tu proyecto → Settings → Domains
3. Agrega tu dominio
4. Configura los DNS según las instrucciones de Vercel
5. Espera la propagación (puede tomar hasta 48 horas)

## Optimización SEO

El sitio incluye:
- ✅ Metadata optimizada (título, descripción)
- ✅ Estructura semántica HTML5
- ✅ Textos alternativos para imágenes
- ✅ Enlaces internos con anclas
- ✅ Responsive design
- ✅ Velocidad optimizada con Next.js

### Para mejorar aún más:
- Agrega un `sitemap.xml` en la carpeta `public/`
- Crea un `robots.txt` para crawlers
- Registra el sitio en Google Search Console
- Optimiza las imágenes (usa formato WebP)

## Tecnologías utilizadas

- **Next.js 16** - Framework React con App Router
- **React 19** - Biblioteca de interfaz de usuario
- **TypeScript** - Tipado estático
- **Tailwind CSS v4** - Framework de estilos con design tokens
- **shadcn/ui** - Componentes de UI accesibles
- **Lucide Icons** - Iconos modernos y ligeros
- **Cormorant Garamond** - Tipografía elegante de Google Fonts

## Soporte

Si tienes problemas técnicos:
- Abre un ticket en [vercel.com/help](https://vercel.com/help)
- Revisa la documentación de Next.js: [nextjs.org/docs](https://nextjs.org/docs)

## Licencia

MIT

---

**Desarrollado con cuidado para acompañar tu práctica profesional** ❤️
