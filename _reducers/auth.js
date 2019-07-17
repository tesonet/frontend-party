import { AUTH_USER } from "../_actions";

export default (state = { authenticated: false }, action) => {
  switch (action.type) {
    case AUTH_USER:
      return { ...state, error: "", authenticated: true };
    default:
      return state;
  }
};
