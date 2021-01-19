import {SET_LOGGED_IN} from "../action-types";


const initialState = {
    logged_in: !!localStorage.getItem('token') || false
};

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_LOGGED_IN: {
            return {
                ...state,
                logged_in: action.payload
            };
        }
        default:
            return state;
    }
}
