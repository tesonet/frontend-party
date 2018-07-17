import { SET_TOKEN } from '../features/token/constants';
import { createLocalStorageMiddleware } from '../utils/localStorage/middleware';
import { setLocalStorageData } from '../utils/localStorage/utils';
import { PARTY_TOKEN } from './localStorageKeys';

const setPartyToken = (action: any) => setLocalStorageData<string>(PARTY_TOKEN, action.payload || null);

export default createLocalStorageMiddleware({
    [SET_TOKEN]: setPartyToken
});
