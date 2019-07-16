import axios from 'axios';

const logoutService = () => {
    localStorage.removeItem('token');
};

const loginService = (username, password) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
    };

    const authData = {
        username,
        password
    };

    const url = 'http://playground.tesonet.lt/v1/tokens';

    return axios.post(url, authData, requestOptions)
        .then((response) => {
            const { token } = response.data;

            if (response.status !== 200) {
                if (response.status === 401) {
                    logoutService();
                    window.location.reload(true);
                }
                return Promise.reject(new Error('Something went wrong'));
            }
            localStorage.setItem('token', JSON.stringify(token));
            return token;
        });
};

export { loginService, logoutService };
