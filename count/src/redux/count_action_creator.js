import {INCREMENT,DECREMENT} from "./constant";
//Create action object for count component

export const createIncrementAction = data =>({type:INCREMENT,data})
export const createDecrementAction = data =>({type:DECREMENT,data})
