import RestClient from './RestClient';

class AuthClient extends RestClient {
    constructor() {
        super('https://playground.tesonet.lt/v1/');
    }

    login(credentials) {
        return this.post(
            'tokens',
            { ...credentials },
            { headers: { 'Content-Type': 'application/json' } },
        );
    }
}

export default AuthClient;
