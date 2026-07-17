'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const statistics = [
  { value: '8+', label: 'Years Experience' },
  { value: '20+', label: 'Automation Projects' },
  { value: '300+', label: 'Hours Building Automations' },
  { value: '10+', label: 'GoHighLevel Workflows' },
];

const timeline = [
  { year: '2016', company: 'Accenture', role: 'Content Moderator' },
  { year: '2018', company: 'Keywords Studios', role: 'Player Support Specialist' },
  { year: '2024', company: 'Genpact', role: 'Content Moderator' },
  { year: '2026', company: '', role: 'AI Automation Specialist' },
];

const reveal = {
  duration: 0.6,
  ease: [0.16, 1, 0.3, 1] as const,
};

export default function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="bg-zinc-950 py-20 text-white sm:py-24">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={reveal}
            className="max-w-2xl"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-400">About Me</p>
            <h2 id="about-heading" className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
              John Lester Armillo
            </h2>
            <p className="mt-3 text-lg font-medium text-emerald-400">AI Automation Specialist</p>
            <p className="mt-2 text-sm text-zinc-500">
  CRM Automation • AI Workflows • Business Process Automation
</p>

            <div className="mt-16 max-w-2xl space-y-6 text-base leading-8 text-zinc-400">
              <p>
                I bring more than eight years of professional experience across Customer Support and Content Moderation, where I developed a disciplined approach to communication, quality, and solving complex operational problems. Those roles taught me how small process gaps can create major friction for customers and internal teams.
              </p>
              <p>
                Today, I apply that perspective as an AI Automation Engineer. I build CRM, AI, and workflow automations that help businesses run more efficiently, using GoHighLevel, n8n, Zapier, OpenAI, Gemini, APIs, and webhooks to turn repetitive processes into reliable systems.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#resume"
                className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-emerald-500 hover:shadow-lg hover:shadow-emerald-500/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
              >
                Download Resume
              </a>
              <a
                href="contact"
                className="inline-flex items-center justify-center rounded-full border border-zinc-700 bg-zinc-900 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-emerald-500/60 hover:text-emerald-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
              >
                Contact Me
              </a>
            </div>
            <motion.section
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ ...reveal, delay: 0.15 }}
              aria-labelledby="career-timeline-heading"
              className="mt-8 rounded-3xl border border-zinc-800 bg-zinc-900 p-5 shadow-lg shadow-black/15 sm:p-8"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">Career path</p>
              <h3 id="career-timeline-heading" className="mt-3 text-2xl font-semibold text-white">Professional Timeline</h3>

              <ol className="mt-7">
                {timeline.map((item, index) => (
                  <li key={`${item.year}-${item.company}`} className="relative flex gap-4 pb-6 last:pb-0">
                    {index < timeline.length - 1 && <span aria-hidden="true" className="absolute left-3.5 top-8 h-[calc(100%-1rem)] w-px bg-emerald-500/30" />}
                    <span className="relative z-10 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-emerald-500/40 bg-zinc-900 text-[10px] font-semibold text-emerald-300">
                      {index + 1}
                    </span>
                    <div className="pt-0.5">
                      <p className="text-sm font-semibold text-emerald-400">{item.year}</p>
                      {item.company && <p className="mt-1 text-sm font-semibold text-white">{item.company}</p>}
                      <p className="mt-1 text-sm text-zinc-400">{item.role}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </motion.section>
          </motion.div>

          <div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
              className="grid gap-5 sm:grid-cols-2"
            >
              {statistics.map((stat) => (
                <motion.article
                  key={stat.label}
                  variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: reveal } }}
                  whileHover={{ y: -4 }}
                  className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5 shadow-lg shadow-black/15 transition-colors hover:border-emerald-500/50"
                >
                  <p className="text-4xl font-semibold tracking-tight text-emerald-400">{stat.value}</p>
                  <p className="mt-3 text-sm font-medium text-zinc-300">{stat.label}</p>
                </motion.article>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ ...reveal, delay: 0.1 }}
              className="mt-5 overflow-hidden rounded-3xl border border-emerald-500/20 bg-zinc-900 p-2 shadow-xl shadow-black/20"
            >
              <Image
                src="/profile/profile.jpg"
                alt="John Lester Armillo"
                width={960}
                height={640}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="aspect-[4/5] w-full rounded-2xl object-cover"
              />
            </motion.div>

            

          
          </div>
        </div>
      </div>
    </section>
  );
}
