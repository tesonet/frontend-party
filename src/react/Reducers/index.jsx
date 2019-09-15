import {combineReducers} from 'redux';
import loginReducer from './Login';

function combinedReducers(state, action){
    return {
        loginReducer: loginReducer(state, action)
    }
}

export default combinedReducers;