export interface QuestionTip {
  title: string;
  explanation: string;
  titleEs: string;
  explanationEs: string;
}

export type Difficulty = "A1" | "A2" | "B1" | "B2" | "C1" | "C2";
export type Tematica = "historia" | "anime" | "videojuegos";
export type ExerciseType =
  | "multiple-choice"
  | "word-order"
  | "reading-comprehension"
  | "question-answer";

interface ExerciseBase {
  id: string;
  tematica: Tematica;
  difficulty: Difficulty;
  categoryContext: string;
  grammarTopic: string;
  instruction: string;
  tip: QuestionTip;
}

export interface MultipleChoiceExercise extends ExerciseBase {
  type: "multiple-choice";
  sentence: string;
  options: [string, string, string, string];
  correctIndex: number;
}

export interface WordOrderExercise extends ExerciseBase {
  type: "word-order";
  shuffledWords: string[];
  correctOrder: string[];
  spanishTranslation: string;
}

export interface ReadingComprehensionExercise extends ExerciseBase {
  type: "reading-comprehension";
  passage: string;
  questionText: string;
  options: [string, string, string, string];
  correctIndex: number;
}

export interface QuestionAnswerExercise extends ExerciseBase {
  type: "question-answer";
  variant: "find-question" | "find-answer";
  prompt: string;
  options: [string, string, string, string];
  correctIndex: number;
}

export type Exercise =
  | MultipleChoiceExercise
  | WordOrderExercise
  | ReadingComprehensionExercise
  | QuestionAnswerExercise;

/** @deprecated Usar Exercise (discriminated union) en su lugar */
export interface Question {
  id: string;
  tematica: Tematica;
  difficulty: Difficulty;
  categoryContext: string;
  grammarTopic: string;
  sentence: string;
  instruction: string;
  options: [string, string, string, string];
  correctIndex: number;
  tip: QuestionTip;
}
