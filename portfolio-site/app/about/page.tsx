export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="mx-auto max-w-5xl px-6 py-16 md:py-20">
        <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">About</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
          About Me
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
          I am a backend and systems-focused engineer with experience building
          software across embedded, cloud, and product-oriented environments.
        </p>
      </section>
    </main>
  );
}