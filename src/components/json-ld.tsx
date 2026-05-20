import { SITE_URL } from "@/lib/constants";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Oíd Mortales",
  url: SITE_URL,
  description:
    "Plataforma de nivelación de inglés que conecta tus intereses personales con el aprendizaje estructurado del idioma.",
  inLanguage: "es",
  publisher: {
    "@type": "Organization",
    name: "Oíd Mortales",
  },
};

export default function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
}
