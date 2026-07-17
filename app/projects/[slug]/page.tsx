'use client';

import { ghlProjects } from '@/content/projects';
import { n8nProjects } from '@/content/n8n-projects';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, CheckCircle2, Download, GitFork, Play, X, ZoomIn } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { use, useEffect, useMemo, useRef, useState } from 'react';
import { zapierProjects } from '@/content/zapier-projects';

const platformBadges: Record<string, string> = {
  GoHighLevel: '🟢 GoHighLevel',
  n8n: '🟣 n8n',
  Zapier: '🟠 Zapier',
};

const reveal = {
  duration: 0.6,
  ease: [0.16, 1, 0.3, 1] as const,
};

type LightboxImage = {
  src: string;
  alt: string;
};

import { n8nArchiveProjects } from '@/content/n8n-archive-projects';

const projects = [
  ...ghlProjects,
  ...n8nProjects,
  ...n8nArchiveProjects,
  ...zapierProjects,
];

function getRelatedProjects(project: (typeof projects)[number]) {
  const featuredProjects = projects.filter((item) => item.featured && item.slug !== project.slug);
  const sameCategoryProjects = featuredProjects.filter((item) => item.category === project.category);
  const fallbackProjects = featuredProjects
    .filter((item) => item.category !== project.category)
    .sort(() => Math.random() - 0.5);

  return [...sameCategoryProjects, ...fallbackProjects].slice(0, 3);
}

