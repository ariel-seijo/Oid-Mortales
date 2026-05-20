# Oíd Mortales

> Dos herramientas clave para todo ciudadano argentino: **INGLÉS** e **HISTORIA**, al alcance de todos, al mismo tiempo y en un solo lugar.

**Oíd Mortales** es una plataforma de evaluación de nivel de inglés alineada al Marco Común Europeo de Referencia (MCER). A diferencia de los tests tradicionales, todos los ejercicios giran en torno a la **Revolución de Mayo de 1810** y sus protagonistas: Manuel Belgrano, Mariano Moreno, Cornelio Saavedra y los miembros de la Primera Junta.

El **objetivo** es claro: cambiar la manera en la que se enseña el idioma.

Los métodos **tradicionales** y las plataformas de aprendizaje más famosas llevan a cabo el mismo proceso: enseñar mediante ejemplos genéricos que al final del día, no aportan ningún valor.

**¿Qué pasaría si los ejemplos se utilizaran para agregar un valor al aprendizaje?**

¿Y si se pudiera aprender inglés y, al mismo tiempo, algo extra?

Este proyecto tiene como objetivo a futuro que los usuarios puedan elegir una temática de su interés para potenciar su aprendizaje.

**Cuando el contenido te interesa, las cosas se aprenden solas.**

"Juan was a doctor" ---> "José de San Martín was a military leader"

"Tom is a dog" ---> "The mitochondria is the energy center of the cell"

La diferencia está en que, además de aprender inglés, te llevas un dato extra detu interés.

**Mejora la retención de información. Mejora la concentración. Aprendés 2x1. Optimizás tu tiempo.**

---

## Stack

| Categoría | Tecnología |
|---|---|
| Framework | [Next.js 16](https://nextjs.org) (App Router) |
| UI | [React 19](https://react.dev) |
| Lenguaje | TypeScript |
| Estilos | [Tailwind CSS v4](https://tailwindcss.com) |
| Animaciones | [Framer Motion](https://motion.dev) |
| Tests | [Vitest](https://vitest.dev) + Testing Library |
| Linting | ESLint 9 + `eslint-config-next` |
| Tipografías | Literata (serif) + Inter (sans) |

---

## Características

- **Test adaptativo** de 30 ejercicios distribuidos en 6 niveles (A1 → C2)
- **4 tipos de ejercicios**: opción múltiple, orden de palabras, comprensión lectora y pregunta-respuesta
- **Feedback inmediato** con explicaciones gramaticales y contextuales
- **Resultados visuales** con gráfico animado, badge de nivel MCER y desglose de habilidades
- **Diseño mobile-first** con puntos de quiebre `sm`, `md`, `lg`, `xl`
- **SEO completo**: metadata, JSON-LD, Open Graph, Twitter Card, sitemap.xml, robots.txt
- **Accesibilidad**: skip-to-content, atributos ARIA, navegación por teclado, respeta `prefers-reduced-motion`
- **Sin base de datos**: los resultados se persisten en `sessionStorage` (por sesión de navegador)

---

## Requisitos

- [Node.js 18+](https://nodejs.org)
- npm (incluido con Node.js)

---

## Instalación

```bash
# Clonar el repositorio
git clone https://github.com/ariel-seijo/Two4One.git
cd Two4One

# Instalar dependencias (ejecuta automáticamente el postinstall)
npm install
```

El script `postinstall` copia `historia.example.ts` → `historia.ts` si el archivo no existe. El contenido real de los ejercicios está gitignoreado por ser propietario.

## Variables de entorno

Copiá `.env.example` a `.env.local` y configurá la URL del sitio para producción:

```bash
cp .env.example .env.local
```

| Variable | Descripción | Default |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | URL base para canonical y sitemap | `https://oid-mortales.vercel.app` |

---

## Uso

```bash
# Desarrollo
npm run dev          # → http://localhost:3000

# Producción
npm run build
npm run start        # → http://localhost:3000
```

---

## Tests

```bash
npm test             # Ejecuta todos los tests una vez
npm run test:watch   # Modo watch
```

---

## Estructura del proyecto

```
src/
├── app/
│   ├── layout.tsx              # Layout raíz (metadata, fuentes, JSON-LD)
│   ├── page.tsx                # Landing page
│   ├── globals.css             # Tailwind + variables de tema
│   ├── robots.ts               # robots.txt dinámico
│   ├── sitemap.ts              # sitemap.xml dinámico
│   ├── _components/landing/    # Navbar, Hero, Figures, Methodology, etc.
│   └── test/
│       ├── page.tsx            # Página del test
│       ├── _components/        # Ejercicios, progress bar, tip card
│       ├── _hooks/             # use-test-engine (máquina de estados)
│       ├── _lib/               # Calculadora de resultados, banco de ejercicios
│       └── resultados/         # Página de resultados + componentes
├── components/
│   └── ui/                     # Componentes reutilizables (CTA, texto rotante, scroll-reveal)
├── hooks/                      # Hooks compartidos
└── lib/                        # Tipos, constantes, utilidades (cn, storage)
```

---

## Despliegue

La aplicación está optimizada para [Vercel](https://vercel.com). El build de producción se genera con:

```bash
npm run build
```

El `next.config.ts` incluye headers de seguridad (CSP, X-Frame-Options, Referrer-Policy, Permissions-Policy).

---
