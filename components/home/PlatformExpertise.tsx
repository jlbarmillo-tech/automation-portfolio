import Link from 'next/link';

const platforms = [
  {
    emoji: '🟣',
    title: 'n8n',
    count: '23 Projects',
    description:
      'AI agents, API integrations, webhooks, CRM automation and business workflows.',
    href: '/projects',
  },
  {
    emoji: '🟢',
    title: 'GoHighLevel',
    count: '10 Projects',
    description:
      'CRM automation, pipelines, appointment booking, SaaS workflows and lead management.',
    href: '/projects',
  },
  {
    emoji: '🟠',
    title: 'Zapier',
    count: 'Coming Soon',
    description:
      'Business automations and integrations that will be added to the portfolio.',
    href: '/projects',
  },
];

export default function PlatformExpertise() {
  return (
    <section className="py-28">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">

          <span className="inline-flex rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-emerald-400">
            Platform Expertise
          </span>

          <h2 className="mt-6 text-5xl font-bold text-white">
            Automation Platforms
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
            I design intelligent automation solutions using leading workflow automation platforms,
            combining AI, APIs, CRM systems and business process automation.
          </p>

        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {platforms.map((platform) => (
            <Link
              key={platform.title}
              href={platform.href}
              className="group rounded-3xl border border-zinc-800 bg-zinc-900 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-emerald-500 hover:shadow-2xl hover:shadow-emerald-900/20"
            >
              <div className="text-5xl">
                {platform.emoji}
              </div>

              <h3 className="mt-8 text-3xl font-bold text-white">
                {platform.title}
              </h3>

              <p className="mt-2 font-semibold text-emerald-400">
                {platform.count}
              </p>

              <p className="mt-6 leading-8 text-zinc-400">
                {platform.description}
              </p>

              <div className="mt-10 font-semibold text-emerald-400 transition group-hover:translate-x-1">
                Explore Projects →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}