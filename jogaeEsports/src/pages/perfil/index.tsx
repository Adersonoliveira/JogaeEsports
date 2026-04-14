import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  Alert
} from "react-native";
import {
  useNavigation,
  NavigationProp,
  CommonActions
} from "@react-navigation/native";
import { styles } from "./styles";

export default function Perfil() {
  const navigation = useNavigation<NavigationProp<any>>();

  const user = {
    name: "Marcio Silva",
    email: "marcio@gmail.com",
    phone: "(49) 99999-9999",
    city: "Chapecó - SC",
    avatar: "https://i.pravatar.cc/150?img=12"
  };

  
  const handleEdit = () => {
    Alert.alert("Editar Perfil", "Funcionalidade em construção");
  };


const handleLogout = () => {
  Alert.alert("Sair", "Deseja sair da conta?", [
    { text: "Cancelar" },
    {
      text: "Sair",
      style: "destructive",
      onPress: () => {

        const parent = navigation.getParent();

        if (parent) {
          parent.reset({
            index: 0,
            routes: [{ name: "Login" }],
          });
        }

      }
    }
  ]);
};

  return (
    <ScrollView style={styles.container}>
      
      
      <View style={styles.header}>
        <Image source={{ uri: user.avatar }} style={styles.avatar} />

        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.email}>{user.email}</Text>
      </View>

      
      <View style={styles.card}>
        
        <Text style={styles.label}>Telefone</Text>
        <Text style={styles.value}>{user.phone}</Text>

        <Text style={styles.label}>Cidade</Text>
        <Text style={styles.value}>{user.city}</Text>

      </View>

      
      <View style={styles.actions}>
        
        <TouchableOpacity style={styles.button} onPress={handleEdit}>
          <Text style={styles.buttonText}>Editar Perfil</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.logoutButton]}
          onPress={handleLogout}
        >
          <Text style={styles.buttonText}>Sair</Text>
        </TouchableOpacity>

      </View>

    </ScrollView>
  );
}