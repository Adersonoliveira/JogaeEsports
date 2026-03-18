import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { Input } from "../../componets/Input";
import { Button } from "../../componets/Button";
import { styles } from "./styles";
import CitySelector from "../../componets/CitySelector";

const sportsList = [
    "Futebol",
    "Vôlei",
    "Basquete",
    "Futsal",
    "Tênis"
];

export default function Home() {
    const navigation = useNavigation<NavigationProp<any>>();

    const [name, setName] = useState("");
    const [city, setCity] = useState("");
    const [selectedSports, setSelectedSports] = useState<string[]>([]);
    const [loading, setLoading] = useState(false);

    function toggleSport(sport: string) {
        setSelectedSports((prev) => {
            if (prev.includes(sport)) {
                return prev.filter((item) => item !== sport);
            }
            return [...prev, sport];
        });
    }

    function handleContinue() {
        if (!name || !city) {
            return alert("Preencha os campos");
        }

        if (selectedSports.length === 0) {
            return alert("Selecione pelo menos um esporte");
        }

        console.log({
            name,
            city,
            selectedSports
        });

        // navigation.navigate("NextScreen")
    }

    return (
        <View style={styles.container}>

            <Text style={styles.title}>Onde você joga?</Text>

            {/* Inputs */}
            <CitySelector
                value={city}
                onChange={setCity}
            />

            {/* Seleção de esportes */}
            <Text style={styles.subtitle}>Quais esportes você joga?</Text>

            <View style={styles.sportsContainer}>
                {sportsList.map((sport) => {
                    const selected = selectedSports.includes(sport);

                    return (
                        <TouchableOpacity
                            key={sport}
                            style={[
                                styles.sportBox,
                                selected && styles.sportBoxSelected
                            ]}
                            onPress={() => toggleSport(sport)}
                        >
                            <Text
                                style={[
                                    styles.sportText,
                                    selected && styles.sportTextSelected
                                ]}
                            >
                                {sport}
                            </Text>
                        </TouchableOpacity>
                    );
                })}
            </View>

            {/* Botão */}
            <View style={{ marginTop: 30 }}>
                <Button
                    text="CONTINUAR"
                    loading={loading}
                    onPress={handleContinue}
                />
            </View>

        </View>
    );
}