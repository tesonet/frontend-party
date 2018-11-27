import { USER_LOGGED_IN, USER_LOGGED_OUT } from '../types/typesUser';
import api from '../api';

export const userLoggedIn = user => ({
    type: USER_LOGGED_IN,
    user
});
export const userLoggedOut = user => ({
    type: USER_LOGGED_OUT,
    user
});

export const login = (crednetials) =>
    dispatch => api.user.login(JSON.stringify(crednetials))
        .then(
            token => {
                let user = {
                    username: crednetials.username,
                    token: token
                };
                localStorage.token = token;
                dispatch(userLoggedIn(user));
            }
        );

export const logout = () => dispatch => {
    localStorage.removeItem('token');
    dispatch(userLoggedOut());
}