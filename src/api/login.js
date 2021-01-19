import {LOGIN} from "../config/api-endpoints";


export function login(payload) {

    const params = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    };

    return fetch(LOGIN, params).then(response => {
        if (!response.ok) throw Error(response.statusText);
        return response.json();
    })
}
