import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "styled-components";
import { TextInputProps, TouchableOpacity } from "react-native";

import { Container, InputContainer } from "./styles";

interface InputProps {
    rightIcon?: boolean;
    leftIcon?: boolean;
    iconName?: React.ComponentProps<typeof Ionicons>["name"];
    iconSize?: number;
    iconColor?: string;
    secureTextEntry?: boolean;
}

const Input: React.FC<InputProps & TextInputProps> = ({
    rightIcon,
    leftIcon,
    iconName,
    iconSize,
    iconColor,
    secureTextEntry,
    ...rest
}) => {
    const { COLORS } = useTheme();
    const [secury, setSecury] = useState(secureTextEntry);

    return (
        <Container>
            {leftIcon && (
                <Ionicons
                    name={iconName}
                    size={iconSize}
                    color={iconColor || COLORS.GRAY2}
                    style={{ padding: 5 }}
                />
            )}
            <InputContainer
                {...rest}
                secureTextEntry={secury}
                underlineColorAndroid="transparent"
                placeholderTextColor={COLORS.GRAY3}
            />
            {rightIcon && (
                <TouchableOpacity onPress={() => setSecury(!secury)}>
                    <Ionicons
                        name={secury?'eye-off':'eye'}
                        size={iconSize}
                        color={iconColor || COLORS.GRAY2}
                        style={{ padding: 5 }}
                    />
                </TouchableOpacity>
            )}
        </Container>
    );
};

export { Input };
