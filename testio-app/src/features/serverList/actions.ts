import axios from 'axios';
import orderBy from 'lodash-es/orderBy';
import { createAction } from 'redux-actions';
import { ThunkAction } from 'redux-thunk';
import { API_ROUTES } from 'Routes';
import { IApp } from 'types';
import { v4 as uuid } from 'uuid';
import { SET_ERROR, SET_LIST } from './constants';
import { IAPIResponse, IListItem } from './types';

export const setServersList = createAction(SET_LIST);
export const setError = createAction(SET_ERROR);

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

  return axios
    .request<IAPIResponse[]>({
      headers: {
        Authorization: user.token,
        'content-type': 'application/json'
      },
      method: 'GET',
      url: API_ROUTES.SERVER_LIST
    })
    .then(({ data }) => {
      const sortedArray = orderBy(data, ['distance', 'name']);
      dispatch(setServersList(sortedArray.map(buildServerList)));
    })
    .catch(error => {
      dispatch(setError(true));
    });
};
