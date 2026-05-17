import { videojuegosExercises } from "./videojuegos";
import { animeExercises } from "./anime";
import { historiaExercises } from "./historia";
import type { Exercise } from "@/lib/types";

export const ALL_EXERCISES: Exercise[] = [
  ...videojuegosExercises,
  ...animeExercises,
  ...historiaExercises,
];
