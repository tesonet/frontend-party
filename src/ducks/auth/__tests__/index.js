import configureStore from 'redux-mock-store';
import { actions } from '../actions';
import AxiosMock from 'axios-mock-adapter';
import { api, initApi } from '../../../util/api';
import { push } from 'react-router-redux';

const mockStore = configureStore();
const axiosMock = new AxiosMock(api);

describe('async actions', () => {
  
  it('should login user', async () => {
    const token = 'ABCDEFGH';
  
    axiosMock
      .onPost('/api/tokens')
      .reply(200, { token });
  
    const store = mockStore({});
    initApi(store);
  
    expect(localStorage.getItem('token')).toEqual(null);
  
    await actions.login('user', 'pass')(store.dispatch);
    const expectedActions = [
      actions.registerToken(token),
      push('/servers'),
    ];
  
    expect(localStorage.getItem('token')).toEqual(token);
    expect(store.getActions()).toEqual(expectedActions);
  });
  
  it('should logout user', async () => {
    const store = mockStore({});
  
    actions.logout()(store.dispatch);
  
    const expectedActions = [
      actions.registerToken(null),
      push('/login'),
    ];
  
    expect(store.getActions()).toEqual(expectedActions);
    expect(localStorage.getItem('token')).toEqual(null);
  });
})

