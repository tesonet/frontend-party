/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { AuthActionTypes, USER_LOADED, USER_LOADING } from 'actions/auth'
import { USER_LOGGED_OUT } from '../actions/auth'

export interface AuthState {
  token: string | null
  loading: boolean
}

const initialState: AuthState = {
  token: localStorage.getItem('token'),
  loading: false,
}

export const authReducer = (state = initialState, action: AuthActionTypes) => {
  switch (action.type) {
    case USER_LOADING: {
      return { ...state, loading: true }
    }
    case USER_LOADED: {
      return { ...state, token: action.payload, loading: false }
    }
    case USER_LOGGED_OUT: {
      return { ...state, token: '' }
    }
    default:
      return state
  }
}
