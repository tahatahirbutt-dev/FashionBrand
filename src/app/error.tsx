"use client";

export default function Error({
  reset,
}: {
  reset: () => void;
}) {
  return (
    <main className="flex min-h-[50vh] items-center justify-center bg-background px-6 text-center text-foreground">
      <div>
        <p className="text-sm uppercase tracking-[0.3em] text-accent">
          Something went wrong
        </p>
        <h1 className="mt-4 font-heading text-4xl">Please try again</h1>
        <button
          type="button"
          onClick={reset}
          className="mt-8 bg-brand px-6 py-4 text-xs uppercase tracking-widest text-background hover:opacity-90"
        >
          Try again
        </button>
      </div>
    </main>
  );
}
