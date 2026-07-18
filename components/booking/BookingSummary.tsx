'use client';

import {
  CalendarDays,
  Clock3,
  ClipboardList,
} from 'lucide-react';
import { useBooking } from './BookingContext';

const consultationLabels = {
  discovery: 'Discovery Call',
  workflow: 'Workflow Review',
  consultation: 'Project Consultation',
};

export default function BookingSummary() {
  const {
    consultation,
    selectedDate,
    selectedTime,
  } = useBooking();

  return (
    <section className="rounded-3xl border border-emerald-500/30 bg-gradient-to-br from-emerald-500/10 to-zinc-900 p-8">

      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
        Booking Summary
      </p>

      <h2 className="mt-2 text-3xl font-bold text-white">
        Review Your Booking
      </h2>

      <div className="mt-8 space-y-5">

        <div className="flex items-start gap-4 rounded-2xl border border-zinc-800 bg-zinc-950 p-5">

          <div className="rounded-xl bg-emerald-500/15 p-3">

            <ClipboardList
              size={20}
              className="text-emerald-400"
            />

          </div>

          <div>

            <p className="text-xs uppercase tracking-wider text-zinc-500">
              Consultation
            </p>

            <p className="mt-1 font-semibold text-white">
              {consultationLabels[consultation]}
            </p>

          </div>

        </div>

        <div className="flex items-start gap-4 rounded-2xl border border-zinc-800 bg-zinc-950 p-5">

          <div className="rounded-xl bg-emerald-500/15 p-3">

            <CalendarDays
              size={20}
              className="text-emerald-400"
            />

          </div>

          <div>

            <p className="text-xs uppercase tracking-wider text-zinc-500">
              Date
            </p>

            <p className="mt-1 font-semibold text-white">

              {selectedDate
                ? selectedDate.toLocaleDateString(undefined, {
                    weekday: 'long',
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                  })
                : 'Not Selected'}

            </p>

          </div>

        </div>

        <div className="flex items-start gap-4 rounded-2xl border border-zinc-800 bg-zinc-950 p-5">

          <div className="rounded-xl bg-emerald-500/15 p-3">

            <Clock3
              size={20}
              className="text-emerald-400"
            />

          </div>

          <div>

            <p className="text-xs uppercase tracking-wider text-zinc-500">
              Time
            </p>

            <p className="mt-1 font-semibold text-white">

              {selectedTime || 'Not Selected'}

            </p>

          </div>

        </div>

      </div>

    </section>
  );
}