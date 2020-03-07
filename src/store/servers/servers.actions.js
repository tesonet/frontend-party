import { serversAPI } from 'data';

import * as types from './servers.types';

const getServers = () => {
  return async dispatch => {
    dispatch({ type: types.BEFORE_GET_SERVERS });

    try {
      const servers = await serversAPI.getServers();

      dispatch({
        type: types.AFTER_GET_SERVERS,
        payload: {
          servers
        }
      });
    } catch (error) {
      dispatch({ type: types.AFTER_GET_SERVERS_FAIL, payload: { error } });
    }
  };
};

export default {
  getServers
};
