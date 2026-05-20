import Link from "next/link";
import ScrollReveal from "@/components/ui/scroll-reveal";
import ComparisonCards from "./comparison-cards";

export default function PillarsSection() {
  return (
    <section
      id="pilares"
      className="scroll-mt-20 py-20 px-5 bg-surface sm:py-28 sm:px-6 lg:px-8"
      aria-labelledby="pillars-heading"
    >
      <div className="mx-auto max-w-6xl">
        <ScrollReveal className="text-center">
          <h2 id="pillars-heading" className="font-serif text-2xl font-bold text-primary sm:text-3xl md:text-4xl">
            Dos pilares, un método
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-base leading-relaxed text-primary/80 sm:text-lg">
            Aprendé inglés mientras repasás los episodios más característicos de nuestra historia. Aprendizaje doble. Mismo tiempo invertido.
          </p>
        </ScrollReveal>

        <ComparisonCards />

        <ScrollReveal delay={0.3} className="mt-10 text-center">
          <Link
            href="/test"
            className="inline-flex items-center justify-center h-12 rounded-lg bg-gradient-to-r from-[#0085cc] to-[#40aae4] px-7 text-sm font-semibold text-surface no-underline transition-all duration-300 hover:from-[#0271ad] hover:to-[#358ab8] hover:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-4px_rgba(0,0,0,0.1)] sm:h-14 sm:px-10 sm:text-base"
          >
            Comenzar test nivelatorio
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
