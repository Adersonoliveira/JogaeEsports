import React, { useState } from "react";
import { View, Text, ScrollView, ActivityIndicator } from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import CourtCard from "../../componets/CourtCard";
import { styles } from "./styles";

interface Court {
  id: string;
  name: string;
  city: string;
  sport: string;
  price: number;
  rating: number;
  image: string;
}

export default function Quadras() {
  const navigation = useNavigation<NavigationProp<any>>();
  const [loading, setLoading] = useState(false);

  // Dados mock - conectar com uma API aqui
  const courts: Court[] = [
    {
      id: "1",
      name: "Quadra Central",
      city: "São Paulo, SP",
      sport: "Futebol",
      price: 150.0,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=400&h=300&fit=crop",
    },
    {
      id: "2",
      name: "Arena Esportiva",
      city: "São Paulo, SP",
      sport: "Voleibol",
      price: 120.0,
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1564466809058-bf4114d55352?w=400&h=300&fit=crop",
    },
    {
      id: "3",
      name: "Complexo de Quadras",
      city: "São Paulo, SP",
      sport: "Tênis",
      price: 180.0,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1554068865-24cecd4e34c8?w=400&h=300&fit=crop",
    },
    {
      id: "4",
      name: "Ginásio Poliesportivo",
      city: "São Paulo, SP",
      sport: "Basquete",
      price: 140.0,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1546183612-12d7d2f01e80?w=400&h=300&fit=crop",
    },
    {
      id: "5",
      name: "Quadra Profissional",
      city: "São Paulo, SP",
      sport: "Futebol",
      price: 200.0,
      rating: 5.0,
      image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=400&h=300&fit=crop",
    },
  ];

  const handleCourtPress = (courtId: string) => {
    console.log("Quadra selecionada:", courtId);
    // Você pode navegar para detalhes da quadra aqui
    // navigation.navigate("CourtDetails", { courtId });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Quadras Disponíveis</Text>
        <Text style={styles.subtitle}>{courts.length} quadras encontradas</Text>
      </View>

      {loading ? (
        <ActivityIndicator
          size="large"
          color="#878af6"
          style={styles.loader}
        />
      ) : (
        <ScrollView
          style={styles.scrollView}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          {courts.map((court) => (
            <CourtCard
              key={court.id}
              id={court.id}
              name={court.name}
              city={court.city}
              sport={court.sport}
              price={court.price}
              rating={court.rating}
              image={court.image}
              onPress={() => handleCourtPress(court.id)}
            />
          ))}
        </ScrollView>
      )}
    </View>
  );
}
