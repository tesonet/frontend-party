// REST Handlers
import REST from './rest';

// Utils
import { setLocalUserToken } from '/lib/utils';

// Components
import message from '/ui/components/common/message';

/**
 * Login function to handle user authentication, user tokens and user messages
 * @param username
 * @param password
 * @returns {Promise<null | {user}>}
 */
const login = async ({ username, password }) => {
    const { error, result } = await REST.login({ username, password });
    if (error) {
        if (error === 'unauthorized') {
            // Handle Error Messages
            message.error('Invalid Username or Password.');
        } else {
            // Handle Error Messages
            message.error(error.message || 'Login Failed.');
        }

        return null;
    } else {
        const { token } = result;

        // Set user token to local storage
        setLocalUserToken(token);

        // Show success message
        message.success('Successfully logged in!');

        return { token };
    }
};


export {
    login,
}
