const features = [
  {
    title: 'AI Agents',
    description:
      'Build intelligent AI assistants using Google Gemini and OpenAI for classification, summarization and decision making.',
  },
  {
    title: 'Business Automation',
    description:
      'Automate repetitive operational tasks and streamline business processes across multiple platforms.',
  },
  {
    title: 'CRM Integrations',
    description:
      'Connect HubSpot, GoHighLevel and custom CRMs with powerful workflow automation.',
  },
  {
    title: 'API Workflows',
    description:
      'Build API-first automation using REST APIs, Webhooks, JSON and secure integrations.',
  },
];

export default function PlatformFeatures() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">

      <div className="max-w-3xl">

        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400">
          Capabilities
        </p>

        <h2 className="mt-3 text-4xl font-bold text-white">
          What I Build with n8n
        </h2>

        <p className="mt-5 text-lg leading-8 text-zinc-400">
          Modern AI workflow automation designed to eliminate manual work,
          connect business systems and increase operational efficiency.
        </p>

      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-2">

        {features.map((feature) => (
          <div
            key={feature.title}
            className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8 transition hover:border-emerald-500/40"
          >
            <h3 className="text-xl font-semibold text-white">
              {feature.title}
            </h3>

            <p className="mt-4 leading-7 text-zinc-400">
              {feature.description}
            </p>
          </div>
        ))}

      </div>

    </section>
  );
}