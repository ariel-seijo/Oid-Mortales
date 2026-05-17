import ScrollReveal from "@/components/ui/scroll-reveal";

export default function HeroSection() {
  return (
    <section
      className="relative flex min-h-[90vh] flex-col items-center justify-center px-5 pt-24 pb-16 text-center sm:px-6 lg:px-8"
      aria-labelledby="hero-heading"
    >
      <div className="mx-auto max-w-3xl">
        <ScrollReveal>
          <span className="inline-block rounded-full border border-navy/15 bg-cream-card px-4 py-1.5 text-xs font-medium tracking-wider text-navy-light uppercase sm:text-sm">
            Plataforma de nivelación académica
          </span>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h1
            id="hero-heading"
            className="mt-6 font-serif text-3xl leading-tight font-bold text-navy sm:text-4xl md:text-5xl lg:text-6xl"
          >
            Transforma tu pasión en dominio del inglés
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="mt-5 text-base leading-relaxed text-navy/65 sm:text-lg">
            Una metodología innovadora que conecta tus intereses personales con
            el aprendizaje estructurado del idioma inglés. Evalúa tu nivel real
            mientras disfrutás del contenido que amás.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.35}>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a
              href="#caminos"
              className="inline-flex h-12 w-full items-center justify-center rounded-lg bg-navy px-7 text-sm font-semibold text-cream transition-all duration-300 hover:bg-navy-light hover:shadow-lg sm:w-auto"
              aria-label="Comenzar test de nivelación — ir a selección de camino"
            >
              Comenzar test
            </a>
            <a
              href="#metodologia"
              className="inline-flex h-12 w-full items-center justify-center rounded-lg border border-navy/20 px-7 text-sm font-semibold text-navy transition-all duration-300 hover:border-navy/40 hover:bg-cream-card sm:w-auto"
              aria-label="Conocer metodología académica — ir a sección de metodología"
            >
              Conocer metodología
            </a>
          </div>
        </ScrollReveal>
      </div>

      <ScrollReveal delay={0.5} className="mt-16" aria-hidden="true">
        <div className="h-10 w-5 rounded-full border-2 border-navy/15">
          <div className="mx-auto mt-2 h-1.5 w-0.5 rounded-full bg-navy/25" />
        </div>
      </ScrollReveal>
    </section>
  );
}
