import React from "react";
import { View, Pressable, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyledContainer,
    PageTitle,
} from '../components/styles';

const Workout = ({route}) => {
    const {workoutDay} = route.params;
    return (
        <SafeAreaView>
            <StyledContainer>
                <View>
                    <PageTitle>DAY {workoutDay}</PageTitle>
                </View>
        </StyledContainer>
       </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    itemContainer:{
        
    },
});

export default Workout;