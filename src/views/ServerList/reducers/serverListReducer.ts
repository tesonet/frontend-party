import {SERVER_LIST_ACTIONS, IServer, ISetServerListAction} from '../actions/serverListActions';
import {Action} from 'redux';

export const DEFAULT_STATE: Array<IServer> = [];

export const serverListReducer = (state: Array<IServer> = DEFAULT_STATE, action: Action) => {
  switch (action.type) {
    case SERVER_LIST_ACTIONS.SET_SERVER_LIST:
      return (action as ISetServerListAction).payload.sort((a, b) =>
        a.distance - b.distance ||
        a.name.localeCompare(b.name)
      );
    case SERVER_LIST_ACTIONS.CLEAR_SERVER_LIST:
      return DEFAULT_STATE;
    default:
      return state;
  }
};
