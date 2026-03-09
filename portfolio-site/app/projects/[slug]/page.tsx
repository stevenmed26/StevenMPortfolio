import { notFound } from "next/navigation";

import ProjectPageShell from "@/components/projects/project-page-shell";
import { getProjectBySlug, projects } from "@/lib/projects";

const projectContent = {
  autofarm: () => import("@/content/projects/autofarm.mdx"),
  serpentlab: () => import("@/content/projects/serpentlab.mdx"),
  jobhunt: () => import("@/content/projects/jobhunt.mdx"),
};

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  const importer = projectContent[slug as keyof typeof projectContent];
  if (!importer) notFound();

  const MDXContent = (await importer()).default;

  return (
    <ProjectPageShell project={project}>
      <MDXContent />
    </ProjectPageShell>
  );
}