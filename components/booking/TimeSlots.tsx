'use client';

import { Clock3 } from 'lucide-react';
import { useBooking } from './BookingContext';

const TIME_SLOTS = [
  '09:00 AM',
  '10:00 AM',
  '11:00 AM',
  '01:00 PM',
  '02:00 PM',
  '03:00 PM',
  '04:00 PM',
  '05:00 PM',
];

export default function TimeSlots() {
  const {
    selectedDate,
    selectedTime,
    setSelectedTime,
  } = useBooking();

  if (!selectedDate) {
    return (
      <section className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8">

        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
          Step 3
        </p>

        <h2 className="mt-2 text-3xl font-bold text-white">
          Select a Time
        </h2>

        <div className="mt-8 rounded-2xl border border-dashed border-zinc-700 bg-zinc-950 p-10 text-center">

          <Clock3
            size={42}
            className="mx-auto text-zinc-600"
          />

          <p className="mt-4 text-zinc-400">
            Please select a date first.
          </p>

        </div>

      </section>
    );
  }

  return (
    <section className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8">

      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
        Step 3
      </p>

      <h2 className="mt-2 text-3xl font-bold text-white">
        Select a Time
      </h2>

      <p className="mt-2 text-zinc-400">
        {selectedDate.toLocaleDateString(undefined, {
          weekday: 'long',
          month: 'long',
          day: 'numeric',
          year: 'numeric',
        })}
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

        {TIME_SLOTS.map((time) => {

          const active =
            selectedTime === time;

          return (

            <button
              key={time}
              type="button"
              onClick={() =>
                setSelectedTime(time)
              }
              className={`rounded-2xl border px-5 py-4 text-sm font-medium transition-all duration-300 ${
                active
                  ? 'border-emerald-500 bg-emerald-500 text-white'
                  : 'border-zinc-700 bg-zinc-950 text-zinc-300 hover:border-emerald-500 hover:bg-zinc-900'
              }`}
            >
              {time}
            </button>

          );

        })}

      </div>

    </section>
  );
}