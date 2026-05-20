import type { Exercise } from "@/lib/types";

export const historiaExercises: Exercise[] = [
  // =====================================================================
  // A1 — Verb to be (past), Present Simple, Articles, Wh-questions
  // =====================================================================
  {
    id: "pr-a1-mc-1",
    type: "multiple-choice",
    difficulty: "A1",
    topic: "Belgrano",
    grammarTopic: "Verb to be (past)",
    instruction: "Selecciona la conjugación correcta:",
    sentence: "Manuel Belgrano ___ born in Buenos Aires in 1770.",
    translation: "Manuel Belgrano nació en Buenos Aires en 1770.",
    options: ["are", "is", "was", "were"],
    correctIndex: 2,
    tip: {
      title: "Past Simple of 'to be'",
      explanation:
        "Use 'was' for singular subjects in the past. 'Manuel Belgrano' is one person, and 1770 is in the past.",
      titleEs: "Pasado simple del verbo \"to be\"",
      explanationEs:
        "Usá \"was\" para sujetos singulares en pasado. \"Manuel Belgrano\" es una persona, y 1770 está en el pasado.",
    },
  },
  {
    id: "pr-a1-wo-1",
    type: "word-order",
    difficulty: "A1",
    topic: "Primera Junta",
    grammarTopic: "Basic sentence structure (SVO)",
    instruction: "Ordena las palabras para formar una oración correcta:",
    shuffledWords: ["formed", "Junta", "in", "the", "was", "1810", "Primera"],
    correctOrder: ["the", "Primera", "Junta", "was", "formed", "in", "1810"],
    spanishTranslation: "La Primera Junta se formó en 1810.",
    tip: {
      title: "Subject + Verb + Time",
      explanation:
        "The subject goes first, then the verb, then time expressions at the end.",
      titleEs: "Sujeto + Verbo + Tiempo",
      explanationEs:
        "El sujeto va primero, luego el verbo, y las expresiones de tiempo al final.",
    },
  },
  {
    id: "pr-a1-mc-2",
    type: "multiple-choice",
    difficulty: "A1",
    topic: "Moreno",
    grammarTopic: "Present Simple",
    instruction: "Selecciona la conjugación correcta:",
    sentence:
      "Historians ___ Mariano Moreno as a key figure of the May Revolution.",
    translation:
      "Los historiadores reconocen a Mariano Moreno como una figura clave de la Revolución de Mayo.",
    options: ["recognize", "recognizes", "recognized", "recognizing"],
    correctIndex: 0,
    tip: {
      title: "Present Simple — Plural Subjects",
      explanation:
        "'Historians' is plural, so use the base form 'recognize' without -s. The -s is only for singular third person subjects.",
      titleEs: "Presente simple — sujetos plurales",
      explanationEs:
        "\"Historians\" es plural, así que usá la forma base \"recognize\" sin -s. La -s es solo para sujetos en tercera persona singular.",
    },
  },
  {
    id: "pr-a1-wo-2",
    type: "word-order",
    difficulty: "A1",
    topic: "Belgrano",
    grammarTopic: "Articles (a/an/the)",
    instruction: "Ordena las palabras para formar una oración correcta:",
    shuffledWords: ["flag", "for", "created", "army", "the", "Belgrano", "a"],
    correctOrder: ["Belgrano", "created", "a", "flag", "for", "the", "army"],
    spanishTranslation: "Belgrano creó una bandera para el ejército.",
    tip: {
      title: "Articles — 'a' vs. 'the'",
      explanation:
        "Use 'a' for non-specific things (a flag — any flag) and 'the' for specific things (the army — a specific army).",
      titleEs: "Artículos — \"a\" vs. \"the\"",
      explanationEs:
        "Usá \"a\" para cosas no específicas (a flag — una bandera cualquiera) y \"the\" para cosas específicas (the army — un ejército específico).",
    },
  },
  {
    id: "pr-a1-qa-1",
    type: "question-answer",
    variant: "find-question",
    difficulty: "A1",
    topic: "Primera Junta",
    grammarTopic: "Wh- questions with 'when'",
    instruction: "Elige la pregunta que mejor corresponde a esta respuesta:",
    prompt: "The Primera Junta was formed on May 25, 1810.",
    translation: "La Primera Junta se formó el 25 de mayo de 1810.",
    options: [
      "Who formed the Primera Junta?",
      "When was the Primera Junta formed?",
      "What was the Primera Junta?",
      "Where was the Primera Junta formed?",
    ],
    correctIndex: 1,
    tip: {
      title: "Question Words — 'When' for Time",
      explanation:
        "Use 'When' to ask about dates, times, or years. The answer mentions a specific date ('May 25, 1810'), so 'When' is the correct question word.",
      titleEs: "Palabras de pregunta — \"When\" para tiempo",
      explanationEs:
        "Usá \"When\" para preguntar por fechas, horas o años. La respuesta menciona una fecha específica, por lo que \"When\" es la correcta.",
    },
  },

  // =====================================================================
  // A2 — Comparatives, Modals (past ability), Past Plans, Short Answers, Past Simple
  // =====================================================================
  {
    id: "pr-a2-wo-1",
    type: "word-order",
    difficulty: "A2",
    topic: "Moreno",
    grammarTopic: "Comparatives",
    instruction: "Ordena las palabras para formar una oración correcta:",
    shuffledWords: ["than", "radical", "Saavedra", "more", "was", "Moreno"],
    correctOrder: ["Moreno", "was", "more", "radical", "than", "Saavedra"],
    spanishTranslation: "Moreno era más radical que Saavedra.",
    tip: {
      title: "Comparatives with 'more'",
      explanation:
        "For long adjectives like 'radical', use 'more + adjective + than' to compare. Short adjectives use '-er' (bigger than).",
      titleEs: "Comparativos con \"more\"",
      explanationEs:
        "Para adjetivos largos como \"radical\", usá \"more + adjetivo + than\". Los cortos usan \"-er\" (bigger than).",
    },
  },
  {
    id: "pr-a2-mc-1",
    type: "multiple-choice",
    difficulty: "A2",
    topic: "Primera Junta",
    grammarTopic: "Can / Could",
    instruction: "Selecciona la conjugación correcta:",
    sentence:
      "The Primera Junta ___ open the ports to free trade, which transformed the economy.",
    translation:
      "La Primera Junta pudo abrir los puertos al libre comercio, lo que transformó la economía.",
    options: ["can", "canned", "was", "could"],
    correctIndex: 3,
    tip: {
      title: "'Could' for Past Ability",
      explanation:
        "Use 'could' to express ability in the past. 'Can' is for present ability. 'Was' requires 'able to' before a verb.",
      titleEs: "\"Could\" para habilidad pasada",
      explanationEs:
        "Usá \"could\" para expresar habilidad en el pasado. \"Can\" es para el presente. \"Was\" requeriría \"able to\" para acompañar al verbo.",
    },
  },
  {
    id: "pr-a2-wo-2",
    type: "word-order",
    difficulty: "A2",
    topic: "Revolución de Mayo",
    grammarTopic: "Going to (future plans)",
    instruction: "Ordena las palabras para formar una oración correcta:",
    shuffledWords: [
      "going",
      "form",
      "government",
      "were",
      "patriots",
      "a",
      "to",
      "the",
      "new",
    ],
    correctOrder: [
      "the",
      "patriots",
      "were",
      "going",
      "to",
      "form",
      "a",
      "new",
      "government",
    ],
    spanishTranslation: "Los patriotas iban a formar un nuevo gobierno.",
    tip: {
      title: "'Going to' for Past Intentions",
      explanation:
        "'Were going to' expresses a plan or intention in the past. The structure is: subject + was/were + going to + base verb.",
      titleEs: "\"Going to\" para intenciones pasadas",
      explanationEs:
        "\"Were going to\" expresa un plan o intención en el pasado. La estructura es: sujeto + was/were + going to + verbo base.",
    },
  },
  {
    id: "pr-a2-qa-1",
    type: "question-answer",
    variant: "find-answer",
    difficulty: "A2",
    topic: "Moreno",
    grammarTopic: "Short answers in past tense",
    instruction: "Elige la mejor respuesta para esta pregunta:",
    prompt: "Did Moreno create the first public library in Buenos Aires?",
    translation:
      "¿Moreno creó la primera biblioteca pública en Buenos Aires?",
    options: [
      "Yes, he does.",
      "Yes, he did.",
      "Yes, he was.",
      "Yes, he is.",
    ],
    correctIndex: 1,
    tip: {
      title: "Short Answers with 'Did'",
      explanation:
        "When a question starts with 'Did' (Past Simple), the short positive answer always repeats the auxiliary: 'Yes, + subject pronoun + did'.",
      titleEs: "Respuestas cortas con \"Did\"",
      explanationEs:
        "Cuando una pregunta empieza con \"Did\" (Pasado Simple), la respuesta corta afirmativa siempre repite el auxiliar: \"Yes, + pronombre + did\".",
    },
  },
  {
    id: "pr-a2-mc-2",
    type: "multiple-choice",
    difficulty: "A2",
    topic: "Belgrano",
    grammarTopic: "Past Simple Regular vs Irregular",
    instruction: "Selecciona la conjugación correcta:",
    sentence:
      "Belgrano ___ law in Spain before returning to South America.",
    translation:
      "Belgrano estudió derecho en España antes de regresar a Sudamérica.",
    options: ["study", "studies", "studied", "studying"],
    correctIndex: 2,
    tip: {
      title: "Past Simple Regular Verbs",
      explanation:
        "For regular verbs ending in 'y' after a consonant (like study), change 'y' to 'i' and add '-ed' for the past simple.",
      titleEs: "Pasado simple de verbos regulares",
      explanationEs:
        "Para veros regulares que terminan en 'y' después de una consonante (como study), se cambia la 'y' por 'i' y se agrega '-ed' para el pasado simple.",
    },
  },

  // =====================================================================
  // B1 — Present Perfect, Passive (Past), Conditionals (1st), Past Continuous, Connectors
  // =====================================================================
  {
    id: "pr-b1-rc-1",
    type: "reading-comprehension",
    difficulty: "B1",
    topic: "Belgrano",
    grammarTopic: "Reason and Result (so... that)",
    instruction: "Lee el texto y responde:",
    passage:
      "In February 1812, Belgrano was stationed in Rosario to defend the Paraná River. His soldiers had no common symbol, so he designed a light blue and white flag using the colors of the national cockade. He raised it on February 27. The government in Buenos Aires, however, was so worried about diplomatic consequences with Spain that they ordered him to hide it. They were pretending loyalty to the imprisoned Spanish king, and the flag exposed their true intentions. Belgrano obeyed but saved the flag for a future victory.",
    translation:
      "En febrero de 1812, Belgrano estaba en Rosario defendiendo el río Paraná. Sus soldados no tenían un símbolo común, así que diseñó una bandera celeste y blanca con los colores de la escarapela nacional. La izó el 27 de febrero. El gobierno de Buenos Aires, sin embargo, estaba tan preocupado por las consecuencias diplomáticas con España que le ordenó ocultarla. Fingían lealtad al rey español prisionero, y la bandera exponía sus verdaderas intenciones. Belgrano obedeció pero guardó la bandera para una victoria futura.",
    questionText:
      "According to the passage, what was the direct result of the government being 'so worried'?",
    options: [
      "They asked Belgrano to design a completely different flag using safer colors.",
      "They ordered Belgrano to hide the newly created flag from public view.",
      "They sent immediate military reinforcements to protect the Paraná River.",
      "They decided to declare absolute independence from Spain immediately.",
    ],
    correctIndex: 1,
    tip: {
      title: "Connecting Cause and Result",
      explanation:
        "The structure 'so + adjective + that' links an extreme intense feeling (so worried) with its direct consequence (that they ordered him to hide it).",
      titleEs: "Conectando causa y resultado",
      explanationEs:
        "La estructura 'so + adjetivo + that' une un sentimiento extremo e intenso (so worried) con su consecuencia directa (that they ordered him to hide it).",
    },
  },
  {
    id: "pr-b1-mc-1",
    type: "multiple-choice",
    difficulty: "B1",
    topic: "Primera Junta",
    grammarTopic: "Present Perfect",
    instruction: "Selecciona la conjugación correcta:",
    sentence:
      "The ideas of the Primera Junta ___ Argentine politics for more than two centuries.",
    translation:
      "Las ideas de la Primera Junta han influido en la política argentina por más de dos siglos.",
    options: ["influence", "influenced", "have influenced", "are influencing"],
    correctIndex: 2,
    tip: {
      title: "Present Perfect — Ongoing Impact",
      explanation:
        "Use present perfect (have + past participle) when a past action continues to have effects in the present. The Junta's ideas still influence politics today.",
      titleEs: "Presente perfecto — impacto continuo",
      explanationEs:
        "Usá presente perfecto (have + participio) cuando una acción pasada sigue teniendo efectos en el presente.",
    },
  },
  {
    id: "pr-b1-wo-1",
    type: "word-order",
    difficulty: "B1",
    topic: "Belgrano",
    grammarTopic: "First Conditional",
    instruction: "Ordena las palabras para formar una oración correcta:",
    shuffledWords: [
      "understand",
      "life",
      "you",
      "will",
      "study",
      "the",
      "if",
      "Belgrano's",
      "you",
      "revolution",
    ],
    correctOrder: [
      "if",
      "you",
      "study",
      "Belgrano's",
      "life",
      "you",
      "will",
      "understand",
      "the",
      "revolution",
    ],
    spanishTranslation:
      "Si estudias la vida de Belgrano, entenderás la revolución.",
    tip: {
      title: "First Conditional",
      explanation:
        "Structure: If + present simple, will + base verb. This expresses a real possibility and its likely result.",
      titleEs: "Primer condicional",
      explanationEs:
        "Estructura: If + presente simple, will + verbo base. Expresa una posibilidad real y su resultado probable.",
    },
  },
  {
    id: "pr-b1-mc-2",
    type: "multiple-choice",
    difficulty: "B1",
    topic: "Belgrano",
    grammarTopic: "Passive Voice",
    instruction: "Selecciona la conjugación correcta:",
    sentence:
      "The Argentine flag ___ for the first time on February 27, 1812, during the wars of independence.",
    translation:
      "La bandera argentina fue izada por primera vez el 27 de febrero de 1812, durante las guerras de independencia.",
    options: ["raised", "was raised", "did raise", "has raised"],
    correctIndex: 1,
    tip: {
      title: "Passive Voice — Past Simple",
      explanation:
        "Use passive voice (was/were + past participle) when the focus is on what happened to the subject. The flag didn't raise itself — it was raised.",
      titleEs: "Voz pasiva — pasado simple",
      explanationEs:
        "Usá voz pasiva (was + participio) cuando el foco está en lo que le pasó al sujeto. La bandera no se izó sola — fue izada.",
    },
  },
  {
    id: "pr-b1-wo-2",
    type: "word-order",
    difficulty: "B1",
    topic: "Moreno",
    grammarTopic: "Past Continuous",
    instruction: "Ordena las palabras para formar una oración correcta:",
    shuffledWords: [
      "writing",
      "when",
      "the",
      "conflict",
      "Moreno",
      "reforms",
      "began",
      "with",
      "was",
      "Saavedra",
      "new",
    ],
    correctOrder: [
      "Moreno",
      "was",
      "writing",
      "new",
      "reforms",
      "when",
      "the",
      "conflict",
      "with",
      "Saavedra",
      "began",
    ],
    spanishTranslation:
      "Moreno estaba redactando nuevas reformas cuando comenzó el conflicto con Saavedra.",
    tip: {
      title: "Past Continuous + Past Simple",
      explanation:
        "Use past continuous (was writing) for an ongoing action interrupted by a past simple event (began). 'When' connects the two.",
      titleEs: "Pasado continuo + pasado simple",
      explanationEs:
        "Usá pasado continuo (was writing) para una acción en curso interrumpida por un evento en pasado simple (began). \"When\" conecta ambos.",
    },
  },

  // =====================================================================
  // B2 — Wish (past regrets), Modals of Deduction, Passive Report, Conditionals (3rd)
  // =====================================================================
  {
    id: "pr-b2-rc-1",
    type: "reading-comprehension",
    difficulty: "B2",
    topic: "Moreno",
    grammarTopic: "Narrative Sequencing and Contextual Inference",
    instruction: "Lee el texto y responde:",
    passage:
      "Moreno's time in power was brief but intense. In December 1810, after losing an internal struggle against Saavedra's more conservative faction, he resigned from the Primera Junta. He accepted a diplomatic mission to London and set sail in January 1811. He never arrived. On March 4, 1811, Moreno died at sea under mysterious circumstances. His body was wrapped in a British flag and thrown into the ocean. Some historians believe he was poisoned — perhaps with arsenic. When news of his death reached Buenos Aires, Saavedra reportedly said that so much water had been needed to put out so much fire. Moreno was only 32 years old.",
    translation:
      "El tiempo de Moreno en el poder fue breve pero intenso. En diciembre de 1810, tras perder una lucha interna contra la facción más conservadora de Saavedra, renunció a la Primera Junta. Aceptó una misión diplomática a Londres y zarpó en enero de 1811. Nunca llegó. El 4 de marzo de 1811, Moreno murió en el mar en circunstancias misteriosas. Su cuerpo fue envuelto en una bandera británica y arrojado al océano. Algunos historiadores creen que fue envenenado — quizás con arsénico. Cuando la noticia llegó a Buenos Aires, se dice que Saavedra comentó que se necesitó tanta agua para apagar tanto fuego. Moreno tenía solo 32 años.",
    questionText: "How does the passage describe Moreno's final months?",
    options: [
      "They were calm and politically successful",
      "They were marked by conflict and uncertainty",
      "They were mostly focused on military victories",
      "They were spent rebuilding support inside the Junta",
    ],
    correctIndex: 1,
    tip: {
      title: "Understanding Tone and Context",
      explanation:
        "The passage describes political conflict, resignation, a dangerous journey, and a mysterious death. These details create a sense of tension and uncertainty.",
      titleEs: "Comprender tono y contexto",
      explanationEs:
        "El texto describe conflicto político, renuncia, un viaje peligroso y una muerte misteriosa. Estos detalles crean una sensación de tensión e incertidumbre.",
    },
  },
  {
    id: "pr-b2-qa-1",
    type: "question-answer",
    variant: "find-answer",
    difficulty: "B2",
    topic: "Belgrano",
    grammarTopic: "Expressing opinions with evidence",
    instruction: "Elige la mejor respuesta para esta pregunta:",
    prompt:
      "In your opinion, what was Belgrano's greatest contribution to Argentina's independence?",
    translation:
      "En tu opinión, ¿cuál fue la mayor contribución de Belgrano a la independencia argentina?",
    options: [
      "He was promoted to general without military training and later led the heroic Exodus of Jujuy.",
      "In my view, his military victories in the north were crucial since they successfully stopped the royalist counter-offensive.",
      "I believe creating the national flag in 1812 was important, and he also studied law in Europe.",
      "He traveled on a difficult diplomatic mission to Europe, although the Spanish army was still a threat.",
    ],
    correctIndex: 1,
    tip: {
      title: "Expressing Opinions with Evidence",
      explanation:
        "While all options state true historical facts, only the correct one clearly introduces an opinion ('In my view...') and fully backs it up with a logical cause-and-effect argument using 'since'.",
      titleEs: "Expresar opiniones con evidencia",
      explanationEs:
        "Aunque todas las opciones mencionan hechos históricos reales, solo la correcta introduce claramente una opinión ('In my view...') y la respalda completamente con un argumento lógico de causa y efecto usando 'since'.",
    },
  },
  {
    id: "pr-b2-mc-1",
    type: "multiple-choice",
    difficulty: "B2",
    topic: "Belgrano",
    grammarTopic: "Wish / If only",
    instruction: "Selecciona la conjugación correcta:",
    sentence:
      "Many people wish Belgrano ___ lived to see the country he helped create united and at peace.",
    translation:
      "Muchos desearían que Belgrano hubiera vivido para ver unido y en paz el país que ayudó a crear.",
    options: ["has", "had", "would", "did"],
    correctIndex: 1,
    tip: {
      title: "'Wish' for Past Regrets",
      explanation:
        "To express a regret about a past situation, 'wish' is followed by the Past Perfect (subject + had + past participle), regardless of who is expressing the wish.",
      titleEs: "'Wish' para arrepentimientos del pasado",
      explanationEs:
        "Para expresar arrepentimiento sobre una situación del pasado, 'wish' se acompaña del pasado perfecto (sujeto + had + participio), sin importar quién exprese el deseo.",
    },
  },
  {
    id: "pr-b2-wo-1",
    type: "word-order",
    difficulty: "B2",
    topic: "Primera Junta",
    grammarTopic: "Passive Voice with Reporting Verbs",
    instruction:
      "Ordena las palabras para formar una oración con estructura pasiva avanzada:",
    shuffledWords: [
      "Saavedra",
      "is",
      "said",
      "to",
      "have",
      "opposed",
      "Moreno's",
      "radical",
      "reforms",
    ],
    correctOrder: [
      "Saavedra",
      "is",
      "said",
      "to",
      "have",
      "opposed",
      "Moreno's",
      "radical",
      "reforms",
    ],
    spanishTranslation:
      "Se dice que Saavedra se opuso a las reformas radicales de Moreno.",
    tip: {
      title: "Passive Report Structures",
      explanation:
        "Structure: Subject + passive verb (is said) + perfect infinitive (to have opposed). This B2 structure is used to report past rumors or historical assumptions neutrally.",
      titleEs: "Estructuras pasivas de reporte",
      explanationEs:
        "Estructura: Sujeto + verbo pasivo (is said) + infinitivo perfecto (to have opposed). Esta estructura de nivel B2 se usa para reportar rumores pasados o asunciones históricas de forma neutral.",
    },
  },
  {
    id: "pr-b2-mc-2",
    type: "multiple-choice",
    difficulty: "B2",
    topic: "Moreno",
    grammarTopic: "Modals of Deduction (Past)",
    instruction: "Selecciona la conjugación correcta:",
    sentence:
      "Historians suggest that Moreno ___ have been poisoned with arsenic, although there is no definitive proof.",
    translation:
      "Los historiadores sugieren que Moreno podría haber sido envenenado con arsénico, aunque no hay pruebas definitivas.",
    options: ["must", "should", "might", "ought"],
    correctIndex: 2,
    tip: {
      title: "Modals of Deduction — 'might have'",
      explanation:
        "Use 'might have + past participle' for a weak possibility in the past. 'Must have' indicates absolute certainty, which contradicts 'no definitive proof'.",
      titleEs: "Modales de deducción — \"might have\"",
      explanationEs:
        "Usá 'might have + participio' para una posibilidad débil en el pasado. 'Must have' indica certeza absoluta, lo cual contradice la frase 'no definitive proof'.",
    },
  },

  // =====================================================================
  // C1 — Author Perspective, Modal Perfect Speculation, Causatives, Connectors, Negative Inversion
  // =====================================================================
  {
    id: "pr-c1-rc-1",
    type: "reading-comprehension",
    difficulty: "C1",
    topic: "Saavedra",
    grammarTopic: "Identifying Perspective and Motivation",
    instruction: "Lee el texto y responde:",
    passage:
      "Cornelio Saavedra is often cast as the conservative antagonist of the May Revolution — the man who blocked Moreno's reforms and sent him into exile. But this framing oversimplifies a complex figure. Saavedra was a military man who had fought against the British invasions and commanded deep loyalty among the troops. As president of the Primera Junta, he argued that Buenos Aires alone could not impose revolution on the interior provinces, which were more traditional and wary of rapid change. His caution was strategic: he feared that radical measures would provoke a violent Spanish counteroffensive the fragile new government could not survive. History remembers Moreno as the visionary and Saavedra as the obstacle, but both were responding to genuine pressures that pulled the revolution in opposite directions.",
    translation:
      "Cornelio Saavedra suele ser presentado como el antagonista conservador de la Revolución de Mayo — el hombre que bloqueó las reformas de Moreno y lo envió al exilio. Pero este enfoque simplifica una figura compleja. Saavedra era un militar que había combatido contra las invasiones inglesas y tenía profunda lealtad entre las tropas. Como presidente de la Primera Junta, argumentó que Buenos Aires no podía imponer la revolución a las provincias del interior, más tradicionales y recelosas del cambio rápido. Su cautela era estratégica: temía que medidas radicales provocaran una contraofensiva española que el frágil nuevo gobierno no podría sobrevivir. La historia recuerda a Moreno como el visionario y a Saavedra como el obstáculo, pero ambos respondían a presiones genuinas.",
    questionText: "What is the author's main purpose in this passage?",
    options: [
      "To provide conclusive historical evidence that Saavedra deliberately acted to sabotage the revolution.",
      "To argue that Saavedra's pragmatic military strategy was ultimately more effective than Moreno's vision.",
      "To reframe Saavedra's actions as a calculated response to political and regional pressures rather than mere villainy.",
      "To expose mainstream historical accounts of the May Revolution as being systematically biased against Moreno.",
    ],
    correctIndex: 2,
    tip: {
      title: "Identifying Authorial Purpose",
      explanation:
        "Advanced reading requires recognizing nuance. The author uses phrases like 'complex figure' and 'genuine pressures' to shift the focus from a simple good-vs-bad dynamic to a structural, strategic analysis.",
      titleEs: "Identificando el propósito del autor",
      explanationEs:
        "La lectura en C1 requiere reconocer matices. El autor usa frases como 'complex figure' y 'genuine pressures' para cambiar el enfoque de una simple dinámica de buenos contra malos hacia un análisis estructural y estratégico.",
    },
  },
  {
    id: "pr-c1-mc-1",
    type: "multiple-choice",
    difficulty: "C1",
    topic: "Belgrano",
    grammarTopic: "Advanced Modal Perfects & Speculation",
    instruction:
      "Selecciona la opción que complete correctamente la oración según el nivel de certeza histórica expresado:",
    sentence:
      "Given the scarcity of documentation, historians argue that Belgrano ___ have anticipated the sheer scale of the civil strife that would follow the revolution.",
    translation:
      "Dada la escasez de documentación, los historiadores argumentan que Belgrano difícilmente pudo haber anticipado la verdadera magnitud de la guerra civil que seguiría a la revolución.",
    options: ["might well", "can hardly", "must surely", "should not"],
    correctIndex: 1,
    tip: {
      title: "Modal Perfects for Past Speculation",
      explanation:
        "C1 proficiency requires handling varying degrees of historical skepticism. 'Can hardly have + past participle' is an advanced structure used to express a strong belief that something in the past was highly improbable based on evidence.",
      titleEs: "Modales perfectos para especulación pasada",
      explanationEs:
        "El nivel C1 requiere manejar grados de escepticismo histórico. 'Can hardly have + participio' es una estructura avanzada para expresar la firme creencia de que algo en el pasado era altamente improbable.",
    },
  },
  {
    id: "pr-c1-wo-1",
    type: "word-order",
    difficulty: "C1",
    topic: "Belgrano",
    grammarTopic: "Advanced Causative of Experience and Misfortune",
    instruction:
      "Ordena las palabras para formar una oración cohesiva y de registro académico:",
    shuffledWords: [
      "troops",
      "their",
      "had",
      "Belgrano's",
      "decisively",
      "broken",
      "lines",
      "by",
      "royalists",
      "the",
      "at",
      "Ayohuma",
    ],
    correctOrder: [
      "Belgrano's",
      "troops",
      "had",
      "their",
      "lines",
      "decisively",
      "broken",
      "by",
      "the",
      "royalists",
      "at",
      "Ayohuma",
    ],
    spanishTranslation:
      "Las tropas de Belgrano sufrieron la ruptura decisiva de sus líneas por parte de los realistas en Ayohuma.",
    tip: {
      title: "Causative of Experiencing an Event",
      explanation:
        "In advanced English, 'have + object + past participle' can express that the subject experienced an unavoidable misfortune or an event caused by an external agent ('had their lines broken').",
      titleEs: "Causativo de experiencia o evento",
      explanationEs:
        "En inglés avanzado, 'have + objeto + participio' no solo se usa para acciones delegadas, sino también para expresar que el sujeto sufrió un evento adverso causado por un agente externo ('had their lines broken').",
    },
  },
  {
    id: "pr-c1-wo-2",
    type: "word-order",
    difficulty: "C1",
    topic: "Moreno",
    grammarTopic: "Advanced Connectors (whereas, despite)",
    instruction: "Ordena las palabras para formar una oración con contraste:",
    shuffledWords: [
      "whereas",
      "Saavedra",
      "preferred",
      "caution",
      "Moreno",
      "demanded",
      "immediate",
      "and",
      "radical",
      "reforms",
    ],
    correctOrder: [
      "whereas",
      "Saavedra",
      "preferred",
      "caution",
      "Moreno",
      "demanded",
      "immediate",
      "and",
      "radical",
      "reforms",
    ],
    spanishTranslation:
      "Mientras que Saavedra prefería la cautela, Moreno exigía reformas inmediatas y radicales.",
    tip: {
      title: "Contrast with 'Whereas'",
      explanation:
        "'Whereas' introduces a contrasting clause at the beginning of a sentence. It sets up a direct opposition between two subjects or ideas.",
      titleEs: "Contraste con \"Whereas\"",
      explanationEs:
        "\"Whereas\" introduce una cláusula de contraste al inicio. Plantea una oposición directa entre dos sujetos o ideas.",
    },
  },
  {
    id: "pr-c1-mc-2",
    type: "multiple-choice",
    difficulty: "C1",
    topic: "Primera Junta",
    grammarTopic: "Negative Inversion",
    instruction:
      "Selecciona la opción que complete correctamente la inversión formal:",
    sentence:
      "___ did the members of the Junta realize that their local rebellion would trigger a continent-wide war.",
    translation:
      "Poco se imaginaban los miembros de la Junta que su rebelión local desencadenaría una guerra en todo el continente.",
    options: ["Little", "Seldom", "Not only", "Under no circumstances"],
    correctIndex: 0,
    tip: {
      title: "Negative Inversion with 'Little'",
      explanation:
        "'Little did they realize' is a highly idiomatic C1/C2 structure meaning they completely failed to foresee the future scale. 'Seldom' represents numerical frequency and does not fit the historical meaning here.",
      titleEs: "Inversión negativa formal",
      explanationEs:
        "La estructura 'Little did + sujeto + verbo base' significa 'Casi ni se imaginaban...'. Expresa una falta total de conocimiento sobre un hecho futuro y es un clásico distractor frente a 'Seldom' en exámenes C1.",
    },
  },

  // =====================================================================
  // C2 — Rhetorical Paradox, Sophisticated Arguments, Cleft Sentences, Participle Clauses, Inverted Conditionals
  // =====================================================================
  {
    id: "pr-c2-rc-1",
    type: "reading-comprehension",
    difficulty: "C2",
    topic: "Primera Junta",
    grammarTopic: "Rhetorical Analysis — Legacy and Meaning",
    instruction: "Lee el texto y responde:",
    passage:
      "The Primera Junta lasted only seven months, yet it inaugurated a political tradition that would define Argentina. It was both a rupture and a continuity: a rupture with colonial authority, and yet a continuity of elite governance. Its members — Saavedra, Moreno, Belgrano, Castelli, Paso — were not commoners rising against aristocrats; they were the colonial elite turning against the colonial system that had produced them. In this sense, the Junta was a paradoxical revolution — one that destroyed the Spanish order while preserving the social hierarchy beneath it. But the institutions it created — a free press, a public library, an open economy — planted seeds that would outgrow the men who sowed them. Two centuries later, the tension between radical transformation and conservative preservation that fractured the Junta remains the central debate of Argentine political life.",
    translation:
      "La Primera Junta duró solo siete meses, sin embargo inauguró una tradición política que definiría a la Argentina. Fue a la vez ruptura y continuidad: ruptura con la autoridad colonial, pero continuidad del gobierno de élite. Sus miembros no eran plebeyos alzándose contra aristócratas; eran la élite colonial volviéndose contra el sistema que los había producido. En este sentido, la Junta fue una revolución paradójica — destruyó el orden español preservando la jerarquía social. Pero las instituciones que creó sembraron semillas que sobrevivirían a los hombres que las plantaron. Dos siglos después, la tensión entre transformación radical y preservación conservadora que fracturó a la Junta sigue siendo el debate central de la vida política argentina.",
    questionText:
      "What is the central rhetorical argument the author makes about the nature of the Primera Junta?",
    options: [
      "The Junta functioned as a fundamentally disruptive force whose institutional innovations entirely dismantled the underlying social hierarchies of colonial rule.",
      "The Junta embodied an inherent paradox by breaking geopolitical ties while retaining class structures, establishing an ideological friction that persists to this day.",
      "The Junta represented a superficial political transition that, despite its revolutionary rhetoric, ultimately failed to project any lasting influence onto modern statehood.",
      "The Junta served primarily as a military administrative body whose strategic successes far outweighed its short-lived institutional and socioeconomic reforms.",
    ],
    correctIndex: 1,
    tip: {
      title: "Analyzing Complex Rhetorical Arguments",
      explanation:
        "C2 reading demands tracking dualities. The author frames the Junta as a paradox (rupture vs. continuity). The correct answer synthesizes both sides of this foundational contradiction and its long-term historical resonance.",
      titleEs: "Analizando argumentos retóricos complejos",
      explanationEs:
        "La lectura en C2 exige rastrear dualidades. El autor presenta a la Junta como una paradoja (ruptura vs. continuidad). La respuesta correcta sintoniza con ambos lados de esta contradicción fundacional.",
    },
  },
  {
    id: "pr-c2-qa-1",
    type: "question-answer",
    variant: "find-answer",
    difficulty: "C2",
    topic: "Primera Junta",
    grammarTopic: "Sophisticated historical argumentation",
    instruction: "Elige la mejor respuesta para esta pregunta:",
    prompt:
      "Which of the following statements best characterizes the ideological friction between the factions led by Moreno and Saavedra within the Primera Junta?",
    translation:
      "¿Cuál de las siguientes afirmaciones caracteriza mejor la fricción ideológica entre las facciones lideradas por Moreno y Saavedra dentro de la Primera Junta?",
    options: [
      "It stemmed from a fundamental disagreement regarding whether to pursue an immediate, radical systemic overhaul or adopt a gradualist, cautious transitional approach.",
      "It arose from a purely logistical conflict over military command structures rather than any deeply ingrained philosophical divergence regarding self-governance.",
      "It was characterized by a shared desire for immediate total independence, micro-managed through conflicting economic policies regarding trade with European empires.",
      "It reflected an unyielding consensus on social hierarchy that was paradoxically undermined by their divergent views on expanding voting rights to commoners.",
    ],
    correctIndex: 0,
    tip: {
      title: "Analyzing Ideological Nuance",
      explanation:
        "C2 proficiency requires distinguishing between high-level political concepts. The correct option accurately synthesizes the core rift (radicalism vs. gradualism) using sophisticated academic phrasing ('systemic overhaul', 'gradualist transitional approach').",
      titleEs: "Analizando matices ideológicos",
      explanationEs:
        "El dominio de C2 requiere distinguir entre conceptos políticos de alto nivel. La opción correcta sintetiza con precisión la ruptura central (radicalismo vs. gradualismo) usando frases académicas sofisticadas.",
    },
  },
  {
    id: "pr-c2-mc-1",
    type: "multiple-choice",
    difficulty: "C2",
    topic: "Moreno",
    grammarTopic: "Cleft Sentences",
    instruction: "Selecciona la opción que complete correctamente la estructura de énfasis:",
    sentence:
      "___ Moreno who spearheaded the establishment of the first public library, an initiative that epitomized the Junta's progressive wing.",
    translation:
      "Fue nada menos que Moreno quien encabezó el establecimiento de la primera biblioteca pública, una iniciativa que personificó al ala progresista de la Junta.",
    options: [
      "It was none other than",
      "He happened to be",
      "There was explicitly",
      "Whom it was",
    ],
    correctIndex: 0,
    tip: {
      title: "Advanced Cleft Sentences",
      explanation:
        "An 'It-cleft' sentence introduces emphasis using 'It + be + focus + relative clause'. The idiom 'none other than' adds an elevated rhetorical layer of emphasis. Other options fail because they cannot anchor the relative clause under C2 syntactic constraints.",
      titleEs: "Oraciones enfáticas avanzadas",
      explanationEs:
        "Una oración 'It-cleft' introduce énfasis usando 'It + be + foco + cláusula relativa'. El modismo 'none other than' añade una capa retórica elevada. Las otras opciones fallan sintácticamente al intentar conectar el relativo 'who'.",
    },
  },
  {
    id: "pr-c2-wo-1",
    type: "word-order",
    difficulty: "C2",
    topic: "Belgrano",
    grammarTopic: "Participle Clauses with Negative Modifiers",
    instruction:
      "Ordena las palabras para formar una oración cohesiva y de registro académico:",
    shuffledWords: [
      "having",
      "received",
      "due",
      "recognition",
      "government",
      "the",
      "from",
      "not",
      "Belgrano",
      "destitute",
      "passed",
      "away",
    ],
    correctOrder: [
      "not",
      "having",
      "received",
      "due",
      "recognition",
      "from",
      "the",
      "government",
      "Belgrano",
      "passed",
      "away",
      "destitute",
    ],
    spanishTranslation:
      "Al no haber recibido el debido reconocimiento por parte del gobierno, Belgrano falleció en la indigencia.",
    tip: {
      title: "Negative Participle Clauses",
      explanation:
        "In advanced participle clauses, the negative modifier 'not' must strictly precede the auxiliary participle ('not having received'). Placing 'destitute' at the very end functions as an adjective complement describing the subject's state at the moment of death.",
      titleEs: "Cláusulas de participio negativas",
      explanationEs:
        "En cláusulas de participio avanzadas, el modificador negativo 'not' debe preceder estrictamente al participio auxiliar ('not having...'). Colocar 'destitute' al final funciona como un complemento adjetival de estado.",
    },
  },
  {
    id: "pr-c2-wo-2",
    type: "word-order",
    difficulty: "C2",
    topic: "Saavedra vs Moreno",
    grammarTopic: "Inverted Conditionals (Had he not...)",
    instruction:
      "Ordena las palabras para formar una estructura condicional invertida de alta complejidad:",
    shuffledWords: [
      "Saavedra",
      "secured",
      "the",
      "military's",
      "backing",
      "had",
      "not",
      "Moreno",
      "might",
      "have",
      "enacted",
      "even",
      "more",
      "sweeping",
      "reforms",
    ],
    correctOrder: [
      "had",
      "Saavedra",
      "not",
      "secured",
      "the",
      "military's",
      "backing",
      "Moreno",
      "might",
      "have",
      "enacted",
      "even",
      "more",
      "sweeping",
      "reforms",
    ],
    spanishTranslation:
      "De no haber asegurado Saavedra el respaldo del ejército, Moreno podría haber promulgado reformas aún más radicales.",
    tip: {
      title: "Inverted Third Conditional",
      explanation:
        "At C2 level, omitting 'if' and placing the auxiliary 'had' before the subject creates a formal inverted conditional. Notice the position of 'not' immediately following the subject in modern academic prose ('Had Saavedra not secured...').",
      titleEs: "Tercer condicional invertido",
      explanationEs:
        "En el nivel C2, omitir el 'if' e iniciar con el auxiliar 'had' antes del sujeto estructura una condicional invertida formal de registro literario o de investigación histórica.",
    },
  },
];
