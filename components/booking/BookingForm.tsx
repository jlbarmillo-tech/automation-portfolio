'use client';

import { FormEvent, useState } from 'react';
import { Send } from 'lucide-react';
import { useBooking } from './BookingContext';

const API_URL = process.env.NEXT_PUBLIC_BOOKING_API!;

export default function BookingForm() {
  const {
    consultation,
    selectedDate,
    selectedTime,
  } = useBooking();

  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);

  function updateField(
    key: keyof typeof form,
    value: string
  ) {
    setForm((prev) => ({
      ...prev,
      [key]: value,
    }));
  }

  async function handleSubmit(
    e: FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    if (!selectedDate) {
      alert('Please select a date.');
      return;
    }

    if (!selectedTime) {
      alert('Please select a time.');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('/api/booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          company: form.company,
          message: form.message,
          consultation,
          date: selectedDate.toLocaleDateString('en-CA'),
          time: selectedTime,
        }),
      });

      const result = await response.json();

      if (!result.success) {
        throw new Error(result.message);
      }

      alert('🎉 Booking confirmed! Check your email.');

      setForm({
        name: '',
        email: '',
        company: '',
        message: '',
      });

    } catch (error) {
      console.error(error);

      alert(
        error instanceof Error
          ? error.message
          : 'Booking failed.'
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8">

      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
        Step 4
      </p>

      <h2 className="mt-2 text-3xl font-bold text-white">
        Your Information
      </h2>

      <form
        onSubmit={handleSubmit}
        className="mt-8 space-y-6"
      >

        <div className="grid gap-6 md:grid-cols-2">

          <div>

            <label className="mb-2 block text-sm font-medium text-zinc-300">
              Full Name
            </label>

            <input
              required
              value={form.name}
              onChange={(e) =>
                updateField('name', e.target.value)
              }
              className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none focus:border-emerald-500"
            />

          </div>

          <div>

            <label className="mb-2 block text-sm font-medium text-zinc-300">
              Email
            </label>

            <input
              required
              type="email"
              value={form.email}
              onChange={(e) =>
                updateField('email', e.target.value)
              }
              className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none focus:border-emerald-500"
            />

          </div>

        </div>

        <div>

          <label className="mb-2 block text-sm font-medium text-zinc-300">
            Company
          </label>

          <input
            value={form.company}
            onChange={(e) =>
              updateField('company', e.target.value)
            }
            className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none focus:border-emerald-500"
          />

        </div>

        <div>

          <label className="mb-2 block text-sm font-medium text-zinc-300">
            Project Details
          </label>

          <textarea
            rows={6}
            value={form.message}
            onChange={(e) =>
              updateField('message', e.target.value)
            }
            className="w-full resize-none rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none focus:border-emerald-500"
          />

        </div>

        <button
          disabled={loading}
          className="flex w-full items-center justify-center gap-3 rounded-xl bg-emerald-600 px-6 py-4 font-semibold text-white hover:bg-emerald-500 disabled:opacity-60"
        >
          <Send size={18} />

          {loading
            ? 'Submitting...'
            : 'Book Consultation'}
        </button>

      </form>

    </section>
  );
}