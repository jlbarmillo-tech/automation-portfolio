import type { PortfolioProject } from '@/content/portfolio-projects';
import ProjectGrid from './ProjectGrid';
import SectionHeading from './SectionHeading';

type PlatformSectionProps = {
  badge?: string;
  title: string;
  description: string;
  projects: readonly PortfolioProject[];
};

export default function PlatformSection({
  badge,
  title,
  description,
  projects,
}: PlatformSectionProps) {
  return (
    <section className="mb-24">
      <SectionHeading
        badge={badge}
        title={title}
        description={description}
        count={projects.length}
      />

      <ProjectGrid projects={projects} />
    </section>
  );
}