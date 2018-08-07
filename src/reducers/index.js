import { TOKEN } from '../constants';
import {
    GET_SERVERS,
    GET_SERVERS_FAIL,
    GET_SERVERS_SUCCESS,
    LOGIN,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    LOGOUT
} from '../actions/types';

const initialState = {
    isBusy: false,
    isLoggedIn: !!localStorage.getItem(TOKEN)
};

export default (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                isBusy: true
            };
        case LOGIN_SUCCESS:
            localStorage.setItem(TOKEN, action.payload.data['token']);
            
            return {
                isBusy: false,
                isLoggedIn: true
            };
        case LOGIN_FAIL:
            return {
                ...state,
                isBusy: false
            };
        case GET_SERVERS:
            return {
                ...state,
                isBusy: true
            };
        case GET_SERVERS_SUCCESS:
            return {
                ...state,
                isBusy: false
            };
        case GET_SERVERS_FAIL:
            return {
                ...state,
                isBusy: false
            };
        case LOGOUT:
            localStorage.removeItem(TOKEN);
            return {
                ...state,
                isLoggedIn: false
            };
        default:
            return state;
    }
};