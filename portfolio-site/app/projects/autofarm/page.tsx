import Link from "next/link";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const stack = ["Go", "gRPC", "Docker", "AWS", "Terraform", "Helm", "WebSockets"];
const highlights = [
  "Designed a distributed simulation platform using Go microservices.",
  "Modeled service-to-service communication with gRPC.",
  "Built containerized workflows for local and cloud deployment.",
  "Focused on backend architecture, orchestration, and observability patterns.",
];

export default function AutoFarmPage() {
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
          <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">AutoFarm</h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            AutoFarm is a distributed Go microservices simulation platform built to showcase
            backend system design, inter-service communication, deployment workflows, and
            cloud-native engineering patterns.
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
            <Link href="https://github.com/stevenmed26/autofarm" target="_blank" rel="noreferrer">
              <Github className="mr-2 h-4 w-4" />
              View Code
            </Link>
          </Button>

          <Button asChild variant="outline" className="rounded-2xl">
            <Link href="#" target="_blank" rel="noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              Live Demo
            </Link>
          </Button>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <Card className="rounded-3xl border-border/60 bg-card/70">
            <CardHeader>
              <CardTitle>Overview</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground leading-7">
              AutoFarm was designed as a portfolio-grade backend platform that demonstrates how
              distributed services can communicate, scale, and be managed in a realistic system.
              The project emphasizes clean boundaries, infrastructure awareness, and extensibility.
            </CardContent>
          </Card>

          <Card className="rounded-3xl border-border/60 bg-card/70">
            <CardHeader>
              <CardTitle>Architecture Focus</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground leading-7">
              The system centers around Go services communicating through gRPC, with containerized
              local development and infrastructure workflows intended to mirror production-minded
              deployment patterns.
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
            This project shows how I think about distributed backend systems beyond isolated code.
            It reflects decisions around service boundaries, deployment ergonomics, infrastructure,
            and long-term maintainability.
          </CardContent>
        </Card>
      </section>
    </main>
  );
}