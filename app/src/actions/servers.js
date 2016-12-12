import axios from 'axios';
import { API_URL } from '../constants/api';
import { FETCH_SERVERS } from '../constants/types';

export const fetchServers = () => (dispatch) => {
  const token = localStorage.getItem('token');
  axios.get(`${API_URL}/servers`, {
    headers: { authorization: token },
  })
  .then(response => dispatch({
    type: FETCH_SERVERS,
    payload: response.data,
  }));
};

export const addNewServer = () => {};
