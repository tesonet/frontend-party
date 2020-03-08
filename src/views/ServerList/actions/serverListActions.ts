import {Action} from 'redux';

export const SERVER_LIST_ACTIONS = {
  SET_SERVER_LIST: 'SERVER_LIST_ACTIONS/SET_SERVER_LIST',
  CLEAR_SERVER_LIST: 'SERVER_LIST_ACTIONS/CLEAR_SERVER_LIST'
};

export interface IServer {
  name: string;
  distance: number;
}

export interface ISetServerListAction extends Action {
  payload: Array<IServer>;
}

export const setServerList = (payload: Array<IServer>): ISetServerListAction => ({
  type: SERVER_LIST_ACTIONS.SET_SERVER_LIST,
  payload
});

export const clearServerList = (): Action => ({
  type: SERVER_LIST_ACTIONS.CLEAR_SERVER_LIST
});
