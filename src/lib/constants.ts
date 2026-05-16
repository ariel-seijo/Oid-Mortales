export const NAV_LINKS = [
  { label: "Metodología", href: "#metodologia" },
  { label: "Caminos", href: "#caminos" },
  { label: "Sobre nosotros", href: "#sobre-nosotros" },
] as const;

export const METHODOLOGY_CARDS = [
  {
    title: "Evaluación Adaptativa",
    description:
      "El test ajusta su dificultad en tiempo real según tus respuestas. Cada acierto o error redefine la siguiente pregunta para obtener una medición precisa de tu nivel de inglés.",
    icon: "chart",
  },
  {
    title: "Contenido Tematizado",
    description:
      "Cada ejercicio incorpora ejemplos del universo que elegiste: historia, anime o videojuegos. Así mantenés el interés mientras el sistema evalúa tu gramática, vocabulario y comprensión lectora.",
    icon: "bookmark",
  },
  {
    title: "Marco Académico Riguroso",
    description:
      "Nuestra evaluación está alineada con los estándares del Marco Común Europeo de Referencia (MCER). Obtenés un resultado con validez académica desde una experiencia que disfrutás.",
    icon: "academic",
  },
] as const;

export const PATH_CARDS = [
  {
    id: "historia",
    title: "Historia Argentina",
    subtitle: "Aprendé inglés a través de los procesos históricos que marcaron nuestra identidad.",
    color: "celeste",
    tags: ["Revolución de Mayo", "Inmigración", "Peronismo", "Dictadura militar", "Guerra de Malvinas"],
  },
  {
    id: "anime",
    title: "Anime y Manga",
    subtitle: "Desde clásicos del shonen hasta las obras más introspectivas del slice of life.",
    color: "green",
    tags: ["Naruto", "One Piece", "Attack on Titan", "Studio Ghibli", "Your Name"],
  },
  {
    id: "videojuegos",
    title: "Videojuegos",
    subtitle: "De Zelda a The Last of Us: narrativas interactivas que enseñan sin que te des cuenta.",
    color: "purple",
    tags: ["The Legend of Zelda", "Final Fantasy", "The Last of Us", "Elden Ring", "Undertale"],
  },
] as const;

export interface PathCard {
  id: string;
  title: string;
  subtitle: string;
  color: string;
  tags: readonly string[];
}
