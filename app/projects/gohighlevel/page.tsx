import PlatformHero from '@/components/projects/PlatformHero';
import PlatformStats from '@/components/projects/PlatformStats';
import PlatformFeatures from '@/components/projects/PlatformFeatures';
import TechnologyStack from '@/components/projects/TechnologyStack';
import FeaturedSection from '@/components/projects/FeaturedSection';
import CTASection from '@/components/projects/CTASection';

import { ghlProjects } from '@/content/projects';

export default function GoHighLevelPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">

      <PlatformHero
        platform="🟢 GoHighLevel"
        title="CRM & Business Automation"
        description="Scalable CRM automation systems built with GoHighLevel for lead management, appointment booking, customer communication and sales pipelines."
        totalProjects={ghlProjects.length}
        integrations={8}
      />

      <PlatformStats
        featured={ghlProjects.length}
        archive={0}
      />

      <PlatformFeatures />

      <TechnologyStack />

      <FeaturedSection
        badge="🟢 GoHighLevel"
        title="Featured GoHighLevel Projects"
        description="CRM automation systems, lead generation workflows and business process automation built using GoHighLevel."
        projects={ghlProjects}
      />

      <CTASection />

    </main>
  );
}