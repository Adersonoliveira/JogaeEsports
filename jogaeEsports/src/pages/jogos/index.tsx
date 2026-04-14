import React from "react";
import { View, Text, ScrollView, TouchableOpacity, Alert } from "react-native";
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { styles } from "./styles";
import { useReservations } from "../../context/ReservationsContext";

export default function Jogos() {
  const { reservations, removeReservation } = useReservations();
  const navigation = useNavigation<NavigationProp<any>>();

  // 🔴 EXCLUIR
  const handleDelete = (reservation: any) => {
    Alert.alert(
      "Excluir",
      "Deseja remover essa reserva?",
      [
        { text: "Cancelar" },
        {
          text: "Excluir",
          style: "destructive",
          onPress: () => {
            removeReservation(reservation.id);

            navigation.navigate("Main", {
              screen: "Home",
            });
          }
        }
      ]
    );
  };

  const handleEdit = (reservation: any) => {
    navigation.navigate("DetalhesQuadra", {
      court: {
        id: reservation.courtId,
        name: reservation.courtName,
        city: reservation.city,
        sport: reservation.sport,
        price: reservation.price,
        rating: 0,
        image: reservation.image,
      },
      selectedTime: reservation.selectedTime
    });
  };

 const handleConfirm = (reservation: any) => {
  navigation.getParent()?.navigate("Pagamento", {
    reservation
  });
};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meus Jogos</Text>

      <Text style={styles.sub}>
        {reservations.length} horário(s) reservado(s)
      </Text>

      {reservations.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>
            Nenhuma reserva criada ainda.
          </Text>
        </View>
      ) : (
        <ScrollView
          contentContainerStyle={styles.listContainer}
          showsVerticalScrollIndicator={false}
        >
          {reservations.map((reservation) => (
            <View key={reservation.id} style={styles.reservationCard}>
              <View style={styles.cardContent}>
                
                {/* INFO */}
                <Text style={styles.reservationTitle}>
                  {reservation.courtName}
                </Text>

                <Text style={styles.reservationMeta}>
                  {reservation.city} • {reservation.sport}
                </Text>

                <Text style={styles.reservationTime}>
                  Horário: {reservation.selectedTime}
                </Text>

                <Text style={styles.reservationPrice}>
                  R$ {reservation.price.toFixed(0)}/h
                </Text>

                {/* BOTÕES */}
                <View style={{ flexDirection: "row", marginTop: 12 }}>

                  {/* CONFIRMAR */}
                  <TouchableOpacity
                    onPress={() => handleConfirm(reservation)}
                    style={{ marginRight: 20 }}
                  >
                    <Text style={{ color: "#34C759", fontWeight: "bold" }}>
                      ✅ Confirmar
                    </Text>
                  </TouchableOpacity>

                  {/* EDITAR */}
                  <TouchableOpacity
                    onPress={() => handleEdit(reservation)}
                    style={{ marginRight: 20 }}
                  >
                    <Text style={{ color: "#1E90FF", fontWeight: "bold" }}>
                      ✏️ Editar
                    </Text>
                  </TouchableOpacity>

                  {/* EXCLUIR */}
                  <TouchableOpacity
                    onPress={() => handleDelete(reservation)}
                  >
                    <Text style={{ color: "#FF3B30", fontWeight: "bold" }}>
                      🗑️ Excluir
                    </Text>
                  </TouchableOpacity>

                </View>

              </View>
            </View>
          ))}
        </ScrollView>
      )}
    </View>
  );
}