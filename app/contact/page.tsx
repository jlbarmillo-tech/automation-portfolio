'use client';

import { motion } from 'framer-motion';
import { BriefcaseBusiness, CalendarDays, GitBranch, Link as LinkIcon, Mail, MapPin } from 'lucide-react';
import Link from 'next/link';
import { FormEvent, useState } from 'react';
import emailjs from '@emailjs/browser';

const contactDetails = [
  {
  label: 'Professional Email',
  value: 'j.l.b.armillo@gmail.com',
  href: 'mailto:j.l.b.armillo@gmail.com',
  icon: Mail,
},
  {
  label: 'LinkedIn',
  href: 'https://www.linkedin.com/in/john-lester-armillo/',
  icon: LinkIcon,
  value: 'John Lester Armillo'
  
},
  {
  label: 'GitHub',
  href: 'https://github.com/jlbarmillo-tech',
  icon: GitBranch,
  value: 'GitHub Portfolio'
  
},
  { label: 'Location', value: 'Philippines', icon: MapPin },
  { label: 'Availability', value: 'Available for freelance and full-time opportunities', icon: BriefcaseBusiness },
];

const reveal = {
  duration: 0.6,
  ease: [0.16, 1, 0.3, 1] as const,
};

export default function ContactPage() {
  const [sending, setSending] = useState(false);
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
  event.preventDefault();

  setSending(true);

  const form = event.currentTarget;

  try {
    await emailjs.sendForm(
      'service_s0k4fk6',
      'template_e8p9gdk',
      form,
      'RjRLYq6IoakxlzEni'
    );

    alert('✅ Thank you! Your message has been sent successfully.');

    form.reset();
  } catch (error) {
    console.error(error);

    alert('❌ Failed to send your message. Please try again.');
  } finally {
    setSending(false);
  }
};

  return (
    <main className="min-h-screen overflow-hidden bg-zinc-950 py-28 text-white sm:py-32">
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-[34rem] overflow-hidden">
        <div className="absolute left-1/2 top-0 h-80 w-3/4 -translate-x-1/2 rounded-full bg-emerald-500/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <motion.header
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={reveal}
          className="max-w-3xl"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-400">Contact</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl">
            Let&apos;s Build Your Next Automation
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg sm:leading-8">
            Whether you&apos;re exploring CRM automation, AI workflows, or better business processes, let&apos;s discuss a system that helps your team move faster.
          </p>
        </motion.header>

        <div className="mt-14 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <motion.section
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={reveal}
            aria-labelledby="contact-information-heading"
            className="rounded-3xl border border-zinc-800 bg-zinc-900 p-7 shadow-xl shadow-black/15 sm:p-8"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">Get in touch</p>
            <h2 id="contact-information-heading" className="mt-3 text-2xl font-semibold text-white">Contact Information</h2>

            <ul className="mt-8 space-y-5">
              {contactDetails.map((detail) => {
                const Icon = detail.icon;
                const content = (
                  <>
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-emerald-500/20 bg-emerald-500/10 text-emerald-400">
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs font-medium text-zinc-500">{detail.label}</span>
                      <span className="mt-1 block break-words text-sm font-medium leading-6 text-zinc-200">{detail.value}</span>
                    </span>
                  </>
                );

                return (
                  <li key={detail.label}>
                    {detail.href ? (
                      <a href={detail.href} className="flex gap-3 rounded-xl transition-colors hover:text-emerald-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-400">
                        {content}
                      </a>
                    ) : (
                      <div className="flex gap-3">{content}</div>
                    )}
                  </li>
                );
              })}
            </ul>
          </motion.section>

          <motion.section
            id="contact-form"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ ...reveal, delay: 0.08 }}
            aria-labelledby="contact-form-heading"
            className="rounded-3xl border border-zinc-800 bg-zinc-900 p-7 shadow-xl shadow-black/15 sm:p-8"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">Start a conversation</p>
            <h2 id="contact-form-heading" className="mt-3 text-2xl font-semibold text-white">Professional Contact Form</h2>

            <form onSubmit={handleSubmit} className="mt-8 grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-medium text-zinc-300">
                Name
                <input required name="name" autoComplete="name" className="rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none transition-colors placeholder:text-zinc-600 focus:border-emerald-500" placeholder="Your name" />
              </label>
              <label className="grid gap-2 text-sm font-medium text-zinc-300">
                Email
                <input required type="email" name="email" autoComplete="email" className="rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none transition-colors placeholder:text-zinc-600 focus:border-emerald-500" placeholder="you@company.com" />
              </label>
              <label className="grid gap-2 text-sm font-medium text-zinc-300">
                Company
                <input name="company" autoComplete="organization" className="rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none transition-colors placeholder:text-zinc-600 focus:border-emerald-500" placeholder="Company name" />
              </label>
              <label className="grid gap-2 text-sm font-medium text-zinc-300">
                Project Type
                <select required name="projectType" defaultValue="" className="rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none transition-colors focus:border-emerald-500">
                  <option value="" disabled>Select a project type</option>
                  <option>CRM Automation</option>
                  <option>AI Automation</option>
                  <option>Workflow Automation</option>
                  <option>API Integration</option>
                  <option>Other</option>
                </select>
              </label>
              <label className="grid gap-2 text-sm font-medium text-zinc-300 sm:col-span-2">
                Budget
                <select required name="budget" defaultValue="" className="rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none transition-colors focus:border-emerald-500">
                  <option value="" disabled>Select your budget</option>
                  <option>&lt; $500</option>
                  <option>$500–$1000</option>
                  <option>$1000–$3000</option>
                  <option>$3000+</option>
                </select>
              </label>
              <label className="grid gap-2 text-sm font-medium text-zinc-300 sm:col-span-2">
                Message
                <textarea required name="message" rows={6} className="resize-y rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none transition-colors placeholder:text-zinc-600 focus:border-emerald-500" placeholder="Tell me about the process you would like to automate." />
              </label>
              <button
  type="submit"
  disabled={sending}
  className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-emerald-500 hover:shadow-lg hover:shadow-emerald-500/20 disabled:cursor-not-allowed disabled:opacity-60 sm:col-span-2"
>
  {sending ? 'Sending...' : 'Send Message'}
</button>
            </form>
          </motion.section>
        </div>

        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={reveal}
          aria-labelledby="contact-cta-heading"
          className="relative mt-16 overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900 p-7 shadow-2xl shadow-black/20 sm:p-10"
        >
          <div aria-hidden="true" className="absolute right-0 top-0 h-48 w-72 rounded-full bg-emerald-500/10 blur-3xl" />
          <div className="relative flex flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">Next step</p>
              <h2 id="contact-cta-heading" className="mt-3 text-2xl font-semibold text-white sm:text-3xl">Ready to automate your business?</h2>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a href="#contact-form" className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-emerald-500 hover:shadow-lg hover:shadow-emerald-500/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400">
                <CalendarDays className="h-4 w-4" aria-hidden="true" />
                Schedule Discovery Call
              </a>
              <Link href="/resume" className="inline-flex items-center justify-center rounded-full border border-zinc-700 bg-zinc-950/50 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-emerald-500/60 hover:text-emerald-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400">
                Download Resume
              </Link>
            </div>
          </div>
        </motion.section>
      </div>
    </main>
  );
}
