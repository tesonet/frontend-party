import { AuthActions } from './auth_constants'
export interface AuthState {
  loading: boolean
  loggedIn: boolean
  error: Error | null
  token: string | null
}
export const initialState: AuthState = {
  loggedIn: false,
  loading: false,
  error: null,
  token: null,
}

export function Authentication(state = initialState, action: AuthActions) {
  switch (action.type) {
    case 'REQUEST_LOGIN':
      const loginState: AuthState = {
        loggedIn: false,
        error: null,
        loading: true,
        token: null,
      }
      return Object.assign({}, state, loginState)
    case 'LOGGED_IN':
      const loggedInState: AuthState = {
        loggedIn: true,
        error: null,
        loading: false,
        token: action.token ? action.token : null,
      }
      if (action.token) {
        window.localStorage.setItem('token', action.token)
      }

      return Object.assign({}, state, loggedInState)
    case 'ERROR':
      const errorState: AuthState = {
        loggedIn: false,
        error: action.err ? action.err : null,
        loading: false,
        token: null,
      }
      return Object.assign({}, state, errorState)
    case 'LOG_OUT':
      const logoutState: AuthState = {
        loggedIn: false,
        error: null,
        loading: false,
        token: null,
      }
      window.localStorage.removeItem('token')
      return Object.assign({}, state, logoutState)
    default:
      return state
  }
}
