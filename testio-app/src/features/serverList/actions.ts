import axios from 'axios';
import orderBy from 'lodash-es/orderBy';
import { createAction } from 'redux-actions';
import { ThunkAction } from 'redux-thunk';
import { v4 as uuid } from 'uuid';
import { IApp } from '../../types';
import { SET_LIST } from './constants';
import { IAPIResponse, IListItem } from './types';

export const setLoginInput = createAction(SET_LIST);
const getPath = 'http://playground.tesonet.lt/v1/servers';

// Thunks
export const getServersList = (): ThunkAction<void, IApp, {}, any> => (
  dispatch,
  getState
) => {
  dispatch(getList());
};

export const buildServerList = (data: IAPIResponse): IListItem => ({
  ...data,
  uid: uuid()
});

export const getList = (): ThunkAction<void, IApp, {}, any> => (
  dispatch,
  getState
) => {
  const { user } = getState();

  axios
    .request<IAPIResponse[]>({
      headers: {
        Authorization: user.token,
        'content-type': 'application/json'
      },
      method: 'GET',
      url: getPath
    })
    .then(({ data }) => {
      const sortedArray = orderBy(data, ['distance', 'name']);
      dispatch(setLoginInput(sortedArray.map(buildServerList)));
    })
    .catch(error => {
      // tslint:disable-next-line:no-console
      console.log(error);
    });
};
