import type { Metadata } from "next";
import { Literata, Inter } from "next/font/google";
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
  title: "Two4One | Plataforma de Nivelación de Inglés",
  description:
    "Transforma tu pasión en dominio del inglés. Una metodología innovadora que conecta tus intereses personales con el aprendizaje estructurado del idioma.",
  metadataBase: new URL("https://two4one.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Two4One | Transforma tu pasión en dominio del inglés",
    description:
      "Evaluá tu nivel de inglés con contenido de historia, anime o videojuegos. Metodología académica alineada al MCER.",
    siteName: "Two4One",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Two4One — Plataforma de nivelación de inglés",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Two4One | Transforma tu pasión en dominio del inglés",
    description:
      "Evaluá tu nivel de inglés con contenido de historia, anime o videojuegos.",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Two4One",
              url: "https://two4one.vercel.app",
              description:
                "Plataforma de nivelación de inglés que conecta tus intereses personales con el aprendizaje estructurado del idioma.",
              inLanguage: "es",
              publisher: {
                "@type": "Organization",
                name: "Two4One",
              },
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-lg focus:bg-navy focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-cream"
        >
          Saltar al contenido principal
        </a>
        {children}
      </body>
    </html>
  );
}
