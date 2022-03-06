import React, {useEffect} from "react";
import {View, Text, StyleSheet, Button, Pressable, ScrollView} from 'react-native';
import {
    StyledContainer,
    InnerContainer,
    PageTitle,
    StyledFormArea,
    StyledButton, 
    ButtonText,
    AccountContainer,
    Avatar,
    SubTitle,
    Line,
} from '../components/styles';
import Daylist from '../components/DayList';

const Main =({navigation}) => {
    useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <Pressable style={styles.header} onPress ={() => 
                    navigation.navigate('Account')}>
                    <Text> Welcome "name".</Text>
                    <Avatar style={styles.icon} resizeMode="center" source={require('./../../assets/images/avatar.png')}/>
                </Pressable>
            )
        })
    },[]);

    return (
        <StyledContainer>
           <InnerContainer >
                <ScrollView style={styles.scrollView} horizontal={false}>
                    <Text style={styles.PageTitle}>WORKOUT CALENDAR</Text>
                    <View style={styles.itemContainer}>
                        <Daylist number= "1"/>
                        <Daylist number= "2"/>
                        <Daylist number= "3"/>
                    </View>
                    <View style={styles.itemContainer}>
                        <Daylist number= "4"/>
                        <Daylist number= "5"/>
                        <Daylist number= "6"/>
                    </View>
                    <View style={styles.itemContainer}>
                        <Daylist number= "7"/>
                        <Daylist number= "8"/>
                        <Daylist number= "9"/>
                    </View>
                    <View style={styles.itemContainer}>
                        <Daylist number= "10"/>
                        <Daylist number= "11"/>
                        <Daylist number= "12"/>
                    </View>
                    <View style={styles.itemContainer}>
                        <Daylist number= "13"/>
                        <Daylist number= "14"/>
                        <Daylist number= "15"/>
                    </View>
                    <View style={styles.itemContainer}>
                        <Daylist number= "16"/>
                        <Daylist number= "17"/>
                        <Daylist number= "18"/>
                    </View>
                    <View style={styles.itemContainer}>
                        <Daylist number= "19"/>
                        <Daylist number= "20"/>
                        <Daylist number= "21"/>
                    </View>
                    <View style={styles.itemContainer}>
                        <Daylist number= "22"/>
                        <Daylist number= "23"/>
                        <Daylist number= "24"/>
                    </View>
                    <View style={styles.itemContainer}>
                        <Daylist number= "25"/>
                        <Daylist number= "26"/>
                        <Daylist number= "27"/>
                    </View>
                    <View style={styles.itemContainer}>
                        <Daylist number= "28"/>
                        <Daylist number= "29"/>
                        <Daylist number= "30"/>
                    </View>
                </ScrollView>
            </InnerContainer>
       </StyledContainer>
    )
};
const styles = StyleSheet.create({
    PageTitle: {
        fontSize: 30,
        alignContent: 'center',
        fontWeight: 'bold',
        color: '#2c2f36',
        padding: 10
    },
    header:{
        //flex: 2,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',

    },
    icon:{
        // position: "absolute",
        width: 60,
        height: 60
    },
    scrollView:{
        marginTop: 70,
    },
    itemContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    }
});
export default Main;