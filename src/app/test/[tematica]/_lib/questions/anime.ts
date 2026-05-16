import type { Question } from "@/lib/types";

export const animeQuestions: Question[] = [
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
];
