'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Bot, Download, Sparkles } from 'lucide-react';

const technologies = [
  'GoHighLevel',
  'n8n',
  'Zapier',
  'OpenAI',
  'Gemini',
  'HubSpot',
  'Google Workspace',
  'Slack',
];

const reveal = {
  duration: 0.65,
  ease: [0.16, 1, 0.3, 1] as const,
};

export default function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative isolate flex min-h-screen items-center overflow-hidden bg-zinc-950 text-white"
    >
      <div aria-hidden="true" className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[15%] top-[10%] h-80 w-80 rounded-full bg-emerald-500/10 blur-[110px]" />
        <div className="absolute bottom-[5%] right-[5%] h-96 w-96 rounded-full bg-emerald-400/10 blur-[130px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(63,63,70,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(63,63,70,0.12)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_75%_65%_at_50%_30%,black,transparent)]" />
      </div>

      <div className="mx-auto w-full max-w-[1280px] px-4 pb-16 pt-32 sm:px-6 lg:px-8 lg:pb-20">
        <div className="grid items-center gap-14 lg:grid-cols-[1.04fr_0.96fr] lg:gap-12">
          <div className="max-w-3xl">
            <motion.div
  initial={{ opacity: 0, y: 16 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ ...reveal, delay: 0.30 }}
  className="mt-10 grid gap-4 sm:grid-cols-3"
>
  <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-4 backdrop-blur">
    <p className="text-2xl font-bold text-white">38+</p>
    <p className="mt-1 text-sm text-zinc-400">
      Automation Projects
    </p>
  </div>

  <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-4 backdrop-blur">
    <p className="text-2xl font-bold text-white">8+</p>
    <p className="mt-1 text-sm text-zinc-400">
      Years Professional Experience
    </p>
  </div>

  <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-4 backdrop-blur">
    <p className="text-2xl font-bold text-white">AI</p>
    <p className="mt-1 text-sm text-zinc-400">
      CRM • APIs • Workflow Automation
    </p>
  </div>
