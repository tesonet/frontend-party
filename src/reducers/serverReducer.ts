import ActionTypes from "../constants/actionTypes";
import {
  serversLoaded,
  serversLoading,
  serversLoadingFailed
} from "../actions/serverActions";

type Actions =
  | ReturnType<typeof serversLoaded | typeof serversLoadingFailed>
  | typeof serversLoading;

export interface ServerInterface {
  name: string;
  distance: number;
}

interface State {
  list: ServerInterface[];
  loading: boolean;
  error?: string;
}

const defaultState = {
  list: [],
  error: undefined,
  loading: false
};

function servers(state: State = defaultState, action: Actions) {
  switch (action.type) {
    case ActionTypes.ServersLoaded:
      return { ...state, list: action.data, loading: false };
    case ActionTypes.ServersLoadingFailed:
      return { ...state, error: action.error, loading: false };
    case ActionTypes.ServersLoading:
      return {
        ...state,
        error: undefined,
        loading: true
      };
    default:
      return state;
  }
}

export default servers;
