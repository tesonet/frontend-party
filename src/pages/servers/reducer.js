import * as actionTypes from './actionTypes';

const initialState = {
  servers: [],
  loading: false,
  error: null,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case actionTypes.FETCH_SERVERS:
      return {
        ...state,
        servers: action.payload.servers,
      };
    case actionTypes.LOADING:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.FETCH_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default reducer;
