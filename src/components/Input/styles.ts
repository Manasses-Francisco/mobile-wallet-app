import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
    height:${RFValue(50)}px;
    width:100%;
    justify-content:center;
    flex-direction: row;
    align-items:center;
    padding:0 ${RFValue(12)}px;
    border-radius:${RFValue(8)}px;
    background-color:${({theme}) => (theme.COLORS.GRAY6)};
    margin-top: ${RFValue(10)}px;
`;

export const InputContainer = styled.TextInput`
    flex:1;
    height:${RFValue(45)}px;
    border:0;
    border-radius:${RFValue(8)}px;
    font-size:${RFValue(14)}px;
    font-family:${({theme}) => theme.FONTS.POPPINSLIGHT};
`;
