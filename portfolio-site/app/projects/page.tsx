import Link from "next/link";

const projects = [
  {
    slug: "autofarm",
    title: "AutoFarm",
    description:
      "Distributed Go microservices simulation platform with gRPC, Docker, and cloud deployment patterns.",
    stack: ["Go", "gRPC", "Docker", "Terraform"],
  },
  {
    slug: "serpentlab",
    title: "SerpentLab",
    description:
      "Go + Python reinforcement learning playground with service boundaries, training loops, and experiment workflows.",
    stack: ["Go", "Python", "RL"],
  },
  {
    slug: "jobhunt",
    title: "JobHunt",
    description:
      "Desktop job intelligence platform with scraping, structured pipelines, and a product-minded UI.",
    stack: ["Go", "Tauri", "React", "TypeScript"],
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
            Projects
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
            Technical case studies and builds
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            A selection of systems, tools, and product-focused engineering work
            spanning backend services, cloud infrastructure, desktop apps, and
            applied AI.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group rounded-3xl border border-border/60 bg-card/70 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-card"
            >
              <div className="flex items-start justify-between gap-4">
                <h2 className="text-xl font-semibold">{project.title}</h2>
                <span className="text-muted-foreground transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </div>

              <p className="mt-4 text-sm leading-6 text-muted-foreground">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-border/60 bg-background/80 px-3 py-1 text-xs text-muted-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}