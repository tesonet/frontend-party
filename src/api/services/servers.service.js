import {
  startFetchingServers,
  setServersSuccess,
  setAuthFailure,
  setGlobalFailure,
  clearServersState,
} from '@/slices/servers.slice';
import { get } from '../helpers';
import API from '../constants';

export const getServers = () => async (dispatch) => {
  dispatch(startFetchingServers());
  let response;
  try {
    response = await get(`${API.DOMAIN}${API.SERVERS}`);
  } catch (err) {
    if (err.message === '401') {
      dispatch(setAuthFailure());
    } else {
      dispatch(setGlobalFailure());
    }
    return;
  }

  dispatch(setServersSuccess(response));
};

export const clearServers = () => (dispatch) => {
  dispatch(clearServersState());
};
