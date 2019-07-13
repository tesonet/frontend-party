import { ActionType } from 'redux-promise-middleware';
import { Dispatch } from 'redux';
import { createSelector } from 'reselect';
import { Action } from '../common/types';
import * as serversService from '../services/servers.service';
import { AuthState } from './auth.duck';
import { sortBy } from '../utils/helpers';
import { SERVER_ERROR_MESSAGES } from '../common/constants';

const FETCH = 'app/servers/FETCH';
const SET_SORT = 'app/servers/SET_SORT';

export type SortType = {
    key?: string;
    order?: string;
};

type ServerListType = {
    name: string;
    distance: number;
};

export type ServersState = {
    serverList: ServerListType[];
    sortParams: SortType;
    loading: boolean;
    errorMessage: string | null;
};

export const defaultState: ServersState = {
    serverList: [],
    sortParams: {},
    loading: false,
    errorMessage: null,
};

const reducer = (state: ServersState = defaultState, action: Action) => {
    switch (action.type) {
        case `${FETCH}_${ActionType.Pending}`: {
            return {
                ...state,
                loading: true,
                errorMessage: null,
            };
        }
        case `${FETCH}_${ActionType.Fulfilled}`: {
            return {
                ...state,
                loading: false,
                serverList: action.payload.data,
            };
        }
        case `${FETCH}_${ActionType.Rejected}`: {
            return {
                ...state,
                loading: false,
                errorMessage: SERVER_ERROR_MESSAGES.UNKNOWN,
            };
        }
        case SET_SORT: {
            return {
                ...state,
                sortParams: action.payload.data,
            };
        }
        default:
            return state;
    }
};

export default reducer;

export const serverListSelector = state => (state.servers && state.servers.serverList) || [];
export const sortSelector = state => state.servers && state.servers.sortParams;

export const getSortedServers = createSelector(
    serverListSelector,
    sortSelector,
    (servers, sort) => {
        if (!sort) {
            return servers;
        }

        const sortedList = servers.concat().sort(sortBy(sort.key));

        return sort.order === 'desc' ? sortedList : sortedList.reverse();
    }
);

const fetchServers = () => (dispatch: Dispatch, getState: () => { session: AuthState }) =>
    dispatch({
        type: FETCH,
        payload: serversService.get(getState().session.token!),
    });

const setSortParams = sortKey => (dispatch: Dispatch, getState: () => { servers: ServersState }) => {
    const { order } = getState().servers.sortParams;

    dispatch({
        type: SET_SORT,
        payload: {
            data: {
                key: sortKey,
                order: order === 'desc' ? 'asc' : 'desc',
            },
        },
    });
};

export const selectors = {
    getSortedServers,
    sortSelector,
};

export const actions = {
    fetchServers,
    setSortParams,
};
