import React, { useState } from "react";
import { View, Pressable, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
// var workoutDay ;
const CalendarButtons = ({ data, onSelect}) => {
    const navigation = useNavigation();
    const [userOption, setUserOption] = useState('');
    const [workoutDay, setWorkoutDay] = useState('');
    const [foodName, setFoodName] = useState('');
    const [calories, setCalories] = useState('');
    const [energy, setEnergy] = useState('');
    const [fat, setFat] = useState('');
    const [carbs, setCarbs] = useState('');
    const [protein, setProtein] = useState('');
    const [fiber, setFiber] = useState('');
    const selectHandler = (value) => {
        onSelect(value);
        setUserOption(value);
    };
    return (
        <View style={styles.itemContainer}>
            {data.map((item, i) => {
                const dayValue = i+1;
                return (
                    <Pressable key={dayValue} style={styles.center} onPress={() => {
                        // setWorkoutDay(dayValue),
                        navigation.navigate('Workout', {
                            id: item.id,
                            workoutDay: dayValue,
                            foodName: item.foodName,
                            calories: item.calories,
                            energy: item.energy,
                            fat: item.fat,
                            carbs: item.carbs,
                            protein: item.protein,
                            fiber: item.fiber
                        })
                    }}>
                        <View>
                            {item.value}
                        </View>
                    </Pressable>
                );
            })}
        </View>
    );
};

const styles = StyleSheet.create({
    itemContainer:{
        // flex: 1,
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent: 'space-evenly',
    },
    center:{
        // alignItems: 'center',
    }
});

export default CalendarButtons;