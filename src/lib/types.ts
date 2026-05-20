export interface QuestionTip {
  title: string;
  explanation: string;
  titleEs: string;
  explanationEs: string;
}

export type Difficulty = "A1" | "A2" | "B1" | "B2" | "C1" | "C2";
export type ExerciseType =
  | "multiple-choice"
  | "word-order"
  | "reading-comprehension"
  | "question-answer";

interface ExerciseBase {
  id: string;
  difficulty: Difficulty;
  topic: string;
  grammarTopic: string;
  instruction: string;
  tip: QuestionTip;
  translation?: string;
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

