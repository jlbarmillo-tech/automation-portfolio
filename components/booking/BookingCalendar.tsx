'use client';

import { useMemo, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useBooking } from './BookingContext';

const WEEK_DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export default function BookingCalendar() {
  const { selectedDate, setSelectedDate } = useBooking();

  const today = new Date();

  const [currentMonth, setCurrentMonth] = useState(
    new Date(today.getFullYear(), today.getMonth(), 1)
  );

  const monthName = currentMonth.toLocaleString('default', {
    month: 'long',
  });

  const year = currentMonth.getFullYear();
  const month = currentMonth.getMonth();

  const firstDayIndex = new Date(year, month, 1).getDay();

  const daysInMonth = new Date(
    year,
    month + 1,
    0
  ).getDate();

  const calendarDays = useMemo(() => {
    return Array.from(
      { length: daysInMonth },
      (_, i) => i + 1
    );
  }, [daysInMonth]);

  function previousMonth() {
    setCurrentMonth(
      new Date(year, month - 1, 1)
    );
  }

  function nextMonth() {
    setCurrentMonth(
      new Date(year, month + 1, 1)
    );
  }

  return (
    <section className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8">

      <div className="flex items-center justify-between">

        <div>

          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
            Step 2
          </p>

          <h2 className="mt-2 text-3xl font-bold text-white">
            Select a Date
          </h2>

        </div>

        <div className="flex gap-2">

          <button
            type="button"
            onClick={previousMonth}
            className="rounded-xl border border-zinc-700 bg-zinc-950 p-2 transition hover:border-emerald-500"
          >
            <ChevronLeft size={18} />
          </button>

          <button
            type="button"
            onClick={nextMonth}
            className="rounded-xl border border-zinc-700 bg-zinc-950 p-2 transition hover:border-emerald-500"
          >
            <ChevronRight size={18} />
          </button>

        </div>

      </div>

      <div className="mt-8 text-center">

        <h3 className="text-xl font-semibold text-white">
          {monthName} {year}
        </h3>

      </div>

      <div className="mt-8 grid grid-cols-7 gap-2">

        {WEEK_DAYS.map((day) => (
          <div
            key={day}
            className="pb-2 text-center text-xs font-semibold uppercase tracking-wider text-zinc-500"
          >
            {day}
          </div>
        ))}

        {Array.from({
          length: firstDayIndex,
        }).map((_, index) => (
          <div key={index} />
        ))}

        {calendarDays.map((day) => {

          const date = new Date(
            year,
            month,
            day
          );

          const isToday =
            date.toDateString() ===
            today.toDateString();

          const isSelected =
            selectedDate?.toDateString() ===
            date.toDateString();

          const isPast =
            date <
            new Date(
              today.getFullYear(),
              today.getMonth(),
              today.getDate()
            );

          return (

            <button
              key={day}
              type="button"
              disabled={isPast}
              onClick={() =>
                setSelectedDate(date)
              }
              className={`
                h-12
                rounded-xl
                border
                text-sm
                font-medium
                transition-all

                ${
                  isPast
                    ? 'cursor-not-allowed border-zinc-900 bg-zinc-900 text-zinc-700'
                    : isSelected
                    ? 'border-emerald-500 bg-emerald-500 text-white'
                    : isToday
                    ? 'border-emerald-500 bg-zinc-950 text-white'
                    : 'border-zinc-800 bg-zinc-950 text-zinc-300 hover:border-emerald-500'
                }
              `}
            >
              {day}
            </button>

          );

        })}

      </div>

    </section>
  );
}