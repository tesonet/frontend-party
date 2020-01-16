import * as types from "../../actions/types";

const initialState = {
  serverList: [],
  error: "",
  loading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SERVER_LIST_FETCH:
      return { ...state, serverList: [], error: "", loading: true };
    case types.SERVER_LIST_FETCH_ERROR:
      return { ...state, error: action.error, loading: false };
    case types.SERVER_LIST_FETCH_SUCCESS:
      return {
        ...state,
        serverList: action.serverList,
        error: "",
        loading: false
      };
    default:
      return state;
  }
};
