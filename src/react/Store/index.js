import {createStore} from 'redux';
import rootReducer from '../Reducers/index';


let token = localStorage.getItem('auth_token');
const initialState = token ? {token: token} : {token: null};

const store = createStore(rootReducer, initialState);

export default store;