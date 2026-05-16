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
