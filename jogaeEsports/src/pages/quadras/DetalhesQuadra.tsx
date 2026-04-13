import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView, Linking, Alert } from "react-native";
import { useNavigation, useRoute, NavigationProp } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import { styles } from "./DetalhesQuadra.styles";
import { useReservations } from "../../context/ReservationsContext";

interface CourtDetailsParams {
  court: {
    id: string;
    name: string;
    city: string;
    sport: string;
    price: number;
    rating: number;
    image: string;
  };
}

const horarios = ["18:00", "19:40", "20:00", "21:00", "22:00"];

export default function DetalhesQuadra() {
  const navigation = useNavigation<NavigationProp<any>>();
  const route = useRoute<any>();
  const { addReservation } = useReservations();
  const [activeTab, setActiveTab] = useState<"horarios" | "localizacao">("horarios");
  const [selectedTime, setSelectedTime] = useState<string>("");
  const court: CourtDetailsParams['court'] | undefined = route.params?.court;

  const handleReserve = () => {
    if (!selectedTime) {
      Alert.alert("Escolha um horário", "Selecione um horário antes de reservar.");
      return;
    }

    if (!court) {
      Alert.alert("Erro", "Dados da quadra não encontrados.");
      return;
    }

    // Adiciona a nova reserva
    addReservation({
      id: `${court.id}-${selectedTime}`,
      courtId: court.id,
      courtName: court.name,
      city: court.city,
      sport: court.sport,
      price: court.price,
      selectedTime,
    });

navigation.reset({
  index: 0,
  routes: [
    {
      name: "Main",
      state: {
        routes: [{ name: "Jogos" }],
      },
    },
  ],
});


    };
  const handleOpenMaps = () => {
    if (!court) {
      Alert.alert("Erro", "Dados da quadra não encontrados.");
      return;
    }
    const query = encodeURIComponent(`${court.name}, ${court.city}`);
    const url = `https://www.google.com/maps/search/?api=1&query=${query}`;
    Linking.openURL(url);
  };

  if (!court) {
    return (
      <View style={styles.container}>
        <Text>Quadra não encontrada</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerBar}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back" size={24} color="#1A1A1A" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuButton}>
          <MaterialIcons name="more-horiz" size={24} color="#1A1A1A" />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <Image source={{ uri: court.image }} style={styles.coverImage} />

        <View style={styles.infoCard}>
          <Text style={styles.courtName}>{court.name}</Text>
          <Text style={styles.locationText}>{court.city}</Text>
          <Text style={styles.priceText}>R$ {court.price.toFixed(0)}/h</Text>
        </View>

        <View style={styles.tabNavigation}>
          <TouchableOpacity
            style={[styles.tabButton, activeTab === "horarios" && styles.tabButtonActive]}
            onPress={() => setActiveTab("horarios")}
          >
            <Text style={[styles.tabText, activeTab === "horarios" && styles.tabTextActive]}>Horários Disponíveis</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tabButton, activeTab === "localizacao" && styles.tabButtonActive]}
            onPress={() => setActiveTab("localizacao")}
          >
            <Text style={[styles.tabText, activeTab === "localizacao" && styles.tabTextActive]}>Localização</Text>
          </TouchableOpacity>
        </View>

        {activeTab === "horarios" ? (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Horários Disponíveis</Text>
            <View style={styles.timesContainer}>
              {horarios.map((time) => (
                <TouchableOpacity
                  key={time}
                  style={[
                    styles.timePill,
                    selectedTime === time && styles.timePillActive,
                  ]}
                  onPress={() => setSelectedTime(time)}
                >
                  <Text style={[
                    styles.timeText,
                    selectedTime === time && styles.timeTextActive,
                  ]}>{time}</Text>
                </TouchableOpacity>
              ))}
            </View>
            {selectedTime ? (
              <Text style={styles.selectedTimeLabel}>Horário selecionado: {selectedTime}</Text>
            ) : null}
          </View>
        ) : (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Localização</Text>
            <Text style={styles.sectionDescription}>
              Veja a quadra no mapa e verifique como chegar.
            </Text>
            <TouchableOpacity style={styles.mapButton} onPress={handleOpenMaps}>
              <Text style={styles.mapButtonText}>Abrir no Maps</Text>
            </TouchableOpacity>
          </View>
        )}

        <TouchableOpacity style={styles.reserveButton} onPress={handleReserve}>
          <Text style={styles.reserveButtonText}>
            Reservar e Criar jogo
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
