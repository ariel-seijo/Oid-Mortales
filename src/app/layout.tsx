import type { Metadata } from "next";
import { Literata, Inter } from "next/font/google";
import { SITE_URL } from "@/lib/constants";
import JsonLd from "@/components/json-ld";
import "./globals.css";

const literata = Literata({
  variable: "--font-literata",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  title: "Oíd Mortales | Plataforma de Nivelación de Inglés",
  description:
    "Transforma tu pasión en dominio del inglés. Una metodología innovadora que conecta tus intereses personales con el aprendizaje estructurado del idioma.",
  metadataBase: new URL(SITE_URL),
  keywords: [
    "inglés",
    "nivelación",
    "test de inglés",
    "MCER",
    "historia argentina",
    "Belgrano",
    "Revolución de Mayo",
    "aprender inglés",
    "nivel de inglés",
    "two4one",
  ],
  creator: "Oíd Mortales",
  publisher: "Oíd Mortales",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Oíd Mortales | Transforma tu pasión en dominio del inglés",
    description:
      "Evaluá tu nivel de inglés con contenido de historia argentina. Metodología académica alineada al MCER.",
    siteName: "Oíd Mortales",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Oíd Mortales — Plataforma de nivelación de inglés",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Oíd Mortales | Transforma tu pasión en dominio del inglés",
    description:
      "Evaluá tu nivel de inglés con contenido de historia argentina.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${literata.variable} ${inter.variable} h-full antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <JsonLd />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        <a href="#main-content" className="absolute w-px h-px p-0 -m-px overflow-hidden whitespace-nowrap border-0 focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:w-auto focus:h-auto focus:px-4 focus:py-2 focus:m-0 focus:overflow-visible focus:whitespace-normal focus:rounded-lg focus:bg-celeste focus:text-sm focus:font-semibold focus:text-surface focus:no-underline">
          Saltar al contenido principal
        </a>
        {children}
      </body>
    </html>
  );
}
