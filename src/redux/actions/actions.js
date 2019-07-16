import constants from '../constants/constants';
import store from '../store';
import { loginService, logoutService } from '../services/loginService';
import { serversListService } from '../services/serversListService';

import history from '../../_helpers';

const loginSuccess = (token) => ({ type: constants.LOGIN_SUCCESS, token });
const loginFailure = (error) => ({ type: constants.LOGIN_FAILURE, error });

const listSuccess = (data) => ({ type: constants.GET_SERVERS, data });
const listFailure = (error) => ({ type: constants.GET_SERVERS_FAILURE, error });

export const sortByName = () => (dispatch) => {
    const { data } = store.getState().reducer;
    const sorted = data.slice(0).sort((a, b) => {
        if (a.name < b.name) {
            return -1;
        }
        if (a.name > b.name) {
            return 1;
        }
        return 0;
    });
    dispatch({
        type: constants.SORT_NAME,
        data: sorted
    });
};

export const sortByDistance = () => (dispatch) => {
    const { data } = store.getState().reducer;
    const sorted = data.slice(0).sort((a, b) => {
        if (a.distance < b.distance) {
            return -1;
        }
        if (a.distance > b.distance) {
            return 1;
        }
        return 0;
    });
    dispatch({
        type: constants.SORT_DISTANCE,
        data: sorted
    });
};

export const getList = () => (
    dispatch => {
        serversListService()
            .then(
                data => {
                    dispatch(listSuccess(data));
                },
                error => {
                    dispatch(listFailure(error));
                }
            );
    }
);

export const login = (username, password) => (
    dispatch => {
        loginService(username, password)
            .then(
                token => {
                    dispatch(loginSuccess(token));
                    history.push('/dashboard');
                },
                error => {
                    dispatch(loginFailure(error));
                }
            );
    }
);

export const logout = () => {
    logoutService();
    history.push('/login');
    return { type: constants.LOGOUT };
};
