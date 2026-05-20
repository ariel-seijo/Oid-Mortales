import ScrollReveal from "@/components/ui/scroll-reveal";
import { METHODOLOGY_CARDS } from "@/lib/constants";

const ICONS: Record<string, React.ReactNode> = {
  chart: (
    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
    </svg>
  ),
  bookmark: (
    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
    </svg>
  ),
  academic: (
    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
    </svg>
  ),
};

export default function MethodologySection() {
  return (
    <section
      id="metodologia"
      className="scroll-mt-20 py-20 px-5 bg-surface-alt sm:py-28 sm:px-6 lg:px-8"
      aria-labelledby="methodology-heading"
    >
      <div className="mx-auto max-w-6xl">
        <ScrollReveal className="text-center">
          <h2 id="methodology-heading" className="font-serif text-2xl font-bold text-primary sm:text-3xl md:text-4xl">
            Metodología Académica
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-base leading-relaxed text-primary/80 sm:text-lg">
            Combinamos rigor educativo con contenido de valor para tu educación. Tu tiempo vale, y nosotros te ayudamos a aprovecharlo.
          </p>
        </ScrollReveal>

        <ul className="mt-12 grid gap-6 list-none m-0 p-0 sm:grid-cols-2 lg:grid-cols-3" role="list">
          {METHODOLOGY_CARDS.map((card, i) => (
            <li key={card.title}>
              <ScrollReveal delay={i * 0.1} duration={0.5}>
                <article className="flex flex-col h-full rounded-2xl border-[3px] border-primary/20 bg-surface-card p-6 transition-shadow hover:shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-2px_rgba(0,0,0,0.1)] sm:p-8">
                  <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-[rgba(58,179,255,0.1)] text-primary-hover">
                    {ICONS[card.icon]}
                  </div>
                  <h3 className="mt-5 font-serif text-lg font-semibold text-primary sm:text-xl">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-primary/80 sm:text-base">
                    {card.description}
                  </p>
                </article>
              </ScrollReveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
