import axios from './axios';
import * as actions from '../actions/servers';

export const fetchServers = () => dispatch => {
  dispatch(actions.fetchServersStart());
  const token = `Bearer ${localStorage.getItem('token')}`;
  const config = { headers: { Authorization: token } };
  axios
    .get('/servers', config)
    .then(res => dispatch(actions.fetchServersSuccess(res.data)))
    .catch(() => dispatch(actions.fetchServersFail()));
};
