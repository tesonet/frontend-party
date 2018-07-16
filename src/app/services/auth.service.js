import axios from 'axios';
import { removeFromLocalStorage, getFromLocalStorage } from '../../common/util/localStorage.util';

const ENDPOINT = 'http://playground.tesonet.lt/v1';

const login = ({ username, password }) =>
    axios({
        method: 'POST',
        url: `${ENDPOINT}/tokens`,
        data: {
            username,
            password,
        },
    });

const logOut = () => removeFromLocalStorage('session');

const isAuthenticated = () => !!getFromLocalStorage('session');

export default {
    login,
    logOut,
    isAuthenticated,
};
