import * as actionTypes from './actionTypes';

const initialState = {
  token: null,
  loading: false,
  error: null,

};

const auth = (state = initialState, action = {}) => {
  switch (action.type) {
    case actionTypes.SET_TOKEN:
      return {
        ...state,
        token: action.payload,
        loading: false,
      };
    case actionTypes.LOADING:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.SET_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case actionTypes.LOGOUT:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export default auth;
