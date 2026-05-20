export const NAV_LINKS = [
  { label: "Metodología", href: "#metodologia" },
  { label: "Pilares", href: "#pilares" },
  { label: "Sobre nosotros", href: "#sobre-nosotros" },
] as const;

export const METHODOLOGY_CARDS = [
  {
    title: "Evaluación Adaptativa",
    description:
      "El test ajusta la dificultad de los ejercicios conforme avanzás.",
    icon: "chart",
  },
  {
    title: "Aprendizaje Contextual",
    description:
      "Contenido adaptado a tus intereses para mayor retención.",
    icon: "bookmark",
  },
  {
    title: "Evaluación Precisa",
    description:
      "Test basado en el Marco Común Europeo de Referencia (MCER).",
    icon: "academic",
  },
] as const;

export const SESSION_KEY = "oid-mortales-test-results";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://oid-mortales.vercel.app";

export const COMPARISON_INTERVAL_MS = 5000;
