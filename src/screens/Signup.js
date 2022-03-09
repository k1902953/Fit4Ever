import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image } from 'react-native';
import { Colors } from '../components/styles';
import KeyboardAvoidingWrapper from '../components/KeyboardAvoidingWrapper'
import { auth } from '../Firebase/firebase'


const {primary, black, secondary,darkLight, brand} = Colors;


const Signup = ({navigation}) => {

    const [fullName, setFullName] = useState('');
    const [currentWeight, setCurrentWeight] = useState('');
    const [goalWeight, setGoalWeight] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(''); 

    

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                navigation.navigate("Account")

            }
        })
        return unsubscribe
    }, [])

    const handleSignUp = () => {
        auth
        .createUserWithEmailAndPassword(email, password)
        .then(userCredentials => {
            const user = userCredentials.user;
            console.log(user.email)
        })
        .catch(error => alert(error.message))
    }

    const MainContainer = View;
    const Container = View;
    const Title = Text;
    const Logo = Image;
    const StyledFormArea = View;
    const StyledButton = TouchableOpacity;
    const ButtonText = Text;
    const ExtraView = View;
    const ExtraText = Text;
    const TextLink = TouchableOpacity;
    const TextLinkContent = Text;

    return (
        <MainContainer style={styles.InnerContainer}><KeyboardAvoidingWrapper>
            <Container style={styles.LoginContainer}>
                <Logo style={styles.LogoLogin}resizeMode="cover" source={require('../../assets/images/logo.png')}/>
                <Title style={styles.PageTitleLogin} >Account Signup</Title>
                <StyledFormArea>
                
                <View>  
                    <TextInput
                  placeholder='Full Name'
                  value={fullName}
                  onChangeText={text => setFullName(text)}
                  style={styles.input}
                  />
                  <TextInput
                  placeholder='Current Weight in Kg'
                  value={currentWeight}
                  onChangeText={text => setCurrentWeight(text)}
                  style={styles.input}
                  />
                  <TextInput
                  placeholder='Goal Weight in Kg'
                  value={goalWeight}
                  onChangeText={text => setGoalWeight(text)}
                  style={styles.input}
                  />
                <TextInput
                  placeholder='Email Address'
                  value={email}
                  onChangeText={text => setEmail(text)}
                  style={styles.input}
                  />
                  <TextInput
                  placeholder='Password'
                  value={password}
                  onChangeText={text => setPassword(text)}
                  style={styles.input}
                  secureTextEntry
                  />
                  </View>
                  <View style={styles.ButtonContainer}>
                  <StyledButton style={styles.Button} 
                     onPress={handleSignUp}>
                         <ButtonText style={styles.Text}>Signup</ButtonText>
                  </StyledButton>
                        </View>
                        <ExtraView style={styles.extraView}>
                            <ExtraText style={styles.extraText}>Already have an Account? </ExtraText>
                                <TextLink style={styles.textLink} onPress={() => navigation.navigate("Login")}>
                                <TextLinkContent style={styles.textLinkContent}>Login</TextLinkContent>
                            </TextLink>
                        </ExtraView>
                </StyledFormArea>
                </Container>
        </KeyboardAvoidingWrapper>
        </MainContainer>
    )
}


const styles = StyleSheet.create({

    InnerContainer: {
        flex:1,
        padding : 25,
        width: '100%',
        alignContent: 'center',
        color: primary,
        backgroundColor: primary
    },
    
    LoginContainer: {
        padding: 25,
        paddingTop: 30,
        justifyContent: 'center',
        backgroundColor: primary
    },

    input: {
        height:50,
        backgroundColor: secondary,
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5,
    },

    PageTitleLogin: {
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#2c2f36',
        padding: 10,
        paddingTop: -20
    },
    LogoLogin: {
        width: 250,
        height: 200,

    },

    ButtonContainer: {
        width: '50%',
        alignContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        paddingLeft: 135
        
    },

    Button: {

        width: 270,
        backgroundColor: '#e69557',
        justifyContent: 'center',
        alignContent: 'center',
        borderRadius: 10,
        marginVertical: 5,
        height: 55,
        alignItems: 'center',
    }, 

    Text: {
        fontSize: 16,
        color:primary
    },
    
    extraView: {
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    
    extraText: {
        justifyContent: 'center',
        alignItems: 'center',
        color: black,
        fontSize: 15,
    },
    
    textLink: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    
    textLinkContent: {
        color: brand,
        fontSize: 15
    }
})

export default Signup;