//create and expose a store, unique in the app
import {createStore} from 'redux'
import countReducer from './count_reducer'

export default createStore(countReducer)


