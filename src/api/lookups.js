// REST Handlers
import REST from './rest';

// Utils
import {
    getLocalUserToken,
} from '../lib/utils';

/**
 * Get User from Rest by token
 *
 * Returns null if no token or error with API call
 * @returns {Promise<*>}
 */
const getUserWithToken = async () => {
    const token = getLocalUserToken();

    if (token) {
        const { error, result } = await REST.validateUser(token);
        if (error) {
            return null;
        } else {
            return result;
        }
    } else {
        return null;
    }
};

export {
    getUserWithToken,
};
