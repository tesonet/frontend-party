import axios from 'axios';
import { createAction } from 'redux-actions';
import { ThunkAction } from 'redux-thunk';
import { IApp } from '../../types';
import { setToken } from '../token/actions'
import { ITokenAPI } from '../token/types';
import { SET_LOGIN_VALUE, SET_PASSWORD_VALUE } from './constants';

export const setLoginInput = createAction(SET_LOGIN_VALUE);
export const setPasswordInput = createAction(SET_PASSWORD_VALUE);


const postPath = 'http://playground.tesonet.lt/v1/tokens';

// Thunks
export const onSubmit = (): ThunkAction<void, IApp ,{}, any> => (dispatch, getState) => {
    dispatch(getToken());
};

const getToken = (): ThunkAction<void, IApp ,{}, any> => (dispatch, getState)=> {
    const state = getState();

    axios.request<ITokenAPI>({
        headers: {
            'content-type': 'application/json'
        },
        method:'POST',
        params: {
            password: state.form.password,
            username: state.form.username
        },
        url: postPath,
      }).then(({ data }) => {
            dispatch(setToken(data.token))
      });
}