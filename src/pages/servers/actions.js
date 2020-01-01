import { getServersList } from '../../server/api/tesonetApi';
import * as actionTypes from './actionTypes';

const fetchSuccess = (servers) => ({
  type: actionTypes.FETCH_SERVERS,
  payload: { servers },
});

const fetchServers = (token) => async (dispatch) => {
  const response = await getServersList(token);

  if (response && response.ok) {
    const data = await response.json();
    dispatch(fetchSuccess(data));
  }
};

export {
  fetchServers,
};
