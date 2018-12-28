import {
  getAuthorizationToken,
  setAuthorizationToken,
} from './lsHelper.js';

class Auth {
  constructor() {
    const token = getAuthorizationToken();
    this.isAuthenticated = !!token ? true: false;
  }

  authorize(isAuthorized, token = {}) {
    this.isAuthenticated = isAuthorized;
    setAuthorizationToken(token);
  }
}

export default new Auth();