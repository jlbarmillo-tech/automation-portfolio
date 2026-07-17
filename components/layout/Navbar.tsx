'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const navigation = [
  { label: 'Home', href: '/' },
  { label: 'Portfolio', href: '/projects' },
  { label: 'Resume', href: '/resume' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setHasScrolled(window.scrollY > 16);
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsMenuOpen(false);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('keydown', onKeyDown);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, []);

  const isActive = (href: string) => href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="sticky top-0 z-50 w-full">
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        className={`mx-auto flex h-[72px] max-w-[1280px] items-center justify-between px-4 transition-[background-color,border-color,box-shadow] duration-300 sm:px-6 lg:px-8 ${
          hasScrolled
            ? 'border-x border-b border-zinc-800 bg-zinc-950/80 shadow-[0_12px_32px_rgba(0,0,0,0.28)] backdrop-blur-xl'
            : 'bg-transparent'
        }`}
      >
        <Link
  href="/"
  aria-label="John Lester Armillo — Home"
  className="group flex items-center gap-3 transition-opacity hover:opacity-90"
>
  <Image
    src="/branding/logo.png"
    alt="John Lester Armillo"
    width={48}
    height={48}
    className="h-11 w-auto"
  />

  <div className="hidden sm:block leading-tight">
    <h1 className="text-sm font-semibold text-white transition-colors group-hover:text-emerald-400">
      John Lester Armillo
    </h1>

    <p className="text-xs text-zinc-500">
      AI Automation Specialist
    </p>
  </div>
</Link>
        <div className="hidden lg:flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300">
  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
  Available for Freelance
</div>

        <nav aria-label="Primary navigation" className="hidden items-center gap-8 xl:flex">
          {navigation.map((item) => {
            const active = isActive(item.href);

            return (
              <Link
                key={item.label}
                href={item.href}
                aria-current={active ? 'page' : undefined}
                className={`text-sm font-medium transition-colors duration-200 hover:text-emerald-400 ${
                  active ? 'text-emerald-400' : hasScrolled ? 'text-zinc-300' : 'text-white/80'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden xl:block">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-emerald-500 hover:shadow-lg hover:shadow-emerald-500/20"
          >
            Let's Build
            <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <button
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setIsMenuOpen((open) => !open)}
          className={`inline-flex h-10 w-10 items-center justify-center rounded-full border transition-colors duration-200 xl:hidden ${
            hasScrolled
              ? 'border-zinc-800 bg-zinc-900 text-white hover:bg-zinc-800'
              : 'border-white/20 bg-white/10 text-white hover:bg-white/20'
          }`}
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </motion.div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            id="mobile-navigation"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mx-4 mt-2 rounded-2xl border border-zinc-800 bg-zinc-900/95 p-3 shadow-2xl shadow-black/30 backdrop-blur-xl sm:mx-6 lg:mx-8 xl:hidden"
          >
            <div className="grid gap-1">
              {navigation.map((item) => {
                const active = isActive(item.href);

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    aria-current={active ? 'page' : undefined}
                    onClick={() => setIsMenuOpen(false)}
                    className={`rounded-xl px-3 py-2.5 text-sm font-medium transition-colors hover:bg-white/10 hover:text-white ${
                      active ? 'bg-emerald-500/10 text-emerald-300' : 'text-zinc-200'
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <Link
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-emerald-500"
              >
                Let's Build
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
