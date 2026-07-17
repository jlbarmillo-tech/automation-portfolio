import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="border-t border-zinc-800 bg-gradient-to-b from-zinc-950 to-zinc-900">

      <div className="mx-auto max-w-5xl px-6 py-24 text-center">

        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400">
          Ready to Build?
        </p>

        <h2 className="mt-4 text-4xl font-bold text-white">
          Let's Build Your Next Automation
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
          Whether it's AI agents, CRM automation, API integrations or complete
          business workflow automation, I can build scalable solutions tailored
          to your business.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-7 py-4 font-semibold text-white transition hover:bg-emerald-400"
          >
            Let's Talk

            <ArrowRight size={18} />
          </Link>

          <Link
            href="/projects"
            className="rounded-xl border border-zinc-700 px-7 py-4 font-semibold text-white transition hover:border-zinc-500"
          >
            Browse Portfolio
          </Link>

        </div>

      </div>

    </section>
  );
}