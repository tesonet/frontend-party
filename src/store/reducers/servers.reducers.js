import * as actionTypes from "../constants/servers.constants";

const initialState = {
    error: null,
    loading: false,
    data: null,
    nameSortAsc: false,
    distanceSortAsc: false
};

const serversReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SERVERS_REQUEST:
            return {
                ...state,
                loading: true
            };
        case actionTypes.SERVERS_SUCCESS:
            return {
                ...state,
                data: action.data,
                loading: false
            };
        case actionTypes.SERVERS_FAILURE:
            return {
                ...state,
                error: action.error,
                loading: false
            };
        case actionTypes.SERVERS_NAME_SORT:
            return {
                ...state,
                data: action.data
            };
        case actionTypes.SERVERS_NAME_SORT_ASC:
            return {
                ...state,
                nameSortAsc: true
            };
        case actionTypes.SERVERS_NAME_SORT_DSC:
            return {
                ...state,
                nameSortAsc: false
            };
        case actionTypes.SERVERS_DISTANCE_SORT:
            return {
                ...state,
                data: action.data
            };
        case actionTypes.SERVERS_DISTANCE_SORT_ASC:
            return {
                ...state,
                distanceSortAsc: true
            };
        case actionTypes.SERVERS_DISTANCE_SORT_DSC:
            return {
                ...state,
                distanceSortAsc: false
            };
        default:
            return state;
    }
};

export default serversReducer;
