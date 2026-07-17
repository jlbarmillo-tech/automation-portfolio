'use client';

import { motion } from 'framer-motion';

const technologies = [
  'n8n',
  'GoHighLevel',
  'Zapier',
  'OpenAI',
  'Claude',
  'Google Gemini',
  'OpenRouter',
  'HubSpot',
  'REST API',
  'Webhooks',
  'HTTP Request',
  'JSON',
  'Next.js',
  'React',
  'TypeScript',
  'Tailwind CSS',
  'GitHub',
  'VS Code',
  'Slack',
  'Gmail',
  'Google Sheets',
  'Google Docs',
  'Google Drive',
  'Google Calendar',
  'Google Forms',
  'Microsoft Excel',
];

const marqueeItems = [...technologies, ...technologies];

export default function TechStack() {
  return (
    <section
      aria-labelledby="tech-stack-heading"
      className="overflow-hidden bg-zinc-950 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-400">
            Built to Integrate
          </p>

          <h2
            id="tech-stack-heading"
            className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl"
          >
            Technology Stack
          </h2>

          <p className="mt-5 text-base leading-7 text-zinc-400">
            Platforms, AI models, development tools, APIs, and technologies I
            use to build scalable AI-powered automation solutions.
          </p>
        </motion.div>

        <div className="relative mt-12 overflow-hidden">
          {/* Left Fade */}
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-zinc-950 to-transparent" />

          {/* Right Fade */}
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-zinc-950 to-transparent" />

          <div className="group flex overflow-hidden">
            <div className="marquee flex shrink-0 gap-4 py-2">
              {marqueeItems.map((technology, index) => (
                <span
                  key={`${technology}-${index}`}
                  className="whitespace-nowrap rounded-full border border-emerald-500/40 bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400 hover:bg-zinc-800 hover:shadow-lg hover:shadow-emerald-500/10"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .marquee {
          width: max-content;
          animation: scroll 40s linear infinite;
        }

        .group:hover .marquee {
          animation-play-state: paused;
        }

        @keyframes scroll {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}