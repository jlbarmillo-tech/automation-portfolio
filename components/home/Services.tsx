'use client';

import { motion } from 'framer-motion';
import { Bot, Database, Plug, Workflow, type LucideIcon } from 'lucide-react';

const services = [
  {
    title: 'Lead Management & CRM Systems',
    description:
      'Capture, qualify and nurture leads automatically using GoHighLevel and intelligent CRM workflows.',
    icon: Database,
    includes: ['GoHighLevel', 'Lead Pipelines', 'Calendars', 'CRM'],
  },
  {
    title: 'Business Process Automation',
    description:
      'Eliminate repetitive tasks by automating approvals, notifications, reporting and internal workflows.',
    icon: Workflow,
    includes: ['n8n', 'Zapier', 'Automation', 'Webhooks'],
  },
  {
    title: 'AI Assistants & Intelligent Workflows',
    description:
      'Build AI-powered assistants that classify, summarize, analyze and automate business decisions.',
    icon: Bot,
    includes: ['Gemini', 'OpenAI', 'AI Agents', 'LLMs'],
  },
  {
    title: 'API Integration & Custom Workflows',
    description:
      'Connect CRMs, databases and third-party applications using APIs and secure webhooks.',
    icon: Plug,
    includes: ['REST API', 'Webhook', 'JSON', 'OAuth'],
  },
] satisfies {
  title: string;
  description: string;
  icon: LucideIcon;
  includes: string[];
}[];

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: index * 0.1,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  }),
};

export default function Services() {
  return (
    <section id="solutions" aria-labelledby="services-heading" className="bg-zinc-950 py-20 sm:py-24">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">What I build</p>
          <h2 id="services-heading" className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Services
          </h2>
        </motion.div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.title}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="group rounded-2xl border border-zinc-800 bg-zinc-900 p-6 shadow-lg shadow-black/15 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/60 hover:shadow-emerald-950/25"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-emerald-500/20 bg-emerald-500/10 text-emerald-400 transition-colors group-hover:bg-emerald-500/15">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-white">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-400">{service.description}</p>
                <div className="mt-6">
  <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-zinc-500">
    Includes
  </p>

  <div className="flex flex-wrap gap-2">
    {service.includes.map((item) => (
      <span
        key={item}
        className="rounded-full border border-zinc-700 bg-zinc-950 px-3 py-1 text-xs text-zinc-300"
      >
        {item}
      </span>
    ))}
  </div>
</div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
