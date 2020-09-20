import types from '../types/serversTypes';

const initialState = { data: null, loaded: false, errors: null };

const servers = (state = initialState, action) => {
    switch (action.type) {
    case types.SERVERS_REQUEST:
        return {
            ...state,
            loaded: false,
        };
    case types.SERVERS_SUCCESS:
        return {
            ...state,
            loaded: true,
            error: null,
            data: action.response,
        };
    case types.SERVERS_FAILURE:
        return {
            ...state,
            loaded: true,
            error: action.error,
        };
    default:
        return state;
    }
};

export default servers;
