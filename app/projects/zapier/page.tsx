import PlatformHero from '@/components/projects/PlatformHero';
import PlatformStats from '@/components/projects/PlatformStats';
import PlatformFeatures from '@/components/projects/PlatformFeatures';
import TechnologyStack from '@/components/projects/TechnologyStack';
import FeaturedSection from '@/components/projects/FeaturedSection';
import CTASection from '@/components/projects/CTASection';

import { zapierProjects } from '@/content/zapier-projects';

export default function ZapierPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">

      <PlatformHero
        platform="🟠 Zapier"
        title="Business Workflow Automation with Zapier"
        description="Business automation workflows connecting popular cloud applications using Zapier. Designed to eliminate repetitive work and improve operational efficiency."
        totalProjects={zapierProjects.length}
        integrations={7}
      />

      <PlatformStats
        featured={zapierProjects.length}
        archive={0}
      />

      <PlatformFeatures />

      <TechnologyStack />

      <FeaturedSection
        badge="🟠 Zapier"
        title="Featured Zapier Projects"
        description="Automation workflows built with Zapier connecting business applications without code."
        projects={zapierProjects}
      />

      <CTASection />

    </main>
  );
}