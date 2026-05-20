import type { Metadata } from "next";
import ResultsContent from "./_components/results-content";

export const metadata: Metadata = {
  title: "Resultados del Test — Historia Argentina | Oíd Mortales",
  description: "Resultados de tu test de nivelación de inglés con contenido de historia argentina. Evaluación alineada al MCER.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ResultsPage() {
  return <ResultsContent />;
}
