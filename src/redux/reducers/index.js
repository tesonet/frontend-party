import { combineReducers } from 'redux';

import {
    SET_USER,
    REMOVE_USER,
} from '../actions';

function userState(
    state = {
        user: undefined,
    },
    action
) {
    switch (action.type) {
        case SET_USER :
            return {
                user: action.user,
            };
        case REMOVE_USER :
            return {
                user: null,
            };
        default:
            return state;
    }
}

export default combineReducers({
    userState,
});
