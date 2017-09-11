import { createAction } from 'redux-actions';
import { api } from '../../util/api';

export const names = {
  LOAD_SERVERS_DONE: 'servers/LOAD_SERVERS_DONE',
  LOAD_SERVERS_ERROR: 'servers/LOAD_SERVERS_ERROR',
};

const loadServersDone = createAction(names.LOAD_SERVERS_DONE);
const loadServersError = createAction(names.LOAD_SERVERS_ERROR);
const loadServers = () => (dispatch, getState) => api.get('/servers')
  .then(({ data }) => {
    dispatch(loadServersDone(data));
  })
  .catch((e) => {
    dispatch(loadServersError());
  });

export const actions = {
  loadServers,
  loadServersDone,
  loadServersError,
};

