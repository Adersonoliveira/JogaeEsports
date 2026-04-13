import React, { createContext, useContext, useState, ReactNode } from "react";

export interface Reservation {
  id: string;
  courtId: string;
  courtName: string;
  city: string;
  sport: string;
  price: number;
  selectedTime: string;
}

interface ReservationsContextData {
  reservations: Reservation[];
  addReservation: (reservation: Reservation) => void;
  removeReservation: (id: string) => void;
}

const ReservationsContext = createContext<ReservationsContextData | undefined>(undefined);

export function ReservationsProvider({ children }: { children: ReactNode }) {
  const [reservations, setReservations] = useState<Reservation[]>([]);

  const addReservation = (reservation: Reservation) => {
    setReservations((prev) => [...prev, reservation]);
  };

  const removeReservation = (id: string) => {
    setReservations((prev) => prev.filter(reservation => reservation.id !== id));
  };

  return (
    <ReservationsContext.Provider value={{ reservations, addReservation, removeReservation }}>
      {children}
    </ReservationsContext.Provider>
  );
}

export function useReservations() {
  const context = useContext(ReservationsContext);
  if (!context) {
    throw new Error("useReservations must be used within ReservationsProvider");
  }
  return context;
}
