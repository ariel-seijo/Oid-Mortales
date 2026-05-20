import { NAV_LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-primary/8 bg-surface py-12 px-5 sm:px-6 lg:px-8" role="contentinfo">
      <div className="mx-auto flex flex-col items-center justify-between gap-6 max-w-6xl sm:flex-row">
        <p className="font-serif text-lg font-semibold text-primary m-0 sm:text-xl">
          Oíd Mortales
        </p>

        <nav aria-label="Enlaces del pie de página">
          <ul className="flex flex-wrap items-center justify-center gap-5 list-none m-0 p-0 sm:gap-8" role="list">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-primary/50 no-underline transition-colors hover:text-primary/80"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <p className="text-xs text-primary/30 m-0 sm:text-sm">
          &copy; {new Date().getFullYear()} Oíd Mortales. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
}
