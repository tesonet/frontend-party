import { LOGIN_ACTION_TYPES } from '../constants/actionTypes';
import { SERVER_ERROR_TYPES } from '../constants/serverErrorTypes';
import { getUserToken } from '../api/teso';
import storage from '../utils/localStorage';
import { AUTH_TOKEN_KEY } from '../constants/token';

const loginSuccess = token => ({
    type: LOGIN_ACTION_TYPES.LOGIN_SUCCESS,
    payload: { token }
});

const loginPending = () => ({
    type: LOGIN_ACTION_TYPES.LOGIN_PENDING
});

const loginFail = error => ({
    type: LOGIN_ACTION_TYPES.LOGIN_FAIL,
    payload: { error }
});

export const logoutUser = () => ({
    type: LOGIN_ACTION_TYPES.LOGOUT
});

export const loginUser = user => async dispatch => {
    dispatch(loginPending());
    const response = await getUserToken(user);

    if (response && response.ok) {
        const data = await response.json();

        storage.set(AUTH_TOKEN_KEY, data.token);
        dispatch(loginSuccess(data.token));
    } else if (response && response.status === 401) {
        dispatch(loginFail(SERVER_ERROR_TYPES.INVALID_CREDENTIALS));
    } else {
        dispatch(loginFail(SERVER_ERROR_TYPES.UNKNOWN));
    }
};
