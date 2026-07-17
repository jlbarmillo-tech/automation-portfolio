'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

export default function CTA() {
  return (
    <section aria-labelledby="cta-heading" className="bg-zinc-950 py-20 sm:py-24">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900 px-6 py-14 text-center shadow-2xl shadow-black/20 sm:px-10 sm:py-16"
        >
          <div aria-hidden="true" className="absolute left-1/2 top-0 h-48 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/15 blur-3xl" />
          <div className="relative mx-auto max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">Let&apos;s work together</p>
            <h2 id="cta-heading" className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Let&apos;s Build Your Next Automation
            </h2>
            <p className="mt-5 text-base leading-7 text-zinc-400 sm:text-lg">
              Whether you need CRM automation, AI workflows, or business process automation, I&apos;d be happy to help.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href="contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-emerald-500 hover:shadow-lg hover:shadow-emerald-500/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
              >
                Hire Me
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
              </a>
              <a
                href="#resume"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-zinc-700 bg-zinc-950/40 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-zinc-500 hover:bg-zinc-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
              >
                <Download className="h-4 w-4" aria-hidden="true" />
                Download Resume
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
