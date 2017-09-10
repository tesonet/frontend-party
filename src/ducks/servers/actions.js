import { createAction } from 'redux-actions';
import axios from 'axios';

export const names = {
  LOAD_SERVERS_DONE: 'servers/LOAD_SERVERS_DONE',
  LOAD_SERVERS_ERROR: 'servers/LOAD_SERVERS_ERROR',
};

const loadServersDone = createAction(names.LOAD_SERVERS_DONE);
const loadServersError = createAction(names.LOAD_SERVERS_ERROR);
const loadServers = () => (dispatch, getState) => {

  axios.get('/api/servers')
    .then(({ data }) => {
      dispatch(loadServersDone(data));
    })
    .catch(() => {
      dispatch(loadServersError());
    });
};

export const actions = {
  loadServers,
};

