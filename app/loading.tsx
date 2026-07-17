'use client';

import { motion } from 'framer-motion';

export default function Loading() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-zinc-950 px-4 text-white">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        role="status"
        aria-live="polite"
        className="flex flex-col items-center"
      >
        <motion.span
          aria-hidden="true"
          animate={{ rotate: 360 }}
          transition={{ duration: 0.9, repeat: Infinity, ease: 'linear' }}
          className="h-12 w-12 rounded-full border-2 border-emerald-400/20 border-t-emerald-400 shadow-[0_0_28px_rgba(52,211,153,0.3)]"
        />
        <p className="mt-5 text-sm font-medium tracking-wide text-zinc-300">Loading Portfolio...</p>
      </motion.div>
    </main>
  );
}
