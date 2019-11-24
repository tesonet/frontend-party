import { SET_SERVERS, LOADING_DATA } from '../types';
import axios from 'axios';

// Get all servers
export const getServers = () => dispatch => {
  dispatch({ type: LOADING_DATA });
  axios
    .get('/servers')
    .then(res => {
      dispatch({
        type: SET_SERVERS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: SET_SERVERS,
        payload: []
      });
    });
};
