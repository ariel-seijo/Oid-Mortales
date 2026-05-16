import { PATH_CARDS } from "./constants";

export interface QuestionTip {
  title: string;
  explanation: string;
}

export interface Question {
  id: string;
  tematica: "historia" | "anime" | "videojuegos";
  difficulty: "A1" | "A2" | "B1" | "B2" | "C1" | "C2";
  categoryContext: string;
  grammarTopic: string;
  sentence: string;
  instruction: string;
  options: [string, string, string, string];
  correctIndex: number;
  tip: QuestionTip;
}

export const ALL_QUESTIONS: Question[] = [
  // ============================================================
  // VIDEOJUEGOS — 12 preguntas (2 por nivel A1→C2)
  // ============================================================
  {
    id: "vg-a1-01",
    tematica: "videojuegos",
    difficulty: "A1",
    categoryContext: "The Legend of Zelda",
    grammarTopic: "Verb to be",
    sentence:
      "Link ___ the hero of Hyrule in 'The Legend of Zelda' series.",
    instruction: "Complete with the correct form of 'to be':",
    options: ["is", "are", "be", "am"],
    correctIndex: 0,
    tip: {
      title: "Subject-Verb Agreement",
      explanation:
        "Use 'is' with third-person singular subjects (he, she, it, Link). Use 'are' with plural subjects. 'Am' is used only with 'I'.",
    },
  },
  {
    id: "vg-a1-02",
    tematica: "videojuegos",
    difficulty: "A1",
    categoryContext: "Final Fantasy VII",
    grammarTopic: "Articles (a/an)",
    sentence:
      "Cloud wields ___ enormous sword called the Buster Sword.",
    instruction: "Complete with the correct article:",
    options: ["a", "an", "the", "no article"],
    correctIndex: 1,
    tip: {
      title: "Indefinite Articles: a vs. an",
      explanation:
        "Use 'an' before words that begin with a vowel sound (an enormous sword, an apple). Use 'a' before consonant sounds (a sword, a game).",
    },
  },
  {
    id: "vg-a2-01",
    tematica: "videojuegos",
    difficulty: "A2",
    categoryContext: "Minecraft",
    grammarTopic: "Present Simple",
    sentence:
      "Every day, Steve ___ wood from trees and ___ structures to survive the night.",
    instruction: "Complete with the correct present simple forms:",
    options: ["chops / builds", "chop / build", "is chopping / building", "has chopped / built"],
    correctIndex: 0,
    tip: {
      title: "Present Simple — Third Person",
      explanation:
        "In the present simple, third-person singular subjects (he, she, it, Steve) take verbs ending in -s. 'Every day' signals a habitual action — use present simple, not continuous.",
    },
  },
  {
    id: "vg-a2-02",
    tematica: "videojuegos",
    difficulty: "A2",
    categoryContext: "Fortnite",
    grammarTopic: "Present Continuous",
    sentence:
      "Right now, the players ___ for the Victory Royale.",
    instruction: "Complete with the correct present continuous form:",
    options: ["are fighting", "fight", "fights", "is fighting"],
    correctIndex: 0,
    tip: {
      title: "Present Continuous for Actions in Progress",
      explanation:
        "Use 'be + verb-ing' for actions happening right now. 'Players' is plural, so use 'are' (not 'is'). The phrase 'right now' confirms the continuous tense.",
    },
  },
  {
    id: "vg-b1-01",
    tematica: "videojuegos",
    difficulty: "B1",
    categoryContext: "The Last of Us",
    grammarTopic: "Past Simple",
    sentence:
      "Joel ___ across the country with Ellie last year.",
    instruction: "Complete with the correct past simple form:",
    options: ["traveled", "was traveling", "had traveled", "travels"],
    correctIndex: 0,
    tip: {
      title: "Past Simple for Completed Actions",
      explanation:
        "Past simple describes completed actions in the past. The time marker 'last year' signals a finished period. 'Was traveling' would describe an action in progress at a specific moment in the past.",
    },
  },
  {
    id: "vg-b1-02",
    tematica: "videojuegos",
    difficulty: "B1",
    categoryContext: "Elden Ring",
    grammarTopic: "Comparatives & Superlatives",
    sentence:
      "Malenia is ___ than most other bosses in Elden Ring, and many consider her the ___ enemy in the game.",
    instruction: "Complete with the correct comparative and superlative:",
    options: ["harder / hardest", "hardest / harder", "more hard / most hard", "harder / most hard"],
    correctIndex: 0,
    tip: {
      title: "Comparatives and Superlatives — One-Syllable Adjectives",
      explanation:
        "For one-syllable adjectives like 'hard', add '-er' for the comparative (harder) and '-est' for the superlative (hardest). Avoid 'more hard' or 'most hard'.",
    },
  },
  {
    id: "vg-b2-01",
    tematica: "videojuegos",
    difficulty: "B2",
    categoryContext: "Pokémon",
    grammarTopic: "Present Perfect",
    sentence:
      "Ash ___ Pokémon since he was ten years old, and he ___ the championship yet.",
    instruction: "Complete with the correct present perfect forms:",
    options: ["has trained / hasn't won", "trained / didn't win", "has been training / wasn't winning", "trains / doesn't win"],
    correctIndex: 0,
    tip: {
      title: "Present Perfect — Unfinished Time + Yet",
      explanation:
        "Use present perfect for actions that started in the past and continue to the present (has trained). Use 'yet' in negative sentences to express something that hasn't happened up to now.",
    },
  },
  {
    id: "vg-b2-02",
    tematica: "videojuegos",
    difficulty: "B2",
    categoryContext: "Super Mario",
    grammarTopic: "First Conditional",
    sentence:
      "If Mario ___ a Super Star, he ___ invincible for a short time.",
    instruction: "Complete with the correct conditional form:",
    options: ["collects / will become", "will collect / becomes", "collected / would become", "collects / becomes"],
    correctIndex: 0,
    tip: {
      title: "First Conditional — Real Future Situations",
      explanation:
        "First conditional: if + present simple, will + base verb. It expresses a real possibility in the future. 'If Mario collects... he will become...' describes a likely in-game outcome.",
    },
  },
  {
    id: "vg-c1-01",
    tematica: "videojuegos",
    difficulty: "C1",
    categoryContext: "Dark Souls",
    grammarTopic: "Past Perfect",
    sentence:
      "By the time the Chosen Undead reached Anor Londo, Gwyn ___ the First Flame.",
    instruction: "Complete with the correct past perfect form:",
    options: ["had already linked", "already linked", "has already linked", "was already linking"],
    correctIndex: 0,
    tip: {
      title: "Past Perfect — Sequence of Past Events",
      explanation:
        "Use past perfect (had + past participle) for an action that happened before another action in the past. Gwyn linked the flame before the Chosen Undead arrived at Anor Londo.",
    },
  },
  {
    id: "vg-c1-02",
    tematica: "videojuegos",
    difficulty: "C1",
    categoryContext: "Grand Theft Auto V",
    grammarTopic: "Passive Voice",
    sentence:
      "The city of Los Santos ___ by Rockstar Games in 2013.",
    instruction: "Complete with the correct passive form:",
    options: ["was created", "created", "has created", "had been creating"],
    correctIndex: 0,
    tip: {
      title: "Passive Voice — Past Simple",
      explanation:
        "Passive voice: be + past participle. The agent (Rockstar) is introduced with 'by'. The focus is on the city (Los Santos), not on who created it. Past simple passive = was/were + past participle.",
    },
  },
  {
    id: "vg-c2-01",
    tematica: "videojuegos",
    difficulty: "C2",
    categoryContext: "Undertale",
    grammarTopic: "Mixed Conditionals",
    sentence:
      "If the player ___ the pacifist route, they ___ a different ending.",
    instruction: "Complete with the correct mixed conditional form:",
    options: ["hadn't chosen / would be seeing", "didn't choose / will see", "doesn't choose / would see", "hadn't chosen / saw"],
    correctIndex: 0,
    tip: {
      title: "Mixed Conditionals — Past Condition, Present Result",
      explanation:
        "Mixed conditional: if + past perfect (past condition), would + base verb (present result). The choice was made in the past, but the consequence affects the present experience.",
    },
  },
  {
    id: "vg-c2-02",
    tematica: "videojuegos",
    difficulty: "C2",
    categoryContext: "Portal",
    grammarTopic: "Inversion",
    sentence:
      "Not only ___ Chell solve the test chambers, but she also ___ GLaDOS.",
    instruction: "Complete with the correct inversion form:",
    options: ["did / defeated", "she did / defeated", "did / defeat", "she did / defeat"],
    correctIndex: 2,
    tip: {
      title: "Inversion after 'Not only...'",
      explanation:
        "When 'not only' begins a clause, subject-auxiliary inversion is required: 'Not only did Chell solve...' (not 'Not only Chell solved...'). The auxiliary 'did' carries the tense; the main verb stays in base form.",
    },
  },

  // ============================================================
  // ANIME & MANGA — 12 preguntas (2 por nivel A1→C2)
  // ============================================================
  {
    id: "an-a1-01",
    tematica: "anime",
    difficulty: "A1",
    categoryContext: "Naruto",
    grammarTopic: "Verb to be",
    sentence:
      "Naruto ___ a young ninja from the Hidden Leaf Village.",
    instruction: "Complete with the correct form of 'to be':",
    options: ["is", "are", "be", "am"],
    correctIndex: 0,
    tip: {
      title: "Verb to be — Third Person Singular",
      explanation:
        "Use 'is' with singular third-person subjects (he, she, it, Naruto). 'Are' is for plural or 'you', and 'am' is exclusively for 'I'.",
    },
  },
  {
    id: "an-a1-02",
    tematica: "anime",
    difficulty: "A1",
    categoryContext: "One Piece",
    grammarTopic: "Articles (a/an)",
    sentence:
      "Luffy wants to become ___ Pirate King.",
    instruction: "Complete with the correct article:",
    options: ["a", "an", "the", "no article"],
    correctIndex: 0,
    tip: {
      title: "Indefinite Article 'a'",
      explanation:
        "Use 'a' before singular countable nouns that begin with a consonant sound. 'Pirate' starts with the consonant sound /p/, so 'a Pirate King' is correct.",
    },
  },
  {
    id: "an-a2-01",
    tematica: "anime",
    difficulty: "A2",
    categoryContext: "Studio Ghibli",
    grammarTopic: "Present Simple",
    sentence:
      "Totoro ___ in the forest and ___ the children when they need help.",
    instruction: "Complete with the correct present simple forms:",
    options: ["lives / protects", "live / protect", "is living / protecting", "lived / protected"],
    correctIndex: 0,
    tip: {
      title: "Present Simple — Habitual Actions",
      explanation:
        "Use present simple for general truths and habitual actions. Third-person singular (Totoro → it) requires the -s ending on both verbs: lives, protects.",
    },
  },
  {
    id: "an-a2-02",
    tematica: "anime",
    difficulty: "A2",
    categoryContext: "Attack on Titan",
    grammarTopic: "Present Continuous",
    sentence:
      "The Survey Corps ___ beyond the walls right now.",
    instruction: "Complete with the correct present continuous form:",
    options: ["is fighting", "are fighting", "fights", "fight"],
    correctIndex: 0,
    tip: {
      title: "Present Continuous — Ongoing Action",
      explanation:
        "The Survey Corps is a collective noun treated as singular in American English. Use 'is + verb-ing' for an action in progress. 'Right now' confirms the continuous aspect.",
    },
  },
  {
    id: "an-b1-01",
    tematica: "anime",
    difficulty: "B1",
    categoryContext: "Your Name",
    grammarTopic: "Past Simple",
    sentence:
      "Mitsuha and Taki ___ bodies one morning and ___ to understand what was happening.",
    instruction: "Complete with the correct past simple forms:",
    options: ["swapped / tried", "swapped / try", "were swapping / try", "swap / tried"],
    correctIndex: 0,
    tip: {
      title: "Past Simple — Sequence of Completed Actions",
      explanation:
        "Use past simple for a sequence of completed actions in the past. Both 'swapped' and 'tried' are regular verbs in past simple form. The story narrates events that happened and finished.",
    },
  },
  {
    id: "an-b1-02",
    tematica: "anime",
    difficulty: "B1",
    categoryContext: "Dragon Ball Z",
    grammarTopic: "Comparatives",
    sentence:
      "Goku's training is ___ intense ___ Vegeta's, but his spirit is ___.",
    instruction: "Complete with the correct comparative forms:",
    options: ["more / than / stronger", "most / than / stronger", "more / then / strongest", "much / than / stronger"],
    correctIndex: 0,
    tip: {
      title: "Comparatives with Multi-Syllable Adjectives",
      explanation:
        "For adjectives with two or more syllables (intense), use 'more' + adjective + 'than'. For one-syllable adjectives (strong), add '-er'. Never use 'then' for comparisons — 'than' is the conjunction.",
    },
  },
  {
    id: "an-b2-01",
    tematica: "anime",
    difficulty: "B2",
    categoryContext: "Fullmetal Alchemist",
    grammarTopic: "Present Perfect Continuous",
    sentence:
      "The Elric brothers ___ for the Philosopher's Stone for years, but they ___ it ___.",
    instruction: "Complete with the correct forms:",
    options: ["have been searching / haven't found / yet", "searched / didn't find / yet", "search / don't find / already", "had searched / hadn't found / still"],
    correctIndex: 0,
    tip: {
      title: "Present Perfect Continuous — Duration + Ongoing Effort",
      explanation:
        "Present perfect continuous (have been + verb-ing) emphasizes the duration and ongoing nature of an action that started in the past and continues. 'For years' signals this tense. Use 'yet' in negative present perfect.",
    },
  },
  {
    id: "an-b2-02",
    tematica: "anime",
    difficulty: "B2",
    categoryContext: "Death Note",
    grammarTopic: "Second Conditional",
    sentence:
      "If you ___ a Death Note, ___ you use it?",
    instruction: "Complete with the correct conditional form:",
    options: ["found / would", "find / will", "would find / will", "had found / would have"],
    correctIndex: 0,
    tip: {
      title: "Second Conditional — Hypothetical Situations",
      explanation:
        "Second conditional: if + past simple, would + base verb. It expresses imaginary or unlikely situations. 'If you found... would you use...?' describes a hypothetical scenario, not a real possibility.",
    },
  },
  {
    id: "an-c1-01",
    tematica: "anime",
    difficulty: "C1",
    categoryContext: "Spirited Away",
    grammarTopic: "Reported Speech",
    sentence:
      "Haku told Chihiro that she ___ forget her real name or she ___ trapped in the spirit world forever.",
    instruction: "Complete with the correct reported speech forms:",
    options: ["must not / would be", "didn't have to / will be", "must not / is", "doesn't have to / would be"],
    correctIndex: 0,
    tip: {
      title: "Reported Speech — Modal Verbs",
      explanation:
        "In reported speech, 'must' often stays 'must' when expressing strong obligation. 'Will' shifts to 'would' when the reporting verb is in the past (told). The backshift reflects the time shift.",
    },
  },
  {
    id: "an-c1-02",
    tematica: "anime",
    difficulty: "C1",
    categoryContext: "Demon Slayer",
    grammarTopic: "Passive Voice — Causative",
    sentence:
      "Tanjiro ___ his katana ___ by a master swordsmith.",
    instruction: "Complete with the correct causative form:",
    options: ["had / forged", "has / forge", "was / forged", "got / to forge"],
    correctIndex: 0,
    tip: {
      title: "Causative Form — 'Have something done'",
      explanation:
        "'Have + object + past participle' expresses that the subject arranges for someone else to do something. Tanjiro didn't forge the katana himself — he arranged for a smith to do it.",
    },
  },
  {
    id: "an-c2-01",
    tematica: "anime",
    difficulty: "C2",
    categoryContext: "Neon Genesis Evangelion",
    grammarTopic: "Subjunctive",
    sentence:
      "It is essential that every pilot ___ the synchronization test before boarding the Eva unit.",
    instruction: "Complete with the correct subjunctive form:",
    options: ["pass", "passes", "passed", "will pass"],
    correctIndex: 0,
    tip: {
      title: "Subjunctive — After 'It is essential that...'",
      explanation:
        "The subjunctive mood uses the base form of the verb regardless of the subject. 'It is essential that every pilot pass...' (not 'passes'). This applies after expressions of necessity, recommendation, or demand.",
    },
  },
  {
    id: "an-c2-02",
    tematica: "anime",
    difficulty: "C2",
    categoryContext: "Cowboy Bebop",
    grammarTopic: "Inversion — Negative Adverbials",
    sentence:
      "Rarely ___ a bounty so elusive as the one on Spike Spiegel's head.",
    instruction: "Complete with the correct inversion form:",
    options: ["has there been", "there has been", "there is", "is there"],
    correctIndex: 0,
    tip: {
      title: "Inversion after Negative Adverbs",
      explanation:
        "When a negative or restrictive adverb (rarely, never, seldom, hardly) begins a sentence, subject-auxiliary inversion is required: 'Rarely has there been...' (not 'Rarely there has been...').",
    },
  },

  // ============================================================
  // HISTORIA ARGENTINA — 12 preguntas (2 por nivel A1→C2)
  // ============================================================
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

const DIFFICULTY_ORDER: Record<Question["difficulty"], number> = {
  A1: 0,
  A2: 1,
  B1: 2,
  B2: 3,
  C1: 4,
  C2: 5,
};

export function getQuestionsByTematica(tematica: string): Question[] {
  return ALL_QUESTIONS
    .filter((q) => q.tematica === tematica)
    .sort((a, b) => DIFFICULTY_ORDER[a.difficulty] - DIFFICULTY_ORDER[b.difficulty]);
}

export function getTematicaName(tematica: string): string {
  const card = PATH_CARDS.find((c) => c.id === tematica);
  return card?.title ?? tematica;
}
