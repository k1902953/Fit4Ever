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
import { View } from 'react-native';
import {Octicons,Ionicons} from '@expo/vector-icons';
import KeyboardAvoidingWrapper from '../components/KeyboardAvoidingWrapper';


const {brand, darkLight} = Colors;


const Signup = ({navigation}) => {
    const [hidePassword, setHidePassword] = useState(true);

    return (
        <KeyboardAvoidingWrapper><StyledContainer>
            <InnerContainer>
                <PageLogo resizeMode="cover" source={require('../../assets/images/logo.png')}/>
                <PageTitle>Account Signup</PageTitle>
                
                <Formik
                    initialValues={{fullName:'', currentWeigth:'', goalWeight: '', email: '', password: '', confirmPassword: ''}}
                    onSubmit={(values) => {
                        console.log(values);
                        navigation.navigate("Account")
                    }}
                    >{({handleChange, handleBlur, handleSubmit, values}) => <StyledFormArea>
                        <MyTextInput label="Full Name" icon="person" onChangeText={handleChange('fullName')} 
                         onBlur={handleBlur('fullName')} value={values.fullName}
                         placeholder="" placeholderTextColor={darkLight}
                         />

                         <MyTextInput label="Current Weight" icon="law" 
                         placeholder="" placeholderTextColor={darkLight}
                         onChangeText={handleChange('currentWeight')} 
                         onBlur={handleBlur('currentWeight')}
                         value={values.currentWeight}
                         />

                         <MyTextInput label="Goal Weight" icon="law" 
                         placeholder="" placeholderTextColor={darkLight}
                         onChangeText={handleChange('goalWeight')} 
                         onBlur={handleBlur('goalWeight')}
                         value={values.goalWeight} 
                         />

                         <MyTextInput label="Email Address" icon="mail" onChangeText={handleChange('email')} 
                         onBlur={handleBlur('email')} value={values.email} keyboardType="email-address"
                         placeholder="*****@gmail.com" placeholderTextColor={darkLight}
                         />
                          

                        <MyTextInput label="Password" icon="lock" placeholder="*********" placeholderTextColor={darkLight} onChangeText={handleChange('password')} 
                        onBlur={handleBlur('password')} value={values.password} secureTextEntry={hidePassword}
                        isPassword={true} 
                        hidePassword={hidePassword}
                        setHidePassword={setHidePassword}/>

                        <MyTextInput label="Confirm Password" icon="lock" placeholder="*********" placeholderTextColor={darkLight} onChangeText={handleChange('confirmPassword')} 
                        onBlur={handleBlur('confirmPassword')} value={values.confirmPassword} secureTextEntry={hidePassword}
                        isPassword={true} 
                        hidePassword={hidePassword}
                        setHidePassword={setHidePassword}/>

                        <StyledButton onPress={handleSubmit}>
                            <ButtonText>Signup</ButtonText>
                        </StyledButton>
                        <ExtraView>
                            <ExtraText>Already have an Account? </ExtraText>
                            <TextLink onPress={() => navigation.navigate("Login")}>
                                <TextLinkContent>Login</TextLinkContent>
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
export default Signup;