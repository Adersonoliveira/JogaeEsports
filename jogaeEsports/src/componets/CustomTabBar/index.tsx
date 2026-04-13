import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { styles } from "./styles";

const icons: Record<string, string> = {
  Home: 'home',
  Jogos: 'game-controller',
  Criar: 'add-circle',
  Explorar: 'search',
  Perfil: 'person',
};

export default function CustomTabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  return (
    <View style={styles.tabBar}>
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;
        const iconName = icons[route.name] || 'ellipse';

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            key={route.key}
            onPress={onPress}
            style={styles.tabButton}
          >
            <Ionicons
              name={iconName as any}
              size={24}
              color={isFocused ? '#1f65ff' : '#666'}
            />
            <Text style={[styles.tabLabel, isFocused && styles.activeLabel]}>
              {route.name}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}