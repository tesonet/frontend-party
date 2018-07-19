import { push } from 'connected-react-router'
import { createAction } from 'redux-actions';
import { ThunkAction } from 'redux-thunk';
import { IS_LOGGED_IN, PARTY_TOKEN } from '../../localStorageKeys';
import { IApp } from '../../types';
import { getLocalStorageData } from '../../utils/localStorage/utils';
import { LOGIN_TOGGLER, SET_TOKEN } from './constants';

export const setLoggedInStatus = createAction(LOGIN_TOGGLER);
export const setToken = createAction(SET_TOKEN);

export const stringToBool = (value: string) => value === '1' ? true : false;

export const initUser = (): ThunkAction<void, IApp ,{}, any> => (dispatch, getState) => {
    const partyToken = getLocalStorageData(PARTY_TOKEN);
    const loginState = getLocalStorageData(IS_LOGGED_IN);

    if (partyToken && loginState) {
        dispatch(setToken(partyToken));
        dispatch(setLoggedInStatus(stringToBool(loginState)));
    }
};

export const logout = (): ThunkAction<void, IApp ,{}, any> => (dispatch, getState) => {
    dispatch(setLoggedInStatus(false));
    dispatch(setToken(null));
    dispatch(push('/'))
};
