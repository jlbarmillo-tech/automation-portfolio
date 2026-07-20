'use client';

import { portfolioProjects, projectFilters, type ProjectFilter } from '@/content/portfolio-projects';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, Search } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const platformBadges: Record<string, string> = {
  GoHighLevel: '🟢 GoHighLevel',
  n8n: '🟣 n8n',
  Zapier: '🟠 Zapier',
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: index * 0.08,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  }),
};

export default function FeaturedProjects() {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const normalizedSearchQuery = searchQuery.trim().toLowerCase();
  const featuredProjects = portfolioProjects.filter(
    (project) =>
      project.featured &&
      (activeFilter === 'All' || project.platform === activeFilter) &&
      (!normalizedSearchQuery ||
        project.title.toLowerCase().includes(normalizedSearchQuery) ||
        project.description.toLowerCase().includes(normalizedSearchQuery) ||
        project.category.toLowerCase().includes(normalizedSearchQuery) ||
        project.technologies.some((technology) => technology.toLowerCase().includes(normalizedSearchQuery))),
  );

  return (
    <section id="projects" aria-labelledby="featured-projects-heading" className="bg-zinc-950 py-20 sm:py-24">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">Selected work</p>
          <h2 id="featured-projects-heading" className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Featured Projects
          </h2>
          <p className="mt-4 text-base leading-7 text-zinc-400">
            A selection of CRM, AI and workflow automation solutions I&apos;ve built using GoHighLevel, n8n and Zapier.
          </p>
        </motion.div>

        <div className="relative mt-8 w-full sm:max-w-md">
          <label htmlFor="project-search" className="sr-only">Search featured projects</label>
          <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" aria-hidden="true" />
          <input
            id="project-search"
            type="search"
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            placeholder="Search projects"
            className="w-full rounded-full border border-zinc-700 bg-zinc-900 py-3 pl-11 pr-4 text-sm text-white outline-none transition-colors placeholder:text-zinc-500 focus:border-emerald-500/60 focus:ring-2 focus:ring-emerald-500/20"
          />
        </div>

        <div aria-label="Filter projects by platform" className="mt-8 flex flex-wrap gap-2">
          {projectFilters.map((filter) => {
            const isActive = activeFilter === filter;

            return (
              <button
                key={filter}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400 ${
                  isActive
                    ? 'border-emerald-500/60 bg-emerald-500/10 text-emerald-300'
                    : 'border-zinc-700 bg-zinc-900 text-zinc-300 hover:border-emerald-500/60 hover:text-emerald-300'
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
          {featuredProjects.map((project, index) => (
            <motion.article
              layout
              key={`${project.platform}-${project.slug}`}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, y: 16, transition: { duration: 0.2 } }}
              className="group overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 shadow-lg shadow-black/15 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/60 hover:shadow-xl hover:shadow-emerald-950/20"
            >
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
              </div>

              <div className="flex min-h-64 flex-col p-6">
                <h3 className="text-xl font-semibold tracking-tight text-white">{project.title}</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-400">{project.description}</p>

                <ul aria-label={`${project.title} technologies`} className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <li key={technology} className="rounded-full border border-zinc-700 bg-zinc-950/60 px-2.5 py-1 text-[11px] font-medium text-zinc-300">
                      {technology}
                    </li>
                  ))}
                </ul>

                <Link
                  href={`/projects/${project.slug}`}
                  aria-label={`View case study for ${project.title}`}
                  className="mt-auto inline-flex w-fit items-center gap-2 pt-6 text-sm font-semibold text-emerald-400 transition-colors hover:text-emerald-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-400"
                >
                  View Case Study
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                </Link>
              </div>
            </motion.article>
          ))}
          </AnimatePresence>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex justify-center"
        >
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900 px-5 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:border-emerald-500/60 hover:text-emerald-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
          >
            View All Projects
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
