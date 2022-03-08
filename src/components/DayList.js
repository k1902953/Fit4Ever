import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const DayList = ({ number, colour, navigation}) => {
    const items = []
    for(let index = 1; index < 5; index++) {
            items.push(<Text>Day {index}</Text>)
    }
    return(
        <View style={{
            backgroundColor: colour ? 'white' : 'lightgrey', 
            borderWidth: 1,
            borderColor: '#e69557',
            borderRadius: 5,
            padding: 5,
            marginVertical: 5,
            width: 125,
            height: 120,
            }}>
            <View style={styles.center}>
                <Text style={styles.nameText}>Day</Text>
                <Text style={styles.dateText}>{number}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
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
    img: {
        width: 250, 
        height: 250
    },
});

export default DayList;