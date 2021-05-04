/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { AuthActionTypes, USER_LOADED, USER_LOADING, SET_LOGIN_ERROR } from 'actions/auth'
import { USER_LOGGED_OUT } from '../actions/auth'
import { cleanLocalStorageData, setAuthToken, getAuthToken } from '../libs/auth'

export interface AuthState {
  token: string | null
  loading: boolean
  error: boolean | null
}

const initialState: AuthState = {
  token: getAuthToken(),
  loading: false,
  error: null,
}

export const authReducer = (state = initialState, action: AuthActionTypes) => {
  switch (action.type) {
    case USER_LOADING: {
      return { ...state, loading: true, error: false }
    }
    case USER_LOADED: {
      setAuthToken(action.payload)
      return { ...state, token: action.payload, loading: false, error: false }
    }
    case USER_LOGGED_OUT: {
      cleanLocalStorageData()
      return { ...state, token: '' }
    }
    case SET_LOGIN_ERROR: {
      return { ...state, error: true, loading: false }
    }

    default:
      return state
  }
}
