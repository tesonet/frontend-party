import { Dispatch } from 'redux'
import { loginWithCredentials } from '../api/auth'

export const USER_LOADING = 'USER_LOADING'
export const USER_LOADED = 'USER_LOADED'
export const USER_LOGGED_OUT = 'USER_LOGGED_OUT'

export interface LoadUser {
  type: typeof USER_LOADED
  payload: string
}

export interface UserLoading {
  type: typeof USER_LOADING
}

export interface UserLoggedOut {
  type: typeof USER_LOGGED_OUT
}

export const loadUser = () => (dispatch: Dispatch): void => {
  dispatch({ type: USER_LOADING })
  loginWithCredentials('tesonet', 'partyanimal').then(response => {
    localStorage.setItem('token', response)
    dispatch({
      type: USER_LOADED,
      payload: response,
    })
  })
}

export type AuthActionTypes = LoadUser | UserLoading | UserLoggedOut
