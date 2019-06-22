// @flow

import { createAsyncMiddleware } from 'redux-arc';
import axios from 'axios';

const asyncTask = store => done => (options) => {
    const { auth } = store.getState();
    const { method, url, payload } = options;
    const config = {
        url,
        method,
        data: {},
        headers: {},
    };

    if (method.toLowerCase() === 'post') {
        config.data = payload;
    }

    if (auth.token) {
        config.headers.Authorization = `Bearer ${auth.token}`;
    }

    return axios.request(config).then(
        response => done(null, response.data),
        error => done(error.response.data),
    );
};

const asyncMiddleware = createAsyncMiddleware(asyncTask);

export default asyncMiddleware;
