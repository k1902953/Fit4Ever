import React, {useContext, useState, useEffect} from "react";
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import MealInfo from "../components/MealInfo";
import { primary, black, secondary, darkLight, brand } from '../components/styles';

const Workout = ({route, navigation}) => {
    const {id, workoutDay, workout1, workout2, workout3, foodName, calories, energy, fat, carbs, protein, fiber, foodImage} = route.params;
    const {state} = useContext(MealInfo);
    const currentItem = state.find((e) => e.id === id);
    const [foodInfo, setFoodInfo] = useState('');
    
    const data = [];

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
        getFoodInfo();
    },[state])
    return (
        <ScrollView horizontal={false} >
            <View style={styles.styledContainer}>
                <View style={styles.pad}>
                    <Text style={styles.pageTitle}>DAY {workoutDay}</Text>
                    <Image style={styles.mainImg} source={require('./../../assets/images/AccountImage.jpg')}/>
                </View>
                <View >
                    <Text style={styles.pad}>{workout1.workoutName}</Text>
                    <View style={styles.itemContainer}>
                        <View style={styles.box}>
                            <Text style={styles.nameText}>Duration:</Text>
                            <Text style={styles.subText}>{workout1.duration}</Text>
                        </View>
                        <View style={styles.box}>
                            <Text style={styles.nameText}>Progression:</Text>
                            
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
                        <View style={styles.box}>
                            <Text style={styles.nameText}>Progression:</Text>
                            
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
                        <View style={styles.box}>
                            <Text style={styles.nameText}>Progression:</Text>
                            
                        </View>
                    </View>
                    <View style={styles.box2}>
                        <Text style={styles.nameText}>How to:</Text>
                        <Text>{workout3.steps}</Text>
                    </View>
                </View>

                <View style={styles.itemContainer}>
                    <Image style = {styles.img} source ={{uri:foodImage}}/>
                    <View style = {styles.box3}>
                        <Text style = {styles.bodyTitle}>{foodName}</Text>
                        <Text style = {styles.bodyText}>{foodInfo}</Text>
                    </View>
                </View>
                <TouchableOpacity style={styles.buttons} onPress={() => 
                    navigation.navigate("Camera" , {id, id})}>
                    <Text style={styles.textLinkContent}>Add Meal</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttons2}>
                    <Text style={styles.textLinkContent}>Share Progress</Text>
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
        paddingTop: 10,
    },
    list:{
        maxHeight:230,
        marginBottom: 20
    },
    textLinkContent: {
        color: brand,
        fontSize: 16,
    },
    mainImg:{
        maxHeight: 200,
        maxWidth: 250,
    },
    img:{
        minHeight: 150,
        minWidth: 150,
        position: 'relative',
        // alignSelf: 'flex-start',
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
    }, 
    styledContainer:{
        flex:1,
        padding : 25,
        width: '100%',
        alignContent: 'center',
        color: primary,
        backgroundColor: 'white',
        alignItems: 'center',
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