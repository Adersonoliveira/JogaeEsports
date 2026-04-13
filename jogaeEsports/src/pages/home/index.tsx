import React, { useState, useMemo, useEffect } from "react";
import { View, Text, ScrollView, ActivityIndicator, TouchableOpacity } from "react-native";
import { useNavigation, NavigationProp, useRoute, RouteProp } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import { Input } from "../../componets/Input";
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

export default function Home() {
  const navigation = useNavigation<NavigationProp<any>>();
  const route = useRoute<RouteProp<any>>();
  const [loading, setLoading] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [userCity, setUserCity] = useState<string>("");

  const courts: Court[] = [
    {
      id: "1",
      name: "Quadra Central - Volei de Quadra",
      city: "São Paulo",
      sport: "Voleibol",
      price: 150.0,
      rating: 4.8,
      image: "https://st2.depositphotos.com/1704023/46428/i/450/depositphotos_464283366-stock-photo-sport-arena-interior-professional-volleyball.jpg",
    },
    {
      id: "2",
      name: "Quadra Esportiva",
      city: "Chapeco",
      sport: "Futsal",
      price: 120.0,
      rating: 4.6,
      image: "https://i.pinimg.com/736x/9f/1b/8a/9f1b8a3a24c760451a9cf6265930c43f.jpg",
    },
    {
      id: "3",
      name: "Quadra estação beat",
      city: "Chapeco",
      sport: "Voleibol de areia",
      price: 100.0,
      rating: 4.9,
      image: "https://www.adec.com.br/admin/image/reserva_area/9/42lg.jpg",
    },
    {
      id: "4",
      name: "Quadra aberta",
      city: "Chapeco",
      sport: "Voleibol de areia",
      price: 140.0,
      rating: 4.7,
      image: "https://www.elase.com.br/wp-content/uploads/IMG_9042-1.jpg",
    },
    {
      id: "5",
      name: "Quadra Profissional",
      city: "São Paulo",
      sport: "Futebol Society",
      price: 200.0,
      rating: 5.0,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWMla_2qATzFbWM0u5DoxCosTNvaZlVkufcw&s",
    },
    {
      id: "6",
      name: "Quadra fechada - Volei de areia",
      city: "Chapeco",
      sport: "Voleibol de areia",
      price: 160.0,
      rating: 4.7,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7UjPNDCBLmH8QVq5HtJn5d1TYo-FbDgZ9xg&s",
    },
    {
      id: "7",
      name: "Quadra Copacabana",
      city: "Rio de Janeiro",
      sport: "Voleibol",
      price: 140.0,
      rating: 4.9,
      image: "https://st2.depositphotos.com/1704023/46428/i/450/depositphotos_464283366-stock-photo-sport-arena-interior-professional-volleyball.jpg",
    },
    {
      id: "8",
      name: "Quadra fechada Padel",
      city: "Chapeco",
      sport: "Padel",
      price: 130.0,
      rating: 4.5,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM8ByPQ7E0FTRES2LkCuASYGhJvcNoh4enhQ&s",
    },
  ];

  useEffect(() => {
    if (route.params?.city) {
      setUserCity(route.params.city);
    }
  }, [route.params?.city]);

  const filteredCourts = useMemo(() => {
    let filtered = courts;

    // Filtrar pela cidade selecionada
    if (userCity) {
      filtered = filtered.filter((court) =>
        court.city.toLowerCase() === userCity.toLowerCase()
      );
    }

    // Aplicar filtro de busca
    if (!searchText.trim()) {
      return filtered;
    }

    const lowerSearchText = searchText.toLowerCase();

    return filtered.filter((court) =>
      court.name.toLowerCase().includes(lowerSearchText) ||
      court.sport.toLowerCase().includes(lowerSearchText) ||
      court.city.toLowerCase().includes(lowerSearchText)
    );
  }, [searchText, userCity]);

  const handleCourtPress = (court: Court) => {
    navigation.navigate("DetalhesQuadra", { court });
  };

  const handleChangeCity = () => {
    navigation.navigate("CidadeEsportes");
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <View style={styles.headerInfo}>
            <Text style={styles.title}>Quadras Disponíveis</Text>
            <Text style={styles.subtitle}>
              {userCity ? `Em ${userCity}` : "Selecione uma cidade"} • {filteredCourts.length} quadras
            </Text>
          </View>
          {userCity && (
            <TouchableOpacity
              style={styles.changeCityButton}
              onPress={handleChangeCity}
            >
              <MaterialIcons name="location-on" size={24} color="#878af6" />
            </TouchableOpacity>
          )}
        </View>

        <Input
          placeholder="Buscar quadra, esporte ou cidade..."
          value={searchText}
          onChangeText={setSearchText}
          IconLeft={MaterialIcons}
          iconLeftName="search"
          height={45}
          placeholderTextColor="#999"
        />
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
          {filteredCourts.length === 0 ? (
            <View style={styles.emptyState}>
              <Text style={styles.emptyStateText}>Nenhuma quadra encontrada</Text>
              <Text style={styles.emptyStateSubtext}>Tente buscar por outro termo</Text>
            </View>
          ) : (
            filteredCourts.map((court) => (
              <CourtCard
                key={court.id}
                id={court.id}
                name={court.name}
                city={court.city}
                sport={court.sport}
                price={court.price}
                rating={court.rating}
                image={court.image}
                onPress={() => handleCourtPress(court)}
              />
            ))
          )}
        </ScrollView>
      )}
    </View>
  );
}
