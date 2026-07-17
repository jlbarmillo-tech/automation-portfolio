import ProjectGrid from './ProjectGrid';
import SectionHeading from './SectionHeading';
import type { PortfolioProject } from '@/content/portfolio-projects';

type FeaturedSectionProps = {
  title: string;
  description: string;
  badge?: string;
  projects: readonly PortfolioProject[];
};

export default function FeaturedSection({
  title,
  description,
  badge = '★★★★★ Featured',
  projects,
}: FeaturedSectionProps) {
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