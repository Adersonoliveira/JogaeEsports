import React, { useState } from "react";


import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    FlatList
} from "react-native";
import { styles } from "./styles";

type Props = {
    value: string;
    onChange: (city: string) => void;
};

const citiesList = [
    "Chapecó",
    "Florianópolis",
    "Joinville",
    "Blumenau",
    "Curitiba",
    "Porto Alegre",
    "Criciúma",
    "Lages"
];

export default function CitySelector({ value, onChange }: Props) {
    const [search, setSearch] = useState("");
    const [open, setOpen] = useState(false);

    const filtered = citiesList.filter((city) =>
        city.toLowerCase().includes(search.toLowerCase())
    );

    function handleSelect(city: string) {
        onChange(city);
        setSearch(city);
        setOpen(false);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Selecione sua cidade</Text>

            <TouchableOpacity activeOpacity={1}>
                <TextInput
                    placeholder="São Paulo, Rio de Janeiro..."
                    value={search}
                    onChangeText={(text) => {
                        setSearch(text);
                        setOpen(true);

                        if (text === "") {
                            onChange(""); // limpa seleção
                        }
                    }}
                    onFocus={() => {
                        setSearch(value);
                        setOpen(true);
                    }}
                    style={styles.input}
                />
            </TouchableOpacity>

            {open && (
                <View style={styles.dropdown}>
                    <FlatList
                        data={filtered}
                        keyExtractor={(item) => item}
                        keyboardShouldPersistTaps="handled"
                        renderItem={({ item }) => {
                            const selected = value === item;

                            return (
                                <TouchableOpacity
                                    style={[
                                        styles.item,
                                        selected && styles.itemSelected
                                    ]}
                                    onPress={() => handleSelect(item)}
                                >
                                    <Text
                                        style={[
                                            styles.text,
                                            selected && styles.textSelected
                                        ]}
                                    >
                                        {item}
                                    </Text>
                                </TouchableOpacity>
                            );
                        }}
                    />
                </View>
            )}
        </View>
    );
}