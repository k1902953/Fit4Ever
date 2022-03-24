import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { primary, black, secondary, darkLight, brand } from '../components/styles';
import { Camera } from 'expo-camera';
import { MaterialIcons } from '@expo/vector-icons'; 
import { manipulateAsync, SaveFormat } from 'expo-image-manipulator';

const CameraScreen =({ navigation, route }) => {
    const {workoutDay} = route.params;
    const [hasPermission, setHasPermission] = useState(null);
    const getPermission = async () => {
        const { status } = await Camera.requestCameraPermissionsAsync();
        setHasPermission(status === "granted")
    };
    useEffect (() => {
        getPermission();
    }, [hasPermission]);
    if (hasPermission === null){
        return <Text style={styles.access}>Awaiting Permission</Text>
    }
    if(hasPermission ===false){
        return <Text style={styles.access}>Access Denied</Text>
    }

    let camera;
    // const ratio = await camera.getAvailablePictureSizeAsync();
    
    const getPicture = async () => {
        if(camera){
            const photo = await camera.takePictureAsync();
            // setImage(photo);
            const manipResult = await manipulateAsync(
                photo.uri,
                [{ resize: { width: 640, height: 480 } }],
            );
            // navigation.navigate('Workout', {foodImage: photo.uri, workoutDay})
            navigation.navigate('Scan', {foodImage: manipResult.uri})
        }
    }

    return (
        <View style={styles.styledContainer}>
            <Text style={styles.title}>Todays Meal</Text>
            <Camera 
                style={styles.subContainer}
                ref={(ref) => { camera = ref; }}
                autoFocus={Camera.Constants.AutoFocus.on}
            >
                <Pressable 
                    onPress={() => { getPicture(); }}
                >
                    <MaterialIcons style={styles.iconStyle} name="camera-alt" size={60} color="white" />
                </Pressable>
            </Camera>
        </View>
    );
};

const styles= StyleSheet.create({
    styledContainer:{
        flex:1,
        alignContent: 'center',
        // color: primary,
        backgroundColor: 'white',
    },
    title:{
        textAlign: 'center',
        fontSize:25,
        padding: 20,
        paddingTop: 40,
        fontWeight: 'bold',
    },
    subContainer: {
        flex:1,
        backgroundColor: 'transparent',
        alignItems: 'center',
        flexDirection: 'column-reverse',
    },
    iconStyle:{
       position: 'relative',
       alignItems: 'center',
       borderColor: 'white',
       borderWidth: 3,
       borderRadius: 50,
       padding: 15,
       marginBottom: 50
    },
    access:{
        textAlign: 'center',
        fontSize:25,
        padding: 30
    }
});

export default CameraScreen;