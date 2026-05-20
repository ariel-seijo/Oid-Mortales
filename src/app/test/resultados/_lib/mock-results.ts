import type { AnswerRecord } from "../../_lib/results-calculator";

export const MOCK_ANSWERS: AnswerRecord[] = [
  // A1 — 4/5 correct (80%)
  { exerciseId: "pr-a1-mc-1", difficulty: "A1", type: "multiple-choice", grammarTopic: "Verb to be (past)", correct: true },
  { exerciseId: "pr-a1-wo-1", difficulty: "A1", type: "word-order", grammarTopic: "Basic sentence structure (SVO)", correct: true },
  { exerciseId: "pr-a1-mc-2", difficulty: "A1", type: "multiple-choice", grammarTopic: "Present Simple", correct: true },
  { exerciseId: "pr-a1-wo-2", difficulty: "A1", type: "word-order", grammarTopic: "Articles (a/an/the)", correct: false },
  { exerciseId: "pr-a1-qa-1", difficulty: "A1", type: "question-answer", grammarTopic: "Wh- questions with 'when'", correct: true },

  // A2 — 3/4 correct (75%)
  { exerciseId: "pr-a2-wo-1", difficulty: "A2", type: "word-order", grammarTopic: "Comparatives", correct: true },
  { exerciseId: "pr-a2-mc-2", difficulty: "A2", type: "multiple-choice", grammarTopic: "Can / Could", correct: true },
  { exerciseId: "pr-a2-wo-2", difficulty: "A2", type: "word-order", grammarTopic: "Going to (future plans)", correct: false },
  { exerciseId: "pr-a2-qa-1", difficulty: "A2", type: "question-answer", grammarTopic: "Short answers in past tense", correct: true },

  // B1 — 3/5 correct (60%)
  { exerciseId: "pr-b1-rc-1", difficulty: "B1", type: "reading-comprehension", grammarTopic: "Reason and Result (so... that)", correct: true },
  { exerciseId: "pr-b1-mc-1", difficulty: "B1", type: "multiple-choice", grammarTopic: "Present Perfect", correct: true },
  { exerciseId: "pr-b1-wo-1", difficulty: "B1", type: "word-order", grammarTopic: "First Conditional", correct: false },
  { exerciseId: "pr-b1-mc-2", difficulty: "B1", type: "multiple-choice", grammarTopic: "Passive Voice", correct: false },
  { exerciseId: "pr-b1-wo-2", difficulty: "B1", type: "word-order", grammarTopic: "Past Continuous", correct: true },

  // B2 — 2/6 correct (33%)
  { exerciseId: "pr-b2-rc-1", difficulty: "B2", type: "reading-comprehension", grammarTopic: "Narrative Sequencing and Contextual Inference", correct: true },
  { exerciseId: "pr-b2-qa-1", difficulty: "B2", type: "question-answer", grammarTopic: "Expressing opinions with evidence", correct: false },
  { exerciseId: "pr-b2-mc-1", difficulty: "B2", type: "multiple-choice", grammarTopic: "Wish / If only", correct: false },
  { exerciseId: "pr-b2-wo-1", difficulty: "B2", type: "word-order", grammarTopic: "Passive Voice with Reporting Verbs", correct: true },
  { exerciseId: "pr-b2-mc-2", difficulty: "B2", type: "multiple-choice", grammarTopic: "Modals of Deduction", correct: false },
  { exerciseId: "pr-b2-wo-2", difficulty: "B2", type: "word-order", grammarTopic: "Third Conditional with Negative Inversion", correct: false },

  // C1 — 1/5 correct (20%)
  { exerciseId: "pr-c1-rc-1", difficulty: "C1", type: "reading-comprehension", grammarTopic: "Identifying Perspective and Motivation", correct: true },
  { exerciseId: "pr-c1-mc-1", difficulty: "C1", type: "multiple-choice", grammarTopic: "Advanced Modal Perfects & Speculation", correct: false },
  { exerciseId: "pr-c1-wo-1", difficulty: "C1", type: "word-order", grammarTopic: "Advanced Causative of Experience and Misfortune", correct: false },
  { exerciseId: "pr-c1-mc-1b", difficulty: "C1", type: "multiple-choice", grammarTopic: "Advanced Modal Perfects & Speculation", correct: false },
  { exerciseId: "pr-c1-wo-2", difficulty: "C1", type: "word-order", grammarTopic: "Advanced Connectors (whereas, despite)", correct: false },

  // C2 — 1/4 correct (25%)
  { exerciseId: "pr-c2-rc-1", difficulty: "C2", type: "reading-comprehension", grammarTopic: "Rhetorical Analysis — Legacy and Meaning", correct: false },
  { exerciseId: "pr-c2-qa-2", difficulty: "C2", type: "question-answer", grammarTopic: "Sophisticated historical argumentation", correct: true },
  { exerciseId: "pr-c2-mc-1", difficulty: "C2", type: "multiple-choice", grammarTopic: "Cleft Sentences", correct: false },
  { exerciseId: "pr-c2-wo-1", difficulty: "C2", type: "word-order", grammarTopic: "Participle Clauses with Negative Modifiers", correct: false },
];
