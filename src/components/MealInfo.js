import React, { useReducer, useEffect, useContext} from "react";
import { ActionTypes } from "../helpers/ActionTypes";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Daylist from '../components/DayList';
import WorkoutInfo from "../helpers/WorkoutInfo";

const STORAGE_KEY = "0000001";
let data =[];
const MealInfo = React.createContext();
// const [complete, setComplete] = useState('');

const reducer = (state, action) => {
    switch (action.type){
        case ActionTypes.create :
            return [
                ...state,
                {
                    id: Math.floor(Math.random()*99999),
                    workoutDay: action.payload.workoutDay,
                    workout1: action.payload.workout1, 
                    workout2: action.payload.workout2,
                    workout3: action.payload.workout3,
                    finished1: action.payload.finished1, 
                    finished2: action.payload.finished2,
                    finished3: action.payload.finished3,
                    foodName: action.payload.foodName,
                    calories: action.payload.calories,
                    energy: action.payload.energy,
                    fat: action.payload.fat,
                    carbs: action.payload.carbs,
                    protein: action.payload.protein,
                    fiber: action.payload.fiber,
                    foodImage: action.payload.foodImage
                }
            ]
        case ActionTypes.update:
            return state.map((e) => {
                if(e.id === action.payload.id){
                    return action.payload;
                } else {
                    return e;
                }
            });
        // case ActionTypes.delete:
        //     return state.filter((e) => e.id !== action.payload.id);
        case ActionTypes.save:
            try {
                AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(state));
            }catch (err) {
                console.log(err);
            } finally {
                return state;
            }
        case ActionTypes.load:
            return[
                ...state,
                {
                    id: action.payload.id,
                    workoutDay: action.payload.workoutDay,
                    workout1: action.payload.workout1, 
                    workout2: action.payload.workout2,
                    workout3: action.payload.workout3,
                    finished1: action.payload.finished1, 
                    finished2: action.payload.finished2,
                    finished3: action.payload.finished3,
                    foodName: action.payload.foodName,
                    calories: action.payload.calories,
                    energy: action.payload.energy,
                    fat: action.payload.fat,
                    carbs: action.payload.carbs,
                    protein: action.payload.protein,
                    fiber: action.payload.fiber,
                    foodImage: action.payload.foodImage,
                }
            ];
        default:
            return state;
    }
}

export const ItemProvider2 = ({children}) => {
    const value = useContext(WorkoutInfo);
    const info = [];
    
    const[state, dispatch] = useReducer(reducer, data );
    
    useEffect(() => {
        const loadStorage = async () => {
            const storage = await AsyncStorage.getItem(STORAGE_KEY);
            if (storage !== null && state.length === 0) {
                data = JSON.parse(storage);
                data.forEach((item) => {
                    dispatch ({ type: ActionTypes.load, payload: item})
                });
            }else{
                console.log("hi");
                let data =[];
                for (let index = 0; index < 30; index++) {
                    data.push({
                        id: Math.floor(Math.random()*99999),
                        complete: false,
                        workoutDay: index +1,
                        workout1: value[Math.floor((Math.random() * 6) + 1)],
                        workout2: value[Math.floor((Math.random() * 6) + 1)],
                        workout3: value[Math.floor((Math.random() * 6) + 1)],
                        finished1: false,
                        finished2: false,
                        finished3: false,
                        foodName: '',
                        calories: '',
                        energy: '',
                        fat: '',
                        carbs: '',
                        protein: '',
                        fiber: '',
                        foodImage: ''
                    });
                }
                data.forEach((item) => {
                    dispatch ({ type: ActionTypes.load, payload: item})
                });
            }
        }
        loadStorage();
    }, [STORAGE_KEY]);

    const addItem = (id, workout1, workout2, workout3, foodName, calories, energy, fat, carbs, protein, fiber) => {
        dispatch({type: ActionTypes.create, payload: {id, workout1, workout2, workout3, foodName, calories, energy, fat, carbs, protein, fiber}})
        dispatch({type: ActionTypes.save})
    };

    const updateItem = (id, workoutDay, workout1, workout2, workout3, finished1, finished2, finished3, foodName, calories, energy, fat, carbs, protein, fiber, foodImage) => {
        dispatch({type: ActionTypes.update, payload: {id, workoutDay, workout1, workout2, workout3, finished1, finished2, finished3, foodName, calories, energy, fat, carbs, protein, fiber, foodImage}});
        dispatch({type: ActionTypes.save})
        
    };
    return (
        <MealInfo.Provider value = {{
                state:state,
                create: addItem,
                update: updateItem,
            }}>
            {children}
        </MealInfo.Provider>
    )
};

export default MealInfo;