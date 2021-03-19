//create and expose a store, unique in the app
import {createStore,applyMiddleware,combineReducers} from 'redux'
import allReducer from '../reducers/index'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'


export default createStore(allReducer,composeWithDevTools(applyMiddleware(thunk)))


