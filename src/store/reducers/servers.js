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
        servers: [],
      };
    case actionTypes.FETCH_SERVERS_SUCCESS:
      return {
        ...state,
        loading: false,
        servers: action.servers,
        error: null,
      };
    case actionTypes.FETCH_SERVERS_FAIL:
      return {
        ...state,
        loading: false,
        error: 'Ooops! Something went wrong. Try again later!',
      };
    default:
      return state;
  }
};

export default reducer;
