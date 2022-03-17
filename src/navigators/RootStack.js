import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import Account from '../screens/Account';
import MainScreen from '../screens/Main';
import Workout from '../screens/Workout';
import { Colors } from '../components/styles';
import {ItemProvider} from '../helpers/WorkoutInfo'

const {primary, black} = Colors;
const Stack = createNativeStackNavigator();

const RootStack = () => {
    return(
        <ItemProvider>
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
                    <Stack.Screen name="Main" component={MainScreen}/>
                    <Stack.Screen name="Workout" component={Workout}/>
                    <Stack.Screen options={{ headerTintColor: black}} name="Account" component={Account}/>
                </Stack.Navigator>
            </NavigationContainer>
        </ItemProvider>
    )
}

export default RootStack;