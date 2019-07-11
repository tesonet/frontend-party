import { ActionType } from 'redux-promise-middleware';
import { Action } from '../common/types';
import * as authService from '../services/auth.service';
import { SERVER_ERROR_MESSAGES } from '../common/constants';

const LOGIN = 'app/auth/LOGIN';
const LOGOUT = 'app/auth/LOGOUT';

export type AuthState = {
    token: string | null;
    loading: boolean;
    errorMessage: string | null;
};

export const defaultState: AuthState = {
    token: null,
    loading: false,
    errorMessage: null,
};

const reducer = (state: AuthState = defaultState, action: Action) => {
    switch (action.type) {
        case LOGOUT: {
            return {
                ...defaultState,
            };
        }
        case `${LOGIN}_${ActionType.Pending}`: {
            return {
                ...state,
                loading: true,
                errorMessage: null,
            };
        }
        case `${LOGIN}_${ActionType.Fulfilled}`: {
            return {
                ...state,
                loading: false,
                token: action.payload.data.token,
            };
        }
        case `${LOGIN}_${ActionType.Rejected}`: {
            const { response } = action.payload;

            return {
                ...state,
                loading: false,
                errorMessage:
                    response && response.status && response.status === 401
                        ? SERVER_ERROR_MESSAGES.INVALID
                        : SERVER_ERROR_MESSAGES.UNKNOWN,
            };
        }
        default:
            return state;
    }
};

export default reducer;

type LoginProps = {
    username: string;
    password: string;
};

const login = ({ username, password }: LoginProps): any => ({
    type: LOGIN,
    payload: authService.login(username, password),
});

const logout = () => ({
    type: LOGOUT,
});

const isAuthenticated = (state: AuthState): boolean => !!state.token;

export const actions = {
    login,
    logout,
};

export const selectors = {
    isAuthenticated,
};
