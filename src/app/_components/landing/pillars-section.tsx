import dynamic from "next/dynamic";
import ScrollReveal from "@/components/ui/scroll-reveal";
import { PrimaryCTA } from "@/components/ui/primary-cta";

const ComparisonCards = dynamic(
  () => import("./comparison-cards"),
  {
    loading: () => (
      <div className="mt-12 min-h-[360px] flex items-center justify-center">
        <div className="h-8 w-8 rounded-full border-2 border-primary/12 border-t-celeste animate-spin" />
      </div>
    ),
  },
);

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
          <PrimaryCTA href="/test">
            Comenzar test nivelatorio
          </PrimaryCTA>
        </ScrollReveal>
      </div>
    </section>
  );
}
