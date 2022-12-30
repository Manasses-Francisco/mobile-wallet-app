import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import { Fontisto } from "@expo/vector-icons";

export const Button = styled(RectButton)`
    width:${RFValue(130)}px;
    height:${RFValue(60)}px;
    border-radius:${RFValue(5)}px;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    margin-bottom:${RFValue(16)}px;
    box-shadow: 1px 3px 3px rgba(0,0,0,0.2);
    background-color:${({theme})=> theme.COLORS.BLUE};
    margin-left:${RFValue(10)}px;
`;

export const Title = styled.Text`
    font-size:${RFValue(17)}px;
    margin-left:${RFValue(10)}px;
    color:${({theme})=>(theme.COLORS.WHITE)};
    font-family:${({theme})=>(theme.FONTS.POPPINSLIGHT)};
`;

export const IconFacebook= styled(Fontisto)`
    font-size: ${RFValue(25)}px;
    color:${({theme})=>(theme.COLORS.WHITE)};
`;