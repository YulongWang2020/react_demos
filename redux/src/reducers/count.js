import {INCREMENT,DECREMENT} from "../redux/constant";
//create a reducer for count component
//pure function

const initState = 0 //default value
export default function countReducer(preState=initState,action){
    console.log(preState,action)
    const {type,data} = action
    switch (type){
        case INCREMENT:
            return preState + data
        case DECREMENT:
            return preState - data
        default:
            return preState
    }
}