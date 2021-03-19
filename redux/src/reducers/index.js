import countReducer from './count'
import personReducer from './personreducer'
import {combineReducers} from 'redux'

export default combineReducers({
    sum:countReducer,
    persons:personReducer
})