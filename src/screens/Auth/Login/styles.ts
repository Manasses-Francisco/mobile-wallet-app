import styled from "styled-components/native";
import { Pressable ,Text} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
    padding:${RFValue(20)}px;
    align-items:center;
    height:100%;
`;


export const ContentHeader= styled.View`
    width:100%;
    align-items: center;
`;

export const ContentBody = styled.View`
    width:100%;
`;

export const Title = styled.Text`
    text-align: center;
    font-size:${RFValue(25)}px;
    font-family:${({theme})=>(theme.FONTS.POPPINSMEDIUM)};
    margin-top:${RFValue(40)}px;
`;

export const Description = styled.Text`
    margin-top: ${RFValue(60)}px;
    font-size:${RFValue(15)}px;
    font-family:${({theme}) => (theme.FONTS.POPPINSLIGHT)};
    margin-bottom:${RFValue(15)}px;
`;

export const ViewButton = styled.View`
    align-items: center;
    flex-direction: row;
    width:100%;
    justify-content: space-between;
`;

export const ContentFooter= styled.View`
    align-items: center;
    justify-content: center;
    margin-top:${RFValue(30)}px;
`;

export const ButtonSignUp = styled(Pressable)`
    align-items: center;
    flex-direction: row;
    justify-content:center;
`;

export const TitleButtonSignUp1 = styled.Text`
    font-size:${RFValue(14)}px;
    font-family:${({theme}) => (theme.FONTS.POPPINSMEDIUM)};
    color:${({theme})=> (theme.COLORS.GRAY3)};
`;

export const TitleButtonSignUp2 = styled.Text`
    font-size:${RFValue(17)}px;
    margin-left:${RFValue(10)}px;
    font-family:${({theme}) => (theme.FONTS.POPPINSBOLD)};
    color:${({theme})=> (theme.COLORS.BLUE)};
`;

export const ContentForgotPassword = styled.View`
    width:100%;
    align-items: flex-end;
    /*padding:${RFValue(20)}px;*/
   /*margin-top:${RFValue(20)}px;*/
`;

export const ContentButtonForgotPassword= styled(Pressable)`
    justify-content: flex-end;
    align-items: flex-end;
`;

export const ContentTitleForgotPassword= styled.Text`
    font-size:${RFValue(16)}px;
    font-color:${({theme}) => (theme.COLORS.GRAY3)};
    font-family:${({theme}) => (theme.FONTS.POPPINSREGULAR)};
    align-items:flex-end;
`;
