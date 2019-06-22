/* eslint-disable no-param-reassign */
// @flow
import { createReducer } from 'redux-starter-kit';
import get from 'lodash/get';
import orderBy from 'lodash/orderBy';

import actions from './actions';


export type ServerT = {
    id: string,
    name: string,
    distance: string,
};

export type ServerListReducerT = {
    servers: ServerT[],
    isGetServersInProcessing: boolean
};

const initialState = {
    servers: [],
    isGetServersInProcessing: false,
};

const reducer = createReducer(initialState, {
    [actions.types.GET_SERVER_LIST.REQUEST]: (state: ServerListReducerT) => {
        state.isGetServersInProcessing = true;
    },
    [actions.types.GET_SERVER_LIST.RESPONSE]: (state: ServerListReducerT, action) => {
        if (!action.error) {
            const servers = get(action, 'payload', []);

            state.servers = orderBy(servers, ['distance', 'name']).map(({
                name,
                distance,
            }) => ({
                id: `${name}-${distance}`,
                name,
                distance,
            }));
        }

        state.isGetServersInProcessing = false;
    },
});

export default reducer;
