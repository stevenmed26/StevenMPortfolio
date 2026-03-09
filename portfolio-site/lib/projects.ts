// src/lib/projects.ts
export type ProjectMeta = {
  slug: "autofarm" | "serpentlab" | "jobhunt";
  title: string;
  subtitle: string;
  summary: string;
  stack: string[];
  github?: string;
  demo?: string;
};

export const projects: ProjectMeta[] = [
  {
    slug: "autofarm",
    title: "AutoFarm",
    subtitle: "Distributed Simulation Platform",
    summary:
      "A distributed Go backend with gRPC services, async workers, Dockerized services, and real-time state streaming.",
    stack: ["Go", "gRPC", "Docker", "AWS", "Terraform", "WebSockets"],
    github: "https://github.com/stevenmed26/autofarm",
  },
  {
    slug: "serpentlab",
    title: "SerpentLab",
    subtitle: "RL / Systems Playground",
    summary:
      "A hybrid Go and Python environment for reinforcement learning experiments, simulation logic, and service boundaries.",
    stack: ["Go", "Python", "gRPC", "Docker", "RL"],
    github: "https://github.com/stevenmed26/serpentlab",
  },
  {
    slug: "jobhunt",
    title: "JobHunt",
    subtitle: "Backend-Driven Job Intelligence Tool",
    summary:
      "A desktop-oriented backend platform for ingesting job leads, deduplicating records, and exposing structured APIs.",
    stack: ["Go", "SQLite", "IMAP", "REST", "Tauri", "React"],
    github: "https://github.com/stevenmed26/jobhunt",
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}