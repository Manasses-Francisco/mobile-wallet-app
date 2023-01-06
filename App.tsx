import { StatusBar } from "expo-status-bar";
import { StyleSheet, ActivityIndicator, View, Text } from "react-native";
import { ThemeProvider } from "styled-components/native";
import { NavigationContainer } from "@react-navigation/native";

import {
    useFonts,
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
    Poppins_800ExtraBold,
} from "@expo-google-fonts/poppins";

import { DMSans_400Regular } from "@expo-google-fonts/dm-sans";

import { DMSerifDisplay_400Regular } from "@expo-google-fonts/dm-serif-display";

//import { Login } from "./src/screens/Login/Login";
import theme from "./src/styles/theme";
import { Routes } from "./src/routes";

export default function App() {
    const [fontsLoaded] = useFonts({
        Poppins_300Light,
        Poppins_400Regular,
        Poppins_500Medium,
        Poppins_700Bold,
        Poppins_800ExtraBold,
        DMSans_400Regular,
        DMSerifDisplay_400Regular,
    });

    if (!fontsLoaded) {
        return <ActivityIndicator />;
    }

    return (
        <ThemeProvider theme={theme}>
            <NavigationContainer>
                <StatusBar
                    style="dark"
                    translucent
                    backgroundColor="transparent"
                />

                <View
                    style={{
                        flex: 1,
                        backgroundColor: theme.COLORS.WHITE,
                    }}
                >
                    <Routes/>
                </View>
            </NavigationContainer>
        </ThemeProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
