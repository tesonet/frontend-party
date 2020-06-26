import { REQUEST_LOGIN, LOGGED_IN, ERROR, LOG_OUT } from './auth_constants'
import { authLogin } from '../service/auth_service'

function requestLogIn(): { type: REQUEST_LOGIN } {
  return {
    type: 'REQUEST_LOGIN',
  }
}

function userLoggedIn(token: string): { type: LOGGED_IN; token: string } {
  return {
    type: 'LOGGED_IN',
    token,
  }
}

function userLoginError(err): { type: ERROR; err: any } {
  return {
    type: 'ERROR',
    err,
  }
}

function userLogout(): { type: LOG_OUT } {
  return {
    type: 'LOG_OUT',
  }
}

export function logIn(username: string, password: string) {
  return function (dispatch) {
    dispatch(requestLogIn())
    return authLogin(username, password)
      .then((res) => dispatch(userLoggedIn(res.data.token)))
      .catch((err) => dispatch(userLoginError(err)))
  }
}

export function logOut() {
  return (dispatch) => {
    dispatch(userLogout())
  }
}
