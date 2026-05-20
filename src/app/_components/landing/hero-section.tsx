import ScrollReveal from "@/components/ui/scroll-reveal";
import RotatingText from "@/components/ui/rotating-text";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      className="relative flex flex-col items-center justify-center h-screen pt-24 pb-16 px-5 text-center bg-white bg-[radial-gradient(circle,rgba(255,255,255,1)_0%,rgba(38,154,217,0.56)_100%)] sm:px-6 lg:px-8"
      aria-labelledby="hero-heading"
    >
      <div className="mx-auto max-w-3xl">
        <ScrollReveal>
          <span className="inline-block rounded-full border border-primary/15 bg-surface-card py-1.5 px-4 text-xs font-medium tracking-wider text-primary-hover uppercase sm:text-sm">
            Test de Nivelación
          </span>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h1
            id="hero-heading"
            className="mt-6 font-serif text-3xl leading-tight font-semibold text-primary sm:text-4xl md:text-5xl md:leading-none lg:text-6xl lg:leading-none"
          >
            Descubre cuál es tu{" "}
            <RotatingText
              texts={["NIVEL DE INGLÉS", "HISTORIA"]}
              interval={3500}
              className="text-[#40aae4]"
            />
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="mt-5 text-base leading-relaxed text-primary/80 sm:text-lg">
            Dos herramientas clave para todo ciudadano argentino.
          </p>
          <p className="text-base leading-relaxed text-primary/80 sm:text-lg">
            Al alcance de todos, al mismo tiempo y en un solo lugar.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.35}>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/test"
              className="inline-flex items-center justify-center h-12 w-full rounded-lg bg-gradient-to-r from-[#0085cc] to-[#40aae4] px-7 text-sm font-semibold text-surface no-underline transition-all duration-300 hover:from-[#0271ad] hover:to-[#358ab8] hover:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-4px_rgba(0,0,0,0.1)] sm:w-auto"
              aria-label="Comenzar test de nivelación"
            >
              Comenzar test
            </Link>
            <a
              href="#metodologia"
              className="inline-flex items-center justify-center h-12 w-full rounded-lg border border-primary/20 bg-transparent px-7 text-sm font-semibold text-primary no-underline transition-all duration-300 hover:border-primary/40 hover:bg-white sm:w-auto"
              aria-label="Conocer metodología académica — ir a sección de metodología"
            >
              Conocer metodología
            </a>
          </div>
        </ScrollReveal>
      </div>

      <ScrollReveal delay={0.5} className="mt-16" aria-hidden="true">
        <div className="h-10 w-5 rounded-full border-2 border-primary/15">
          <div className="mt-2 mx-auto h-1.5 w-0.5 rounded-full bg-primary/25" />
        </div>
      </ScrollReveal>
    </section>
  );
}
