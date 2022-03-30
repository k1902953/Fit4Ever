import React, {useContext, useState, useEffect} from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, Pressable, ScrollView } from 'react-native';
import MealInfo from "../components/MealInfo";
import { primary, brand } from '../components/styles';

let switching1 = false;
let switching2 = false;
let switching3 = false;

const Workout = ({route, navigation}) => {
    const {id, workoutDay, workout1, workout2, workout3, foodName, calories, energy, fat, carbs, protein, fiber, foodImage} = route.params;
    const {state, update} = useContext(MealInfo);
    const currentItem = state.find((e) => e.id === id);
    const [foodInfo, setFoodInfo] = useState('');
    const [finished1, setFinished1] = useState(currentItem.finished1);
    const [finished2, setFinished2] = useState(currentItem.finished2);
    const [finished3, setFinished3] = useState(currentItem.finished3);
    
    const mainImage = [
        {
            img: <Image style={styles.mainImg} source={require('./../../assets/images/male1.png')}/>
        },
        {
            img: <Image style={styles.mainImg} source={require('./../../assets/images/male2.png')}/>
        },
        {
            img: <Image style={styles.mainImg} source={require('./../../assets/images/run.png')}/>
        },
        {
            img: <Image style={styles.mainImg} source={require('./../../assets/images/plank.png')}/>
        },
        {
            img: <Image style={styles.mainImg} source={require('./../../assets/images/woman1.png')}/>
        },
        {
            img: <Image style={styles.mainImg} source={require('./../../assets/images/woman2.png')}/>
        },
        {
            img: <Image style={styles.mainImg} source={require('./../../assets/images/woman-healthy.png')}/>
        },
    ];

    var updatingF1 = async ()=>{
        update(currentItem.id, currentItem.workoutDay, currentItem.workout1, currentItem.workout2, currentItem.workout3, finished1, currentItem.finished2, currentItem.finished3, currentItem.foodName, currentItem.calories, currentItem.energy, currentItem.fat, currentItem.carbs, currentItem.protein, currentItem.fiber, currentItem.foodImage);
    };
    var updatingF2 = async ()=>{
        update(currentItem.id, currentItem.workoutDay, currentItem.workout1, currentItem.workout2, currentItem.workout3, currentItem.finished1, finished2, currentItem.finished3, currentItem.foodName, currentItem.calories, currentItem.energy, currentItem.fat, currentItem.carbs, currentItem.protein, currentItem.fiber, currentItem.foodImage);
    };
    var updatingF3 = async ()=>{
        update(currentItem.id, currentItem.workoutDay, currentItem.workout1, currentItem.workout2, currentItem.workout3, currentItem.finished1, currentItem.finished2, finished3, currentItem.foodName, currentItem.calories, currentItem.energy, currentItem.fat, currentItem.carbs, currentItem.protein, currentItem.fiber, currentItem.foodImage);
    };

    var button1pressed = async () => {
        if(switching1 === true){
            setFinished1(switching1);
            updatingF1();
        }
    };
    var button2pressed = async () => {
        if(switching2 === true){
            setFinished2(switching2);
            updatingF2();
        }
    };
    var button3pressed = async () => {
        if(switching3 === true){
            setFinished3(switching3);
            updatingF3();
        }
    };

    
    const getFoodInfo = async () => {
        setFoodInfo(calories +
                    "\n"+energy +
                    "\n"+fat +
                    "\n"+carbs +
                    "\n"+protein +
                    "\n"+fiber 
        );
    }
    useEffect(()=> {
        button1pressed();
        button2pressed();
        button3pressed();
        switching1 = false;
        switching2 = false;
        switching3 = false;
        getFoodInfo();
    },[state])
    return (
        <ScrollView horizontal={false} >
            <View style={styles.styledContainer}>
                <View style={styles.pad}>
                    <Text style={styles.pageTitle}>DAY {workoutDay}</Text>
                    {mainImage[Math.floor((Math.random() * 7))].img}
                </View>
                <View>
                    <Text style={styles.pad}>{workout1.workoutName}</Text>
                    <View style={styles.itemContainer}>
                        <View style={styles.box}>
                            <Text style={styles.nameText}>Duration:</Text>
                            <Text style={styles.subText}>{workout1.duration}</Text>
                        </View>
                        <View style={styles.fin}>
                            <Pressable style={{ 
                                backgroundColor: finished1 ? 'lightgreen' : '#e5e7eb', 
                                padding: 25,
                                paddingLeft: 35,
                                paddingRight: 35,
                                borderRadius: 10}} 
                                onPress={() =>  {
                                    switching1 = true
                                    button1pressed()
                                }}
                            >
                                <Text style={styles.textLinkContent}>Finished</Text>
                            </Pressable>
                        </View>
                    </View>
                    <View style={styles.box2}>
                        <Text style={styles.nameText}>How to:</Text>
                        <Text>{workout1.steps}</Text>
                    </View>
                </View>

                <View >
                    <Text style={styles.pad}>{workout2.workoutName}</Text>
                    <View style={styles.itemContainer}>
                        <View style={styles.box}>
                            <Text style={styles.nameText}>Duration:</Text>
                            <Text style={styles.subText}>{workout2.duration}</Text>
                        </View>
                        <View style={styles.fin}>
                            <TouchableOpacity style={{ 
                                backgroundColor: finished2 ? 'lightgreen' : '#e5e7eb', 
                                padding: 25,
                                paddingLeft: 35,
                                paddingRight: 35,
                                borderRadius: 10}} 
                                onPress={() =>  {
                                    switching2 = true
                                    button2pressed()
                                }}
                            >
                                <Text style={styles.textLinkContent}>Finished</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.box2}>
                        <Text style={styles.nameText}>How to:</Text>
                        <Text>{workout2.steps}</Text>
                    </View>
                </View>
                 
                <View >
                    <Text style={styles.pad}>{workout3.workoutName}</Text>
                    <View style={styles.itemContainer}>
                        <View style={styles.box}>
                            <Text style={styles.nameText}>Duration:</Text>
                            <Text style={styles.subText}>{workout3.duration}</Text>
                        </View>
                        <View style={styles.fin}>
                            <TouchableOpacity style={{ 
                                backgroundColor: finished3 ? 'lightgreen' : '#e5e7eb', 
                                padding: 25,
                                paddingLeft: 35,
                                paddingRight: 35,
                                borderRadius: 10}} 
                                onPress={() =>  {
                                    switching3 = true
                                    button3pressed()
                                }}
                            >
                                <Text style={styles.textLinkContent}>Finished</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.box2}>
                        <Text style={styles.nameText}>How to:</Text>
                        <Text>{workout3.steps}</Text>
                    </View>
                </View>

                <View style={styles.itemContainer}>
                    <Image style = {styles.img} source ={foodImage ? {uri:foodImage} : null}/>
                    <View style = {styles.box3}>
                        <Text style = {styles.bodyTitle}>{foodName}</Text>
                        <Text style = {styles.bodyText}>{foodInfo}</Text>
                    </View>
                </View>
                <TouchableOpacity style={styles.buttons} onPress={() => 
                    navigation.navigate("Camera" , {id, id})}>
                    <Text style={styles.textLinkContent}>Add Meal</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttons2} onPress={() => 
                    navigation.navigate("StepCounter")}>
                    <Text style={styles.textLinkContent}>Step Counter</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    pad:{
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#2c2f36',
    },
    fin:{
        alignSelf: 'center'
    },
    list:{
        maxHeight:230,
        marginBottom: 20
    },
    textLinkContent: {
        color: brand,
        fontSize: 16,
        alignSelf: 'center',
    },
    mainImg:{
        minHeight: 273,
        minWidth: 350,
        maxHeight: 273,
        maxWidth: 350,
        alignSelf: 'center',
        borderRadius: 5
    },
    img:{
        minHeight: 150,
        minWidth: 150,
        position: 'relative',
        borderRadius: 5
    },
    buttons: {
        flex: 1,
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
    buttons2: {
        flex: 1,
        margin: 5,
        marginBottom: 20,
        width: 300,
        minHeight: 70,
        borderColor: '#e69557',
        borderWidth: 1,
        justifyContent: 'center',
        alignContent: 'center',
        borderRadius: 10,
        alignItems: 'center',
        alignSelf: 'center',
    }, 
    styledContainer:{
        flex:1,
        padding : 25,
        width: '100%',
        alignContent: 'center',
        color: primary,
        backgroundColor: 'white'
    },
    itemContainer:{
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent: 'space-evenly',
        marginTop: 20,
        marginBottom: 20
    },
    pageTitle:{
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#2c2f36',
        padding: 10,
        paddingTop: 10
    },
    bodyTitle: {
        fontSize: 23, 
        color: 'black',
        paddingBottom: 10,
        fontWeight: '300',
        textTransform: 'capitalize'
    },
    bodyText: {
        fontSize: 20, 
        color: 'black',
        fontWeight: '200',
    },
    box:{
        backgroundColor: '#e5e7eb',
        padding: 20,
        borderRadius: 5,
        alignItems: 'center',
        margin:5
    },
    box2:{
        backgroundColor: '#fafafa',
        padding: 20,
        borderRadius: 5,
        margin:5
    },
    box3:{
        margin:10,
        marginTop: 0
    },
    nameText: {
        fontSize: 23, 
        color: 'black',
        fontWeight: 'bold',
        paddingBottom: 10
    },
    subText: {
        fontSize: 20, 
        color: 'black'
    },
});

export default Workout;