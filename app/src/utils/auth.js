import {
  getAuthorizationToken,
} from './lsHelper.js';

class Auth {
  constructor() {
    this.isAuthenticated = false;
  }
  isAuthorized() {
    const token = getAuthorizationToken();
    if (!!token) {
      this.isAuthenticated = true;
      return true;
    }
    return false;

  }
  authorize() {
    this.isAuthenticated = true;
  }

  unauthorize() {
    this.isAuthenticated = false;
  }
}

export default new Auth();