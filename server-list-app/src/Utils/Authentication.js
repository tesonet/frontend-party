class Authentication {
    static storeToken(tokenObj) {
      window.localStorage.setItem("authToken", tokenObj ? tokenObj.token : null);
    }

    static clearToken() {
      window.localStorage.removeItem("authToken");
    }

    static getStoredToken() {
      return window.localStorage.getItem("authToken");
    }

    static isAuthenticated() {
      return !!window.localStorage.getItem("authToken");
    }

}

export default Authentication;