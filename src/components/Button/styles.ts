import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { Pressable,TouchableOpacity } from "react-native";

export const Container = styled(TouchableOpacity).attrs({

})`
    width:100%;
    height:${RFValue(50)}px;
    align-items:center;
    justify-content:center;
    margin-top:${RFValue(15)}px;
    background-color:${({theme}) => (theme.COLORS.PRIMARY)};
    border-radius:${RFValue(8)}px;
`;


export const Title = styled.Text`
    font-size:${RFValue(18)}px;
    color:${({theme}) => (theme.COLORS.BACKGROUNDDARK)};
    font-family:${({theme}) => (theme.FONTS.POPPINSREGULAR)};
`;

export const Content = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;
