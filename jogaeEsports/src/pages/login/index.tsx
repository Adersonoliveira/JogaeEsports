import React, { useState } from "react";
import { style } from "./styles";
import { Input } from "../../componets/Input";
import { Button } from "../../componets/Button";
import { Text, View, Alert } from 'react-native'
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { MaterialIcons, Octicons } from "@expo/vector-icons";
import GoogleButton from "../../componets/GoogleButton";

export default function Login() {
    const navigation = useNavigation<NavigationProp<any>>();

    const [email, setEmail] = useState('marcio@gmail.com');
    const [password, setPassword] = useState('12345');
    const [showPassword, setShowPassword] = useState(true);
    const [loading, setLoading] = useState(false);


async function getLogin() {
  try {
    setLoading(true);

    if (!email || !password) {
      return Alert.alert('Atenção', 'Informe os campos obrigatórios!');
    }

    if (email === 'marcio@gmail.com' && password === '12345') {
      
      // 🔥 aqui está o que importa
      navigation.reset({
        index: 0,
        routes: [{ name: 'CidadeEsportes' }]
      });

      return;
    }

    Alert.alert('Atenção', 'E-mail ou senha inválido!');
  } catch (error) {
    console.log(error);
  } finally {
    setLoading(false);
  }
}

    return (
        <View style={style.container}>
            <View style={style.boxTop}>
                <Text style={style.text}>Bem vindo ao JogaeEsports</Text>
            </View>
            <View style={style.boxMid}>
                <Input
                    title="ENDEREÇO E-MAIL"
                    value={email}
                    onChangeText={setEmail}
                    IconRigth={MaterialIcons}
                    iconRightName="email"
                    onIconRigthPress={() => console.log('OLA')}
                />
                <Input
                    title="SENHA"
                    value={password}
                    onChangeText={setPassword}
                    IconRigth={Octicons}
                    iconRightName={showPassword ? "eye-closed" : "eye"}
                    onIconRigthPress={() => setShowPassword(!showPassword)}
                    secureTextEntry={true}
                    multiline={false}
                />
            </View>
            <View style={style.boxBottom}>
                <Button text="ENTRAR" loading={loading} onPress={() => getLogin()} />
                <GoogleButton onPress={() => console.log('Google login')} />
            </View>
        </View>
    )
}