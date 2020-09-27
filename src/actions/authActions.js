import createAuthMethods from '../services/ceateAuthMethods';
import types from '../types/authTypes';
import resolveLoginError from '../utils/resolveLoginError';

const login = (credentials, history) => async (dispatch) => {
    dispatch({ type: types.LOGIN_REQUEST });
    const client = createAuthMethods();

    try {
        const response = await client.login(credentials);
        const authToken = response.data.token;
        localStorage.setItem('token', authToken);

        dispatch({ type: types.LOGIN_SUCCESS });
        history.push('/servers');
    } catch (error) {
        dispatch({ type: types.LOGIN_FAILURE });
        resolveLoginError(error);
    }
};

const logout = (history) => async (dispatch) => {
    localStorage.removeItem('token');
    dispatch({ type: types.LOGOUT });
    history.push('/');
};

export default {
    login,
    logout,
};
