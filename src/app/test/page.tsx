import type { Metadata } from "next";
import TestContent from "./_components/test-content";

export const metadata: Metadata = {
  title: "Test de Inglés — Historia Argentina | Oíd Mortales",
  description: "Evaluá tu nivel de inglés con contenido de historia argentina. Test de nivelación alineado al MCER.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function TestPage() {
  return <TestContent />;
}
