import axios from '__mocks__/axios';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { IApp } from 'types';
import { buildServerList, getList } from './actions';
import { SET_ERROR, SET_LIST } from './constants';
import { IAPIResponse } from './types';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const initialState: Partial<IApp> = {
  user: {
    isLoggedIn: true,
    token: 'token'
  }
};
let store: any;
const buildPayload = (type: string, payload?: any) => ({
  payload,
  type
});

const testAPIData: IAPIResponse[] = [
  { name: 'Latvia #56', distance: 451 },
  { name: 'Lithuania #56', distance: 1713 },
  { name: 'Latvia #81', distance: 504 }
];

describe('List actions ', () => {
  beforeAll(() => {
    axios.request = jest.fn(() => Promise.resolve({ data: { testAPIData } }));
  });

  beforeEach(() => {
    store = mockStore(initialState);
  });

  describe('#buildAds', () => {
    it('should build countries list from api data', () => {
      const result = testAPIData.map(buildServerList);
      expect(result).toMatchSnapshot();
    });
  });

  describe('#getList', () => {
    it('should dispatch error action then request failed', async () => {
      axios.request.mockImplementationOnce(() => Promise.reject());

      await store.dispatch(getList());
      const actions = store.getActions();

      const expectedPayload = buildPayload(SET_ERROR, true);
      expect(actions).toEqual([expectedPayload]);
    });

    it('should dispatch setServersList action then request succeed', async () => {
      await store.dispatch(getList());
      const actions = store.getActions();
      expect(actions[0].type).toEqual(SET_LIST);
    });
  });
});
