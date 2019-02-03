import axios from 'axios';
import { GET_SERVERS, SET_LOADING } from './types';

export const getServers = () => dispatch => {
    dispatch(setLoading(true));
    axios
        .get('http://playground.tesonet.lt/v1/servers')
        .then(res =>
            dispatch({
                type: GET_SERVERS,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch({
                type: GET_SERVERS,
                payload: []
            })
        );
};

export const setLoading = bool => {
    return {
        type: SET_LOADING,
        payload: bool
    };
};
