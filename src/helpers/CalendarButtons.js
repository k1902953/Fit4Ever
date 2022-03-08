import React, { useState } from "react";
import { View, Pressable, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
var workoutDay ;
const CalendarButtons = ({ data, onSelect}) => {
    const navigation = useNavigation();
    const [userOption, setUserOption] = useState('');
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
                        workoutDay = dayValue,
                        navigation.navigate('Workout', {workoutDay})
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
        alignItems: 'center',
    }
});

export default CalendarButtons;