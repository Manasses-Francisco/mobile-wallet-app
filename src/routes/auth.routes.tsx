import React from "react";
import { View, Text } from "react-native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Cadastro } from "../screens/Auth/Cadastro";
import { RecuperarSenha } from "../screens/Auth/RecuperarSenha";
import { Login } from "../screens/Auth/Login/Login";

const { Navigator, Screen } = createNativeStackNavigator();


const AuthRoutes = () => {
    return (
        <Navigator
            initialRouteName="Login"
            screenOptions={{
                headerShown:false
            }}
        >
            <Screen name="Login" component={Login}/>
            <Screen name="Cadastro" component={Cadastro}/>
            <Screen name="RecuperarSenha" component={RecuperarSenha}/>
        </Navigator>
    )
}

export { AuthRoutes }
