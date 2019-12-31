import * as actionTypes from './actionTypes';

const initialState = {
  servers: [],
  sort: null,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case actionTypes.FETCH_SERVERS:
      return {
        ...state,
        servers: action.payload.servers,
      };
    case actionTypes.SORT_LIST:
      return {
        ...state,
        sort: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
