'use client';

import { motion } from 'framer-motion';
import { GitBranch, Link as LinkIcon, Mail } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const navigation = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/projects' },
  { label: 'Resume', href: '/resume' },
  { label: 'Contact', href: '/contact' },
];


const connections = [
  {
    label: 'GitHub',
    href: 'https://github.com/jlbarmillo-tech',
    icon: GitBranch,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/john-lester-armillo/',
    icon: LinkIcon,
  },
  {
    label: 'Email',
    href: 'mailto:j.l.b.armillo@gmail.com',
    icon: Mail,
  },
];

const reveal = {
  duration: 0.5,
  ease: [0.16, 1, 0.3, 1] as const,
};

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950 text-white">
      <div className="mx-auto max-w-[1280px] px-4 py-14 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
          className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.7fr_0.8fr_0.8fr]"
        >
          <motion.div variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: reveal } }}>
            <Link href="/" aria-label="John Lester Armillo — Home" className="inline-flex transition-opacity hover:opacity-80">
              <Image src="/branding/logo.png" alt="John Lester Armillo" width={220} height={48} className="h-11 w-auto" />
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-6 text-zinc-400">
              Helping businesses streamline operations with AI-powered workflow automation, CRM systems, and custom integrations using n8n, GoHighLevel, Zapier, and modern AI tools.
            </p>
          </motion.div>

          <motion.nav variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: reveal } }} aria-label="Footer navigation">
            <h2 className="text-sm font-semibold text-white">Navigation</h2>
            <ul className="mt-5 space-y-3">
              {navigation.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-sm text-zinc-400 transition-colors hover:text-emerald-400 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-400">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.nav>

          <motion.nav variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: reveal } }} aria-label="Connect">
            <h2 className="text-sm font-semibold text-white">Connect</h2>
            <ul className="mt-5 space-y-3">
              {connections.map((connection) => {
                const Icon = connection.icon;

                return (
                  <li key={connection.label}>
                    <a
  href={connection.href}
  target="_blank"
  rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-emerald-400 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-400">
                      <Icon className="h-4 w-4" aria-hidden="true" />
                      {connection.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </motion.nav>
        </motion.div>

        <div className="mt-12 flex flex-col gap-3 border-t border-zinc-800 pt-6 text-xs text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
  © {new Date().getFullYear()} John Lester Armillo. All rights reserved.
</p>
          <p>Built with Next.js, TypeScript and Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
}
