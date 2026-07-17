import PlatformHero from '@/components/projects/PlatformHero';
import PlatformStats from '@/components/projects/PlatformStats';
import PlatformFeatures from '@/components/projects/PlatformFeatures';
import TechnologyStack from '@/components/projects/TechnologyStack';
import FeaturedSection from '@/components/projects/FeaturedSection';
import ArchiveSection from '@/components/projects/ArchiveSection';
import CTASection from '@/components/projects/CTASection';

import { n8nProjects } from '@/content/n8n-projects';
import { n8nArchiveProjects } from '@/content/n8n-archive-projects';

export default function N8nPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">

      <PlatformHero
        platform="🟣 n8n"
        title="AI Workflow Automation Built with n8n"
        description="Production-ready workflow automation powered by AI, APIs, webhooks and modern business integrations."
        totalProjects={n8nProjects.length + n8nArchiveProjects.length}
        integrations={10}
      />

      <PlatformStats
        featured={n8nProjects.length}
        archive={n8nArchiveProjects.length}
      />

      <PlatformFeatures />

      <TechnologyStack />

      <FeaturedSection
        badge="🟣 n8n Featured"
        title="Featured n8n Projects"
        description="A curated collection of my best AI workflow automation projects built with n8n."
        projects={n8nProjects}
      />

      <ArchiveSection
        projects={n8nArchiveProjects}
      />

      <CTASection />

    </main>
  );
}