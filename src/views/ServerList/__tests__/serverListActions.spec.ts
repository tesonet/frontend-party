import {SERVER_LIST_ACTIONS, setServerList, clearServerList} from '../actions/serverListActions';

describe('serverListActions', () => {
  it(`should correctly create ${SERVER_LIST_ACTIONS.SET_SERVER_LIST} action`, () => {
    expect(setServerList([])).toEqual({
      type: SERVER_LIST_ACTIONS.SET_SERVER_LIST,
      payload: []
    });
  });

  it(`should correctly create ${SERVER_LIST_ACTIONS.CLEAR_SERVER_LIST} action`, () => {
    expect(clearServerList()).toEqual({type: SERVER_LIST_ACTIONS.CLEAR_SERVER_LIST});
  });
});
