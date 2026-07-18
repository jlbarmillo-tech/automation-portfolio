'use client';

import { CheckCircle2, Clock3 } from 'lucide-react';
import {
  ConsultationType,
  useBooking,
} from './BookingContext';

type Consultation = {
  id: ConsultationType;
  title: string;
  duration: string;
  description: string;
};

const consultations: Consultation[] = [
  {
    id: 'discovery',
    title: 'Discovery Call',
    duration: '30 Minutes',
    description:
      'Perfect for discussing your business, understanding your goals, and identifying automation opportunities.',
  },
  {
    id: 'workflow',
    title: 'Workflow Review',
    duration: '45 Minutes',
    description:
      'Review your existing workflows and receive recommendations to improve efficiency and scalability.',
  },
  {
    id: 'consultation',
    title: 'Project Consultation',
    duration: '60 Minutes',
    description:
      'A deep technical consultation for custom AI, CRM, API integrations, and complete automation solutions.',
  },
];

export default function ConsultationTypes() {
  const {
    consultation,
    setConsultation,
  } = useBooking();

  return (
    <section className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8">

      <div>

        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
          Step 1
        </p>

        <h2 className="mt-3 text-3xl font-bold text-white">
          Select a Consultation
        </h2>

        <p className="mt-2 text-zinc-400">
          Choose the type of consultation that best fits your project.
        </p>

      </div>

      <div className="mt-8 space-y-5">

        {consultations.map((item) => {

          const active = consultation === item.id;

          return (

            <button
              key={item.id}
              type="button"
              onClick={() => setConsultation(item.id)}
              className={`group w-full rounded-2xl border p-6 text-left transition-all duration-300 ${
                active
                  ? 'border-emerald-500 bg-emerald-500/10'
                  : 'border-zinc-800 bg-zinc-950 hover:border-emerald-500/50 hover:bg-zinc-900'
              }`}
            >

              <div className="flex items-start justify-between">

                <div>

                  <h3 className="text-xl font-semibold text-white">
                    {item.title}
                  </h3>

                  <div className="mt-3 flex items-center gap-2 text-sm text-emerald-400">

                    <Clock3 size={16} />

                    {item.duration}

                  </div>

                </div>

                <div>

                  {active ? (

                    <div className="rounded-full bg-emerald-500 p-2">

                      <CheckCircle2
                        size={18}
                        className="text-white"
                      />

                    </div>

                  ) : (

                    <div className="h-9 w-9 rounded-full border border-zinc-700 transition-colors group-hover:border-emerald-500" />

                  )}

                </div>

              </div>

              <p className="mt-5 leading-7 text-zinc-400">
                {item.description}
              </p>

            </button>

          );

        })}

      </div>

    </section>
  );
}