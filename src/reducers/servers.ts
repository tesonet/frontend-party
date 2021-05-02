import { LOAD_SERVERS } from 'actions/servers'
import { Server } from 'types/server'

export interface ServersSTate {
  servers: Server[]
}

const initialState: ServersSTate = {
  servers: [],
}

export const serversReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case LOAD_SERVERS: {
      return { ...state, answers: [...state.servers, action.payload] }
    }
    default:
      return state
  }
}
