import type { Question } from "@/lib/types";

export const videojuegosQuestions: Question[] = [
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
];
