import {ADD_PERSON} from "../redux/constant"

export const createAddPersonAction = personObj =>{
    console.log("person action")
    return {type:ADD_PERSON,data:personObj}
}

