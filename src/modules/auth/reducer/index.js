import {handleActions} from 'redux-actions'
import {
  loginUser,
  loginUserFulfilled,
  loginUserFailed,
  logoutUser,
} from '../actions'

const initialState = {
  userToken: null,
  isLoggingIn: false,
  errorMessage: null,
}

const auth = handleActions(
  {
    [loginUser]: state => ({
      ...state,
      isLoggingIn: true,
      errorMessage: null,
    }),

    [loginUserFulfilled]: (state, action) => ({
      ...state,
      userToken: action.payload.token,
      isLoggingIn: false,
    }),
    [loginUserFailed]: (state, action) => ({
      ...state,
      isLoggingIn: false,
      errorMessage: action.payload,
    }),
    [logoutUser]: () => initialState,
  },
  initialState,
)

export default auth
