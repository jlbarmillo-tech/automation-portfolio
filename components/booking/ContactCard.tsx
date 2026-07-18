'use client';

import Link from 'next/link';
import {
  Mail,
  Globe,
  FileText,
  BadgeCheck,
  Clock3,
} from 'lucide-react';

const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: 'j.l.b.armillo@gmail.com',
    href: 'mailto:j.l.b.armillo@gmail.com',
  },
  {
    icon: Globe,
    label: 'LinkedIn',
    value: 'linkedin.com/in/john-lester-armillo',
    href: 'https://www.linkedin.com/in/john-lester-armillo',
  },
  {
    icon: Globe,
    label: 'GitHub',
    value: 'github.com/jlbarmillo-tech',
    href: 'https://github.com/jlbarmillo-tech',
  },
];

export default function ContactCard() {
  return (
    <aside className="space-y-6">
      <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8">
        <div className="flex items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-600 text-2xl font-bold text-white">
            JL
          </div>

          <div>
            <h2 className="text-xl font-bold text-white">
              John Lester Armillo
            </h2>

            <p className="text-emerald-400">
              AI Automation Specialist
            </p>
          </div>
        </div>

        <div className="mt-8 space-y-5">
          {contactLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              target="_blank"
              className="flex items-center gap-4 rounded-2xl border border-zinc-800 bg-zinc-950 p-4 transition hover:border-emerald-500"
            >
              <item.icon
                size={20}
                className="text-emerald-400"
              />

              <div>
                <p className="text-xs uppercase tracking-wider text-zinc-500">
                  {item.label}
                </p>

                <p className="text-sm text-white">
                  {item.value}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8">
        <div className="flex items-center gap-3">
          <BadgeCheck className="text-emerald-400" />

          <h3 className="text-lg font-semibold text-white">
            Why Work With Me
          </h3>
        </div>

        <ul className="mt-6 space-y-4 text-sm text-zinc-300">
          <li>✓ AI Workflow Automation</li>
          <li>✓ n8n & Zapier Expert</li>
          <li>✓ CRM Integrations</li>
          <li>✓ API Automation</li>
          <li>✓ AI Agents & LLM Workflows</li>
        </ul>
      </div>

      <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8">
        <div className="flex items-center gap-3">
          <Clock3 className="text-emerald-400" />

          <h3 className="text-lg font-semibold text-white">
            Availability
          </h3>
        </div>

        <p className="mt-5 text-zinc-300">
          Monday – Friday
        </p>

        <p className="text-zinc-400">
          9:00 AM – 6:00 PM (GMT+8)
        </p>
      </div>

      <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8">
        <Link
          href="/resume/John_Lester_Armillo_AI_Automation_Specialist_Resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
              download
          className="flex items-center justify-center gap-3 rounded-xl bg-emerald-600 px-6 py-4 font-semibold text-white transition hover:bg-emerald-500"
        >
          <FileText size={18} />
          Download Resume
        </Link>
      </div>
    </aside>
  );
}