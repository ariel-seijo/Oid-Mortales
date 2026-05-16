import type { Question } from "@/lib/types";

export const historiaQuestions: Question[] = [
  {
    id: "hi-a1-01",
    tematica: "historia",
    difficulty: "A1",
    categoryContext: "Revolución de Mayo",
    grammarTopic: "Verb to be",
    sentence:
      "The May Revolution ___ a key event in Argentine history.",
    instruction: "Complete with the correct form of 'to be':",
    options: ["is", "are", "be", "am"],
    correctIndex: 0,
    tip: {
      title: "Verb to be — Singular Subjects",
      explanation:
        "'The May Revolution' is a singular noun (one event), so use 'is'. For plural subjects, use 'are'. Remember: I am, he/she/it is, we/you/they are.",
    },
  },
  {
    id: "hi-a1-02",
    tematica: "historia",
    difficulty: "A1",
    categoryContext: "Inmigración",
    grammarTopic: "Articles (a/an)",
    sentence:
      "Between 1880 and 1930, Argentina received ___ enormous wave of European immigrants.",
    instruction: "Complete with the correct article:",
    options: ["a", "an", "the", "no article"],
    correctIndex: 1,
    tip: {
      title: "Indefinite Article 'an'",
      explanation:
        "Use 'an' before words that begin with a vowel sound. 'Enormous' starts with the vowel sound /e/, so we say 'an enormous wave'. 'A' is used before consonant sounds.",
    },
  },
  {
    id: "hi-a2-01",
    tematica: "historia",
    difficulty: "A2",
    categoryContext: "Peronismo",
    grammarTopic: "Present Simple",
    sentence:
      "Many historians ___ that Peronism ___ a decisive influence on Argentine politics.",
    instruction: "Complete with the correct present simple forms:",
    options: ["believe / has", "believes / have", "believe / have", "is believing / has"],
    correctIndex: 0,
    tip: {
      title: "Present Simple — Facts and Opinions",
      explanation:
        "Present simple expresses facts and general opinions. 'Historians' is plural → no -s on the verb. 'Peronism' is singular → 'has' (third-person -s). Present continuous (is believing) would be unusual for stative verbs.",
    },
  },
  {
    id: "hi-a2-02",
    tematica: "historia",
    difficulty: "A2",
    categoryContext: "Dictadura militar",
    grammarTopic: "Past Continuous",
    sentence:
      "While the military junta ___ in power, many citizens ___ in secret for democracy.",
    instruction: "Complete with the correct past continuous forms:",
    options: ["was / were fighting", "were / was fighting", "was / fought", "is / are fighting"],
    correctIndex: 0,
    tip: {
      title: "Past Continuous — Background vs. Main Action",
      explanation:
        "Past continuous (was/were + verb-ing) sets the background scene. 'The junta was... citizens were fighting...' shows two simultaneous ongoing situations in the past.",
    },
  },
  {
    id: "hi-b1-01",
    tematica: "historia",
    difficulty: "B1",
    categoryContext: "Guerra de Malvinas",
    grammarTopic: "Past Simple",
    sentence:
      "In 1982, Argentina and the United Kingdom ___ for control of the Falkland Islands.",
    instruction: "Complete with the correct past simple form:",
    options: ["fought", "fighted", "was fighting", "had fought"],
    correctIndex: 0,
    tip: {
      title: "Past Simple — Irregular Verbs",
      explanation:
        "'Fight' is an irregular verb: fight → fought (past simple) → fought (past participle). 'Fighted' is never correct. The specific year (1982) signals a completed past action.",
    },
  },
  {
    id: "hi-b1-02",
    tematica: "historia",
    difficulty: "B1",
    categoryContext: "Declaración de la Independencia",
    grammarTopic: "Comparatives",
    sentence:
      "Achieving independence was ___ than anyone ___ expected.",
    instruction: "Complete with the correct forms:",
    options: ["more difficult / had", "difficulter / has", "more difficult / has", "most difficult / had"],
    correctIndex: 0,
    tip: {
      title: "Comparatives — 'More' with Long Adjectives",
      explanation:
        "For adjectives with three or more syllables (difficult), use 'more' instead of '-er'. The past perfect 'had expected' is used because the expectation happened before the achievement.",
    },
  },
  {
    id: "hi-b2-01",
    tematica: "historia",
    difficulty: "B2",
    categoryContext: "Conquista de América",
    grammarTopic: "Present Perfect",
    sentence:
      "Scholars ___ the impact of colonization for decades, yet many questions ___ unanswered.",
    instruction: "Complete with the correct present perfect forms:",
    options: ["have studied / have remained", "studied / remained", "have studied / remained", "are studying / remain"],
    correctIndex: 0,
    tip: {
      title: "Present Perfect — Unfinished Time Period",
      explanation:
        "Present perfect (have studied) is used because the action started in the past and continues. 'For decades' emphasizes duration. 'Yet' signals that the questions are still unanswered in the present.",
    },
  },
  {
    id: "hi-b2-02",
    tematica: "historia",
    difficulty: "B2",
    categoryContext: "Constitución de 1853",
    grammarTopic: "Third Conditional",
    sentence:
      "If the Constitution of 1853 ___ federalism, Argentina ___ a very different political structure.",
    instruction: "Complete with the correct conditional form:",
    options: ["had not established / would have had", "didn't establish / would have", "hadn't established / will have", "doesn't establish / would have"],
    correctIndex: 0,
    tip: {
      title: "Third Conditional — Unreal Past",
      explanation:
        "Third conditional: if + past perfect, would have + past participle. It expresses an unreal situation in the past that didn't happen. Argentina DID establish federalism, so we're imagining the opposite.",
    },
  },
  {
    id: "hi-c1-01",
    tematica: "historia",
    difficulty: "C1",
    categoryContext: "Época de Rosas",
    grammarTopic: "Reported Speech",
    sentence:
      "Historians report that Rosas ___ power through a combination of popular support and authoritarian measures.",
    instruction: "Complete with the correct reported speech form:",
    options: ["had consolidated", "consolidated", "has consolidated", "consolidates"],
    correctIndex: 0,
    tip: {
      title: "Reported Speech — Backshift",
      explanation:
        "When the reporting verb is in the present (report), no backshift is required in the reported clause. However, past perfect (had consolidated) is used here to emphasize that the consolidation preceded the period being discussed.",
    },
  },
  {
    id: "hi-c1-02",
    tematica: "historia",
    difficulty: "C1",
    categoryContext: "Creación de la Bandera",
    grammarTopic: "Passive Voice",
    sentence:
      "The Argentine flag ___ by Manuel Belgrano in 1812.",
    instruction: "Complete with the correct passive form:",
    options: ["was created", "created", "has created", "had been creating"],
    correctIndex: 0,
    tip: {
      title: "Passive Voice — Emphasizing the Object",
      explanation:
        "Passive voice (was created) shifts focus from the doer to the receiver of the action. Here, the flag is more important than Belgrano. The agent can be added with 'by' if needed.",
    },
  },
  {
    id: "hi-c2-01",
    tematica: "historia",
    difficulty: "C2",
    categoryContext: "Cruce de los Andes",
    grammarTopic: "Subjunctive",
    sentence:
      "San Martín demanded that every soldier ___ prepared for the extreme conditions of the Andes crossing.",
    instruction: "Complete with the correct subjunctive form:",
    options: ["be", "was", "is", "were"],
    correctIndex: 0,
    tip: {
      title: "Subjunctive after 'Demand'",
      explanation:
        "After verbs of demand, recommendation, or insistence (demand, suggest, insist), the subjunctive uses the base form of the verb: 'every soldier be prepared' (not 'is' or 'was').",
    },
  },
  {
    id: "hi-c2-02",
    tematica: "historia",
    difficulty: "C2",
    categoryContext: "Presidencia de Sarmiento",
    grammarTopic: "Inversion",
    sentence:
      "Not only ___ Sarmiento promote public education, but he also ___ the first telegraph line in Argentina.",
    instruction: "Complete with the correct inversion form:",
    options: ["did / established", "he did / established", "did / establish", "he did / establish"],
    correctIndex: 2,
    tip: {
      title: "Inversion — 'Not only ... but also'",
      explanation:
        "When 'not only' begins a clause, use subject-auxiliary inversion: 'Not only did Sarmiento promote...' The auxiliary 'did' carries the past tense; the main verb stays in base form (establish).",
    },
  },
];
