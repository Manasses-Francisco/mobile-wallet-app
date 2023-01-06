import React from "react";
import { ActivityIndicator, PressableProps,TouchableOpacityProps } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useTheme } from "styled-components";

import { variants } from "./Variante";
import { Container, Title,Content } from "./styles";

interface IButtonProps {
    title: string;
    onPress: () => void;
    iconName?: keyof typeof AntDesign.glyphMap;
    isLoading?: boolean;
    disabled?: boolean;
    variant?: "primary" | "outline" | "black" | "transparent";
    style?: TouchableOpacityProps["style"];
}

const Button: React.FC<IButtonProps> = ({
    title,
    onPress = () => {},
    isLoading,
    iconName,
    disabled,
    variant='primary',
    style
}) => {

    const { COLORS } = useTheme();
    const buttonVariant = variants[variant];
    const buttonStyle = disabled? buttonVariant.desabled: buttonVariant.enabled;

    return (
        <Container
            disabled={isLoading || disabled}
            onPress={onPress}
            style={[buttonStyle.button,style]}
        >
            {isLoading ? (
                <ActivityIndicator color={COLORS.GRAY1}/>
            ) : (
                <Content>
                    {iconName && (
                        <AntDesign
                            name={iconName}
                            size={25}
                            color={buttonStyle.icon?.color}
                            style={{
                                marginRight:15
                            }}
                        />
                    )}
                    <Title>{title}</Title>
                </Content>
            )}
        </Container>
    );
};

export { Button };
