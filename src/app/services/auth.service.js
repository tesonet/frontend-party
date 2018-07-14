import axios from 'axios';

const ENDPOINT = 'http://playground.tesonet.lt/v1';

export const login = ({ username, password }) =>
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