import axios from 'axios';

export default {

    user: {
        login: (credentials) =>
            axios.post('http://playground.tesonet.lt/v1/tokens',
                credentials,
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }).then(res => res.data.token),

        getData: () =>
            axios.get('http://playground.tesonet.lt/v1/servers',
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': localStorage.token
                    }
                }).then(res => res.data)
    }
};