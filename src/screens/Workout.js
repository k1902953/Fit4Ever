import React from "react";
import { View, Pressable, Text, StyleSheet, Image, Button, TouchableOpacity } from 'react-native';
// import { Button } from "react-native-web";
import { StyledContainer,
    PageTitle,
    StyledButton,
    StyledButton2,
    ButtonText,
    ButtonText2,
    Avatar,
} from '../components/styles';
import { primary, black, secondary, darkLight, brand } from '../components/styles';
// import { fitness } from 'fitness_npm_project';

const Workout = ({route}) => {
    const {workoutDay} = route.params;
    // let fitness = require('fitness_npm_project');
    return (
        <View style={styles.styledContainer}>
            <View style={styles.pad}>
                <Text style={styles.pageTitle}>DAY {workoutDay}</Text>
                <Image source={require('./../../assets/images/AccountImage.jpg')}/>
                <Text style={styles.pad}>Dolphin Plank</Text>
            </View>
            <View style={styles.itemContainer}>
                <View style={styles.box}>
                    <Text style={styles.nameText}>Duration:</Text>
                    <Text style={styles.subText}>30mins</Text>
                </View>
                <View style={styles.box}>
                    <Text style={styles.nameText}>Progression:</Text>
                    <Text style={styles.subText}>100%</Text>
                </View>
            </View>
            <View>
                {/* {fitness.GetsExercises()} */}
            </View>
            {/* <View>
                <Text style={styles.subText}>Track Your Run</Text>
            </View> */}
            <TouchableOpacity style={styles.buttons}>
                <Text style={styles.textLinkContent}>Add Meal</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttons2}>
                <Text style={styles.textLinkContent}>Share Progress</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    pad:{
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#2c2f36',
        padding: 10,
        paddingTop: 10,
    },
    textLinkContent: {
        color: brand,
        fontSize: 16,
    },
    buttons: {
        flex: 1,
        margin: 5,
        width: 300,
        maxHeight: 70,
        backgroundColor: '#e69557',
        justifyContent: 'center',
        alignContent: 'center',
        borderRadius: 10,
        alignItems: 'center',
    }, 
    buttons2: {
        flex: 1,
        margin: 5,
        width: 300,
        maxHeight: 70,
        borderColor: '#e69557',
        borderWidth: 1,
        justifyContent: 'center',
        alignContent: 'center',
        borderRadius: 10,
        alignItems: 'center',
    }, 
    styledContainer:{
        flex:1,
        padding : 25,
        width: '100%',
        alignContent: 'center',
        color: primary,
        backgroundColor: 'white',
        alignItems: 'center',
    },
    itemContainer:{
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent: 'space-evenly',
        marginTop: 20,
        marginBottom: 40
    },
    pageTitle:{
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#2c2f36',
        padding: 10,
        paddingTop: 10
    },
    box:{
        backgroundColor: '#e5e7eb',
        padding: 20,
        borderRadius: 5,
        alignItems: 'center',
        margin:5
    },
    nameText: {
        fontSize: 23, 
        color: 'black',
        fontWeight: 'bold',
        paddingBottom: 10
    },
    subText: {
        fontSize: 20, 
        color: 'black',
        
    },
});

export default Workout;