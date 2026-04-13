import React from "react";
import { View, Text, ScrollView } from "react-native";
import { styles } from "./styles";
import { useReservations } from "../../context/ReservationsContext";

export default function Jogos() {
  const { reservations } = useReservations();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meus Jogos</Text>
      <Text style={styles.sub}>{reservations.length} horário(s) reservado(s)</Text>

      {reservations.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>Nenhuma reserva criada ainda.</Text>
        </View>
      ) : (
        <ScrollView contentContainerStyle={styles.listContainer} showsVerticalScrollIndicator={false}>
          {reservations.map((reservation) => (
            <View key={reservation.id} style={styles.reservationCard}>
              <View style={styles.cardContent}>
                <Text style={styles.reservationTitle}>{reservation.courtName}</Text>
                <Text style={styles.reservationMeta}>{reservation.city} • {reservation.sport}</Text>
                <Text style={styles.reservationTime}>Horário: {reservation.selectedTime}</Text>
                <Text style={styles.reservationPrice}>R$ {reservation.price.toFixed(0)}/h</Text>
              </View>
            </View>
          ))}
        </ScrollView>
      )}
    </View>
  );
}
