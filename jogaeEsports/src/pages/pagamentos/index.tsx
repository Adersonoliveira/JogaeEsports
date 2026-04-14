import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  TextInput
} from "react-native";
import {
  useRoute,
  useNavigation,
  NavigationProp,
  CommonActions
} from "@react-navigation/native";
import { styles } from "./styles";

export default function Pagamento() {
  const route = useRoute<any>();
  const navigation = useNavigation<NavigationProp<any>>();

  const reservation = route.params?.reservation;

  const [method, setMethod] = useState<"pix" | "card" | null>(null);

  const [cardNumber, setCardNumber] = useState("");
  const [name, setName] = useState("");
  const [cvv, setCvv] = useState("");
  const [validity, setValidity] = useState("");

  const pixCode =
    "00020126360014BR.GOV.BCB.PIX0114+559999999999520400005303986540520.005802BR5920JOGAEAPP6009SAOPAULO62070503***6304ABCD";

  if (!reservation) {
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: "center", marginTop: 50 }}>
          Erro: reserva não encontrada
        </Text>
      </View>
    );
  }

  const handlePayment = () => {

    if (!method) {
      Alert.alert("Selecione um método", "Escolha PIX ou Cartão.");
      return;
    }


    if (method === "card") {
      if (!cardNumber || !name || !cvv || !validity) {
        Alert.alert("Erro", "Preencha todos os dados do cartão.");
        return;
      }
    }

    Alert.alert(
      "Pagamento realizado!",
      "Seu jogo foi confirmado com sucesso 🎉",
      [
        {
          onPress: () => {
            navigation.dispatch(
              CommonActions.reset({
                index: 0,
                routes: [
                  {
                    name: "Main",
                    state: {
                      index: 0,
                      routes: [{ name: "Home" }],
                    },
                  },
                ],
              })
            );
          },
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pagamento</Text>

      <View style={styles.card}>
        
        {/* INFO */}
        <Text style={styles.label}>Quadra</Text>
        <Text>{reservation.courtName}</Text>

        <Text style={styles.label}>Horário</Text>
        <Text>{reservation.selectedTime}</Text>

        <Text style={styles.label}>Valor</Text>
        <Text>R$ {reservation.price.toFixed(2)}</Text>

        <View style={{ flexDirection: "row", marginTop: 15 }}>
          
          <TouchableOpacity
            onPress={() => setMethod("pix")}
            style={[
              styles.methodButton,
              method === "pix" && styles.methodSelected
            ]}
          >
            <Text style={styles.methodText}>PIX</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setMethod("card")}
            style={[
              styles.methodButton,
              method === "card" && styles.methodSelected
            ]}
          >
            <Text style={styles.methodText}>Cartão</Text>
          </TouchableOpacity>

        </View>

        {method === "pix" && (
          <View style={{ marginTop: 15 }}>
            
            <View style={styles.qrCode}>
              <Text>QR CODE</Text>
            </View>

            <Text style={styles.pixCode}>{pixCode}</Text>

            <TouchableOpacity
              style={styles.copyButton}
              onPress={() =>
                Alert.alert("Copiado!", "Código PIX copiado.")
              }
            >
              <Text style={{ color: "#FFF" }}>
                Copiar código
              </Text>
            </TouchableOpacity>

          </View>
        )}

        {method === "card" && (
          <View style={{ marginTop: 15 }}>
            
            <TextInput
              placeholder="Número do cartão"
              value={cardNumber}
              onChangeText={setCardNumber}
              style={styles.input}
              keyboardType="numeric"
            />

            <TextInput
              placeholder="Nome no cartão"
              value={name}
              onChangeText={setName}
              style={styles.input}
            />

            <View style={{ flexDirection: "row" }}>
              
              <TextInput
                placeholder="Validade"
                value={validity}
                onChangeText={setValidity}
                style={[styles.input, { flex: 1, marginRight: 5 }]}
              />

              <TextInput
                placeholder="CVV"
                value={cvv}
                onChangeText={setCvv}
                style={[styles.input, { flex: 1, marginLeft: 5 }]}
                keyboardType="numeric"
              />

            </View>
          </View>
        )}
      </View>

      <TouchableOpacity
        style={styles.payButton}
        onPress={handlePayment}
        activeOpacity={0.8}
      >
        <Text style={styles.payButtonText}>
          Confirmar pagamento
        </Text>
      </TouchableOpacity>
    </View>
  );
}