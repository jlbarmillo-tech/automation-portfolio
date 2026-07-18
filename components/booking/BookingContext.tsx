'use client';

import {
  createContext,
  ReactNode,
  useContext,
  useMemo,
  useState,
} from 'react';

export type ConsultationType =
  | 'discovery'
  | 'workflow'
  | 'consultation';

export interface BookingContextType {
  consultation: ConsultationType;
  setConsultation: React.Dispatch<
    React.SetStateAction<ConsultationType>
  >;

  selectedDate: Date | null;
  setSelectedDate: React.Dispatch<
    React.SetStateAction<Date | null>
  >;

  selectedTime: string;
  setSelectedTime: React.Dispatch<
    React.SetStateAction<string>
  >;

  resetBooking: () => void;
}

const BookingContext = createContext<
  BookingContextType | undefined
>(undefined);

export function BookingProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [consultation, setConsultation] =
    useState<ConsultationType>('discovery');

  const [selectedDate, setSelectedDate] =
    useState<Date | null>(null);

  const [selectedTime, setSelectedTime] =
    useState('');

  function resetBooking() {
    setConsultation('discovery');
    setSelectedDate(null);
    setSelectedTime('');
  }

  const value = useMemo(
    () => ({
      consultation,
      setConsultation,

      selectedDate,
      setSelectedDate,

      selectedTime,
      setSelectedTime,

      resetBooking,
    }),
    [
      consultation,
      selectedDate,
      selectedTime,
    ]
  );

  return (
    <BookingContext.Provider value={value}>
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  const context = useContext(BookingContext);

  if (!context) {
    throw new Error(
      'useBooking must be used inside BookingProvider.'
    );
  }

  return context;
}