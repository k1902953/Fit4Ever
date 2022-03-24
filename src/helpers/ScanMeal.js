import React, {useEffect, useState} from "react";
import { View, Text, StyleSheet } from 'react-native';
const FormData = require("form-data");

const ScanMeal = ({route}) => {
    const {foodImage} = route.params;
    const [ foodName, setFoodName] = useState('');
    
    const getResults = async () => {
        var formdata = new FormData();
        formdata.append('image', {
            uri: foodImage,
            type: "image/jpeg",
            name: "food.jpg"
        });
        
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer 90338febf896709034e730298c9f786b19ca2a15");

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: formdata,
            redirect: 'follow'
        };

        await fetch("https://api.logmeal.es/v2/image/recognition/complete", requestOptions)
        .then(response => response.json())
        .then(result => setFoodName(result.recognition_results[0].name))
        .catch(error => console.log('error', error));
    }

    useEffect(()=> {
        getResults();
    },[])
    return(
        <View style={styles.InnerContainer}>
            <Text>Processing...</Text>
            <Text>{foodName}</Text>
        </View>
    )
}

const styles = StyleSheet.create({

    InnerContainer: {
        flex:1,
        padding : 65,
        width: '100%',
        alignContent: 'center',
    },
})

export default ScanMeal;