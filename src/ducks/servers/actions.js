import { createAction } from 'redux-actions';
import { toastr } from 'react-redux-toastr';
import { api } from '../../util/api';

export const names = {
  LOAD_SERVERS_DONE: 'servers/LOAD_SERVERS_DONE',
};

const loadServersDone = createAction(names.LOAD_SERVERS_DONE);
const loadServers = () => (dispatch, getState) => api.get('/servers')
  .then(({ data }) => {
    dispatch(loadServersDone(data));
  })
  .catch((e) => {
    toastr.error('Oops!', 'Our cluster is showing character  ¯\\_(ツ)_/¯.')
  });

export const actions = {
  loadServers,
  loadServersDone,
};

