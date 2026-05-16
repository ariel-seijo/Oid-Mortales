import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { PATH_CARDS } from "@/lib/constants";
import { getTematicaName } from "@/lib/test-data";
import TestContent from "@/components/test-content";

interface TestPageProps {
  params: Promise<{ tematica: string }>;
}

export async function generateMetadata({
  params,
}: TestPageProps): Promise<Metadata> {
  const { tematica } = await params;
  const name = getTematicaName(tematica);

  return {
    title: `Test de Inglés — ${name} | Two4One`,
    description: `Evaluá tu nivel de inglés con contenido de ${name}. Test de nivelación alineado al MCER.`,
    robots: {
      index: false,
      follow: false,
    },
  };
}

export default async function TestPage({ params }: TestPageProps) {
  const { tematica } = await params;

  const isValid = PATH_CARDS.some((card) => card.id === tematica);
  if (!isValid) {
    notFound();
  }

  return <TestContent tematica={tematica} />;
}
