import ScrollReveal from "@/components/ui/scroll-reveal";
import Image from "next/image";

interface Figure {
  name: string;
  image: string;
  quote: string;
}

const FIGURES: Figure[] = [
  {
    name: "Manuel Belgrano",
    image: "/belgrano2.webp",
    quote: "Un pueblo culto nunca puede ser esclavizado.",
  },
  {
    name: "Cornelio Saavedra",
    image: "/saavedra2.webp",
    quote:
      "Y no quede duda de que es el pueblo el que confiere la autoridad o mando.",
  },
  {
    name: "Mariano Moreno",
    image: "/moreno2.webp",
    quote: "Quiero más una libertad peligrosa que una servidumbre tranquila.",
  },
];

export default function FiguresSection() {
  return (
    <section className="relative flex flex-col items-center justify-center py-20 px-5 text-center bg-surface sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[60rem] w-full">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10 [&>:last-child]:sm:col-span-2 [&>:last-child]:sm:justify-self-center [&>:last-child]:sm:max-w-[22rem] [&>:last-child]:sm:w-full [&>:last-child]:lg:col-span-1 [&>:last-child]:lg:justify-self-auto [&>:last-child]:lg:max-w-none">
          {FIGURES.map((figure, i) => (
            <ScrollReveal key={figure.name} delay={i * 0.12}>
              <div className="flex flex-col items-center">
                <p className="font-serif text-xl font-bold text-primary mb-5 inline-block relative sm:text-[1.375rem] lg:text-xl after:block after:w-8 after:h-0.5 after:mx-auto after:mt-2 after:bg-gold">
                  {figure.name}
                </p>

                <Image
                  className="object-contain"
                  src={figure.image}
                  alt={`Retrato de ${figure.name}`}
                  width={220}
                  height={320}
                  sizes="(max-width: 640px) 200px, 220px"
                  loading="lazy"
                />

                <blockquote className="mt-5">
                  <p className="font-serif text-sm italic leading-[1.7] text-primary/80 m-0 sm:text-[15px]">
                    &ldquo;{figure.quote}&rdquo;
                  </p>
                </blockquote>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
