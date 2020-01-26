import {handleActions} from 'redux-actions'
import {loginUserFulfilled, logoutUser} from '../actions'

const initialState = {
  isAuthenticated: null,
  /**
   * null = don't know if authenticaded, yet
   * false = not logged in
   * true = logged in
   */
  userToken: null,
  isLoggingIn: false,
}

const auth = handleActions(
  {
    [loginUserFulfilled]: (state, action) => ({
      ...state,
      isAuthenticated: true,
      userToken: action.payload.token,
    }),
    [logoutUser]: () => ({
      ...initialState,
      isAuthenticated: false,
    }),
  },
  initialState,
)

export default auth
