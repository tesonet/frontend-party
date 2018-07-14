import axios from 'axios';
import { getFromLocalStorage } from '../../common/util/localStorage.util';
const ENDPOINT = 'http://playground.tesonet.lt/v1';

const getServers = () => {
    const session = getFromLocalStorage('session');
    console.log(session);
    return axios({
        method: 'GET',
        url: `${ENDPOINT}/servers`,
        headers: {
            Authorization: `${session.token}`,
        }
    });
};

export default {
    getServers,
};
