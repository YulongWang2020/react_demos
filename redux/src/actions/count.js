import {INCREMENT,DECREMENT} from "../redux/constant";
//Create action object for count component

export const createIncrementAction = data =>({type:INCREMENT,data})
export const createDecrementAction = data =>({type:DECREMENT,data})

export const createIncrementAsyncAction = (data,timer) =>{
    return (dispatch)=>{
        setTimeout(()=>{
            dispatch(createIncrementAction(data))
        },timer)
    }
}