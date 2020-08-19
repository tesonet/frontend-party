import history from '../components/history';
import axios from 'axios';
import {
  SIGN_IN,
  SIGN_OUT,
  FETCH_SERVERS
} from './types';

export const signOut = () => {
  localStorage.removeItem('myTokenLocal');
  history.push('/');
  return({
    type: SIGN_OUT
  });
};

export const loginToTestio = (formValues, type) => {
  if(type){
    history.push('/result');
    return({
      type: SIGN_IN,
      payload: formValues
    });
  } else {
    return async (dispatch) => {
      const response = await axios.post('https://playground.tesonet.lt/v1/tokens', formValues, { headers: {'Content-Type': 'application/json'} });

      dispatch({ type: SIGN_IN, payload: response.data.token });
      localStorage.setItem('myTokenLocal', response.data.token);
      history.push('/result');
    };
  };
};

export const fetchServers = (tokenID) => {
  return async (dispatch) => {
    const response = await axios.get('https://playground.tesonet.lt/v1/servers', { headers: {'Authorization' : `Bearer ${tokenID}`,'Content-Type': 'application/json'} });

    dispatch({ type: FETCH_SERVERS, payload: response.data });
  };
};
