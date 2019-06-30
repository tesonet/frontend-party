import auth from './auth';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  isLogged: auth.isLogged
});

export default rootReducer;
