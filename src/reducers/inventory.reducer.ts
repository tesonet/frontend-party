import {
    GET_SERVERS_START,
    GET_SERVERS_SUCCESS,
    GET_SERVERS_ERROR,
    InventoryState,
    GetServersStartAction,
    GetServersSuccessAction,
    GetServersErrorAction,
    Server
} from "../types";

const initialState = {
    loading: false,
    error: null,
    servers: [],
    expirationTimestamp: 0,
} as InventoryState;

const authReducer = (
    state = initialState,
    action:
        GetServersStartAction |
        GetServersSuccessAction |
        GetServersErrorAction
) => {

    const expirationTime = process.env.REACT_APP_API_RESULTS_EXPIRATION_TIME ? parseInt(process.env.REACT_APP_API_RESULTS_EXPIRATION_TIME) : 5 * 60 * 1000; // 5 min by default

    switch (action.type) {

        case GET_SERVERS_START:
            return {
                ...state,
                loading: true,
                authenticated: false
            };

        case GET_SERVERS_SUCCESS:

            // There are clearly too few servers to imlement such sort bothby alphabet
            // Or I am missing something.
            // Sorting by both aspects produces unexpected results...
            // ~one.name > other.name

            const sorted = action.payload.servers.sort((one: Server, other: Server) => {
                return other.distance > one.distance ? 1 : -1
            });

            return {
                ...state,
                ...action.payload,
                servers: sorted,
                authenticated: true,
                loading: false,
                error: null,
                expirationTimestamp: Date.now() + expirationTime,
            };

        case GET_SERVERS_ERROR:
            return {
                ...state,
                loading: false,
                authenticated: false,
                error: action.payload.error
            };

        default:
            return state;
    }
};

export default authReducer;