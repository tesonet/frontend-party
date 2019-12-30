import * as actionTypes from './actionTypes';

const initialState = {
  servers: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case actionTypes.FETCH_SERVERS:
      return {
        ...state,
        servers: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
