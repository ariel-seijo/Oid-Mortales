"use client";

export default function TestError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-screen items-center justify-center px-5">
      <div className="text-center">
        <h2 className="font-serif text-xl font-bold text-navy">
          Algo salió mal
        </h2>
        <p className="mt-2 text-sm text-navy/60">
          No se pudieron cargar las preguntas.
        </p>
        <button
          onClick={reset}
          className="mt-4 inline-flex h-10 items-center rounded-lg bg-navy px-6 text-sm font-semibold text-cream transition-colors hover:bg-navy-light"
        >
          Reintentar
        </button>
      </div>
    </div>
  );
}
