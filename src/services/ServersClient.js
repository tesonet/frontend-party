import RestClient from './RestClient';

class ServersClient extends RestClient {
    constructor() {
        super('https://playground.tesonet.lt/v1/');
    }

    getServers(token) {
        return this.get('servers', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
    }
}

export default ServersClient;
