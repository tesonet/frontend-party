// REST Handlers
import REST from './rest';

// Utils
import { getLocalUserToken, } from '/lib/utils';

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
            // Since We don't have validate user API End point I'm returning hardcoded value "token"
            return { token };
        }
    } else {
        return null;
    }
};


const getServers = async () => {
    const token = getLocalUserToken();
    if (token) {
        const { error, result } = await REST.getServers(token);
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
    getServers,
};
