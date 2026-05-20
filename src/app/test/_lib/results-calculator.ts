import type { Difficulty, ExerciseType } from "@/lib/types";

export interface AnswerRecord {
  exerciseId: string;
  difficulty: Difficulty;
  type: ExerciseType;
  grammarTopic: string;
  correct: boolean;
}

export interface CEFRLevelDetails {
  overall: string;
  listening: string;
  reading: string;
  speaking: string;
  writing: string;
}

export interface CEFRResult {
  level: Difficulty;
  description: CEFRLevelDetails;
  isExact: boolean;
}

export interface TestResults {
  totalCorrect: number;
  totalQuestions: number;
  overallPercentage: number;
  cefrLevel: CEFRResult;
}

const DIFFICULTY_ORDER: Difficulty[] = ["A1", "A2", "B1", "B2", "C1", "C2"];

const CEFR_DESCRIPTIONS: Record<Difficulty, CEFRLevelDetails> = {
  A1: {
    overall:
      "Tenés un dominio básico del inglés. Podés comunicarte en situaciones cotidianas muy concretas usando frases simples y aprendidas de memoria. Tu repertorio se limita a necesidades inmediatas: presentarte, pedir información personal básica y entender instrucciones muy lentas y claras.",
    listening:
      "Reconocés palabras familiares y frases muy básicas sobre vos mismo, tu familia y tu entorno inmediato cuando las personas hablan despacio y con claridad. Podés seguir indicaciones muy simples si van acompañadas de gestos.",
    reading:
      "Comprendés palabras, nombres conocidos y frases muy sencillas en avisos, carteles y catálogos. Podés leer textos muy breves, una frase por vez, releyendo cuando es necesario.",
    speaking:
      "Podés interactuar de forma sencilla si la otra persona está dispuesta a repetir o reformular. Usás frases simples para describir dónde vivís y a las personas que conocés. Podés hacer y responder preguntas sobre datos personales.",
    writing:
      "Escribís frases y oraciones simples y aisladas. Podés completar formularios con datos personales y escribir postales cortas con saludos y mensajes básicos.",
  },
  A2: {
    overall:
      "Contás con un nivel elemental que te permite desenvolver en tareas cotidianas simples. Podés intercambiar información directa sobre temas rutinarios (compras, trabajo, tu entorno) y describir aspectos de tu vida con estructuras sencillas.",
    listening:
      "Comprendés frases y vocabulario frecuente sobre temas de relevancia personal inmediata. Captás la idea principal de mensajes y anuncios breves, claros y sencillos.",
    reading:
      "Leés textos muy breves y sencillos. Encontrás información específica y predecible en materiales cotidianos como menús, anuncios clasificados, folletos y horarios. Podés entender cartas personales cortas.",
    speaking:
      "Te comunicás en tareas simples y rutinarias que requieren un intercambio directo. Podés manejar intercambios sociales muy breves y describir con frases encadenadas tu entorno, tu formación y tu actividad actual.",
    writing:
      "Redactás notas y mensajes cortos. Podés escribir una carta personal muy sencilla, por ejemplo para agradecer algo, usando conectores básicos.",
  },
  B1: {
    overall:
      "Estás en un nivel intermedio. Podés comprender los puntos principales de textos y conversaciones claras sobre temas conocidos, desenvolverte en la mayoría de las situaciones de viaje y producir textos sencillos y coherentes sobre temas familiares o de interés personal.",
    listening:
      "Entendés las ideas principales de un discurso claro en lengua estándar sobre temas cotidianos. Comprendés la esencia de programas de radio o televisión sobre actualidad o interés personal si la dicción es relativamente pausada.",
    reading:
      "Comprendés textos redactados en un lenguaje habitual, ya sea sobre el trabajo o la vida diaria. Entendés descripciones de acontecimientos, sentimientos y deseos en cartas personales y artículos periodísticos sencillos.",
    speaking:
      "Podés enfrentar la mayoría de las situaciones que surgen durante un viaje en una zona de habla inglesa. Participás espontáneamente en conversaciones sobre temas familiares, expresás experiencias y ambiciones, y justificás brevemente tus opiniones y planes.",
    writing:
      "Escribís textos sencillos y cohesionados sobre temas conocidos o de interés personal. Podés redactar cartas que describan experiencias e impresiones, y conectar oraciones con enlaces básicos.",
  },
  B2: {
    overall:
      "Tu nivel es intermedio alto. Podés entender las ideas principales de textos complejos, incluso técnicos si son de tu especialidad. Te relacionás con hablantes nativos con un grado suficiente de fluidez y naturalidad, y producís textos claros y detallados defendiendo puntos de vista.",
    listening:
      "Comprendés discursos y conferencias extensas e incluso seguís líneas argumentales complejas si el tema te resulta razonablemente conocido. Entendés la mayoría de noticieros y programas de actualidad en TV, y la mayoría de las películas en lengua estándar.",
    reading:
      "Leés artículos e informes sobre problemas contemporáneos en los que los autores adoptan posturas o puntos de vista concretos. Comprendés prosa literaria contemporánea y textos argumentativos.",
    speaking:
      "Interactuás con un grado de fluidez y espontaneidad que hace posible la comunicación normal con hablantes nativos. Participás activamente en debates, defendiendo tus puntos de vista con argumentos sólidos. Presentás descripciones claras y detalladas sobre una amplia gama de temas.",
    writing:
      "Escribís textos claros y detallados sobre una variedad de temas. Redactás ensayos o informes transmitiendo información y proponiendo argumentos a favor o en contra. Destacás la relevancia personal de hechos y experiencias.",
  },
  C1: {
    overall:
      "Poseés un nivel avanzado. Comprendés textos largos y exigentes, y reconocés sentidos implícitos. Te expresás de forma fluida y espontánea sin buscar expresiones de manera evidente. Usás el idioma con flexibilidad y eficacia para fines sociales, académicos y profesionales.",
    listening:
      "Comprendés discursos extensos incluso cuando no están estructurados con claridad y las relaciones entre ideas están solo implícitas. Entendés programas de televisión y películas sin mucho esfuerzo, captando matices y registros.",
    reading:
      "Leés textos factuales y literarios largos y complejos, apreciando distinciones de estilo. Comprendés artículos especializados e instrucciones técnicas extensas, incluso cuando no se relacionan con tu campo.",
    speaking:
      "Te expresás con fluidez y espontaneidad, utilizando el idioma con flexibilidad y eficacia para propósitos sociales y profesionales. Formulás ideas y opiniones con precisión y relacionás tus intervenciones hábilmente con las de otros hablantes.",
    writing:
      "Producís textos claros, bien estructurados y detallados sobre temas complejos. Subrayás las cuestiones relevantes, desarrollás puntos de vista con argumentos extensos, y cerrás con una conclusión apropiada. Dominás los mecanismos de cohesión.",
  },
  C2: {
    overall:
      "Tenés un dominio competente del inglés, cercano al de un hablante nativo culto. Comprendés con facilidad prácticamente todo lo que leés o escuchás. Resumís información de diversas fuentes, reconstruyendo argumentos de forma coherente. Te expresás espontáneamente con gran fluidez y precisión, incluso en situaciones complejas.",
    listening:
      "Comprendés cualquier tipo de lengua hablada, tanto en conversaciones en vivo como en emisiones, independientemente de la velocidad. Solo necesitás un breve período de familiarización con el acento.",
    reading:
      "Leés con facilidad prácticamente todas las formas de lengua escrita, incluyendo textos abstractos, estructural o lingüísticamente complejos, como manuales, artículos especializados y obras literarias.",
    speaking:
      "Participás sin esfuerzo en cualquier conversación o debate, con buen dominio de expresiones idiomáticas y coloquialismos. Te expresás fluidamente y transmitís matices sutiles de significado con precisión. Si encontrás una dificultad, la sorteás y reestructurás tu discurso sin que los demás lo noten.",
    writing:
      "Escribís textos claros y de estilo fluido en el formato apropiado para cada ocasión. Redactás cartas, informes o artículos complejos que presentan argumentos con una estructura lógica y eficaz. Escribís resúmenes y reseñas de obras profesionales o literarias.",
  },
};

export const POINTS_PER_QUESTION = 10;

function determineLevelFromPoints(totalCorrect: number): CEFRResult {
  let level: Difficulty;
  if (totalCorrect <= 7) level = "A1";
  else if (totalCorrect <= 12) level = "A2";
  else if (totalCorrect <= 17) level = "B1";
  else if (totalCorrect <= 22) level = "B2";
  else if (totalCorrect <= 27) level = "C1";
  else level = "C2";

  return {
    level,
    description: CEFR_DESCRIPTIONS[level],
    isExact: true,
  };
}

export function calculateResults(answers: AnswerRecord[]): TestResults {
  const totalCorrect = answers.filter((a) => a.correct).length;
  const totalQuestions = answers.length;
  const overallPercentage =
    totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0;

  const cefrLevel = determineLevelFromPoints(totalCorrect);

  return {
    totalCorrect,
    totalQuestions,
    overallPercentage,
    cefrLevel,
  };
}

export { CEFR_DESCRIPTIONS, DIFFICULTY_ORDER };
