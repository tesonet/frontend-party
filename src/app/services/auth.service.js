import axios from 'axios';
import { removeFromLocalStorage } from '../../common/util/localStorage.util';

const ENDPOINT = 'http://playground.tesonet.lt/v1';

const login = ({ username, password }) =>
    axios({
        method: 'POST',
        url: `${ENDPOINT}/tokens`,
        data: {
            username,
            password,
        },
        // headers: {
        //     'Content-Type': 'application/x-www-form-urlencoded',
        // },
    });

const logOut = () => removeFromLocalStorage('session');

export default {
    login,
    logOut,
};
