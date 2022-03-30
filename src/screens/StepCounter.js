import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {StyleSheet, Text, View, Dimensions,} from "react-native";
import { Pedometer } from "expo-sensors";
import CircularProgress from "react-native-circular-progress-indicator";

const StepCounter = ({navigation}) =>{

    var WindowHeight = Dimensions.get("window").height;

    const [PedomaterAvailability, SetPedomaterAvailability] = useState("");
    const [StepCount, SetStepCount] = useState(0);

    //approx 1300 steps in 1 km
    var Dist = StepCount / 1312;
    //to keep only 4 decimals places when Dist is calculated.
    var DistanceCovered = Dist.toFixed(4);
    
    //62 calories burnt per km
    var cal = DistanceCovered * 62;
    var caloriesBurnt = cal.toFixed(4);
    
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
                <Text style={styles.titleDesign} >
                    REACH YOUR DAILY STEP COUNT !
                </Text>
            </View>
            <View style={{ flex: 3}}>
                <CircularProgress
                value={StepCount}
                maxValue={6500}
                radius={185}
                textColor={"#ecf0f1"}
                activeStrokeColor={"#f39c12"}
                inActiveStrokeColor={'#e69557'}
                inActiveStrokeOpacity={0.5}
                inActiveStrokeWidth={40}
                activeStrokeWidth={40}
                title={"Step Count"}
                titleColor={"#ecf0f1"}
                titleStyle={{ fontWeight: "bold" }}
                titleFontSize={40}
                
                />
       </View>

       <View style={{ flex: 2, justifyContent: "center" }}>
           <View style={{ flex: 1 }}>
               <Text style={[styles.textDesign, { paddingLeft: 20, marginLeft: '23%' },]}>
                   Target : 6500 steps(5kms)
               </Text>
        </View>
        <View style={{ flex: 1 }}>
            <Text style={[styles.textDesign, { width: "93%", paddingLeft: 20, marginLeft: '-3.5%' },]}>
                Distance Covered : {DistanceCovered} km
            </Text>
        </View>
        
        <View style={{ flex: 1 }}>
            <Text style={[ styles.textDesign,{paddingLeft: 10, marginLeft: '23%' },]}>
                Calories Burnt : {caloriesBurnt}
            </Text>
        </View>
        <StatusBar style="auto" />
        </View>
        </View>
        );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems:'center',
    },

    titleDesign: {
        alignSelf: "center",
        fontSize: 20,
        color: "#e69557",
        fontWeight: "bold",
      },
      
    textDesign: {
        backgroundColor: '#e69557',
        height: 50,
        width : '85%',
        borderColor: "white",
        borderWidth: 1,
        borderRadius: 20,
        overflow: "hidden",
        fontSize: 20,
        color: "white"
      },
});

export default StepCounter;