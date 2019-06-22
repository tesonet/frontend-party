// @flow
import { createActions } from 'redux-arc';

import { apiServerUrl } from 'config';


const actions = createActions('auth', {
    getToken: {
        url: `${apiServerUrl}/tokens`,
        method: 'post',
    },
    logout: null,
});

export default actions;
