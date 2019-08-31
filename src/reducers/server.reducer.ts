import {FETCH_SERVERS} from "../actions";

const initState = {
    items: [],
    isLoading: true
};

export default function(state = initState, action: any) {
    switch (action.type) {
        case FETCH_SERVERS:
            return {
                ...state,
                items: action.payload,
                isLoading: action.isLoading
            };
        default:
            return state;
    }
}