import React, {useState} from 'react';
import {
    StyledContainer,
    InnerContainer,
    PageLogo,
    PageTitle,
    StyledFormArea,
    LeftIcon,
    RightIcon,
    StyledInputLabel,
    StyledTextInput,
    StyledButton, 
    Colors,
    ButtonText,
    ExtraView,
    ExtraText,
    TextLink,
    TextLinkContent
} from '../components/styles';
import { Formik } from 'formik';
import { View, Text, Image, StyleSheet } from 'react-native';
import {Octicons,Ionicons} from '@expo/vector-icons';
import KeyboardAvoidingWrapper from '../components/KeyboardAvoidingWrapper';

const {brand, darkLight} = Colors;


const Login = ({navigation}) => {
    const [hidePassword, setHidePassword] = useState(true);

    const Title = Text;
    const Logo = Image;

    return (
        <KeyboardAvoidingWrapper><StyledContainer>
            <InnerContainer>
                <Logo style={styles.LogoLogin}resizeMode="cover" source={require('../../assets/images/logo.png')}/>
                <Title style={styles.PageTitleLogin} >Account Login</Title>
                
                <Formik
                    initialValues={{email: '', password: ''}}
                    onSubmit={(values) => {
                        console.log(values);
                        navigation.navigate("Account")
                    }}
                    >{({handleChange, handleBlur, handleSubmit, values}) => <StyledFormArea>
                        <MyTextInput label="Email Address" icon="mail" onChangeText={handleChange('email')} 
                         onBlur={handleBlur('email')} value={values.email} keyboardType="email-address"
                         placeholder="*****@gmail.com" placeholderTextColor={darkLight}/>

                        <MyTextInput label="Password" icon="lock" placeholder="*********" placeholderTextColor={darkLight} onChangeText={handleChange('password')} 
                        onBlur={handleBlur('password')} value={values.password} secureTextEntry={hidePassword}
                        isPassword={true} 
                        hidePassword={hidePassword}
                        setHidePassword={setHidePassword}/>
                        <StyledButton onPress={handleSubmit}>
                            <ButtonText>Login</ButtonText>
                        </StyledButton>
                        <ExtraView>
                            <ExtraText>Don't have an Account? </ExtraText>
                                <TextLink onPress={() => navigation.navigate("Signup")}>
                                <TextLinkContent>Signup</TextLinkContent>
                            </TextLink>
                        </ExtraView>
                    </StyledFormArea> }
                </Formik>
            </InnerContainer>
        </StyledContainer>
        </KeyboardAvoidingWrapper>
    );
};

const MyTextInput = ({label, icon, isPassword, hidePassword, setHidePassword, ...props}) => {
    return (
        <View>
            <LeftIcon>
                <Octicons name={icon} size={30} color={brand} />
            </LeftIcon>
            <StyledInputLabel>{label}</StyledInputLabel>
            <StyledTextInput {...props} />
            {isPassword && (
                <RightIcon onPress={()=> setHidePassword(!hidePassword)}>
                    <Ionicons name={hidePassword ? 'md-eye-off' :'md-eye'} size={30} color={darkLight}/>
                </RightIcon>
            )}
        </View>
    );

};

const styles = StyleSheet.create({
    PageTitleLogin: {
        fontSize: 30,
        alignContent: 'center',
        fontWeight: 'bold',
        color: '#2c2f36',
        padding: 10
    },
    LogoLogin: {
        width: 250,
        height: 200,

    }
});
export default Login;