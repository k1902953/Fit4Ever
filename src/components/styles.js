import styled from 'styled-components';
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import Constants from 'expo-constants';

const StatusBarHeight = Constants.statusBarHeight;

//colors
export const Colors = {
    primary: '#ffffff',
    secondary: '#e5e7eb',
    black: '#2c2f36',
    brand: '#e69557',
    darkLight: '#9ca3af'
};

const{primary, secondary, black, brand, darkLight }= Colors;

export const StyledContainer = styled.View `
flex: 1;
padding: 25px;
padding-top: ${StatusBarHeight + 10}px;
background-color: ${primary};

`
export const InnerContainer = styled.View`
flex:1;
width: 100%;
align-items: center;
`;

export const AccountContainer = styled(InnerContainer)`
padding: 25px;
padding-top: 10px;
justify-content: center;
`;

export const Avatar= styled.Image`
width: 100px;
height: 100px;
margin: auto;
border-radius: 50px;
border-width: 2px;
border-color: ${secondary};
margin-top: 10px;
margin-bottom: 10px;
`;

export const AccountImage= styled.Image`
min-width: 100%;
height: 50%;
`;


export const PageLogo= styled.Image`
width: 250px;
height: 200px;
margin-top: -80px;
margin-bottom: -20px;
`;

export const PageTitle = styled.Text`
font-size: 30px;
text-align: center;
font-weight: bold; 
color: ${black};
padding: 10px;
margin-top: -60px;

${(props) => props.account &&`
  font-size: 35px;
`}
`;

export const SubTitle = styled.Text`
font-size: 18px;
letter-spacing: 1px;
font-weight: normal; 
color: ${black};
margin-bottom: 5px;
`;



export const StyledFormArea = styled.View`
width: 90%;
`;

export const StyledTextInput = styled.TextInput`
background-color: ${secondary};
padding: 15px;
padding-left: 55px;
padding-right: 55px;
border-radius: 5px;
font-size: 16px;
height: 60px;
margin-vertical: 3px;
margin-bottom: 10px;
color: ${black};
`;

export const StyledInputLabel = styled.Text`
font-size: 13px;
text-align: left;
color: ${black};
`;

export const LeftIcon = styled.View`
left: 15px;
top: 38px;
position: absolute;
z-index: 1;
`;

export const RightIcon = styled.TouchableOpacity`
right: 15px;
top: 38px;
position: absolute;
z-index: 1;
`;

export const StyledButton = styled.TouchableOpacity`
padding: 15px;
background-color: ${brand};
justify-content: center;
border-radius: 5px;
margin-vertical: 5px;
height: 55px;
align-items: center;
`;

export const StyledButton2 = styled.TouchableOpacity`
padding: 15px;
borderWidth: 1px;
borderColor: ${brand};
justify-content: center;
border-radius: 5px;
margin-vertical: 5px;
height: 55px;
align-items: center;
`;

export const ButtonText = styled.Text`
font-size: 16px;
color: ${primary};
`;

export const ButtonText2 = styled.Text`
font-size: 16px;
color: ${black};
`;

export const ExtraView = styled.View`
justify-content: center;
flex-direction: row;
align-items: center;
padding: 10px
`;

export const ExtraText = styled.Text`
justify-content: center;
align-items: center;
color: ${black};
font-size: 15px;
`;

export const TextLink = styled.TouchableOpacity`
justify-content: center;
align-items: center;
`;

export const TextLinkContent = styled.Text`
color: ${brand};
font-size: 15px;
`;

export const Line = styled.View`
height: 1px;
width: 290px;
background-color:${darkLight};
margin-vertical: 10px;
`;








