const baseConfig = {
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
        'Content-Type': 'application/json'
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer'
};

export default {
    login: function (name, pass) {
        return fetch('http://playground.tesonet.lt/v1/tokens', {
            ...baseConfig,
            method: 'POST',
            body: JSON.stringify({"username": name, "password": pass})
        }).then(e => e.json())
    },
    getServers: function () {
        return fetch('http://playground.tesonet.lt/v1/servers', {
            ...baseConfig,
            method: 'GET',
            headers: {
                ...baseConfig.headers,
                'Authorization': `${localStorage.getItem('token')}`
            }
        }).then(e => e.json())
    }
}

