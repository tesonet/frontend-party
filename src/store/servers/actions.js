// @flow
import { createActions } from 'redux-arc';

import { apiServerUrl } from 'config';


const actions = createActions('servers', {
    getServerList: {
        url: `${apiServerUrl}/servers`,
        method: 'get',
    },
});

export default actions;
