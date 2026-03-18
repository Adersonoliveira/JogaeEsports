import React,{useEffect}from "react";


import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "../pages/login";
import CidadeEsportes from "../pages/cidadeEsportes";
import { themas } from "../global/themes";

export default function Routes() {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{
                headerShown: false,
                contentStyle: { backgroundColor: '#FFF' }
            }}
        >
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="CidadeEsportes" component={CidadeEsportes} />
        </Stack.Navigator>
    );
}