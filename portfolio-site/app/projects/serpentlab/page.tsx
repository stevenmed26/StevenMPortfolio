import Link from "next/link";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const stack = ["Go", "Python", "gRPC", "Docker", "RL", "AI"];
const highlights = [
  "Combined Go systems programming with Python-based reinforcement learning workflows.",
  "Separated simulation and training concerns across service boundaries.",
  "Created an environment for experimentation, iteration, and evaluation.",
  "Used the project to explore applied AI through a backend and systems lens.",
];

export default function SerpentLabPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="mx-auto max-w-5xl px-6 py-16 md:py-20">
        <div className="mb-8">
          <Button asChild variant="ghost" className="rounded-xl px-0 hover:bg-transparent">
            <Link href="/projects">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Link>
          </Button>
        </div>

        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Project</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">SerpentLab</h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            SerpentLab is a hybrid Go and Python project built around a snake-game reinforcement
            learning environment, designed to explore experiment workflows, service boundaries,
            and AI-oriented system design.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {stack.map((item) => (
            <Badge key={item} variant="secondary" className="rounded-full px-4 py-1.5">
              {item}
            </Badge>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
          <Button asChild className="rounded-2xl">
            <Link href="https://github.com/stevenmed26/serpentlab" target="_blank" rel="noreferrer">
              <Github className="mr-2 h-4 w-4" />
              View Code
            </Link>
          </Button>

          <Button asChild variant="outline" className="rounded-2xl">
            <Link href="#" target="_blank" rel="noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              Demo
            </Link>
          </Button>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <Card className="rounded-3xl border-border/60 bg-card/70">
            <CardHeader>
              <CardTitle>Overview</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground leading-7">
              SerpentLab was built as a technical playground for combining backend engineering
              patterns with reinforcement learning experimentation. It is both a learning platform
              and a systems design exercise.
            </CardContent>
          </Card>

          <Card className="rounded-3xl border-border/60 bg-card/70">
            <CardHeader>
              <CardTitle>Architecture Focus</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground leading-7">
              The project explores how simulation logic, training loops, and evaluation workflows
              can be split cleanly across language and service boundaries while still supporting
              rapid experimentation.
            </CardContent>
          </Card>
        </div>

        <Card className="mt-6 rounded-3xl border-border/60 bg-card/70">
          <CardHeader>
            <CardTitle>Key Highlights</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-border/60 bg-background/60 p-4 text-muted-foreground"
                >
                  {item}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="mt-6 rounded-3xl border-border/60 bg-card/70">
          <CardHeader>
            <CardTitle>Why It Matters</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground leading-7">
            SerpentLab shows that I can work across backend engineering and experimental AI
            workflows while keeping the project structured, modular, and grounded in software
            engineering principles.
          </CardContent>
        </Card>
      </section>
    </main>
  );
}