import { NAV_LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer
      className="border-t border-navy/8 bg-cream px-5 py-12 sm:px-6 lg:px-8"
      role="contentinfo"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <p className="font-serif text-lg font-semibold text-navy sm:text-xl">
          Two4One
        </p>

        <nav aria-label="Enlaces del pie de página">
          <ul
            className="flex flex-wrap items-center justify-center gap-5 sm:gap-8"
            role="list"
          >
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-navy/50 transition-colors duration-200 hover:text-navy/80"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <p className="text-xs text-navy/30 sm:text-sm">
          &copy; {new Date().getFullYear()} Two4One. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
}
