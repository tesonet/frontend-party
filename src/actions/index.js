import history from '../components/history';
import axios from 'axios';
import {
  SIGN_IN,
  SIGN_OUT,
  FETCH_SERVERS
} from './types';

export const signOut = () => {
  return({
    type: SIGN_OUT
  });
};

export const loginToTestio = (formValues) => {
  return async (dispatch) => {
    const response = await axios.post('http://playground.tesonet.lt/v1/tokens', formValues, { headers: {'Content-Type': 'application/json'} });

    dispatch({ type: SIGN_IN, payload: response.data.token });
    history.push('/result');
  };
};

export const fetchServers = (tokenID) => {
  return async (dispatch) => {
    const response = await axios.get('http://playground.tesonet.lt/v1/servers', { headers: {'Authorization' : `Bearer ${tokenID}`,'Content-Type': 'application/json'} });

    dispatch({ type: FETCH_SERVERS, payload: response.data });
  };
};
