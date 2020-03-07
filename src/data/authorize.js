import API from './api';

class AuthAPI extends API {
  async login({ username, password }) {
    const data = await this.post('tokens', { username, password });

    return data.token;
  }
}

export default AuthAPI;
