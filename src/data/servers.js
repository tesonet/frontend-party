import API from './api';

class ServersAPI extends API {
  async getServers(token) {
    const data = await this.get(
      'servers',
      {
        Authorization: `Bearer ${token}`
      }
    );

    return data;
  }
}

export default ServersAPI;
