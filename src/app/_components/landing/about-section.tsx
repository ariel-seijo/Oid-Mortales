import ScrollReveal from "@/components/ui/scroll-reveal";

export default function AboutSection() {
  return (
    <section
      id="sobre-nosotros"
      className="scroll-mt-20 bg-surface-alt py-20 px-5 text-primary sm:py-28 sm:px-6 lg:px-8"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-3xl text-center">
        <ScrollReveal>
          <h2 id="about-heading" className="font-serif text-2xl font-semibold sm:text-3xl md:text-4xl">
            Nuestra misión
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="mt-8 grid gap-4 items-stretch md:grid-cols-[1fr_auto_1fr] md:gap-6">
            <article className="flex flex-col relative rounded-2xl border-[3px] border-primary/20 bg-surface-card p-6 text-left overflow-hidden before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-[3px] before:bg-gradient-to-r before:from-[rgba(180,70,50,0.85)] before:to-[rgba(180,70,50,0.15)] sm:p-8">
              <span className="inline-block self-start mb-3.5 px-3 py-0.5 rounded-full text-[0.7rem] font-semibold tracking-wider uppercase bg-[rgba(180,70,50,0.1)] text-[#8b3a2a] border border-[rgba(180,70,50,0.25)]" aria-hidden="true">
                Problema
              </span>
              <p className="text-sm leading-relaxed text-primary/80 m-0 flex-1 sm:text-base">
                Aprender inglés puede ser aburrido; leer un libro de historia puede ser tedioso.
              </p>
            </article>

            <div className="flex items-center justify-center text-primary/25 [&>svg]:w-6 [&>svg]:h-6 md:[&>svg]:w-7 md:[&>svg]:h-7 md:[&>svg]:-rotate-90" aria-hidden="true">
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
              </svg>
            </div>

            <article className="flex flex-col relative rounded-2xl border-[3px] border-primary/20 bg-surface-card p-6 text-left overflow-hidden before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-[3px] before:bg-gradient-to-r before:from-celeste before:to-celeste/15 sm:p-8">
              <span className="inline-block self-start mb-3.5 px-3 py-0.5 rounded-full text-[0.7rem] font-semibold tracking-wider uppercase bg-celeste/15 text-[#2a6b8b] border border-celeste/40" aria-hidden="true">
                Solución
              </span>
              <p className="text-sm leading-relaxed text-primary/80 m-0 flex-1 sm:text-base">
                Fusionar ambos mundos.
              </p>
            </article>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="mt-6 text-base leading-relaxed text-primary/80 sm:text-lg">
            En Oíd Mortales dejamos atrás los ejemplos genéricos. Cuando el contenido de calidad te interpela, el conocimiento se fija solo. Ofrecemos herramientas de medición precisas para que sepas dónde estás y hacia dónde vas, mientras te nutrís de la historia que nos define.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.35}>
          <ul className="mt-10 flex flex-wrap items-center justify-center gap-6 list-none p-0 text-sm text-primary/60 sm:text-base" role="list">
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
