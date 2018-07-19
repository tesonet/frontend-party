import { push } from 'connected-react-router'
import { createAction } from 'redux-actions';
import { ThunkAction } from 'redux-thunk';
import { IApp } from '../../types';
import { LOGOUT } from './constants';

export const setLogoutState = createAction(LOGOUT);


export const logout = (): ThunkAction<void, IApp ,{}, any> => (dispatch, getState) => {
    dispatch(setLogoutState(false));
    // remove token and login state from localstorage
    dispatch(push('/'))
};
