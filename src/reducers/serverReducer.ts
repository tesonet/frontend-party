import ActionTypes from "../constants/actionTypes";
import { serversLoaded } from "../actions/serverActions";

type Actions = ReturnType<typeof serversLoaded>;
export interface ServerInterface {
  name: string;
  distance: number;
}

const defaultState = [];

function servers(state: ServerInterface[] = defaultState, action: Actions) {
  switch (action.type) {
    case ActionTypes.ServersLoaded:
      return action.data;
    default:
      return state;
  }
}

export default servers;
