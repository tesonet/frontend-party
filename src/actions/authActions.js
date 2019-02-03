import axios from 'axios';
import { setAuthToken } from '../components/utils/auth/setAuthToken';
import { AUTH_USER } from './types';

export const login = userData => async dispatch => {
    try {
        const response = await axios.post(
            'http://playground.tesonet.lt/v1/tokens',
            userData
        );

        localStorage.setItem('token', response.data.token);
        setAuthToken(response.data.token);

        dispatch({
            type: AUTH_USER,
            payload: response.data
        });
    } catch (err) {
        dispatch({
            type: AUTH_USER,
            payload: err.response.data
        });
    }
};

export const logout = () => {
    localStorage.removeItem('token');
    setAuthToken(false);

    return {
        type: AUTH_USER,
        payload: ''
    };
};
