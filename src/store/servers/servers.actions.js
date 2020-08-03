import serversConstants from './servers.constants';
import { getStorageToken } from '../../utils/localStorage';
import { getServers } from '../../utils/api';

const getServersRequest = () => ({
  type: serversConstants.GET_SERVERS_REQUEST,
});

const getServersSuccess = (serversList) => ({
  type: serversConstants.GET_SERVERS_SUCCESS,
  payload: serversList,
});

const getServersFail = () => ({
  type: serversConstants.GET_SERVERS_FAIL,
});

export const fetchServers = () => (dispatch) => {
  dispatch(getServersRequest());
  getServers(getStorageToken('token'))
    .then((res) => {
      dispatch(getServersSuccess(res));
    })
    .catch(() => {
      dispatch(getServersFail());
    });
};
