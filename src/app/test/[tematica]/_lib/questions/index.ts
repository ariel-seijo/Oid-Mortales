import { videojuegosQuestions } from "./videojuegos";
import { animeQuestions } from "./anime";
import { historiaQuestions } from "./historia";
import type { Question } from "@/lib/types";

export const ALL_QUESTIONS: Question[] = [
  ...videojuegosQuestions,
  ...animeQuestions,
  ...historiaQuestions,
];
