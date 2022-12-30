import React from "react";
import { RectButtonProperties } from "react-native-gesture-handler";
import { Fontisto } from "@expo/vector-icons";

import { View, Text } from "react-native";
import { Button, Title, IconFacebook} from "./styles";

import PngGoogle from "../../assets/google.png";

interface Props extends RectButtonProperties{
    title:string;
    iconName:React.ComponentProps<typeof Fontisto>["name"];
}

function ButtonSocial({title,iconName,...rest}:Props) {
    return (
        <Button {...rest}>
            <IconFacebook name={iconName}/>
            <Title>{title}</Title>
        </Button>
    );
}

export { ButtonSocial };
