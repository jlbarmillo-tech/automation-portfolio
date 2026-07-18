'use client';

import { BookingProvider } from '@/components/booking/BookingContext';
import BookingHero from '@/components/booking/BookingHero';
import ContactCard from '@/components/booking/ContactCard';
import ConsultationTypes from '@/components/booking/ConsultationTypes';
import BookingCalendar from '@/components/booking/BookingCalendar';
import TimeSlots from '@/components/booking/TimeSlots';
import BookingSummary from '@/components/booking/BookingSummary';
import BookingForm from '@/components/booking/BookingForm';

export default function ContactPage() {
  return (
    <BookingProvider>

      <main className="min-h-screen bg-zinc-950 py-24 text-white">

        <div className="mx-auto max-w-7xl px-6">

          <BookingHero />

          <div className="mt-14 grid gap-8 lg:grid-cols-[380px_1fr]">

            <ContactCard />

            <div className="space-y-8">

              <ConsultationTypes />

              <BookingCalendar />

              <TimeSlots />

              <BookingSummary />

              <BookingForm />

            </div>

          </div>

        </div>

      </main>

    </BookingProvider>
  );
}