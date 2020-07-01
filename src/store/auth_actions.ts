import { REQUEST_LOGIN, LOGGED_IN, ERROR, LOG_OUT } from './auth_constants'
import { authLogin } from '../service/auth_service'
import { Dispatch } from 'react'

function requestLogIn(): { type: REQUEST_LOGIN } {
  return {
    type: 'REQUEST_LOGIN',
  }
}

export function userLoggedIn(
  token: string
): { type: LOGGED_IN; token: string } {
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

export const logIn = (username: string, password: string, dispatch) => {
  dispatch(requestLogIn())
  return authLogin(username, password)
    .then(res => {
      dispatch(userLoggedIn(res.data.token))
      return 'success'
    })
    .catch(err => {
      dispatch(userLoginError(err))
      return 'error'
    })
}

export function logOut() {
  return dispatch => {
    dispatch(userLogout())
  }
}
