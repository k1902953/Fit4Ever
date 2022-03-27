import React, {useEffect, useState, useContext} from "react";
import {View, Text, StyleSheet, Button, Pressable, ScrollView, Image, FlatList} from 'react-native';
import { primary, black, secondary, darkLight } from '../components/styles';
import { auth } from "../Firebase/firebase";

import MealInfo from "../components/MealInfo";

const Main =({navigation}) => {
    const [complete, setComplete] = useState('');
    const {state} = useContext(MealInfo);

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <Pressable style={styles.header} onPress ={() => 
                    navigation.navigate('Account')}>
                    <Text> Welcome {auth.currentUser?.email}.</Text>
                    <Image style={styles.icon} resizeMode="center" source={require('./../../assets/images/avatar.png')}/>
                </Pressable>
            )
        })
    },[state]);
    return (
        <View style={styles.InnerContainer}>
            <Text style={styles.PageTitle}>Workout Calendar</Text>
            <FlatList 
                data={state}
                keyExtractor={(e) => e.id.toString()}
                numColumns={3}
                renderItem={({item}) => {
                    return (
                        <Pressable style={styles.list} key={item.workoutDay} onPress={() => {
                            navigation.navigate('Workout', {
                                id: item.id,
                                workoutDay: item.workoutDay,
                                workout1: item.workout1,
                                workout2: item.workout2,
                                workout3: item.workout3,
                                foodName: item.foodName,
                                calories: item.calories,
                                energy: item.energy,
                                fat: item.fat,
                                carbs: item.carbs,
                                protein: item.protein,
                                fiber: item.fiber,
                                foodImage: item.foodImage
                            })
                        }}>
                            <View style={{
                                backgroundColor: item.complete ? 'white' : 'lightgrey', 
                                borderWidth: 1,
                                borderColor: '#e69557',
                                borderRadius: 5,
                                padding: 5,
                                marginVertical: 4,
                                width: 115,
                                height: 120,
                                
                                }}>
                                <View style={styles.center}>
                                    <Text style={styles.nameText}>Day</Text>
                                    <Text style={styles.dateText}>{item.workoutDay}</Text>
                                </View>
                            </View>
                        </Pressable>
                        
                    );
                }}
            />
        </View>
    )
};
const styles = StyleSheet.create({
    PageTitle: {
        fontSize: 30,
        alignItems: 'center',
        fontWeight: 'bold',
        color: '#2c2f36',
        padding: 10
    },
    list: {
        // flexDirection:'row',
        margin: 5,
        marginBottom: 0
    },
    center:{
        alignItems: 'center',
    },
    nameText: {
        fontSize: 23, 
        color: 'black',
        fontWeight: 'bold',
        marginTop: 10
    },
    dateText: {
        fontSize: 33, 
        color: '#e69557',
        fontWeight: 'bold',
        marginTop: 10
    },
    InnerContainer:{
        flex:1,
        paddingTop:90,
        padding : 25,
        width: '100%',
        alignContent: 'center',
        // color: primary,
        backgroundColor: 'white'
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    icon: {
        width: 35,
        height: 35,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: secondary,
        margin: 10,
        
    },
    scrollView:{
        marginTop: 70,
    }
});
export default Main;