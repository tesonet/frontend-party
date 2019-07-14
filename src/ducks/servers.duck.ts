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

export type SortParamsType = {
    key?: string;
    order?: string;
};

type ServerListType = {
    name: string;
    distance: number;
};

export type ServersState = {
    serverList: ServerListType[];
    sortParams: SortParamsType;
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

const serverListSelector = (state): ServerListType[] => (state.servers && state.servers.serverList) || [];
const sortSelector = (state): SortParamsType => state.servers && state.servers.sortParams;

const getSortedServers = createSelector(
    serverListSelector,
    sortSelector,
    (servers, sort): ServerListType[] => {
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
