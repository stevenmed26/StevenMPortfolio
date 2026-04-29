// src/lib/projects.ts
export type ProjectMeta = {
  slug: "autofarm" | "serpentlab" | "jobhunt" | "investify" | "mybudget";
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
    subtitle: "Desktop Job Intelligence & Auto Apply Platform",
    summary:
      "A Tauri desktop app with a Go engine backend for multi-source job scraping, YAML-driven scoring, and an AI-assisted Auto Apply pipeline powered by Playwright and Groq.",
    stack: ["Go", "SQLite", "React", "TypeScript", "Tauri", "Playwright", "Groq AI", "IMAP", "REST"],
    github: "https://github.com/stevenmed26/JobHunt",
  },
  {
    slug: "investify",
    title: "Investify",
    subtitle: "Market Intelligence & ML Prediction Platform",
    summary:
      "A full-stack investing platform with a Go API, FastAPI ML service, Next.js dashboard, technical feature pipelines, and daily stock prediction workflows.",
    stack: ["Go", "PostgreSQL", "FastAPI", "Python", "scikit-learn", "Next.js", "React", "Docker"],
    github: "https://github.com/stevenmed26/Investify",
  },
  {
    slug: "mybudget",
    title: "myBudget",
    subtitle: "Mobile Budgeting & Personal Finance Platform",
    summary:
      "A mobile-first budgeting app with a Go backend, Expo React Native client, JWT auth, recurring payments, analytics, tax-aware tracking, and smart category recommendations.",
    stack: ["Go", "PostgreSQL", "Expo", "React Native", "TypeScript", "JWT", "Analytics"],
    github: "https://github.com/stevenmed26/myBudget",
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
