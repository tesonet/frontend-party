import { AUTH_USER, LOGOUT } from "../_actions";

export default (state = { authenticated: false }, action) => {
  switch (action.type) {
    case AUTH_USER:
      return { ...state, authenticated: true };
    case LOGOUT:
      return { ...state, authenticated: false };
    default:
      return state;
  }
};
