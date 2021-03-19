import {ADD_PERSON} from '../redux/constant'

const initState = [{id:"001",name:'tom',age:18}]
export default function personReducer(preState=initState,action){
    const {type,data} = action
    console.log("@")
    console.log(type,data)
    switch(type){
        case ADD_PERSON:
        {
            return [data,...preState]
        }
        default:
            return preState
    }
}