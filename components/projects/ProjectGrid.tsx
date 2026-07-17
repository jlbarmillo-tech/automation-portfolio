import ProjectCard from './ProjectCard';
import type { PortfolioProject } from '@/content/portfolio-projects';

type ProjectGridProps = {
  projects: readonly PortfolioProject[];
};

export default function ProjectGrid({
  projects,
}: ProjectGridProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard
          key={project.slug}
          project={project}
        />
      ))}
    </div>
  );
}