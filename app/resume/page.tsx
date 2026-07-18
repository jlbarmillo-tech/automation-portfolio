'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import Link from 'next/link';

const experience = [
  { company: 'Accenture', role: 'Content Moderator', period: '2016–2018' },
  { company: 'Keywords Studios', role: 'Player Support Specialist', period: '2018–2023' },
  { company: 'Genpact', role: 'Content Moderator', period: '2024–2026' },
  { company: 'AI Automation Specialist', role: 'AI Automation Specialist', period: '2026–Present' },
];

const skills = ['GoHighLevel', 'n8n', 'Zapier', 'OpenAI', 'Gemini', 'HubSpot', 'Google Workspace', 'Slack', 'APIs', 'Webhooks', 'JavaScript', 'TypeScript'];

const projectStats = [
  { value: '10+', label: 'GoHighLevel Workflows' },
  { value: '15+', label: 'Automation Projects' },
  { value: '300+', label: 'Hours Learning' },
];

const reveal = {
  duration: 0.6,
  ease: [0.16, 1, 0.3, 1] as const,
};

export default function ResumePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-zinc-950 py-28 text-white sm:py-32">
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-[34rem] overflow-hidden">
        <div className="absolute left-1/2 top-0 h-80 w-3/4 -translate-x-1/2 rounded-full bg-emerald-500/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <motion.header
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={reveal}
          className="max-w-3xl"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-400">Resume</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl">John Lester Armillo</h1>
          <p className="mt-3 text-lg font-medium text-emerald-400">AI Automation Specialist</p>
          <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg sm:leading-8">
            A customer-focused automation professional building reliable CRM, AI, and workflow systems that help teams work smarter.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="/resume/John_Lester_Armillo_AI_Automation_Specialist_Resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
              download
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-emerald-500 hover:shadow-lg hover:shadow-emerald-500/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              Download Resume PDF
            </a>
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center rounded-full border border-zinc-700 bg-zinc-900 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-emerald-500/60 hover:text-emerald-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
            >
              Contact Me
            </Link>
          </div>
        </motion.header>

        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={reveal}
          aria-labelledby="summary-heading"
          className="mt-16 rounded-3xl border border-zinc-800 bg-zinc-900 p-7 shadow-xl shadow-black/15 sm:p-9"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">Profile</p>
          <h2 id="summary-heading" className="mt-3 text-2xl font-semibold text-white sm:text-3xl">Professional Summary</h2>
          <p className="mt-5 max-w-4xl text-base leading-7 text-zinc-400 sm:text-lg sm:leading-8">
            I bring 8+ years of experience across Customer Support and Content Moderation, paired with a focused transition into AI Automation. I build CRM automation, workflow automation, and API integrations that remove repetitive work, improve follow-up, and give businesses more reliable operations.
          </p>
        </motion.section>

        <section aria-labelledby="experience-heading" className="mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={reveal}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">Career path</p>
            <h2 id="experience-heading" className="mt-3 text-2xl font-semibold text-white sm:text-3xl">Experience</h2>
          </motion.div>

          <ol className="mt-8 grid gap-4 lg:grid-cols-2">
            {experience.map((item, index) => (
              <motion.li
                key={`${item.company}-${item.period}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ ...reveal, delay: index * 0.08 }}
                className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 shadow-lg shadow-black/15 transition-colors hover:border-emerald-500/50"
              >
                <p className="text-sm font-semibold text-emerald-400">{item.period}</p>
                <h3 className="mt-4 text-xl font-semibold text-white">{item.company}</h3>
                <p className="mt-2 text-sm text-zinc-400">{item.role}</p>
              </motion.li>
            ))}
          </ol>
        </section>

        <section aria-labelledby="skills-heading" className="mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={reveal}
            className="rounded-3xl border border-zinc-800 bg-zinc-900 p-7 shadow-xl shadow-black/15 sm:p-9"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">Core capabilities</p>
            <h2 id="skills-heading" className="mt-3 text-2xl font-semibold text-white sm:text-3xl">Skills</h2>
            <ul className="mt-7 flex flex-wrap gap-3">
              {skills.map((skill) => (
                <li key={skill} className="rounded-full border border-zinc-700 bg-zinc-950/60 px-4 py-2 text-sm font-medium text-zinc-200 transition-colors hover:border-emerald-500/50 hover:text-white">
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        </section>

        <section aria-labelledby="projects-heading" className="mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={reveal}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">Hands-on building</p>
            <h2 id="projects-heading" className="mt-3 text-2xl font-semibold text-white sm:text-3xl">Projects</h2>
          </motion.div>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {projectStats.map((stat, index) => (
              <motion.article
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ ...reveal, delay: index * 0.08 }}
                className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 shadow-lg shadow-black/15"
              >
                <p className="text-4xl font-semibold tracking-tight text-emerald-400">{stat.value}</p>
                <p className="mt-3 text-sm font-medium text-zinc-300">{stat.label}</p>
              </motion.article>
            ))}
          </div>
        </section>

        <section aria-labelledby="education-heading" className="mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={reveal}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">Continuous learning</p>
            <h2 id="education-heading" className="mt-3 text-2xl font-semibold text-white sm:text-3xl">Education &amp; Certifications</h2>
          </motion.div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[1, 2].map((card) => (
              <div key={card} className="min-h-36 rounded-2xl border border-dashed border-zinc-700 bg-zinc-900/60 p-6">
                <p className="text-sm font-medium text-zinc-500">Certificate placeholder</p>
              </div>
            ))}
          </div>
        </section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={reveal}
          className="mt-16 flex flex-col items-center justify-between gap-5 rounded-3xl border border-zinc-800 bg-zinc-900 p-7 text-center shadow-xl shadow-black/15 sm:flex-row sm:p-9 sm:text-left"
        >
          <div>
            <h2 className="text-2xl font-semibold text-white">Ready to automate smarter?</h2>
            <p className="mt-2 text-zinc-400">Let&apos;s build a workflow that saves your team time.</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="/resume/John_Lester_Armillo_AI_Automation_Specialist_Resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
              download
              className="inline-flex items-center justify-center gap-2 rounded-full border border-zinc-700 bg-zinc-950/60 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-emerald-500/60 hover:text-emerald-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              Download Resume
            </a>
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-emerald-500 hover:shadow-lg hover:shadow-emerald-500/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
            >
              Hire Me
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </Link>
          </div>
        </motion.section>
      </div>
    </main>
  );
}
