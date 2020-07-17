import { SET_USER_LOGIN } from "../actions/user.actions.js";
import { SET_USER_LOGOUT } from "../actions/user.actions.js";

const initialState = {
  loggedIn: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_LOGIN:
      return {
        ...state,
        loggedIn: true,
      };

    case SET_USER_LOGOUT:
      return {
        ...state,
        loggedIn: false,
      };

    default:
      return state;
  }
};

export default userReducer;