</motion.div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={reveal}
              className="inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3 py-1.5 text-xs font-semibold tracking-wide text-emerald-300"
            >
              <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
              AI Automation Specialist
            </motion.div>

            <motion.h1
              id="hero-heading"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...reveal, delay: 0.08 }}
              className="mt-6 text-4xl font-semibold tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl xl:text-7xl"
            >
              AI Automation That Saves Businesses Hours Every Week
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...reveal, delay: 0.16 }}
              className="mt-6 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg sm:leading-8"
            >
              I build intelligent workflow automation using GoHighLevel, n8n, Zapier, APIs and AI that eliminates repetitive work, improves business operations, and helps companies scale faster.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...reveal, delay: 0.24 }}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <a
                href="#projects"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-emerald-500 hover:shadow-lg hover:shadow-emerald-500/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
              >
                View Projects
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
              </a>
              <a
                href="contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-zinc-700 bg-zinc-900/70 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-zinc-600 hover:bg-zinc-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
              >
                
                Hire Me
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.65, delay: 0.34 }}
              className="mt-12"
            >
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-zinc-500">Automation toolkit</p>
              <ul aria-label="Automation technology stack" className="mt-4 flex flex-wrap gap-2">
                {technologies.map((technology) => (
                  <li key={technology} className="rounded-full border border-zinc-800 bg-zinc-900/70 px-3 py-1.5 text-xs font-medium text-zinc-300">
                    {technology}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...reveal, delay: 0.18 }}
            className="relative mx-auto w-full max-w-xl lg:max-w-none"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/70 p-4 shadow-2xl shadow-emerald-950/50 backdrop-blur-xl sm:p-5"
            >
              <div aria-hidden="true" className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-emerald-400/20 blur-3xl" />
              <div aria-hidden="true" className="absolute -bottom-16 -left-16 h-52 w-52 rounded-full bg-emerald-600/20 blur-3xl" />

              <div className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950/85">
                <div className="flex items-center justify-between border-b border-zinc-800 px-4 py-3.5 sm:px-5">
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-400/10 text-emerald-300">
                      <Bot className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-white">Lead automation</p>
                      <p className="text-[11px] text-zinc-500">Workflow dashboard</p>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2.5 py-1 text-[11px] font-medium text-emerald-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    Active
                  </span>
                </div>

                <div className="p-4 sm:p-5">
                  <div className="relative rounded-xl border border-zinc-800 bg-zinc-900/60 p-4">
                    <p className="text-xs font-medium text-zinc-400">Workflow canvas</p>
                    <div className="relative mt-4 h-36" aria-hidden="true">
                      <div className="absolute left-[16%] top-7 h-px w-[29%] bg-gradient-to-r from-emerald-400/70 to-emerald-400/20" />
                      <div className="absolute left-[45%] top-7 h-px w-[29%] bg-gradient-to-r from-emerald-400/70 to-emerald-400/20" />
                      <div className="absolute left-[45%] top-7 h-[56%] w-px bg-gradient-to-b from-emerald-400/60 to-emerald-400/10" />
                      <div className="absolute left-[45%] top-[63%] h-px w-[29%] bg-gradient-to-r from-emerald-400/50 to-emerald-400/20" />

                      <div className="absolute left-0 top-0 flex h-14 w-[32%] items-center gap-2 rounded-lg border border-zinc-700 bg-zinc-950 px-2.5 shadow-lg shadow-black/20">
                        <span className="h-6 w-6 rounded-md bg-emerald-500/20" />
                        <span className="text-[10px] font-medium text-zinc-300">New lead</span>
                      </div>
                      <div className="absolute left-[37%] top-0 flex h-14 w-[27%] items-center gap-2 rounded-lg border border-emerald-400/30 bg-emerald-400/10 px-2.5 shadow-lg shadow-emerald-950/30">
                        <span className="h-6 w-6 rounded-md bg-emerald-400/30" />
                        <span className="text-[10px] font-medium text-emerald-200">AI qualify</span>
                      </div>
                      <div className="absolute right-0 top-0 flex h-14 w-[27%] items-center gap-2 rounded-lg border border-zinc-700 bg-zinc-950 px-2.5 shadow-lg shadow-black/20">
                        <span className="h-6 w-6 rounded-md bg-zinc-700" />
                        <span className="text-[10px] font-medium text-zinc-300">CRM sync</span>
                      </div>
                      <div className="absolute right-0 top-[50%] flex h-14 w-[27%] items-center gap-2 rounded-lg border border-zinc-700 bg-zinc-950 px-2.5 shadow-lg shadow-black/20">
                        <span className="h-6 w-6 rounded-md bg-zinc-700" />
                        <span className="text-[10px] font-medium text-zinc-300">Notify team</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 grid gap-3 sm:grid-cols-[0.85fr_1.15fr]">
                    <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-3.5">
                      <p className="text-[11px] font-medium text-zinc-500">Hours saved</p>
                      <p className="mt-1 text-2xl font-semibold tracking-tight text-white">37.5</p>
                      <p className="mt-1 text-[11px] text-emerald-400">↑ 18% this week</p>
                    </div>
                    <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-3.5">
                      <div className="flex items-center justify-between">
                        <p className="text-[11px] font-medium text-zinc-500">Workflow runs</p>
                        <p className="text-[11px] font-medium text-emerald-400">1,842</p>
                      </div>
                      <div className="mt-3 flex h-10 items-end gap-1" aria-hidden="true">
                        {[35, 55, 42, 70, 58, 92, 66, 82, 100, 74, 88, 96].map((height, index) => (
                          <motion.span
                            key={index}
                            initial={{ height: 0 }}
                            animate={{ height: `${height}%` }}
                            transition={{ duration: 0.45, delay: 0.4 + index * 0.035 }}
                            className="flex-1 rounded-t-sm bg-gradient-to-t from-emerald-700 to-emerald-400"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
              className="absolute -bottom-5 -left-3 hidden rounded-2xl border border-white/10 bg-zinc-900/80 px-4 py-3 shadow-xl shadow-black/25 backdrop-blur-xl sm:block"
            >
              <p className="text-xs font-medium text-zinc-400">Automation success rate</p>
              <p className="mt-1 text-xl font-semibold text-white">99.8%</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
