import { combineReducers } from 'redux';
import user from './reducers/user';
import data from './reducers/data'

export default combineReducers({
    user, 
    data
});