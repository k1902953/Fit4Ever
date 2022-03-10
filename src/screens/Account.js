import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import { Colors } from '../components/styles';
import { auth } from '../Firebase/firebase';


const {primary, black, secondary,darkLight} = Colors;


const Account = ({navigation}) => {
    
    const MainContainer = View;
    const Container = View;
    const Title = Text;
    const Logo = Image;
    const Avatar = Image;
    const SubTitle = Text;
    const StyledFormArea = View;
    const Line = View;
    const StyledButton = TouchableOpacity;
    const ButtonText = Text;


    const HandleLogOut = () => {
        auth
        .signOut()
        .then(() => {
            navigation.replace('Login')
        })
        .catch(error => alert(error.message))
    }
    return (
        <MainContainer style={styles.InnerContainer}>
    
            <Container style={styles.AccountContainer}>
                <Logo style={styles.LogoAccount}resizeMode="cover" source={require('../../assets/images/logo.png')}/>
                <Title style={styles.TitleAccount} >Account</Title>
                <Avatar style={styles.AvatarAccount}resizeMode="cover" source={require('./../../assets/images/avatar.png')}/>
                <Text style={styles.SubTitleAccount}>Full Name:{}</Text>
                <Text style={styles.SubTitleAccount}>Email: {auth.currentUser?.email}</Text>
                <StyledFormArea>
                    <Line style={styles.AccountLine}/>
                    <StyledButton style={styles.Button} onPress={HandleLogOut}>
                        <ButtonText style={styles.ButtonText}>Logout</ButtonText>
                    </StyledButton>
                </StyledFormArea>
            </Container>
        </MainContainer>
    );
};

const styles = StyleSheet.create({

    InnerContainer: {
        flex:1,
        padding : 25,
        width: '100%',
        backgroundColor: primary
    },
    
    AccountContainer: {
        padding: 25,
        paddingTop: 30,
        alignItems: 'center',
        backgroundColor: primary
    },

    AvatarAccount: {
        width: 100,
        height: 100,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: secondary,
        marginTop: 10,
        marginBottom: 10
    },
    
    LogoAccount: {
        width: 250,
        height: 200,
    },
    
    TitleAccount: {
        fontSize: 35,
        textAlign: 'center',
        fontWeight: 'bold',
        color:black,
        padding: 10
    },

    SubTitleAccount: {
        fontSize: 18,
        letterSpacing: 1,
        fontWeight: 'normal', 
        color:black,
        marginBottom: 5,
        textAlign: "center"
    },

    AccountLine:{
        height: 1,
        width: 280,
        backgroundColor: darkLight,
        marginVertical: 10,
        marginLeft: -10
    },
    Button: {
        width: 270,
        backgroundColor: '#e69557',
        justifyContent: 'center',
        borderRadius: 10,
        marginVertical: 5,
        height: 55,
        alignItems: 'center'
    }, 

    Text: {
        fontSize: 16,
        color:primary
    },

})

export default Account;