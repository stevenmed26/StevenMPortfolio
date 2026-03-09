import Link from "next/link";
import { Download } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const skillGroups = {
  Languages: ["Go (Golang)", "Python", "Java", "TypeScript", "C#"],
  Backend: ["REST APIs", "gRPC", "WebSockets", "Microservices", "Background Workers"],
  Data: ["PostgreSQL", "SQLite", "MongoDB"],
  "Cloud & DevOps": ["Docker", "Kubernetes", "GitHub Actions", "Linux", "Terraform", "AWS"],
  Observability: ["Logging", "Metrics", "Tracing", "Prometheus", "Grafana", "ELK"],
  Concepts: ["Distributed Systems", "Concurrency", "API Design", "IaC", "Asynchronous Processing"],
};

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="mx-auto max-w-5xl px-6 py-16 md:py-20">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
              Curriculum Vitae
            </p>

            <h1 className="mt-2 text-4xl font-semibold tracking-tight sm:text-5xl">
              Steven Mediterraneo
            </h1>

            <p className="mt-3 text-lg text-muted-foreground">
              Backend Software Engineer
            </p>

            <p className="mt-2 text-sm text-muted-foreground">
              Go • Distributed Systems • APIs • Data Pipelines • Cloud
            </p>

            <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted-foreground">
              <span>817-996-9869</span>
              <span>stevenmediterraneo@gmail.com</span>
              <Link
                href="https://www.linkedin.com/in/steven-mediterraneo"
                target="_blank"
                rel="noreferrer"
                className="hover:text-foreground"
              >
                LinkedIn
              </Link>
              <Link
                href="https://github.com/stevenmed26"
                target="_blank"
                rel="noreferrer"
                className="hover:text-foreground"
              >
                GitHub
              </Link>
            </div>
          </div>

          <Button asChild className="rounded-2xl">
            <Link href="/Steven_Mediterraneo_Resume.pdf" target="_blank">
              <Download className="mr-2 h-4 w-4" />
              Download One-Page Resume
            </Link>
          </Button>
        </div>

        <Card className="mt-10 rounded-3xl border-border/60 bg-card/70">
          <CardContent className="p-6 leading-7 text-muted-foreground">
            Backend Software Engineer specializing in production-grade backend
            systems built in Go and Python. I design and operate APIs,
            ingestion pipelines, validation tooling, and asynchronous workers
            with an emphasis on reliability, idempotency, observability, and
            clean system boundaries. This page expands beyond the one-page
            resume to provide additional project and experience context.
          </CardContent>
        </Card>

        <div className="mt-14">
          <h2 className="text-xl font-semibold">Technical Skills</h2>

          <div className="mt-6 space-y-6">
            {Object.entries(skillGroups).map(([group, items]) => (
              <div key={group}>
                <h3 className="text-sm font-medium uppercase tracking-[0.16em] text-muted-foreground">
                  {group}
                </h3>

                <div className="mt-3 flex flex-wrap gap-2">
                  {items.map((item) => (
                    <Badge
                      key={item}
                      variant="secondary"
                      className="rounded-full px-4 py-1.5"
                    >
                      {item}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14">
          <h2 className="text-xl font-semibold">Experience</h2>

          <div className="mt-6 space-y-6">
            <Card className="rounded-3xl border-border/60 bg-card/70">
              <CardContent className="p-6">
                <div className="flex flex-col gap-1 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">
                      Backend Software Engineer
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Digi International • Plano, TX
                    </p>
                  </div>

                  <p className="text-sm text-muted-foreground">
                    April 2024 – September 2025
                  </p>
                </div>

                <ul className="mt-4 list-disc space-y-2 pl-5 text-muted-foreground">
                  <li>
                    Designed and maintained Go backend validation services that
                    exercised gRPC and REST APIs, verified JSON contracts, and
                    detected ingestion defects in asynchronous processing
                    pipelines.
                  </li>
                  <li>
                    Deployed AWS infrastructure using Terraform, including EKS
                    services to support CI/CD pipelines and staging environments
                    for backend services.
                  </li>
                  <li>
                    Investigated backend reliability issues using Prometheus
                    metrics and centralized service logs to diagnose timing drift
                    and state desynchronization across distributed services,
                    improving ingestion correctness and repeatability.
                  </li>
                  <li>
                    Built Python diagnostic tooling and automated regression
                    workflows to surface backend regressions early, reducing
                    manual verification and improving release confidence.
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="rounded-3xl border-border/60 bg-card/70">
              <CardContent className="p-6">
                <div className="flex flex-col gap-1 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">
                      Software Engineer (Project Lead)
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Critical Designs • College Station, TX
                    </p>
                  </div>

                  <p className="text-sm text-muted-foreground">
                    August 2022 – May 2023
                  </p>
                </div>

                <ul className="mt-4 list-disc space-y-2 pl-5 text-muted-foreground">
                  <li>
                    Developed a real-time event processing system in Go that
                    generated structured telemetry and streamed it to backend
                    services for live training workflows.
                  </li>
                  <li>
                    Displayed live metrics in a React frontend dashboard with
                    TypeScript and Node.js, enabling live monitoring of system
                    performance and event flow.
                  </li>
                  <li>
                    Collaborated with a multidisciplinary engineering team to integrate
                    backend services with simulation software and hardware telemetry
                    sources.
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="rounded-3xl border-border/60 bg-card/70">
              <CardContent className="p-6">
                <div className="flex flex-col gap-1 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">
                      Software Engineering Intern
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      AZZ • Fort Worth, TX
                    </p>
                  </div>

                  <p className="text-sm text-muted-foreground">
                    May 2022 - August 2022
                  </p>
                </div>

                <ul className="mt-4 list-disc space-y-2 pl-5 text-muted-foreground">
                  <li>
                    Designed backend scripts and services to process engineering 
                    data pipelines, improving traceability and repeatability of 
                    operational metrics.
                  </li>
                  <li>
                    Implemented data validation and transformation pipelines to 
                    normalize inputs across internal systems and improve downstream 
                    reliability.
                  </li>
                  <li>
                    Collaborated with engineering teams to analyze logs, debug 
                    backend system behavior, and improve overall service stability.
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-14">
          <h2 className="text-xl font-semibold">Selected Engineering Projects</h2>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <Card className="rounded-3xl border-border/60 bg-card/70">
              <CardContent className="p-6">
                <div className="flex flex-col gap-1">
                  <h3 className="font-semibold">
                    JobHunt — Backend Engineer / System Owner
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Go, SQLite, IMAP, REST, Tauri, React • 2025 – Present
                  </p>
                </div>

                <ul className="mt-4 list-disc space-y-2 pl-5 text-muted-foreground">
                  <li>
                    Designed and operated a backend ingestion pipeline that
                    processes job leads from IMAP and web sources; implemented
                    idempotent ingestion, deduplication, and safe reprocessing
                    to support repeatable scheduled runs.
                  </li>
                  <li>
                    Built configurable scoring and filtering logic and exposed
                    REST APIs consumed by a desktop client; emphasized
                    debuggability, failure isolation, and deterministic behavior
                    across runs.
                  </li>
                </ul>

                <Link
                  href="/projects/jobhunt"
                  className="mt-4 inline-block text-sm text-primary hover:underline"
                >
                  View Case Study →
                </Link>
              </CardContent>
            </Card>

            <Card className="rounded-3xl border-border/60 bg-card/70">
              <CardContent className="p-6">
                <div className="flex flex-col gap-1">
                  <h3 className="font-semibold">
                    AutoFarm — Distributed Simulation Platform
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Go, gRPC, Docker, AWS, Terraform • 2024 – Present
                  </p>
                </div>

                <ul className="mt-4 list-disc space-y-2 pl-5 text-muted-foreground">
                  <li>
                    Architected a distributed Go backend exposing gRPC APIs and
                    real-time WebSocket events, with asynchronous workers and
                    Dockerized services designed for low-latency state
                    propagation.
                  </li>
                  <li>
                    Designed asynchronous worker pipelines responsible for task
                    scheduling, state propagation, and event processing across services,
                    emphasizing deterministic state transitions and reproducible
                    simulations.
                  </li>
                </ul>

                <Link
                  href="/projects/autofarm"
                  className="mt-4 inline-block text-sm text-primary hover:underline"
                >
                  View Case Study →
                </Link>
              </CardContent>
            </Card>

            <Card className="rounded-3xl border-border/60 bg-card/70 md:col-span-2">
              <CardContent className="p-6">
                <div className="flex flex-col gap-1">
                  <h3 className="font-semibold">
                    SerpentLab — Reinforcement Learning / Systems Playground
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Go, Python, gRPC, Docker, RL • Ongoing
                  </p>
                </div>

                <ul className="mt-4 list-disc space-y-2 pl-5 text-muted-foreground">
                  <li>
                    Built a hybrid Go and Python project around a snake-game
                    reinforcement learning environment to explore experiment
                    workflows, simulation boundaries, and AI-oriented systems
                    design.
                  </li>
                  <li>
                    Separated training logic, simulation behavior, and service
                    communication concerns to make experimentation more modular
                    and easier to extend.
                  </li>
                </ul>

                <Link
                  href="/projects/serpentlab"
                  className="mt-4 inline-block text-sm text-primary hover:underline"
                >
                  View Case Study →
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-14">
          <h2 className="text-xl font-semibold">Education</h2>

          <div className="mt-6 space-y-6">
            <Card className="rounded-3xl border-border/60 bg-card/70">
              <CardContent className="p-6">
                <div className="flex flex-col gap-1 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="font-semibold">
                      Master of Science in Computer Science Engineering
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Texas A&amp;M University • College Station, TX
                    </p>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Focus in Distributed Systems &amp; Cloud Architecture
                    </p>
                  </div>

                  <p className="text-sm text-muted-foreground">
                    August 2025 – Present
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-3xl border-border/60 bg-card/70">
              <CardContent className="p-6">
                <div className="flex flex-col gap-1 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="font-semibold">
                      Bachelor of Science in Multidisciplinary Engineering Technology
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Texas A&amp;M University • College Station, TX
                    </p>
                  </div>

                  <p className="text-sm text-muted-foreground">
                    August 2019 – May 2023
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}