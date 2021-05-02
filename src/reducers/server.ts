/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { LOAD_SERVERS, ServerActionTypes, SERVERS_LOADING } from 'actions/servers'
import { Server } from 'types/server'

export interface ServerState {
  servers: Server[]
  loading: boolean
}

const initialState: ServerState = {
  servers: [],
  loading: false,
}

export const serversReducer = (state = initialState, action: ServerActionTypes) => {
  switch (action.type) {
    case LOAD_SERVERS: {
      return { ...state, servers: action.payload, loading: false }
    }
    case SERVERS_LOADING: {
      return { ...state, loading: true }
    }
    default:
      return state
  }
}
