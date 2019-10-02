import { ServerListActionTypes } from "./Actions"

const initialState = {
    isLoading: false,
    serverList: []
};

const ServerListReducer = (state = initialState, action) => {
    switch (action.type) {
        case ServerListActionTypes.LOADING_IN_PROGRESS:
            return Object.assign({}, state, { isLoading: action.isLoading });
        case ServerListActionTypes.LOADING_FINISHED:
            return Object.assign({}, state, { isLoading: action.isLoading, serverList: action.serverList });
        default:
            return state
    }
}

export default ServerListReducer;