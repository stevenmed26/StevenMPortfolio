"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, Download, Github, Linkedin, Server, Sparkles } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const featuredProjects = [
  {
    name: "AutoFarm",
    blurb: "Distributed Go microservices simulation platform with gRPC, Docker, and cloud deployment patterns.",
  },
  {
    name: "SerpentLab",
    blurb: "Go + Python reinforcement learning playground with service boundaries, training loops, and experiment workflows.",
  },
  {
    name: "JobHunt",
    blurb: "Desktop job intelligence platform with scraping, structured pipelines, and a product-minded UI.",
  },
];

const stack = ["Go", "AWS", "Docker", "Terraform", "gRPC", "React", "TypeScript"];

export default function PortfolioHero() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-0 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-primary/12 blur-3xl" />
          <div className="absolute right-[-8rem] top-32 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
          <div className="absolute left-[-8rem] bottom-0 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:72px_72px] opacity-[0.14]" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-background" />
        </div>

        <div className="mx-auto grid min-h-screen max-w-7xl grid-cols-1 gap-10 px-6 py-20 lg:grid-cols-[1.2fr_0.8fr] lg:px-10 lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex flex-col justify-center"
          >
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="mb-6 flex flex-wrap items-center gap-3"
            >
              <Badge className="rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-sm text-primary hover:bg-primary/10">
                <Sparkles className="mr-2 h-3.5 w-3.5" />
                Backend • Cloud • Distributed Systems
              </Badge>
              <Badge variant="outline" className="rounded-full px-4 py-1 text-sm">
                Open to backend and platform roles
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
              className="max-w-4xl text-balance text-4xl font-semibold tracking-tight sm:text-5xl lg:text-7xl"
            >
              Steven Mediterraneo builds
              <span className="block bg-gradient-to-r from-foreground via-foreground to-primary bg-clip-text text-transparent">
                reliable systems with product polish.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.22, ease: "easeOut" }}
              className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl"
            >
              I design and build backend, cloud, and platform-focused software with an emphasis on clean architecture,
              observability, and real-world engineering tradeoffs. This portfolio highlights the systems I have built,
              the decisions behind them, and how I think as an engineer.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
              className="mt-8 flex flex-col gap-4 sm:flex-row"
            >
              <Button asChild size="lg" className="group rounded-2xl px-6 text-base shadow-lg shadow-primary/20">
                <Link href="/projects">
                  View Projects
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-2xl px-6 text-base">
                <Link href="/resume">
                  <Download className="mr-2 h-4 w-4" />
                  Resume
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.38, ease: "easeOut" }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <Button asChild variant="ghost" className="rounded-xl px-3">
                <Link href="https://github.com/stevenmed26" target="_blank" rel="noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </Link>
              </Button>
              <Button asChild variant="ghost" className="rounded-xl px-3">
                <Link href="https://www.linkedin.com/in/steven-mediterraneo" target="_blank" rel="noreferrer">
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.48, ease: "easeOut" }}
              className="mt-10 flex flex-wrap gap-2"
            >
              {stack.map((item) => (
                <Badge key={item} variant="secondary" className="rounded-full px-4 py-1.5 text-sm">
                  {item}
                </Badge>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex items-center"
          >
            <div className="w-full space-y-5">
              <Card className="overflow-hidden rounded-3xl border-white/10 bg-white/5 shadow-2xl backdrop-blur-xl">
                <CardContent className="p-0">
                  <div className="border-b border-border/60 px-6 py-4">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="text-sm text-muted-foreground">Engineer Snapshot</p>
                        <h2 className="mt-1 text-xl font-semibold">Systems-minded builder</h2>
                      </div>
                      <div className="rounded-2xl border border-primary/20 bg-primary/10 p-3 text-primary">
                        <Server className="h-5 w-5" />
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-4 p-6">
                    <div className="grid grid-cols-2 gap-4">
                      <StatCard label="Focus" value="Backend + Platform" />
                      <StatCard label="Primary Language" value="Go" />
                      <StatCard label="Specialty" value="Distributed Systems" />
                      <StatCard label="Strength" value="Product + Infra" />
                    </div>

                    <div className="rounded-2xl border border-border/60 bg-background/70 p-4">
                      <p className="text-sm font-medium">Featured Work</p>
                      <div className="mt-4 space-y-3">
                        {featuredProjects.map((project, index) => (
                          <motion.div
                            key={project.name}
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.55, delay: 0.45 + index * 0.08, ease: "easeOut" }}
                            className="group rounded-2xl border border-border/60 bg-background/80 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg"
                          >
                            <div className="flex items-start justify-between gap-3">
                              <div>
                                <p className="font-medium">{project.name}</p>
                                <p className="mt-1 text-sm leading-6 text-muted-foreground">{project.blurb}</p>
                              </div>
                              <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 group-hover:translate-x-1 group-hover:text-primary" />
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
    
  );
}

type StatCardProps = {
  label: string;
  value: string;
};

function StatCard({ label, value }: StatCardProps) {
  return (
    <div className="rounded-2xl border border-border/60 bg-background/70 p-4">
      <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{label}</p>
      <p className="mt-2 text-sm font-medium leading-6">{value}</p>
    </div>
  );
}

