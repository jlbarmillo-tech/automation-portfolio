type SectionHeadingProps = {
  badge?: string;
  title: string;
  description?: string;
  count?: number;
};

export default function SectionHeading({
  badge,
  title,
  description,
  count,
}: SectionHeadingProps) {
  return (
    <div className="mb-10">
      {badge && (
        <span className="inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
          {badge}
        </span>
      )}

      <div className="mt-4 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="text-4xl font-bold tracking-tight text-white">
            {title}
          </h2>

          {description && (
            <p className="mt-3 max-w-3xl text-lg leading-8 text-zinc-400">
              {description}
            </p>
          )}
        </div>

        {count !== undefined && (
          <div className="rounded-xl border border-zinc-800 bg-zinc-900 px-5 py-3">
            <p className="text-2xl font-bold text-white">
              {count}
            </p>

            <p className="text-sm text-zinc-400">
              Projects
            </p>
          </div>
        )}
      </div>
    </div>
  );
}