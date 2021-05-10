/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import {
  LOAD_SERVERS,
  REMOVE_SORT,
  ServerActionTypes,
  SERVERS_LOADING,
  SORT_BY_DISTANCE,
  SORT_BY_NAME,
} from 'actions/servers'
import { Reducer } from 'redux'
import { Server } from 'types/server'

export type SortBy = 'name' | 'distance' | null

export interface ServerState {
  servers: Server[]
  loading: boolean
  sortBy: SortBy
}

const initialState: ServerState = {
  servers: [],
  loading: false,
  sortBy: null,
}

export const serversReducer: Reducer<ServerState> = (
  state = initialState,
  action: ServerActionTypes,
) => {
  switch (action.type) {
    case LOAD_SERVERS: {
      return { ...state, servers: action.payload, loading: false }
    }
    case SERVERS_LOADING: {
      return { ...state, loading: true }
    }
    case SORT_BY_NAME: {
      return { ...state, sortBy: 'name' }
    }
    case SORT_BY_DISTANCE: {
      return { ...state, sortBy: 'distance' }
    }
    case REMOVE_SORT: {
      return { ...state, sortBy: null }
    }
    default:
      return state
  }
}
