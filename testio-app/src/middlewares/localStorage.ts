import { LOGIN_TOGGLER, SET_TOKEN } from '../features/user/constants';
import { IS_LOGGED_IN, PARTY_TOKEN } from '../localStorageKeys';
import { createLocalStorageMiddleware } from '../utils/localStorage/middleware';
import { setLocalStorageData } from '../utils/localStorage/utils';

const setPartyToken = ({ payload }: IAction<string>) =>
    setLocalStorageData<string | null>(PARTY_TOKEN, payload || null);

const setLoginState  = ({ payload }: IAction<string>) => {
    const value = payload ? '1' : '0';
    setLocalStorageData<string | null>(IS_LOGGED_IN, value || '0');
}

export default createLocalStorageMiddleware({
    [SET_TOKEN]: setPartyToken,
    [LOGIN_TOGGLER]: setLoginState
});
