import { getServersList } from '../../server/api/tesonetApi';
import * as actionTypes from './actionTypes';

const fetchSuccess = (servers) => ({
  type: actionTypes.FETCH_SERVERS,
  payload: { servers },
});

const loading = () => ({
  type: actionTypes.LOADING,
});

const setError = (error) => ({
  type: actionTypes.FETCH_ERROR,
  payload: { error },
});

const fetchServers = (token) => async (dispatch) => {
  const response = await getServersList(token);
  dispatch(loading());
  if (response && response.ok) {
    const data = await response.json();
    dispatch(fetchSuccess(data));
  } else {
    dispatch(setError());
  }
};

export {
  fetchServers,
  loading,
  setError,
};
