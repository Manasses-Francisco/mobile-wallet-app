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
                        iconName="mail-outline"
                        placeholder="Digite seu e-mail"
                    />
                    <Input
                        leftIcon
                        iconSize={25}
                        iconName="lock-closed-outline"
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
