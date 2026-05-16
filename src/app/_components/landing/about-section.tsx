import ScrollReveal from "@/components/ui/scroll-reveal";

export default function AboutSection() {
  return (
    <section
      id="sobre-nosotros"
      className="scroll-mt-20 bg-navy px-5 py-20 text-cream sm:px-6 sm:py-28 lg:px-8"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-3xl text-center">
        <ScrollReveal>
          <h2
            id="about-heading"
            className="font-serif text-2xl font-bold sm:text-3xl md:text-4xl"
          >
            Nuestra misión
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p className="mt-6 text-base leading-relaxed text-cream/70 sm:text-lg">
            Two4One nace de una convicción: el inglés no se aprende memorizando
            reglas descontextualizadas, sino involucrándose con contenido que te
            importa. Nuestra plataforma cierra la brecha entre el aprendizaje
            formal de idiomas y la motivación personal. Utilizamos tus intereses
            &#x2014; historia, anime o videojuegos &#x2014; como vehículo para
            evaluar y fortalecer tu dominio del inglés, siempre dentro de un
            marco académico riguroso alineado con los estándares del MCER.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="mt-5 text-base leading-relaxed text-cream/70 sm:text-lg">
            Creemos que una evaluación de nivel no tiene por qué ser aburrida.
            Cuando el contenido te interpela, aprendés sin darte cuenta. Y
            cuando la medición es precisa, sabés exactamente dónde estás parado
            y hacia dónde ir. Eso es Two4One.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.35}>
          <ul
            className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-cream/50 sm:text-base"
            role="list"
          >
            <li className="flex items-center gap-2">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
              Alineado al MCER
            </li>
            <li className="flex items-center gap-2">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>
              Evaluación adaptativa
            </li>
            <li className="flex items-center gap-2">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
              </svg>
              Contenido que te importa
            </li>
          </ul>
        </ScrollReveal>
      </div>
    </section>
  );
}
