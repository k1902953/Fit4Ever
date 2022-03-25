import React, {useEffect, useState} from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { primary, black, secondary, darkLight, brand } from '../components/styles';
const FormData = require("form-data");

const ScanMeal = ({route, navigation}) => {
    const {foodImage, workoutDay} = route.params;
    const [foodNutrition, setFoodNutrition] = useState('');
    const [foodName, setFoodName] = useState('Processing Image...');
    const [calories, setCalories] = useState('Calculating...');
    const [energy, setEnergy] = useState('Calculating...');
    const [fat, setFat] = useState('Calculating...');
    const [carbs, setCarbs] = useState('Calculating...');
    const [protein, setProtein] = useState('Calculating...');
    const [fiber, setFiber] = useState('Calculating...');
    
    const getResults = async () => {
        var formdata = new FormData();
        formdata.append('image', {
            uri: foodImage,
            type: "image/jpeg",
            name: "food.jpg"
        });
        
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer e96f8cf8f7a058285445e759120d28bb36175aa3");

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: formdata,
            redirect: 'follow'
        };

        await fetch("https://api.logmeal.es/v2/image/recognition/complete", requestOptions)
        .then(response => response.json())
        .then(result => {
            myHeaders.append("Content-Type", 'application/json');
            var raw = JSON.stringify({
                "imageId": result.imageId,
                "class_id": result.recognition_results[0].id
            });
            var requestOptions2 = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
            };

            fetch("https://api.logmeal.es/v2/recipe/nutritionalInfo", requestOptions2)
            .then(response2 => response2.json())
            .then(result2 => {
                setFoodNutrition(result2);
                setFoodName(result2.foodName);
                setCalories(result2.nutritional_info.calories);
                setEnergy(result2.nutritional_info.totalNutrients.ENERC_KCAL.quantity + " " +result2.nutritional_info.totalNutrients.ENERC_KCAL.unit);
                setFat(result2.nutritional_info.totalNutrients.FAT.quantity + " " +result2.nutritional_info.totalNutrients.FAT.unit);
                setCarbs(result2.nutritional_info.totalNutrients.CHOCDF.quantity + " " +result2.nutritional_info.totalNutrients.CHOCDF.unit);
                setProtein(result2.nutritional_info.totalNutrients.PROCNT.quantity + " " +result2.nutritional_info.totalNutrients.PROCNT.unit);
                setFiber(result2.nutritional_info.totalNutrients.FIBTG.quantity + " " +result2.nutritional_info.totalNutrients.FIBTG.unit);
            })
            .catch(error2 => console.log('error2', error2));
        })
        .catch(error => console.log('error', error));
    }
    
    useEffect(()=> {
        getResults();
    },[])
    return(
        <View style={styles.InnerContainer}>
            <Image style = {styles.img} source ={{uri:foodImage}}/>
            <View style={styles.Container}>
                <Text style = {styles.pageTitle}>{foodName}</Text>
                <Text style = {styles.bodyText}>Calories: {calories}</Text>
                <Text style = {styles.bodyText}>Energy: {energy}</Text> 
                <Text style = {styles.bodyText}>Fat: {fat}</Text>
                <Text style = {styles.bodyText}>Carbs: {carbs}</Text>
                <Text style = {styles.bodyText}>Protein: {protein}</Text>
                <Text style = {styles.bodyText}>Fiber: {fiber}</Text>
            </View>
            <TouchableOpacity style={styles.buttons} onPress={() => navigation.navigate('Workout' , {
                workoutDay, foodImage, foodName, calories, energy, fat, carbs, protein, fiber
            })}>
                <Text style={styles.textLinkContent}>Done</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({

    InnerContainer: {
        flex:1,
        padding : 75,
        width: '100%',
        alignContent: 'center',
    },
    Container: {
        paddingRight : 40,
        paddingLeft: 40,
        width: '100%',
        alignContent: 'center',
    },
    img:{
        minHeight: 300,
        minWidth: 200,
        position: 'relative',
        alignSelf: 'center',
        borderRadius: 15
    },
    pageTitle:{
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#2c2f36',
        padding: 10,
        paddingTop: 10,
        textTransform: 'capitalize'
    },
    bodyText: {
        fontSize: 23, 
        color: 'black',
        paddingBottom: 10,
        fontWeight: '200',
    },
    textLinkContent: {
        color: brand,
        fontSize: 16,
    },
    buttons: {
        margin: 5,
        width: 300,
        minHeight: 70,
        backgroundColor: '#e69557',
        justifyContent: 'center',
        alignContent: 'center',
        borderRadius: 10,
        alignItems: 'center',
        alignSelf: 'center',
    }, 
})

export default ScanMeal;