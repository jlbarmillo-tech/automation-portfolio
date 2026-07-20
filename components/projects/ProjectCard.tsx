import type { PortfolioProject } from '@/content/portfolio-projects';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

type ProjectCardProps = {
  project: PortfolioProject;
};

const platformBadges: Record<string, string> = {
  GoHighLevel: '🟢 GoHighLevel',
  n8n: '🟣 n8n',
  Zapier: '🟠 Zapier',
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group h-full overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 shadow-lg shadow-black/15 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/60 hover:shadow-xl hover:shadow-emerald-950/20">
      <div className="p-6 pb-5">
        <span className="w-fit rounded-full border border-zinc-700 bg-zinc-950/60 px-3 py-1 text-xs font-medium text-zinc-200">
          {platformBadges[project.platform] ?? project.platform}
        </span>
        <span className="mt-3 block w-fit rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300">
          {project.category}
        </span>
      </div>

      <div className="relative aspect-[16/9] overflow-hidden border-y border-zinc-800 bg-zinc-950">
      <Image
  src={(project as any).coverImage ?? project.workflowImage}
  alt={`${project.title} project cover`}
  fill
  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
  className="object-cover transition-transform duration-500 group-hover:scale-105"
/>
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/0 opacity-0 transition-all duration-300 group-hover:bg-black/60 group-hover:opacity-100">

  <div className="rounded-full bg-emerald-500 px-5 py-2 text-sm font-semibold text-white shadow-lg">
    ▶ View Project
  </div>

  <p className="mt-4 text-sm text-zinc-200">
    AI Workflow Preview
  </p>

</div>
      </div>

      <div className="flex min-h-64 flex-col p-6">
        <h3 className="text-xl font-bold tracking-tight text-white group-hover:text-emerald-400 transition-colors">{project.title}</h3>
        <p className="mt-3 text-sm leading-6 text-zinc-400">{project.description}</p>

        <div className="mt-6 space-y-3">

  <div className="flex items-center justify-between rounded-lg border border-zinc-800 bg-zinc-950/50 px-3 py-2">

    <span className="text-sm text-zinc-400">
      Platform
    </span>

    <span className="font-semibold text-white">
      {project.platform}
    </span>

  </div>

  <div className="flex items-center justify-between rounded-lg border border-zinc-800 bg-zinc-950/50 px-3 py-2">

    <span className="text-sm text-zinc-400">
      Category
    </span>

    <span className="font-semibold text-white">
      {project.category}
    </span>

  </div>

  <div className="flex flex-wrap gap-2 pt-2">
    {project.technologies.slice(0, 4).map((technology) => (
      <span
        key={technology}
        className="rounded-full border border-zinc-700 bg-zinc-950 px-3 py-1 text-xs text-zinc-300"
      >
        {technology}
      </span>
    ))}
  </div>

</div>

        <Link
          href={`/projects/${project.slug}`}
          aria-label={`View case study for ${project.title}`}
          className="mt-auto inline-flex w-fit items-center gap-2 pt-6 text-sm font-semibold text-emerald-400 transition-colors hover:text-emerald-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-400"
        >
          View Case Study
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
