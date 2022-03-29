import React, {useEffect, useState, useContext} from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import MealInfo from "../components/MealInfo";
import { primary, black, secondary, darkLight, brand } from '../components/styles';
const FormData = require("form-data");

const ScanMeal = ({route, navigation}) => {
    const {id, foodManiImage} = route.params;
    const {state, update} = useContext(MealInfo);
    const currentItem = state.find((e) => e.id === id);

    const [foodNutrition, setFoodNutrition] = useState('');
    const [workoutDay, setWorkoutDay] = useState(currentItem.workoutDay);
    const [foodName, setFoodName] = useState('Processing Image...');
    const [calories, setCalories] = useState('Fetching nutrition info...');
    const [energy, setEnergy] = useState('');
    const [fat, setFat] = useState('');
    const [carbs, setCarbs] = useState('');
    const [protein, setProtein] = useState('');
    const [fiber, setFiber] = useState('');
    const [foodImage ,setFoodImage] = useState('');
    const [workout1, setWorkout1] = useState(currentItem.workout1);
    const [workout2, setWorkout2] = useState(currentItem.workout2);
    const [workout3, setWorkout3] = useState(currentItem.workout3);
    

    const getResults = async () => {
        var formdata = new FormData();
        formdata.append('image', {
            uri: foodManiImage,
            type: "image/jpeg",
            name: "food.jpg"
        });
        
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer e8035bf68ad0ac76e6762ec1f7d540234c6c157c");

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: formdata,
            redirect: 'follow'
        };

        await fetch("https://api.logmeal.es/v2/image/recognition/complete", requestOptions)
        .then(response => response.json())
        .then(result => {
            setFoodImage(foodManiImage);
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
                setCalories("Calories: " + result2.nutritional_info.calories);
                setEnergy("Energy: " + result2.nutritional_info.totalNutrients.ENERC_KCAL.quantity + " " +result2.nutritional_info.totalNutrients.ENERC_KCAL.unit);
                setFat("Fat: " + result2.nutritional_info.totalNutrients.FAT.quantity + " " +result2.nutritional_info.totalNutrients.FAT.unit);
                setCarbs("Carbs: " + result2.nutritional_info.totalNutrients.CHOCDF.quantity + " " +result2.nutritional_info.totalNutrients.CHOCDF.unit);
                setProtein("Protein: " + result2.nutritional_info.totalNutrients.PROCNT.quantity + " " +result2.nutritional_info.totalNutrients.PROCNT.unit);
                setFiber("Fiber: " + result2.nutritional_info.totalNutrients.FIBTG.quantity + " " +result2.nutritional_info.totalNutrients.FIBTG.unit);
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
                <Text style = {styles.bodyText}>{calories}</Text>
                <Text style = {styles.bodyText}>{energy}</Text> 
                <Text style = {styles.bodyText}>{fat}</Text>
                <Text style = {styles.bodyText}> {carbs}</Text>
                <Text style = {styles.bodyText}>{protein}</Text>
                <Text style = {styles.bodyText}>{fiber}</Text>
            </View>
            <TouchableOpacity style={styles.buttons} onPress={() => {
                update(currentItem.id, currentItem.workoutDay, currentItem.workout1, currentItem.workout2, currentItem.workout3, currentItem.finished1, currentItem.finished2, currentItem.finished3, foodName, calories, energy, fat, carbs, protein, fiber, foodImage);
                navigation.navigate('Workout', {id, workoutDay, workout1, workout2, workout3, foodName, calories, energy, fat, carbs, protein, fiber, foodImage});
            }}>
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
        fontSize: 25,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#2c2f36',
        padding: 10,
        paddingTop: 10,
        textTransform: 'capitalize'
    },
    bodyText: {
        fontSize: 19, 
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