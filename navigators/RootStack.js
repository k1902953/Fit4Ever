import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './../screens/Login';
import Signup from './../screens/Signup';
import Account from './../screens/Account';
import { Colors } from '../components/styles';

const {primary, black} = Colors;
const Stack = createNativeStackNavigator();

const RootStack = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerStyle: {
                        backgroundColor: 'transparent'
                    },
                    headerTintColor: primary,
                    headerTransparent: true,
                    headerTitle: '',
                    headerLeftContainerStyle: {
                        paddingLeft: 20
                    }
                }}
                initialRouteName = "Login" 
                >
                <Stack.Screen name="Login" component={Login}/>
                <Stack.Screen name="Signup" component={Signup}/>
                <Stack.Screen options={{ headerTintColor: black}} name="Account" component={Account}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootStack;