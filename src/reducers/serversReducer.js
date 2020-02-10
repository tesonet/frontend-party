import types from "../actions/types";

const initialState = {
  isFetching: false,
  error: false,
  data: []
};

const serversReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SERVER_LIST_REQUESTED:
      return {
        ...state,
        isFetching: true
      };
    case types.SERVER_LIST_RECEIVED:
      return {
        ...state,
        isFetching: false,
        data: action.payload
      };
    case types.SERVER_LIST_NOT_RECEIVED:
      return {
        ...state,
        isFetching: false,
        error: true
      };
    default:
      return state;
  }
};

export default serversReducer;
