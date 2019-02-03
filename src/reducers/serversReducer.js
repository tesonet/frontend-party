import { GET_SERVERS, SET_LOADING } from '../actions/types';

const initialState = {
    servers: [],
    loading: false
};

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_SERVERS:
            return {
                ...state,
                servers: action.payload,
                loading: false
            };
        case SET_LOADING:
            return {
                ...state,
                loading: true
            };
        default:
            return state;
    }
}
