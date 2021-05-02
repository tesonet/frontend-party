import { Dispatch } from 'redux'
import { Server } from 'types/server'
import { getServersFromApi } from '../api'
export const LOAD_SERVERS = 'LOAD_SERVERS'
export const SERVERS_LOADING = 'SERVERS_LOADING'

export interface LoadServers {
  type: typeof LOAD_SERVERS
  payload: Server[]
}

export interface ServersLoading {
  type: typeof SERVERS_LOADING
}

export const loadServers = () => (dispatch: Dispatch): void => {
  dispatch({ type: SERVERS_LOADING })
  getServersFromApi().then(response => {
    dispatch({
      type: LOAD_SERVERS,
      payload: response,
    })
  })
}

export type ServerActionTypes = LoadServers | ServersLoading
