import React from 'react';
import {
    InnerContainer,
    PageTitle,
    StyledFormArea,
    StyledButton, 
    ButtonText,
    AccountContainer,
    Avatar,
    SubTitle,
    Line,
} from './../components/styles';


const Account = ({navigation}) => {
    return (
            <InnerContainer>
        
                <AccountContainer>
                    <PageTitle account={true}>Account</PageTitle>
                    <Avatar resizeMode="cover" source={require('./../assets/images/avatar.png')}/>
                    <SubTitle account={true}>Houda Yaakoubi</SubTitle>
                    <SubTitle account={true}>houdayaakoubi1@gmail.com</SubTitle>
                    <StyledFormArea>
                        <Line />
                        <StyledButton onPress={() => {navigation.navigate('Login')}}>
                            <ButtonText>Logout</ButtonText>
                        </StyledButton>
                    </StyledFormArea>
                </AccountContainer>
            </InnerContainer>
    );
};

export default Account;