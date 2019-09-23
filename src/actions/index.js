import * as types from '../constants/types';
import { getUserToken } from '../api/teso';
import storage from '../utils/localStorage';
import { AUTH_TOKEN_KEY } from '../constants/token';

const loginSuccess = payload => ({
    type: types.LOGIN_SUCCESS,
    payload
});

export const loginUser = user => async dispatch => {
    const data = await getUserToken(user);

    if (data.message) {
        console.log(data);
    } else {
        storage.set(AUTH_TOKEN_KEY, data.token);
        dispatch(loginSuccess(data.token));
    }
};
