import React, { useState } from "react";
import { View, Pressable, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const WorkoutInfo = React.createContext();
const exercise = [
    {
        id: 1,
        image: "" ,
        workoutName: "Plank",
        duration: "1min" ,
        steps: "Put your elbows under your shoulders and your feet hip-width apart in a push-up position. Keep your body in a straight line by bending your elbows and resting your weight on your forearms and toes.",
    },
    {
        id: 2,
        image: "",
        workoutName: "Jumping Jacks",
        duration: "40reps" ,
        steps: "Standing tall with your legs together and arms at your sides is a good way to start. Jump into the air while bending your knees slightly. Spread your legs out to roughly shoulder-width apart as you jump. Extend your arms outwards and above your head. Return to the starting point and repeat the process.",
    },
    {
        id: 3,
        image: "",
        workoutName: "Crunches",
        duration: "20reps" ,
        steps: "",
    },
    {
        id: 4,
        image: "",
        workoutName: "Push-ups",
        duration: "20reps" ,
        steps: "Place your hands slightly wider than your shoulders and go down on all fours. Straighten your arms and legs as much as possible. Lower yourself to the point when your chest is almost touching the floor. Repeat by pausing, pushing yourself back up, then pausing again.",
    },
    {
        id: 5,
        image: "",
        workoutName: "High Knees",
        duration: "40reps" ,
        steps: "Stand with your feet shoulder-width apart and your back straight. Open your chest and face ahead. Raise your knees to waist level, then gently land on your balls of your feet and repeat",
    },
    {
        id: 6,
        image: "",
        workoutName: "Squats",
        duration: "20reps" ,
        steps: "With your feet shoulder-width apart, stand up. Bend your knees, press your hips back, and come to a halt when your hip joint is little lower than your knees. Return to the starting posture by pressing your heels into the floor and repeat.",
    },
    {
        id: 7,
        image: "",
        workoutName: "Walk",
        duration: "20mins" ,
        steps: "Go for a walk outside",
    },
];

const yogaPoses = [
    {
        id: 8,
        image: "" ,
        workoutName: "Downward Facing Dog",
        duration: "5 breaths" ,
        steps: "Walk your hands 6 inches in front of you while on all fours. To stretch your spine, tuck your toes and pull your hips up and back. Keep your knees bent to move your weight back into your legs if your hamstrings are tight. Spread your fingers wide, squeeze your hands together, and rotate your arms so that your biceps face each other. Your thighs should be pressed on the wall behind you.",
    },
    {
        id: 9,
        image: "",
        workoutName: "Tree Pose",
        duration: "1min" ,
        steps: "To assist you balance, find a fixed point in front of you and focus at it. Shift your weight to your left foot and elevate your right foot an inch off the floor as you inhale. Bring the foot to your shin or inner thigh with your right hand. Avoid putting your foot on the knee directly. Ground through the standing leg and lengthen through the crown of your head as you exhale. Make prayer hands by bringing your palms together in front of your sternum.",
    },
    {
        id: 10,
        image: "",
        workoutName: "Warrior II",
        duration: "1min 20secs" ,
        steps: "Stand with your feet 3-4 feet apart. Shift your right heel outward, pointing your toes slightly inward. Make a 90-degree turn with your left foot. Your left heel should be in line with the arch of your right foot. To preserve the knee joint, bend your left knee to a 90-degree angle, keeping the knee in line with the second toe. Stretch your rear leg straight and grind down into your back foot. Bring your arms to a T at shoulder height as you inhale. Pull your shoulder blades down the back of your neck. Keep your fingers spread out and your palms facing down. Look at the tips of your forefingers. Sink deeper into the stretch as you exhale.",
    },
    {
        id: 11,
        image: "",
        workoutName: "Dolphin Pose",
        duration: "20 breaths" ,
        steps: "Come down onto your forearms from all fours. Keep your elbows shoulder-width apart and spread your fingers wide. Tuck your toes and raise your hips up and back as though you're in Downward-Facing Dog on an inhale. Allow your head to dangle over the edge of the bed. Lift your upper body off the floor by pressing down onto your forearms. For a good hamstring stretch, press your heels down toward the mat.",
    },
];

const daysWorkout = [
    {
    
        // Math.floor(Math.random()*99999),
    }
]
export const ItemProvider = ({children}) => {
    return (
        <WorkoutInfo.Provider value={exercise}>
            {children}
        </WorkoutInfo.Provider>
    );
};

const styles = StyleSheet.create({
    
});

export default WorkoutInfo;