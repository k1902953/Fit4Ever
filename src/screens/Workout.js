import React, {useContext} from "react";
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import { primary, black, secondary, darkLight, brand } from '../components/styles';
import WorkoutInfo from '../helpers/WorkoutInfo'
import ScanMeal from '../helpers/ScanMeal'

const Workout = ({route, navigation}) => {
    const {workoutDay} = route.params;
    const {foodImage} = route.params;
    const value = useContext(WorkoutInfo);
    // const scan = useContext(ScanMeal);
    const data = [];
    
    for (let index = 0; index < 3; index++) {
        const x = value[Math.floor((Math.random() * 6) + 1)];
        data.push({key:Math.floor(Math.random()*99999) , workout: x});
    }
    // console.log({data});
    // console.log({scan});
    return (
        
        <View style={styles.styledContainer}>
                <View style={styles.pad}>
                    <Text style={styles.pageTitle}>DAY {workoutDay}</Text>
                    <Image style={styles.mainImg} source={require('./../../assets/images/AccountImage.jpg')}/>    
                </View>
                <FlatList style={styles.list}
                    data={data}
                    keyExtractor={(e) => e.id}
                    renderItem={({item}) => {
                        return (
                            <View >
                                <Text style={styles.pad}>{item.workout.workoutName}</Text>
                                <View style={styles.itemContainer}>
                                    <View style={styles.box}>
                                        <Text style={styles.nameText}>Duration:</Text>
                                        <Text style={styles.subText}>{item.workout.duration}</Text>
                                    </View>
                                    <View style={styles.box}>
                                        <Text style={styles.nameText}>Progression:</Text>
                                        <Text style={styles.subText}>100%</Text>
                                    </View>
                                </View>
                                <View style={styles.box2}>
                                    <Text style={styles.nameText}>How to:</Text>
                                    <Text>{item.workout.steps}</Text>
                                </View>
                            </View>
                        )
                    }}
                /> 
                <View>
                    <Image style = {styles.img} source ={{uri:foodImage}}/>
                </View>
                <TouchableOpacity style={styles.buttons} onPress={() => navigation.navigate("Camera" , {workoutDay})}>
                    <Text style={styles.textLinkContent}>Add Meal</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttons2}>
                    <Text style={styles.textLinkContent}>Share Progress</Text>
                </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    pad:{
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#2c2f36',
        padding: 10,
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
        
        minHeight: 200,
        minWidth: 200,
        position: 'relative',
        alignSelf: 'flex-start',
    },
    buttons: {
        flex: 1,
        margin: 5,
        width: 300,
        maxHeight: 70,
        backgroundColor: '#e69557',
        justifyContent: 'center',
        alignContent: 'center',
        borderRadius: 10,
        alignItems: 'center',
    }, 
    buttons2: {
        flex: 1,
        margin: 5,
        width: 300,
        maxHeight: 70,
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
    nameText: {
        fontSize: 23, 
        color: 'black',
        fontWeight: 'bold',
        paddingBottom: 10
    },
    subText: {
        fontSize: 20, 
        color: 'black',
        
    },
});

export default Workout;