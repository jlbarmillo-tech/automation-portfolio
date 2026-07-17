type PlatformStatsProps = {
  featured: number;
  archive: number;
};

export default function PlatformStats({
  featured,
  archive,
}: PlatformStatsProps) {
  const stats = [
    {
      value: featured + archive,
      label: 'Total Projects',
    },
    {
      value: featured,
      label: 'Featured Projects',
    },
    {
      value: archive,
      label: 'Archive Projects',
    },
    {
      value: '10+',
      label: 'Integrations',
    },
  ];

  return (
    <section className="border-b border-zinc-800 bg-zinc-950">
      <div className="mx-auto grid max-w-7xl gap-6 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8 transition hover:border-emerald-500/40 hover:-translate-y-1"
          >
            <h2 className="text-5xl font-bold text-white">
              {stat.value}
            </h2>

            <p className="mt-3 text-zinc-400">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}