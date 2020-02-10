import types from "../actions/types";
import fetchServers from "../services/servers/servers";

export const serverListRequested = () => ({
  type: types.SERVER_LIST_REQUESTED
});

export const serverListReceived = payload => ({
  type: types.SERVER_LIST_RECEIVED,
  payload
});

export const serverListNotReceived = () => ({
  type: types.SERVER_LIST_NOT_RECEIVED
});

export const onFetchServerList = () => async dispatch => {
  dispatch(serverListRequested());
  try {
    const servers = await fetchServers();
    dispatch(serverListReceived(servers));
  } catch (err) {
    dispatch(serverListNotReceived());
  }
};
