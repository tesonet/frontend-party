import {createAction} from 'redux-actions'
import * as actionTypes from '../types'

export const loginUser = createAction(actionTypes.LOGIN_PENDING)
export const loginUserFulfilled = createAction(actionTypes.LOGIN_SUCCESS)
export const loginUserFailed = createAction(actionTypes.LOGIN_ERROR)

export const logoutUser = createAction(actionTypes.LOGOUT)
