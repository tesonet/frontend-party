import * as actionTypes from './actionTypes';
import axios from 'axios';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = (token) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        token: token
    };
};

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};

export const auth = (email, password) => {
    return dispatch => {
        dispatch(authStart());
        axios({
            method: 'post',
            url: 'http://playground.tesonet.lt/v1/tokens',
            data: { username: email, password: password },
            contentType: 'application/x-www-form-urlencoded'
        }).then( function (response) {      
            localStorage.setItem('token', response.data.token); 
            dispatch(authSuccess(response.data.token));
         }).catch( error => {
            dispatch(authFail(error));
        });
    }
}