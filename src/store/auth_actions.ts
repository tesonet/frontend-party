import {
  REQUEST_LOGIN,
  LOGGED_IN,
  ERROR,
  LOG_OUT,
  AuthActions,
} from './auth_constants'
import { authLogin } from '../service/auth_service'
import { Dispatch } from 'react'

export function requestLogIn(): { type: REQUEST_LOGIN } {
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

export function userLoginError(err: Error): { type: ERROR; err: any } {
  return {
    type: 'ERROR',
    err,
  }
}

export function userLogout(): { type: LOG_OUT } {
  return {
    type: 'LOG_OUT',
  }
}

export const logIn = (
  username: string | null,
  password: string | null,
  dispatch: Dispatch<AuthActions>
) => {
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
  return (dispatch: Dispatch<AuthActions>) => {
    dispatch(userLogout())
  }
}
