import FeaturedSection from '@/components/projects/FeaturedSection';
import PlatformSection from '@/components/projects/PlatformSection';
import ArchiveSection from '@/components/projects/ArchiveSection';

import { portfolioProjects } from '@/content/portfolio-projects';
import { ghlProjects } from '@/content/projects';
import { n8nProjects } from '@/content/n8n-projects';
import { n8nArchiveProjects } from '@/content/n8n-archive-projects';
import { zapierProjects } from '@/content/zapier-projects';

export default function ProjectsPage() {
  const featuredProjects = portfolioProjects.filter(
    (project) => project.featured
  );

  return (
    <main className="min-h-screen bg-zinc-950 py-28 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <section className="mb-24 text-center">
          <span className="inline-flex rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-emerald-400">
            Automation Portfolio
          </span>

          <h1 className="mt-8 text-5xl font-bold tracking-tight text-white md:text-6xl">
            Workflow Automation Projects
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-zinc-400">
            A growing collection of AI-powered workflows, CRM automations,
            integrations and business process solutions built with
            GoHighLevel, n8n and Zapier.
          </p>
        </section>

        <FeaturedSection
          badge="⭐ Featured"
          title="Featured Projects"
          description="A curated collection of my strongest automation projects."
          projects={featuredProjects}
        />

        <PlatformSection
          badge="🟢 GoHighLevel"
          title="GoHighLevel Automations"
          description="Production-ready CRM workflows, lead nurturing systems, sales pipelines, appointment booking and client automation."
          projects={ghlProjects}
        />

        <PlatformSection
          badge="🟣 n8n"
          title="n8n AI Automations"
          description="AI-powered workflows using Gemini, OpenAI, APIs, webhooks, CRMs, databases and business automation."
          projects={n8nProjects}
        />

        <PlatformSection
  badge="🟠 Zapier"
  title="Zapier Automations"
  description="Business workflow automation built using Zapier, connecting cloud applications and eliminating repetitive manual work."
  projects={zapierProjects}
/>

        <ArchiveSection
          projects={n8nArchiveProjects}
        />
      </div>
    </main>
  );
}