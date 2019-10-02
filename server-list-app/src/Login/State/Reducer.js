import { LoginActionTypes } from "./Actions"

const initialState = {
  username: "",
  password: "",
  isLoading: false,
  token: "",
  authenticationError: ""
};

const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LoginActionTypes.USERNAME_CHANGE:
      return Object.assign({}, state, { username: action.username });
    case LoginActionTypes.PASSWORD_CHANGE:
      return Object.assign({}, state, { password: action.password });
    case LoginActionTypes.LOADING_IN_PROGRESS:
      return Object.assign({}, state, { isLoading: action.isLoading });
    case LoginActionTypes.AUTHENTICATION_ERROR:
      return Object.assign({}, state, { isLoading: action.isLoading, authenticationError: action.authenticationError });
    case LoginActionTypes.AUTHENTICATION_SUCCESS:
      return Object.assign({}, state, { token: action.token, isLoading: action.isLoading, authenticationError: action.authenticationError });
    default:
      return state
  }
}

export default LoginReducer;