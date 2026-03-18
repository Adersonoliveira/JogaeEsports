import React from "react";
import { TouchableOpacity, Text, View, Image } from "react-native";
import { styles } from "./styles";

type Props = {
  onPress: () => void;
};

export default function GoogleButton({ onPress }: Props) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <View style={styles.content}>
        <Image
          source={require("../../assets/google.svg")}
          style={{ width: 20, height: 20 }}
          resizeMode="contain"
        />
        <Text style={styles.text}>Entrar com Google</Text>
      </View>
    </TouchableOpacity>
  );
}