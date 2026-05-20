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
        <h2 className="font-serif text-xl font-bold text-primary">Algo salió mal</h2>
        <p className="mt-2 text-sm text-primary/60">
          No se pudieron cargar las preguntas.
        </p>
        <button onClick={reset} className="mt-4 inline-flex items-center h-10 rounded-lg bg-celeste px-6 text-sm font-semibold text-surface border-none cursor-pointer transition-colors hover:bg-primary">
          Reintentar
        </button>
      </div>
    </div>
  );
}
