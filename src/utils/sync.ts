import { Store } from 'redux';
import storage from './storage';
import { defaultState as defaultAuthState } from '../ducks/auth.duck';

export const loadTokenFromStorage = () => {
    const token = storage.get('token');

    return {
        session: {
            ...defaultAuthState,
            token: token || null,
        },
    };
};

export const tokenToStorageSync = (store: Store<any, any>) => {
    let prevToken;

    store.subscribe(() => {
        const { token } = store.getState().session;

        if (token === prevToken) {
            return;
        }

        if (token) {
            storage.set('token', token);
        } else {
            storage.remove('token');
        }

        prevToken = token;
    });
};
