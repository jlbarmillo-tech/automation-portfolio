const technologies = [
  { name: 'n8n', category: 'Automation Platform' },
  { name: 'Google Gemini', category: 'AI Model' },
  { name: 'OpenAI', category: 'AI Model' },
  { name: 'GoHighLevel', category: 'CRM' },
  { name: 'HubSpot', category: 'CRM' },
  { name: 'Google Sheets', category: 'Productivity' },
  { name: 'Google Drive', category: 'Storage' },
  { name: 'Gmail', category: 'Email' },
  { name: 'Slack', category: 'Communication' },
  { name: 'Discord', category: 'Communication' },
  { name: 'Telegram', category: 'Messaging' },
  { name: 'REST API', category: 'Development' },
  { name: 'Webhook', category: 'Development' },
  { name: 'JSON', category: 'Data Format' },
  { name: 'PostgreSQL', category: 'Database' },
  { name: 'Supabase', category: 'Backend' },
];

export default function TechnologyStack() {
  return (
    <section className="border-y border-zinc-800 bg-zinc-900/30">
      <div className="mx-auto max-w-7xl px-6 py-20">

        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400">
            Technology Stack
          </p>

          <h2 className="mt-3 text-4xl font-bold text-white">
            Platforms & Integrations
          </h2>

          <p className="mt-5 text-lg leading-8 text-zinc-400">
            Technologies, AI models and business platforms I use to build
            production-ready automation workflows.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">

          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5 transition hover:border-emerald-500/40 hover:-translate-y-1"
            >
              <h3 className="font-semibold text-white">
                {tech.name}
              </h3>

              <p className="mt-2 text-sm text-zinc-400">
                {tech.category}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}