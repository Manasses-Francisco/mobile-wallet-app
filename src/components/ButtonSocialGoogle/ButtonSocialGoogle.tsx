import React from "react";
import { RectButtonProperties } from "react-native-gesture-handler";
import { View, Text } from "react-native";
import { Button, IconGoogle, Title } from "./styles";

import PngGoogle from "../../assets/google.png";

interface Props extends RectButtonProperties{
    title:string;
}

function ButtonSocialGoogle({title,...rest}:Props) {
    return (
        <Button {...rest}>
            <IconGoogle source={PngGoogle} resizeMode="contain" />
            <Title>{title}</Title>
        </Button>
    );
}

export { ButtonSocialGoogle };
