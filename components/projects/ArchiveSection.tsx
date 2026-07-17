'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import type { PortfolioProject } from '@/content/portfolio-projects';
import ProjectGrid from './ProjectGrid';
import SectionHeading from './SectionHeading';

type ArchiveSectionProps = {
  projects: readonly PortfolioProject[];
};

export default function ArchiveSection({
  projects,
}: ArchiveSectionProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="mb-24">

      <SectionHeading
        badge="🗂 Portfolio Archive"
        title="Archive Projects"
        description="Additional workflow automations created throughout my learning journey, experiments and portfolio development."
        count={projects.length}
      />

      <div className="mb-10 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-8">

        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

          <div>

            <h3 className="text-xl font-semibold text-white">
              Explore Additional Projects
            </h3>

            <p className="mt-2 max-w-2xl text-zinc-400">
              These projects demonstrate additional experience across AI,
              APIs, CRM integrations, workflow automation and business
              operations.
            </p>

          </div>

          <button
            onClick={() => setExpanded(!expanded)}
            className="inline-flex items-center gap-2 rounded-xl border border-zinc-700 bg-zinc-950 px-6 py-3 font-medium text-white transition hover:border-emerald-500 hover:bg-zinc-900"
          >
            {expanded ? (
              <>
                <ChevronUp size={18} />
                Hide Archive
              </>
            ) : (
              <>
                <ChevronDown size={18} />
                Show {projects.length} Projects
              </>
            )}
          </button>

        </div>

      </div>

      {expanded && (
        <div className="animate-in fade-in duration-500">
          <ProjectGrid projects={projects} />
        </div>
      )}

    </section>
  );
}