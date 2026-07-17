'use client';

import { motion } from 'framer-motion';

const stats = [
  { value: '10+', label: 'GoHighLevel Implementations' },
  { value: '15+', label: 'Automation Projects' },
  { value: '300+', label: 'Hours Invested' },
  { value: '8+', label: 'Years of Professional Experience' },
];

const cardVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: index * 0.1,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  }),
};

export default function Stats() {
  return (
    <section aria-label="Professional statistics" className="bg-zinc-950 py-16 sm:py-20">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.article
              key={stat.label}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ y: -4 }}
              className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 shadow-lg shadow-black/15 transition-colors hover:border-emerald-500/50"
            >
              <p className="text-4xl font-semibold tracking-tight text-emerald-400 sm:text-5xl">{stat.value}</p>
              <p className="mt-3 text-sm font-medium leading-6 text-zinc-300">{stat.label}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
