import React, { useReducer, useEffect, useContext} from "react";
import { ActionTypes } from "../helpers/ActionTypes";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Daylist from '../components/DayList';
import WorkoutInfo from "../helpers/WorkoutInfo";

const STORAGE_KEY = "my_super_secret_key";

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
    for (let index = 0; index < 85; index++) {
        const x = value[Math.floor((Math.random() * 6) + 1)];
        info.push(x);
    }
    let data = [
        {
            id: Math.floor(Math.random()*99999),
            complete: true,
            workoutDay: 1,
            workout1: info[0],
            workout2: info[1],
            workout3: info[2],
            foodName: '',
            calories: '',
            energy: '',
            fat: '',
            carbs: '',
            protein: '',
            fiber: '',
            foodImage: ''
        },
        {
            id: Math.floor(Math.random()*99999),
            complete: false,
            workoutDay: 2,
            workout1: info[3],
            workout2: info[4],
            workout3: info[5],
            foodName: '',
            calories: '',
            energy: '',
            fat: '',
            carbs: '',
            protein: '',
            fiber: '',
            foodImage: ''
        },
        {
            id: Math.floor(Math.random()*99999),
            complete: false,
            workoutDay: 3,
            workout1: info[6],
            workout2: info[7],
            workout3: info[8],
            foodName: '',
            calories: '',
            energy: '',
            fat: '',
            carbs: '',
            protein: '',
            fiber: '',
            foodImage: ''
        },
        {
            id: Math.floor(Math.random()*99999),
            complete: false,
            workoutDay: 4,
            workout1: info[9],
            workout2: info[10],
            workout3: info[11],
            foodName: '',
            calories: '',
            energy: '',
            fat: '',
            carbs: '',
            protein: '',
            fiber: '',
            foodImage: ''
        },
        {
            id: Math.floor(Math.random()*99999),
            complete: false,
            workoutDay: 5,
            workout1: info[12],
            workout2: info[13],
            workout3: info[14],
            foodName: '',
            calories: '',
            energy: '',
            fat: '',
            carbs: '',
            protein: '',
            fiber: '',
            foodImage: ''
        },
        {
            id: Math.floor(Math.random()*99999),
            complete: false,
            workoutDay: 6,
            workout1: info[15],
            workout2: info[16],
            workout3: info[17],
            foodName: '',
            calories: '',
            energy: '',
            fat: '',
            carbs: '',
            protein: '',
            fiber: '',
            foodImage: ''
        },
        {
            id: Math.floor(Math.random()*99999),
            complete: false,
            workoutDay: 7,
            workout1: info[18],
            workout2: info[19],
            workout3: info[20],
            foodName: '',
            calories: '',
            energy: '',
            fat: '',
            carbs: '',
            protein: '',
            fiber: '',
            foodImage: ''
        },
        {
            id: Math.floor(Math.random()*99999),
            complete: false,
            workoutDay: 8,
            workout1: info[21],
            workout2: info[22],
            workout3: info[23],
            foodName: '',
            calories: '',
            energy: '',
            fat: '',
            carbs: '',
            protein: '',
            fiber: '',
            foodImage: ''
        },
        {
            id: Math.floor(Math.random()*99999),
            complete: false,
            workoutDay: 9,
            workout1: info[24],
            workout2: info[25],
            workout3: info[26],
            foodName: '',
            calories: '',
            energy: '',
            fat: '',
            carbs: '',
            protein: '',
            fiber: '',
            foodImage: ''
        },
        {
            id: Math.floor(Math.random()*99999),
            complete: false,
            workoutDay: 10,
            workout1: info[27],
            workout2: info[28],
            workout3: info[29],
            foodName: '',
            calories: '',
            energy: '',
            fat: '',
            carbs: '',
            protein: '',
            fiber: '',
            foodImage: ''
        },
        {
            id: Math.floor(Math.random()*99999),
            complete: false,
            workoutDay: 11,
            workout1: info[30],
            workout2: info[31],
            workout3: info[32],
            foodName: '',
            calories: '',
            energy: '',
            fat: '',
            carbs: '',
            protein: '',
            fiber: '',
            foodImage: ''
        },
        {
            id: Math.floor(Math.random()*99999),
            complete: false,
            workoutDay: 12,
            workout1: info[85],
            workout2: info[86],
            workout3: info[87],
            foodName: '',
            calories: '',
            energy: '',
            fat: '',
            carbs: '',
            protein: '',
            fiber: '',
            foodImage: ''
        },
        {
            id: Math.floor(Math.random()*99999),
            complete: false,
            workoutDay: 13,
            workout1: info[33],
            workout2: info[34],
            workout3: info[35],
            foodName: '',
            calories: '',
            energy: '',
            fat: '',
            carbs: '',
            protein: '',
            fiber: '',
            foodImage: ''
        },
        {
            id: Math.floor(Math.random()*99999),
            complete: false,
            workoutDay: 14,
            workout1: info[36],
            workout2: info[37],
            workout3: info[38],
            foodName: '',
            calories: '',
            energy: '',
            fat: '',
            carbs: '',
            protein: '',
            fiber: '',
            foodImage: ''
        },
        {
            id: Math.floor(Math.random()*99999),
            complete: false,
            workoutDay: 15,
            workout1: info[39],
            workout2: info[40],
            workout3: info[41],
            foodName: '',
            calories: '',
            energy: '',
            fat: '',
            carbs: '',
            protein: '',
            fiber: '',
            foodImage: ''
        },
        {
            id: Math.floor(Math.random()*99999),
            complete: false,
            workoutDay: 16,
            workout1: info[42],
            workout2: info[43],
            workout3: info[44],
            foodName: '',
            calories: '',
            energy: '',
            fat: '',
            carbs: '',
            protein: '',
            fiber: '',
            foodImage: ''
        },
        {
            id: Math.floor(Math.random()*99999),
            complete: false,
            workoutDay: 17,
            workout1: info[45],
            workout2: info[46],
            workout3: info[45],
            foodName: '',
            calories: '',
            energy: '',
            fat: '',
            carbs: '',
            protein: '',
            fiber: '',
            foodImage: ''
        },
        {
            id: Math.floor(Math.random()*99999),
            complete: false,
            workoutDay: 18,
            workout1: info[46],
            workout2: info[47],
            workout3: info[48],
            foodName: '',
            calories: '',
            energy: '',
            fat: '',
            carbs: '',
            protein: '',
            fiber: '',
            foodImage: ''
        },
        {
            id: Math.floor(Math.random()*99999),
            complete: false,
            workoutDay: 19,
            workout1: info[49],
            workout2: info[50],
            workout3: info[51],
            foodName: '',
            calories: '',
            energy: '',
            fat: '',
            carbs: '',
            protein: '',
            fiber: '',
            foodImage: ''
        },
        {
            id: Math.floor(Math.random()*99999),
            complete: false,
            workoutDay: 20,
            workout1: info[52],
            workout2: info[53],
            workout3: info[54],
            foodName: '',
            calories: '',
            energy: '',
            fat: '',
            carbs: '',
            protein: '',
            fiber: '',
            foodImage: ''
        },
        {
            id: Math.floor(Math.random()*99999),
            complete: false,
            workoutDay: 21,
            workout1: info[55],
            workout2: info[56],
            workout3: info[57],
            foodName: '',
            calories: '',
            energy: '',
            fat: '',
            carbs: '',
            protein: '',
            fiber: '',
            foodImage: ''
        },
        {
            id: Math.floor(Math.random()*99999),
            complete: false,
            workoutDay: 22,
            workout1: info[58],
            workout2: info[59],
            workout3: info[60],
            foodName: '',
            calories: '',
            energy: '',
            fat: '',
            carbs: '',
            protein: '',
            fiber: '',
            foodImage: ''
        },
        {
            id: Math.floor(Math.random()*99999),
            complete: false,
            workoutDay: 23,
            workout1: info[61],
            workout2: info[62],
            workout3: info[63],
            foodName: '',
            calories: '',
            energy: '',
            fat: '',
            carbs: '',
            protein: '',
            fiber: '',
            foodImage: ''
        },
        {
            id: Math.floor(Math.random()*99999),
            complete: false,
            workoutDay: 24,
            workout1: info[64],
            workout2: info[65],
            workout3: info[66],
            foodName: '',
            calories: '',
            energy: '',
            fat: '',
            carbs: '',
            protein: '',
            fiber: '',
            foodImage: ''
        },
        {
            id: Math.floor(Math.random()*99999),
            complete: false,
            workoutDay: 25,
            workout1: info[67],
            workout2: info[68],
            workout3: info[69],
            foodName: '',
            calories: '',
            energy: '',
            fat: '',
            carbs: '',
            protein: '',
            fiber: '',
            foodImage: ''
        },
        {
            id: Math.floor(Math.random()*99999),
            complete: false,
            workoutDay: 26,
            workout1: info[70],
            workout2: info[71],
            workout3: info[72],
            foodName: '',
            calories: '',
            energy: '',
            fat: '',
            carbs: '',
            protein: '',
            fiber: '',
            foodImage: ''
        },
        {
            id: Math.floor(Math.random()*99999),
            complete: false,
            workoutDay: 27,
            workout1: info[73],
            workout2: info[74],
            workout3: info[75],
            foodName: '',
            calories: '',
            energy: '',
            fat: '',
            carbs: '',
            protein: '',
            fiber: '',
            foodImage: ''
        },
        {
            id: Math.floor(Math.random()*99999),
            complete: false,
            workoutDay: 28,
            workout1: info[76],
            workout2: info[77],
            workout3: info[78],
            foodName: '',
            calories: '',
            energy: '',
            fat: '',
            carbs: '',
            protein: '',
            fiber: '',
            foodImage: ''
        },
        {
            id: Math.floor(Math.random()*99999),
            complete: false,
            workoutDay: 29,
            workout1: info[79],
            workout2: info[80],
            workout3: info[81],
            foodName: '',
            calories: '',
            energy: '',
            fat: '',
            carbs: '',
            protein: '',
            fiber: '',
            foodImage: ''
        },
        {
            id: Math.floor(Math.random()*99999),
            complete: false,
            workoutDay: 30,
            workout1: info[82],
            workout2: info[83],
            workout3: info[84],
            foodName: '',
            calories: '',
            energy: '',
            fat: '',
            carbs: '',
            protein: '',
            fiber: '',
            foodImage: ''
        }
    ]
    const[state, dispatch] = useReducer(reducer, data );
    
    useEffect(() => {
        const loadStorage = async () => {
            const storage = await AsyncStorage.getItem(STORAGE_KEY);
            if (storage !== null && state.length === 0) {
                data = JSON.parse(storage);
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

    // const deleteItem = (workoutDay) => {
    //     dispatch({type: ActionTypes.delete, payload: {workoutDay:workoutDay}})
    //     dispatch({type: ActionTypes.save})
    // };

    const updateItem = (id, workoutDay, workout1, workout2, workout3, foodName, calories, energy, fat, carbs, protein, fiber, foodImage) => {
        dispatch({type: ActionTypes.update, payload: {id, workoutDay, workout1, workout2, workout3, foodName, calories, energy, fat, carbs, protein, fiber, foodImage}});
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