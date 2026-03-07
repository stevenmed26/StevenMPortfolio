import Link from "next/link";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const stack = ["Go", "Tauri", "React", "TypeScript", "SQLite", "SSE"];
const highlights = [
  "Built a desktop job intelligence platform focused on aggregation and workflow efficiency.",
  "Integrated scraping and structured ingestion pipelines for multiple job sources.",
  "Used Go for backend logic and Tauri/React for a lightweight desktop UI.",
  "Designed the project with a strong product mindset and usability focus.",
];

export default function JobHuntPage() {
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
          <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">JobHunt</h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            JobHunt is a desktop job intelligence platform built to aggregate listings, structure
            application workflows, and present useful information through a product-oriented UI
            backed by Go services and modern desktop tooling.
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
            <Link href="https://github.com/stevenmed26/jobhunt" target="_blank" rel="noreferrer">
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
              JobHunt was built to solve a real workflow problem: aggregating applications and job
              data into one place. The project emphasizes practical software design, structured
              ingestion, and a UI shaped around actual use.
            </CardContent>
          </Card>

          <Card className="rounded-3xl border-border/60 bg-card/70">
            <CardHeader>
              <CardTitle>Architecture Focus</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground leading-7">
              The app combines Go backend workflows with a Tauri and React front end, allowing
              desktop-native performance while keeping the product flexible and maintainable.
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
            JobHunt demonstrates product thinking alongside backend engineering. It shows how I
            approach tooling, user workflows, structured data pipelines, and cross-stack
            development in a practical project.
          </CardContent>
        </Card>
      </section>
    </main>
  );
}