import Link from 'next/link';
import { ArrowRight, Download } from 'lucide-react';

type PlatformHeroProps = {
  platform: string;
  title: string;
  description: string;
  totalProjects: number;
  integrations: number;
};

export default function PlatformHero({
  platform,
  title,
  description,
  totalProjects,
  integrations,
}: PlatformHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-zinc-800 bg-gradient-to-b from-zinc-900 via-zinc-950 to-zinc-950">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6 py-24">
        <div className="max-w-3xl">
          <span className="inline-flex rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1 text-sm font-medium text-emerald-300">
            {platform}
          </span>

          <h1 className="mt-8 text-5xl font-bold leading-tight text-white lg:text-6xl">
            {title}
          </h1>

          <p className="mt-8 text-lg leading-8 text-zinc-400">
            {description}
          </p>

          {/* Buttons */}

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-6 py-3 font-semibold text-white transition hover:bg-emerald-400"
            >
              Let's Build
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-xl border border-zinc-700 px-6 py-3 font-semibold text-white transition hover:border-zinc-500"
            >
              Browse Portfolio
              <Download size={18} />
            </Link>
          </div>

          {/* Statistics */}

          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5 backdrop-blur">
              <p className="text-3xl font-bold text-white">
                {totalProjects}+
              </p>

              <p className="mt-2 text-sm text-zinc-400">
                Automation Projects
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5 backdrop-blur">
              <p className="text-3xl font-bold text-white">
                {integrations}+
              </p>

              <p className="mt-2 text-sm text-zinc-400">
                Integrations
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5 backdrop-blur">
              <p className="text-3xl font-bold text-white">
                AI
              </p>

              <p className="mt-2 text-sm text-zinc-400">
                AI-Powered Workflows
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}