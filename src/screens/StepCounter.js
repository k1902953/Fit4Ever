import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {StyleSheet, Text, View, Dimensions,} from "react-native";
import { Pedometer } from "expo-sensors";


const StepCounter = ({navigation}) =>{

    var WindowHeight = Dimensions.get("window").height;

    const [PedomaterAvailability, SetPedomaterAvailability] = useState("");
    const [StepCount, SetStepCount] = useState(0);
    
    useEffect(() => {
        subscribe();
    }, []);
    
    subscribe = () => {
        const subscription = Pedometer.watchStepCount((result) => {
            SetStepCount(result.steps);
         });
         
         Pedometer.isAvailableAsync().then(
             (result) => {
             SetPedomaterAvailability(String(result));
            },
            (error) => {
                SetPedomaterAvailability(error);
            });
        };
        console.log("Is Pedometer available on the device : ",{PedomaterAvailability})

        return (
        <View style={styles.container}>
            <View style={{ flex: 1, justifyContent: "center" }}>
                <Text style={styles.titleDesign}>
                    REACH YOUR DAILY STEP COUNT !
                </Text>
            </View>
        </View>
        );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },

    titleDesign: {
        alignSelf: "center",
        fontSize: 20,
        color: "#e69557",
        fontWeight: "bold",
      },
});

export default StepCounter;