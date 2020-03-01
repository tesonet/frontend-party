import * as actionTypes from '../actions/actionTypes';

const initialState = {
  loading: false,
  servers: [],
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_SERVERS_START:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.FETCH_SERVERS_SUCCESS:
      return {
        ...state,
        loading: false,
        servers: action.servers,
      };
    case actionTypes.FETCH_SERVERS_FAIL:
      return {
        ...state,
        loading: false,
        error: 'error',
      };
    default:
      return state;
  }
};

export default reducer;
