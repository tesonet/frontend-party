import * as actionTypes from '../actions/actionTypes';

const initialState = {
  loading: false,
  token: null,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.AUTH_SUCCESS:
      return {
        ...state,
        token: action.token,
        loading: false,
      };
    case actionTypes.AUTH_FAIL:
      return {
        ...state,
        loading: false,
      };
    case actionTypes.LOGOUT:
      return {
        ...state,
        token: null,
      };
    default:
      return state;
  }
};

export default reducer;
