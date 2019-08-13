import {
    ServersState,
    ServersActionTypes,
    SET_SERVERS_LIST,
} from "./types";

const initialState: ServersState = {
    servers: [],
};

export function serversReducer(
    state: ServersState = initialState,
    action: ServersActionTypes
): ServersState {
    switch (action.type) {
        case SET_SERVERS_LIST:
            return {...state, servers: action.payload};
        default:
            return state;
    }
}
