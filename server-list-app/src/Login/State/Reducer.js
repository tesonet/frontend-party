import { LoginActionTypes } from "./Actions.js"

const initialState = {
  username: "",
  password: "",
  isLoading: false,
  token: "",
  authenticationError: ""
};

const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LoginActionTypes.LOGIN_VALIDATION_PROGRESS_STATE:
      return Object.assign({}, state, { isLoading: action.state });
    default:
      return state
  }
}

export default LoginReducer;