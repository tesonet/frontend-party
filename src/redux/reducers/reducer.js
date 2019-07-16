import constants from '../constants/constants';

const initialState = {
    data: [],
    token: null,
    error: null,
    sortDirection: 'desc',
    sortBy: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
    case constants.LOGIN_SUCCESS:
        return { ...state, token: action.token };
    case constants.LOGIN_FAIL:
        return { ...state, error: action.error };
    case constants.LOGOUT:
        return { ...state, token: null };
    case constants.GET_SERVERS:
        return { ...state, data: action.data };
    case constants.SORT_NAME:
        return { ...state, data: action.data };
    case constants.SORT_DISTANCE:
        return { ...state, data: action.data };
    case constants.GET_SERVERS_FAILURE:
        return { ...state, data: null, error: action.error };
    default: return state;
    }
};

export default reducer;
