import { notFound } from 'next/navigation';
import Shell from '@/components/Shell';
import ProjectDetail from '@/components/ProjectDetail';
import { projects } from '@/lib/data';

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title} — Aryan Singh`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const idx = projects.findIndex((p) => p.slug === slug);
  if (idx === -1) notFound();

  const project = projects[idx];
  const next = projects[(idx + 1) % projects.length];

  return (
    <Shell>
      <ProjectDetail project={project} next={next} />
    </Shell>
  );
}
