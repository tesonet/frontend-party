import {SERVER_LIST_ACTIONS, IServer, ISetServerListAction} from '../actions/serverListActions';
import {serverListReducer} from '../reducers/serverListReducer';
import {Action} from 'redux';

describe('serverListReducer', () => {
  it(`should handle ${SERVER_LIST_ACTIONS.SET_SERVER_LIST} action`, () => {
    const initialState: Array<IServer> = [];
    const server: IServer = {distance: 1, name: 'server'};
    const action: ISetServerListAction = {
      type: SERVER_LIST_ACTIONS.SET_SERVER_LIST,
      payload: [server]
    }
    expect(serverListReducer(initialState, action).length).toBe(1);
    expect(serverListReducer(initialState, action)[0].name).toBe('server');
    expect(serverListReducer(initialState, action)[0].distance).toBe(1);
  });

  it(`should sort servers by distance and name for ${SERVER_LIST_ACTIONS.SET_SERVER_LIST} action`, () => {
    const initialState: Array<IServer> = [];
    const server1: IServer = {distance: 1, name: 'server1'};
    const server2: IServer = {distance: 2, name: 'server2'};
    const action: ISetServerListAction = {
      type: SERVER_LIST_ACTIONS.SET_SERVER_LIST,
      payload: [server2, server1]
    }
    expect(serverListReducer(initialState, action).length).toBe(2);
    expect(serverListReducer(initialState, action)[0]).toEqual(server1);
    expect(serverListReducer(initialState, action)[1]).toEqual(server2);
  });

  it(`should handle ${SERVER_LIST_ACTIONS.CLEAR_SERVER_LIST} action`, () => {
    const initialState: Array<IServer> = [{distance: 1, name: 'server'}];
    const action: Action = {type: SERVER_LIST_ACTIONS.CLEAR_SERVER_LIST}
    expect(serverListReducer(initialState, action).length).toBe(0);
  });
});
