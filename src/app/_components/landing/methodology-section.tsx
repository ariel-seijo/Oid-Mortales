import ScrollReveal from "@/components/ui/scroll-reveal";
import { METHODOLOGY_CARDS } from "@/lib/constants";

const ICONS: Record<string, React.ReactNode> = {
  chart: (
    <svg
      className="h-7 w-7"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
      />
    </svg>
  ),
  bookmark: (
    <svg
      className="h-7 w-7"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
      />
    </svg>
  ),
  academic: (
    <svg
      className="h-7 w-7"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
      />
    </svg>
  ),
};

export default function MethodologySection() {
  return (
    <section
      id="metodologia"
      className="scroll-mt-20 bg-cream-warm px-5 py-20 sm:px-6 sm:py-28 lg:px-8"
      aria-labelledby="methodology-heading"
    >
      <div className="mx-auto max-w-5xl">
        <ScrollReveal className="text-center">
          <h2
            id="methodology-heading"
            className="font-serif text-2xl font-bold text-navy sm:text-3xl md:text-4xl"
          >
            Metodología Académica
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-navy/60 sm:text-lg">
            Combinamos rigor educativo con contenido relevante para una
            experiencia de evaluación única.
          </p>
        </ScrollReveal>

        <ul
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          role="list"
        >
          {METHODOLOGY_CARDS.map((card, i) => (
            <li key={card.title} className="contents">
              <ScrollReveal delay={i * 0.1} duration={0.5}>
                <article className="flex h-full flex-col rounded-2xl border border-navy/8 bg-cream p-6 transition-shadow duration-300 hover:shadow-md sm:p-8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy/5 text-navy-light">
                    {ICONS[card.icon]}
                  </div>
                  <h3 className="mt-5 font-serif text-lg font-semibold text-navy sm:text-xl">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-navy/55 sm:text-base">
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
