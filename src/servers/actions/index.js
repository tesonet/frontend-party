import {createAction} from 'redux-actions'
import * as ActionTypes from '../types'

export const fetchServers = createAction(ActionTypes.FETCH_SERVERS_PENDING)
export const fetchServersFulfilled = createAction(
  ActionTypes.FETCH_SERVERS_SUCCESS,
)
export const fetchServersFailed = createAction(ActionTypes.FETCH_SERVERS_ERROR)