export default function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const projectIndex = projects.findIndex((item) => item.slug === slug);
  const [lightboxImage, setLightboxImage] = useState<LightboxImage | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setLightboxImage(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  if (projectIndex === -1) {
    notFound();
  }

  const project = projects[projectIndex];
  const platform = 'platform' in project ? project.platform : 'n8n';
  const video = 'video' in project ? project.video : undefined;
  const workflowJson = 'workflowJson' in project && typeof project.workflowJson === 'string' ? project.workflowJson : undefined;
  const githubUrl = 'githubUrl' in project && typeof project.githubUrl === 'string' ? project.githubUrl : undefined;
  const executionImage = 'executionImage' in project ? project.executionImage : undefined;
  const metrics =
    'nodeCount' in project &&
    typeof project.nodeCount === 'number' &&
    'aiModel' in project &&
    typeof project.aiModel === 'string' &&
    'integrations' in project &&
    typeof project.integrations === 'number' &&
    'automationType' in project &&
    typeof project.automationType === 'string'
      ? [
          { label: 'Workflow Nodes', value: project.nodeCount },
          { label: 'AI Model', value: project.aiModel },
          { label: 'Integrations', value: project.integrations },
          { label: 'Automation Type', value: project.automationType },
        ]
      : null;
  const relatedProjects = useMemo(() => getRelatedProjects(project), [project]);

  useEffect(() => {
    const videoElement = videoRef.current;

    if (!videoElement || !video) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          void videoElement.play().catch(() => undefined);
        } else {
          videoElement.pause();
        }
      },
      { threshold: 0.25 },
    );

    observer.observe(videoElement);

    return () => {
      observer.disconnect();
      videoElement.pause();
    };
  }, [video]);

  return (
    <main className="min-h-screen overflow-hidden bg-zinc-950 py-28 text-white sm:py-32">
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-[36rem] overflow-hidden">
        <div className="absolute left-1/2 top-0 h-80 w-3/4 -translate-x-1/2 rounded-full bg-emerald-500/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={reveal}
          aria-labelledby="project-title"
          className="max-w-4xl"
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-400 transition-colors hover:text-emerald-400 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-400"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back to Projects
          </Link>

          <div className="mt-10 flex flex-wrap gap-2">
            <span className="rounded-full border border-zinc-700 bg-zinc-900/80 px-3 py-1.5 text-xs font-medium text-zinc-200">
              {platformBadges[platform] ?? platform}
            </span>
            <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5 text-xs font-medium text-emerald-300">
              {project.category}
            </span>
          </div>

          <h1 id="project-title" className="mt-5 text-4xl font-semibold tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl">
            {project.title}
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-zinc-400 sm:text-lg sm:leading-8">{project.description}</p>

          <ul aria-label="Technology stack" className="mt-7 flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <li key={technology} className="rounded-full border border-zinc-700 bg-zinc-900/70 px-3 py-1.5 text-xs font-medium text-zinc-200">
                {technology}
              </li>
            ))}
          </ul>
        </motion.section>

        {metrics && (
          <section aria-label="Project metrics" className="mt-12 grid grid-cols-2 gap-5 lg:grid-cols-4">
            {metrics.map((metric) => (
              <div key={metric.label} className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6 shadow-lg shadow-black/15">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-400">{metric.label}</p>
                <p className="mt-3 text-xl font-semibold tracking-tight text-white sm:text-2xl">{metric.value}</p>
              </div>
            ))}
          </section>
        )}

        {video && (
          <motion.section
            id="demo-video"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...reveal, delay: 0.08 }}
            aria-labelledby="demo-video-heading"
            className="mt-16"
          >
            <div className="mb-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">Demo</p>
              <h2 id="demo-video-heading" className="mt-2 text-2xl font-semibold text-white sm:text-3xl">Workflow in Action</h2>
            </div>
            <div className="overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900 p-2 shadow-2xl shadow-black/25 sm:p-3">
              <video
                ref={videoRef}
                autoPlay
                muted
                loop
                playsInline
                controls
                preload="metadata"
                className="aspect-video w-full rounded-2xl bg-zinc-950 object-contain"
              >
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </motion.section>
        )}

        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...reveal, delay: video ? 0.16 : 0.1 }}
          aria-labelledby="workflow-overview-heading"
          className="mt-16"
        >
          <div className="mb-5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">Workflow Overview</p>
            <h2 id="workflow-overview-heading" className="mt-2 text-2xl font-semibold text-white sm:text-3xl">Automation Architecture</h2>
          </div>
          <figure className="overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900 p-2 shadow-2xl shadow-black/25 sm:p-3">
            <button
              type="button"
              onClick={() => setLightboxImage({ src: project.workflowImage, alt: `${project.title} workflow architecture` })}
              aria-label="Enlarge workflow architecture screenshot"
              className="group relative block aspect-[16/9] w-full overflow-hidden rounded-2xl bg-zinc-950 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
            >
              <Image
                src={project.workflowImage}
                alt={`${project.title} workflow architecture`}
                fill
                sizes="(max-width: 1280px) 100vw, 1280px"
                className="cursor-zoom-in object-contain"
              />
              <span className="absolute inset-0 flex items-center justify-center bg-zinc-950/0 opacity-0 transition-all duration-300 group-hover:bg-zinc-950/45 group-hover:opacity-100">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-zinc-950/80 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm">
                  <ZoomIn className="h-4 w-4" aria-hidden="true" />
                  🔍 Click to Enlarge
                </span>
              </span>
            </button>
            <figcaption className="px-3 pb-2 pt-4 text-sm font-medium text-zinc-400">Workflow Architecture</figcaption>
          </figure>
        </motion.section>

        {executionImage && (
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={reveal}
          aria-labelledby="execution-validation-heading"
          className="mt-16"
        >
          <div className="mb-5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">Execution Validation</p>
            <h2 id="execution-validation-heading" className="mt-2 text-2xl font-semibold text-white sm:text-3xl">Reliable Workflow Delivery</h2>
          </div>
          <figure className="overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900 p-2 shadow-2xl shadow-black/25 sm:p-3">
            <button
              type="button"
              onClick={() => setLightboxImage({ src: executionImage, alt: `${project.title} successful workflow execution logs` })}
              aria-label="Enlarge successful workflow execution screenshot"
              className="group relative block aspect-[16/9] w-full overflow-hidden rounded-2xl bg-zinc-950 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
            >
              <Image
                src={executionImage}
                alt={`${project.title} successful workflow execution logs`}
                fill
                sizes="(max-width: 1280px) 100vw, 1280px"
                className="cursor-zoom-in object-contain"
              />
              <span className="absolute inset-0 flex items-center justify-center bg-zinc-950/0 opacity-0 transition-all duration-300 group-hover:bg-zinc-950/45 group-hover:opacity-100">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-zinc-950/80 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm">
                  <ZoomIn className="h-4 w-4" aria-hidden="true" />
                  🔍 Click to Enlarge
                </span>
              </span>
            </button>
            <figcaption className="px-3 pb-2 pt-4 text-sm font-medium text-zinc-400">Successful Workflow Execution</figcaption>
          </figure>
        </motion.section>
        )}

        <div className="mt-16 grid gap-5 lg:grid-cols-2">
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={reveal}
            aria-labelledby="challenge-heading"
            className="rounded-3xl border border-zinc-800 bg-zinc-900 p-7 shadow-lg shadow-black/15 sm:p-8"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">The problem</p>
            <h2 id="challenge-heading" className="mt-3 text-2xl font-semibold text-white">Business Challenge</h2>
            <p className="mt-5 leading-7 text-zinc-400">{project.challenge}</p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ ...reveal, delay: 0.08 }}
            aria-labelledby="solution-heading"
            className="rounded-3xl border border-zinc-800 bg-zinc-900 p-7 shadow-lg shadow-black/15 sm:p-8"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">The approach</p>
            <h2 id="solution-heading" className="mt-3 text-2xl font-semibold text-white">Automation Solution</h2>
            <p className="mt-5 leading-7 text-zinc-400">{project.solution}</p>
          </motion.section>
        </div>

        <div className="mt-16 grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={reveal}
            aria-labelledby="workflow-summary-heading"
            className="rounded-3xl border border-zinc-800 bg-zinc-900 p-7 shadow-lg shadow-black/15 sm:p-8"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">How it works</p>
            <h2 id="workflow-summary-heading" className="mt-3 text-2xl font-semibold text-white">Workflow Summary</h2>
            <ol className="mt-8">
              {project.workflowSummary.map((step, index) => (
                <li key={step} className="relative flex gap-4 pb-7 last:pb-0">
                  {index < project.workflowSummary.length - 1 && <span aria-hidden="true" className="absolute left-3.5 top-8 h-[calc(100%-1rem)] w-px bg-emerald-500/30" />}
                  <span className="relative z-10 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-emerald-500/40 bg-zinc-900 text-xs font-semibold text-emerald-300">
                    {index + 1}
                  </span>
                  <p className="pt-0.5 leading-6 text-zinc-300">{step}</p>
                </li>
              ))}
            </ol>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ ...reveal, delay: 0.08 }}
            aria-labelledby="business-outcome-heading"
            className="rounded-3xl border border-zinc-800 bg-zinc-900 p-7 shadow-lg shadow-black/15 sm:p-8"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">The impact</p>
            <h2 id="business-outcome-heading" className="mt-3 text-2xl font-semibold text-white">Business Outcome</h2>
            <ul className="mt-8 space-y-4">
              {project.businessOutcome.map((outcome) => (
                <li key={outcome} className="flex gap-3 text-zinc-300">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" aria-hidden="true" />
                  <span className="leading-6">{outcome}</span>
                </li>
              ))}
            </ul>
          </motion.section>
        </div>

        {(workflowJson || video || githubUrl) && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={reveal}
            aria-labelledby="workflow-assets-heading"
            className="mt-16 rounded-3xl border border-zinc-800 bg-zinc-900 p-7 shadow-lg shadow-black/15 sm:p-8"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">Project resources</p>
            <h2 id="workflow-assets-heading" className="mt-3 text-2xl font-semibold text-white">Workflow Assets</h2>
            <div className="mt-7 flex flex-wrap gap-3">
              {workflowJson && (
                <a
                  href={workflowJson}
                  download
                  className="inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-950/60 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-emerald-500/60 hover:text-emerald-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
                >
                  <Download className="h-4 w-4" aria-hidden="true" />
                  Download Workflow JSON
                </a>
              )}
              {video && (
                <a
                  href="#demo-video"
                  className="inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-950/60 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-emerald-500/60 hover:text-emerald-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
                >
                  <Play className="h-4 w-4" aria-hidden="true" />
                  Watch Demo
                </a>
              )}
              {githubUrl && (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-950/60 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-emerald-500/60 hover:text-emerald-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
                >
                  <GitFork className="h-4 w-4" aria-hidden="true" />
                  View on GitHub
                </a>
              )}
            </div>
          </motion.section>
        )}

        <section aria-labelledby="related-projects-heading" className="mt-16 border-t border-zinc-800 pt-8">
          <div className="mb-5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">More selected work</p>
            <h2 id="related-projects-heading" className="mt-2 text-2xl font-semibold text-white sm:text-3xl">Related Projects</h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {relatedProjects.map((relatedProject) => {
              const relatedPlatform = 'platform' in relatedProject ? relatedProject.platform : 'n8n';

              return (
                <motion.article
                  key={relatedProject.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={reveal}
                  className="group overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 shadow-lg shadow-black/15 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/60 hover:shadow-xl hover:shadow-emerald-950/20"
                >
                  <div className="relative aspect-[16/9] overflow-hidden border-b border-zinc-800 bg-zinc-950">
                    <Image
                      src={relatedProject.workflowImage}
                      alt={`${relatedProject.title} workflow screenshot`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex flex-wrap gap-2">
                      <span className="rounded-full border border-zinc-700 bg-zinc-950/60 px-2.5 py-1 text-[11px] font-medium text-zinc-300">
                        {platformBadges[relatedPlatform] ?? relatedPlatform}
                      </span>
                      <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-[11px] font-medium text-emerald-300">
                        {relatedProject.category}
                      </span>
                    </div>
                    <h3 className="mt-4 text-lg font-semibold tracking-tight text-white">{relatedProject.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-zinc-400">{relatedProject.description}</p>
                    <Link
                      href={`/projects/${relatedProject.slug}`}
                      className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-emerald-400 transition-colors hover:text-emerald-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-400"
                    >
                      View Case Study
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                    </Link>
                  </div>
                </motion.article>
              );
            })}
          </div>

          <div className="mt-10 flex justify-center">
            <Link
              href="/projects"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-zinc-700 bg-zinc-900 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-emerald-500/60 hover:text-emerald-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
            >
              Back to Projects
            </Link>
          </div>
        </section>
      </div>

      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            role="presentation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setLightboxImage(null)}
            className="fixed inset-0 z-[100] flex cursor-zoom-out items-center justify-center bg-black/85 p-4 backdrop-blur-sm sm:p-8"
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label={lightboxImage.alt}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              onClick={(event) => event.stopPropagation()}
              className="relative flex h-full w-full max-w-7xl items-center justify-center"
            >
              <button
                type="button"
                onClick={() => setLightboxImage(null)}
                aria-label="Close enlarged image"
                className="absolute right-0 top-0 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-zinc-950/80 text-white shadow-lg backdrop-blur-sm transition-colors hover:bg-zinc-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
              <div className="relative h-[calc(100%-4rem)] w-full">
                <Image src={lightboxImage.src} alt={lightboxImage.alt} fill sizes="100vw" className="object-contain" />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
