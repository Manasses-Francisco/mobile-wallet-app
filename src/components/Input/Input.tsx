import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "styled-components";
import { TextInputProps } from "react-native";

import { Container, InputContainer } from "./styles";

interface InputProps{
    rightIcon?:boolean;
    leftIcon?:boolean;
    iconName?:React.ComponentProps<typeof Ionicons>["name"];
    iconSize?:number;
    iconColor?:string;
}

const Input: React.FC<InputProps & TextInputProps> = ({rightIcon,leftIcon,iconName,iconSize,iconColor,...rest}) =>{

    const { COLORS } = useTheme();

    return (
        <Container>
            {leftIcon && (
                <Ionicons
                    name={iconName}
                    size={iconSize}
                    color={iconColor || COLORS.TEXTDARK}
                    style={{padding:5}}
                />
            )}
            <InputContainer
                {...rest}
                placeholderTextColor={COLORS.GRAY3}
            />
            {rightIcon && (
                <Ionicons
                    name={iconName}
                    size={iconSize}
                    color={iconColor || COLORS.TEXTDARK}
                    style={{padding:5}}
                />
            )}
        </Container>
    )
}

export {Input}
