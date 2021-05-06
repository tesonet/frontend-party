import { Dispatch } from 'redux'
import { Server } from 'types/server'
import { getServersFromApi } from 'api'
export const LOAD_SERVERS = 'LOAD_SERVERS'
export const SERVERS_LOADING = 'SERVERS_LOADING'
export const SORT_BY_NAME = 'SORT_BY_NAME'
export const SORT_BY_DISTANCE = 'SORT_BY_DISTANCE'
export const REMOVE_SORT = 'REMOVE_SORT'

export interface LoadServers {
  type: typeof LOAD_SERVERS
  payload: Server[]
}

export interface ServersLoading {
  type: typeof SERVERS_LOADING
}

export interface SortByName {
  type: typeof SORT_BY_NAME
}

export interface SortByDistance {
  type: typeof SORT_BY_DISTANCE
}

export interface RemoveSort {
  type: typeof REMOVE_SORT
}

export const sortByName = (): SortByName => ({
  type: SORT_BY_NAME,
})

export const sortByDistance = (): SortByDistance => ({
  type: SORT_BY_DISTANCE,
})

export const removeSort = (): RemoveSort => ({
  type: REMOVE_SORT,
})

export const loadServers = () => (dispatch: Dispatch): void => {
  dispatch({ type: SERVERS_LOADING })
  getServersFromApi().then(response => {
    dispatch({
      type: LOAD_SERVERS,
      payload: response,
    })
  })
}

export type ServerActionTypes =
  | LoadServers
  | ServersLoading
  | SortByName
  | SortByDistance
  | RemoveSort
