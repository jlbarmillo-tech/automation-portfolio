'use client';

import { motion } from 'framer-motion';
import { CalendarDays, Sparkles } from 'lucide-react';

export default function BookingHero() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.18),transparent_40%)]" />

      <div className="relative px-8 py-16 md:px-14 md:py-20">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="mx-auto max-w-4xl text-center"
        >

          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2">

            <Sparkles
              size={16}
              className="text-emerald-400"
            />

            <span className="text-sm font-medium text-emerald-400">
              Free Discovery Call
            </span>

          </div>

          <h1 className="mt-8 text-4xl font-bold tracking-tight text-white md:text-6xl">

            Let's Build Your Next

            <span className="mt-3 block text-emerald-400">
              AI Automation Solution
            </span>

          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-zinc-400">

            Book a one-on-one consultation to discuss workflow automation,
            AI integrations, CRM implementation, API connections,
            and scalable business processes tailored to your needs.

          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">

            <div className="flex items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-950 px-5 py-3">

              <CalendarDays
                size={18}
                className="text-emerald-400"
              />

              <span className="text-sm text-zinc-300">
                30–60 Minute Consultation
              </span>

            </div>

            <div className="rounded-xl border border-zinc-800 bg-zinc-950 px-5 py-3">

              <span className="text-sm text-zinc-300">
                Personalized Automation Strategy
              </span>

            </div>

            <div className="rounded-xl border border-zinc-800 bg-zinc-950 px-5 py-3">

              <span className="text-sm text-zinc-300">
                No Commitment Required
              </span>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}