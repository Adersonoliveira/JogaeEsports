import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";

export default function newJogo() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Novo Jogo</Text>
    </View>
  );
}
