"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type ProjectPageShellProps = {
  project: {
    title: string;
    subtitle: string;
    summary: string;
    stack: string[];
    github?: string;
    demo?: string;
  };
  children: React.ReactNode;
};

export default function ProjectPageShell({
  project,
  children,
}: ProjectPageShellProps) {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="mx-auto max-w-5xl px-6 py-16 md:py-20">
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <Button asChild variant="ghost" className="mb-8 rounded-xl px-0 hover:bg-transparent">
            <Link href="/projects">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Link>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
            Project
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
            {project.title}
          </h1>
          <p className="mt-3 text-lg text-muted-foreground">{project.subtitle}</p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            {project.summary}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.12, ease: "easeOut" }}
          className="mt-8 flex flex-wrap gap-2"
        >
          {project.stack.map((item) => (
            <Badge key={item} variant="secondary" className="rounded-full px-4 py-1.5">
              {item}
            </Badge>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.2, ease: "easeOut" }}
          className="mt-8 flex flex-wrap gap-4"
        >
          {project.github && (
            <Button asChild className="rounded-2xl">
              <Link href={project.github} target="_blank" rel="noreferrer">
                <Github className="mr-2 h-4 w-4" />
                View Code
              </Link>
            </Button>
          )}

          {project.demo && (
            <Button asChild variant="outline" className="rounded-2xl">
              <Link href={project.demo} target="_blank" rel="noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                Demo
              </Link>
            </Button>
          )}
        </motion.div>

        <motion.article
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.28, ease: "easeOut" }}
          className="prose prose-invert mt-12 max-w-none"
        >
          {children}
        </motion.article>
      </section>
    </main>
  );
}