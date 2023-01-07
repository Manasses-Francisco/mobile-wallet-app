import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { Pressable } from "react-native";

export const Container = styled.View`
    padding:${RFValue(20)}px;
`;

export const ContentHeader = styled.View`
    width:100%;
    margin-left:-10px;
    align-items: center;
    justify-content: space-between;
`;

export const Title = styled.Text`
    text-align: center;
    font-size:${RFValue(25)}px;
    margin-top:${RFValue(40)}px;
    font-family:${({theme}) => (theme.FONTS.POPPINSMEDIUM)};
`;

export const Description = styled.Text`
    font-size:${RFValue(30)}px;
    margin-top:${RFValue(60)}px;
    margin-bottom:${RFValue(10)}px;
    font-family:${({theme}) => (theme.FONTS.POPPINSLIGHT)};
`;

export const ContentBody = styled.View`
    margin-bottom:${RFValue(20)}px;
`;

export const ContentFooter= styled.View`
    margin-top:${RFValue(50)}px;
    align-items: center;
    justify-content: center;
`;

export const ButtonFooter= styled(Pressable)`
    align-items:center;
    justify-content:center;
    flex-direction:row;
`;

export const Title1= styled.Text`
    font-size:${RFValue(14)}px;
    color:${({theme}) => (theme.COLORS.GRAY3)};
    font-family:${({theme}) => (theme.FONTS.POPPINSMEDIUM)};
`;

export const Title2= styled.Text`
    font-size:${RFValue(14)}px;
    margin-left:${RFValue(10)}px;
    color:${({theme}) => (theme.COLORS.BLUE)};
    font-family:${({theme}) => (theme.FONTS.POPPINSBOLD)};
`;
