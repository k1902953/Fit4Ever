import React from "react";
import { View, Pressable, Text, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from "react-native-web";
import { StyledContainer,
    PageTitle,
    StyledButton,
    StyledButton2,
    ButtonText,
    ButtonText2,
    Avatar,
} from '../components/styles';

const Workout = ({route}) => {
    const {workoutDay} = route.params;
    return (
        <StyledContainer>
            <View style={styles.pad}>
                <PageTitle>DAY {workoutDay}</PageTitle>
                <Image source={require('./../../assets/images/AccountImage.jpg')}/>
                <PageTitle style={styles.pad}>Dolphin Plank</PageTitle>
            </View>
            <View style={styles.itemContainer}>
                <View style={styles.box}>
                    <Text style={styles.nameText}>Duration:</Text>
                    <Text style={styles.subText}>30mins</Text>
                </View>
                <View style={styles.box}>
                    <Text style={styles.nameText}>Progression:</Text>
                    <Text style={styles.subText}>100%</Text>
                </View>
            </View>
            {/* <View>
                <Text style={styles.subText}>Track Your Run</Text>
            </View> */}
            <StyledButton>
                <ButtonText>Add Meal</ButtonText>
            </StyledButton>
            <StyledButton2>
                <ButtonText2>Share Progress</ButtonText2>
            </StyledButton2>
        </StyledContainer>
    );
};

const styles = StyleSheet.create({
    pad:{
        paddingTop: 60
    },
    itemContainer:{
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent: 'space-evenly',
        marginTop: 20,
        marginBottom: 50
    },
    box:{
        backgroundColor: '#e5e7eb',
        padding: 20,
        borderRadius: 5,
        alignItems: 'center'
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