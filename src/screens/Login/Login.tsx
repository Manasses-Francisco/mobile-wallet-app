import React,{useState} from "react";
import { SafeAreaView, Text } from "react-native";
import { useTheme } from "styled-components";

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { ButtonSocialGoogle } from "../../components/ButtonSocialGoogle/ButtonSocialGoogle";
import { ButtonSocial } from "../../components/ButtonSocial/ButtonSocial";
import {
    Container,
    ContentHeader,
    Title,
    Description,
    ViewButton,
    ContentBody,
    ContentFooter
 } from "./styles";

function Login() {

    const { COLORS } = useTheme();
    const [loading,setLoading] = useState(false);

    function onPressButron(){
        setLoading(true);
        console.log("pressionando");
        setTimeout(()=>{
            setLoading(false);
        },2000);
    }

    return (
        <SafeAreaView>
            <Container>
                <ContentHeader>
                    <Title>Seja bem vindo(a) {"\n"}a App Carteira</Title>

                    <Description>Entrar com rede sociais</Description>

                    <ViewButton>
                        <ButtonSocialGoogle title="Google"/>
                        <ButtonSocial title="Facebook" iconName="facebook"/>
                    </ViewButton>
                </ContentHeader>

                <ContentBody>
                    <Input
                        leftIcon
                        iconSize={25}
                        secureTextEntry={false} /** para  */
                        iconName="mail-outline"
                        autoCapitalize="none" /** para a primeira letra não seja manuscula */
                        autoCorrect={false} /** para o teclado de telefone não corrije os erros de nome  */
                        keyboardType="email-address" /** para especificar é um campo para digitar um e-mail */
                        placeholder="Digite seu e-mail"
                    />
                    <Input
                        leftIcon
                        rightIcon
                        iconSize={25}
                        secureTextEntry
                        iconName="lock-closed-outline"
                        keyboardType="default"
                        autoCorrect={false}
                        autoCapitalize="none"
                        placeholder="Digite a sua senha"
                    />

                    <Button
                        title="Entrar"
                        variant="primary"
                        onPress={onPressButron}
                        style={{marginBottom:20}}
                        isLoading={loading}
                    />
                </ContentBody>

                <ContentFooter>

                </ContentFooter>
            </Container>
        </SafeAreaView>
    );
}

export { Login };
