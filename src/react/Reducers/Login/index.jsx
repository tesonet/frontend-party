import {LOGIN_REQUEST, LOGOUT} from '../../Constants/Login/index';

export default function login(state, action) {
    switch (action.type){
        case LOGIN_REQUEST:
            return {...state, token: action.token};
        case LOGOUT:
            return {token: null};
        default:
            return state;
    }
}
