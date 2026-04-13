import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { styles } from "./styles";

interface CourtCardProps {
  id: string;
  name: string;
  city: string;
  sport: string;
  price: number;
  rating: number;
  image: string;
  onPress: () => void;
}

export default function CourtCard({
  id,
  name,
  city,
  sport,
  price,
  rating,
  image,
  onPress,
}: CourtCardProps) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={{ uri: image }} style={styles.image} />
      
      <View style={styles.ratingBadge}>
        <Text style={styles.ratingText}>⭐ {rating}</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.courtName}>{name}</Text>
        
        <View style={styles.infoRow}>
          <Text style={styles.sport}>{sport}</Text>
          <Text style={styles.city}>{city}</Text>
        </View>

        <View style={styles.footer}>
          <Text style={styles.price}>R$ {price.toFixed(2)}</Text>
          <Text style={styles.cta}>Ver detalhes →</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
