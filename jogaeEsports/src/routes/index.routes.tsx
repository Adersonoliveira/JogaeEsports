import React,{useEffect}from "react";


import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "../pages/login";
<<<<<<< HEAD
import CidadeEsportes from "../pages/cidadeEsportes";
=======
import Home from "../pages/home";
>>>>>>> 921168ead6de66d6187e89afe4bba95a46adf9b8
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
<<<<<<< HEAD
            <Stack.Screen name="CidadeEsportes" component={CidadeEsportes} />
=======
            <Stack.Screen name="Home" component={Home} />
>>>>>>> 921168ead6de66d6187e89afe4bba95a46adf9b8
        </Stack.Navigator>
    );
}