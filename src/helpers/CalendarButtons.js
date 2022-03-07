import React, { useState } from "react";
import { View, Pressable, StyleSheet } from 'react-native';
var iconValue ;
const CalendarButtons = ({ data, onSelect}) => {
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
                    // <Pressable key={dayValue}
                    // onPress={() => {
                    //     // iconValue = dayValue
                    //     // selectHandler(item.value.props.name)
                    // }}
                    // >
                        <View style={styles.itemStyle}> 
                            {item.value}
                        </View>
                    // </Pressable>
                );
            })}
        </View>
    );
};

const styles = StyleSheet.create({
    itemContainer:{
        flex: 1,
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    itemStyle:{
        width: "30%",
        
    },
});

export default CalendarButtons;