import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Login from "../pages/login";
import CidadeEsportes from "../pages/cidadeEsportes";
import Home from "../pages/home";
import Jogos from "../pages/jogos";
import NewJogos from "../pages/jogos/newJogo";
import Explorar from "../pages/explorar";
import Perfil from "../pages/perfil";
import DetalhesQuadra from "../pages/quadras/DetalhesQuadra";
import Pagamento from "../pages/pagamentos"; 
import CustomTabBar from "../componets/CustomTabBar";

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
            <Stack.Screen name="DetalhesQuadra" component={DetalhesQuadra} />
            <Stack.Screen name="Pagamento" component={Pagamento} />
            <Stack.Screen name="Main" component={MainTabs} />
        </Stack.Navigator>
    );
}

function MainTabs() {
    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator
            screenOptions={{ headerShown: false }}
            tabBar={(props) => <CustomTabBar {...props} />}
        >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Explorar" component={Explorar} />
            <Tab.Screen name="Criar" component={NewJogos} />
            <Tab.Screen name="Jogos" component={Jogos} />
            <Tab.Screen name="Perfil" component={Perfil} />
        </Tab.Navigator>
    );
}