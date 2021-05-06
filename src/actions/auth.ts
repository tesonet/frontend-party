import { Dispatch } from 'redux'
import { loginWithCredentials } from 'api/auth'

export const USER_LOADING = 'USER_LOADING'
export const USER_LOADED = 'USER_LOADED'
export const USER_LOGGED_OUT = 'USER_LOGGED_OUT'
export const SET_LOGIN_ERROR = 'SET_LOGIN_ERROR'

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

export interface SetLoginError {
  type: typeof SET_LOGIN_ERROR
}

export const loadUser = (username: string, password: string) => (dispatch: Dispatch): void => {
  dispatch({ type: USER_LOADING })
  loginWithCredentials(username, password)
    .then(response => {
      dispatch({
        type: USER_LOADED,
        payload: response,
      })
    })
    .catch(() => dispatch({ type: SET_LOGIN_ERROR }))
}

export const setLoginError = (): SetLoginError => ({
  type: SET_LOGIN_ERROR,
})

export const logoutUser = (): UserLoggedOut => ({
  type: USER_LOGGED_OUT,
})

export type AuthActionTypes = LoadUser | UserLoading | UserLoggedOut | SetLoginError
