import loginBackground from '../../images/bg.png';
import loginLogo from '../../images/logotype-testio.png';
import passwordIcon from '../../images/ico-lock.png';
import usernameIcon from '../../images/ico-username.png';
import serversLogo from '../../images/servers-logo.png';
import logout from '../../images/logout.png';

export const BASE_URL = 'http://playground.tesonet.lt';

export const ROUTES = {
    login: '/login',
    serversList: '/servers-list'
};

export const ASSETS = {
    loginBackground,
    loginLogo,
    passwordIcon,
    usernameIcon,
    serversLogo,
    logout
};

export const COLORS = {
    erroMessage: '#ff2c33',
    inputFieldError: '#d11124',
    inputTextColor: '#999',
    loginPageBackground: '#0b0f27',
    submitButton: '#9fd533',
    submitButtonOnHover: '#86b300',
    submitButtonText: '#fff',
    listItemTextColor: '#666666',
    listHeaderBackgroundColor: '#f5f5f5',
    logoutOnHover: '#99cc33'
};

export const DEFAULT_LOCALE = 'en';
