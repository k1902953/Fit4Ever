import React, {useEffect, useState} from "react";
import {View, Text, StyleSheet, Button, Pressable, ScrollView, Image} from 'react-native';
import { primary, black, secondary, darkLight } from '../components/styles';
import Daylist from '../components/DayList';
import CalendarBtns from '../helpers/CalendarButtons';
import { auth } from "../Firebase/firebase";


const Main =({navigation}) => {
    const [complete, setComplete] = useState('');
    const calendar = [
        {
            value: <Daylist number= "1" colour = {complete != true}/>
        },
        {
            value: <Daylist number= "2" colour = {complete == true}/>
        },
        {
            value: <Daylist number= "3" colour = {complete == true}/>
        },
        {
            value: <Daylist number= "4" colour = {complete == true}/>
        },
        {
            value: <Daylist number= "5" colour = {complete == true}/>
        },
        {
            value: <Daylist number= "6" colour = {complete == true}/>
        },
        {
            value: <Daylist number= "7" colour = {complete == true}/>
        },
        {
            value: <Daylist number= "8" colour = {complete == true}/>
        },
        {
            value: <Daylist number= "9" colour = {complete == true}/>
        },
        {
            value: <Daylist number= "10" colour = {complete == true}/>
        },
        {
            value: <Daylist number= "11" colour = {complete == true}/>
        },
        {
            value: <Daylist number= "12" colour = {complete == true}/>
        },
        {
            value: <Daylist number= "13" colour = {complete == true}/>
        },
        {
            value: <Daylist number= "14" colour = {complete == true}/>
        },
        {
            value: <Daylist number= "15" colour = {complete == true}/>
        },
        {
            value: <Daylist number= "16" colour = {complete == true}/>
        },
        {
            value: <Daylist number= "17" colour = {complete == true}/>
        },
        {
            value: <Daylist number= "18" colour = {complete == true}/>
        },
        {
            value: <Daylist number= "19" colour = {complete == true}/>
        },
        {
            value: <Daylist number= "20" colour = {complete == true}/>
        },
        {
            value: <Daylist number= "21" colour = {complete == true}/>
        },
        {
            value: <Daylist number= "22" colour = {complete == true}/>
        },
        {
            value: <Daylist number= "23" colour = {complete == true}/>
        },
        {
            value: <Daylist number= "24" colour = {complete == true}/>
        },
        {
            value: <Daylist number= "25" colour = {complete == true}/>
        },
        {
            value: <Daylist number= "26" colour = {complete == true}/>
        },
        {
            value: <Daylist number= "27" colour = {complete == true}/>
        },
        {
            value: <Daylist number= "28" colour = {complete == true}/>
        },
        {
            value: <Daylist number= "29" colour = {complete == true}/>
        },
        {
            value: <Daylist number= "30" colour = {complete == true}/>
        }
    ]
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
    },[]);
    return (
        <View style={styles.InnerContainer}>
            <ScrollView style={styles.scrollView} horizontal={false}>
                <Text style={styles.PageTitle}>Workout Calendar</Text>
                <View>
                    <CalendarBtns data={calendar} onSelect={(value) => setComplete(value)}/> 
                </View>
            </ScrollView>
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
    InnerContainer:{
        flex:1,
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