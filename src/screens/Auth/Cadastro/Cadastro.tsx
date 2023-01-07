import React from "react";
import { Text, KeyboardAvoidingView, ScrollView } from "react-native";
import { useTheme } from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";
import {
    Container,
    ContentHeader,
    Title,
    Description,
    ContentBody,
    ContentFooter,
    ButtonFooter,
    Title1,
    Title2,
} from "./styles";

function Cadastro() {

    const { COLORS } = useTheme();
    const navigation = useNavigation();

    const handleVoltarLogin = () => {
        navigation.navigate('Login');
    }

    return (
        /*<KeyboardAvoidingView
            behavior="position"
            enabled
        >*/
        <Container>
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <ContentHeader>
                    <Title> Seja bem vindo {"\n"} a App Wallet</Title>
                    <Description>CADASTRO</Description>
                </ContentHeader>
                <ContentBody>
                    <Input
                        leftIcon
                        iconSize={23}
                        iconColor={COLORS.GRAY3}
                        secureTextEntry={false}
                        iconName="person-outline"
                        placeholder="Digite seu nome"
                        autoCorrect={false}
                        keyboardType="default" /**o tipo de teclado */
                        autoCapitalize="none"
                    />

                    <Input
                        leftIcon
                        iconSize={23}
                        iconColor={COLORS.GRAY3}
                        secureTextEntry={false}
                        iconName="mail-outline"
                        placeholder="Digite seu e-mail"
                        autoCorrect={false}
                        keyboardType="email-address" /**o tipo de teclado */
                        autoCapitalize="none"
                    />

                    <Input
                        leftIcon
                        rightIcon
                        iconSize={23}
                        iconColor={COLORS.GRAY3}
                        secureTextEntry
                        iconName="lock-closed-outline"
                        placeholder="Digite sua senha"
                        autoCorrect={false}
                        keyboardType="default" /**o tipo de teclado */
                        autoCapitalize="none"
                    />

                    <Button
                        title="Cadastro"
                        onPress={() => {}}
                        style={{
                            marginTop: 50,
                        }}
                    />
                </ContentBody>

                <ContentFooter>
                    <ButtonFooter onPress={handleVoltarLogin}>
                        <Title1>Já tem conta?</Title1>
                        <Title2>Logar-se</Title2>
                    </ButtonFooter>
                </ContentFooter>
            </ScrollView>
        </Container>
        /*</KeyboardAvoidingView>*/
    );
}

export { Cadastro };
