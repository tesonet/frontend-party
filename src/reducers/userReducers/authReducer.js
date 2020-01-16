import * as types from "../../actions/types";

const initialState = {
  isAuth: false,
  authToken: "",
  username: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.AUTH_USER:
      return {
        ...state,
        isAuth: true,
        authToken: action.authToken,
        username: action.username
      };
    case types.LOG_OUT:
      return { ...state, isAuth: "", authToken: "", username: "" };
    default:
      return state;
  }
};
