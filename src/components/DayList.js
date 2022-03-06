import React from 'react';
import { StyleSheet, Text, View, Pressable, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const DayList = ({navigation, number}) => {
    const items = []
    for(let index = 1; index < 5; index++) {
            items.push(<Text>Day {index}</Text>)
    }
    return(
        <View style={styles.itemContainer}>
             <Pressable style={styles.center} onPress={() => {
                navigation.navigate()}}>
                <Text style={styles.nameText}>Day</Text>
                {/* {items} */}
                <Text style={styles.dateText}>{number}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    center:{
        alignItems: 'center',
    },
    nameText: {
        fontSize: 20, 
        color: 'black',
        fontWeight: 'bold',
        marginTop: 10
    },
    dateText: {
        fontSize: 25, 
        color: '#e69557',
        fontWeight: 'bold',
        marginTop: 10,
    },
    img: {
        width: 250, 
        height: 250
    },
    itemContainer: {
        borderWidth: 1,
        borderColor: '#e69557',
        alignItems: 'center',
        borderRadius: 5,
        padding: 5,
        marginVertical: 5,
        width: "30%",
        height: 95
    }
});

export default DayList;