import axios from '__mocks__/axios';
import { LOGIN_TOGGLER, SET_TOKEN } from 'features/user/constants';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { IApp } from 'types';
import { getToken } from './actions';
import { REQUEST_FAILED } from './constants';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const initialState: Partial<IApp> = {
  form: {
    error: false,
    password: 'The Cool Guy',
    username: 'John'
  }
};
let store: any;
const token = 'fake-token';

const buildPayload = (type: string, payload?: any) => ({
  payload,
  type
});

describe('Login form actions ', () => {
  beforeAll(() => {
    axios.request = jest.fn(() => Promise.resolve({ data: { token } }));
  });

  beforeEach(() => {
    store = mockStore(initialState);
  });

  describe('getToken', () => {
    it('should dispatch error action then request failed', async () => {
      axios.request.mockImplementationOnce(() => Promise.reject());

      await store.dispatch(getToken());
      const actions = store.getActions();

      const expectedPayload = buildPayload(REQUEST_FAILED, true);
      expect(actions).toEqual([expectedPayload]);
    });

    it('should dispatch setToken action then request succeed', async () => {
      await store.dispatch(getToken());
      const actions = store.getActions();
      const expectedPayload = buildPayload(SET_TOKEN, token);
      expect(actions[0]).toEqual(expectedPayload);
    });

    it('should dispatch setLoggedInStatus action then request succeed', async () => {
      await store.dispatch(getToken());
      const actions = store.getActions();
      const expectedPayload = buildPayload(LOGIN_TOGGLER, true);
      expect(actions[1]).toEqual(expectedPayload);
    });

    it('should change route then request succeed', async () => {
      await store.dispatch(getToken());
      const actions = store.getActions();
      const expectedPayload = buildPayload('@@router/CALL_HISTORY_METHOD', {
        args: ['/form'],
        method: 'push'
      });
      expect(actions[2]).toEqual(expectedPayload);
    });
  });
});
