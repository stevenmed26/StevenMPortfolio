"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { projects } from "@/lib/projects";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
            Projects
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
            Technical case studies and builds
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Backend, cloud, desktop, and AI-oriented projects built to show architecture,
            systems thinking, and product-minded engineering.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.55,
                delay: 0.12 + index * 0.1,
                ease: "easeOut",
              }}
            >
              <Link
                href={`/projects/${project.slug}`}
                className="group block rounded-3xl border border-border/60 bg-card/70 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl"
              >
                <h2 className="text-xl font-semibold transition-colors duration-200 group-hover:text-primary">
                  {project.title}
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">{project.subtitle}</p>
                <p className="mt-4 text-sm leading-6 text-muted-foreground">
                  {project.summary}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}