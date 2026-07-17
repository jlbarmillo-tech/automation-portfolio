'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Home } from 'lucide-react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-zinc-950 px-4 py-28 text-center text-white sm:px-6">
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/10 blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(63,63,70,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(63,63,70,0.1)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_50%,black,transparent)]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 max-w-xl"
      >
        <p className="text-[8rem] font-semibold leading-none tracking-[-0.08em] text-emerald-400/90 sm:text-[11rem]">404</p>
        <h1 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Page Not Found</h1>
        <p className="mx-auto mt-5 max-w-md text-base leading-7 text-zinc-400 sm:text-lg">
          The page you&apos;re looking for doesn&apos;t exist or may have been moved.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-emerald-500 hover:shadow-lg hover:shadow-emerald-500/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
          >
            <Home className="h-4 w-4" aria-hidden="true" />
            Return Home
          </Link>
          <Link
            href="/projects"
            className="group inline-flex items-center justify-center gap-2 rounded-full border border-zinc-700 bg-zinc-900 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-emerald-500/60 hover:text-emerald-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
          >
            View Projects
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
          </Link>
        </div>
      </motion.div>
    </main>
  );
}
