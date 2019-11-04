/**
 * Handle get user token by geting from browser's local storage
 * @returns {string}
 */
const getLocalUserToken = () => {
    return localStorage.getItem('userToken');
};

/**
 * Handle save user token by saving to browser's local storage
 * @param token
 */
const setLocalUserToken = (token) => {
    return localStorage.setItem('userToken', token);
};
/**
 * Utils Function to validate input params by defined scenarios
 * @param username
 * @param password
 */
const validateLoginInputParams = ({ username, password }) => {
    const errors = {};

    if (!username) {
        errors.username = {
            message: `Username cannot be blank.`,
        }
    } else if (username.length > 40) {
        errors.username = {
            message: `Username can't be longer than 40 characters`,
        }
    }

    if (!password) {
        errors.password = {
            message: `Password cannot be blank.`,
        }
    }

    return Object.keys(errors).length ? errors : null;
};

export {
    getLocalUserToken,
    setLocalUserToken,
    validateLoginInputParams,
}
